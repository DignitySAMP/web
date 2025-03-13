---
title: GetPlayerPickupVirtualWorld
sidebar_label: GetPlayerPickupVirtualWorld
description: 获取玩家拾取物的虚拟世界ID
tags: ["玩家", "拾取物", "玩家拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家拾取物的虚拟世界 ID

| 参数名   | 说明                                |
| -------- | ----------------------------------- |
| playerid | 玩家 ID                             |
| pickupid | 需要获取虚拟世界 ID 的玩家拾取物 ID |

## 返回值

返回玩家拾取物所在的虚拟世界 ID

## 示例代码

```c
new PlayerPickup[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    PlayerPickup[playerid] = CreatePlayerPickup(playerid, 1239, 1, 2010.0979, 1222.0642, 10.8206, 20);

    new worldid = GetPlayerPickupVirtualWorld(playerid, PlayerPickup[playerid]);
    // worldid = 20
    return 1;
}
```

## 相关函数

- [CreatePlayerPickup](CreatePlayerPickup): 创建仅对单个玩家可见的拾取物
- [DestroyPlayerPickup](DestroyPlayerPickup): 销毁玩家拾取物
- [IsValidPlayerPickup](IsValidPlayerPickup): 验证玩家拾取物是否有效
- [IsPlayerPickupStreamedIn](IsPlayerPickupStreamedIn): 检查玩家拾取物是否已流加载给玩家
- [SetPlayerPickupPos](SetPlayerPickupPos): 设置玩家拾取物坐标
- [GetPlayerPickupPos](GetPlayerPickupPos): 获取玩家拾取物坐标
- [SetPlayerPickupModel](SetPlayerPickupModel): 设置玩家拾取物模型
- [GetPlayerPickupModel](GetPlayerPickupModel): 获取玩家拾取物模型 ID
- [SetPlayerPickupType](SetPlayerPickupType): 设置玩家拾取物类型
- [GetPlayerPickupType](GetPlayerPickupType): 获取玩家拾取物类型
- [SetPlayerPickupVirtualWorld](SetPlayerPickupVirtualWorld): 设置玩家拾取物虚拟世界 ID
