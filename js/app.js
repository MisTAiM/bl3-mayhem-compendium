/* ============================================================
   BORDERLANDS 3 MAYHEM COMPENDIUM — app.js
   Navigation, dynamic rendering, interactivity
   ============================================================ */

'use strict';

// ── STATE ──────────────────────────────────────────────────
const State = {
  currentSection: 'home',
  currentChar: 'moze',
  currentBuild: 0,
  currentPlanet: 'pandora',
  currentLoadoutChar: 'moze'
};

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildSidebar();
  buildHome();
  buildElements();
  buildCharacters();
  buildPlanets();
  buildWeapons();
  buildMayhem();
  buildLoadouts();
  buildSkillTreesSection();
  buildLiveSection();
  showSection('home');
  animateBars();
});

// ── SIDEBAR ────────────────────────────────────────────────
function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const sections = [
    { id: 'home',      label: 'Home Base',       group: 'General' },
    { id: 'elements',  label: 'Element Guide',   group: 'General' },
    { id: 'mayhem',    label: 'Mayhem Modifiers', group: 'General' },
    { id: 'moze',      label: 'Moze',            group: 'Characters', charClass: 'char-moze' },
    { id: 'amara',     label: 'Amara',           group: 'Characters', charClass: 'char-amara' },
    { id: 'flak',      label: "FL4K",            group: 'Characters', charClass: 'char-flak' },
    { id: 'zane',      label: 'Zane',            group: 'Characters', charClass: 'char-zane' },
    { id: 'planets',   label: 'Planet Guide',    group: 'World' },
    { id: 'loadouts',  label: 'Planet Loadouts', group: 'World' },
    { id: 'weapons',   label: 'Weapons Vault',   group: 'Arsenal' },
    { id: 'skilltrees', label: 'Skill Trees',    group: 'Arsenal' },
    { id: 'live',       label: 'Live Stats',     group: 'Live' },
  ];

  let currentGroup = '';
  sections.forEach(s => {
    if (s.group !== currentGroup) {
      const lbl = document.createElement('div');
      lbl.className = 'nav-section-label';
      lbl.textContent = s.group;
      nav.appendChild(lbl);
      currentGroup = s.group;
    }
    const btn = document.createElement('button');
    btn.className = `nav-item ${s.charClass || ''}`;
    btn.id = `nav-${s.id}`;
    btn.onclick = () => showSection(s.id);
    btn.innerHTML = `<span class="nav-dot"></span>${s.label}`;
    nav.appendChild(btn);
  });
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const charIds = ['moze','amara','flak','zane'];
  const sectionEl = document.getElementById(`section-${id}`);
  if (sectionEl) sectionEl.classList.add('active');
  const navEl = document.getElementById(`nav-${id}`);
  if (navEl) navEl.classList.add('active');
  State.currentSection = id;
  window.scrollTo(0, 0);
}

// ── HOME SECTION ───────────────────────────────────────────
function buildHome() {
  const sec = document.getElementById('section-home');
  sec.innerHTML = `
    <div class="hero">
      <div class="hero-fade"></div>
      <div class="hero-claptrap-glow"></div>
      <img class="hero-claptrap" src="claptrap.png" alt="Claptrap" />
      <div class="hero-content" style="position:relative;z-index:3">
        <div class="hero-eyebrow">Ultimate M10 Reference Guide</div>
        <div class="hero-title">BORDERLANDS <span>3</span></div>
        <div class="hero-subtitle">Mayhem 10 Compendium — The Complete Vault Hunter Bible</div>
        <div class="hero-stats">
          <div class="hero-stat"><div class="num">4</div><div class="label">Vault Hunters</div></div>
          <div class="hero-stat"><div class="num">6+</div><div class="label">Planets</div></div>
          <div class="hero-stat"><div class="num">25+</div><div class="label">Mayhem Modifiers</div></div>
          <div class="hero-stat"><div class="num">16</div><div class="label">BiS Builds</div></div>
        </div>
      </div>
    </div>
    <div class="quick-cards">
      ${quickCard('Element Guide','ESSENTIAL','The elemental damage system — flesh vs shield vs armor. Know this before anything else.','elements')}
      ${quickCard('Moze','GUNNER','Splash damage, Iron Bear, infinite ammo. Fire in the Skag Den hits 93% per point at M10.','moze')}
      ${quickCard('Amara','SIREN','Melee god or elemental machine. Face-puncher Unleash Dragon = permanent fire DOT on everything.','amara')}
      ${quickCard("FL4K",'BEASTMASTER','Megavore makes every shot a potential crit. St4ckbot stacks to +500% crit damage.','flak')}
      ${quickCard('Zane','OPERATIVE','Seein\'s Dead procs ALL kill skills on ANY hit. Non-negotiable. Nothing is close.','zane')}
      ${quickCard('Planet Guide','WORLDS','Enemy factions per planet with health types and elemental priorities.','planets')}
      ${quickCard('Planet Loadouts','LOADOUTS','Exactly which 4 weapons to equip per planet for each character.','loadouts')}
      ${quickCard('Weapons Vault','ARSENAL','All BiS legendaries, Mayhem-exclusive drops, manufacturer tiers.','weapons')}
      ${quickCard('Mayhem Modifiers','MODIFIER','25+ modifiers — which to keep, which to reroll, and character exploits.','mayhem')}
    </div>
    <div class="content-body">
      <div class="section-title">The Cardinal Rules of M10</div>
      <div class="section-desc">Burn this into your skull before you run a single M10 session.</div>
      <div class="grid-2 mb-32">
        ${ruleCard('1','MATCH YOUR ELEMENT','Fire beats flesh. Shock beats shields. Corrosive beats armor. At M10 wrong-element shots deal 50-70% less damage. A mismatched weapon is worse than no weapon.')}
        ${ruleCard('2','ANOINTMENTS ARE EVERYTHING','A blue-rarity weapon with the right anoint beats a legendary with the wrong one at M10. Always reroll at Crazy Earl for 250 Eridium.')}
        ${ruleCard('3','FOUR SLOTS = FOUR PURPOSES','Shock to strip → Fire for flesh → Corrosive for armor → Radiation/Cryo for mob clear. Never run duplicates unless your build requires it.')}
        ${ruleCard('4','GUARDIAN RANK FIRST','Dump Guardian Tokens into Enforcer tree. Max Dead-Eye then Hollow Point. Every crit session is wasted without this foundation.')}
        ${ruleCard('5','CLASS MOD IS YOUR BUILD','The class mod defines everything. A wrong class mod can cut your damage by 60%. Farm your BiS mod before any weapon.')}
        ${ruleCard('6','ANOINTED ENEMIES CYCLE','At M10, Anointed enemies cycle through elemental resistances. Watch the glow color. Switch elements or use kinetic splash during immune phases.')}
      </div>
    </div>
  `;
}

