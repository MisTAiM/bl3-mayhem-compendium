<div align="center">

# 🔥 BL3 MAYHEM COMPENDIUM

**The ultimate Borderlands 3 reference — built for Vault Hunters who don't mess around.**

[![Live Site](https://img.shields.io/badge/▶_LIVE_SITE-Open_Now-F5A623?style=for-the-badge&color=F5A623)](https://bl3-mayhem-compendium-m6xn5jhd2-mistaims-projects.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-MisTAiM-181717?style=for-the-badge&logo=github)](https://github.com/MisTAiM/bl3-mayhem-compendium)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

![Mayhem](https://img.shields.io/badge/Mayhem-10%20%2F%2011-E8272A?style=flat-square)
![Level](https://img.shields.io/badge/Level_Cap-72-9B59B6?style=flat-square)
![VHs](https://img.shields.io/badge/Vault_Hunters-4-4A9BFF?style=flat-square)
![DLCs](https://img.shields.io/badge/DLCs-6_Covered-52C41A?style=flat-square)
![Deps](https://img.shields.io/badge/Dependencies-Zero-F5A623?style=flat-square)
![Ads](https://img.shields.io/badge/Ads-None-F5A623?style=flat-square)

<br/>

> *"Everything you need to go from story-mode to Hemovorous-farming machine — one site, no login, no bullshit."*

---

</div>

## What Is This?

A **single-page Borderlands 3 reference** covering every Vault Hunter from level 1 through Mayhem 11. No frameworks. No npm install. No login. Open the page and it works.

Built because the existing resources are scattered across five different wikis, three subreddits, and a YouTube video from 2020 that's been taken down.

---

## Features

| Section | What's Inside |
|---|---|
| 🏠 **Home Base** | Quick nav cards, M10 Cardinal Rules, element chart snapshot |
| ⚡ **Element Guide** | Full damage matrix — flesh, shield, armor, bone — every element, every matchup |
| 🌀 **Mayhem Modifiers** | All 25+ modifiers rated: free damage vs reroll immediately |
| 🔥 **Moze** | 4 skill trees · 4 builds · class mods · anointments · full L1→M11 guide |
| 🌊 **Amara** | Khaos Queen + Face-Puncher breakdowns · elemental chain guide |
| 🐾 **FL4K** | GITM Fade Away + Gamma Burst · Megavore mechanic · pet strategy |
| ⚙️ **Zane** | Seein' Dead loop · SNTNL cryo anoint · Playing Dirty burst explained |
| 🌍 **Planet Guide** | All planets — enemy health types, elemental weaknesses, farm zones |
| 🗺️ **Planet Loadouts** | Recommended 4-slot loadouts per planet by enemy composition |
| 🔫 **Weapons Vault** | BiS weapons — element, manufacturer, damage type, farm location |
| 📀 **DLC Content** | All 6 DLCs, both Takedowns, 6 Proving Grounds, Slaughter arenas, seasonal events |
| 📊 **Live Stats** | Real-time Steam player count + BL3 speedrun world records |

---

## Character Guides

Every Vault Hunter has a complete guide section:

```
📖 Overview        Difficulty · playstyle · strengths & weaknesses
🌱 Early Game      Levels 1–20: skill order, action skill setup, weapons
⚙️  Mid Game        Levels 20–40: build transition, first farm targets
🔥 Late Game       Levels 40–72 + Mayhem: full build online, BiS farming
🎯 Key Farms       6 boss farms each with locations, drops, kill tips
📈 Guardian Rank   Priority order with character-specific reasoning
🌀 Mayhem Mods     Which modifiers are free damage vs reroll
```

---

## DLC Coverage

### Season Pass 1
| DLC | Planet | Released | Key Drops |
|---|---|---|---|
| Moxxi's Heist of the Handsome Jackpot | Handsome Jackpot | Dec 2019 | Seein' Dead · St4ckbot · Ion Cannon · Lucky 7 |
| Guns, Love, and Tentacles | Xylourgos | Mar 2020 | Old God · Yellowcake · Conductor |
| Bounty of Blood | Gehenna | Jun 2020 | Flipper · Light Show · Complex Root · Gargoyle |
| Psycho Krieg & the Fantastic Fustercluck | Krieg's Mind | Sep 2020 | Flare · Dragon · Company Man |

### Season Pass 2
| DLC | Key Feature | Key Drops |
|---|---|---|
| Designer's Cut | Arms Race + 4th Skill Trees for every VH | Plasma Coil · Re-Volter · Torrent |
| Director's Cut | Hemovorous Raid Boss + Vault Cards | Shlooter · Atlas Replay · Ionic Disruptor |

### Free Content
- **Maliwan Takedown** — Wotan the Invincible → Redistributor
- **Guardian Breach** — Anathema the Relentless → Skullmasher, Reflux
- **6 Proving Grounds** — True Trials mode with M6+ expanded loot pools
- **4 Circles of Slaughter** — including the Titan Eridium loop (500 per round)
- **Seasonal Events** — Bloody Harvest, Revenge of the Cartels, Broken Hearts Day, Loot the Universe

---

## Tech Stack

```
bl3-mayhem-compendium/
├── index.html                  # Single page app — everything renders here
├── css/
│   └── style.css               # BL3 cel-shaded design system — 2,100+ lines
├── js/
│   ├── data.js                 # All builds, weapons, class mods, anointments
│   ├── guides.js               # Leveling guides for all 4 Vault Hunters
│   ├── skilltrees.js           # All 16 skill trees (4 characters × 4 trees)
│   ├── app.js                  # Nav routing, page builders, state
│   ├── skilltree_builder.js    # Interactive skill tree renderer
│   ├── characters_live.js      # Steam API + Speedrun.com live data
│   ├── guide_renderer.js       # Leveling guide UI renderer
│   ├── dlc_data.js             # All DLC — 6 DLCs + free content + events
│   └── dlc_renderer.js         # DLC section builder
└── api/
    └── players.js              # Vercel serverless — Steam player count proxy
```

**Zero dependencies. No React. No npm. No build step.** Clone and open `index.html`.

---

## Design System

Built to match BL3's cel-shaded aesthetic.

```
Colors:
  --orange  #F5A623   Primary — headers, BiS ratings, key callouts
  --red     #E8272A   Danger — Moze Demo Woman tree, weakness
  --blue    #4A9BFF   Info — Bottomless Mags, Zane Under Cover
  --green   #52C41A   Success — FL4K Master tree, strengths
  --purple  #9B59B6   Amara Mystical Assault, DLC2
  --cyan    #00D4FF   Zane Professional, special callouts
  --bg      #0a0a0a   Near-black background

Fonts: Bangers (headers) · Rajdhani (body) · Share Tech Mono (data/stats)
Style: 3px black borders · 5px drop shadows · halftone dot background
```

---

## Run Locally

```bash
git clone https://github.com/MisTAiM/bl3-mayhem-compendium
cd bl3-mayhem-compendium
open index.html
```

That's the entire setup. No `npm install`. No `node_modules`. No config files.

---

## APIs

| API | Purpose | Notes |
|---|---|---|
| Steam Web API | Live BL3 player count | Proxied via Vercel serverless (CORS-safe) |
| Speedrun.com | BL3 Any% world record | Game ID: `369penl1` |
| SteamSpy | Ownership estimate | Embedded as static constant (browser CORS blocked) |

Live data auto-refreshes every 60 seconds.

---

## Data Accuracy

All content verified against Lootlemon, MentalMars, Borderlands Wiki, and in-game testing.

**Known community guide errors corrected:**

| Wrong | Correct |
|---|---|
| Flare = "fire kill splash damage" | Flare = +100% weapon dmg while Iron Bear/Cub active |
| Seein' Dead = "+25% Kill Skill bonus" | Nerfed to +10% · ~4% proc chance per hit |
| Bloodletter BiS = Otto Idol | BiS artifact = Deathless |
| Zane's 4th tree = "Secret Agent" | Correct name: The Professional |
| FL4K GB build uses "Barbarous Heart" | Correct skill: Barbaric Yawp (Barbarous Heart doesn't exist) |

---

## By The Numbers

```
4   Vault Hunters      16  Skill Trees        276+ Skill Nodes
16  M10 BiS Builds     6   DLCs Covered       80+  Legendary Weapons
40+ Boss Farm Routes   6   Proving Grounds    4    Seasonal Events
4,200+ Lines JS        2,100+ Lines CSS       0    External Dependencies
```

---

## Contributing

Found a wrong drop rate? Better farm route? Missing weapon?

1. Fork → Fix → PR

Or open an issue. Accuracy matters when people are farming 200 boss kills for one god-roll.

---

<div align="center">

**Built by [MisTAiM](https://github.com/MisTAiM) for [The Black Bulls Den](https://github.com/MisTAiM)**

*No ads. No tracking. Just the data.*

[![MIT License](https://img.shields.io/badge/License-MIT-F5A623.svg)](https://opensource.org/licenses/MIT)

</div>
