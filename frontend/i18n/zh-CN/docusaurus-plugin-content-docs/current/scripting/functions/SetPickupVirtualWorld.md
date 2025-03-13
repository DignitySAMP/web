---
title: SetPickupVirtualWorld
sidebar_label: SetPickupVirtualWorld
description: 设置拾取物的虚拟世界ID。
tags: ["拾取物"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置拾取物的虚拟世界 ID。

| 参数         | 说明                |
| ------------ | ------------------- |
| pickupid     | 要设置的拾取物 ID   |
| virtualWorld | 要设置的虚拟世界 ID |

## 返回值

该函数总是返回 **true**。

## 示例代码

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, 20);

    SetPickupVirtualWorld(g_Pickup, 10);
    return 1;
}
```

## 相关函数

- [CreatePickup](CreatePickup): 创建一个拾取物
- [AddStaticPickup](AddStaticPickup): 添加静态拾取物
- [DestroyPickup](DestroyPickup): 销毁拾取物
- [IsValidPickup](IsValidPickup): 验证拾取物有效性
- [IsPickupStreamedIn](IsPickupStreamedIn): 检测拾取物是否已为玩家流加载
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): 检测拾取物是否对玩家隐藏
- [SetPickupPos](SetPickupPos): 设置拾取物坐标
- [GetPickupPos](GetPickupPos): 获取拾取物坐标
- [SetPickupModel](SetPickupModel): 设置拾取物模型
- [GetPickupModel](GetPickupModel): 获取拾取物模型 ID
- [SetPickupType](SetPickupType): 设置拾取物类型
- [GetPickupType](GetPickupType): 获取拾取物类型
- [GetPickupVirtualWorld](GetPickupVirtualWorld): 获取拾取物虚拟世界 ID
- [ShowPickupForPlayer](ShowPickupForPlayer): 为玩家显示拾取物
- [HidePickupForPlayer](HidePickupForPlayer): 对玩家隐藏拾取物
- [SetPickupForPlayer](SetPickupForPlayer): 为玩家调整拾取物模型/类型/位置
