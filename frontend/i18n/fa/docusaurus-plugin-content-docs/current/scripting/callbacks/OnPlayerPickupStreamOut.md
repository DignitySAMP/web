---
title: OnPlayerPickupStreamOut
sidebar_label: OnPlayerPickupStreamOut
description: این کالبک زمانی فراخوانده می‌شود که یک player-pickup از محدوده دید بازیکن خارج شود.
tags: ["player", "pickup", "playerpickup"]
---

<VersionWarn name='callback' version='omp v1.1.0.2612' />

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک player-pickup از محدوده دید بازیکن خارج شود.

| نام      | توضیحات                                                                                       |
| -------- | ---------------------------------------------------------------------------------------------- |
| pickupid | شناسه player-pickup، برگردانده شده توسط [CreatePlayerPickup](../functions/CreatePlayerPickup) |
| playerid | شناسه بازیکنی که player-pickup از محدوده دید او خارج شده است.                                 |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
new g_PlayerPickupHealth[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    g_PlayerPickupHealth[playerid] = CreatePlayerPickup(playerid, 1240, 2, 2009.8474, 1218.0459, 10.8175);
    return 1;
}

public OnPlayerPickupStreamOut(pickupid, playerid)
{
    if (pickupid == g_PlayerPickupHealth[playerid])
    {
        printf("g_PlayerPickupHealth is streamed out for player id %d", playerid);
    }
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerPickUpPlayerPickup](OnPlayerPickUpPlayerPickup): زمانی فراخوانده می‌شود که بازیکن player-pickup را برداشت کند.
- [OnPlayerPickupStreamIn](OnPlayerPickupStreamIn): زمانی فراخوانده می‌شود که player-pickup وارد محدوده دید بازیکن شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreatePlayerPickup](../functions/CreatePlayerPickup): ایجاد pickup که فقط برای یک بازیکن قابل مشاهده است.
- [DestroyPlayerPickup](../functions/DestroyPlayerPickup): حذف یک player-pickup.