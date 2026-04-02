# BORDERLANDS 3 — MAYHEM 10 COMPENDIUM

```
██████╗ ██╗      ██████╗
██╔══██╗██║     ╚════██╗
██████╔╝██║      █████╔╝
██╔══██╗██║     ██╔═══╝
██████╔╝███████╗███████╗
╚═════╝ ╚══════╝╚══════╝

MAYHEM 10 COMPENDIUM
The Vault Hunter Bible
```

[![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](.)
[![Styled with CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](.)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](.)
[![Mayhem](https://img.shields.io/badge/Mayhem-10-orange?style=flat-square)](.)
[![Level](https://img.shields.io/badge/Level-72-red?style=flat-square)](.)

> **The most complete Borderlands 3 Mayhem 10 reference guide on the internet.**  
> Builds. Loadouts. Enemies. Planets. Weapons. Modifiers. Everything.

---

## What Is This

A fully static, zero-dependency website built with vanilla HTML, CSS, and JavaScript that serves as the complete reference manual for Borderlands 3 at Mayhem 10 / Level 72. No ads. No logins. No paywalls. Just information.

The design mirrors Borderlands 3's iconic cel-shaded aesthetic — black outlines, orange accents, comic-book panels, and the Bangers typeface throughout. The sidebar stays fixed while content scrolls. Navigation is instant. Data is comprehensive.

---

## Sections

### Elements Guide
- Full elemental damage effectiveness matrix (all 6 elements vs all 4 health types)
- DOT mechanics, stun effects, crowd control properties
- The 4-slot weapon rule explained
- Anointed enemy resist cycling guide
- Badass armor caveat

### Vault Hunter Builds

#### Moze — The Gunner
- 4 builds: Flare Splash, Bloodletter 1HP, Iron Bear Tank, Blast Master
- All 3+ skill trees with key nodes and capstone marked
- All class mods: Flare, Bloodletter, Blast Master
- Planet loadout matrix (all 8 zones)
- Best anointments with explanation

#### Amara — The Siren
- 4 builds: Face-puncher Melee, Spiritual Driver, Ties That Bind/Nimbus, Phaseflare Orb
- Skill trees with Rush stack mechanics annotated
- Class mods: Spiritual Driver, Nimbus, Phasezerker
- Planet loadout matrix
- Phasecast/Phaseslam/Phasegrasp anointment comparison

#### FL4K — The Beastmaster
- 4 builds: 3-Shot Fade Away (GITM), Megavore Mobber, Gamma Burst Radiation, Rakk Attack Spam
- Hunter tree Megavore path highlighted
- Class mods: St4ckbot, Bounty Hunter, Red Fang, Peregrine
- Planet loadout matrix with cryo freeze notes for Eden-6
- Pet choice guide per build

#### Zane — The Operative
- 4 builds: Seein' Dead God, Clone Swap Speed, Barrier Tank, MNTIS Cold Warrior
- Kill skill synergy map
- Class mods: Seein' Dead (tier: mandatory), Antifreeze, Executor
- Planet loadout matrix
- Digi-Clone vs SNTNL vs Barrier comparison

### Planet Guide
Six planets + DLC worlds with:
- All enemy factions and their health bar composition
- Elemental priority per faction
- Boss intel: health types, drop pools, fight tips
- Zone listing

**Planets covered:**
- Pandora — COV, Skags, Rakk, Spiderants, Varkids, Goliaths
- Promethea — Maliwan Soldiers, Robots, Ratches, Anointed Maliwan
- Athenas — Maliwan Detachment, Ratches, Monks
- Eden-6 — Saurians, Jabbers, Jakobs Guards, Tinks, Wolven
- Nekrotafeyo — Guardians (all four types with resist cycling mechanics)
- DLC1, DLC2, DLC3, DLC4, DLC5

### Planet Loadouts
A complete matrix table for all 4 characters across 8 zones.  
Every cell shows the exact weapon to use in that slot, color-coded by element:

| Zone | Slot 1 | Slot 2 | Slot 3 | Slot 4 |
|------|--------|--------|--------|--------|
| Pandora | Fire | Shock | Corrosive | Radiation |
| Promethea | Shock | Corrosive | Fire | Radiation |
| ... | | | | |

### Weapons Vault
- **Mayhem Exclusives** — 8 weapons that only drop at M6+
- **BiS Legendaries** — All top-tier non-exclusive legendaries
- **Artifacts** — Pearl of Ineffable Knowledge, Blast Master, Unleash the Dragon, and more
- **Shields** — Front Loader, Transformer, Bands of Sythropia, Revolter
- **Grenades** — Hex, Fish Slap, Cloning Maddening Tracker
- **M10 Scaling Table** — damage multiplier at every Mayhem level

### Mayhem Modifiers
- All 25+ modifiers across 4 difficulty tiers (Easy / Medium / Hard / Very Hard)
- Each modifier rated: GREAT / GOOD / MANAGEABLE / BAD / TERRIBLE / EXPLOITABLE
- Farm tips per modifier
- Character-specific exploits (FL4K Holy Crit, Amara Slayer combo)
- Ideal M10 modifier combination
- Mayhem-scaled hidden skill multiplier table

---

## Design System

The visual design is built around BL3's cel-shaded aesthetic:

- **Font:** Bangers (headers) + Rajdhani (body) + Share Tech Mono (stats)
- **Colors:** Orange `#F5A623` primary, black `#0a0a0a` background, element-matched accents
- **Borders:** 3px solid black outlines, offset box-shadows for comic-book cel-shading
- **Background:** Radial dot halftone pattern
- **Sidebar:** Fixed position, always visible, never moves on scroll
- **3D Effects:** CSS perspective transforms on weapon cards (hover), 3D text-shadow on headers
- **Skill Tree:** Connected node graph per character, key/capstone nodes highlighted

---

## File Structure

```
bl3-mayhem-compendium/
├── index.html          — Single-page app, all sections
├── css/
│   └── style.css       — Complete BL3 theme, 800+ lines
├── js/
│   ├── data.js         — All game data (characters, weapons, planets, modifiers)
│   └── app.js          — Navigation, dynamic rendering, interactivity
└── README.md
```

---

## Data Coverage

| Category | Count |
|----------|-------|
| Characters with builds | 4 |
| Total builds documented | 16 |
| Planets covered | 6+ (+ all DLCs) |
| Enemy factions with elemental intel | 30+ |
| BiS weapons listed | 18+ |
| Class mods with full stats | 12+ |
| Mayhem modifiers | 25+ |
| Artifacts | 6 |
| Shields | 6 |
| Grenades | 4 |
| Anointments documented | 20+ |
| Planet loadout cells | 64 |

---

## How to Run

No build step, no dependencies, no server required.

```bash
git clone https://github.com/MisTAiM/bl3-mayhem-compendium
cd bl3-mayhem-compendium
open index.html
```

Or serve locally:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

---

## Key Takeaways for M10

1. **Element matching is not optional.** Wrong element = 50-70% less damage. M10 HP pools are so large that mismatching will make fights feel impossible.

2. **Your class mod defines your build.** Farm it first before any weapon. A wrong class mod cuts damage by 60%.

3. **Anointments matter more than rarity.** A purple with the right anoint beats a legendary with the wrong one.

4. **Seein' Dead is Zane.** No other class mod in the game is as essential to a character as Seein' Dead is to Zane. It is not optional.

5. **Short Fuse and Fire in the Skag Den are Mayhem-scaled.** Tooltips are lying to you. Fire in the Skag Den is +93% fire damage per point at M10, not +15%. This is why Moze is S-tier.

6. **Guardian Rank before anything else.** Dump all tokens into Enforcer tree (Dead-Eye + Hollow Point) before farming gear.

7. **Anointed enemies cycle resist.** They have 3x HP at M10. Watch the glow color and switch elements. Always carry a kinetic/radiation option for full-immune phases.

---

## Character Tier Summary (M10)

| Character | Peak Tier | Best At |
|-----------|-----------|---------|
| Moze | S | Raw splash DPS, survivability (Bloodletter) |
| Amara | S | Melee one-shots, mob chain clear |
| FL4K | S | Boss deletes (Fade Away), guaranteed crits |
| Zane | S | Versatility, speed, kill skill uptime |

All four characters are S-tier at M10 with correct builds and BiS gear.

---

## Planet Priority

| Planet | Primary Element | Secondary |
|--------|-----------------|-----------|
| Pandora | Fire | Shock |
| Promethea | Shock | Corrosive |
| Athenas | Shock | Corrosive |
| Eden-6 | Fire + Corrosive (equal) | Cryo |
| Nekrotafeyo | All 4 mandatory | Kinetic fallback |

---

*All information verified for Level 72 Mayhem 10. Data accurate as of final patch.*  
*No mods, no exploits, no glitches — pure M10 endgame builds.*
