---
title: floatcos
sidebar_label: floatcos
description: 获取指定角度的余弦值
tags: ["math", "floating-point"]
---

<LowercaseNoteZH_CN />

## 描述

获取指定角度的余弦值。输入角度可使用弧度、角度或梯度单位。

| 参数名         | 说明                                                                          |
| -------------- | ----------------------------------------------------------------------------- |
| Float:value    | 需要计算余弦值的角度                                                          |
| anglemode:mode | 使用的[角度模式](../resources/anglemodes)，根据输入值的单位而定（默认：弧度） |

## 返回值

输入值的余弦值。

## 示例

```c
public OnGameModeInit()
{
    printf("90°的余弦值为 %.0f", floatcos(90.0, degrees));
    // 输出：0
    return 1;
}
```

## 注意事项

:::warning

在大多数情况下，GTA/SA-MP 使用角度制表示方向，例如[GetPlayerFacingAngle](GetPlayerFacingAngle)。因此建议优先使用'degrees'角度模式而非弧度制。同时注意 GTA 的角度系统采用逆时针方向：270° 为东方，90° 为西方，南方仍为 180°，北方仍为 0°/360°。

:::

## 相关函数

- [floatsin](floatsin): 获取指定角度的正弦值
- [floattan](floattan): 获取指定角度的正切值

## 相关资源

- [角度模式](../resources/anglemodes): 测量角度的国际单位常量
