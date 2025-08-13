---
title: SetPickupModel
sidebar_label: SetPickupModel
description: model یک pickup رو تنظیم می‌کنه.
tags: ["pickup"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

model یک pickup رو تنظیم می‌کنه.

| نام               | توضیح                                 |
|--------------------|---------------------------------------------|
| pickupid           | ID pickup.                       |
| model              | [model](../resources/pickupids) برای تنظیم. |
| bool:update = true | pickup رو برای همه آپدیت کنه. (true/false)    |

## مقادیر بازگشتی

این function همیشه **true** بر می‌گردونه.

## مثال‌ها

```c
new g_Pickup;

public OnGameModeInit()
{
    g_Pickup = CreatePickup(1239, 1, 1686.6160, 1455.4277, 10.7705, -1);

    SetPickupModel(g_Pickup, 1210);
    return 1;
}
```

## توابع مرتبط

- [CreatePickup](CreatePickup): pickup می‌سازه.
- [AddStaticPickup](AddStaticPickup): static pickup اضافه می‌کنه.
- [DestroyPickup](DestroyPickup): pickup رو از بین می‌بره.
- [IsValidPickup](IsValidPickup): چک می‌کنه که آیا pickup معتبره یا نه.
- [IsPickupStreamedIn](IsPickupStreamedIn): چک می‌کنه که آیا pickup برای بازیکن مشخص stream شده یا نه.
- [IsPickupHiddenForPlayer](IsPickupHiddenForPlayer): چک می‌کنه که آیا pickup برای بازیکن مشخص پنهان شده یا نه.
- [SetPickupPos](SetPickupPos): موقعیت pickup رو تنظیم می‌کنه.
- [GetPickupPos](GetPickupPos): مختصات pickup رو دریافت می‌کنه.
- [GetPickupModel](GetPickupModel): ID model یک pickup رو دریافت می‌کنه.
- [SetPickupType](SetPickupType): نوع pickup رو تنظیم می‌کنه.
- [GetPickupType](GetPickupType): نوع pickup رو دریافت می‌کنه.
- [SetPickupVirtualWorld](SetPickupVirtualWorld): ID virtual world یک pickup رو تنظیم می‌کنه.
- [GetPickupVirtualWorld](GetPickupVirtualWorld): ID virtual world یک pickup رو دریافت می‌کنه.
- [ShowPickupForPlayer](ShowPickupForPlayer): pickup رو برای بازیکن مشخص نشون می‌ده.
- [HidePickupForPlayer](HidePickupForPlayer): pickup رو برای بازیکن مشخص پنهان می‌کنه.
- [SetPickupForPlayer](SetPickupForPlayer): model، نوع، و موقعیت pickup رو برای بازیکن مشخص تنظیم می‌کنه.