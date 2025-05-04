import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import Image from "@theme/ThemedImage";
import clsx from "clsx";

import Admonition from "../components/Admonition";
import styles from "./index.module.css";

const socials = [
  {
    alt: "Discord icon",
    src: "/images/assets/discord-icon.svg",
    href: "https://discord.com/invite/samp",
    size: 45,
  },
  {
    alt: "Facebook icon",
    src: "/images/assets/facebook.svg",
    href: "https://www.facebook.com/openmultiplayer",
    size: 33,
  },
  {
    alt: "Instagram icon",
    src: "/images/assets/instagram.svg",
    href: "https://instagram.com/openmultiplayer/",
    size: 33,
  },
  {
    alt: "Twitch icon",
    src: "/images/assets/twitch.svg",
    href: "https://twitch.tv/openmultiplayer",
    size: 29,
  },
  {
    alt: "X (formerly Twitter) icon",
    src: "/images/assets/x.svg",
    href: "https://x.com/openmultiplayer",
    size: 29,
  },
  {
    alt: "YouTube icon",
    src: "/images/assets/youtube.svg",
    href: "https://youtube.com/openmultiplayer",
    size: 35,
  },
];

const HomepageHeader = () => {

  const SocialIcons = () => {
    return (
      <div className={styles.socialLinks}>
        {socials.map((social, index) => (
          <a 
            key={index} 
            href={social.href} 
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.alt}
          >
            <Image
              sources={{ 
                light: social.src, 
                dark: social.src 
              }}
              alt={social.alt}
              width={social.size}
              height={social.size}
              className={styles.socialIcon}
            />
          </a>
        ))}
      </div>
    );
  };

  return (
    <header className={styles.heroBanner}>
      
      <Admonition
        className={styles.announcement}
        type="tip"
        title="A new version of open.mp server and launcher is out now!"
      >
        Version <b>1.4.0.2779</b> of open.mp server is out with many fixes,
        performance boosts, and new features!{" "}
        <Link 
          to="https://www.open.mp/docs/changelog" 
          className={styles.enhancedLink}
        >
          Changelog
        </Link> |{" "}
        <Link 
          to="https://github.com/openmultiplayer/open.mp/releases/latest"
          className={styles.enhancedLink}
        >
          Download
        </Link>
        .
        <br />
        The launcher also got an update!{" "}
        <Link 
          to="https://github.com/openmultiplayer/launcher/releases/latest"
          className={styles.enhancedLink}
        >
          See what's new
        </Link>
        .
      </Admonition>
      
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            Open Multiplayer
          </Heading>
          <p className={styles.heroDescription}>
            A brand new multiplayer mod for Grand Theft Auto: San Andreas that
            is <b>fully backwards compatible</b> with{" "}
            <b>San Andreas Multiplayer</b>.
          </p>
        </div>
        
        <div className={styles.heroButtons}>
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            title="Download open.mp launcher"
            to="https://github.com/openmultiplayer/launcher/releases/latest"
          >
            Download Launcher 🎮
          </Link>
          
          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            title="open.mp is released!"
            to="https://github.com/openmultiplayer/open.mp/releases/latest"
          >
            Download Server 🖥️
          </Link>
          
          <Link
            className={clsx("button button--secondary button--lg", styles.button)}
            to="/docs"
          >
            Documentation 📜
          </Link>
        </div>
      </div>
      
      <SocialIcons />
    </header>
  );
};

const Home = (): JSX.Element => {
  return (
    <Layout
      title="Open Multiplayer"
      description="A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards compatible with San Andreas Multiplayer"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;