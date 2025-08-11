---

title: DB_GetMemHandle
sidebar_label: DB_GetMemHandle
description: Obtém o handle de memória para uma conexão SQLite aberta com `DB_Open`.
keywords:
  - sqlite
tags: ["sqlite"]

---

## Descrição

Obtém o handle de memória para uma conexão SQLite aberta com [DB_Open](DB_Open).

| Nome   | Descrição                                                          |
| ------ | ------------------------------------------------------------------ |
| DB:db | Índice da conexão com o banco (retornado por [DB_Open](DB_Open)). |

## Retorno

Retorna o handle de memória da conexão do banco de dados.

## Exemplo

```c
static DB:gDBConnectionHandle;

public OnGameModeInit()
{
    gDBConnectionHandle = DB_Open("example.db");

    if (gDBConnectionHandle)
    {
        print("Conexão com banco \"example.db\" criada com sucesso.");
        printf("Handle de memória da conexão: 0x%x", DB_GetMemHandle(gDBConnectionHandle));
    }
    else
    {
        print("Falha ao abrir conexão com banco \"example.db\".");
    }

    return 1;
}

public OnGameModeExit()
{
    if (DB_Close(gDBConnectionHandle))
    {
        gDBConnectionHandle = DB:0;
    }
    return 1;
}
```

## Notas

## Funções Relacionadas

* [DB_Open](DB_Open): Abre conexão com banco SQLite
* [DB_Close](DB_Close): Fecha conexão com banco SQLite
* [DB_ExecuteQuery](DB_ExecuteQuery): Executa consulta no banco
* [DB_FreeResultSet](DB_FreeResultSet): Libera memória do resultado
* [DB_GetRowCount](DB_GetRowCount): Obtém número de linhas do resultado
* [DB_SelectNextRow](DB_SelectNextRow): Avança para próxima linha
* [DB_GetFieldCount](DB_GetFieldCount): Obtém número de campos do resultado
* [DB_GetFieldName](DB_GetFieldName): Retorna nome do campo pelo índice
* [DB_GetFieldString](DB_GetFieldString): Obtém conteúdo do campo pelo índice
* [DB_GetFieldStringByName](DB_GetFieldStringByName): Obtém conteúdo do campo pelo nome
* [DB_GetFieldInt](DB_GetFieldInt): Obtém conteúdo do campo como inteiro pelo índice
* [DB_GetFieldIntByName](DB_GetFieldIntByName): Obtém conteúdo do campo como inteiro pelo nome
* [DB_GetFieldFloat](DB_GetFieldFloat): Obtém conteúdo do campo como float pelo índice
* [DB_GetFieldFloatByName](DB_GetFieldFloatByName): Obtém conteúdo do campo como float pelo nome
* [DB_GetMemHandle](DB_GetMemHandle): Obtém handle de memória do banco aberto com DB_Open
* [DB_GetLegacyDBResult](DB_GetLegacyDBResult): Obtém handle de memória do resultado DB_ExecuteQuery
* [DB_GetDatabaseConnectionCount](DB_GetDatabaseConnectionCount): Número de conexões abertas
* [DB_GetDatabaseResultSetCount](DB_GetDatabaseResultSetCount): Número de resultados abertos
