/* ============================================================
   BORDERLANDS 3 — COMPLETE SKILL TREE DATA
   All 4 characters × 4 trees — every skill, every augment
   Sources: Borderlands Wiki, Lootlemon, MentalMars
   ============================================================ */

const SKILL_TREES = {

  moze: {
    name: 'Moze',
    color: '#E8272A',
    note: 'IB = Iron Bear. IC = Iron Cub. Skills with * receive Mayhem Scaling.',
    trees: [
      {
        id: 'bottomless',
        name: 'Bottomless Mags',
        color: '#4A9BFF',
        focus: 'Infinite Ammo / Sustained Fire / Fire Damage',
        actionSkills: [
          {
            name: 'Minigun',
            type: 'Primary Weapon',
            desc: 'The Minigun fires bullets at rapid speed dealing Physical Skill Damage. Prolonged firing causes overheat — brief cooldown required.',
            augments: [
              { name: 'Let Off Some Steam', desc: 'Minigun deals more damage as heat increases and can fire longer before overheating.' },
              { name: 'General Winter', desc: 'Minigun fires Cryo rounds — reduces Heat Gain and Fuel Drain but deals reduced damage.' },
              { name: 'Exploding Bullets', desc: 'Minigun fires Explosive Rounds for increased Splash Damage. Fire Rate decreased.' }
            ]
          },
          {
            name: 'Salamander',
            type: 'Secondary Weapon',
            desc: 'The Salamander is a flamethrower dealing Incendiary Damage at close range. Has infinite ammo but drains Fuel with use.',
            augments: [
              { name: 'Fuel Efficient', desc: 'Reduces Salamander Fuel Drain. Iron Bear gains increased Movement Speed after damaging with Salamander.' },
              { name: 'Molten Roar', desc: 'Salamander burst-fires 3 projectiles with increased Fuel Drain. The first leaves a large Incendiary area.' },
              { name: 'Chemical Warfare', desc: 'Salamander deals Corrosive Damage. Melt Damage is increased.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Cloud of Lead', pts: 5, type: 'passive', key: true, desc: 'Occasionally Moze and Iron Bear shots deal bonus Incendiary Damage and do not consume ammo. Incendiary Damage: +6% per pt', m10: 'Core fire damage passive. At M10 this procs constantly — effective infinite ammo on fire shots.' },
              { name: 'Dakka Bear', pts: 1, type: 'passive', desc: 'Adds a manned turret to the back of Iron Bear so an ally can fire from it.' },
              { name: 'Matched Set', pts: 5, type: 'passive', desc: 'Moze\'s equipped weapon gains stacking bonus Magazine Size and decreased Heat Per Shot for every piece of gear matching the manufacturer. Mag Size: +1 per stack per pt' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Stoke the Embers', pts: 3, type: 'passive', key: true, desc: 'Increases Moze and Iron Bear Incendiary Damage. Incendiary Damage: +7% per pt (max +21%)', m10: 'Free fire damage bonus — must have for all fire-based Moze builds.' },
              { name: 'Redistribution', pts: 1, type: 'passive', key: true, desc: 'After Moze scores a Critical Hit, she regenerates ammo for her current weapon and restores a small amount of Health for a short time.', m10: 'Combined with Scorching RPMs crit bonus — constant ammo regen in sustained fights.' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Scrappy', pts: 5, type: 'passive', desc: 'While moving, Moze gains increased Handling, Weapon Swap Speed, and Mode Switch Speed. Handling: +3% per pt' },
              { name: 'Rushin\' Offensive', pts: 1, type: 'passive', key: true, desc: 'Moze can sprint and shoot simultaneously. Also grants Lifesteal while sprinting.', m10: 'Sprint-and-gun passive — no penalty for movement. Essential for aggressive playstyle.' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Scorching RPMs', pts: 5, type: 'passive', key: true, desc: 'Increases Moze\'s Fire Rate and Critical Hit Damage. Iron Bear gains double the bonus. Fire Rate: +3% | Crit Damage: +4% per pt', m10: 'At 5 points: +15% fire rate and +20% crit. Iron Bear gets +30% fire rate, +40% crit. Always max this.' },
              { name: 'Specialist Bear', pts: 1, type: 'passive', key: true, desc: 'Equipping Iron Bear with duplicate weapons (same weapon in both hardpoints) increases their damage significantly. Bear Damage: +50% (twice)', m10: 'If running same weapon both IB slots — +50% IB damage per slot. Massive IB DPS boost.' },
              { name: 'The Iron Bank', pts: 5, type: 'passive', desc: 'Moze\'s Magazine Size is increased. Mag Size: +5% per pt (max +25%)' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: '"Click, Click..."', pts: 3, type: 'passive', key: true, desc: 'Moze gains increased Gun Damage as her magazine empties. At 0 rounds remaining, bonus is maximum. Bonus: up to +9% gun damage per pt', m10: 'Shotguns with 2-shell mags are near-permanently at max bonus. Stacks with Desperate Measures.' },
              { name: 'Experimental Munitions', pts: 1, type: 'passive', desc: 'Whenever Moze scores a Critical Hit, she deals bonus Incendiary Damage. Scales with Crit Damage bonuses.' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Forge', pts: 1, key: true, desc: 'Moze constantly regenerates ammo for her currently equipped weapon. Ammo Regen: 5% mag/sec', m10: 'Infinite ammo on any weapon. Combined with Click Click — empty mag bonus becomes permanent with timing.' }
          }
        ]
      },
      {
        id: 'demolition',
        name: 'Demolition Woman',
        color: '#E8272A',
        focus: 'Splash Damage / Iron Bear AoE / Grenades',
        actionSkills: [
          {
            name: 'V-35 Grenade Launcher',
            type: 'Primary Weapon',
            desc: 'Semi-automatic grenade launcher. Grenades are NOT affected by Moze\'s equipped grenade mod. Grenades bounce 3 times or detonate on enemy impact.',
            augments: [
              { name: 'Shaped Charge', desc: 'Direct hits with V-35 deal +35% increased damage.' },
              { name: 'Musical Chairs', desc: 'Every 7th grenade is a Singularity that pulls in nearby enemies before exploding.' },
              { name: 'Clusterfrag', desc: 'V-35 Reload Speed greatly increased and now fires a 5-round burst.' }
            ]
          },
          {
            name: 'Vanquisher Rocket Pod',
            type: 'Secondary Weapon',
            desc: 'Rapid-fire unguided explosive rockets. Can designate up to 6 targets with Active Tracking augment.',
            augments: [
              { name: 'Active Tracking', desc: 'Rocket Pod now fires homing rockets and has increased Reload Speed. Hold Fire to designate up to 6 targets.' },
              { name: 'Hammerdown Protocol', desc: 'Rocket Pod fires reduced damage rockets in a 6-rocket spread pattern.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Fire in the Skag Den', pts: 3, type: 'passive', key: true, desc: 'Whenever Moze deals Splash Damage, she also deals bonus Incendiary Damage. MAYHEM SCALED: at M10 = +93% incendiary per point.', m10: 'THE most important tooltip lie in BL3. 5pt = +465% fire damage at M10 (31x scaling). Core of ALL splash Moze builds.' },
              { name: 'Deadlines', pts: 3, type: 'passive', desc: 'Firing IB weapons drains less fuel. Also: kills while IB is active restore fuel (diminishing returns). Fuel Reduction: -4% per pt' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Grizzled', pts: 3, type: 'passive', desc: 'Kill Skill. Killing an enemy reduces Moze\'s remaining Action Skill Cooldown. Diminishing returns. Cooldown Reduction: 2s per pt' },
              { name: 'Stainless Steel Bear', pts: 5, type: 'passive', key: true, desc: 'Iron Bear gains additional armor (+IB health) and increased Maximum Fuel. Also: +Skill Damage and +IB Damage. IB Health: +20% | Max Fuel: +5% per pt', m10: 'More fuel = longer IB. More armor = tankier IB. Mandatory for IB builds. 5pts recommended.' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Pull the Holy Pin', pts: 3, type: 'passive', desc: 'Moze\'s grenades have a chance to score a Critical Hit, dealing greatly increased damage. Chance: 10% per pt (max 30%)' },
              { name: 'Torgue Cross-Promotion', pts: 5, type: 'passive', key: true, desc: 'All Splash Damage dealt by Moze has a chance to double in size (AoE radius doubles). Chance: 8% per pt (max 40%)', m10: 'At 5pts: 40% chance splash doubles in size. With Plaguebearer or Backburner this is devastating.' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Means of Destruction', pts: 3, type: 'passive', key: true, desc: 'Whenever Moze deals Splash Damage: chance to add ammo to current weapon mag + smaller chance to return a grenade. Ammo Chance: 8% | Grenade Chance: 3% per pt', m10: 'Infinite grenade loop with Hex grenade. Never run dry on grenades in any fight.' },
              { name: 'Vampyr', pts: 5, type: 'passive', key: true, desc: 'Whenever Moze damages an enemy with a grenade (direct hit or splash), she restores a portion of her Health. Lifesteal: 3% per pt per grenade hit', m10: 'Combined with Means of Destruction infinite grenade loop: essentially infinite healing from grenades.' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'Why Can\'t I Carry All These Grenades?', pts: 3, type: 'passive', desc: 'Increases Moze\'s maximum Grenade count. Grenades: +2 per pt (max +6). Also slightly increases grenade regen.' },
              { name: 'To the Last', pts: 1, type: 'passive', desc: 'Moze can throw grenades while in Fight for Your Life (FFYL) state.' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Auto Bear', pts: 1, key: true, desc: 'When Moze exits Iron Bear, it stays deployed as a stationary turret targeting nearby enemies for a duration. At the end, IB charges at an enemy and self-destructs dealing massive Physical AoE damage.', m10: 'Game-changer. Jump out → IB keeps firing → double DPS window. With Big Surplus Mayhem scaling: absolutely absurd damage from turret.' }
          }
        ]
      },
      {
        id: 'shield',
        name: 'Shield of Retribution',
        color: '#F5A623',
        focus: 'Shields / Risk-Reward / High HP Penalty Damage',
        actionSkills: [
          {
            name: 'Railgun',
            type: 'Primary Weapon',
            desc: 'Fires electrified high-velocity projectiles dealing Shock Damage after a brief charge period.',
            augments: [
              { name: 'Hell on Rails', desc: 'Railgun fires superheated Fire Damage rounds with increased Fuel Drain.' },
              { name: 'Capacitor', desc: 'On hit: chains to nearby enemies dealing reduced Shock Damage.' },
              { name: 'Corrosive Sabot Round', desc: 'Fires specialty round with reduced damage that explodes after a delay. Reduced Fuel Drain, increased Mag Size.' }
            ]
          },
          {
            name: 'Bear Fist',
            type: 'Secondary Weapon',
            desc: 'Pneumatic-driven fist that deals massive Physical damage to a single target at close range.',
            augments: [
              { name: 'Wild Swing', desc: 'On hit: deals random bonus Elemental Damage to target and all nearby enemies.' },
              { name: 'Close the Distance', desc: 'Bear Fist launches its fist forward gripping distant enemies, pulling them back dealing Shock Damage.' },
              { name: 'Piston Pounder', desc: 'Bear Fist can now Rapid Punch — fire continuously as long as trigger is held. Reduced Fuel Drain, bonus Shock Damage.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Thin Red Line', pts: 3, type: 'passive', key: false, desc: 'A portion of Moze\'s Maximum Health is converted into Maximum Shield. HP converted: 20% per pt (max 60%)', m10: 'With Front Loader shield: reserve 60% HP → permanently below 50% HP → Desperate Measures always maxed.' },
              { name: 'Selfless Vengeance', pts: 5, type: 'passive', desc: 'Whenever Moze reloads, she loses a small portion of Health and grants bonus Incendiary Damage to herself and allies for a few seconds. Team Fire Dmg: +5% per pt' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Vladof Ingenuity', pts: 5, type: 'passive', desc: 'Increases Moze\'s Maximum Shield and Shock Resistance. Max Shield: +6% | Shock Resist: +6% per pt' },
              { name: 'Full Can of Whoop-Ass', pts: 1, type: 'passive', desc: 'Entering Iron Bear causes Moze\'s and allies\' shields to immediately begin recharging at an increased rate. Team Recharge Rate: +25%' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Behind the Iron Curtain', pts: 3, type: 'passive', desc: 'Moze\'s Shield Recharge Delay is reduced and Shield Recharge Rate is increased. Delay: -10% | Rate: +12% per pt' },
              { name: 'Desperate Measures', pts: 3, type: 'passive', key: true, desc: 'Moze\'s Gun Damage is increased depending on how low her health is. The lower her health, the greater the bonus. At 1HP with 3pts: +50% gun damage.', m10: 'With Bloodletter class mod: operate at 1HP → permanent +50% gun damage. The Bloodletter 1HP build is named after this.' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Security Bear', pts: 1, type: 'passive', desc: 'Iron Bear gains a Bubble Shield that reduces damage taken. Shield deactivates if it takes too much damage, reactivating after cooldown. Bear Damage Reduction: +25%' },
              { name: 'Armored Infantry', pts: 5, type: 'passive', key: true, desc: 'While Moze\'s Shield is active: gains Damage Reduction AND increased Gun Damage. Damage Reduction: +5% | Gun Damage: +3% per pt', m10: 'Passive gun damage while shielded. With Re-Charger shield that instantly recharges on depletion: always shielded.' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'Drowning in Brass', pts: 3, type: 'passive', key: true, desc: 'Kill Skill. Killing an enemy gives Moze stacks of gun damage but reduces Fire Rate for a short time. Stacks apply to IB too. Gun Dmg/Stack: +3% per pt', m10: 'Stack this constantly in mob content. 3pts = +9% gun damage per kill stack. With Seein\'s Red equivalents: massive sustained DPS.' },
              { name: 'Phalanx Doctrine', pts: 5, type: 'passive', key: true, desc: 'Kill Skill. Killing an enemy grants a stack of Phalanx Doctrine, boosting Max Shield and Gun Damage per stack. Max Shield: +6% | Gun Dmg: +3% per pt per stack' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Tenacious Defense', pts: 1, key: true, desc: 'When Moze\'s Shield is depleted, she restores 40% of her Maximum Shield and gains +30% Gun Damage for 30 seconds. Can only trigger after shield has fully recharged.', m10: 'Shield break = free +40% shield + massive damage window. With Re-Charger cycling shield breaks this can proc very frequently.' }
          }
        ]
      },
      {
        id: 'bearmother',
        name: 'Bear Mother',
        color: '#9B59B6',
        dlc: true,
        dlcName: "Designer's Cut (Season Pass 2)",
        focus: 'Iron Cub Companion / Incendiary / Status Effect Synergy',
        actionSkills: [
          {
            name: 'Iron Cub',
            type: 'Primary Action Skill',
            desc: 'Moze summons Iron Cub — a miniaturized Iron Bear that follows her and attacks enemies autonomously. Equips two copies of whatever weapon is in the other AS slot. Skills affecting Iron Bear also affect Iron Cub. Less damage than IB, less Fuel drain.',
            augments: [
              { name: 'My Little Friend', desc: 'Iron Cub spawns carrying an additional Incendiary Vladof Assault Rifle alongside its other weapons.' },
              { name: 'Dual-Wielding', desc: 'Iron Cub dual-wields the secondary AS weapon instead of two copies of the same weapon.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Biofuel', pts: 3, type: 'passive', desc: 'Whenever Moze or Iron Bear/Cub ignites an enemy, both regenerate HP for a short time. HP Regen: 0.3% of Max HP/s per pt' },
              { name: 'Molten Roar', pts: 3, type: 'passive', key: true, desc: 'While Moze\'s Action Skill is cooling down, she deals bonus Incendiary Damage. Also: while AS is active, Moze and IB gain increased Movement Speed. Incendiary: +5% per pt', m10: 'Passive fire bonus when not in Iron Cub. Always active in non-IB time. Stacks with Fire in the Skag Den.' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Flare', pts: 3, type: 'passive', desc: 'Whenever Moze or Iron Bear/Cub applies a Status Effect to an enemy, Moze gains increased Fire Rate for a short time. Fire Rate: +5% per pt' },
              { name: 'Specialist Bear', pts: 1, type: 'passive', key: true, desc: 'Iron Bear and Iron Cub gain increased Damage and Damage Resistance. Extra bonus if same weapon is equipped in both hardpoints. Bear Damage: +50% (×2 with duplicate weapons)', m10: 'Duplicate weapons in IB/IC = +50% damage bonus applies twice. Massive multiplier for IB builds.' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Fuel for the Fire', pts: 3, type: 'passive', desc: 'Whenever Moze or Iron Cub inflicts a Status Effect on an enemy, Iron Cub\'s armor is restored. Armor Restore: +1% max HP per pt' },
              { name: 'Bear Necessities', pts: 5, type: 'passive', key: true, desc: 'Moze gains increased Gun Damage based on how long Iron Cub has been active. The longer IC is on the field, the greater the bonus. Max Bonus: +15% gun dmg at 5pts', m10: 'With Eternal Machine capstone — IC is always active → always at max gun damage bonus from this skill.' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Efficiency Engine', pts: 3, type: 'passive', key: true, desc: 'Moze and Iron Bear/Cub gain increased Action Skill Cooldown Rate whenever a Status Effect is inflicted on an enemy. Stacks. Cooldown Rate: +5% per stack per pt', m10: 'Constant status procs from fire weapons = constantly reducing IC cooldown = near-infinite IC uptime.' },
              { name: 'Frenzy', pts: 5, type: 'passive', desc: 'Moze and Iron Bear gain increased Status Effect Damage and Status Effect Chance. SE Dmg: +5% | SE Chance: +3% per pt' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'Baby Nukes', pts: 3, type: 'passive', key: true, desc: 'Whenever Iron Cub is deployed or destroyed, it triggers a nuclear explosion dealing massive Radiation Damage to all nearby enemies. MAYHEM SCALED at M10. Explosion Dmg: +33% per pt', m10: 'CRITICAL: 31x Mayhem scaling. Every IC deploy/death = room-clearing radiation explosion. More IB cycling = more nukes.' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Eternal Machine', pts: 1, key: true, desc: 'Iron Cub no longer consumes Fuel, allowing it to stay on the battlefield indefinitely.', m10: 'Infinite Iron Cub duration. Combined with Baby Nukes: deploy IC → IC never leaves → constant radiation aura + infinite fuel. Game-defining capstone.' }
          }
        ]
      }
    ]
  },

  amara: {
    name: 'Amara',
    color: '#9B59B6',
    note: 'AS = Action Skill. Rush = stacking mechanic from Mystical Assault. Phaseflare is Enlightened Force DLC.',
    trees: [
      {
        id: 'brawl',
        name: 'Brawl',
        color: '#E8272A',
        focus: 'Melee / Close Range / HP Sustain',
        actionSkills: [
          {
            name: 'Phaseslam',
            type: 'Action Skill',
            desc: 'Amara leaps into the air and slams her fists into the ground, dealing massive Physical Area Skill Damage to all nearby enemies. Enemies close to the impact take bonus damage.',
            augments: [
              { name: 'Downfall', desc: 'Phaseslam deals Elemental Damage instead of Physical, based on Amara\'s attuned element.' },
              { name: 'Fracture', desc: 'Phaseslam creates multiple fissures of elemental energy that shoot forward from the impact point.' },
              { name: 'Revelation', desc: 'Phaseslam creates a nova that applies a Status Effect to all nearby enemies.' }
            ]
          },
          {
            name: 'Phasecast',
            type: 'Alternative AS',
            desc: 'Amara sends forward an astral projection of herself dealing massive Elemental Skill Damage in a line.',
            augments: [
              { name: 'Tandava', desc: 'Phasecast spawns additional projectiles on impact.' },
              { name: 'Deliverance', desc: 'Phasecast releases tracking orbs on impact that home in on nearby enemies.' },
              { name: 'Reverberation', desc: 'Phasecast pierces through enemies, dealing increased damage per enemy pierced.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Samsara', pts: 5, type: 'passive', key: true, desc: 'Action Skill Kills grant Amara stacks of increased Gun Damage and HP Regen for a short time. Gun Damage/Stack: +3% | HP Regen: +0.2% per pt', m10: 'AS kills chain into massive gun damage boost. With Ties That Bind — every enemy in the room gives you stacks.' },
              { name: 'Helping Hand(s)', pts: 3, type: 'passive', desc: 'After Amara activates an Action Skill, her team gains increased Weapon Handling and Reload Speed for a short time.' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Jab Cross', pts: 3, type: 'passive', key: true, desc: 'After Sprinting, Amara gains increased Melee Damage for a short time. Melee Dmg: +7% per pt (max +21%)', m10: 'Face-puncher shotgun counts as melee — sprint → shoot → massive damage window. Core of melee builds.' },
              { name: 'Clarity', pts: 5, type: 'passive', key: false, desc: 'Amara constantly regenerates Health. HP Regen: +0.3% of max HP/s per pt' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Find Your Center', pts: 1, type: 'passive', key: true, desc: 'After Amara uses her Action Skill, she gains increased Melee Damage for a long time. Melee Dmg: +200% for 8 seconds', m10: 'The biggest melee multiplier in the game. Post-Phaseslam: Face-puncher deals +200% melee damage. Non-negotiable for melee builds.' },
              { name: 'Mindfulness', pts: 5, type: 'passive', key: true, desc: 'Whenever Amara takes damage, she gains increased Movement Speed for a short time. Stacks up to 10 times. Speed per Stack: +1.5% per pt', m10: 'Spiritual Driver build: move speed = gun damage. Getting shot = going faster = more damage. Counterintuitive but insane.' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Vigor', pts: 5, type: 'passive', desc: 'Amara gains increased Movement Speed after activating an Action Skill. Move Speed: +3% per pt' },
              { name: 'Arms Deal', pts: 1, type: 'passive', desc: 'After Amara deals Melee Damage, she gains increased Gun Damage for a short time. Gun Dmg: +20%' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'Revelation', pts: 1, type: 'passive', key: true, desc: 'Whenever Amara applies a Status Effect to an enemy, she creates an Elemental Nova based on the applied Status Effect. MAYHEM SCALED.', m10: 'Mayhem-scaled nova on every elemental hit. With Ties That Bind spreading status effects to entire linked groups — room-clearing AoE.' },
              { name: 'Catharsis', pts: 3, type: 'passive', desc: 'When Amara\'s Shield is depleted, she creates an Elemental Nova dealing Skill Damage. Dmg: +10% per pt' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Do Unto Others', pts: 1, key: false, desc: 'When Amara deals Melee Damage to an enemy, that damage is also dealt to all enemies affected by her Action Skill (Grasped/Phaselocked targets).', m10: 'One melee hit damages all Grasped enemies. With Ties That Bind — one punch kills every linked enemy simultaneously. Co-op-level power in solo.' }
          }
        ]
      },
      {
        id: 'fistoftheelements',
        name: 'Fist of the Elements',
        color: '#F5A623',
        focus: 'Elemental Damage / AoE / Status Effects / Ties That Bind',
        actionSkills: [
          {
            name: 'Phasegrasp',
            type: 'Action Skill',
            desc: 'Amara summons a giant fist that bursts from the ground and locks a targeted enemy in place for a short time. Enemies immune to being Grasped instead take instant Skill Damage. MAYHEM SCALED.',
            augments: [
              { name: 'Ties That Bind', desc: 'CAPSTONE AUGMENT: Phasegrasp links all nearby enemies to the Grasped target — damage dealt to the Grasped target is shared with all linked enemies. S-Tier.' },
              { name: 'Stillness of Mind', desc: 'Phasegrasp creates a radial pulse that Phasegrasps all nearby enemies simultaneously.' },
              { name: 'Soul Sap', desc: 'Phasegrasp leaches HP from the Grasped enemy and converts it to health for Amara.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Tempest', pts: 5, type: 'passive', key: true, desc: 'Amara gains increased Elemental Damage. Additionally: increases Shock Damage separately. Elemental Dmg: +6% | Shock Dmg: +3% per pt', m10: 'At 5pts: +30% all elemental, +15% bonus shock. Scales with every elemental weapon and AS.' },
              { name: 'Infusion', pts: 5, type: 'passive', desc: 'A portion of Amara\'s Gun Damage is converted to her attuned element. This is added on top of existing gun damage. Conversion: +4% per pt' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Sustainment', pts: 3, type: 'passive', key: true, desc: 'Whenever Amara damages an enemy with an Elemental weapon, she regenerates Health. Lifesteal: 6% of elemental damage per pt', m10: 'With Plasma Coil or Kyb\'s Worth — continuous elemental hits = continuous healing. Main sustain for gun Amara.' },
              { name: 'Conflux', pts: 5, type: 'passive', desc: 'While Amara has an active Status Effect on an enemy, there is a chance the Status Effect will randomly change to a different element. Chance: +4% per pt' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Wildfire', pts: 5, type: 'passive', key: false, desc: 'When Amara applies a Status Effect to an enemy, there is a chance the Status Effect will spread to a nearby enemy. Chance: +8% per pt', m10: 'Chain fire through Ratch nests and COV camps. With Revelation: one shot ignites → spreads → novas all over.' },
              { name: 'Indiscriminate', pts: 5, type: 'passive', key: true, desc: 'Amara\'s bullets have a chance to ricochet off enemies and target another nearby enemy. Ricochet Chance: +8% per pt | Ricochet Damage: 50% of original', m10: 'With Recursion shotgun: ricochets chain infinitely between enemies. Room-clear with one magazine.' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Catharsis', pts: 3, type: 'passive', desc: 'After Amara\'s Shield is broken, she creates a large Elemental Nova dealing Skill Damage based on her attuned element. Nova Dmg: +10% per pt' },
              { name: 'Laid Bare', pts: 3, type: 'passive', key: true, desc: 'Enemies affected by Amara\'s Action Skill take increased damage from ALL sources for the duration. Damage Taken: +20% per pt', m10: 'With Ties That Bind: every linked enemy takes +20% damage from all sources including teammates. Best support skill in game.' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'Forceful Expression', pts: 3, type: 'passive', desc: 'Amara\'s weapons deal bonus Elemental Damage based on her attuned element. Bonus Dmg: +5% per pt' },
              { name: 'Elemental Awakening', pts: 5, type: 'passive', desc: 'For each unique Status Effect active on an enemy, Amara\'s Status Effect Damage is increased. Bonus: +5% per unique active SE' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Ties That Bind', pts: 1, key: true, desc: 'Phasegrasp links all nearby enemies to the Grasped target. Damage dealt to the Grasped target is also dealt to all linked enemies. Any kill of a linked enemy kills all linked enemies simultaneously.', m10: 'The most broken capstone in the game for mob clearing. With Nimbus class mod: AS creates DOT clouds that chain to all linked enemies = instant room wipe.' }
          }
        ]
      },
      {
        id: 'mysticalassault',
        name: 'Mystical Assault',
        color: '#8A6FF0',
        focus: 'Rush Stacks / Gun Damage / Skill Spam',
        actionSkills: [
          {
            name: 'Phasecast',
            type: 'Action Skill',
            desc: 'Amara sends forward an astral projection of herself dealing massive Elemental Skill Damage in a line. MAYHEM SCALED.',
            augments: [
              { name: 'Tandava', desc: 'Phasecast spawns additional projectiles on impact that fly outward in all directions.' },
              { name: 'Deliverance', desc: 'Phasecast spawns tracking orbs on impact that home to nearby enemies.' },
              { name: 'Reverberation', desc: 'Phasecast pierces through multiple enemies, dealing increased damage per enemy pierced.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Violent Tapestry', pts: 5, type: 'passive', key: true, desc: 'Applying Status Effects to enemies grants Amara stacks of Rush. Each Rush stack increases Action Skill Damage and other Rush-dependent bonuses. Rush Stacks: +1 per SE applied. Max stacks increase with Awakening skill.', m10: 'Feed Rush constantly via elemental weapons → consume via Do Harm → massive gun damage burst. Core of Mystical Assault loop.' },
              { name: 'Fast Hand(s)', pts: 5, type: 'passive', desc: 'Amara gains increased Reload Speed. Reload Speed: +5% per pt' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Restless', pts: 5, type: 'passive', desc: 'Amara gains increased Action Skill Cooldown Rate. Cooldown Rate: +4% per pt. Also, killing with AS reduces cooldown further.' },
              { name: 'Do Harm', pts: 5, type: 'passive', key: true, desc: 'When Amara activates her Action Skill, she gains increased Gun Damage for a short time, consuming all Rush stacks. Each Rush stack increases the bonus. Gun Dmg: up to +45% at max Rush per pt', m10: 'This is the Rush payoff. Max stacks → activate AS → massive gun damage window. Spiritual Driver makes this near-permanent.' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Wrath', pts: 5, type: 'passive', key: true, desc: 'Amara\'s Gun Damage is increased while her Action Skill is on cooldown. Gun Dmg: +4% per pt (max +20%)', m10: 'With fast cooldown: nearly always active. Free gun damage at all times between skill uses.' },
              { name: 'Alacrity', pts: 5, type: 'passive', desc: 'Amara gains increased Reload Speed for each Rush stack active. Reload Speed per Stack: +1% per pt' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Transcend', pts: 1, type: 'passive', desc: 'After Amara activates her Action Skill, she gains increased Critical Hit Damage and Accuracy for a short time. Crit Dmg: +25% | Accuracy: +50%' },
              { name: 'Awakening', pts: 5, type: 'passive', key: true, desc: 'Increases Amara\'s Maximum Rush Stack Cap. Each point increases cap by 1 (base is 3, so +5pts = 8 max stacks).', m10: 'More Rush cap = bigger Do Harm damage spike. Required to get full benefit from Rush-based builds.' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'From Rest', pts: 5, type: 'passive', desc: 'Amara gains increased Charge Speed (for charge weapons) and Fire Rate while Phasegrasp/Phasecast is active. Fire Rate: +5% per pt' },
              { name: 'Laid Bare', pts: 3, type: 'passive', key: true, desc: 'Enemies affected by Amara\'s Action Skill take increased damage from all sources. Damage Taken: +20% per pt', m10: 'Stacks universally — all damage from all sources. In a party this multiplies everyone\'s damage.' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Unweave the Rainbow', pts: 1, key: true, desc: 'When Amara activates her Action Skill, she creates an Elemental Nova at her location dealing massive Skill Damage. Nova element matches her attuned element. MAYHEM SCALED.', m10: 'Mayhem-scaled nova every AS activation. With fast cooldown and Phasecast spam: constant room-clearing novas.' }
          }
        ]
      },
      {
        id: 'enlightenedforce',
        name: 'Enlightened Force',
        color: '#00D4FF',
        dlc: true,
        dlcName: "Designer's Cut (Season Pass 2)",
        focus: 'Phaseflare Orb / Cryo / Elemental Versatility / Shield Interaction',
        actionSkills: [
          {
            name: 'Phaseflare',
            type: 'Action Skill',
            desc: 'Amara creates a large orb of elemental energy that deals constant Elemental Damage to nearby enemies. The orb rolls and bounces — shoot it to propel it into enemies. MAYHEM SCALED.',
            augments: [
              { name: 'Cold Hearted', desc: 'Converts Phaseflare to Cryo Damage. Enemies near the orb are slowed/frozen. Frozen enemies take 3× melee damage.' },
              { name: 'Expedite', desc: 'Killing an enemy with the Action Skill grants increased Action Skill Cooldown Rate until the next AS activation.' },
              { name: 'Glow Up', desc: 'Phaseflare orb now heals nearby allies instead of damaging enemies.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Trust in Yourself', pts: 3, type: 'passive', key: false, desc: 'Whenever an enemy breaks Amara\'s Shield, she gains increased Reload Speed, Charge Speed, and Weapon Swap Speed. Effect is doubled if shield is broken by a melee attack. Reload Speed: +8% per pt' },
              { name: 'No Mistakes in Nature', pts: 5, type: 'passive', key: true, desc: 'Whenever Amara inflicts a Status Effect on an enemy, she gains increased Melee Damage for a short time. Melee Dmg: +4% per pt', m10: 'Constant elemental hits → constant melee bonus → Face-puncher hits even harder. Combined with Jab Cross: layered melee bonuses.' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Heavy Rain', pts: 5, type: 'passive', key: true, desc: 'Amara\'s weapons gain increased Projectile Speed and Splash Damage. Splash Dmg: +5% per pt | Projectile Speed: +10% per pt', m10: 'Splash boost stacks with all other splash modifiers. At 5pts: +25% splash — adds significant damage to Plaguebearer, Backburner, etc.' },
              { name: 'Champion', pts: 3, type: 'passive', desc: 'Kill Skill. Killing an enemy grants increased Gun Damage and Elemental Damage for a short time. Gun Dmg: +5% per pt' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Joyful Freedom', pts: 3, type: 'passive', desc: 'After activating an Action Skill, Amara gains increased Movement Speed. Move Speed: +5% per pt' },
              { name: 'Vigil', pts: 5, type: 'passive', key: true, desc: 'Whenever Amara deals Elemental Damage to an enemy, she gains increased Action Skill Cooldown Rate. Rate: +3% per pt (stacks briefly)', m10: 'Constant elemental weapon hits → constantly reducing AS cooldown → near-infinite Phaseflare uptime.' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Burning Sensation', pts: 5, type: 'passive', key: false, desc: 'Amara gains increased Status Effect Damage. Also: dealing damage to a Status Effect afflicted enemy increases Gun Damage briefly. SE Dmg: +4% per pt' },
              { name: 'Clarity of Purpose', pts: 5, type: 'passive', key: true, desc: 'Increases Amara\'s elemental Damage. Damage scales up based on number of Rush stacks consumed. All Elemental Dmg: +3% per pt base', m10: 'Max Rush stacks then activate AS — larger elemental damage window. Combines with Do Harm for double-stack consumption benefit.' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'Laid Bare', pts: 3, type: 'passive', key: true, desc: 'Enemies hit by Amara\'s Action Skill take increased damage from ALL sources for a short time. Damage Taken: +20% per pt', m10: 'Universal damage amp. Phaseflare orb tags every enemy it touches — all damage is buffed from all sources while buff lasts.' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Orb of Destruction', pts: 1, key: true, desc: 'Phaseflare deals greatly increased damage and has increased effect radius. The orb explodes for massive damage when time expires.', m10: 'Makes Phaseflare viable at M10. The explosion hits Mayhem-scaled. Cold Hearted + Orb of Destruction = frozen room wipe on expiry.' }
          }
        ]
      }
    ]
  },

  flak: {
    name: 'FL4K',
    color: '#52C41A',
    note: 'Hunter Skills = special kill skills unique to FL4K. Each pet has 3 forms (Base → Evolution 1 → Evolution 2). Megavore capstone makes all shots crittable.',
    trees: [
      {
        id: 'hunter',
        name: 'Hunter',
        color: '#F5A623',
        focus: 'Critical Hits / Fade Away / Megavore Capstone',
        actionSkills: [
          {
            name: 'Fade Away',
            type: 'Action Skill',
            desc: 'FL4K cloaks — becomes invisible with increased Movement Speed and Health Regeneration. Can fire exactly 3 shots while cloaked, each shot is automatically a Critical Hit. FL4K decloaks after 3 shots or when duration expires.',
            augments: [
              { name: 'Guerrillas in the Mist', desc: 'Fade Away no longer ends after FL4K attacks. FL4K can fire freely — but Critical Hit Damage and Fade Away duration are reduced. KEY: allows firing all mag in one Fade Away window.' },
              { name: 'Unblinking Eye', desc: 'Successive hits on the same target during Fade Away increase Critical Damage per hit. Resets every 3 hits.' },
              { name: 'Not My Circus', desc: 'After Fade Away ends, FL4K\'s pet Taunts all nearby enemies, drawing their attention for a long time.' }
            ]
          },
          {
            name: 'Rakk Attack!',
            type: 'Alternative AS — Hunter Tree Pet',
            desc: 'FL4K sends forward 2 Rakk to dive-bomb enemies. This skill has MULTIPLE CHARGES (starts with 2, upgradeable). Each charge can be used independently with a short charge cooldown.',
            augments: [
              { name: 'Falconer\'s Feast', desc: 'Dealing damage with Rakk Attack restores Health.' },
              { name: 'Rakkcelerate', desc: 'Rakk Attack gains +1 additional charge and increased Cooldown Rate.' },
              { name: 'Rakk Open a Cold One', desc: 'Converts Rakk Attack damage to Cryo — slows enemies on hit.' }
            ]
          }
        ],
        tiers: [
          {
            req: 0,
            skills: [
              { name: 'Interplanetary Stalker', pts: 5, type: 'passive', key: false, desc: 'Hunter Kill Skill. Killing an enemy grants a stack of Interplanetary Stalker: bonus damage to all damage dealt. Unique bonus per enemy type killed (Human/Robot/Beast), each stacking up to 3×. Base Bonus: +2% per stack per pt' },
              { name: 'Overclocked', pts: 5, type: 'passive', key: true, desc: 'FL4K gains increased Fire Rate. This bonus is always active while FL4K has a pet. Fire Rate: +4% per pt (max +20%). Extra bonus after reloading briefly.', m10: 'Free +20% fire rate with 5pts. Always active since you always have a pet. Zero conditions.' }
            ]
          },
          {
            req: 5,
            skills: [
              { name: 'Leave No Trace', pts: 3, type: 'passive', key: true, desc: 'When FL4K scores a Critical Hit, there is a chance to add 1 ammo back to the current magazine. Chance: 12% per pt (max 36%)', m10: 'With Megavore + multi-pellet weapons (Skullmasher 5-pellet, Monarch): every shot has 5 chances to proc. Near-infinite ammo.' },
              { name: 'Second Intention', pts: 5, type: 'passive', key: false, desc: 'Hunter Kill Skill. On kill: increased Reload Speed. Critical Kill: extra Reload Speed bonus. Reload: +8% per pt' }
            ]
          },
          {
            req: 10,
            skills: [
              { name: 'Ambush Predator', pts: 5, type: 'passive', key: false, desc: 'While there are no enemies near FL4K, FL4K gains increased Weapon Handling and Critical Hit Damage. Crit Dmg: +4% | Handling: +5% per pt' },
              { name: 'Hunter\'s Eye', pts: 5, type: 'passive', key: false, desc: 'FL4K gains unique bonuses vs. specific enemy types: +3% Crit vs Humans | +6% Armor Dmg vs Robots | +5.3% Dmg Reduction vs Beasts per pt' }
            ]
          },
          {
            req: 15,
            skills: [
              { name: 'Head Count', pts: 3, type: 'passive', key: true, desc: 'When FL4K scores a Critical Hit, there is a chance the Action Skill Cooldown is reduced. Chance: 15% | Cooldown Reduction: 1s per pt', m10: 'With Megavore: every body shot can trigger Head Count. Combined with Leave No Trace: crits everywhere = Fade Away recharges during combat.' },
              { name: 'Grim Harvest', pts: 3, type: 'passive', key: true, desc: 'Hunter Kill Skill. Whenever FL4K kills an enemy, they gain increased Critical Hit Damage for a short time. Crit Dmg: +5% per pt (max +15%)', m10: 'With Bounty Hunter class mod: always active without needing a kill. Free +15% crit damage.' }
            ]
          },
          {
            req: 20,
            skills: [
              { name: 'Two F4ng', pts: 5, type: 'passive', key: false, desc: 'FL4K has a chance to fire an extra projectile per shot. Extra Projectile Chance: +8% per pt (max 40%)', m10: 'Extra projectile = extra Megavore crit proc = extra St4ckbot stack. Good filler points.' },
              { name: 'Big Game', pts: 3, type: 'passive', key: true, desc: 'FL4K\'s Hunter Skills become more effective and have a longer duration. Hunter Skill Bonus: +25% | Duration: +25% per pt', m10: 'Makes Grim Harvest and Interplanetary Stalker dramatically stronger and longer. Pair with Bounty Hunter for permanent max.' }
            ]
          },
          {
            req: 25,
            capstone: { name: 'Megavore', pts: 1, key: true, desc: 'FL4K gains the ability to score Critical Hits regardless of where they hit an enemy (body shots crit). This also means FL4K\'s Critical Hits can strike areas that wouldn\'t normally have a Crit Spot.', m10: 'THE game-changing capstone. Every pellet of every multi-pellet weapon crits anywhere on the body. With St4ckbot: stack cap reached in 2-3 shots. Absolute foundation of all top FL4K builds.' }
          }
        ]
      },
      {
        id: 'stalker',
        name: 'Stalker',
        color: '#9B59B6',
        focus: 'Fade Away Synergy / Survivability / Pet',
        actionSkills: [
          {
            name: 'Fade Away',
            type: 'Action Skill (Stalker path)',
            desc: 'Same as Hunter tree — Fade Away cloaks FL4K and allows 3 guaranteed Critical Hit shots.',
            augments: [
              { name: 'Guerrillas in the Mist', desc: 'Same as Hunter tree — fire freely during Fade Away at reduced Crit Damage and duration.' },
              { name: 'Unblinking Eye', desc: 'Stacks Critical Damage on successive hits during Fade Away.' },
              { name: 'Not My Circus', desc: 'After Fade Away ends: pet taunts all nearby enemies.' }
            ]
          }
        ],
        tiers: [
          { req: 0, skills: [
            { name: 'Self-Repairing System', pts: 5, type: 'passive', key: false, desc: 'FL4K\'s Maximum Health is increased and they constantly regenerate Health. HP Regen: +0.5% max HP/s per pt | Max HP: +6% per pt' },
            { name: 'Gotta Go Fast', pts: 5, type: 'passive', desc: 'FL4K\'s pet gains increased Movement Speed and Damage. Pet Move Speed: +5% per pt' }
          ]},
          { req: 5, skills: [
            { name: 'Lick the Wounds', pts: 1, type: 'passive', key: true, desc: 'When FL4K enters Fight for Your Life, their pet will attempt to revive FL4K. Pet revive is faster than player revive.', m10: 'Natural self-revive. If going down in M10 solo — pet comes to save you. Required for less tanky builds.' },
            { name: 'Sic \'Em', pts: 3, type: 'passive', desc: 'Pet Attack Command has lowered Cooldown and increased Damage. Attack Cmd Dmg: +15% per pt' }
          ]},
          { req: 10, skills: [
            { name: 'Furious Attack', pts: 5, type: 'passive', key: false, desc: 'Hunter Skill. After shooting an enemy, FL4K gains a stack of Furious Attack increasing Handling and Gun Damage. Stacks decay after a few seconds. Gun Dmg per Stack: +2% per pt' },
            { name: 'Eager to Impress', pts: 5, type: 'passive', key: false, desc: 'Kill Skill. Kills reduce FL4K\'s Action Skill Cooldown. Pet kills reduce it even more AND refresh Attack Command cooldown. Cooldown Reduction per Kill: 3% per pt' }
          ]},
          { req: 15, skills: [
            { name: 'All My BFF\'s', pts: 3, type: 'passive', desc: 'Allies share a portion of FL4K\'s total Health Regeneration. FL4K\'s pet shares twice the amount. Good for co-op.' },
            { name: 'Hidden Machine', pts: 5, type: 'passive', key: false, desc: 'While no enemies are targeting FL4K, FL4K gains increased Weapon Damage and Handling. Dmg: +4% per pt', m10: 'With Red Fang class mod taunting all enemies to pet — FL4K is never targeted → Hidden Machine always active.' }
          ]},
          { req: 20, skills: [
            { name: 'The Most Dangerous Game', pts: 1, type: 'passive', key: true, desc: 'Hunter Kill Skill. Killing a Badass or stronger enemy: FL4K gains increased Critical Hit Damage, Gun Damage, and Handling for a long time. Plus a cash reward. Huge bonuses.', m10: 'Boss/Badass kill = massive temporary damage buff. Bounty Hunter class mod makes this permanent.' },
            { name: 'Frenzy', pts: 5, type: 'passive', key: true, desc: 'When FL4K\'s pet deals damage to an enemy, FL4K gains a stack of Frenzy increasing their own Damage. Pet deals damage → FL4K gains stacks. Dmg per Stack: +3% per pt', m10: 'Red Fang pet constantly attacks (it taunts all enemies) → constant Frenzy stacks → passive gun damage buff.' }
          ]},
          { req: 25, capstone: { name: 'Guerrillas in the Mist', pts: 1, key: true, desc: 'Fade Away Augment unlocked as capstone: FL4K can now fire their weapons freely during Fade Away. All shots still have Mayhem-based damage. Fade Away Critical Hit Damage and duration are reduced in exchange.', m10: 'With Skullmasher (5 pellets) × 3 shots × Megavore = all 15 pellets crit = insane boss damage burst per Fade Away window.' } }
        ]
      },
      {
        id: 'master',
        name: 'Master',
        color: '#52C41A',
        focus: 'Pet Damage / Gamma Burst Radiation / Tankiness via Pet',
        actionSkills: [
          {
            name: 'Gamma Burst',
            type: 'Action Skill',
            desc: 'FL4K teleports their pet through a Rift at the target location, dealing Radiation Area Skill Damage. The pet is enlarged, takes no damage, and prevents itself from going below 1 HP for the duration. Pet gains bonus Radiation Damage on all attacks. MAYHEM SCALED.',
            augments: [
              { name: 'Empathic Rage', desc: 'While Gamma Burst is active, FL4K gains increased Gun Damage based on their pet\'s current health.' },
              { name: 'Atomic Aroma', desc: 'While Gamma Burst is active, FL4K\'s pet emits a constant Radiation Aura dealing damage to all nearby enemies. MAYHEM SCALED.' },
              { name: 'Endurance', desc: 'Killing an enemy during Gamma Burst extends the duration.' }
            ]
          }
        ],
        tiers: [
          { req: 0, skills: [
            { name: 'Ferocity', pts: 5, type: 'passive', key: false, desc: 'FL4K\'s pet deals increased Damage. Pet Dmg: +5% per pt (max +25%)' },
            { name: 'Who Rescued Who?', pts: 5, type: 'passive', key: false, desc: 'Whenever FL4K\'s pet damages an enemy, FL4K regenerates Health. Whenever FL4K damages an enemy, their pet regenerates Health. Lifesteal: 1% per pt' }
          ]},
          { req: 5, skills: [
            { name: 'Pack Tactics', pts: 5, type: 'passive', key: false, desc: 'FL4K gains increased Gun Damage while their pet is alive. Gun Dmg: +3% per pt' },
            { name: 'He Bites!', pts: 5, type: 'passive', desc: 'When FL4K\'s pet takes damage, a portion of that damage is reflected back to the attacker. Reflect: 3% per pt' }
          ]},
          { req: 10, skills: [
            { name: 'Frenzy', pts: 5, type: 'passive', key: true, desc: 'When FL4K\'s pet deals damage, both FL4K and their pet gain stacks of Frenzy increasing damage. Stacks decay slowly. Dmg per Stack: +3% per pt', m10: 'With Red Fang pet constantly tanking hits → constant attack = constant Frenzy stacks = passive gun damage.' },
            { name: 'Mutated Defenses', pts: 5, type: 'passive', key: false, desc: 'When FL4K\'s pet is at low health, it gains Damage Reduction and regenerates Health rapidly. Damage Reduction: +5% per pt when pet is hurt' }
          ]},
          { req: 15, skills: [
            { name: 'Hive Mind', pts: 5, type: 'passive', desc: 'When FL4K takes damage, a portion of that damage is transferred to their pet. Pet damage reduction applies. Damage Transferred: +4% per pt' },
            { name: 'Psycho Head on a Stick', pts: 5, type: 'passive', key: false, desc: 'Whenever FL4K kills an enemy, their pet temporarily gains increased Movement Speed and Damage. Pet Dmg: +5% per pt' }
          ]},
          { req: 20, skills: [
            { name: 'Barbaric Yawp', pts: 5, type: 'passive', key: true, desc: 'FL4K\'s pet bonuses — including stat bonuses from equipped pet type — are increased. Pet Bonus Amplification: +10% per pt', m10: 'With Spiderant Countess (corrosive proc) or Scorcher (fire aura): amplifies all pet proc damage. Pairs with Atomic Aroma.' },
            { name: 'Atomic Aroma', pts: 1, type: 'passive', key: true, desc: 'While Gamma Burst is active, FL4K\'s pet emits a constant Radiation Aura that damages all nearby enemies. MAYHEM SCALED. The aura scales with Gamma Burst damage bonuses.', m10: 'With Red Fang taunt: all enemies cluster around pet → all enemies in radiation aura = constant room damage. Best mob-clear for Gamma Burst.' }
          ]},
          { req: 25, capstone: { name: 'Dominance', pts: 1, key: false, desc: 'FL4K can fire their weapon at an enemy to Mind Control them, turning them against their allies for a short time. Only one enemy can be controlled at once.', m10: 'Situational — good for controlling Anointed or Badasses during resist phases. Not meta but fun. Gamma Burst Red Fang is still stronger.' } }
        ]
      },
      {
        id: 'trapper',
        name: 'Trapper',
        color: '#00D4FF',
        dlc: true,
        dlcName: "Designer's Cut (Season Pass 2)",
        focus: 'Shields / CC / Survivability / Loader Bot Pet',
        actionSkills: [
          {
            name: 'Gravity Snare',
            type: 'Action Skill',
            desc: 'FL4K tosses a trap that sends out zero-gravity pulses every 3 seconds — causing enemies in a large radius to levitate and be stunned for 1 second. Enemies take increased damage while levitated. FL4K can pick up the trap before the 16s duration to end it early and recover a portion of the remaining cooldown.',
            augments: [
              { name: 'Capacitance', desc: 'Trap duration and radius are increased (+25% duration, +100% radius). Enemies take more damage while levitated.' },
              { name: 'Shield Reboot', desc: 'After FL4K picks up the Gravity Snare trap, their Shield immediately begins recharging.' }
            ]
          }
        ],
        tiers: [
          { req: 0, skills: [
            { name: 'Wooly Armor', pts: 1, type: 'passive', key: true, desc: 'While FL4K\'s Shield is full, their pet gains Damage Reduction. While FL4K\'s Shield is not full, FL4K gains Damage Reduction. Pet Dmg Reduction: 25% | FL4K Dmg Reduction: 15%', m10: 'Effectively: FL4K or their pet always has damage reduction. Combined with Shared Soul: near-unkillable setup.' },
            { name: 'Better Toys', pts: 3, type: 'passive', key: false, desc: 'FL4K\'s pet gains decreased Shield Recharge Delay and increased Shield Recharge Rate. Pet Recharge Rate: +6% | Recharge Delay: -8% per pt' }
          ]},
          { req: 5, skills: [
            { name: 'Fuzzy Math', pts: 5, type: 'passive', key: true, desc: 'Whenever FL4K or their pet deals a Critical Hit, a portion of the damage dealt is restored to both FL4K\'s and the pet\'s Shield. Shield Restore: 3% of crit damage per pt', m10: 'Crits = free shield. With Megavore: every shot is a crit = constant shield restoration. Keeps FL4K at full shield for Wooly Armor / Power Inside.' },
            { name: 'Success Imminent', pts: 5, type: 'passive', desc: 'When FL4K or their pet\'s Shield is broken or fully filled, both create an Elemental Nova dealing Radiation Skill Damage. Nova Dmg: +10% per pt' }
          ]},
          { req: 10, skills: [
            { name: 'Monkey Do!', pts: 5, type: 'passive', key: false, desc: 'FL4K\'s pet gains increased Critical Hit Damage. Whenever the pet scores a Critical Hit, FL4K\'s next shot deals bonus damage based on pet\'s weapon damage. Pet Crit Dmg: +5% per pt' },
            { name: 'Lethal Force Authorized', pts: 1, type: 'passive', key: false, desc: 'When FL4K\'s Loader Bot pet would enter Fight for Your Life, it instead turns into an EXP Loader and runs toward enemies before self-destructing. Respawn Time: -50%' }
          ]},
          { req: 15, skills: [
            { name: 'Capacitance', pts: 5, type: 'passive', key: true, desc: 'When FL4K kills an enemy, their Shield immediately begins recharging. This also increases FL4K\'s Maximum Shield. Max Shield: +10% per pt', m10: 'Kill = instant shield regen start. In M10 mob content you\'re always killing = always recharging = always at full shield → Power Inside active.' },
            { name: 'Take This!', pts: 1, type: 'passive', key: true, desc: 'FL4K\'s pet gains a copy of FL4K\'s equipped Shield with full stats.', m10: 'Give Transformer shield to pet → pet absorbs shock damage and recovers shield → pet becomes incredibly tanky. Loader Bot is especially good.' }
          ]},
          { req: 20, skills: [
            { name: 'The Power Inside', pts: 5, type: 'passive', key: true, desc: 'While FL4K\'s Shield is at Maximum Capacity, FL4K gains increased Gun Damage. Gun Dmg: +7% per pt (max +35%)', m10: 'With Capacitance keeping shield full after every kill: constant +35% gun damage. FL4K who never loses shield is a sustained DPS machine.' }
          ]},
          { req: 25, capstone: { name: 'Shared Soul', pts: 1, key: true, desc: 'When FL4K is critically injured (low HP), FL4K\'s pet is instantly revived at full Health and immediately moves to revive FL4K. Additionally: if FL4K goes into FFYL, the pet comes to instantly revive them.', m10: 'The best solo survivability capstone in the game. Pet = infinite revive. You literally cannot die in solo M10 with this active.' } }
        ]
      }
    ]
  },

  zane: {
    name: 'Zane',
    color: '#4A9BFF',
    note: 'Unique mechanic: Zane can equip 2 Action Skills simultaneously but CANNOT throw grenades while doing so. Grenade mod still procs Drone/Clone delivery systems.',
    trees: [
      {
        id: 'hitman',
        name: 'Hitman',
        color: '#F5A623',
        focus: 'SNTNL Drone / Kill Skills / Violent Momentum',
        actionSkills: [
          {
            name: 'SNTNL',
            type: 'Action Skill',
            desc: 'Zane deploys a SNTNL combat drone that flies around firing at enemies for 24 seconds (upgradeable). SNTNL uses a minigun dealing Physical Skill Damage. Can be directed with Hold AS button to target a specific area (fires 4 missiles at that location, kills reset SNTNL duration).',
            augments: [
              { name: 'Bad Dose', desc: 'SNTNL fires corrosive rounds dealing Skill Damage. Enemies hit by SNTNL take increased damage from all sources and their damage is reduced.' },
              { name: 'Almighty Ordnance', desc: 'Once per SNTNL activation, Zane can hold AS to target an area — SNTNL fires 4 homing missiles. Kills reset SNTNL duration.' },
              { name: 'Static Field', desc: 'SNTNL emits a static field that continuously strips enemy shields and regenerates Zane\'s shield.' }
            ]
          }
        ],
        tiers: [
          { req: 0, skills: [
            { name: 'Violent Speed', pts: 5, type: 'passive', key: true, desc: 'Kill Skill. Killing an enemy increases Zane\'s Movement Speed for a short time. Stacks up to 3 times. Speed per Stack: +5% per pt (max +25% per stack = +75% total at 3 stacks)', m10: 'With Violent Momentum: speed = gun damage. 3 stacks of Violent Speed = massive gun damage bonus. Foundation of Zane DPS.' },
            { name: 'Cold Bore', pts: 5, type: 'passive', desc: 'Zane\'s first shot from a newly drawn weapon deals bonus Cryo Damage and Slows enemies. Cryo Bonus: +10% per pt | After first shot: +5% fire rate bonus briefly.' }
          ]},
          { req: 5, skills: [
            { name: 'Cool Hand', pts: 5, type: 'passive', desc: 'Zane gains increased Reload Speed. Reload Speed: +5% per pt' },
            { name: 'Donnybrook', pts: 5, type: 'passive', key: true, desc: 'Kill Skill. Killing an enemy grants Zane and any ally increased Gun Damage and HP Regen. Stacks twice. Gun Dmg: +4% per pt per stack', m10: 'With Seein\' Dead class mod: ANY damage procs this. Never not active. Free +8% gun damage at 1pt (with Seein\' Dead).' }
          ]},
          { req: 10, skills: [
            { name: 'Violent Momentum', pts: 5, type: 'passive', key: true, desc: 'Zane\'s Movement Speed directly increases his Gun Damage. The faster Zane moves, the more damage he deals. Bonus Scales: up to +20% gun dmg at max speed per pt (max +100%)', m10: 'THE core of all Zane builds. Stack Violent Speed → run fast → deal massive damage. Speed is DPS for Zane.' },
            { name: 'Nerves of Steel', pts: 5, type: 'passive', desc: 'Zane gains increased Accuracy and Handling while his Shield is above a threshold. Accuracy: +4% | Handling: +4% per pt' }
          ]},
          { req: 15, skills: [
            { name: 'Playing Dirty', pts: 5, type: 'passive', key: true, desc: 'Kill Skill. After killing an enemy, Zane\'s next 5 shots fire an extra projectile. Extra Projectile Chance: +20% per pt (max 100% = guaranteed)', m10: 'At 5pts: every shot fires an extra projectile for 5 shots after each kill. Light Show: 4→8 pellets. Monarch: 4→8 streams. Absolute carnage.' },
            { name: 'Good Misfortune', pts: 3, type: 'passive', desc: 'Kill Skill. Whenever Zane kills an enemy, his SNTNL\'s duration is extended. Duration Extension: +1.5s per pt (max +4.5s)' }
          ]},
          { req: 20, skills: [
            { name: 'Seein\' Red', pts: 1, type: 'passive', key: true, desc: 'Whenever Zane activates an Action Skill, all of Zane\'s Kill Skills are immediately activated at their maximum duration and stacks.', m10: 'SNTNL deploy = instant max kill skills. This is the alternative to Seein\' Dead for triggering all skills. Together they\'re redundant — pick one.' },
            { name: 'Supersonic Man', pts: 3, type: 'passive', key: false, desc: 'While Zane\'s action skills are active, he gains increased Movement Speed. Move Speed: +5% per pt' }
          ]},
          { req: 25, capstone: { name: 'Death Follows Close', pts: 1, key: true, desc: 'All of Zane\'s Kill Skills are enhanced — their bonuses are greatly increased and their durations are extended.', m10: 'Makes every kill skill dramatically more powerful. With Seein\' Dead activating all kill skills on every hit: this multiplies the bonus of every single one of them. Must-have.' } }
        ]
      },
      {
        id: 'doubledagent',
        name: 'Doubled Agent',
        color: '#9B59B6',
        focus: 'Digi-Clone / Clone Swap / Grenade Delivery',
        actionSkills: [
          {
            name: 'Digi-Clone',
            type: 'Action Skill',
            desc: 'Zane creates a holographic Digi-Clone of himself that distracts enemies and mirrors Zane\'s loadout. Clone uses Zane\'s weapons at reduced effectiveness. Zane can swap places with the Clone by holding the AS button. Clone has limited duration (20s base).',
            augments: [
              { name: 'Schadenfreude', desc: 'When Zane\'s Clone takes damage, Zane\'s Shield is restored for the same amount.' },
              { name: 'Which One\'s Real?', desc: 'Clone drops a Cryo Nova when Zane swaps with it, dealing Cryo Skill Damage to all nearby enemies.' },
              { name: 'Synchronize', desc: 'When Zane swaps with his clone, both Zane and the Clone are healed for 25% of Maximum Health.' }
            ]
          }
        ],
        tiers: [
          { req: 0, skills: [
            { name: 'Synchronicity', pts: 5, type: 'passive', key: true, desc: 'Zane gains increased Gun Damage for each Active Action Skill. Gun Dmg per Active AS: +10% per pt (max +50%)', m10: 'With 2 AS equipped (both SNTNL and Clone active): +20% gun damage at 1pt. At 5pts: +100% total gun damage. Always run 2 AS for this.' },
            { name: 'Borrowed Time', pts: 5, type: 'passive', desc: 'Zane\'s Action Skill durations are extended while his Action Skills are active. AS Duration Extension: +3% per pt' }
          ]},
          { req: 5, skills: [
            { name: 'Fractal Frags', pts: 1, type: 'passive', key: true, desc: 'Whenever Zane summons his Digi-Clone, the Clone throws a copy of Zane\'s equipped Grenade Mod.', m10: 'With Maddening Tracker grenade: Clone spawns → throws tracking grenade → free grenade damage every Clone activation. Infinite grenade value.' },
            { name: 'Praemunitis', pts: 5, type: 'passive', desc: 'Zane gains increased Magazine Size. Magazine Size: +8% per pt (max +40%). Also increases ammo count for launchers.' }
          ]},
          { req: 10, skills: [
            { name: 'Duct Tape Mod', pts: 5, type: 'passive', key: false, desc: 'The first shot from each newly loaded magazine launches a bonus Grenade from Zane\'s equipped Grenade Mod. Grenade Dmg: +100% of normal at 5pts' },
            { name: 'Trick of the Light', pts: 5, type: 'passive', key: false, desc: 'Enemies damaged by Zane\'s Digi-Clone take increased damage from all sources for a short time. Damage Taken: +5% per pt', m10: 'With Clone damaging everything it attacks: passive damage amp on all enemies the Clone hits.' }
          ]},
          { req: 15, skills: [
            { name: 'Which One\'s Real?', pts: 5, type: 'passive', key: false, desc: 'Enemies are more likely to target Zane\'s Digi-Clone instead of Zane. Taunt Chance: +8% per pt' },
            { name: 'Old-U', pts: 1, type: 'passive', key: true, desc: 'Whenever Zane would enter Fight for Your Life, he instead instantly swaps with his Digi-Clone (if active), being revived at full Health at the Clone\'s position. This destroys the Clone.', m10: 'Effectively immune to death while Clone is active. Get downed → instantly revive at Clone position. Then reactivate Clone. Near-unkillable mechanic.' }
          ]},
          { req: 20, skills: [
            { name: 'Doppelbanger', pts: 1, type: 'passive', desc: 'Zane can manually end his Digi-Clone early. When manually detonated, the Clone explodes dealing massive Physical Area Skill Damage. The longer Clone was active, the lower the damage.' },
            { name: 'Quick Breather', pts: 1, type: 'passive', key: true, desc: 'Whenever Zane swaps with his Digi-Clone, his Shield immediately begins recharging with no delay.', m10: 'Swap with Clone = instant shield regen. Combined with Violent Momentum / Confident Competence: always at full shield → always at full DPS.' }
          ]},
          { req: 25, capstone: { name: 'Like a Ghost', pts: 1, key: false, desc: 'Zane and his Digi-Clone have a chance to make incoming bullets phase through them harmlessly, dealing no damage. Phasing Chance: 25%', m10: 'Passive 25% bullet avoidance. Not as strong as Old-U but adds another layer of survivability for Clone builds.' } }
        ]
      },
      {
        id: 'undercover',
        name: 'Under Cover',
        color: '#4A9BFF',
        focus: 'Barrier Shield / Survivability / Shield Synergy',
        actionSkills: [
          {
            name: 'Barrier',
            type: 'Action Skill',
            desc: 'Zane deploys a stationary Barrier that blocks incoming bullets. Zane and allies can shoot through the Barrier from behind. Bullets that pass through the Barrier gain increased damage. Lasts until destroyed or Zane picks it up.',
            augments: [
              { name: 'Deterrence Field', desc: 'Enemies who walk into the Barrier are Shocked and Knocked Back.' },
              { name: 'All-Rounder', desc: 'Barrier becomes a dome, protecting allies from all sides. Still allows shooting from inside.' },
              { name: 'Nanites or Some Shite', desc: 'Zane and nearby allies continuously regen HP, Shield, and Ammo while near the Barrier.' }
            ]
          }
        ],
        tiers: [
          { req: 0, skills: [
            { name: 'Adrenaline', pts: 5, type: 'passive', desc: 'Zane\'s Shield Recharge Delay is reduced. The more Action Skills Zane has active, the greater the reduction. Delay Reduction: -6% per pt' },
            { name: 'Hearty Stock', pts: 5, type: 'passive', desc: 'Zane gains increased Maximum Shield. Max Shield: +6% per pt' }
          ]},
          { req: 5, skills: [
            { name: 'Ready for Action', pts: 5, type: 'passive', desc: 'Zane gains increased Shield Recharge Rate and reduced Recharge Delay. Rate: +5% | Delay: -5% per pt' },
            { name: 'Stiff Upper Lip', pts: 5, type: 'passive', desc: 'Zane converts a portion of incoming damage into Shield. The damage is still dealt to Health but a portion is mirrored to Shield regen. Shield Gain: 2% of dmg taken per pt' }
          ]},
          { req: 10, skills: [
            { name: 'Futility Belt', pts: 5, type: 'passive', key: true, desc: 'Non-matching elemental damage dealt by Zane is converted to Shock Damage. Also: Zane gains increased Non-Elemental Damage Resistance. Shock Conversion: active | Dmg Resistance: +4% per pt', m10: 'With Transformer shield (absorbs shock → converts to shield HP): all of Zane\'s own non-elemental fire converts to shield restore via Transformer proc.' },
            { name: 'Refreshment', pts: 5, type: 'passive', desc: 'Dealing Cryo Damage to an enemy has a chance to restore Zane\'s Shield. Shield Restore: 3% per crit per pt' }
          ]},
          { req: 15, skills: [
            { name: 'Really Expensive Jacket', pts: 1, type: 'passive', desc: 'Zane gains increased elemental resistance while his Shield is active. Elemental Resistance: +15% all elements' },
            { name: 'Distributed Denial', pts: 1, type: 'passive', key: true, desc: 'The Barrier\'s effects are shared to all of Zane\'s and allies\' equipped Shields in the nearby area. Any special effects from Zane\'s shield apply to all nearby shields.', m10: 'With Re-Charger shield (recharges instantly on break): Distributed Denial gives ALL allies instant shield recharge on break. BiS for co-op.' }
          ]},
          { req: 20, skills: [
            { name: 'Confident Competence', pts: 5, type: 'passive', key: true, desc: 'Zane gains increased Gun Damage and Accuracy based on how full his Shield is. At 100% Shield: maximum bonus. Gun Dmg: up to +12% per pt (max +60%)', m10: 'With Quick Breather keeping shield always full: constant +60% gun damage at 5pts. Stack with Synchronicity: massive passive DPS.' },
            { name: 'Best Served Cold', pts: 3, type: 'passive', key: false, desc: 'After killing an enemy with Zane or his Action Skills, Zane spawns a Cryo Nova. MAYHEM SCALED. Nova Dmg: +15% per pt' }
          ]},
          { req: 25, capstone: { name: 'Distributed Denial', pts: 1, key: true, desc: 'Already appears at T4 as 1pt skill. This position in tree is occupied by Confident Competence growth. Barrier\'s shield effects propagate to all Vault Hunters and Digi-Clone.', m10: 'The shield sharing mechanic fundamentally changes how the Barrier works in both solo and co-op. Must-have for any Barrier build.' } }
        ]
      },
      {
        id: 'professional',
        name: 'The Professional',
        color: '#00D4FF',
        dlc: true,
        dlcName: "Designer's Cut (Season Pass 2)",
        focus: 'MNTIS Shoulder Cannon / Critical Hits / Charge Management',
        actionSkills: [
          {
            name: 'MNTIS Shoulder Cannon',
            type: 'Action Skill',
            desc: 'Zane equips a Shoulder Mounted Cannon that fires a concussive energy beam. Pressing AS button fires one charge at Zane\'s crosshairs. Starts with 3 charges. Each charge recharges independently. Each use triggers all Action Skill Start/End anointments simultaneously.',
            augments: [
              { name: 'Colder Shoulder', desc: 'Converts MNTIS damage to Cryo Damage (reduced raw damage). Zane gains increased Cryo Freeze Rate.' },
              { name: 'Wet Work', desc: 'Enemies killed by MNTIS explode into Elemental Puddles dealing Fire Area Skill Damage for 10s.' },
              { name: 'No Way Out', desc: 'MNTIS shots pull targeted enemies toward Zane. Enemies pulled take +25% damage for 6 seconds. Increases MNTIS Cooldown by +20%.' },
              { name: 'Brain Drain', desc: 'Scoring a Critical Kill with MNTIS instantly returns 2 charges.' },
              { name: 'Proliferation', desc: 'MNTIS gains additional charges and deals increased damage — the more charges remaining, the greater the damage bonus.' }
            ]
          }
        ],
        tiers: [
          { req: 0, skills: [
            { name: 'Man of Focus', pts: 5, type: 'passive', key: false, desc: 'Activating an Action Skill grants Zane increased Accuracy and Handling for a short time. This effect stacks. Accuracy: +4% | Handling: +3% per pt per stack' },
            { name: 'Renegade', pts: 5, type: 'passive', desc: 'After Zane scores a Critical Hit, he regenerates Health for a short time. HP Regen: +0.5% max HP/s per pt' }
          ]},
          { req: 5, skills: [
            { name: 'Deja Vu', pts: 5, type: 'passive', key: false, desc: 'Whenever Zane kills an enemy with a Critical Hit, there is a chance for 1 ammo to be added back to his current magazine. Chance: +9% per pt' },
            { name: 'Commitment', pts: 5, type: 'passive', key: true, desc: 'Kill Skill. Killing an enemy grants Zane increased Gun Damage and increased Action Skill Cooldown Rate for a short time. Stacks twice. Gun Dmg per Stack: +4% per pt', m10: 'With Seein\' Dead: ANY hit procs this. Always 2 stacks. Free +8% gun damage per pt at all times.' }
          ]},
          { req: 10, skills: [
            { name: 'Domino Effect', pts: 5, type: 'passive', key: true, desc: 'Scoring a Critical Hit grants Zane increased Fire Rate and Reload Speed for a short time. Scoring a Critical Hit with MNTIS doubles this bonus. Fire Rate: +5% | Reload: +5% per pt', m10: 'Fire MNTIS on a weakspot → doubled fire rate bonus for next several seconds. Rotate MNTIS → weapons for constant buff uptime.' },
            { name: 'Sheer Will', pts: 5, type: 'passive', key: true, desc: 'Zane gains increased Action Skill Cooldown Rate. Scoring a Critical Hit increases this effect. Effect Stacks. Cooldown Rate: +4% per pt', m10: 'More crits = faster MNTIS recharge. With Megavore equivalent crits: MNTIS charges refill extremely quickly.' }
          ]},
          { req: 15, skills: [
            { name: 'The Art of War', pts: 5, type: 'passive', key: true, desc: 'After activating an Action Skill or Action Skill Ability (i.e. firing MNTIS), Zane\'s next shot from his weapon deals Increased Damage. This effect can stack up to 5 times. Bonus per Stack: +10% per pt', m10: 'Fire MNTIS → switch weapon → next 5 shots each deal bonus damage. Rapid MNTIS spam → 5 buffed shots rapidly = insane burst.' }
          ]},
          { req: 20, skills: [
            { name: 'Eraser', pts: 1, type: 'passive', key: true, desc: 'ALL of Zane\'s Critical Hit shots pierce through enemies. Each enemy pierced causes the bullet to deal increased damage (+20% per enemy pierced) to subsequent enemies.', m10: 'Single bullet through 3 lined-up enemies = 1.0 × 1.2 × 1.2 = 1.44× base damage. In dense mobs this multiplies enormously. BiS with sniper rifles and tight mob packs.' }
          ]},
          { req: 25, capstone: { name: 'Proliferation', pts: 1, key: true, desc: 'MNTIS Shoulder Cannon gains additional charges and deals increased damage based on the number of remaining charges. More charges left = greater damage bonus per shot.', m10: 'Never fire your last charge — always leave 1-2 remaining for the damage bonus. With Brain Drain returning charges on crit kills: constantly firing at near-full bonus.' } }
        ]
      }
    ]
  }

};

if (typeof module !== 'undefined') module.exports = SKILL_TREES;
