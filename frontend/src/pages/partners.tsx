import Layout from "@theme/Layout";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { FixedSizeList } from "react-window";
import LoadingBanner from "../components/LoadingBanner";
import ServerRow from "../components/ServerRow";
import { ToastContainer } from "../components/Toast";
import { API_ADDRESS } from "../constants";
import { CoreServerData } from "../types";

const API_SERVERS = `${API_ADDRESS}/servers/`;

const getServers = async () => {
  try {
    const r: Response = await fetch(API_SERVERS);
    const servers: CoreServerData[] = await r.json();
    return servers;
  } catch (e) {
    return [];
  }
};

type Stats = {
  players: number;
  servers: number;
};

const getStats = (servers: CoreServerData[]): Stats => ({
  players: servers.map((s) => s.pc).reduce((acc, pc) => acc + pc, 0),
  servers: servers.length,
});

type SortBy = "relevance" | "pc";

type Query = {
  search?: string;
  sort: SortBy;
};

// Filters data
const filterServers = (data: CoreServerData[], q: Query): CoreServerData[] => {
  let filteredData = [...data];

  if (q.search) {
    const searchTerm = q.search.toLowerCase();
    filteredData = filteredData.filter(
      (s) =>
        s.ip.toLowerCase().includes(searchTerm) ||
        s.hn.toLowerCase().includes(searchTerm) ||
        s.gm.toLowerCase().includes(searchTerm)
    );
  }

  // Sorting Logic
  if (q.sort === "pc") {
    filteredData.sort((a, b) => b.pc - a.pc); // Sort by players, descending
  }
  //Relevance would be the original order

  return filteredData;
};

const StatsComponent = ({ stats: { players, servers } }: { stats: Stats }) => {
  return (
    <div className="servers-center">
      <p className="servers-stats">
        <strong>{players}</strong> players on <strong>{servers}</strong> servers
        with an average of <strong>{(players / servers).toFixed(1)}</strong>{" "}
        players per server.
      </p>
    </div>
  );
};

// List Component
const List = ({ data }: { data: CoreServerData[] }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortBy>("relevance");

  const filteredData = useMemo(() => {
    return filterServers(data, {
      search,
      sort,
    });
  }, [data, search, sort]);

  const rowHeight = 134;
  const listHeight = 1000;
  const visibleItems = Math.floor(listHeight / rowHeight);

  const Row = ({ index, style }) => {
    const server = filteredData[index];
    return (
      <div style={style}>
        <ServerRow key={server.ip} server={server} />
      </div>
    );
  };

  return (
    <>
      <form className="servers-list-form">
        <div className="servers-controls">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortBy)}
            className="servers-select"
          >
            <option value="relevance">Relevance</option>
            <option value="pc">Players</option>
          </select>

          <input
            type="text"
            placeholder="Search by IP or Name"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="servers-search"
          />
        </div>
      </form>

      <StatsComponent stats={getStats(data)} />

      <FixedSizeList
        height={(filteredData.length + 1) * rowHeight}
        width="100%"
        itemSize={rowHeight}
        itemCount={filteredData.length}
        overscanCount={visibleItems}
      >
        {Row}
      </FixedSizeList>
    </>
  );
};

const Page = (): ReactNode => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CoreServerData[]>([]);

  useEffect(() => {
    getServers().then((servers) => {
      setLoading(false);
      setData(servers.filter((server) => server.pr));
    });
  }, []);

  return (
    <div>
      <Layout
        title={`Servers`}
        description="List of San Andreas servers partnered with open.mp"
      >
        <section className="servers-container">
          <p>
            <b>
              Note: The partnership program application is temporarily closed as
              promised. Servers that have already reserved a slot can still
              join, but we are not accepting new requests at this time. If you
              have any questions, feel free to ask on our Discord. However, if
              your question is about new ways to get on the list, we currently
              have no plans for that.
            </b>
          </p>
          {loading ? <LoadingBanner /> : <List data={data} />}
        </section>
      </Layout>
      <ToastContainer />
    </div>
  );
};

export default Page;
