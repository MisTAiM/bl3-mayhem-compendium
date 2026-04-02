/* ============================================================
   BORDERLANDS 3 — COMPLETE CHARACTER GUIDES
   All 4 Vault Hunters: early → mid → late → endgame
   Sources: MentalMars, Lootlemon, playborderlands.com, icy-veins, progameguides
   ============================================================ */

const CHAR_GUIDES = {

  moze: {
    difficulty: 'Easy',
    diffColor: '#52C41A',
    overview: `Moze is the most beginner-friendly Vault Hunter in BL3. Her Iron Bear mech gives you a panic button at all times, her splash damage synergies carry from level 1 to Mayhem 11, and her Vampyr + Means of Destruction grenade loop makes her nearly unkillable in crowds. She has the highest potential burst damage in the game via Mayhem-scaled Fire in the Skag Den (31x at M10). Weakness: single target boss damage without the right build. Best for players who want raw power with minimal complexity.`,
    playstyle: 'Iron Bear tank / Splash damage / Infinite grenades → near-unkillable mob farmer',
    strengths: ['Best mob clear in the game via splash scaling','Near-infinite healing through Vampyr grenade loop','Iron Bear is an actual second character that fights for you','Forge capstone = infinite ammo on any weapon','Easiest survivability early game'],
    weaknesses: ['Moderate boss damage without endgame BiS gear','Iron Bear has long cooldown early game','Relies on gear more than other VHs for full potential','No movement speed bonuses — can feel slow'],

    leveling: [
      {
        phase: 'Early Game',
        levels: 'Levels 1–20',
        color: '#52C41A',
        icon: '🌱',
        summary: 'Iron Bear + Fire damage foundation. You will feel strong immediately.',
        actionSkill: 'Iron Bear with V-35 Grenade Launcher (both hardpoints) — double same weapon = +50% IB damage from Specialist Bear. Equip Incendiary augment.',
        prioritySkills: [
          { skill: 'Security Bear (1pt)', why: 'IB gets a bubble shield — huge survivability boost with zero downside' },
          { skill: 'Armored Infantry (4pts)', why: 'Gun damage + damage resistance while shield is up — always active early game' },
          { skill: 'Drowning in Brass (5pts)', why: 'Kill stack gun damage — procs on almost every kill, effectively permanent +15% gun dmg' },
          { skill: 'Fire in the Skag Den (3pts)', why: 'Splash damage deals bonus fire damage — this is the most Mayhem-scaled skill in the game, invest early' },
          { skill: 'Torgue Cross-Promotion (3pts)', why: '40% chance to double splash radius — makes explosions cover the whole room' }
        ],
        weapons: 'Any fire-element weapons. Assault rifles and SMGs preferred. Torgue sticky guns (Bounty Hunter pistol, purple Torgue shotguns) synergize perfectly with splash skills.',
        tips: [
          'Use Iron Bear when overwhelmed — it recharges faster than you think with Grizzled',
          'Fire is your best friend — 70% of early enemies are COV (flesh). Stack fire damage',
          'Pick up every white/green/blue weapon you find — don\'t bother farming yet at this level',
          'Complete ALL side quests — the XP difference is significant and early game is more fun when you\'re ahead of enemy levels',
          'The "It\'s Alive" side quest on Athenas (Moxxi\'s quest) gives the Transformer shield — hold onto it for later'
        ],
        farm: null
      },
      {
        phase: 'Mid Game',
        levels: 'Levels 20–40',
        color: '#F5A623',
        icon: '⚙️',
        summary: 'Complete Demolition Woman for the grenade loop. This is when Moze becomes truly unstoppable.',
        actionSkill: 'Iron Bear with V-35 Grenade Launcher + Vanquisher Rocket Pod. Add Active Tracking augment to Vanquisher for homing rockets.',
        prioritySkills: [
          { skill: 'Means of Destruction (3pts)', why: 'Splash damage returns grenades — combined with Vampyr = infinite grenade loop, infinite healing' },
          { skill: 'Vampyr (5pts)', why: 'Grenade hits heal Moze — THIS is why Moze is unkillable. 3% HP per grenade hit × multiple hits = full health on demand' },
          { skill: 'Stainless Steel Bear (5pts)', why: 'More IB health and fuel — lets you stay in IB longer, more Big Surplus/Auto Bear value' },
          { skill: 'Auto Bear (capstone)', why: 'IB stays deployed as autonomous turret after you exit — double your DPS window, massive splash damage' },
          { skill: 'Redistribution (Bottomless Mags, 1pt)', why: 'Crit hits regen ammo — pairs perfectly with Scorching RPMs crit bonus' }
        ],
        weapons: 'Shift toward splash weapons: Torgue shotguns, the Alchemist AR (world drop), or the Recurve Bow from Ambermire. Use Hex grenade — it\'s the best grenade for Vampyr procs.',
        tips: [
          'The Hex grenade (from Gigamind, Skywell-27 on Promethea) is a top priority farm — it follows enemies and hits multiple times, making Vampyr proc constantly',
          'Activate Mayhem Mode as soon as you finish the campaign — even M1 gives better loot',
          'The Big Boom Blaster shield from The Unstoppable (Ambermire, Eden-6) gives grenade regen on shield break — incredible synergy with the grenade loop',
          'Auto Bear turret fires on exit — jump in, fire a rocket, jump out immediately. IB fires for 15 more seconds as turret. Repeat.',
          'Don\'t skip side quests in DLC1 (Handsome Jackpot) — the XP is excellent and the zone drops good loot'
        ],
        farm: { boss: 'Gigamind', location: 'Skywell-27, Promethea', drop: 'Hex grenade', why: 'Best grenade for Vampyr loop — follow enemy + multiple hits = permanent healing' }
      },
      {
        phase: 'Late Game',
        levels: 'Levels 40–72 + Mayhem 1–10',
        color: '#E8272A',
        icon: '🔥',
        summary: 'Push to Mayhem 10. Bloodletter or Flare Bear build. Farm BiS gear. This is where Moze becomes the strongest character in the game.',
        actionSkill: 'For Mozerker: Iron Bear exit immediately after deploying Auto Bear. For Flare Bear: Iron Cub (DLC Bear Mother tree) set to follow you.',
        prioritySkills: [
          { skill: 'Scorching RPMs (5pts, Bottomless Mags)', why: '+15% fire rate and +20% crit — IB gets double these bonuses. Always max this.' },
          { skill: 'Forge (capstone, Bottomless Mags)', why: 'Infinite ammo for currently held weapon. Combined with Click Click — run mag down for max bonus then let Forge regen it mid-fight.' },
          { skill: 'Thin Red Line (3pts, Shield of Retribution)', why: '60% of HP converts to shields — permanently below 50% HP = Desperate Measures always maxed' },
          { skill: 'Desperate Measures (3pts, Shield of Retribution)', why: 'At 1HP (Deathless artifact): permanent +50% gun damage. This is the Mozerker 1HP mechanic.' },
          { skill: 'Short Fuse (capstone, Demolition Woman)', why: 'Gun damage has chance to trigger a Mayhem-scaled explosion. At M10: 7x scaled. Procs frequently.' }
        ],
        weapons: 'BiS: Kaoson (Corrosive, Captain Traunt), Light Show (Incendiary, Billy the Anointed), Backburner (Radiation, Valkyries), Plasma Coil (Shock/Rad, Heavyweight Harker). All need M6+ Mayhem level to drop.',
        tips: [
          'Push straight to Mayhem 10 — M10 gear is valid all the way down to M1. A mediocre M10 gun beats a perfect M5 gun.',
          'Reroll anointments at Crazy Earl (250 Eridium each) — the right anoint can double your DPS',
          'For Bloodletter build: get Deathless artifact first (any source, world drop), then Front Loader shield (The Unstoppable, Ambermire), then farm Bloodletter from Mouthpiece (Ascension Bluff)',
          'Shlooter artifact + Butt Stallion Milk from Borderlands Science machine = dramatically increased legendary drop rates',
          'Captain Traunt (Athenas) is the fastest M10 boss farm — 30 second kill time, Kaoson dedicated drop',
          'Arms Race (Designer\'s Cut DLC) has the Plasma Coil and Re-Volter — essential for both Mozerker and Khaos Queen Amara'
        ],
        farm: { boss: 'Captain Traunt', location: 'Athenas (end of map)', drop: 'Kaoson SMG (M6+)', why: '30-second farm cycle, Kaoson is BiS for every Moze build, corrrosive element shreds armor' }
      }
    ],

    keyFarms: [
      { boss: 'Graveward', location: 'Jakobs Estate, Eden-6', drop: 'World drops (5 legendaries per kill)', difficulty: '★★☆', tip: 'Spawn directly next to arena. Shoot glowing crit spots on body. Kill in 10-15s with decent gear. Best general farm early game.' },
      { boss: 'Captain Traunt', location: 'Athenas (end of zone)', drop: 'Kaoson SMG (M6+), Tankman\'s Shield', difficulty: '★☆☆', tip: 'Fastest M10 boss farm. Shoot his glowing backpack for crits. Use Corrosive — he has armor. 25-30s kill time.' },
      { boss: 'Gigamind', location: 'Skywell-27, Promethea', drop: 'Hex grenade, Messy Breakup', difficulty: '★☆☆', tip: 'Shoot the brain at the top for crits. 20s farm cycle. Top priority for Hex grenade — it makes Vampyr work.' },
      { boss: 'The Unstoppable', location: 'Ambermire, Eden-6', drop: 'Big Boom Blaster shield', difficulty: '★★☆', tip: 'Rare spawn — may need several map resets. Shoot the sacks on his body for crits. Big Boom Blaster is phenomenal for grenade-loop Moze.' },
      { boss: 'Heavyweight Harker', location: 'Arms Race (Designer\'s Cut DLC)', drop: 'Plasma Coil, Torrent', difficulty: '★★★', tip: 'Run Arms Race from start — sprint straight to Harker. Arms Race is a permadeath mode but gear extracted persists.' },
      { boss: 'Jackpot / Freddie', location: 'VIP Tower, DLC1', drop: 'Class mods, Cheap Tips SMG', difficulty: '★★☆', tip: 'Freddie respawns without save-quitting — fast-travel back. Farm for generic class mods until you get the ones you need.' }
    ],

    guardianRank: {
      priority: ['Dead-Eye (Enforcer) — gun damage on kill: always active', 'Hollow Point (Enforcer) — fire DOT on crit hits: adds splash proc for Moze', 'Armored Infantry (Survivor) — reflects Moze\'s IB skill: feels right', 'Resilient (Survivor) — reduce elemental damage: helps in Mayhem modifiers', 'Confident (Survivor) — gun damage when shield is full'],
      notes: 'Moze benefits most from pure gun damage stacking in Guardian Rank. Skip Enforcer\'s crit-focused skills — Moze doesn\'t rely on crits the way FL4K does. Prioritize Enforcer tree first for the damage, then fill Survivor for survivability at M10.'
    },

    mayhem: {
      good: ['Heatwave — extra fire damage: Moze already deals fire', 'Speed Demon — extra movement speed: more fun', 'Slayer — overkill melee: pairs with Auto Bear explosions', 'Boom or Bust — splash damage: Moze is all splash'],
      bad: ['Floor is Lava — constant fire damage hurts: use Transformer shield to counter', 'Rogue Lite — one death = restart: avoid until geared', 'Post Mortem — enemies shoot after death: shotguns hit you a lot', 'Drone Ranger — enemy drones everywhere: prioritize killing drones ASAP'],
      notes: 'Moze with Transformer shield largely ignores Floor is Lava since the Transformer converts shock damage (from the lava fire chain) into shield. At M10/11 you can toggle modifiers from the map screen — reroll bad ones.'
    }
  },

  amara: {
    difficulty: 'Medium',
    diffColor: '#F5A623',
    overview: `Amara rewards elemental weapon knowledge and action skill timing. She starts slower than Moze or FL4K — you won't feel truly powerful until Ties That Bind unlocks around level 25-30. After that, Amara has the best mob-clearing mechanic in the entire game: Phasegrasp with Ties That Bind chains damage from one enemy to every enemy nearby. Her endgame builds (Khaos Queen, Face-Puncher Melee, Spiritual Driver) are top-tier across all content. Pairs beautifully with every elemental weapon type.`,
    playstyle: 'Elemental chain damage / Action Skill spam / Aggressive frontline fighter',
    strengths: ['Best single-target + mob hybrid via Ties That Bind', 'Multiple completely different viable endgame builds', 'Sustainment lifesteal = infinite HP through elemental weapons', 'Avatar capstone gives two AS charges — unmatched uptime', 'Re-Volter + Khaos Queen = strongest shock burst window in game'],
    weaknesses: ['Slow early game — feels underpowered until level 25+', 'Ties That Bind requires specific skill investment to unlock', 'More complex rotation than Moze or FL4K', 'Face-Puncher melee build is very gear-dependent'],

    leveling: [
      {
        phase: 'Early Game',
        levels: 'Levels 1–25',
        color: '#52C41A',
        icon: '🌱',
        summary: 'Brawl tree for survival. Phaseslam for AoE. Push through the slow period — it gets dramatically better at level 25.',
        actionSkill: 'Start with Phaseslam — hits everything nearby, great for crowds. Augment with Downfall (elemental damage) once unlocked.',
        prioritySkills: [
          { skill: 'Clarity (5pts, Brawl)', why: 'Constant HP regen — most important early survival tool. At max: regen doubles after using action skill.' },
          { skill: 'Personal Space (3pts, Brawl)', why: '+36% damage at close range — Amara wants to be in melee range anyway, free damage' },
          { skill: 'Samsara (5pts, Brawl)', why: 'Action skill kills give gun damage + HP regen stacks — chain kills for huge buffs' },
          { skill: 'Tempest (5pts, Fist of the Elements)', why: '+30% elemental damage, +15% shock damage — applies to ALL your weapons and action skill' },
          { skill: 'Sustainment (3pts, Fist of the Elements)', why: 'Elemental weapon damage leeches HP — your primary healing through mid and late game' }
        ],
        weapons: 'Shock SMGs for Promethea (Maliwan enemies have shields everywhere). Fire weapons for Pandora COV. Maliwan weapons preferred — highest elemental damage, best for Sustainment procs.',
        tips: [
          'Amara feels weak at levels 1-15 compared to other VHs — this is normal. She scales extremely well.',
          'Phaseslam is great for getting out of tight spots — jump in the air and slam for AoE damage',
          'Pick up elemental weapons constantly — Sustainment means elemental damage = healing',
          'Complete the Holy Broadcast side quest chain on Athenas — good XP and accessible early',
          'Don\'t neglect shields — Amara has excellent health but shields prevent you from needing HP recovery'
        ],
        farm: null
      },
      {
        phase: 'Mid Game',
        levels: 'Levels 25–45',
        color: '#F5A623',
        icon: '⚙️',
        summary: 'Switch to Phasegrasp + Ties That Bind. This changes everything. Indiscriminate ricochet + Ties That Bind = entire rooms dead from one bullet.',
        actionSkill: 'Phasegrasp with Ties That Bind augment (unlocked at 25pts in Fist of the Elements tree). ALL enemies near your Grasped target share damage.',
        prioritySkills: [
          { skill: 'Indiscriminate (5pts, Fist of Elements)', why: '40% chance bullets ricochet to nearby enemies — already strong, becomes ridiculous when combined with Ties That Bind' },
          { skill: 'Wildfire (5pts, Fist of Elements)', why: 'Status effects spread to nearby enemies — one shock proc spreads to entire group' },
          { skill: 'Laid Bare (3pts, Fist of Elements)', why: 'Enemies hit by AS take +20% damage from ALL sources — best debuff in game for co-op' },
          { skill: 'Ties That Bind (capstone, Fist of Elements)', why: 'The single best mob-clear mechanic in BL3. Damage to Grasped target = damage to ALL linked enemies.' },
          { skill: 'Violent Tapestry (5pts, Mystical Assault)', why: 'Applying status effects gives Rush stacks — Rush = gun damage via Do Harm. Keep applying elements to keep stacks high.' }
        ],
        weapons: 'Recursion (Shock/Radiation, world drop) is insane with Indiscriminate — ricochets chain between all linked enemies. Any Plasma Coil or elemental SMG works. Hellshock (world drop) covers fire and shock.',
        tips: [
          'The Ties That Bind loop: Phasegrasp the biggest enemy → shoot it → everything linked to it takes the same damage → chain kills fill Samsara stacks → HP and gun damage at max',
          'Phasezerker class mod (world drop) instantly gives max Rush stacks on AS activation — transforms Do Harm into massive damage burst',
          'Swap between elements based on enemy health type — don\'t just use one element',
          'Re-Volter shield (Arms Race DLC) is priority mid-game — shock burst on AS start = massive shock window for Sustainment',
          'Avatar capstone (Mystical Assault tree) is the ultimate goal — gives a second AS charge'
        ],
        farm: { boss: 'Killavolt', location: 'Lectra City, Promethea', drop: 'Monarch SMG-equivalent AR (M6+)', why: 'DO NOT USE SHOCK — he absorbs it and heals. Use fire + corrosive only. Huge crit spots on his armor.' }
      },
      {
        phase: 'Late Game',
        levels: 'Levels 45–72 + Mayhem 1–10',
        color: '#9B59B6',
        icon: '⚡',
        summary: 'Khaos Queen build online. Avatar double-cast. Two Phasegrasps = two room-clearing chains per use. Farm BiS weapons and roll for best anointments.',
        actionSkill: 'Phasegrasp with Ties That Bind + Soul Sap augments. Two charges via Avatar capstone. Throws two Phasegrasps in succession.',
        prioritySkills: [
          { skill: 'Do Harm (5pts, Mystical Assault)', why: 'Consumes Rush stacks on AS activation = massive gun damage spike. With Phasezerker: instant 25 stacks = +75% gun damage' },
          { skill: 'Awakening (5pts, Mystical Assault)', why: 'Increases max Rush cap — more stacks = bigger Do Harm burst. With Phasezerker: always at cap.' },
          { skill: 'Restless (5pts, Mystical Assault)', why: '+40% action skill cooldown rate — more Phasegrasp = more Ties That Bind chains = more DPS' },
          { skill: 'Avatar (capstone, Mystical Assault)', why: 'THE best capstone for Amara. Second action skill charge. Cast → kill with AS → half refill → cast again immediately.' },
          { skill: 'Wrath (5pts, Mystical Assault)', why: '+20% gun damage while AS is on cooldown — since you\'re always cycling, this is essentially always active' }
        ],
        weapons: 'BiS: Plasma Coil (Shock/Rad, Arms Race), Hellshock (Shock/Fire, world drop), Light Show (Fire, Billy the Anointed M6+), Recursion (Shock/Rad, world drop). Anoint priority: "ASE Next 2 Mags +100% Elemental Damage" or "Consecutive Hits +1% per hit".',
        tips: [
          'Best anoint for Khaos Queen: "ASE: next 2 mags deal +100% elemental damage" — trigger with every AS use for permanent uptime with short cooldown',
          'Re-Volter shield is BiS — it gives a shock burst window on AS activation. Swap to shock weapon during this window.',
          'Pearl of Ineffable Knowledge artifact is BiS — stacks up to +100% weapon damage after 15 consecutive hits, constantly active',
          'For Face-Puncher melee: you need Unleash the Dragon artifact (Flamerock Refuge, DLC4). This applies permanent fire DOT via melee that ignores immunities.',
          'Phaseflare (DLC4 Enlightened Force tree) is fun for variety — Cold Hearted augment converts to cryo and frozen enemies take 3x melee damage'
        ],
        farm: { boss: 'Heavyweight Harker', location: 'Arms Race, Designer\'s Cut DLC', drop: 'Plasma Coil, Re-Volter', why: 'Both are top-tier BiS for Amara. Arms Race is a permadeath mini-game — gear extracted via exit button persists.' }
      }
    ],

    keyFarms: [
      { boss: 'Killavolt', location: 'Lectra City, Promethea', drop: 'Monarch (M6+), Electric Banjo', difficulty: '★★☆', tip: 'NEVER use shock — he absorbs it and heals. Fire + Corrosive only. Huge crit spots on his back panels. Fight the shield rhythm.' },
      { boss: 'Graveward', location: 'Jakobs Estate, Eden-6', drop: 'Multiple world drops (5 per kill)', difficulty: '★★☆', tip: 'Classic early-to-mid farm. Massive crit spots. With Ties That Bind online, this becomes a 10-second fight.' },
      { boss: 'Heavyweight Harker', location: 'Arms Race, Designer\'s Cut DLC', drop: 'Plasma Coil, Re-Volter, Torrent', difficulty: '★★★', tip: 'Sprint to him immediately on Arms Race entry. The Plasma Coil is BiS for Khaos Queen. Re-Volter is BiS shield.' },
      { boss: 'Billy the Anointed', location: 'Jakobs Manor, Eden-6', drop: 'Light Show pistol (M6+)', difficulty: '★★★', tip: 'Annoyingly tanky fight. Use Ties That Bind on any nearby trash to clear adds first. Light Show fires 4 extra pellets that ricochet — incredible with Indiscriminate.' },
      { boss: 'Tom & Xam', location: 'Heart\'s Desire, DLC2', drop: 'DLC2 world drops, Old God shield', difficulty: '★★☆', tip: 'Kill one, fast-travel back to respawn both. No save-quit needed. Old God shield is excellent — +50% elemental damage on shield break.' },
      { boss: 'Evil Mordecai', location: 'Castle Crimson, DLC4', drop: 'Flare class mod (Moze)', difficulty: '★★★', tip: 'Also drops Amara\'s Dragon class mod (melee scaling). This DLC is packed with great loot for every character.' }
    ],

    guardianRank: {
      priority: ['Hollow Point (Enforcer) — fire proc on crits: triggers Violent Tapestry Rush stacks', 'Dead-Eye (Enforcer) — gun damage after kill: stacks with Samsara', 'Headshot Master (Hunter) — increased crit damage: for Face-Puncher build', 'Resilient (Survivor) — elemental resistance: Amara fights in melee range'],
      notes: 'Amara benefits most from Hollow Point because it creates fire procs from crits — this triggers Violent Tapestry Rush stacks even when not actively using action skills. Prioritize Enforcer tree for the proc-based synergies, then Hunter for crit damage on the Face-Puncher build.'
    },

    mayhem: {
      good: ['Chain Gang — enemies chain lightning between each other: hits Sustainment for healing', 'Heatwave — extra fire damage: Amara\'s DOT spreads via Wildfire', 'Slayer — overkill → melee bonus: procs often with Ties That Bind mass kills'],
      bad: ['Buddy System — requires co-op to deal full damage: strong penalties solo', 'Playing Dirty — only one shot fires: Amara wants full auto fire rate', 'Rogue Lite — permadeath style: avoid unless very confident'],
      notes: 'Amara\'s Sustainment and Ties That Bind make most modifiers manageable. The biggest issues are damage penalties (Buddy System) or mechanics that restrict fire rate. Reroll any modifier that limits the number of projectiles.'
    }
  },

  flak: {
    difficulty: 'Medium-Hard',
    diffColor: '#F5A623',
    overview: `FL4K is the most mechanically demanding Vault Hunter but rewards mastery with the highest single-hit damage in the game. The Megavore capstone (body shots count as crits) completely transforms every multi-pellet weapon. Combined with St4ckbot class mod's stacking crit bonus, FL4K with a Skullmasher can delete raid bosses in seconds. FL4K is the undisputed S-tier boss killer. The Gamma Burst + Red Fang setup is also the most survivable solo build in BL3 — pet tanks everything while FL4K applies radiation. Excellent for solo endgame but more fragile than Moze during mid-game.`,
    playstyle: 'Critical hit specialist / Pet companion synergy / Boss deleter via Fade Away',
    strengths: ['Highest single-target damage in the game via GITM + St4ckbot', 'Megavore makes every multi-pellet weapon absurdly strong', 'Red Fang + Shared Soul = unkillable solo in endgame', 'Pet provides passive HP regen (Spiderant) or constant damage (Jabber/Skag)', 'Rakk Attack build has near-zero cooldown — constant AS uptime'],
    weaknesses: ['Most fragile mid-game VH without proper pet setup', 'St4ckbot + Megavore requires M6+ gear to fully activate', 'GITM build is complex to optimize correctly', 'Very gear-dependent for bossing — weak without Skullmasher + St4ckbot'],

    leveling: [
      {
        phase: 'Early Game',
        levels: 'Levels 1–20',
        color: '#52C41A',
        icon: '🌱',
        summary: 'Stalker tree for speed and survivability. Spiderant pet for HP regen. Fade Away for free crits on demand.',
        actionSkill: 'Fade Away — 3 guaranteed crits make weak enemies explode, bosses take huge damage. Spiderant Centurion pet gives constant HP regen.',
        prioritySkills: [
          { skill: 'Self-Repairing System (5pts, Stalker)', why: 'Permanent HP regen + max health increase — FL4K needs this early, much more fragile than Moze' },
          { skill: 'Overclocked (5pts, Stalker)', why: 'Free +20% fire rate while pet is alive — always active, zero conditions' },
          { skill: 'Furious Attack (5pts, Stalker)', why: 'Gun damage stacks after each shot — builds quickly during sustained fire, huge DPS on any weapon' },
          { skill: 'Eager to Impress (5pts, Stalker)', why: 'Kills reduce Fade Away cooldown — more kills = more Fade Away = more guaranteed crits' },
          { skill: 'Lick the Wounds (1pt, Stalker)', why: 'Pet revives you from FFYL — critical for solo play. Spiderant rushes to FL4K and revives. Lifesaver.' }
        ],
        weapons: 'Any high-damage weapon works. Jakobs (high crit multiplier, ricochet on crit) are best for FL4K. Dahl SMGs for sustained fire rate. Farm Moxxi\'s Crit SMG by tipping her repeatedly at Sanctuary — excellent early damage.',
        tips: [
          'Always use Fade Away the instant you\'re in a tough spot — 3 free crits can turn around any fight',
          'Spiderant Centurion is your best early pet — constant HP regen means you\'re never in danger of dying from damage over time',
          'Keep Attack Command (hold AS button) on cooldown — it damages enemies and recharges faster with Sic \'Em',
          'FL4K does NOT have Moze\'s grenade loop — you need to actually kill enemies to restore HP. Stay aggressive.',
          'The Moxxi Crit SMG is a top priority early farm — tip Moxxi in Sanctuary repeatedly until she gives it (guaranteed after enough tips)'
        ],
        farm: null
      },
      {
        phase: 'Mid Game',
        levels: 'Levels 20–45',
        color: '#F5A623',
        icon: '⚙️',
        summary: 'Pivot to Hunter tree. Stack kill skills. Work toward Megavore. This is when crits become your entire personality.',
        actionSkill: 'Fade Away stays best AS through mid-game. Switch pet to Gunslinger Jabber (+5% crit damage while active, rocket launcher Attack Command).',
        prioritySkills: [
          { skill: 'Interplanetary Stalker (5pts, Hunter)', why: 'Kill skill stacking — each enemy type killed (Human/Robot/Beast) gives different bonus, all stack to 15 total' },
          { skill: 'Leave No Trace (3pts, Hunter)', why: '36% chance to add ammo to mag on crit — with later Megavore (all hits crit), this makes ammo infinite' },
          { skill: 'Big Game (3pts, Hunter)', why: 'Hunter Skills get +75% bonus effect and duration — amplifies Interplanetary Stalker, Grim Harvest, The Most Dangerous Game' },
          { skill: 'Grim Harvest (3pts, Hunter)', why: 'Kill Skill — killing adds +15% crit damage. With Big Game: +26% crit. With Bounty Hunter class mod: permanent.' },
          { skill: 'Head Count (3pts, Hunter)', why: 'Crits reduce Fade Away cooldown — with Megavore (all hits crit), you\'re chain-using Fade Away constantly' }
        ],
        weapons: 'Jakobs Assault Rifles (Lucian\'s Call — crits ricochet to nearby enemies, chains through packs). Any shotgun with multiple pellets starts getting strong — each pellet can crit independently.',
        tips: [
          'The Most Dangerous Game: killing a Badass gives huge bonus. Combined with Big Game: stays active for a long time. Prioritize Badass kills.',
          'Switch to Gunslinger Jabber at mid-game — his Attack Command is a rocket launcher which deals massive damage on command',
          'Jakobs weapons with FL4K are special: ricochet on crit chains through groups of enemies. Each ricochet also procs Leave No Trace for ammo.',
          'Ward shield (drops from Graveward) is an excellent mid-game shield — more shield depleted = more gun damage + movement speed',
          'Start farming Moxxi\'s Crit SMG if you haven\'t — it shreds through mid-game with the fire rate bonuses from Overclocked'
        ],
        farm: { boss: 'Graveward', location: 'Jakobs Estate, Eden-6', drop: 'Ward Shield + world drops', why: 'Ward gives damage when shield depleted — synergizes with aggressive FL4K play. Also great world drop rates.' }
      },
      {
        phase: 'Late Game',
        levels: 'Levels 45–72 + Mayhem 6–10',
        color: '#52C41A',
        icon: '🎯',
        summary: 'Megavore changes everything. Farm St4ckbot class mod at M6+. Build toward GITM boss killer or Red Fang radiation tank. These are the strongest solo builds in BL3.',
        actionSkill: 'GITM Build: Fade Away with Guerrillas in the Mist augment — fire all ammo freely, all crits via Megavore. Red Fang Build: Gamma Burst with Atomic Aroma augment.',
        prioritySkills: [
          { skill: 'Megavore (capstone, Hunter)', why: 'THE most transformative skill in BL3. Every hit is a crit. Skullmasher 5 pellets × 3 shots = 15 crits. Multi-pellets now delete bosses.' },
          { skill: 'Two F4ng (5pts, Hunter)', why: '40% chance to fire extra projectile — with Megavore: extra projectile that also crits. With Skullmasher: 40% chance for 10 crits in 3 shots.' },
          { skill: 'Atomic Aroma (Master tree, 1pt passive)', why: 'During Gamma Burst: pet emits constant radiation AoE. Mayhem-scaled. All nearby enemies take radiation damage every second.' },
          { skill: 'Barbaric Yawp (5pts, Master)', why: 'Amplifies all pet bonuses by +50%. Makes Spiderant Countess corrosive proc stronger, Atomic Aroma damage higher.' },
          { skill: 'Shared Soul (capstone, Trapper DLC)', why: 'If FL4K goes into FFYL, pet immediately revives them. Works with EVERY pet. Effectively unkillable in solo play.' }
        ],
        weapons: 'GITM BiS: Skullmasher (5-pellet Jakobs sniper, drops from Anathema the Relentless in Guardian Breach), Monarch (Corrosive, from Killavolt). Red Fang BiS: Plasma Coil, any radiation weapon, Redistributor for shields. St4ckbot class mod from DLC2 Anointeds.',
        tips: [
          'GITM rotation: Enter Fade Away → dump full Skullmasher magazine (5 pellets × every shot) → all 5 pellets crit → St4ckbot stacks to 50 fast → exit Fade Away → Head Count procs recharge → repeat in seconds',
          'Red Fang gives pet 35% bonus damage and makes ALL enemies target the pet instead of FL4K. Pet is unkillable with Gamma Burst active. You shoot freely.',
          'St4ckbot (from DLC2) stacks up to +10% crit per consecutive crit, max 50 stacks = +500% crit damage. With Megavore: hit 50 stacks in 2 shots.',
          'Bounty Hunter class mod: killing a Badass activates The Most Dangerous Game (huge crit/gun damage buff). With Big Game: lasts very long. With Red Fang all enemies target pet: pet kills Badasses, FL4K gets the buff.',
          'Arms Race DLC farms: Harker for Plasma Coil, Torrent. These are BiS weapons for the Gamma Burst build.'
        ],
        farm: { boss: 'Killavolt', location: 'Lectra City, Promethea', drop: 'Monarch (M6+)', why: 'With Megavore: Monarch\'s 4 projectiles all crit. With Two F4ng: potentially 8 crits per trigger pull. Room-clearing power.' }
      }
    ],

    keyFarms: [
      { boss: 'Killavolt', location: 'Lectra City, Promethea', drop: 'Monarch (M6+)', difficulty: '★★☆', tip: 'DO NOT use shock. Fire + Corrosive only. Target his back panels for crits. With Megavore online: kill in 3-5 seconds.' },
      { boss: 'Anathema the Relentless', location: 'Guardian Breach (endgame area)', drop: 'Skullmasher, Septimator', difficulty: '★★★', tip: 'BiS boss for GITM FL4K. Skullmasher 5-pellet sniper × Megavore = delete anything. Long fight but worth the farm.' },
      { boss: 'Jackpot Boss', location: 'VIP Tower, DLC1', drop: 'Bounty Hunter class mod, St4ckbot (world drop)', difficulty: '★★☆', tip: 'Bounty Hunter is excellent for Red Fang builds. DLC1 world drops include multiple FL4K class mods.' },
      { boss: 'Heavyweight Harker', location: 'Arms Race, DLC Designer\'s Cut', drop: 'Plasma Coil, Torrent, Kickcharger', difficulty: '★★★', tip: 'Sprint directly to Harker on Arms Race entry. Plasma Coil is BiS for Gamma Burst radiation builds.' },
      { boss: 'Tom & Xam', location: 'Heart\'s Desire, DLC2', drop: 'Old God shield, DLC2 class mods', difficulty: '★★☆', tip: 'Kill one, fast-travel to respawn. St4ckbot class mod can drop here as DLC2 world loot.' },
      { boss: 'Captain Traunt', location: 'Athenas', drop: 'Kaoson (M6+)', difficulty: '★☆☆', tip: 'Fastest farm in game. With Megavore + Monarch: 10-15s kill. Kaoson works well in Red Fang radiation builds for corrosive coverage.' }
    ],

    guardianRank: {
      priority: ['Dead-Eye (Enforcer) — gun damage: always active with Megavore crits', 'Headshot Master (Hunter) — critical damage: multiplies St4ckbot stacks', 'Hollow Point (Enforcer) — fire proc on crit: triggers all the time via Megavore', 'Overpower (Enforcer) — damage buff randomly: huge spike damage'],
      notes: 'FL4K gets the most from crit-focused Guardian perks because Megavore makes every single hit a crit. Headshot Master in particular is extremely strong — it increases crit damage by a flat bonus that multiplies with St4ckbot\'s stacks. Prioritize Hunter tree (yes it exists in Guardian Rank too) for crit damage, then Enforcer for gun damage.'
    },

    mayhem: {
      good: ['Playing Dirty — chance for double projectile: with Two F4ng already doing this, it\'s additive', 'Rocketeer — bonus rocket on gun hits: extra explosions with FL4K speed kills', 'Slayer — overkill melee: Fade Away crits chain overkill constantly'],
      bad: ['Buddy System — requires co-op: FL4K solo loses significant damage', 'Healy Avoidance — enemies dodge your shots: crits miss more often, frustrating with GITM', 'Drone Ranger — flying drones everywhere: FL4K\'s Rakk and Fade Away struggle with airborne targets'],
      notes: 'FL4K cares less about damage modifiers and more about accuracy/hit modifiers. Anything that makes enemies dodge or reduces hit chance is terrible for GITM builds. Reroll Healy Avoidance, Drone Ranger, and Buddy System immediately.'
    }
  },

  zane: {
    difficulty: 'Medium',
    diffColor: '#F5A623',
    overview: `Zane is unique — he equips TWO action skills simultaneously but loses his grenade slot. He's weak early without Seein' Dead but becomes the most mobile and arguably the most fun VH in endgame. Seein' Dead class mod (from DLC1 Jackpot boss) transforms him completely: every bullet has a ~4% chance to activate ALL kill skills simultaneously. With Violent Momentum converting speed into gun damage, Zane rewards players who keep moving. Best described as a speed-freak assassin who turns an entire room into a bullet hell in 3 seconds.`,
    playstyle: 'Speed-based DPS / Kill skill stacking / Digi-Clone diversion / Fast map clear',
    strengths: ['Highest movement speed of any VH — Violent Momentum = constant DPS', 'Two action skills simultaneously = twice the options', 'Old-U clone swap = instant revive from death', 'Seein\' Dead makes every bullet work toward activating kill skills', 'Playing Dirty doubles projectiles after every kill — absurd burst'],
    weaknesses: ['NO GRENADES when two AS equipped — early game feels limiting', 'Requires Seein\' Dead (DLC1) to reach full potential — feels weak before it', 'More active playstyle — can\'t stand still, must maintain movement', 'Clone setup can be finicky in tight spaces'],

    leveling: [
      {
        phase: 'Early Game',
        levels: 'Levels 1–20',
        color: '#52C41A',
        icon: '🌱',
        summary: 'Build toward Violent Momentum and speed. Equip both AS slots immediately. Clone distracts enemies, SNTNL provides cover fire.',
        actionSkill: 'SNTNL Drone (primary) + Digi-Clone (secondary). Both equipped simultaneously. No grenades — use this tradeoff to your advantage: Clone distracts, SNTNL fires, you move freely.',
        prioritySkills: [
          { skill: 'Violent Speed (5pts, Hitman)', why: 'Kill = movement speed stacks. At 3 stacks + Violent Momentum: you\'re dealing 50%+ more gun damage just by running around.' },
          { skill: 'Cold Bore (5pts, Hitman)', why: 'First shot from newly drawn weapon deals bonus cryo damage — swap weapons constantly to proc constantly' },
          { skill: 'Donnybrook (5pts, Hitman)', why: 'Kill skill giving gun damage + HP regen to you and allies. With later Seein\' Dead: procs every few shots even without kills.' },
          { skill: 'Synchronicity (5pts, Doubled Agent)', why: '+20% gun damage per active action skill. Both AS active = free +20% gun damage at 1 point, scales to +100% at max.' },
          { skill: 'Cool Hand (5pts, Hitman)', why: '+25% reload speed — with fast fire rate weapons, constant reloading becomes less punishing' }
        ],
        weapons: 'Any high fire rate weapon. SMGs are excellent for Seein\' Dead proc rate (many pellets per second). Dahl burst weapons work well. Vladof assault rifles with underbarrel attachments give versatility. Avoid slow single-shot weapons early.',
        tips: [
          'Zane without grenades relies on Clone and SNTNL for crowd control — position Clone where enemies are clustered so it tanks for you',
          'Keep moving at ALL TIMES. Stop moving = lose Violent Momentum = lose gun damage. Zane rewards aggressive movement.',
          'Fractal Frags (Doubled Agent) makes your Clone throw a copy of your equipped grenade on spawn — but you have no grenades. Skip this until you have grenade-generating gear.',
          'Quick Breather (Doubled Agent): swapping with clone instantly recharges your shield. Great for staying alive early game.',
          'SNTNL cryo anoint is very good — enemies frozen by SNTNL take 3x melee damage + are easier to hit criticals on'
        ],
        farm: null
      },
      {
        phase: 'Mid Game',
        levels: 'Levels 20–40',
        color: '#F5A623',
        icon: '⚙️',
        summary: 'Push to Playing Dirty and Seein\' Red. These two skills working together give you explosive kill chains. Clone swap survivability comes online.',
        actionSkill: 'Seein\' Red is the key mid-game skill — instantly activates all kill skills when you use an action skill. Stack both SNTNL and Clone for constant cycling.',
        prioritySkills: [
          { skill: 'Violent Momentum (5pts, Hitman)', why: 'Speed directly equals gun damage. At max speed with 3 Violent Speed stacks: +100% gun damage from movement alone.' },
          { skill: 'Playing Dirty (5pts, Hitman)', why: 'Kill skill: next 5 shots fire an extra projectile after a kill. At 5pts: guaranteed double projectiles × 5 shots per kill. Chains into next kill.' },
          { skill: 'Seein\' Red (1pt, Hitman)', why: 'Activating an action skill immediately triggers ALL kill skills at max. No kill needed. Just swap Clone → instant max DPS.' },
          { skill: 'Old-U (1pt, Doubled Agent)', why: 'When Zane would die: instead swaps with Clone, instantly reviving at full health. Destroys Clone. Then recreate Clone — effectively infinite revives.' },
          { skill: 'Quick Breather (1pt, Doubled Agent)', why: 'Clone swap = instant shield recharge. With Confident Competence: shield full = +60% gun damage. Swap clone = full DPS immediately.' }
        ],
        weapons: 'Start building toward Plasma Coil (Arms Race) — its multiple projectiles per shot means more Seein\' Dead proc chances. Any high-pellet-count weapon (Hellwalker, Brainstormer, Light Show) works. Night Hawkin SMG (Droughts, world drop) cryo + fire cycle is excellent.',
        tips: [
          'Rotation with Seein\' Red: Deploy Clone (activates kill skills) → Playing Dirty gives double shots → kill chain → each kill gives more Playing Dirty shots → chain reactions',
          'Clone doesn\'t use ammo and has decent damage — let it do work while you move around for Violent Momentum',
          'SNTNL can be aimed — press AS while aiming to deploy it at a specific location. Use this to attack flanks or cover positions you can\'t safely reach.',
          'Death Follows Close (capstone, Hitman) dramatically amplifies ALL kill skills — push toward it for late game',
          'The clone can swap weapon in your loadout slots — equip strong weapons in slots 1 and 3 for best clone damage'
        ],
        farm: { boss: 'Jackpot Boss', location: 'VIP Tower, DLC1', drop: 'Seein\' Dead class mod (33% drop)', why: 'This single class mod transforms Zane from good to broken. ~4% per hit to activate ALL kill skills. Get this ASAP.' }
      },
      {
        phase: 'Late Game',
        levels: 'Levels 40–72 + Mayhem 1–10',
        color: '#4A9BFF',
        icon: '⚡',
        summary: 'Seein\' Dead fully online. Death Follows Close capstone doubles all kill skill power. Speed equals unlimited damage. Farm BiS weapons and roll anointments.',
        actionSkill: 'SNTNL (Static Field augment — shield strip) + Digi-Clone (Synchronize augment — swap heals both). Seein\' Red activates all skills on either deployment.',
        prioritySkills: [
          { skill: 'Death Follows Close (capstone, Hitman)', why: 'ALL kill skills dramatically increased in power and duration. Playing Dirty doubles shots for 50% longer. Violent Speed stacks higher. Donnybrook gun damage much higher.' },
          { skill: 'Confident Competence (5pts, Under Cover)', why: 'Shield at full = +60% gun damage and accuracy. Quick Breather keeps shield full. Constant +60% gun damage bonus.' },
          { skill: 'Good Misfortune (3pts, Hitman)', why: 'Kill skill: each kill extends SNTNL duration by 4.5s. With Seein\' Dead activating Good Misfortune on every hit: SNTNL never expires in a fight.' },
          { skill: 'Distributed Denial (1pt, Under Cover)', why: 'Barrier shares shield effects — Transformer shield makes everyone absorb shock damage. Re-Charger makes everyone instantly recharge on depletion.' },
          { skill: 'Salvation (1pt, Hitman)', why: 'Kill skill: killing an enemy gives Zane and Clone lifesteal. With Seein\' Dead: this activates frequently enough to keep you at full HP through sustained fire.' }
        ],
        weapons: 'BiS: Plasma Coil (Shock/Rad, Arms Race Harker), Redistributor (Shock, Wotan/Takedown), Light Show (Fire, Billy M6+), Yellowcake (Radiation, Eista M6+). Anoint priority: "SNTNL Active: +100% Cryo Damage" or "Consecutive Hits +1% damage per hit". Transformer shield for Futility Belt synergy.',
        tips: [
          'The full Seein\' Dead loop: Each bullet has ~4% chance to activate all kill skills → Playing Dirty triggers → next 5 shots double projectiles → each double-projectile shot has 2 chances for Seein\' Dead → loop accelerates',
          'Redistributor (Maliwan Takedown, Wotan drop): on killing a shielded enemy, chains shock to nearby enemies and restores your shield. With Seein\' Dead: procs kill skills → kills all nearby → Redistributor chains everywhere.',
          'Yellowcake (radiation rocket launcher from Eista the Invincible, DLC2): has massive unlisted projectile counts. Seein\' Dead proc rate makes it near-constant skill activation.',
          'SNTNL cryo anoint: during SNTNL uptime, your weapons deal +100% cryo damage. With Good Misfortune keeping SNTNL permanent: constant +100% cryo damage to all weapons.',
          'The Professional tree (DLC4): MNTIS Shoulder Cannon fires charges that trigger all action skill anointments. With Eraser capstone: crits pierce enemies. Rotates well with Seein\' Dead builds.'
        ],
        farm: { boss: 'Jackpot Boss', location: 'VIP Tower, DLC1', drop: 'Seein\' Dead class mod (33% drop rate)', why: 'Priority #1 for Zane. No other farm matters as much. Without Seein\' Dead, Zane is functional. With it, he\'s top-tier.' }
      }
    ],

    keyFarms: [
      { boss: 'Jackpot (VIP Tower boss)', location: 'VIP Tower, DLC1', drop: 'Seein\' Dead class mod (33% rate)', difficulty: '★★☆', tip: 'Farm Freddie first (spawns before Jackpot, no save-quit needed) then push to Jackpot. The Seein\' Dead mod is Zane\'s most important piece of gear.' },
      { boss: 'Katagawa Jr.', location: 'Atlas HQ, Promethea', drop: 'Sand Hawk sniper (M6+)', difficulty: '★★☆', tip: 'Sand Hawk fires in a bird pattern — all pellets crit with Megavore. For Zane: all pellets proc Seein\' Dead simultaneously. Incredible synergy.' },
      { boss: 'Wotan the Invincible', location: 'Midnight\'s Cairn Takedown', drop: 'Redistributor (Shock), The Dictator', difficulty: '★★★', tip: 'Hardest base game boss. Redistributor is exceptional for Zane — shield chain procs Good Misfortune and extends SNTNL. Bring Shock + Corrosive.' },
      { boss: 'Heavyweight Harker', location: 'Arms Race, Designer\'s Cut', drop: 'Plasma Coil, Yellowcake, Torrent', difficulty: '★★★', tip: 'Plasma Coil fires many projectiles = many Seein\' Dead proc opportunities. Yellowcake is the highest DPS rocket launcher for Zane.' },
      { boss: 'Eista the Invincible', location: 'Skittermaw Basin, DLC2', drop: 'Yellowcake (M6+)', difficulty: '★★★', tip: 'Yellowcake has many unlisted projectiles that trigger Seein\' Dead constantly. Excellent for Zane despite being a launcher.' },
      { boss: 'Captain Traunt', location: 'Athenas', drop: 'Kaoson (M6+)', difficulty: '★☆☆', tip: 'Fastest farm in game. Kaoson has amazing pellet count for Seein\' Dead procs and is viable in multiple Zane builds for corrosive coverage.' }
    ],

    guardianRank: {
      priority: ['Dead-Eye (Enforcer) — gun damage: stacks with Violent Momentum movement bonus', 'Resilient (Survivor) — elemental resistance: Zane moves into danger often', 'Confident (Survivor) — gun damage at full shield: with Quick Breather always at full shield = always active', 'Overpower (Enforcer) — damage burst: synergizes with Playing Dirty burst windows'],
      notes: 'Zane benefits from a balance of Enforcer (gun damage, which stacks with all his speed bonuses) and Survivor (survivability to enable aggressive movement). Confident Competence from Guardian Rank stacks with Confident Competence from the Under Cover tree — they stack differently.'
    },

    mayhem: {
      good: ['Speed Demon — extra movement speed: Violent Momentum converts this directly to gun damage', 'Slayer — overkill melee: Playing Dirty double shots trigger frequent overkill', 'Drone Ranger — adds drones: Clone absorbs them and Zane ignores them'],
      bad: ['Buddy System — co-op requirement: solo Zane loses significant damage on single enemies', 'Rogue Lite — permadeath: Zane relies on Old-U to survive, not perfect execution', 'Post Mortem — enemies fire after death: fast-clearing Zane triggers many at once'],
      notes: 'Speed Demon is a uniquely powerful modifier for Zane that is terrible for everyone else — extra movement speed translates directly into gun damage through Violent Momentum. Always prefer keeping this modifier when it appears. Reroll Buddy System and Post Mortem first.'
    }
  }

};

if (typeof module !== 'undefined') module.exports = CHAR_GUIDES;
