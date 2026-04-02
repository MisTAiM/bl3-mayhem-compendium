/* ============================================================
   BORDERLANDS 3 — MAYHEM 10 COMPENDIUM DATA
   All characters, weapons, planets, enemies, modifiers
   ============================================================ */

const BL3 = {

  // ── ELEMENTAL SYSTEM ─────────────────────────────────────
  elements: [
    { id: 'fire',      name: 'Incendiary',  color: '#E8272A', icon: 'fire',      vs: { flesh: 175, shield: 50,  armor: 50,  eridian: 75  }, dot: '15 ticks / 5s', effect: 'Burning — enemies flee, high DOT on flesh' },
    { id: 'shock',     name: 'Shock',       color: '#4A9BFF', icon: 'bolt',      vs: { flesh: 75,  shield: 200, armor: 75,  eridian: 50  }, dot: '9 ticks / 3s',  effect: 'Electrocuted — brief stun, strip shields' },
    { id: 'corrosive', name: 'Corrosive',   color: '#52C41A', icon: 'biohazard', vs: { flesh: 70,  shield: 50,  armor: 175, eridian: 100 }, dot: '21 ticks / 7s', effect: 'Melting — longest DOT, penetrates armor' },
    { id: 'cryo',      name: 'Cryo',        color: '#00D4FF', icon: 'snowflake', vs: { flesh: 75,  shield: 50,  armor: 150, eridian: 100 }, dot: 'None',          effect: 'Frozen — immobilize 5s, 3x melee damage' },
    { id: 'radiation', name: 'Radiation',   color: '#9B59B6', icon: 'radiation', vs: { flesh: 100, shield: 100, armor: 65,  eridian: 100 }, dot: '8s aura',       effect: 'Irradiated — death explosion chains to nearby' },
    { id: 'kinetic',   name: 'Kinetic',     color: '#888888', icon: 'bullet',    vs: { flesh: 100, shield: 100, armor: 100, eridian: 100 }, dot: 'None',          effect: 'Universal — no bonus, no penalty, always reliable' }
  ],

  healthTypes: [
    { id: 'flesh',   name: 'Flesh',   color: '#E8272A', best: 'fire',      worst: 'corrosive', examples: 'COV, bandits, wildlife, humans' },
    { id: 'shield',  name: 'Shield',  color: '#4A9BFF', best: 'shock',     worst: 'fire',      examples: 'Shielded troops, Maliwan soldiers, bosses' },
    { id: 'armor',   name: 'Armor',   color: '#F5A623', best: 'corrosive', worst: 'fire',      examples: 'Robots, Maliwan heavies, Saurians, Badasses' },
    { id: 'eridian', name: 'Eridian', color: '#9B59B6', best: 'corrosive', worst: 'shock',     examples: 'Guardians — cycle resist every 15-20s' }
  ],

  // ── CHARACTERS ───────────────────────────────────────────
  characters: {

    moze: {
      name: 'Moze',
      title: 'The Gunner',
      color: '#E8272A',
      tagline: 'Splash damage god. Iron Bear. Never reload.',
      description: 'Former Vladof soldier who pilots a 15-ton mech called Iron Bear. The master of splash damage and infinite ammo. At M10 her Mayhem-scaled skills make her the queen of DPS.',
      actionSkill: 'Iron Bear — deploys a mech with two arm cannons. Moze enters the cockpit and fights from inside.',
      trees: [
        { name: 'Bottomless Mags', color: '#4A9BFF', focus: 'Infinite Ammo / Fire Damage', capstone: 'Forge (constant mag regen)' },
        { name: 'Shield of Retribution', color: '#F5A623', focus: 'Shields / Gun Damage', capstone: 'Tenacious Defense (+40% gun dmg on shield break)' },
        { name: 'Bear Mother', color: '#E8272A', focus: 'Iron Bear / Splash', capstone: 'Auto Bear (IB stays as turret)' },
        { name: 'Bear Trooper', color: '#9B59B6', focus: 'Iron Bear Armor / IB Weapons', capstone: 'Deadlines (IB duration)' }
      ],
      builds: [
        {
          name: 'Flare Bear (Iron Cub)', tier: 'S', type: 'IB/IC DPS',
          description: 'Flare mod: up to +100% weapon damage while Iron Cub is active. With Eternal Machine capstone: infinite fuel = permanent damage cap. Iron Cub also triggers Baby Nukes radiation explosions at M10 (31x scaled). Community name: Flare Bear.',
          skills: ['Short Fuse (M10: 7x scaled)', 'Fire in the Skag Den (M10: 31x scaled)', 'Means of Destruction', 'Cloud of Lead', 'Scorching RPMs'],
          mod: 'Flare (5/5 MoD + 5/5 CoL rolls)', shield: 'Front Loader', artifact: 'Blast Master', grenade: 'Hex Incendiary',
          anoint: 'ASE +200% Splash Damage 18s',
          weapons: ['Light Show (Incendiary)', 'Backburner (Radiation)', 'Kyb\'s Worth (Fire/Corrosive)', 'Kaoson (Corrosive)']
        },
        {
          name: 'Mozerker Forever (Bloodletter 1HP)', tier: 'S', type: 'Near-Unkillable DPS',
          description: 'Named Mozerker Forever by MentalMars (v8.0 is current). Bloodletter converts ALL healing to shield. Deathless removes all HP. Front Loader reserves 60% HP as shield. Result: permanently at 1HP with massive shields = Desperate Measures always at +50% gun dmg.',
          skills: ['Thin Red Line', 'Desperate Measures', 'Selfless Vengeance', 'Vladof Ingenuity', 'Redistribution'],
          mod: 'Bloodletter (+Thin Red Line +Desperate Measures)', shield: 'Front Loader', artifact: 'Deathless (removes all HP, doubles shield capacity — BiS for 1HP builds)', grenade: 'Hex',
          anoint: 'Under 50% HP: +150% Radiation Damage',
          weapons: ['Light Show (Corrosive)', 'Kaoson (Incendiary)', 'Plasma Coil', 'Backburner']
        },
        {
          name: 'Iron Bear Tank', tier: 'A', type: 'Tank',
          description: 'IB becomes a full combat mech. Enormous health pool, massive splash from Hammerdown rockets.',
          skills: ['Stainless Steel Bear', 'Scorching RPMs', 'Auto Bear', 'Security Bear', 'Big Surplus (M10: 31x)'],
          mod: 'Flare (5/5 SSB)', shield: 'Re-Charger', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Hex',
          anoint: 'While Iron Bear Active: +75% Damage',
          weapons: ['Any Splash weapon', 'Backburner', 'Plaguebearer', 'Kyb\'s Worth']
        },
        {
          name: 'Blast Master', tier: 'A', type: 'Sustained DPS',
          description: 'Never throw grenades. Stack up to +100% splash damage over 60s. Combine with splash weapons.',
          skills: ['Short Fuse', 'Fire in Skag Den', 'Means of Destruction', 'Vampyr', 'Stainless Steel Bear'],
          mod: 'Blast Master (+Splash% +Weapon Dmg)', shield: 'Front Loader', artifact: 'Blast Master', grenade: 'Hex (do not throw)',
          anoint: 'ASE +200% Splash',
          weapons: ['Kaoson (sticky splash)', 'Light Show', 'Plaguebearer', 'Backburner']
        }
      ],
      planetLoadouts: {
        pandora:    { slot1: 'Light Show (Incendiary)', slot2: 'Kaoson (Shock)',     slot3: 'Kaoson (Corrosive)', slot4: 'Plaguebearer (Radiation)', priority: 'Fire — 70% of enemies are flesh COV' },
        promethea:  { slot1: 'Kyb\'s Worth (Shock)',   slot2: 'Reflux (Corrosive)',  slot3: 'Light Show (Fire)', slot4: 'Backburner (Radiation)',   priority: 'Shock FIRST — every Maliwan has a blue bar' },
        athenas:    { slot1: 'Kaoson (Shock)',         slot2: 'Kaoson (Corrosive)',  slot3: 'Light Show (Fire)', slot4: 'Hex Cryo',                 priority: 'Shock + Corrosive — same as Promethea' },
        eden6:      { slot1: 'Light Show (Incendiary)','slot2': 'Reflux (Corrosive)', slot3: 'Plasma Coil (Shock)', slot4: 'Plaguebearer',          priority: 'Fire + Corrosive split — Saurians everywhere' },
        nekrotafeyo:{ slot1: 'Plasma Coil (Shock)',    slot2: 'Reflux (Corrosive)',  slot3: 'Backburner (Kinetic)', slot4: 'Hex Cryo',              priority: 'Guardians — ALL 4 elements mandatory' },
        dlc1:       { slot1: 'Reflux (Corrosive)',     slot2: 'Light Show (Corrosive)', slot3: 'Light Show (Fire)', slot4: 'Kaoson (Shock)',        priority: 'Corrosive dominates — all Hyperion loaders' },
        dlc2:       { slot1: 'Light Show (Incendiary)', slot2: 'Backburner (Radiation)', slot3: 'Kaoson (Corrosive)', slot4: 'Hex Incendiary',      priority: 'Fire rules — most flesh-heavy DLC in game' },
        dlc4:       { slot1: 'Light Show (Incendiary)', slot2: 'Backburner (Radiation)', slot3: 'Reflux (Corrosive)', slot4: 'Kyb\'s Worth',        priority: 'Fire for psychos, Corrosive for 3 bosses' }
      }
    },

    amara: {
      name: 'Amara',
      title: 'The Siren',
      color: '#9B59B6',
      tagline: 'Elemental god. Melee destroyer. Action skill spam.',
      description: 'A celebrity brawler with the power of a Siren. Channels elemental energy through her fists. At M10 her Face-puncher melee build and Spiritual Driver gun build both delete content.',
      actionSkill: 'Phasecast / Phaseslam / Phasegrasp / Phaseflare — elemental action skills with different effects.',
      trees: [
        { name: 'Brawl', color: '#E8272A', focus: 'Melee / Close Range', capstone: 'Do Unto Others (+melee dmg to all Grasped targets)' },
        { name: 'Fist of the Elements', color: '#F5A623', focus: 'Elemental Damage / AoE', capstone: 'Ties That Bind (chains enemies)' },
        { name: 'Mystical Assault', color: '#9B59B6', focus: 'Rush Stacks / Gun Damage', capstone: 'Unweave the Rainbow (elemental nova on AS end)' },
        { name: 'Enlightened Force', color: '#4A9BFF', focus: 'Phaseflare / Orb', capstone: 'Orb of Destruction (massive orb damage)' }
      ],
      builds: [
        {
          name: 'Face-puncher Melee', tier: 'S', type: 'Melee / One-shot',
          description: 'Face-puncher counts as melee. Unleash Dragon permanent fire DOT. Bands of Sythropia resets Phasecast on melee. Infinite action skill.',
          skills: ['Sustainment', 'Find Your Center (+200% melee)', 'Revelation', 'Laid Bare', 'Do Unto Others'],
          mod: 'Jab Cross / Dragon (+Melee Damage)', shield: 'Bands of Sythropia', artifact: 'Unleash the Dragon', grenade: 'Fish Slap',
          anoint: 'Phaseslam: +300% Weapon Damage 8s',
          weapons: ['Face-puncher (Phaseslam anoint)', 'Psycho Stabber', 'Any backup', 'Any backup']
        },
        {
          name: 'Spiritual Driver', tier: 'S', type: 'Gun DPS',
          description: 'On Phasegrasp: +1% gun dmg per 1% missing HP for 8s. Move fast = more damage. Best M10 gun build.',
          skills: ['Sustainment', 'Violent Tapestry', 'Do Harm', 'Awakening', 'Mindfulness'],
          mod: 'Spiritual Driver (+Gun Dmg +Move Speed)', shield: 'Front Loader', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Hex',
          anoint: 'Phasecast: +250% Weapon Damage 10s',
          weapons: ['Plasma Coil', 'Hellshock', 'Light Show (Incendiary)', 'Reflux (Corrosive)']
        },
        {
          name: 'Ties That Bind / Nimbus', tier: 'S', type: 'Room Clear',
          description: 'Ties that Bind + Nimbus Mod = entire rooms wiped simultaneously. Best mob clear in game.',
          skills: ['Sustainment', 'Laid Bare', 'Violent Tapestry', 'Infusion', 'Conflux'],
          mod: 'Nimbus (+AS Damage +Elemental)', shield: 'Transformer', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Hex',
          anoint: 'ASE Next 2 Mags +100% Elemental',
          weapons: ['Recursion (Shock/Rad)', 'Plasma Coil', 'Hellshock', 'Kaoson (Corrosive)']
        },
        {
          name: 'Phaseflare Orb', tier: 'A', type: 'Elemental DOT',
          description: 'Phaseflare creates massive orb — shoot it to explode on enemies. Sustained elemental damage machine.',
          skills: ['Sustainment', 'Tempest (+40% Elemental)', 'Indiscriminate', 'Catharsis', 'Violent Tapestry'],
          mod: 'Spiritual Driver or Phasezerker', shield: 'Transformer', artifact: 'Elemental Projector', grenade: 'Hex',
          anoint: 'Orb Damage +200% for Phaseflare',
          weapons: ['Plasma Coil', 'Kyb\'s Worth', 'Recursion', 'Light Show']
        }
      ],
      planetLoadouts: {
        pandora:    { slot1: 'Light Show (Incendiary)',  slot2: 'Plasma Coil (Shock)',   slot3: 'Reflux (Corrosive)',  slot4: 'Plaguebearer (Radiation)', priority: 'Fire primary — COV flesh everywhere' },
        promethea:  { slot1: 'Plasma Coil (Shock)',     slot2: 'Reflux (Corrosive)',     slot3: 'Hellshock (Fire)',    slot4: 'Recursion (Radiation)',    priority: 'Shock + Corrosive — Maliwan dominates' },
        athenas:    { slot1: 'Plasma Coil (Shock)',     slot2: 'Kaoson (Corrosive)',     slot3: 'Light Show (Fire)',   slot4: 'Hex Cryo',                 priority: 'Same as Promethea — Maliwan again' },
        eden6:      { slot1: 'Face-puncher',            slot2: 'Reflux (Corrosive)',     slot3: 'Light Show (Fire)',   slot4: 'Plasma Coil (Shock)',       priority: 'Face-puncher + Unleash Dragon — Saurians freeze-melt' },
        nekrotafeyo:{ slot1: 'Plasma Coil (Shock)',     slot2: 'Reflux (Corrosive)',     slot3: 'Recursion (Radiation)', slot4: 'Hex Cryo',               priority: 'Guardian killer — cycle all 4 elements' },
        dlc1:       { slot1: 'Reflux (Corrosive)',      slot2: 'Kaoson (Corrosive)',     slot3: 'Hellshock (Fire)',    slot4: 'Plasma Coil (Shock)',       priority: 'Corrosive — Hyperion loader zone' },
        dlc2:       { slot1: 'Face-puncher',            slot2: 'Light Show (Incendiary)', slot3: 'Plaguebearer (Rad)', slot4: 'Reflux (Corrosive)',        priority: 'Fire and melee — flesh DLC' },
        dlc4:       { slot1: 'Light Show (Incendiary)', slot2: 'Plaguebearer (Radiation)', slot3: 'Reflux (Corrosive)', slot4: 'Plasma Coil',              priority: 'Fire paradise — all psycho constructs are flesh' }
      }
    },

    flak: {
      name: 'FL4K',
      title: 'The Beastmaster',
      color: '#52C41A',
      tagline: 'Infinite crits. Fade Away. Pet army.',
      description: 'A mysterious Beastmaster robot who travels with three loyal pets. Masters of critical hits through Megavore and Fade Away. At M10 the crit loop with St4ckbot reaches infinite scaling.',
      actionSkill: 'Fade Away (3 guaranteed crits) / Gamma Burst (radiation pet) / Rakk Attack (rapid cooldown spam).',
      trees: [
        { name: 'Hunter', color: '#F5A623', focus: 'Crits / Fade Away', capstone: 'Megavore (body shots = crits)' },
        { name: 'Stalker', color: '#9B59B6', focus: 'Pet Survivability / Speed', capstone: 'Unblinking Eye (crit damage)' },
        { name: 'Master', color: '#52C41A', focus: 'Pet Damage / Gamma Burst', capstone: 'Dominance (mind-control enemy)' },
        { name: 'Trapper', color: '#4A9BFF', focus: 'Shield / Damage Reduction', capstone: 'Shared Soul (pet respawns you)' }
      ],
      builds: [
        {
          name: '3-Shot Fade Away (GITM)', tier: 'S', type: 'Boss Killer',
          description: 'Guerrillas in the Mist augment fires all ammo in one crit shot during Fade Away. 5-pellet Skullmasher = 15 crits. Boss deletes.',
          skills: ['Megavore', 'Head Count', 'Leave No Trace', 'Grim Harvest', 'Persistence Hunter'],
          mod: 'St4ckbot (+Crit Dmg +Gun Dmg)', shield: 'Transformer', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Cloning Hex',
          anoint: 'While Fade Away: +200% Weapon Damage',
          weapons: ['Skullmasher (Fade Away anoint)', 'Reflux (Corrosive)', 'Light Show', 'Monarch (Corrosive)']
        },
        {
          name: 'Megavore Mobber', tier: 'S', type: 'Mob Clear',
          description: 'Bounty Hunter kill skills always active. Megavore makes every multi-pellet hit crit. Monarch tears everything apart.',
          skills: ['Megavore', 'Overclocked', 'Leave No Trace', 'Grim Harvest', 'Frenzy'],
          mod: 'Bounty Hunter (+Gun Dmg +Kill Skills)', shield: 'Transformer', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Hex',
          anoint: 'Consecutive Hits (+1% per hit → 250%)',
          weapons: ['Monarch (Corrosive)', 'Reflux (Corrosive)', 'Plasma Coil', 'Light Show']
        },
        {
          name: 'Gamma Burst Radiation', tier: 'A', type: 'Tank / Safe',
          description: 'Red Fang pet taunts ALL enemies — FL4K becomes unkillable. Gamma radiation aura destroys mobs. Best for new M10 players.',
          skills: ['Megavore', 'Barbarous Heart', 'Frenzy', 'Atomic Aroma', 'Persistence Hunter'],
          mod: 'Red Fang (+Pet Dmg, ALL enemy taunt)', shield: 'Frozen Heart (ASE anoint)', artifact: 'Atom Balm', grenade: 'Cloning Hex',
          anoint: 'Gamma Burst: +115% Radiation Damage',
          weapons: ['Any radiation weapon', 'Monarch (Corrosive)', 'Reflux (Corrosive)', 'Light Show']
        },
        {
          name: 'Rakk Attack Spam', tier: 'A', type: 'Fast Clear',
          description: 'Peregrine mod drops grenades from Rakk. Near-zero cooldown. Rakk anoint = +100% damage to target from all sources.',
          skills: ['Megavore', 'Head Count', 'Furious Attack', 'Spiderant Scorcher', 'Leave No Trace'],
          mod: 'Peregrine (+Rakk dmg, drops grenades)', shield: 'Transformer', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Fish Slap (Radiation)',
          anoint: 'Enemies hit by Rakk take +100% damage 7s',
          weapons: ['Reflux (Corrosive)', 'Monarch', 'Light Show', 'Plaguebearer']
        }
      ],
      planetLoadouts: {
        pandora:    { slot1: 'Monarch (Incendiary)',   slot2: 'Monarch (Shock)',    slot3: 'Reflux (Corrosive)',  slot4: 'Skullmasher',              priority: 'Fire Monarch for COV — Megavore makes everything crit' },
        promethea:  { slot1: 'Plasma Coil (Shock)',   slot2: 'Reflux (Corrosive)', slot3: 'Monarch (Incendiary)', slot4: 'Light Show',               priority: 'Shock + Corrosive — same principle as all VHs' },
        athenas:    { slot1: 'Reflux (Corrosive)',    slot2: 'Plasma Coil (Shock)', slot3: 'Monarch (Incendiary)', slot4: 'Hex Cryo',                 priority: 'Corrosive priority vs Maliwan armor' },
        eden6:      { slot1: 'Monarch (Incendiary)',  slot2: 'Reflux (Corrosive)', slot3: 'Plasma Coil (Shock)', slot4: 'Skullmasher (Cryo)',        priority: 'Cryo Skullmasher + freeze = 3x melee on Saurians' },
        nekrotafeyo:{ slot1: 'Plasma Coil (Shock)',  slot2: 'Reflux (Corrosive)', slot3: 'Monarch (Kinetic)',   slot4: 'Skullmasher (Cryo)',        priority: 'All 4 elements — Guardians cycle resist' },
        dlc1:       { slot1: 'Reflux (Corrosive)',   slot2: 'Reflux (Corrosive)', slot3: 'Monarch (Incendiary)', slot4: 'Plasma Coil (Shock)',       priority: 'Double corrosive — 80% of enemies are loaders' },
        dlc2:       { slot1: 'Monarch (Incendiary)', slot2: 'Reflux (Corrosive)', slot3: 'Plaguebearer (Rad)',  slot4: 'Skullmasher',               priority: 'Megavore + Fire Monarch destroys all flesh here' },
        dlc4:       { slot1: 'Monarch (Incendiary)', slot2: 'Reflux (Corrosive)', slot3: 'Skullmasher',        slot4: 'Plaguebearer',               priority: 'Fire Monarch tears through psycho constructs' }
      }
    },

    zane: {
      name: 'Zane',
      title: 'The Operative',
      color: '#4A9BFF',
      tagline: 'Kill skills 24/7. Speed demon. Clone army.',
      description: 'A retired Undercover operative with gadgets, a clone, and a killer drone. The only character who can equip two action skills. At M10 Seein\'s Dead makes his kill skills fire at all times.',
      actionSkill: 'SNTNL Drone / Digi-Clone / Barrier Shield / MNTIS Shoulder Cannon — two equipped simultaneously.',
      trees: [
        { name: 'Hitman', color: '#F5A623', focus: 'SNTNL / Kill Skills', capstone: 'Seein\' Red (instant max kill skills on AS)' },
        { name: 'Doubled Agent', color: '#9B59B6', focus: 'Digi-Clone / Swap', capstone: 'Like a Ghost (clone absorbs bullets)' },
        { name: 'Under Cover', color: '#4A9BFF', focus: 'Barrier / Shield', capstone: 'Distributed Denial (barrier shares shield)' },
        { name: 'Secret Agent', color: '#52C41A', focus: 'MNTIS / Hacks', capstone: 'Trick of the Light (cryo vulnerability)' }
      ],
      builds: [
        {
          name: 'Seein\' Dead God', tier: 'S', type: 'All-Purpose',
          description: 'The definitive Zane build. ANY hit procs ALL kill skills via Seein\' Dead. Playing Dirty doubles next 5 shots. Violent Momentum speed = damage. Permanent max DPS.',
          skills: ['Seein\' Red', 'Donnybrook', 'Playing Dirty', 'Violent Momentum', 'Boom. Enhance.'],
          mod: 'Seein\' Dead (NON-NEGOTIABLE — BiS by massive margin)', shield: 'Transformer', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Cloning Maddening Tracker',
          anoint: 'SNTNL Active: +100% Cryo Damage',
          weapons: ['Plasma Coil (Shock/Rad)', 'Redistributor (Shock)', 'Light Show (Corrosive)', 'Yellowcake (Radiation)']
        },
        {
          name: 'Clone Swap Speed', tier: 'S', type: 'Mobile DPS',
          description: 'Swap with clone for +130% weapon damage burst. Violent Speed + Momentum = speed is damage. SNTNL cryo freezes everything.',
          skills: ['Seein\' Red', 'Donnybrook', 'Violent Momentum', 'Violent Speed', 'Old-U'],
          mod: 'Seein\' Dead', shield: 'Transformer', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Cloning Hex',
          anoint: 'Digi-Clone Swap: +130% Weapon Damage',
          weapons: ['Plasma Coil', 'Light Show', 'Redistributor', 'Monarch (Corrosive)']
        },
        {
          name: 'Barrier Shield Tank', tier: 'A', type: 'Defensive DPS',
          description: 'Barrier absorbs bullets. +Gun damage while behind Barrier. Distributed Denial chains shield effects. Near-unkillable.',
          skills: ['Seein\' Red', 'Commitment', 'Distributed Denial', 'Nerves of Steel', 'Ready for Action'],
          mod: 'Seein\' Dead', shield: 'Re-Charger + Distributed Denial', artifact: 'Pearl of Ineffable Knowledge', grenade: 'Cloning Hex',
          anoint: 'Barrier Deployed: Instant Shield Recharge',
          weapons: ['Redistributor', 'Plasma Coil', 'Light Show', 'Yellowcake']
        },
        {
          name: 'MNTIS Cold Warrior', tier: 'B+', type: 'Cryo / CC',
          description: 'MNTIS + Secret Agent tree. Trick of the Light makes cryo-affected enemies take bonus damage. Cryo everything, chain freeze, deal massive damage.',
          skills: ['Seein\' Red', 'Trick of the Light', 'Violent Momentum', 'Playing Dirty', 'Donnybrook'],
          mod: 'Seein\' Dead', shield: 'Frozen Snowshoe', artifact: 'Ice Breaker (+25% dmg to frozen)', grenade: 'Cloning Hex Cryo',
          anoint: 'ASE Next 2 Mags +100% Cryo Damage',
          weapons: ['Plasma Coil (Cryo)', 'Kaoson (Cryo)', 'Light Show (Cryo)', 'O.P.Q. System']
        }
      ],
      planetLoadouts: {
        pandora:    { slot1: 'Plasma Coil (Shock)',    slot2: 'Light Show (Incendiary)', slot3: 'Redistributor',     slot4: 'Yellowcake (Radiation)', priority: 'Fire for COV flesh — Redistributor chains through COV camps' },
        promethea:  { slot1: 'Redistributor (Shock)', slot2: 'Plasma Coil',            slot3: 'Light Show (Corr)',  slot4: 'Yellowcake',            priority: 'Redistributor chains through Maliwan troops perfectly' },
        athenas:    { slot1: 'Plasma Coil (Shock)',   slot2: 'Light Show (Corr)',       slot3: 'Redistributor',     slot4: 'Kaoson (Corrosive)',     priority: 'Plasma Coil dual-element covers both Maliwan health bars alone' },
        eden6:      { slot1: 'Light Show (Incendiary)', slot2: 'Light Show (Corr)',    slot3: 'Plasma Coil (Shock)', slot4: 'Yellowcake (Rad)',       priority: 'Playing Dirty doubles Light Show to 8 projectiles per shot' },
        nekrotafeyo:{ slot1: 'Plasma Coil (Shock)',  slot2: 'Light Show (Corr)',       slot3: 'Redistributor',     slot4: 'Kaoson (Kinetic)',       priority: 'SNTNL Cryo anoint freezes Guardians mid-resist cycle' },
        dlc1:       { slot1: 'Light Show (Corr)',    slot2: 'Redistributor (Shock)',   slot3: 'Plasma Coil',       slot4: 'Light Show (Incendiary)', priority: 'Redistributor chains between loaders = free room clears' },
        dlc2:       { slot1: 'Plasma Coil',         slot2: 'Light Show (Incendiary)', slot3: 'Redistributor',     slot4: 'Yellowcake',             priority: 'Seein\' Dead + speed = fastest DLC2 clear of any VH' },
        dlc4:       { slot1: 'Plasma Coil',         slot2: 'Light Show (Incendiary)', slot3: 'Light Show (Corr)', slot4: 'Yellowcake',             priority: 'Fire flood — psycho flesh everywhere in Krieg\'s mind' }
      }
    }
  },

  // ── PLANETS ──────────────────────────────────────────────
  planets: [
    {
      id: 'pandora', name: 'Pandora', subtitle: 'The Bandit Wasteland',
      color: '#F5A623', description: 'Desert hellhole. COV bandits, wildlife, and spawn of countless horrors. The original Borderlands planet.',
      zones: ['Droughts', 'Ascension Bluff', 'Devil\'s Razor', 'Splinterlands', 'Carnivora', 'Guts of Carnivora', 'Konrad\'s Hold', 'The Slaughter Shaft'],
      factions: [
        { name: 'COV (Children of the Vault)', hp: ['flesh','shield'], weakness: 'fire', note: 'Standard bandits — fire destroys them. Shielded variants need shock first.' },
        { name: 'Skags', hp: ['flesh'], weakness: 'fire', note: 'Fire Skags are fire-resistant — use corrosive. Alpha Skags have armored front plate.' },
        { name: 'Rakk', hp: ['flesh'], weakness: 'fire', note: 'Pure flesh, airborne. Freeze with cryo to ground them. Crit spot is underbelly.' },
        { name: 'Spiderants', hp: ['armor','flesh'], weakness: 'corrosive', note: 'Armored front, fleshy abdomen. Target exposed belly for fire crits. Venom types resist corrosive.' },
        { name: 'Varkids', hp: ['flesh','armor'], weakness: 'fire', note: 'Evolve into armored forms. Kill before evolution. Badass variants are pure armor.' },
        { name: 'Goliaths', hp: ['armor','flesh'], weakness: 'corrosive', note: 'Shoot helmet off to enrage. Let them level to Godly then kill for bonus loot.' }
      ],
      bosses: [
        { name: 'Gigamind', location: 'Skywell-27', drops: ['Hellshock', 'Messy Breakup'], hp: ['shield','armor'], tip: 'Fast farm — 30s kill. Top loot drop rate.' },
        { name: 'Demoskaggon', location: 'Droughts', drops: ['Legendary World Drop'], hp: ['flesh'], tip: 'Large skag alpha — corrosive front, fire body.' }
      ]
    },
    {
      id: 'promethea', name: 'Promethea', subtitle: 'The Urban Warzone',
      color: '#4A9BFF', description: 'Maliwan-occupied metropolitan planet. Heavy armor, energy shields, robots everywhere. Shock and Corrosive are mandatory.',
      zones: ['Meridian Metroplex', 'Meridian Outskirts', 'Lectra City', 'Skywell-27', 'Atlas HQ', 'Neon Arterial', 'Midnight\'s Cairn (Takedown)'],
      factions: [
        { name: 'Maliwan Soldiers', hp: ['armor','shield'], weakness: 'shock-then-corrosive', note: 'MOST dangerous standard enemy. Both health bars simultaneously. Shock → Corrosive rotation.' },
        { name: 'Maliwan Robots', hp: ['armor'], weakness: 'corrosive', note: 'Pure armor. Nullhounds, mechs, loaders. Corrosive is your only real choice.' },
        { name: 'Ratches', hp: ['flesh'], weakness: 'fire', note: 'Rat-roach hybrid. Sewer/underground sections. Fire DOT clears entire nests instantly.' },
        { name: 'Anointed Maliwan', hp: ['armor','shield'], weakness: 'cycling', note: 'Cycle elemental resist every 15-20s. Watch glow color. Keep all 4 elements accessible.' }
      ],
      bosses: [
        { name: 'Killavolt', location: 'Lectra City', drops: ['Monarch (M6+)', 'Electric Banjo'], hp: ['shield'], tip: 'DO NOT use shock — he absorbs it and heals. Fire + Corrosive only.' },
        { name: 'Katagawa Ball', location: 'Skywell-27', drops: ['Sand Hawk (M6+)'], hp: ['armor','shield'], tip: 'All elemental phases. Corrosive main DPS window.' },
        { name: 'Wotan the Invincible', location: 'Midnight\'s Cairn', drops: ['Redistributor', 'The Dictator'], hp: ['armor','shield'], tip: 'Raid boss. Bring Shock + Corrosive. Detach lower half for separate kill.' }
      ]
    },
    {
      id: 'athenas', name: 'Athenas', subtitle: 'The Monk Planet',
      color: '#9B59B6', description: 'Misty mountain temples. Maliwan invasion of sacred monk grounds. Mostly Maliwan troops with Ratch nests in caves.',
      zones: ['Athenas (single large zone)'],
      factions: [
        { name: 'Maliwan Troops', hp: ['armor','shield'], weakness: 'shock-then-corrosive', note: 'Same as Promethea. Shock first, then corrosive after shield strip.' },
        { name: 'Ratches', hp: ['flesh'], weakness: 'fire', note: 'Temple and cave sections. Fire clears nests in seconds. Chupacabratch boss has armor.' },
        { name: 'Order Monks', hp: ['flesh','shield'], weakness: 'fire', note: 'Melee-focused. Cryo CC is extremely effective for crowd control.' }
      ],
      bosses: [
        { name: 'Captain Traunt', location: 'Academic District', drops: ['Kaoson (M6+)', 'Legendary Class Mods'], hp: ['armor'], tip: 'Best early M10 farm — 30s kill, direct spawn from save station. Corrosive BiS.' },
        { name: 'Chupacabratch', location: 'Cave Section', drops: ['World Drop Legendaries'], hp: ['flesh','armor'], tip: 'Giant Ratch. Fire on flesh sections, corrosive on armored plating.' }
      ]
    },
    {
      id: 'eden6', name: 'Eden-6', subtitle: 'The Jungle Planet',
      color: '#52C41A', description: 'Jakobs family homeworld. Swamps, dinosaurs, monkey Jabbers. Most dangerous wildlife zone. Fire + Corrosive split priority.',
      zones: ['Floodmoor Basin', 'The Anvil', 'Jakobs Estate', 'Voracious Canopy', 'Ambermire', 'Bloodsun Canyon'],
      factions: [
        { name: 'Saurians', hp: ['armor','flesh'], weakness: 'corrosive', note: 'Dinosaur-like. Armored scales, fleshy underbelly. Fire Saurians are fire-resistant — use cryo. Freeze = 3x melee.' },
        { name: 'Jabbers', hp: ['flesh','shield'], weakness: 'fire', note: 'Monkey-like, carry weapons. Pure flesh. Leader Jabbers carry shields.' },
        { name: 'Jakobs Guards / COV', hp: ['flesh','shield'], weakness: 'fire', note: 'Human enemies. Fire primary, shock for shielded heavies.' },
        { name: 'Tinks', hp: ['armor'], weakness: 'corrosive', note: 'Small goblin pack enemies. Fully armored. Cryo slows fast-moving packs.' },
        { name: 'Wolven', hp: ['flesh'], weakness: 'fire', note: 'Wolf-like native predators. Pure flesh. Fire DOT decimates packs.' }
      ],
      bosses: [
        { name: 'Warden', location: 'The Anvil', drops: ['Transformer Shield', 'World Drop'], hp: ['armor'], tip: 'Goliath boss. Corrosive primary. Can be enraged for more drops.' },
        { name: 'Graveward', location: 'The Floating Tomb', drops: ['Grave (Artifact)', 'World Drop Legendaries'], hp: ['armor','flesh','shield'], tip: 'Best XP farm in game. All 3 health types — rotate elements.' },
        { name: 'Billy the Anointed', location: 'Jakobs Estate', drops: ['King\'s Call', 'World Drop'], hp: ['flesh'], tip: 'Anointed resist cycling. Watch element glow. Fire when exposed.' },
        { name: 'Eleanor and the Heart', location: 'Voracious Canopy', drops: ['Skullmasher', 'World Drop'], hp: ['armor'], tip: 'Cave boss. Corrosive + cryo. St4ckbot Skullmasher farm.' }
      ]
    },
    {
      id: 'nekrotafeyo', name: 'Nekrotafeyo', subtitle: 'Eridian Homeworld',
      color: '#E8272A', description: 'Ancient Eridian ruins. Guardians — the most dangerous standard enemies at M10. Cycling elemental resistance means you NEED all 4 elements.',
      zones: ['Desolation\'s Edge', 'Tazendeer Ruins', 'The Pyre of Stars'],
      factions: [
        { name: 'Guardians — Spectre', hp: ['armor','shield'], weakness: 'shock-then-corrosive', note: 'Ranged Guardian. Cycling resist. Watch glow indicator carefully.' },
        { name: 'Guardians — Wraith', hp: ['armor','shield'], weakness: 'corrosive', note: 'Teleporting melee. Very frequent resist phases. Cryo interrupts resist cycle.' },
        { name: 'Guardians — Serpent', hp: ['armor','shield'], weakness: 'corrosive', note: 'Large, tanky, high HP. All 4 elements required. Hardest standard enemy in game.' },
        { name: 'Guardians — Miasma', hp: ['armor','shield'], weakness: 'shock', note: 'Corrosive aura but ironically sometimes corrosive-immune. Use shock/cryo during that phase.' }
      ],
      bosses: [
        { name: 'General Traunt', location: 'Desolation\'s Edge', drops: ['Legendary Class Mods — ALL characters'], hp: ['armor'], tip: 'Best class mod farm in game. Any character you play — farm this.' },
        { name: 'Tyreen Calypso', location: 'The Pyre of Stars', drops: ['God-Rolled Legendaries'], hp: ['armor','shield','flesh'], tip: 'Final boss. All 3 health types in phases. Tentacle phase = pure armor (corrosive). Siren phase = flesh (fire).' }
      ]
    }
  ],

  // ── MAYHEM MODIFIERS ─────────────────────────────────────
  modifiers: {
    easy: [
      { name: 'Big Head Mode', effect: '+100% enemy head size', tier: 'GOOD', tip: 'Bigger crits hitbox. Combine with Holy Crit for FL4K Megavore builds.' },
      { name: 'Speed Demon', effect: 'Kill = +50% move speed 10s (stacks x3)', tier: 'GREAT', tip: 'Pure benefit. Zane\'s Violent Momentum converts this to bonus damage.' },
      { name: 'Galaxy Brain', effect: '+25% crit damage', tier: 'GREAT', tip: 'Free damage. No downside. Always keep this if available.' },
      { name: 'Lootsplosion', effect: '+10% loot chance per kill', tier: 'GREAT', tip: 'More legendaries per run. No gameplay downside. Best easy modifier.' },
      { name: 'More Than Okay Boomer', effect: '+25% grenade damage, enemies drop grenades on death', tier: 'OK', tip: 'Good for Moze grenade builds. Means of Destruction feeds better.' },
      { name: 'Slayer', effect: 'Enemies below 15% HP glow blue, melee kills them for health drops', tier: 'OK', tip: 'Amara Ties that Bind exploit: Phaselock + melee one-punches entire rooms.' }
    ],
    medium: [
      { name: 'Floor is Lava', effect: 'Standing still causes fire pools under you', tier: 'MANAGEABLE', tip: 'Keep moving. Zane\'s speed build turns this into nothing.' },
      { name: 'Mob Mentality', effect: '+30% enemy damage + fire rate near other enemies', tier: 'BAD', tip: 'Pick off isolated enemies first. Avoid standing in groups.' },
      { name: 'Freeze Tag', effect: 'Enemies leave cryo orbs on death', tier: 'ANNOYING', tip: 'Orbs shoot cryo novas constantly. Use transformer shield to absorb.' },
      { name: 'Bad Dose', effect: 'Randomly become irradiated', tier: 'BAD', tip: 'Random radiation slow. Hard to avoid. Prioritize killing sources fast.' },
      { name: 'Airborne', effect: 'Enemies take less damage while on the ground', tier: 'MANAGEABLE', tip: 'Aim for airborne moments. Grenades/splash hit regardless.' }
    ],
    hard: [
      { name: 'Drone Ranger', effect: 'Healing drones spawn for enemies', tier: 'BAD', tip: 'Kill the drone first — it\'s small but critical. Splash weapons hit both target and drone.' },
      { name: 'Homing Orbs', effect: 'Homing elemental orbs track you', tier: 'BAD', tip: 'Keep moving. Transformer absorbs shock orbs. Moze IB tanks the others.' },
      { name: 'Bullet Reflect', effect: 'Enemies periodically reflect bullets back', tier: 'DANGEROUS', tip: 'Immediately stop shooting when reflection shield activates. Use melee/grenades.' }
    ],
    veryHard: [
      { name: 'Holy Crit', effect: '+25% crit damage, -50% non-crit damage', tier: 'EXPLOITABLE', tip: 'FL4K Megavore: every shot is a crit. Combine with Big Head Mode. Pure upside for FL4K.' },
      { name: 'Deadlines', effect: 'Action skills drain HP instead of using cooldown', tier: 'DANGEROUS', tip: 'Moze and Amara can tank this. Avoid for Zane — SNTNL drain is brutal.' },
      { name: 'Healy Avoidance', effect: 'Enemy projectiles heal you but damage on contact', tier: 'BUILD-SPECIFIC', tip: 'Transformer + shock grenades = free health. Otherwise, stay far away.' },
      { name: 'Groundbreaker', effect: 'Removes ground slam critical hits', tier: 'TERRIBLE', tip: 'REROLL. Destroys Amara melee builds entirely. No upside.' }
    ]
  },

  // ── MAYHEM 10 EXCLUSIVE WEAPONS ──────────────────────────
  mayhemWeapons: [
    { name: 'Monarch', type: 'AR', manufacturer: 'Vladof', minMayhem: 6, effect: 'Wide spread pattern — multiple pellets hit one target simultaneously. Megavore makes ALL pellets crit.', source: 'Killavolt (Lectra City)', tier: 'S' },
    { name: 'Sand Hawk', type: 'Sniper', manufacturer: 'Dahl', minMayhem: 6, effect: 'Fires 9 bullets in hawk-wing pattern. Best sustained sniper DPS at M10. Tracks toward aim point.', source: 'Katagawa Ball (Skywell-27)', tier: 'S' },
    { name: 'Kaoson', type: 'SMG', manufacturer: 'Dahl', minMayhem: 6, effect: 'Sticky projectiles explode for 100% splash on reload or after 1.3s. Near-infinite ammo with Moze MoD.', source: 'Captain Traunt (Athenas)', tier: 'S' },
    { name: 'Plasma Coil', type: 'SMG', manufacturer: 'Maliwan', minMayhem: 6, effect: 'Highest base damage SMG in game. Fires two elements simultaneously. Fastest TTK at M10.', source: 'Evil Lilith (DLC4)', tier: 'S' },
    { name: 'Light Show', type: 'Pistol', manufacturer: 'Vladof', minMayhem: 6, effect: 'Fires 4 projectiles per shot in an X pattern. All 4 count for splash procs, MoD regen, and Playing Dirty.', source: 'Antalope (Ascension Bluff)', tier: 'S' },
    { name: 'Flipper', type: 'SMG', manufacturer: 'Maliwan', minMayhem: 6, effect: 'Charge to fire — while charged adds more projectiles per shot up to 5x pellets. Highest elemental SMG DPS.', source: 'Minosaur (Bloodsun Canyon)', tier: 'S' },
    { name: 'Boogeyman', type: 'SMG', manufacturer: 'Hyperion', minMayhem: 6, effect: 'Precision fire builds stacks up to 1370% damage. Never swap weapons while stacking.', source: 'Amach (DLC2)', tier: 'A' },
    { name: 'Backburner', type: 'Rocket', manufacturer: 'Vladof', minMayhem: 6, effect: 'Homing rocket explodes into massive radiation sphere. Splash damage triggers all Moze splash bonuses.', source: 'Evil Brick/Mordecai/Lilith (DLC4)', tier: 'S' }
  ],

  // ── ALL BiS WEAPONS (Non-Mayhem-Exclusive) ───────────────
  biSWeapons: [
    { name: 'Reflux', type: 'Shotgun', manufacturer: 'Hyperion', effect: 'Corrosive shots chain to nearby enemies on hit. BiS for armor-heavy zones. Room-clearing at M10.', source: 'General Traunt (Desolation\'s Edge)', tier: 'S' },
    { name: 'Plaguebearer', type: 'Rocket', manufacturer: 'Torgue', minMayhem: 6, effect: 'Tracking projectile releases persistent radiation cloud. Continuous splash proc machine.', source: 'Evil Lilith/Mordecai (DLC4)', tier: 'S' },
    { name: 'Redistributor', type: 'SMG', manufacturer: 'Maliwan', effect: 'Every 7th shot chains lightning to enemies. Zane Clone mirrors chains for massive AoE. Raid boss BiS.', source: 'Wotan the Invincible (Maliwan Takedown)', tier: 'S' },
    { name: 'Skullmasher', type: 'Sniper', manufacturer: 'Jakobs', effect: 'Fires 5 projectiles per shot. All 5 can crit with FL4K Megavore. Boss deletes with St4ckbot.', source: 'Eleanor and the Heart (Voracious Canopy)', tier: 'S' },
    { name: 'Kyb\'s Worth', type: 'SMG', manufacturer: 'Maliwan', effect: 'Fires two elemental beams simultaneously — both stack DOT. BiS for Moze and Amara elemental builds.', source: 'Joey Ultraviolet (Cartel Event)', tier: 'A' },
    { name: 'Hellshock', type: 'Pistol', manufacturer: 'Maliwan', effect: 'Alternates shock and fire with each shot. Dual DOT stacking. Great for Spiritual Driver Amara.', source: 'Gigamind (Skywell-27)', tier: 'A' },
    { name: 'Recursion', type: 'Shotgun', manufacturer: 'Maliwan', effect: 'Particle beam ricochets to nearby enemies after first hit. One shot can hit target 8+ times.', source: 'Wotan the Invincible', tier: 'A' },
    { name: 'Yellowcake', type: 'Rocket', manufacturer: 'CoV', effect: 'Two orbs split into 4 each on impact. With Zane SNTNL cryo — radiation + cryo combo deletes everything.', source: 'Joey Ultraviolet (Cartel Event)', tier: 'A' },
    { name: 'Brainstormer', type: 'Shotgun', manufacturer: 'Hyperion', effect: 'Chains shock between nearby enemies. BiS for Amara Sustainment — each chain heals her.', source: 'Katagawa Jr. (Skywell-27)', tier: 'A' },
    { name: 'Face-puncher', type: 'Shotgun', manufacturer: 'Hyperion', effect: 'Deals melee damage — scales with ALL melee bonuses. 12 pellets each counted as melee hit. Amara BiS.', source: 'Psychobillies (Ambermire)', tier: 'S' }
  ],

  // ── WEAPON MODIFIERS (Mayhem Gear Passives) ───────────────
  weaponModifiers: {
    description: 'Weapons looted at M1+ receive passive damage scaling. At M10 weapon damage is multiplied by 1.09^10 = approximately +137% base damage vs non-Mayhem versions.',
    mayhemScaling: [
      { level: 1,  multiplier: '1.09x',  bonus: '+9%'   },
      { level: 2,  multiplier: '1.19x',  bonus: '+19%'  },
      { level: 3,  multiplier: '1.30x',  bonus: '+30%'  },
      { level: 4,  multiplier: '1.41x',  bonus: '+41%'  },
      { level: 5,  multiplier: '1.54x',  bonus: '+54%'  },
      { level: 6,  multiplier: '1.68x',  bonus: '+68%'  },
      { level: 7,  multiplier: '1.83x',  bonus: '+83%'  },
      { level: 8,  multiplier: '1.99x',  bonus: '+99%'  },
      { level: 9,  multiplier: '2.17x',  bonus: '+117%' },
      { level: 10, multiplier: '2.37x',  bonus: '+137%' }
    ],
    exclusiveDropTiers: {
      m6plus: ['Monarch', 'Sand Hawk', 'Kaoson', 'Flipper', 'Free Radical', 'O.P.Q. System'],
      allMayhem: ['Light Show', 'Plasma Coil', 'Backburner', 'Plaguebearer', 'Boogeyman', 'D.N.A.']
    }
  },

  // ── LEGENDARY WEAPON PREFIXES & PARTS ────────────────────
  weaponParts: {
    grips: [
      { name: 'Jakobs Grip', bonus: '+Reload Speed, +Accuracy', best_for: 'Shotguns, Snipers' },
      { name: 'Vladof Grip', bonus: '+Fire Rate, +Mag Size', best_for: 'SMGs, ARs' },
      { name: 'Maliwan Grip', bonus: '+Elemental Chance, +Handling', best_for: 'Maliwan weapons' },
      { name: 'Hyperion Grip', bonus: '+Handling, +Accuracy', best_for: 'Shotguns, Pistols' },
      { name: 'Dahl Grip', bonus: '+Recoil Reduction, +Accuracy', best_for: 'Burst-fire weapons' },
      { name: 'Torgue Grip', bonus: '+Damage, +Reload Speed', best_for: 'Torgue weapons' }
    ],
    stocks: [
      { name: 'Dahl Stock', bonus: '+Recoil Recovery, +Accuracy', best_for: 'Snipers, ARs' },
      { name: 'Hyperion Stock', bonus: '+Handling, +Accuracy Regen Speed', best_for: 'SMGs' },
      { name: 'Vladof Stock', bonus: '+Fire Rate', best_for: 'High fire rate builds' }
    ]
  },

  // ── CLASS MODS BiS ────────────────────────────────────────
  classMods: {
    moze: [
      { name: 'Flare', tier: 'S', effect: 'On fire kill: +100% splash dmg 8s', stats: 'Weapon Dmg + Fire Rate + Splash Dmg', skills: '+5 MoD, +5 Cloud of Lead', source: 'Evil Mordecai (DLC4)', note: 'Non-negotiable BiS for fire builds' },
      { name: 'Bloodletter', tier: 'S', effect: 'ALL forms of healing (Vampyr, lifesteal, HP regen, HP restore) are instead applied to Shield. Makes Moze\'s damage-based healing (Vampyr from grenades) repair shields. Core of Mozerker Forever build.', stats: 'Weapon Dmg + Pistol Dmg + Shotgun Dmg', skills: '+Thin Red Line +Phalanx Doctrine +Desperate Measures', source: 'Mouthpiece (Ascension Bluff) — world drop or boss farm', note: 'Required for Mozerker 1HP build. Pair with: Deathless artifact + Front Loader shield + Vampyr skill + Hex grenade.' },
      { name: 'Blast Master', tier: 'A', effect: 'No grenade = stack splash up to +100%', stats: 'Splash Dmg + AOE Dmg + Weapon Dmg', skills: '+Short Fuse +Means of Destruction', source: 'World Drop', note: 'Never throw grenades while equipped' }
    ],
    amara: [
      { name: 'Spiritual Driver', tier: 'S', effect: 'Phasegrasp: +1% gun dmg per 1% missing HP', stats: 'Gun Dmg + Move Speed + Cooldown', skills: '+Mindfulness +Jab Cross +Laid Bare', source: 'Rax (The Anvil)', note: 'Best gun Amara mod — run with Front Loader' },
      { name: 'Nimbus', tier: 'S', effect: 'AS creates DOT cloud on target', stats: 'Elemental Dmg + AS Damage + Weapon Dmg', skills: '+Remnant +Indiscriminate', source: 'World Drop (DLC1)', note: 'Ties that Bind + Nimbus = delete rooms' },
      { name: 'Phasezerker', tier: 'A', effect: 'Rush stacks generate faster, more bonus on consume', stats: 'Weapon Dmg + Elemental Dmg + Fire Rate', skills: '+Violent Tapestry +Do Harm', source: 'World Drop', note: 'Great alternative for rush-stack builds' }
    ],
    flak: [
      { name: 'St4ckbot', tier: 'S', effect: 'Consecutive crits +10% crit dmg (max 50 stacks = +500%)', stats: 'Crit Dmg + Gun Dmg + Fire Rate', skills: '+Grim Harvest +Head Count +Overclocked', source: 'Loco Chantelle (DLC2)', note: 'Multi-pellet + Megavore hits cap near instantly' },
      { name: 'Bounty Hunter', tier: 'S', effect: 'Kill skills activate immediately on combat start', stats: 'Gun Dmg + Crit Dmg + Move Speed', skills: '+Grim Harvest +Overclocked +Head Count', source: 'Jabbermogwai (Voracious Canopy)', note: 'Permanent kill skills — no kill required' },
      { name: 'Red Fang', tier: 'A', effect: 'Pet taunts ALL enemies simultaneously', stats: 'Pet Dmg + AS Dmg + Weapon Dmg', skills: '+Frenzy +Persistence Hunter', source: 'World Drop', note: 'BiS for Gamma Burst — makes FL4K literally unkillable' },
      { name: 'Peregrine', tier: 'A', effect: 'Rakk drop player grenades on hit', stats: 'Rakk Dmg + AS Dmg + Weapon Dmg', skills: '+Pack Tactics +Flock \'n Load', source: 'Eista the Invincible (DLC2)', note: 'Infinite grenade loop with Rakk Attack' }
    ],
    zane: [
      { name: 'Seein\' Dead', tier: 'S+++', effect: 'Any damage procs ALL kill skills simultaneously', stats: 'Weapon Dmg + SMG Dmg + Fire Rate', skills: '+Donnybrook +Violent Violence +Playing Dirty', source: 'Jackpot boss — VIP Tower, Moxxi\'s Heist of the Handsome Jackpot DLC1 — ~33% dedicated drop rate', note: 'MANDATORY. Nothing even close to this mod for Zane.' },
      { name: 'Antifreeze', tier: 'A', effect: 'Sliding boosts action skill duration and damage', stats: 'Cryo Dmg + Move Speed + AS Dmg', skills: '+Violent Speed +Violent Momentum', source: 'Kukuwajack (DLC2)', note: 'BiS for cryo/speed builds. Pairs with Ice Breaker artifact.' },
      { name: 'Executor', tier: 'B+', effect: 'On kill: bonus crit damage for short time', stats: 'Crit Dmg + Pistol Dmg + Weapon Dmg', skills: '+Playing Dirty +Violent Violence', source: 'Wotan the Invincible', note: 'Good alternative when Seein\' Dead refuses to drop.' }
    ]
  },

  // ── SHIELDS BiS ───────────────────────────────────────────
  shields: [
    { name: 'Front Loader', effect: 'Reserves 60% max HP as shield (permanent low HP)', best_for: 'Moze Desperate Measures, Amara Spiritual Driver', source: 'World Drop / Earl\'s Machine' },
    { name: 'Transformer', effect: 'Absorbs shock damage → shield HP. 40% bullet absorb', best_for: 'Universal — every character benefits', source: 'Warden (The Anvil)' },
    { name: 'Re-Charger', effect: 'On full depletion: instantly begins recharging', best_for: 'Moze Bloodletter cycling. Any shield-dependent build', source: 'World Drop / Earl\'s Machine' },
    { name: 'Bands of Sythropia', effect: 'Melee hit reduces action skill cooldown', best_for: 'Amara melee builds — infinite Phasecast with Face-puncher', source: 'Empowered Grawn (Athenas)' },
    { name: 'Frozen Heart', effect: 'Break and Fill: massive cryo nova. ASE anoint: infinite spam', best_for: 'FL4K Gamma Burst. Cryo Zane.', source: 'Amach (Cursehaven DLC2)' },
    { name: 'Revolter', effect: 'On shock damage: +200% weapon damage for 7s', best_for: 'Anyone with shock grenades/weapons — massive burst DPS window', source: 'Loot Drop (DLC5 Director\'s Cut Arms Race)' }
  ],

  // ── ARTIFACTS BiS ─────────────────────────────────────────
  artifacts: [
    { name: 'Pearl of Ineffable Knowledge', effect: '15 consecutive hits = +16% mult dmg + 90% gun damage bonus', best_for: 'Universal — all 4 characters. DLC2 quest reward.', stats: 'Gun Dmg + Fire Rate + Reload Speed', source: 'The Call of Gythian quest (DLC2)', tier: 'S' },
    { name: 'Blast Master', effect: 'No grenades thrown = +1% splash/10s up to +100% splash', best_for: 'Moze splash builds — never throw grenades', stats: 'Splash Dmg + AOE Dmg + Weapon Dmg', source: 'World Drop', tier: 'S' },
    { name: 'Unleash the Dragon', effect: 'Melee ignites — fire DOT bypasses ALL fire resistance', best_for: 'Amara melee builds. Permanent unresistable burn.', stats: 'Melee Dmg + Fire Dmg + Elemental Chance', source: 'Scorch (Floodmoor Basin)', tier: 'S' },
    { name: 'Atom Balm', effect: '+Radiation aura dmg, +burst dmg, +burst radius', best_for: 'FL4K Gamma Burst radiation builds. Pet aura amplification.', stats: 'Radiation Dmg + Elemental Effect + Aura Dmg', source: 'World Drop (Slaughter Shaft)', tier: 'A' },
    { name: 'Ice Breaker', effect: '+25% damage to frozen enemies from all sources', best_for: 'Cryo Zane, Cryo FL4K. Devastating with freeze + burst window.', stats: 'Cryo Dmg + Weapon Dmg + Move Speed', source: 'World Drop', tier: 'A' },
    { name: 'Victory Rush', effect: 'On badass kill: +30% weapon dmg + move speed 18s', best_for: 'Characters without a specific artifact requirement', stats: 'Weapon Dmg + Move Speed + Elemental Dmg', source: 'Anointed Alpha (Pandora)', tier: 'B+' }
  ],

  // ── GRENADES BiS ─────────────────────────────────────────
  grenades: [
    { name: 'Hex (Recurring)', effect: 'Homing, multi-hit. Procs MoD constantly. Best grenade in game.', element: 'Any — Incendiary or Radiation preferred', source: 'World Drop (Gigamind fast farm)', tier: 'S' },
    { name: 'Fish Slap', effect: 'Insane raw damage. Melee bonuses apply. Amara Face-puncher combo.', element: 'Radiation', source: 'Cartel Event (Fish Slap enemy)', tier: 'S' },
    { name: 'Cloning Maddening Tracker', effect: 'Splits into two tracking grenades. Stays on target. High uptime.', element: 'Any', source: 'World Drop', tier: 'A' },
    { name: 'Ghast Call', effect: 'Spawns homing skulls. High damage, good sustain.', element: 'Radiation', source: 'Halloween Bloody Harvest Event', tier: 'A' }
  ],

  // ── ANOINTMENTS BiS ───────────────────────────────────────
  anointments: {
    universal: [
      { name: 'Consecutive Hits +1% Weapon Dmg per hit (max 250%)', rating: 'S', note: 'Best sustained DPS anoint. At 250 stacks = 3.5x damage. Never miss.' },
      { name: 'ASE: Next 2 mags +100% Elemental Dmg', rating: 'S', note: 'Spam AS between mags for permanent bonus. BiS for Amara cooldown spam.' },
      { name: 'On Grenade Throw: +25% Weapon/Grenade/AS Dmg 6s', rating: 'A', note: 'Best grenade anoint. Zane Drone Delivery auto-throws grenade.' }
    ],
    moze: [
      { name: 'ASE: +200% Splash Damage 18s', rating: 'S', note: 'Mandatory on all weapons for splash Moze.' },
      { name: 'After exiting IB: +160% Splash 18s', rating: 'A', note: 'IB build alternative. 18s window is generous.' },
      { name: 'Under 50% HP: +150% Radiation Dmg', rating: 'S', note: 'BiS for Bloodletter 1HP Moze — permanent active.' }
    ],
    amara: [
      { name: 'Phasecast: +250% Weapon Dmg 10s', rating: 'S', note: 'Best single-burst damage window anoint in game.' },
      { name: 'Phaseslam: +300% Weapon Dmg 8s', rating: 'S', note: 'Even bigger — shorter window. BiS for melee Amara.' },
      { name: 'While Grasp Active: +150% Weapon Dmg', rating: 'A', note: 'Sustained bonus during Ties that Bind.' }
    ],
    flak: [
      { name: 'While Fade Away: +200% Weapon Dmg', rating: 'S', note: '3 crit shots in window = instant boss delete. Non-negotiable for Fade Away builds.' },
      { name: 'Rakk Attack: Target takes +100% damage 7s', rating: 'S', note: 'Universal damage amp. All sources — weapon, pet, clone.' },
      { name: 'Gamma Burst: +115% Radiation Dmg', rating: 'A', note: 'BiS for Gamma Burst tank builds.' }
    ],
    zane: [
      { name: 'SNTNL Active: +100% Cryo Damage', rating: 'S', note: 'Near-permanent uptime with Seein\' Dead. Best Zane weapon anoint.' },
      { name: 'Clone Swap: +130% Weapon Dmg', rating: 'S', note: 'Huge burst on clone swap. Doubled Agent clone builds.' },
      { name: 'SNTNL Active: +9% Fire Rate, +23% Reload', rating: 'A', note: 'Sustained DPS boost. Pairs with Plasma Coil fire rate.' }
    ]
  }

};
