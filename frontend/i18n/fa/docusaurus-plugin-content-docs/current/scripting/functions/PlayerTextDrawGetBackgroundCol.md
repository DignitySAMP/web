---
title: PlayerTextDrawGetBackgroundCol
sidebar_label: PlayerTextDrawGetBackgroundCol
description: رنگ background یک player-textdraw رو برمی‌گردونه
tags: ["player", "textdraw", "playertextdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ background یک player-textdraw رو برمی‌گردونه

| اسم               | توضیحات                                                      |
| ----------------- | ------------------------------------------------------------ |
| playerid          | شناسه بازیکن                                                 |
| PlayerText:textid | شناسه player textdraw که می‌خوای background color رو ازش بگیری |

## مقدار برگشتی

رنگ background player-textdraw رو برمی‌گردونه.

## مثال‌ها

```c
new PlayerText:pTextdraw[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    pTextdraw[playerid] = CreatePlayerTextDraw(playerid, 320.0, 240.0, "Welcome to my OPEN.MP server");
    PlayerTextDrawSetOutline(playerid, pTextdraw[playerid], 1);
    PlayerTextDrawBackgroundColor(playerid, pTextdraw[playerid], 0x00FF00FF);
    PlayerTextDrawShow(playerid, pTextdraw[playerid]);

    new backgroundColor = PlayerTextDrawGetBackgroundCol(playerid, pTextdraw[playerid]);
    // backgroundColor = 0x00FF00FF
    return 1;
}
```

## توابع مرتبط

- [CreatePlayerTextDraw](CreatePlayerTextDraw): ساخت یک player-textdraw.
- [PlayerTextDrawDestroy](PlayerTextDrawDestroy): پاک کردن یک player-textdraw.
- [PlayerTextDrawBoxColor](PlayerTextDrawBoxColor): تنظیم رنگ جعبه player-textdraw.
- [PlayerTextDrawBackgroundColor](PlayerTextDrawBackgroundColor): تنظیم رنگ background یک player-textdraw.
- [PlayerTextDrawAlignment](PlayerTextDrawAlignment): تنظیم alignment یک player-textdraw.
- [PlayerTextDrawFont](PlayerTextDrawFont): تنظیم فونت یک player-textdraw.
- [PlayerTextDrawLetterSize](PlayerTextDrawLetterSize): تنظیم اندازه حروف متن در player-textdraw.
- [PlayerTextDrawTextSize](PlayerTextDrawTextSize): تنظیم اندازه جعبه player-textdraw (یا ناحیه قابل کلیک برای PlayerTextDrawSetSelectable).
- [PlayerTextDrawSetOutline](PlayerTextDrawSetOutline): روشن/خاموش کردن outline در player-textdraw.
- [PlayerTextDrawSetShadow](PlayerTextDrawSetShadow): تنظیم سایه در player-textdraw.
- [PlayerTextDrawSetProportional](PlayerTextDrawSetProportional): تنظیم فاصله متن در player-textdraw با نسبت متناسب.
- [PlayerTextDrawUseBox](PlayerTextDrawUseBox): روشن/خاموش کردن جعبه در player-textdraw.
- [PlayerTextDrawSetString](PlayerTextDrawSetString): تنظیم متن یک player-textdraw.
- [PlayerTextDrawShow](PlayerTextDrawShow): نمایش یک player-textdraw.
- [PlayerTextDrawHide](PlayerTextDrawHide): مخفی کردن یک player-textdraw.