function quickCard(title, label, desc, target) {
  return `<div class="quick-card" onclick="showSection('${target}')">
    <div class="quick-card-label">${label}</div>
    <div class="quick-card-title">${title}</div>
    <div class="quick-card-desc">${desc}</div>
    <div class="quick-card-arrow">&rarr;</div>
  </div>`;
}

function ruleCard(num, title, desc) {
  return `<div class="card mb-0">
    <div style="display:flex;align-items:flex-start;gap:16px">
      <div style="font-family:var(--font-head);font-size:48px;color:var(--orange);text-shadow:var(--text-3d-orange);line-height:1;flex-shrink:0">${num}</div>
      <div>
        <div style="font-family:var(--font-head);font-size:22px;letter-spacing:2px;color:var(--white);margin-bottom:6px">${title}</div>
        <div style="font-size:13px;color:var(--text-dim);line-height:1.6">${desc}</div>
      </div>
    </div>
  </div>`;
}

// ── ELEMENTS SECTION ───────────────────────────────────────
function buildElements() {
  const sec = document.getElementById('section-elements');

  const pct = (val) => {
    if (val >= 175) return `<span class="pct-great">${val}%</span>`;
    if (val >= 100) return `<span class="pct-good">${val}%</span>`;
    if (val >= 75)  return `<span class="pct-normal">${val}%</span>`;
    if (val >= 65)  return `<span class="pct-bad">${val}%</span>`;
    return `<span class="pct-worst">${val}%</span>`;
  };

  const elemNames = BL3.elements.map(e => e.name);
  const headers = ['Health Type', ...elemNames].map(h => `<div class="elem-header">${h}</div>`).join('');

  const rows = BL3.healthTypes.map(ht => {
    const cells = BL3.elements.map(el => `<div class="elem-cell">${pct(el.vs[ht.id])}</div>`).join('');
    return `<div class="elem-row-label" style="border-left:3px solid ${ht.color}">
      <span style="color:${ht.color};font-size:10px;font-family:var(--font-mono)">${ht.id.toUpperCase()}</span>
      ${ht.name}
    </div>${cells}`;
  }).join('');

  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">Foundation Knowledge</div>
      <h1>Elemental System</h1>
      <p>Every fight at M10 is an elemental puzzle. Wrong element = 50-70% less damage. Right element = 175% damage. Know this chart by heart.</p>
    </div>
    <div class="content-body">
      <div class="section-title mb-8">Damage Effectiveness Matrix</div>
      <div class="section-desc">Values are percentage of base card damage dealt. Green = bonus damage. Red = penalty.</div>
      <div class="elem-matrix mb-32">${headers}${rows}</div>

      <div class="section-title mb-8">Element Breakdown</div>
      <div class="section-desc">Full breakdown of each element's mechanics, DOT, and tactical role.</div>
      <div class="grid-2 mb-32">
        ${BL3.elements.map(el => `
          <div class="card">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
              <div style="width:4px;height:48px;background:${el.color};flex-shrink:0"></div>
              <div>
                <div style="font-family:var(--font-head);font-size:28px;letter-spacing:2px;color:${el.color};text-shadow:2px 2px 0 #000">${el.name}</div>
                <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);letter-spacing:2px">DOT: ${el.dot}</div>
              </div>
            </div>
            <div style="font-size:13px;color:var(--text-dim);line-height:1.6;margin-bottom:12px">${el.effect}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <span class="badge" style="background:${el.color}22;border-color:${el.color};color:${el.color}">vs Flesh: ${el.vs.flesh}%</span>
              <span class="badge" style="background:${el.color}22;border-color:${el.color};color:${el.color}">vs Shield: ${el.vs.shield}%</span>
              <span class="badge" style="background:${el.color}22;border-color:${el.color};color:${el.color}">vs Armor: ${el.vs.armor}%</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-title mb-8">The Universal 4-Slot Rule</div>
      <div class="section-desc">This is the foundation of every M10 loadout across all characters.</div>
      <div class="card mb-32">
        <div class="grid-4">
          ${['Shock — Strip Shields', 'Fire — Burn Flesh', 'Corrosive — Melt Armor', 'Radiation/Cryo — Mob Clear'].map((s,i) => {
            const colors = [varCSS('--blue'), varCSS('--red'), varCSS('--green'), varCSS('--purple')];
            const c = ['#4A9BFF','#E8272A','#52C41A','#9B59B6'][i];
            return `<div style="text-align:center;padding:16px;border:2px solid ${c};background:${c}11">
              <div style="font-family:var(--font-head);font-size:32px;color:${c};text-shadow:2px 2px 0 #000;margin-bottom:4px">${i+1}</div>
              <div style="font-size:12px;font-weight:700;color:${c};letter-spacing:1px">${s}</div>
            </div>`;
          }).join('')}
        </div>
      </div>

      <div class="section-title mb-8">Special Notes</div>
      <div class="grid-2">
        <div class="card">
          <div style="font-family:var(--font-head);font-size:20px;color:var(--yellow);margin-bottom:8px">ANOINTED ENEMY RESIST CYCLE</div>
          <div style="font-size:13px;color:var(--text-dim);line-height:1.6">Anointed enemies cycle through elemental resistances every 15-20 seconds. They glow the color of their current weakness. At M10 they have 3× normal HP. Keep kinetic/radiation as fallback during full-immune phases.</div>
        </div>
        <div class="card">
          <div style="font-family:var(--font-head);font-size:20px;color:var(--yellow);margin-bottom:8px">BADASS VARIANT ARMOR</div>
          <div style="font-size:13px;color:var(--text-dim);line-height:1.6">Every Badass-tier enemy gains a yellow armor bar regardless of their normal health type. A Badass Psycho (normally pure flesh) will have flesh + armor. Always have corrosive accessible even in flesh-heavy zones for Badass spawns.</div>
        </div>
        <div class="card">
          <div style="font-family:var(--font-head);font-size:20px;color:var(--yellow);margin-bottom:8px">CRYO FREEZE THRESHOLD</div>
          <div style="font-size:13px;color:var(--text-dim);line-height:1.6">Cryo efficiency is the percentage of damage applied as freeze. At 100% efficiency, enemies freeze at 20% remaining HP. Frozen enemies take 3× melee damage. Cannot fully freeze bosses — only slow them. Excellent for CC against melee enemies.</div>
        </div>
        <div class="card">
          <div style="font-family:var(--font-head);font-size:20px;color:var(--yellow);margin-bottom:8px">RADIATION CHAIN KILLS</div>
          <div style="font-size:13px;color:var(--text-dim);line-height:1.6">Enemies killed while Irradiated explode, spreading radiation to all nearby mobs. Chain explosions scale with Mayhem level. In dense packs, a single Plaguebearer shot can wipe entire rooms as the chain reaction propagates. Target isolated Badasses first for maximum spread.</div>
        </div>
      </div>
    </div>
  `;
}

function varCSS(v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }

// ── CHARACTERS SECTION ─────────────────────────────────────

// ── CHARACTER PANEL CONFIG (for beautiful headers on each char page) ──────
const CHAR_PANELS = {
  moze: {
    panelClass: 'char-panel-moze', imgClass: 'char-art-moze', img: 'moze.png',
    eyebrow: 'Gunner — Vladof Ursa Corps',
    quote: '"Iron Bear is my therapist."',
    lore: 'Former Vladof Ursa Corps soldier. Survived Darzaran Bay thanks to her 15-ton Iron Bear mech. Now dragging that mech across six galaxies, destroying everything in her path and reading paranormal romance novels in her downtime.',
    as: 'Iron Bear — dual configurable hardpoint mech. Moze pilots it from inside. Equip any two weapons across four hardpoint slots from her skill trees.',
    stats: { offense: 95, defense: 85, mobility: 55, utility: 70 }
  },
  amara: {
    panelClass: 'char-panel-amara', imgClass: 'char-art-amara', img: 'amara.png',
    eyebrow: 'Siren — Partali',
    quote: '"My fists are registered as sacred relics in six star systems."',
    lore: 'Celebrity martial artist and champion of the people. One of only six Sirens in the universe. She channels elemental energy through her fists. She also has four extra glowing arms that she uses to launch enemies into orbit.',
    as: 'Phase abilities — Phasecast, Phaseslam, Phasegrasp, or Phaseflare (DLC). Pick one and augment it twice. Each completely changes her playstyle.',
    stats: { offense: 90, defense: 60, mobility: 80, utility: 95 }
  },
  flak: {
    panelClass: 'char-panel-flak', imgClass: 'char-art-flak', img: 'flak.png',
    eyebrow: 'Beastmaster — Unknown Factory',
    quote: '"The hunt is the harvest."',
    lore: 'A robot of unknown origin who gained sentience and became a wandering Beastmaster. Non-binary. Travels with three loyal pets — Skag, Spiderant, or Jabber. Keeps a meticulous kill count. Born in a factory, raised by the road.',
    as: 'Fade Away (3 guaranteed crits) / Gamma Burst (radiation pet + Atomic Aroma) / Rakk Attack (multi-charge airstrikes). Pick one + one pet.',
    stats: { offense: 100, defense: 65, mobility: 70, utility: 75 }
  },
  zane: {
    panelClass: 'char-panel-zane', imgClass: 'char-art-zane', img: 'zane.png',
    eyebrow: 'Operative — Partali',
    quote: '"I\'ve done a lot of things I\'m not proud of. Way more things I am proud of though."',
    lore: 'Retired black ops assassin, brother of Baron Flynt and Captain Flynt. The only Vault Hunter who equips TWO action skills simultaneously — at the cost of his grenade slot. Irish accent. Impeccable gadgets.',
    as: 'SNTNL Drone + Digi-Clone + Barrier Shield + MNTIS Shoulder Cannon (DLC). Pick any two at once. Loses grenade use.',
    stats: { offense: 85, defense: 75, mobility: 100, utility: 100 }
  }
};

function charPanelHTML(id, char) {
  const p = CHAR_PANELS[id];
  if (!p) return '';
  const statLabels = { offense:'OFFENSE', defense:'DEFENSE', mobility:'MOBILITY', utility:'UTILITY' };
  const bars = Object.entries(p.stats).map(([k,v]) => `
    <div class="char-stat-pill">
      <span class="char-stat-pill-label">${statLabels[k]}</span>
      <div class="char-stat-pill-bar"><div class="char-stat-pill-fill" style="width:${v}%;background:${char.color}"></div></div>
    </div>`).join('');
  const treePills = (char.trees||[]).map((t,i) => `<span style="font-family:var(--font-mono);font-size:10px;border:1px solid ${i===3?'rgba(155,89,182,0.5)':char.color+'44'};color:${i===3?'#9B59B6':char.color};padding:2px 8px">${t.name}</span>`).join('');

  return `<div class="char-panel-full ${p.panelClass}" style="margin-bottom:0;border-bottom:none;box-shadow:none">
    <div class="char-bg"></div>
    ${id==='moze'?'<div class="char-starburst"></div>':''}
    <!-- WALLPAPER: character art blurred + darkened fills the whole panel background -->
    <div style="position:absolute;inset:0;z-index:1;overflow:hidden">
      <img src="${p.img}" alt=""
        style="position:absolute;right:-5%;top:-5%;height:115%;width:auto;min-width:55%;
               object-fit:cover;object-position:center top;
               filter:blur(18px) brightness(0.22) saturate(1.4);
               transform:scale(1.05);pointer-events:none;user-select:none" />
    </div>
    <!-- Left gradient overlay so text stays readable -->
    <div style="position:absolute;inset:0;z-index:2;background:linear-gradient(to right, ${char.color}0a 0%, transparent 100%)"></div>
    <div class="char-art-container" style="z-index:4">
      <img class="char-art-img ${p.imgClass}" src="${p.img}" alt="${char.name}" loading="eager" />
    </div>
    <div class="char-info-panel" style="z-index:5;position:relative">
      <div class="char-panel-eyebrow" style="color:${char.color}">${p.eyebrow}</div>
      <div class="char-panel-name">${char.name}</div>
      <div class="char-panel-title" style="color:${char.color}">${char.title}</div>
      <div class="char-panel-quote" style="border-color:${char.color}">${p.quote}</div>
      <div class="char-panel-lore">${p.lore}</div>
      <div class="char-panel-stats-row">${bars}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:16px">${treePills}</div>
    </div>
    <div class="char-panel-bottom" style="z-index:5">
      <div class="char-bottom-item">
        <span class="char-bottom-label">Action Skill</span>
        <span class="char-bottom-value" style="color:${char.color}">${p.as}</span>
      </div>
    </div>
  </div>`;
}

function buildCharacters() {
  ['moze','amara','flak','zane'].forEach(id => {
    const sec = document.getElementById(`section-${id}`);
    const char = BL3.characters[id];
    sec.innerHTML = charPage(char, id);
  });
}

function charPage(char, id) {
  const builds = char.builds.map((b, bi) => buildCard(b, char.color, id, bi)).join('');
  const skillTrees = skillTreeHTML(char, id);
  const classMods = (BL3.classMods[id] || []).map(cm => `
    <div class="card mb-16">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
        <span class="badge badge-s">${cm.tier}</span>
        <span style="font-family:var(--font-head);font-size:22px;color:var(--orange);letter-spacing:1px">${cm.name}</span>
      </div>
      <div style="font-size:14px;color:var(--white);font-weight:600;margin-bottom:4px">${cm.effect}</div>
      <div style="font-family:var(--font-mono);font-size:11px;color:var(--orange);margin-bottom:4px">STATS: ${cm.stats}</div>
      <div style="font-family:var(--font-mono);font-size:11px;color:var(--gray);margin-bottom:8px">SKILLS: ${cm.skills}</div>
      <div style="font-size:12px;color:var(--text-dim)">${cm.note}</div>
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--orange);margin-top:8px;border-top:1px solid rgba(245,166,35,0.2);padding-top:6px">FARM: ${cm.source}</div>
    </div>
  `).join('');

  return `
    \${charPanelHTML(id, char)}
    <div class="content-body">

      <div class="section-title mb-8">Skill Trees Overview</div>
      <div class="section-desc">Four trees — key skill nodes and capstones. Orange = priority spec points. Gold = capstone.</div>
      ${skillTrees}
      <div class="divider-strong"></div>

      <div class="section-title mb-8">Builds</div>
      <div class="section-desc">Ranked from strongest to situational. All tuned for Mayhem 10 / Level 72.</div>
      <div class="grid-2 mb-32">${builds}</div>
      <div class="divider"></div>

      <div class="section-title mb-8">Class Mods</div>
      <div class="section-desc">Ranked by M10 effectiveness. Stats and where to farm each one.</div>
      ${classMods}
      <div class="divider"></div>

      <div class="section-title mb-8">Best Anointments</div>
      <div class="section-desc">Character-specific anointments ranked for M10 performance.</div>
      <div class="anoint-grid mb-32">
        ${(BL3.anointments[id] || []).concat(BL3.anointments.universal).map(a => `
          <div class="anoint-row">
            <div class="anoint-rating" style="color:${a.rating==='S'?'#FF6B00':a.rating==='A'?'var(--yellow)':'var(--blue)'}">${a.rating}</div>
            <div>
              <div class="anoint-name">${a.name}</div>
              <div class="anoint-note">${a.note}</div>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function buildCard(b, color, charId, bi) {
  const tierColor = b.tier === 'S' ? '#FF6B00' : b.tier === 'A' ? '#FFD700' : '#4A9BFF';
  return `<div class="build-card">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
      <span style="font-family:var(--font-head);font-size:36px;color:${tierColor};text-shadow:2px 2px 0 #000">${b.tier}</span>
      <div>
        <div class="build-name">${b.name}</div>
        <div class="build-type">${b.type}</div>
      </div>
    </div>
    <div class="build-desc">${b.description}</div>
    <div style="font-family:var(--font-head);font-size:14px;color:var(--orange);letter-spacing:1px;margin-bottom:6px">KEY SKILLS</div>
    <div style="margin-bottom:12px">${b.skills.map(s => `<span style="display:inline-block;font-size:11px;background:rgba(245,166,35,0.1);border:1px solid rgba(245,166,35,0.3);padding:2px 6px;margin:2px;color:var(--text-dim)">${s}</span>`).join('')}</div>
    <div class="build-gear-list">
      <div class="build-gear-row"><span class="gear-label">Weapons</span><span class="gear-value">${b.weapons.join(' / ')}</span></div>
      <div class="build-gear-row"><span class="gear-label">Class Mod</span><span class="gear-value">${b.mod}</span></div>
      <div class="build-gear-row"><span class="gear-label">Shield</span><span class="gear-value">${b.shield}</span></div>
      <div class="build-gear-row"><span class="gear-label">Artifact</span><span class="gear-value">${b.artifact}</span></div>
      <div class="build-gear-row"><span class="gear-label">Grenade</span><span class="gear-value">${b.grenade}</span></div>
    </div>
    <div class="anoint-box">${b.anoint}</div>
  </div>`;
}

function skillTreeHTML(char, id) {
  const treeColors = { fire: 'fire', blue: 'blue', green: 'green', purple: 'purple', orange: 'orange', teal: 'teal' };
  const colorMap = ['fire', 'blue', 'green', 'purple'];

  const treeData = {
    moze: [
      { tree: char.trees[0], nodes: [
        { name: 'Cloud of Lead', desc: 'Free incendiary shots every 4th trigger', key: true },
        { name: 'Stoke the Embers', desc: '+15% fire damage', key: false },
        { name: 'Redistribution', desc: 'Crits regen health and ammo', key: true },
        { name: 'Scorching RPMs', desc: '+11% crit + fire rate in IB', key: true },
        { name: 'Fire in the Skag Den', desc: 'MAYHEM SCALED 31x — 93% fire per point', key: true },
        { name: 'Short Fuse', desc: 'MAYHEM SCALED 7x — 525% splash chance', key: true },
        { name: 'Forge', desc: 'Constant ammo regen — never reload heavy weps', key: false, capstone: true }
      ]},
      { tree: char.trees[1], nodes: [
        { name: 'Thin Red Line', desc: 'Convert 60% HP to shield', key: false },
        { name: 'Vladof Ingenuity', desc: '+Shock resist +Shield Cap', key: false },
        { name: 'Desperate Measures', desc: 'Up to +50% gun dmg at low HP', key: true },
        { name: 'Selfless Vengeance', desc: 'Reload boosts teammate damage', key: false },
        { name: 'Drowning in Brass', desc: '+Gun dmg on kill skill', key: false },
        { name: 'Phalanx Doctrine', desc: 'Stacking gun damage on kill', key: true },
        { name: 'Tenacious Defense', desc: '+40% gun dmg on shield break', key: false, capstone: true }
      ]},
      { tree: char.trees[2], nodes: [
        { name: 'Means of Destruction', desc: 'Splash hits regen grenades', key: true },
        { name: 'Stainless Steel Bear', desc: '+5% IB damage/duration per point', key: true },
        { name: 'Vampyr', desc: 'Grenade hits heal Moze', key: true },
        { name: 'Torgue Cross Promotion', desc: 'Splash weapons get extra projectiles', key: false },
        { name: 'Big Surplus', desc: 'MAYHEM SCALED 31x — damage in IB', key: true },
        { name: 'Deadlines', desc: 'Kills while in IB extend duration', key: false },
        { name: 'Auto Bear', desc: 'IB stays as stationary turret on exit', key: true, capstone: true }
      ]},
    ],
    amara: [
      { tree: char.trees[0], nodes: [
        { name: 'Samsara', desc: 'AS kills heal + boost weapon dmg', key: true },
        { name: 'Jab Cross', desc: '+Melee damage when sprinting', key: true },
        { name: 'Clarity', desc: 'Constant HP regen', key: false },
        { name: 'Mindfulness', desc: 'Taking dmg boosts move speed', key: true },
        { name: 'Find Your Center', desc: '+200% melee after action skill', key: true },
        { name: 'Revelation', desc: 'Nova on status effect proc', key: true },
        { name: 'Do Unto Others', desc: 'Melee dmg to all Grasped enemies', key: false, capstone: true }
      ]},
      { tree: char.trees[1], nodes: [
        { name: 'Tempest', desc: '+40% elemental, +20% shock damage', key: true },
        { name: 'Infusion', desc: 'Convert gun dmg to attuned element', key: false },
        { name: 'Sustainment', desc: 'Elemental dmg heals Amara (18%)', key: true },
        { name: 'Conflux', desc: 'Random element procs on status hits', key: false },
        { name: 'Wildfire', desc: 'Status effects spread to nearby enemies', key: false },
        { name: 'Catharsis', desc: 'Shield break = elemental nova', key: false },
        { name: 'Ties That Bind', desc: 'Links nearby enemies — chain damage', key: true, capstone: true }
      ]},
      { tree: char.trees[2], nodes: [
        { name: 'Violent Tapestry', desc: 'Elemental kills stack Rush', key: true },
        { name: 'Restless', desc: 'Faster AS cooldown', key: false },
        { name: 'Do Harm', desc: 'Rush stacks = gun damage bonus', key: true },
        { name: 'Laid Bare', desc: '+20% damage to AS-hit enemies', key: true },
        { name: 'Awakening', desc: 'Amplifies all Rush-based bonuses', key: true },
        { name: 'Transcend', desc: 'AS grants crit and accuracy', key: false },
        { name: 'Unweave the Rainbow', desc: 'Elemental nova on AS end — Mayhem-scaled', key: false, capstone: true }
      ]},
    ],
    flak: [
      { tree: char.trees[0], nodes: [
        { name: 'Overclocked', desc: '+4% fire rate per point (permanent)', key: true },
        { name: 'Grim Harvest', desc: 'On kill: +crit damage', key: true },
        { name: 'Head Count', desc: 'Crits reduce pet cooldown', key: true },
        { name: 'The Most Dangerous Game', desc: 'Kills boost pet damage', key: false },
        { name: 'Leave No Trace', desc: 'Crits refund bullet to mag', key: true },
        { name: 'Persistence Hunter', desc: 'Pet bonuses apply to FL4K', key: true },
        { name: 'Megavore', desc: 'CAPSTONE: All shots can crit', key: true, capstone: true }
      ]},
      { tree: char.trees[1], nodes: [
        { name: 'Unblinking Eye', desc: 'Fade Away boosts crit damage', key: false },
        { name: 'Ambush Predator', desc: 'Bonus dmg on first hit after Fade Away', key: false },
        { name: 'Furious Attack', desc: 'Kills boost pet attack speed', key: false },
        { name: 'Eager to Impress', desc: 'Kills reduce pet cooldown', key: false },
        { name: 'Hidden Machine', desc: 'Bonus dmg when not targeted', key: false },
        { name: 'Frenzy', desc: 'Pet damage stacks → player bonus', key: true },
        { name: 'Guerrillas in the Mist', desc: 'Fade Away: fire without ending', key: true, capstone: true }
      ]},
      { tree: char.trees[2], nodes: [
        { name: 'Barbarous Heart', desc: 'Pet damage during Gamma Burst', key: true },
        { name: 'Pack Tactics', desc: '+Gun dmg while pet is alive', key: false },
        { name: 'Ferocity', desc: '+5% pet damage per point', key: false },
        { name: 'Sic Em', desc: 'Pet attacks reduce cooldown', key: false },
        { name: 'Atomic Aroma', desc: 'Pet radiates radiation aura — Mayhem-scaled', key: true },
        { name: 'Psycho Head on a Stick', desc: 'Kill boosts pet move/attack speed', key: false },
        { name: 'Dominance', desc: 'Shoot enemy to control their mind', key: false, capstone: true }
      ]},
    ],
    zane: [
      { tree: char.trees[0], nodes: [
        { name: 'Violent Speed', desc: '+5% move speed per kill (stacks)', key: true },
        { name: 'Praemunitis', desc: '+12% magazine size per point', key: true },
        { name: 'Donnybrook', desc: 'Kills grant all kill skills at once', key: true },
        { name: 'Playing Dirty', desc: 'Post-kill: next 5 shots have extra projectile', key: true },
        { name: 'Violent Momentum', desc: 'Move speed directly = gun damage', key: true },
        { name: 'Seein\' Red', desc: 'Activating AS: instant max kill skills', key: true },
        { name: 'Death Follows Close', desc: 'Extends and boosts all kill skills', key: false, capstone: true }
      ]},
      { tree: char.trees[1], nodes: [
        { name: 'Synchronicity', desc: '+20% gun dmg per active AS', key: true },
        { name: 'Borrowed Time', desc: 'AS duration extends on kill', key: false },
        { name: 'Fractal Frags', desc: 'Clone throws grenades on spawn', key: false },
        { name: 'Duct Tape Mod', desc: 'First shot fires a grenade', key: false },
        { name: 'Which One is Real?', desc: 'Enemies attack clone more', key: false },
        { name: 'Old-U', desc: 'Down = swap with clone instead of FFYL', key: true },
        { name: 'Like a Ghost', desc: 'Clone absorbs bullets from enemies', key: false, capstone: true }
      ]},
      { tree: char.trees[2], nodes: [
        { name: 'Adrenaline', desc: 'Faster shield recharge delay', key: false },
        { name: 'Hearty Stock', desc: '+Max shield capacity', key: false },
        { name: 'Ready for Action', desc: '+Shield recharge rate', key: false },
        { name: 'Futility Belt', desc: 'Non-matching elements deal shock', key: false },
        { name: 'Distributed Denial', desc: 'Barrier effect shared to all shields', key: true },
        { name: 'Confident Competence', desc: '+Gun dmg based on shield %', key: false },
        { name: 'Barrier', desc: 'Deployable energy wall. Bullets amp inside.', key: false, capstone: true }
      ]},
    ]
  };

  const trees = treeData[id] || [];
  const colorClasses = ['fire','blue','green','purple'];

  return `<div class="skill-tree-wrapper mb-32">
    <div class="skill-tree">
      ${trees.map((t, ti) => `
        <div class="skill-tree-branch">
          <div class="skill-branch-header ${colorClasses[ti]}">${t.tree.name}</div>
          <div class="skill-nodes">
            ${t.nodes.map((n, ni) => `
              ${ni > 0 ? `<div class="skill-connector ${n.key ? 'active' : ''}"></div>` : ''}
              <div class="skill-node ${n.key ? 'key' : ''} ${n.capstone ? 'capstone' : ''}">
                <div class="skill-node-name">${n.name}</div>
                <div class="skill-node-desc">${n.desc}</div>
              </div>
            `).join('')}
          </div>
          <div style="font-size:11px;color:var(--gray);padding:8px;text-align:center;font-style:italic">${t.tree.focus}</div>
        </div>
      `).join('')}
    </div>
    <div style="display:flex;gap:16px;padding:8px 0;font-size:11px;font-family:var(--font-mono);color:var(--gray)">
      <span><span style="display:inline-block;width:12px;height:12px;border:2px solid var(--orange);background:rgba(245,166,35,0.1);vertical-align:middle;margin-right:4px"></span>Priority Skill</span>
      <span><span style="display:inline-block;width:12px;height:12px;border:2px solid var(--yellow);background:rgba(255,215,0,0.1);vertical-align:middle;margin-right:4px"></span>Capstone</span>
    </div>
  </div>`;
}

// ── PLANETS SECTION ────────────────────────────────────────
function buildPlanets() {
  const sec = document.getElementById('section-planets');
  let html = `
    <div class="page-header">
      <div class="page-header-eyebrow">World Intelligence</div>
      <h1>Planet Guide</h1>
      <p>Enemy factions, health types, elemental priorities, and boss intel for every planet in Borderlands 3.</p>
    </div>
    <div class="content-body">
      <div class="planet-btns" id="planet-btns">
        ${BL3.planets.map(p => `<button class="planet-btn" onclick="showPlanet('${p.id}')" id="pbtn-${p.id}">${p.name}</button>`).join('')}
      </div>
      <div id="planet-content"></div>
    </div>
  `;
  sec.innerHTML = html;
  showPlanet('pandora');
}

window.showPlanet = function(id) {
  document.querySelectorAll('.planet-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`pbtn-${id}`);
  if (btn) btn.classList.add('active');
  const planet = BL3.planets.find(p => p.id === id);
  if (!planet) return;

  const content = document.getElementById('planet-content');
  content.innerHTML = `
    <div class="card mb-24" style="border-color:${planet.color}">
      <div style="display:flex;align-items:flex-start;gap:24px">
        <div style="width:6px;min-height:80px;background:${planet.color};flex-shrink:0"></div>
        <div>
          <div style="font-family:var(--font-head);font-size:48px;letter-spacing:3px;color:${planet.color};text-shadow:3px 3px 0 #000;line-height:1">${planet.name}</div>
          <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:3px;color:var(--gray);text-transform:uppercase;margin-bottom:8px">${planet.subtitle}</div>
          <div style="font-size:14px;color:var(--text-dim);line-height:1.6;margin-bottom:12px">${planet.description}</div>
          <div style="font-family:var(--font-mono);font-size:11px;color:var(--gray)">ZONES: ${planet.zones.join(' — ')}</div>
        </div>
      </div>
    </div>

    <div class="section-title mb-8">Enemy Factions</div>
    <div class="section-desc">Health bar composition and elemental priorities per faction.</div>
    <div class="card mb-24">
      ${planet.factions.map(f => `
        <div class="enemy-row">
          <div class="enemy-name">${f.name}</div>
          <div class="enemy-hp-bars">
            ${f.hp.map(h => `<span class="badge badge-${h}">${h}</span>`).join('')}
          </div>
          <div class="enemy-note">${f.note}</div>
        </div>
      `).join('')}
    </div>

    <div class="section-title mb-8">Boss Intel</div>
    <div class="grid-2 mb-24">
      ${planet.bosses.map(b => `
        <div class="card">
          <div style="font-family:var(--font-head);font-size:22px;color:var(--orange);letter-spacing:2px;margin-bottom:2px">${b.name}</div>
          <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-bottom:8px">${b.location}</div>
          <div style="margin-bottom:8px">${b.hp.map(h => `<span class="badge badge-${h}">${h}</span>`).join('')}</div>
          <div style="font-size:12px;color:var(--text-dim);margin-bottom:8px">${b.tip}</div>
          <div style="font-family:var(--font-mono);font-size:11px;color:var(--orange);border-top:1px solid rgba(245,166,35,0.2);padding-top:6px">DROPS: ${b.drops.join(', ')}</div>
        </div>
      `).join('')}
    </div>
  `;
};

// ── PLANET LOADOUTS SECTION ────────────────────────────────
function buildLoadouts() {
  const sec = document.getElementById('section-loadouts');
  const chars = ['moze','amara','flak','zane'];
  const charNames = { moze: 'Moze', amara: 'Amara', flak: 'FL4K', zane: 'Zane' };
  const charColors = { moze: '#E8272A', amara: '#9B59B6', flak: '#52C41A', zane: '#4A9BFF' };

  const planetOrder = ['pandora','promethea','athenas','eden6','nekrotafeyo','dlc1','dlc2','dlc4'];
  const planetNames = { pandora:'Pandora', promethea:'Promethea', athenas:'Athenas', eden6:'Eden-6', nekrotafeyo:'Nekrotafeyo', dlc1:'DLC1 Jackpot', dlc2:'DLC2 Guns/Love', dlc4:'DLC4 Krieg' };

  let html = `
    <div class="page-header">
      <div class="page-header-eyebrow">Zone Intelligence</div>
      <h1>Planet Loadouts</h1>
      <p>Exact 4-weapon loadout for every character on every planet. Priority order listed by importance.</p>
    </div>
    <div class="content-body">
  `;

  chars.forEach(cid => {
    const char = BL3.characters[cid];
    const color = charColors[cid];
    html += `
      <div style="margin-bottom:40px">
        <div style="font-family:var(--font-head);font-size:36px;letter-spacing:3px;color:${color};text-shadow:3px 3px 0 #000;margin-bottom:16px">${charNames[cid]}</div>
        <div class="loadout-matrix">
          <div class="lm-header">Planet</div>
          <div class="lm-header">Slot 1</div>
          <div class="lm-header">Slot 2</div>
          <div class="lm-header">Slot 3</div>
          <div class="lm-header">Slot 4</div>
          <div class="lm-header">Priority Note</div>
          ${planetOrder.map(pid => {
            const l = char.planetLoadouts[pid];
            if (!l) return `<div class="lm-planet">${planetNames[pid]}</div><div class="lm-cell" colspan="5" style="color:var(--gray)">—</div>`;
            const colorSlot = (s) => {
              if (!s) return '—';
              if (s.toLowerCase().includes('incendiary') || s.toLowerCase().includes('fire')) return `<span class="slot-fire">${s}</span>`;
              if (s.toLowerCase().includes('shock')) return `<span class="slot-shock">${s}</span>`;
              if (s.toLowerCase().includes('corrosive') || s.toLowerCase().includes('corr')) return `<span class="slot-corr">${s}</span>`;
              if (s.toLowerCase().includes('cryo')) return `<span class="slot-cryo">${s}</span>`;
              if (s.toLowerCase().includes('radiation') || s.toLowerCase().includes('rad')) return `<span class="slot-rad">${s}</span>`;
              return `<span class="slot-kin">${s}</span>`;
            };
            return `
              <div class="lm-planet lm-cell" style="border-left:3px solid ${color}">${planetNames[pid]}</div>
              <div class="lm-cell">${colorSlot(l.slot1)}</div>
              <div class="lm-cell">${colorSlot(l.slot2)}</div>
              <div class="lm-cell">${colorSlot(l.slot3)}</div>
              <div class="lm-cell">${colorSlot(l.slot4)}</div>
              <div class="lm-cell lm-priority">${l.priority}</div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  html += '</div>';
  sec.innerHTML = html;
}

// ── WEAPONS SECTION ────────────────────────────────────────
function buildWeapons() {
  const sec = document.getElementById('section-weapons');
  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">The Arsenal</div>
      <h1>Weapons Vault</h1>
      <p>All BiS legendaries, Mayhem-exclusive drops, artifacts, shields, grenades, and weapon scaling tables.</p>
    </div>
    <div class="content-body">
      <div class="tabs" id="weapon-tabs">
        <button class="tab-btn active" onclick="showWepTab('mayhem')">Mayhem Exclusives</button>
        <button class="tab-btn" onclick="showWepTab('bis')">BiS Legendaries</button>
        <button class="tab-btn" onclick="showWepTab('artifacts')">Artifacts</button>
        <button class="tab-btn" onclick="showWepTab('shields')">Shields</button>
        <button class="tab-btn" onclick="showWepTab('grenades')">Grenades</button>
        <button class="tab-btn" onclick="showWepTab('scaling')">M10 Scaling</button>
      </div>

      <div id="wep-tab-mayhem">
        <div class="section-title mb-8">Mayhem 6+ Exclusive Weapons</div>
        <div class="section-desc">These weapons ONLY drop at Mayhem 6 or higher. At M10 they are the top tier of the meta.</div>
        <div class="grid-2">
          ${BL3.mayhemWeapons.map(w => weaponCardHTML(w)).join('')}
        </div>
      </div>

      <div id="wep-tab-bis" style="display:none">
        <div class="section-title mb-8">BiS Legendary Weapons</div>
        <div class="section-desc">Non-Mayhem-exclusive legendaries that remain top tier at M10.</div>
        <div class="grid-2">
          ${BL3.biSWeapons.map(w => weaponCardHTML(w)).join('')}
        </div>
      </div>

      <div id="wep-tab-artifacts" style="display:none">
        <div class="section-title mb-8">Best in Slot Artifacts</div>
        <div class="section-desc">Ranked by M10 utility across all characters.</div>
        ${BL3.artifacts.map(a => `
          <div class="card mb-12">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
              <span class="badge badge-${a.tier.toLowerCase()}">${a.tier}</span>
              <span style="font-family:var(--font-head);font-size:24px;letter-spacing:1px;color:var(--orange)">${a.name}</span>
            </div>
            <div style="font-size:14px;color:var(--white);font-weight:600;margin-bottom:4px">${a.effect}</div>
            <div style="font-family:var(--font-mono);font-size:11px;color:var(--orange);margin-bottom:4px">STATS: ${a.stats}</div>
            <div style="font-size:12px;color:var(--text-dim);margin-bottom:6px">BEST FOR: ${a.best_for}</div>
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">SOURCE: ${a.source}</div>
          </div>
        `).join('')}
      </div>

      <div id="wep-tab-shields" style="display:none">
        <div class="section-title mb-8">Best Shields</div>
        <div class="grid-2">
          ${BL3.shields.map(s => `
            <div class="card">
              <div style="font-family:var(--font-head);font-size:22px;letter-spacing:1px;color:var(--orange);margin-bottom:4px">${s.name}</div>
              <div style="font-size:14px;color:var(--white);font-weight:600;margin-bottom:6px">${s.effect}</div>
              <div style="font-size:12px;color:var(--text-dim);margin-bottom:6px">BEST FOR: ${s.best_for}</div>
              <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">SOURCE: ${s.source}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="wep-tab-grenades" style="display:none">
        <div class="section-title mb-8">Best Grenades</div>
        <div class="grid-2">
          ${BL3.grenades.map(g => `
            <div class="card">
              <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
                <span class="badge badge-${g.tier.toLowerCase()}">${g.tier}</span>
                <span style="font-family:var(--font-head);font-size:22px;letter-spacing:1px;color:var(--orange)">${g.name}</span>
              </div>
              <div style="font-size:13px;color:var(--white);font-weight:600;margin-bottom:4px">${g.effect}</div>
              <div style="font-family:var(--font-mono);font-size:11px;color:var(--blue);margin-bottom:4px">ELEMENT: ${g.element}</div>
              <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">SOURCE: ${g.source}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="wep-tab-scaling" style="display:none">
        <div class="section-title mb-8">Mayhem Weapon Damage Scaling</div>
        <div class="section-desc">Weapons looted at higher Mayhem levels receive multiplicative base damage bonuses. Formula: 1.09^n where n = Mayhem Level.</div>
        <div class="card mb-24">
          <table class="bl3-table">
            <thead><tr>
              <th>Mayhem Level</th><th>Multiplier</th><th>Bonus Damage</th><th>Notes</th>
            </tr></thead>
            <tbody>
              ${BL3.weaponModifiers.mayhemScaling.map(m => `
                <tr class="${m.level >= 10 ? 'm-scale-10' : m.level >= 6 ? 'm-scale-6' : m.level >= 5 ? 'm-scale-5' : 'm-scale-1'}">
                  <td><span style="font-family:var(--font-head);font-size:18px;color:var(--orange)">M${m.level}</span></td>
                  <td><span style="font-family:var(--font-mono)">${m.multiplier}</span></td>
                  <td><span style="color:var(--green);font-weight:700">${m.bonus}</span></td>
                  <td style="font-size:12px;color:var(--gray)">${m.level >= 6 ? 'Exclusive legendary pool unlocks' : m.level === 10 ? 'Maximum — no M11 upside for weapons' : '—'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div class="section-title mb-8">M6+ Exclusive Weapons</div>
        <div class="section-desc">These weapons CANNOT drop below Mayhem 6. They are permanently locked behind the difficulty wall.</div>
        <div class="card">
          <div style="font-family:var(--font-head);font-size:18px;color:var(--red);margin-bottom:8px">REQUIRES MAYHEM 6+</div>
          ${BL3.weaponModifiers.exclusiveDropTiers.m6plus.map(w => `
            <span style="display:inline-block;font-family:var(--font-mono);font-size:12px;background:rgba(232,39,42,0.1);border:1px solid var(--red);padding:3px 8px;margin:3px;color:var(--text)">${w}</span>
          `).join('')}
          <div style="font-family:var(--font-head);font-size:18px;color:var(--green);margin:16px 0 8px">ALL MAYHEM LEVELS</div>
          ${BL3.weaponModifiers.exclusiveDropTiers.allMayhem.map(w => `
            <span style="display:inline-block;font-family:var(--font-mono);font-size:12px;background:rgba(82,196,26,0.1);border:1px solid var(--green);padding:3px 8px;margin:3px;color:var(--text)">${w}</span>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function weaponCardHTML(w) {
  const tierColor = w.tier === 'S' ? '#FF6B00' : w.tier === 'A' ? '#FFD700' : '#4A9BFF';
  return `<div class="weapon-card">
    <div class="tier-bar">
      <span class="tier-${w.tier.toLowerCase()}">${w.tier}</span>
      <span style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">${w.manufacturer} — ${w.type}${w.minMayhem ? ' — M'+w.minMayhem+'+' : ''}</span>
    </div>
    <div class="weapon-name">${w.name}</div>
    <div class="weapon-effect">${w.effect}</div>
    <div class="weapon-source">FARM: ${w.source}</div>
  </div>`;
}

window.showWepTab = function(id) {
  ['mayhem','bis','artifacts','shields','grenades','scaling'].forEach(t => {
    const el = document.getElementById(`wep-tab-${t}`);
    if (el) el.style.display = 'none';
  });
  document.querySelectorAll('#weapon-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(`wep-tab-${id}`);
  if (target) target.style.display = 'block';
  event.target.classList.add('active');
};

// ── MAYHEM SECTION ─────────────────────────────────────────
function buildMayhem() {
  const sec = document.getElementById('section-mayhem');

  const modTiers = [
    { label: 'Easy (1 per run — M1+)', color: '#52C41A', data: BL3.modifiers.easy },
    { label: 'Medium (M2+)', color: '#F5A623', data: BL3.modifiers.medium },
    { label: 'Hard (M5+)', color: '#E8272A', data: BL3.modifiers.hard },
    { label: 'Very Hard (M8+)', color: '#9B59B6', data: BL3.modifiers.veryHard }
  ];

  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">Mode Settings</div>
      <h1>Mayhem Modifiers</h1>
      <p>25+ modifiers across 4 difficulty tiers. Know which to keep, which to reroll, and how to exploit them.</p>
    </div>
    <div class="content-body">
      <div class="card mb-32">
        <div style="font-family:var(--font-head);font-size:24px;color:var(--yellow);margin-bottom:8px">MAYHEM 10 MODIFIER FORMULA</div>
        <div style="font-size:13px;color:var(--text-dim);line-height:1.6;margin-bottom:12px">At Mayhem 10 you always get exactly: 1 Easy + 1 Medium + 1 Hard + 1 Very Hard modifier. You can reroll the entire set via ECHO Device for free. Rerolling changes all 4 simultaneously. Keep rerolling until you hit a favorable combination.</div>
        <div style="font-family:var(--font-head);font-size:18px;color:var(--orange);margin-bottom:6px">IDEAL M10 COMBINATION:</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <span style="background:rgba(82,196,26,0.2);border:2px solid #52C41A;padding:4px 12px;font-family:var(--font-head);font-size:14px;color:#52C41A">Lootsplosion or Galaxy Brain</span>
          <span style="background:rgba(245,166,35,0.2);border:2px solid #F5A623;padding:4px 12px;font-family:var(--font-head);font-size:14px;color:#F5A623">Floor is Lava</span>
          <span style="background:rgba(232,39,42,0.2);border:2px solid #E8272A;padding:4px 12px;font-family:var(--font-head);font-size:14px;color:#E8272A">Any (avoid Drone Ranger)</span>
          <span style="background:rgba(155,89,182,0.2);border:2px solid #9B59B6;padding:4px 12px;font-family:var(--font-head);font-size:14px;color:#9B59B6">Holy Crit (FL4K) or Deadlines</span>
        </div>
        <div style="font-family:var(--font-mono);font-size:11px;color:var(--red);margin-top:12px">ALWAYS REROLL: Groundbreaker (removes ground slam crits — kills Amara Phaseslam builds entirely)</div>
      </div>
      ${modTiers.map(t => `
        <div class="section-title mb-8" style="color:${t.color}">${t.label}</div>
        <div class="modifier-grid mb-32">
          ${t.data.map(m => `
            <div class="modifier-card ${m.tier.toLowerCase()}">
              <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:${t.color};margin-bottom:4px">${m.tier}</div>
              <div class="modifier-name">${m.name}</div>
              <div class="modifier-effect">${m.effect}</div>
              <div class="modifier-tip">${m.tip}</div>
            </div>
          `).join('')}
        </div>
      `).join('')}

      <div class="section-title mb-8">Mayhem Scaled Skills at M10</div>
      <div class="section-desc">These skills receive massive hidden multipliers at M10 — their tooltips are completely misleading.</div>
      <div class="card">
        <table class="bl3-table">
          <thead><tr><th>Character</th><th>Skill</th><th>Tooltip Says</th><th>M10 Actual</th><th>Scale Factor</th></tr></thead>
          <tbody>
            <tr><td style="color:var(--red)">Moze</td><td>Short Fuse</td><td>20% chance for 75% splash</td><td style="color:var(--green)">20% chance for ~525% splash</td><td>7x</td></tr>
            <tr><td style="color:var(--red)">Moze</td><td>Fire in Skag Den</td><td>+15% incendiary per point</td><td style="color:var(--green)">+93% fire per point (5pt = +465%)</td><td>31x</td></tr>
            <tr><td style="color:var(--red)">Moze</td><td>Big Surplus</td><td>Bonus damage in IB</td><td style="color:var(--green)">Massive IB damage multiplier</td><td>31x</td></tr>
            <tr><td style="color:var(--red)">Moze</td><td>Baby Nukes</td><td>Small explosion on IB hits</td><td style="color:var(--green)">Screen-filling nukes</td><td>31x</td></tr>
            <tr><td style="color:var(--purple)">Amara</td><td>Unweave the Rainbow</td><td>Elemental nova on AS end</td><td style="color:var(--green)">Room-clearing nova at M10</td><td>Scaled</td></tr>
            <tr><td style="color:var(--purple)">Amara</td><td>Revelation</td><td>Nova on status effect</td><td style="color:var(--green)">Significant AoE nova damage</td><td>Scaled</td></tr>
            <tr><td style="color:var(--green)">FL4K</td><td>All Pets</td><td>Listed pet damage</td><td style="color:var(--green)">Dramatically higher with Red Fang</td><td>Scaled</td></tr>
            <tr><td style="color:var(--blue)">Zane</td><td>Best Served Cold</td><td>Cryo nova on kill</td><td style="color:var(--green)">Significant cryo clear on kill</td><td>Scaled</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ── BARS ANIMATION ─────────────────────────────────────────
function animateBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const fill = e.target.querySelector('.dps-bar-fill');
        if (fill) fill.style.width = fill.dataset.width;
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.dps-bar').forEach(b => {
    const fill = b.querySelector('.dps-bar-fill');
    if (fill) {
      const w = fill.dataset.width;
      fill.style.width = '0';
      observer.observe(b);
    }
  });
}
