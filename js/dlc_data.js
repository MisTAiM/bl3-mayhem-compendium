/* ============================================================
   BORDERLANDS 3 — COMPLETE DLC DATA
   All paid DLCs, takedowns, proving grounds, seasonal events
   Sources: MentalMars, Borderlands Wiki, 2K Newsroom, GameRant
   ============================================================ */

const DLC_DATA = {

  season1: {
    name: 'Season Pass 1',
    price: '$29.99',
    color: '#F5A623',
    includes: ['DLC1: Moxxi\'s Heist', 'DLC2: Guns, Love, and Tentacles', 'DLC3: Bounty of Blood', 'DLC4: Psycho Krieg'],
    value: 'Best value entry point — all four story campaigns, 70+ legendary items, 4 new class mods per VH, 20+ hours of content'
  },

  season2: {
    name: 'Season Pass 2',
    price: '$29.99',
    color: '#9B59B6',
    includes: ['Designer\'s Cut (4th skill trees + Arms Race)', 'Director\'s Cut (Hemovorous + Vault Cards)'],
    value: 'Essential for endgame — 4th skill trees transform every VH, Arms Race has the best BiS weapons (Plasma Coil, Re-Volter, Torrent), Hemovorous is the hardest fight in the game'
  },

  dlcs: [
    {
      id: 'dlc1',
      num: 1,
      name: "Moxxi's Heist of the Handsome Jackpot",
      short: 'Handsome Jackpot',
      released: 'December 19, 2019',
      seasonPass: 1,
      color: '#F5A623',
      planet: 'The Handsome Jackpot (Space Casino Station)',
      theme: 'Heist / Casino',
      rating: '★★★★☆',
      story: 'Join Mad Moxxi in pulling off the ultimate heist against Handsome Jack\'s legacy. The Handsome Jackpot is a derelict space casino built by Handsome Jack during his reign. Workers were stranded when the station\'s AI locked them in after Jack\'s death. You fight through workers, enforcers, and Loader Bots to reach the jackpot at the casino\'s core.',
      length: { story: '4-5 hours', completionist: '10-12 hours' },
      levelReq: 13,
      keyFeatures: [
        'Best XP farm in the game: Scraptrap Prime + infinite Scraptrap spawns in The Compactor',
        'Freddie the Traitor respawns without save-quit — most efficient repeatable boss farm',
        'Jackpot boss drops Seein\' Dead at 33% rate — Zane\'s most important class mod',
        'Powerleveling method: Kill Scraptrap Prime, let infinite Scraptraps spawn, AoE kill all — 20-30 levels/hour at M10'
      ],
      bosses: [
        { name: 'Scraptrap Prime', location: 'The Compactor', drops: ['Lucky 7', 'Boomer SMG'], tip: 'Infinite Scraptrap spawns make this the best XP farm in the game. AoE weapons destroy the nest.' },
        { name: 'Fabricator Mk. II', location: "Jack's Secret", drops: ['Ion Cannon'], tip: 'Massive robot that spawns Loader Bots. Shoot the glowing panels on his body for crits.' },
        { name: 'Freddie the Traitor', location: 'VIP Tower', drops: ['AutoAime sniper', 'Nukem (via Loco Chantelle)'], tip: 'Fast-travel back after kill — Freddie respawns WITHOUT save-quitting. Fastest repeatable farm method in BL3.' },
        { name: 'Jackpot the Jack\'s Bot', location: 'VIP Tower (final)', drops: ['Seein\' Dead (Zane)', 'Green Monster (Moze)', 'Cheap Tips SMG', 'Craps pistol'], tip: '33% chance for Seein\' Dead. If you play Zane, farm this until you get a perfect roll. 3 different VH class mods can drop here.' }
      ],
      legendaryWeapons: [
        { name: 'Lucky 7', type: 'Jakobs Pistol', special: 'Randomly gains one of 6 perks on reload: Full Auto, All Crits, Random Element, Buckshot spread, 7-shot burst, or blank. Every reload is a gamble.', farm: 'Scraptrap Prime (The Compactor)', tier: 'A' },
        { name: 'Ion Cannon', type: 'Vladof Rocket Launcher', special: 'Fires a devastating charge shot — most powerful single-hit launcher in the game. Slow, but one shot can delete bosses.', farm: 'Fabricator Mk. II (Jack\'s Secret)', tier: 'S' },
        { name: 'Scoville', type: 'Torgue Pistol', special: 'Fires arcing hot sauce bottles that explode for fire splash. Guaranteed drop from collecting all hot sauce bottle collectibles in the DLC.', farm: 'Collectible hunt — guaranteed', tier: 'B' },
        { name: 'Heartbreaker', type: 'Hyperion Shotgun', special: 'Fires a burst of pellets that also heals on hit. Returned from Borderlands 2. Excellent sustain weapon.', farm: 'Gorgeous Armada (The Compactor)', tier: 'B' },
        { name: 'Craps', type: 'Torgue Pistol', special: 'Fires one bullet that has a chance to fire 4 extra projectiles simultaneously. Gambling themed — damage is variable.', farm: 'Jackpot the Jack\'s Bot', tier: 'B' },
        { name: 'Cheap Tips', type: 'Hyperion SMG', special: 'High fire rate SMG with high accuracy. Solid damage. More of a fun gun than a meta pick.', farm: 'Jackpot the Jack\'s Bot', tier: 'C' }
      ],
      legendaryMods: [
        { name: "Seein' Dead", char: 'Zane', effect: '~4% per hit to activate ALL Kill Skills. +10% Kill Skill bonus.', why: 'THE most important class mod in BL3. Transforms Zane from good to best character in the game.', tier: 'S' },
        { name: 'Green Monster', char: 'Moze', effect: 'After sustained fire, weapons gain up to +100% bonus Corrosive damage. Also functions like Blast Master for splash damage.', why: 'Excellent corrosive Moze build enabler. Stacks as you fire — don\'t stop shooting.', tier: 'A' },
        { name: 'St4ckbot', char: 'FL4K', effect: 'On consecutive Critical Hits: gain stacking Crit Damage bonus. Max 50 stacks = +500% Crit Damage. Resets on non-crit.', why: 'BiS for GITM Fade Away builds. With Megavore: body shots count as crits = infinite stacks instantly.', tier: 'S' }
      ],
      tips: [
        'Do DLC1 immediately after finishing the campaign — the Scraptrap XP farm gets you to level 72 fast',
        'Farm Jackpot boss until you have a good Seein\' Dead if playing Zane — nothing else matters as much',
        'The Scraptrap Nest reset method: Kill Scraptrap Prime → step through back path → re-enter area → immediate respawn',
        'Collect all 5 hot sauce bottle icons on the map for the guaranteed Scoville pistol',
        'Loco Chantelle (named enemy near VIP Tower entrance) drops Nukem rocket launcher — farm her on your way to Freddie'
      ]
    },
    {
      id: 'dlc2',
      num: 2,
      name: 'Guns, Love, and Tentacles',
      short: 'Guns & Tentacles',
      released: 'March 26, 2020',
      seasonPass: 1,
      color: '#4A9BFF',
      planet: 'Xylourgos (Ice Planet)',
      theme: 'Lovecraftian Horror / Wedding',
      rating: '★★★★★',
      story: 'Join Wainwright Jakobs and Sir Alistair Hammerlock for their engagement party on the frozen, haunted planet of Xylourgos. A gigantic dead monster, its cult following, and ancient eldritch forces are trying to ruin the wedding. Gaige (BL2 Vault Hunter) returns as the wedding planner. H.P. Lovecraft-inspired horror atmosphere — the creepiest DLC in BL3.',
      length: { story: '5 hours', completionist: '11 hours' },
      levelReq: 13,
      keyFeatures: [
        'Tom & Xam boss duo respawns without save-quit — fast-travel exploit makes them one of the most efficient farms',
        'Old God shield drops here — excellent mid-game shield for all characters',
        'St4ckbot class mod (FL4K\'s BiS for GITM builds) drops as a world pool item from Anointeds here',
        'Most story-rich DLC in Season Pass 1 — best writing and atmosphere',
        '4 class mods added: one per VH. Each is strong for its respective character.'
      ],
      bosses: [
        { name: 'Amach', location: 'Cursehaven', drops: ['Old God shield'], tip: 'Spawn, kill, fast-travel back from nearby FT point — respawns on return. Old God gives +50% elemental damage on shield break.' },
        { name: 'Tom & Xam', location: 'Heart\'s Desire ("What Beats Beneath" FT)', drops: ['DLC2 world drops', 'St4ckbot (world pool)'], tip: 'Kill ONE of the duo → fast-travel to nearby station → return → both respawn. Fastest non-save-quit farm in BL3.' },
        { name: 'Vincent', location: 'Skittermaw Basin', drops: ['DLC2 world drops'], tip: 'Shielded Jakobs enemy. Shock weapons first, then fire. Quick kill for world drop farming.' },
        { name: 'Empowered Scholar', location: 'Heart\'s Desire (story boss)', drops: ['DLC2 legendaries', 'class mods'], tip: 'Story boss. Multi-phase fight with elemental cycling. Keep all elements accessible.' },
        { name: 'Voltborn', location: 'Negul Neshai (named enemy)', drops: ['Conductor class mod (Zane)'], tip: 'Conductor mod gives Zane bonus Shock damage based on AS duration remaining. Great for SNTNL builds.' },
        { name: 'Gideon', location: 'Final mission boss', drops: ['World drops + class mods'], tip: 'Final DLC2 boss. Reward mostly world drops. Worth killing for story completion and world pool.' }
      ],
      legendaryWeapons: [
        { name: 'Old God', type: 'Jakobs Shield', special: 'When shield breaks: gain +50% elemental damage of the matching element. Top-tier shield for any elemental build.', farm: 'Amach (Cursehaven)', tier: 'S' },
        { name: 'Unseen Threat', type: 'Jakobs Sniper', special: 'Fires 3 projectiles in a vertical spread. Each projectile ricochets on crit. Good for FL4K crit builds.', farm: 'Amach (Cursehaven)', tier: 'B' },
        { name: 'Yellowcake', type: 'COV Rocket Launcher', special: 'MANY unlisted projectiles that all deal radiation damage. Each projectile triggers weapon procs. Exceptional for Zane (Seein\' Dead proc rate).', farm: 'Eista the Invincible (Skittermaw Basin, M6+)', tier: 'S' },
        { name: 'Septimator Prime', type: 'Dahl Sniper', special: 'Fires a seeking laser beam — all damage hits. No aiming required. Good for movement-focused builds.', farm: 'DLC2 world drop', tier: 'B' },
        { name: 'Frozen Devil', type: 'Maliwan Pistol', special: 'Cryo pistol with high damage. Good for triggering freeze on enemies for the 3x melee damage bonus.', farm: 'DLC2 world drops', tier: 'B' }
      ],
      legendaryMods: [
        { name: 'Conductor', char: 'Zane', effect: 'Bonus Shock damage based on remaining AS duration. The more time left on SNTNL, the more Shock damage dealt.', why: 'Great for SNTNL-focused Zane builds. Stack with Good Misfortune to keep SNTNL permanent.', tier: 'B' },
        { name: 'Dead Eyes', char: 'FL4K', effect: 'FL4K gains increased weapon damage and crit when enemies are far away. Sniper build enabler.', why: 'For long-range FL4K sniper builds. Combines with Ambush Predator for stacking range damage.', tier: 'B' }
      ],
      tips: [
        'Tom & Xam no-save-quit farm: Kill Tom (or Xam) → run to fast travel station at "What Beats Beneath" → teleport → return → both respawn. Repeat.',
        'Eista the Invincible is a raid-level enemy in this DLC — bring your strongest build for the Yellowcake',
        'The DLC has multiple named enemies throughout that drop specific legendaries — explore every zone for crew challenges',
        'Wainwright\'s safe room is a good place to restock ammo between area clears',
        'If you find the Old God shield with the "ASE next 2 mags +elemental damage" anoint, keep it — works on any element'
      ]
    },
    {
      id: 'dlc3',
      num: 3,
      name: 'Bounty of Blood',
      short: 'Bounty of Blood',
      released: 'June 25, 2020',
      seasonPass: 1,
      color: '#E8272A',
      planet: 'Gehenna',
      theme: 'Space Western / Outlaws',
      rating: '★★★★★',
      story: 'Travel to the desert planet of Gehenna, a classic Space Western story. The Sheriff of Vestige hires you to take down the Rose Family gang — outlaws whose mysterious backer has left the planet in ruins with dangerous experiments. Features a narrator reading the story as a tall tale, unique dialogue system, and the new Jetbeast vehicle.',
      length: { story: '5 hours', completionist: '11 hours' },
      levelReq: 13,
      keyFeatures: [
        'New Jetbeast vehicle — faster than any base game vehicle, handles Gehenna\'s terrain perfectly',
        'Light Show pistol (M6+) is one of the most versatile BiS weapons in the game — drops in this DLC',
        'Flipper SMG (M6+) is a top-tier mob weapon for all VHs — also in this DLC',
        'Named enemy system: Gehenna Most Wanted crew challenges each have dedicated legendary drops',
        'Dozens of named enemies with 1-item loot pools — most targeted legendary farming in any DLC',
        '22 legendary weapons total — highest legendary count of any Season Pass 1 DLC, and NO class mods/artifacts (all weapons)'
      ],
      bosses: [
        { name: 'The Ruiner', location: 'Bloodsun Canyon (final boss)', drops: ['500 Eridium guaranteed', 'Gargoyle pistol', 'Complex Root sniper', 'Company Man artifact (DLC4 drop also)'], tip: 'Guaranteed 500 Eridium per kill. Best Eridium farm in game. Kill on M10, fast travel back. 30-45s farm cycle.' },
        { name: 'Jabbermogwai', location: 'Bloodsun Canyon', drops: ['Re-Volter shield (wait — that\'s Arms Race)', 'Anarchy SMG'], tip: 'Respawnable named enemy. Immune to radiation. Use shock then fire/corrosive.' },
        { name: 'Abbadoxis', location: 'Ashfall Peaks', drops: ['Flipper SMG (M6+)'], tip: 'The Flipper is one of the best mob-clearing weapons in the game. Farm this repeatedly. Located north in the zone.' },
        { name: 'Quartermaster', location: 'Ashfall Peaks (end of zone)', drops: ['Contained Blast launcher'], tip: 'Respawnable named enemy. Contained Blast fires seeking orbs — decent splash weapon.' },
        { name: 'Mother of Grogans', location: 'Bloodsun Canyon', drops: ['Multiple world drops'], tip: 'Has a weakness tied to the "Game of Thrones" easter egg — run up and melee her to deal massive damage.' }
      ],
      legendaryWeapons: [
        { name: 'Light Show', type: 'Vladof Pistol (M6+)', special: 'Fires 4 extra projectiles per shot in a wide spread. All 4 extra projectiles apply on-hit effects and crit. With Megavore: 5 crits per trigger. BiS for FL4K and Amara.', farm: 'Billy the Anointed (Jakobs Estate, Eden-6) — actually base game M6+. DLC3 world drop too.', tier: 'S' },
        { name: 'Flipper', type: 'Maliwan SMG (M6+)', special: 'Fires 2 shots, each splitting into 3, with each split projectile dealing full damage. Extremely high DPS. Good on all VHs.', farm: 'Abbadoxis (Ashfall Peaks, Gehenna)', tier: 'S' },
        { name: 'Gargoyle', type: 'COV Pistol', special: 'Fires heated corrosive rounds. Overheats and self-destructs like COV weapons but also deals fire damage on destruction. Ammo-efficient damage.', farm: 'The Ruiner (Bloodsun Canyon)', tier: 'B' },
        { name: 'Complex Root', type: 'Maliwan Sniper (M6+)', special: 'Fires a shot that can hit enemies multiple times as it passes through them. Bounces off surfaces. Each tick of damage applies separately.', farm: 'The Ruiner (Bloodsun Canyon) / Gehenna world drops', tier: 'A' },
        { name: 'Beacon', type: 'Maliwan Pistol', special: 'Fires radiation orbs that stick to enemies and detonate. Corrosive / radiation swap on reload. Good for status effect builds.', farm: 'Tumorhead (Vestige named enemy)', tier: 'B' },
        { name: 'Proprietary License', type: 'Dahl AR', special: 'Full-auto AR that fires in DAHL burst mode when scoped. One of the best base DPS assault rifles. Consistent damage, great accuracy.', farm: 'Gehenna Most Wanted named enemies (multiple sources)', tier: 'A' },
        { name: 'Contained Blast', type: 'Torgue Launcher', special: 'Fires seeking orbs that home onto enemies. Good for splash Moze and Amara builds. Consistent damage without requiring precision aim.', farm: 'Quartermaster (Ashfall Peaks)', tier: 'B' }
      ],
      legendaryMods: [],
      tips: [
        'The Ruiner farm = best Eridium source in the game. 500 Eridium guaranteed every kill. Use this to reroll anointments at Crazy Earl.',
        'Gehenna Most Wanted crew challenges mark farmable named enemies on the map — complete these for targeted legendary drops',
        'Jetbeast controls: sprint button for boost, works on all terrain. Much faster than Outrunner for traversal.',
        'The narrator system is unique — dialogue changes based on your actions. Explore all side areas for unique narration lines.',
        'Light Show drops primarily from Billy the Anointed (base game, Jakobs Estate) — DLC3 world pool is a bonus source'
      ]
    },
    {
      id: 'dlc4',
      num: 4,
      name: 'Psycho Krieg and the Fantastic Fustercluck',
      short: 'Psycho Krieg',
      released: 'September 10, 2020',
      seasonPass: 1,
      color: '#9B59B6',
      planet: "Krieg's Mind (Mindscape)",
      theme: 'Surreal / Psychedelic / Psycho mind',
      rating: '★★★★☆',
      story: "Enter Krieg's chaotic mindscape in search of the mythical Vaulthalla. Dr. Patricia Tannis studies Krieg's psyche from inside his own mind while you fight through his twisted inner demons — manifestations of every psycho he's ever been. Two separate Krieg personalities coexist: the raging psycho exterior and the rational human trying to protect Maya's memory. One of the most emotionally resonant stories in Borderlands history.",
      length: { story: '4 hours', completionist: '7 hours' },
      levelReq: 13,
      keyFeatures: [
        'Flare class mod for Moze drops here — enables the Flare Bear build (permanent +100% weapon damage with Iron Cub)',
        'Company Man artifact — +25% damage for weapons matching your build\'s primary manufacturer. BiS for brand-specific builds.',
        'Evil Mordecai drops Flare mod at 15% rate — fastest targeted Flare farm',
        'Vaulthalla secret room: complete all crew challenges to unlock a room with a guaranteed legendary spawn',
        'Evil Brick drops Dragon class mod (melee Amara BiS)',
        'Shortest DLC but great story payoff for Krieg fans'
      ],
      bosses: [
        { name: 'Evil Mordecai', location: 'Castle Crimson', drops: ['Flare class mod (Moze)'], tip: '15% drop rate for Flare. Fast save-quit farm — relatively short run to boss. BiS class mod for Iron Cub Moze.' },
        { name: 'Evil Brick', location: 'Castle Crimson (paired with Mordecai)', drops: ['Dragon class mod (Amara melee)'], tip: 'Dragon mod amplifies Amara\'s melee damage significantly. Farm with Evil Mordecai in the same run.' },
        { name: 'The Ruiner', location: 'Psychoscape area', drops: ['500 Eridium + Gargoyle + Company Man'], tip: 'Same boss as DLC3 Ruiner. Equally farmed here for Company Man artifact and Eridium.' },
        { name: 'Locomöbius', location: 'Sapphire\'s Run (train boss)', drops: ['Soulrender SMG'], tip: 'Unique train boss fight. Soulrender fires seeking energy skulls. Good for status effect builds.' },
        { name: 'Krieg the Psycho', location: 'Final boss', drops: ['DLC4 world drops', 'Vaulthalla items'], tip: 'Emotional final boss. Two-phase fight with Krieg\'s inner and outer personalities.' }
      ],
      legendaryWeapons: [
        { name: 'Soulrender', type: 'Dahl AR', special: 'Fires energy skulls alongside bullets. Skulls seek nearby enemies. Good for status effect application across multiple targets.', farm: 'Locomöbius (Sapphire\'s Run)', tier: 'B' },
        { name: 'Septimator', type: 'Dahl Sniper', special: 'Fires a non-elemental beam that seeks enemies. Consistent damage without aiming requirement. Predecessor to Septimator Prime.', farm: 'DLC4 world drops', tier: 'B' },
        { name: 'Company Man', type: 'Artifact', special: '+25% damage to all weapons from a specific manufacturer (randomly rolled). BiS artifact for mono-manufacturer builds. Ruiner drops it at higher rates.', farm: 'Ruiner (Bloodsun Canyon / DLC4)', tier: 'S' }
      ],
      legendaryMods: [
        { name: 'Flare', char: 'Moze', effect: 'While Iron Bear or Iron Cub is active: up to +100% weapon damage, scaling with remaining IB fuel. With Eternal Machine capstone: permanent +100% bonus.', why: 'Enables the Flare Bear build — Iron Cub never runs out of fuel with Eternal Machine = permanent double damage.', tier: 'S' },
        { name: 'Dragon', char: 'Amara', effect: 'Increases melee damage by a flat bonus. Also increases the damage of melee-based action skill attacks.', why: 'BiS for Face-Puncher melee Amara builds stacking melee damage multipliers.', tier: 'A' }
      ],
      tips: [
        'Complete all 4 crew challenges (Signal to Noise probes, collectibles) to unlock the Vaulthalla secret room with guaranteed legendaries',
        'Evil Mordecai and Evil Brick can both be farmed in the same boss run — save station is close to both fights',
        'Flare class mod + Eternal Machine capstone (Bear Mother DLC tree) = the most consistent damage build in BL3',
        'Company Man rolled for your primary manufacturer is enormous — reroll with Crazy Earl until you match your build\'s weapons',
        'The DLC takes place inside Krieg\'s mind — enemy types are psycho-themed manifestations, all flesh health = fire works great'
      ]
    },
    {
      id: 'dlc5',
      num: 5,
      name: "Designer's Cut",
      short: "Designer's Cut",
      released: 'November 10, 2020',
      seasonPass: 2,
      color: '#00D4FF',
      planet: 'Stormblind Complex (Dahl Prison Planet)',
      theme: 'Permadeath Rogue-lite / New Skill Trees',
      rating: '★★★★★',
      story: 'The Designer\'s Cut adds Arms Race — a new PvE mode where you enter the Stormblind Complex with no gear and must fight your way out with what you find. Extract the best loot before dying. Also adds a brand new 4th skill tree for each Vault Hunter, dramatically expanding build possibilities.',
      length: { armsRace: 'Runs take 10-30 minutes', newContent: 'Unlimited — Arms Race is endlessly replayable' },
      levelReq: 13,
      keyFeatures: [
        'Arms Race: Start every run with no gear. Fight through the prison, loot what you find, extract at the exit. Permadeath — die and lose everything in that run.',
        '4th Skill Trees: Moze gets Bear Mother (Iron Cub), Amara gets Enlightened Force (Phaseflare), FL4K gets Trapper (Gravity Snare), Zane gets The Professional (MNTIS Cannon)',
        'BiS weapons exclusive to Arms Race: Plasma Coil, Re-Volter, Torrent, Tizzy, Kickcharger',
        'Heavyweight Harker is the dedicated boss for Plasma Coil and Torrent — sprint to him on entry',
        'No bad runs — even if you die, the experience teaches you the map layout',
        'MNTIS Cannon (Zane) fires charges that trigger all action skill anointments simultaneously — massive anointment uptime'
      ],
      newTrees: [
        { char: 'Moze', tree: 'Bear Mother', as: 'Iron Cub', capstone: 'Eternal Machine — Iron Cub never uses fuel. Infinite companion.', highlight: 'Baby Nukes: IC deployment/death triggers Mayhem-scaled radiation explosion (31x at M10). With Flare mod = permanent +100% weapon damage + constant explosions.' },
        { char: 'Amara', tree: 'Enlightened Force', as: 'Phaseflare', capstone: 'Orb of Destruction — massive orb damage increase and explosion on expiry.', highlight: 'Cold Hearted augment: converts Phaseflare to Cryo. Frozen enemies take 3x melee damage. Face-puncher interaction: one frozen enemy = one-shot melee.' },
        { char: 'FL4K', tree: 'Trapper', as: 'Gravity Snare', capstone: 'Shared Soul — pet instantly revives FL4K from FFYL. Effectively unkillable solo.', highlight: 'Take This! skill: FL4K\'s Loader Bot gets a copy of FL4K\'s shield. Transformer shield = Loader Bot absorbs shock damage and regenerates shield.' },
        { char: 'Zane', tree: 'The Professional', as: 'MNTIS Shoulder Cannon', capstone: 'Proliferation — extra charges + bonus damage per remaining charge.', highlight: 'Eraser capstone: ALL crit shots pierce through enemies with increasing damage per enemy pierced. Every shot becomes a chain through packed groups.' }
      ],
      armsRaceBosses: [
        { name: 'Heavyweight Harker', drops: ['Plasma Coil', 'Torrent', 'Tizzy', 'Kickcharger'], tip: 'Sprint directly to Harker from the start. Skip all other enemies. Use the fastest route for maximum farm efficiency.' },
        { name: 'Hermes', drops: ['Arms Race world pool'], tip: 'Second major boss. Mid-map. Worth killing only if you\'re well-armed and on the way to extraction.' }
      ],
      legendaryWeapons: [
        { name: 'Plasma Coil', type: 'Maliwan SMG', special: 'Fires shock and radiation projectiles simultaneously. Many projectiles per shot trigger Seein\' Dead (Zane) and Sustainment (Amara) constantly. BiS mob weapon for all VHs.', farm: 'Heavyweight Harker (Arms Race)', tier: 'S' },
        { name: 'Re-Volter', type: 'Hyperion Shield', special: 'On Action Skill Start: triggers a Shock burst dealing massive Shock Damage. With short AS cooldown: constant Shock bursts. BiS shield for Khaos Queen Amara.', farm: 'Arms Race chest room loot', tier: 'S' },
        { name: 'Torrent', type: 'Dahl SMG', special: 'Fires 5-round bursts with fast fire rate. Very high sustained DPS, excellent accuracy. Best non-elemental SMG option for Zane.', farm: 'Heavyweight Harker (Arms Race)', tier: 'A' },
        { name: 'Tizzy', type: 'COV Pistol', special: 'High fire rate COV pistol. Works well with Matched Set (Moze) and as a constant-damage weapon that doesn\'t reload.', farm: 'Heavyweight Harker / Proving Grounds (True Trials)', tier: 'B' },
        { name: 'Kickcharger', type: 'Vladof Launcher', special: 'Charges up before firing a devastating burst. High single-shot damage with massive splash radius.', farm: 'Heavyweight Harker (Arms Race)', tier: 'B' },
        { name: 'HOT Spring', type: 'Vladof Grenade', special: 'Creates a giant radiation pool on impact. Sustained area damage. Good for Vampyr procs (Moze) and elemental application.', farm: 'Arms Race chests', tier: 'B' }
      ],
      tips: [
        'Arms Race strategy: Know the map. Sprint to Heavyweight Harker (center-north of the complex). Kill him. Open nearby loot chest. Extract ASAP.',
        'If you die in Arms Race, you lose all found gear — but there\'s no penalty to trying again immediately.',
        'Full extract = all found gear goes to your inventory. Even partial extract from the exit saves what you\'re carrying.',
        'Plasma Coil and Re-Volter are the two most important items to extract. Everything else is secondary.',
        'Bring good gear FROM outside for your first few runs to survive long enough to reach Harker.',
        'True Trials mode (activated at entrance) buffs bosses and expands loot pool — Tizzy drops from Trial bosses in this mode'
      ]
    },
    {
      id: 'dlc6',
      num: 6,
      name: "Director's Cut",
      short: "Director's Cut",
      released: 'April 8, 2021',
      seasonPass: 2,
      color: '#52C41A',
      planet: 'Multiple (Pandora, Promethea, Eden-6, Nekrotafeyo) + Darkthirst Dominion',
      theme: 'Raid Boss / Mystery / Behind-the-Scenes',
      rating: '★★★★☆',
      story: "Ava investigates a series of seemingly paranormal murders across multiple planets, documenting her findings in a podcast (Mysteriouslier). You're her gun-toting co-host. Also introduces Hemovorous the Invincible — BL3's first true raid boss — and the Vault Card progression system.",
      length: { story: '3-4 hours murder mystery', raid: 'Unlimited — Hemovorous is endgame farm' },
      levelReq: 'Completed main campaign',
      keyFeatures: [
        'Hemovorous the Invincible: BL3\'s first Raid Boss. Located in Darkthirst Dominion (Pandora). Requires 500 Eridium to enter. Can be bypassed on repeat kills at M6.',
        'Vault Cards: Three challenge-based progression tracks. Complete daily/weekly challenges to earn unique gear scaled to your level. 9 daily challenges possible when all 3 Vault Cards are active.',
        'Diamond Armory: New room on Sanctuary III, unlocked with Diamond Keys (Vault Card rewards). Contains guaranteed legendary drops.',
        'Maurice\'s Black Market: Rotates weekly with specific legendary items for purchase.',
        "Murder Mystery quest chain visits Pandora, Promethea, Eden-6, and Nekrotafeyo — good for exploring content you may have missed.",
        'Behind-the-scenes content: concept art gallery, deleted scenes, pre-release bugs compilation'
      ],
      bosses: [
        { name: 'Hemovorous the Invincible', location: 'Darkthirst Dominion, Pandora (500 Eridium gate)', drops: ['Atlas Replay', 'Ionic Disruptor', 'Ringer', 'Company Man', 'Large loot pool'], tip: 'Three-phase fight. Phase 1+2: She has armor — use Corrosive. Phase 3: Flesh only — use Fire. At M6 with strong build: kill Hemo, keep Vermivorous alive, fast-travel back, re-enter for free (no Eridium on respawn if Vermivorous lives).' },
        { name: 'Vermivorous the Invincible', location: 'Darkthirst Dominion (companion to Hemo in Mayhem mode)', drops: ['General world drops'], tip: 'Kill Hemovorous first, leave Vermivorous alive for the M6 respawn trick. Vermivorous alone has a smaller loot pool.' }
      ],
      legendaryWeapons: [
        { name: 'Atlas Replay', type: 'Atlas AR', special: 'Tags multiple enemies simultaneously and fires seeking rounds at all of them. Excellent for clearing rooms of adds during boss fights.', farm: 'Hemovorous the Invincible', tier: 'B' },
        { name: 'Ionic Disruptor', type: 'Atlas Sniper', special: 'Fires seeking rounds that tag enemies. Tags detonate for additional damage. Atlas manufacturer — works with Atlas-focused Company Man artifact.', farm: 'Hemovorous the Invincible', tier: 'B' },
        { name: 'Ringer', type: 'Dahl Pistol', special: 'Fires three rounds simultaneously in a horizontal spread. High damage per trigger pull. Good for Zane\'s Playing Dirty (doubles to 6 rounds per trigger pull).', farm: 'Hemovorous the Invincible', tier: 'B' },
        { name: 'Shlooter', type: 'Artifact', special: 'After killing an enemy: dramatically increases legendary drop rate for that kill\'s loot explosion. Stack with Butt Stallion Milk for maximum legendary farming efficiency.', farm: 'Director\'s Cut Vault Card rewards', tier: 'S' }
      ],
      vaultCards: [
        { num: 1, name: 'Fallen Heroes', theme: 'Honors fallen Borderlands characters. Includes Roland, Lilith, Angel themed cosmetics.', keyReward: 'Shlooter artifact + themed cosmetics + Diamond Keys', challenges: 'Daily: kill X badasses, deal X damage, complete challenges. Weekly: multi-tiered challenges across all content.' },
        { num: 2, name: 'Bunker Masters', theme: 'Military/tactical theme. Themed around Dahl corporation.', keyReward: 'Blade Fury weapon (fires knives dealing weapon + melee damage) + tactical cosmetics', challenges: 'Blade Fury is earned via Vault Card 2 — one of the most unique weapons in BL3.' },
        { num: 3, name: 'Frenzy', theme: 'Psycho-themed. Krieg references throughout.', keyReward: 'Psycho-themed cosmetics + powerful scaled legendaries', challenges: 'Completes the cosmetic trilogy. All scaled gear rewards are level-agnostic — always relevant.' }
      ],
      tips: [
        'Hemovorous M6 trick: Kill Hemo → DON\'T kill Vermivorous → Fast travel back to Darkthirst entrance → re-enter → Hemo respawned WITHOUT paying 500 Eridium again',
        'Vault Card rewards include items scaled to your current level + Mayhem level — complete challenges at your target Mayhem for best gear',
        'Diamond Armory: 1 Diamond Key = 1 legendary item. Diamond Keys are rare Vault Card rewards — use them wisely',
        'Maurice\'s Black Market refreshes every Thursday — check for items your build needs before farming',
        "Hemovorous strategy: Don't fight from center. Hug the walls and use pillars for cover. Keep Transformer shield for her shock attacks.",
        'Shlooter artifact from Vault Card 1 is transformative for farming — every kill has a chance to trigger a legendary explosion'
      ]
    }
  ],

  freeContent: {
    takedowns: [
      {
        name: 'Takedown at the Maliwan Blacksite',
        short: 'Maliwan Takedown',
        location: "Midnight's Cairn",
        released: 'November 21, 2019',
        cost: 'FREE',
        difficulty: '★★★★★',
        description: 'Tannis sends you to Midnight\'s Cairn to stop Maliwan\'s experiments. The hardest free content in the base game. 4-player scaled by default (toggle True Takedown off for solo). Linear path through waves of Maliwan enemies culminating in the Wotan the Invincible raid boss.',
        bosses: [
          { name: 'Wotan the Invincible', drops: ['Redistributor (Shock)', 'The Dictator', 'Krakatoa', 'Base world drops + Takedown exclusive items'], tip: 'DETACH Wotan\'s lower half to split him — kill the lower half (adds extra loot), then destroy the upper half. Brings the entire loot pool from both kills. Shock and Corrosive weapons mandatory.' }
        ],
        keyDrops: 'Redistributor SMG (shock chain on shielded kills — BiS for Zane), The Dictator (high-pellet Vladof AR)',
        tips: [
          'Toggle "True Takedown Mode" OFF for solo play — scales enemies to your party size (1 player instead of 4)',
          'Redistributor is Zane\'s second-most-important weapon after weapons from Arms Race — farm this hard',
          'Detach Wotan\'s lower half during the fight for double the loot — kill lower half, then upper half',
          'Shock + Corrosive is mandatory — all Maliwan enemies have shields/armor in the endgame scaling'
        ]
      },
      {
        name: 'Takedown at the Guardian Breach',
        short: 'Guardian Breach',
        location: 'Minos Prime',
        released: 'June 4, 2020',
        cost: 'FREE',
        difficulty: '★★★★☆',
        description: 'Tannis sends you to Minos Prime to investigate a Guardian signal. Fight through Guardians in their home territory. More open-layout than Maliwan Takedown. Features FL4K\'s BiS weapon: the Skullmasher 5-pellet Jakobs sniper.',
        bosses: [
          { name: 'Anathema the Relentless', drops: ['Skullmasher (FL4K GITM BiS)', 'The Monarch (FL4K Megavore BiS)'], tip: 'Skullmasher is the single most important weapon for GITM FL4K. Farm hard. Spawn is at the end of the Takedown — quick respawn once learned.' },
          { name: 'Scourge the Invincible Martyr', drops: ['Reflux shotgun (Corrosive chain)', 'Base world drops'], tip: 'Reflux is a top-tier corrosive weapon for all VHs. Chains corrosive damage between enemies.' }
        ],
        keyDrops: 'Skullmasher (5-pellet Jakobs sniper — BiS for FL4K GITM), Reflux (Corrosive chain shotgun)',
        tips: [
          'All Guardian enemies cycle elemental resistance — watch for the glow color and swap elements accordingly',
          'The Skullmasher drops from Anathema the Relentless — this is FL4K\'s best weapon, worth farming 50+ runs',
          'Toggle True Takedown OFF for solo farming to not be overwhelmed',
          'Reflux is excellent for Amara (Indiscriminate ricochet chains corrosive everywhere) and FL4K (Megavore crits on all pellets)'
        ]
      }
    ],

    provingGrounds: {
      description: 'Six different timed challenges (Proving Grounds) across multiple planets. Each has three rounds plus a boss. Final chest always drops legendaries. True Trials mode (toggle at entrance) buffs boss significantly and expands loot pool to include specific weapons.',
      trials: [
        { name: 'Trial of Instinct', location: 'Hall Obsidian, Eden-6', boss: 'Tyrant of Instinct', trueDrops: 'Backburner (M6+)' },
        { name: 'Trial of Discipline', location: 'Precipice Anchor, Athenas', boss: 'Arbalest of Discipline', trueDrops: 'Kaoson (M6+), Flipper' },
        { name: 'Trial of Supremacy', location: 'Ghostlight Beacon, Eden-6', boss: 'Sera of Supremacy', trueDrops: 'Various M6+ weapons' },
        { name: 'Trial of Cunning', location: 'Skydrowned Pulpit, Athenas', boss: 'Hag of Fervor', trueDrops: 'Sand Hawk (M6+)' },
        { name: 'Trial of Fervor', location: 'The Skydrowned Pulpit, Athenas', boss: 'Tyrant of Fervor', trueDrops: 'Light Show, various' },
        { name: 'Trial of Survival', location: 'Gradient of Dawn, Athenas', boss: 'Skag of Survival', trueDrops: 'Monarch (M6+)' }
      ],
      tip: 'True Trials drop rate is dramatically better than normal Proving Grounds. The toggle is at the entrance. Always run True Trials in Mayhem 10 for the best loot efficiency.'
    },

    circlesOfSlaughter: [
      { name: 'Slaughter Shaft', location: 'Konrad\'s Hold, Pandora', desc: '5 rounds of enemy waves. Titan boss spawns in Round 5 and drops 500 Eridium guaranteed. Can be exploited: kill one enemy, leave one alive, fast-travel to reset Round 5 only.', tip: 'Round 5 Titan = 500 Eridium every 3-5 minutes. Best Eridium farm before Ruiner is accessible. Keep one enemy alive to loop Round 5.' },
      { name: 'Slaughter Star 3000', location: 'Skywell-27, Promethea', desc: 'Space-themed 5-round slaughter with robots and Maliwan troops. Drops excellent world drops.', tip: 'More difficult than Slaughter Shaft due to robot variety. Good for Eridium and world drops.' },
      { name: 'Maliwan Slaughterhouse', location: 'Lectra City, Promethea', desc: 'Maliwan enemies in waves. Shock and Corrosive essential throughout. Final round has Anointed enemies.', tip: 'All Maliwan — bring Shock AND Corrosive. Both elements needed constantly.' },
      { name: 'Slaughterstar (Takedown)', location: 'Midnight\'s Cairn adjacent', desc: 'Combined Slaughter content in the Takedown area. Higher difficulty, better rewards.', tip: 'Run with a partner for the Takedown Slaughter content — enemy scaling is brutal solo.' }
    ],

    seasonalEvents: [
      { name: 'Bloody Harvest', type: 'Halloween', when: 'October-November annually', desc: 'Enemies drop Haunted skulls → summon Captain Haunt. Farm for Terror anointments (unique to this event), Ghast Call grenade (Moze grenade loop BiS), and Fearmonger shotgun.', keyLoot: 'Ghast Call grenade, Fearmonger shotgun, Terror anointments' },
      { name: 'Revenge of the Cartels', type: 'Spring/Summer', when: 'April-May annually', desc: 'Collect cartel tokens by killing marked enemies → access to Joey Ultraviolet boss fight. Best event for class mods and the Yellowcake launcher (before DLC2). Recurve Bow drops here.', keyLoot: 'Yellowcake launcher, class mods, unique weapons' },
      { name: 'Broken Hearts Day', type: 'Valentine\'s Day', when: 'February annually', desc: 'Shoot floating hearts for rewards. Two legendary weapons: Wedding Invitation (Jakobs sniper) and Polyaimorous (pistol). Low-effort event.', keyLoot: 'Wedding Invitation sniper (high crit damage), Polyaimorous pistol' },
      { name: 'Loot the Universe', type: 'Rotation', when: 'Various weekends', desc: 'One planet receives dramatically increased legendary drop rates for a weekend. Stack with Shlooter and Butt Stallion Milk for maximum efficiency during active planet weeks.', keyLoot: 'Planet-specific legendaries at much higher rates' },
      { name: 'BL3 Anniversary Events', type: 'September-October', when: 'Each September', desc: 'Multiple event toggles active simultaneously. Loot Anointed, XP boost, and other seasonal buffs. Best time to gear up characters quickly.', keyLoot: 'Enhanced drop rates across all content' },
      { name: 'Borderlands Science', type: 'Permanent', when: 'Always active', desc: 'Citizen Science mini-game in Tannis\'s lab on Sanctuary III. Playing gives Butt Stallion Milk (increases loot luck temporarily) and XP artifacts. Completely free to play.', keyLoot: 'Butt Stallion Milk (timed loot luck boost), XP artifact' }
    ]
  }
};

if (typeof module !== 'undefined') module.exports = DLC_DATA;
