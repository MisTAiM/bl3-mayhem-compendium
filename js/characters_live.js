/* ============================================================
   CHARACTERS GALLERY + LIVE STATS  — additions to app.js
   ============================================================ */

// ── CHARACTER GALLERY ──────────────────────────────────────
function buildCharactersSection() {
  const sec = document.getElementById('section-characters');
  if (!sec || sec.innerHTML.trim()) return;

  const chars = [
    {
      id: 'moze', name: 'Moze', title: 'The Gunner',
      color: '#E8272A', panelClass: 'char-panel-moze', imgClass: 'char-art-moze',
      eyebrow: 'Gunner — Vladof Ursa Corps',
      quote: '"Iron Bear is my therapist."',
      lore: 'Former Vladof soldier, Gunner First Class. Survived Darzaran Bay thanks to a 15-ton mech. Now dragging that mech across six galaxies while reading paranormal romance novels in her downtime.',
      as: 'Iron Bear — dual configurable hardpoint mech. Bears all your sins while you sit inside it.',
      sigBuild: 'Mozerker Forever — Bloodletter + Deathless. Permanent 1HP = Desperate Measures maxed at all times.',
      sigWeapon: 'Kaoson · Backburner · Light Show',
      trees: ['Bottomless Mags', 'Demolition Woman', 'Shield of Retribution', 'Bear Mother'],
      stats: { offense: 95, defense: 85, mobility: 55, utility: 70 }
    },
    {
      id: 'amara', name: 'Amara', title: 'The Siren',
      color: '#9B59B6', panelClass: 'char-panel-amara', imgClass: 'char-art-amara',
      eyebrow: 'Siren — Partali',
      quote: '"My fists are registered as sacred relics in six star systems."',
      lore: 'Celebrity martial artist and champion of the people. One of only six Sirens in the universe. She channels elemental energy through fists that can flatten a truck. She also has four extra glowing arms.',
      as: 'Phase abilities — Phaseslam, Phasecast, Phasegrasp, Phaseflare. Pick one, augment it, devastate everything.',
      sigBuild: 'Face-puncher Melee — Unleash the Dragon + Find Your Center. Permanent fire DOT on everything.',
      sigWeapon: 'Face-puncher · Plasma Coil · Hellshock',
      trees: ['Brawl', 'Fist of the Elements', 'Mystical Assault', 'Enlightened Force'],
      stats: { offense: 90, defense: 60, mobility: 80, utility: 95 }
    },
    {
      id: 'flak', name: 'FL4K', title: 'The Beastmaster',
      color: '#52C41A', panelClass: 'char-panel-flak', imgClass: 'char-art-flak',
      eyebrow: 'Beastmaster — Unknown Factory',
      quote: '"The hunt is the harvest."',
      lore: 'A robot who gained sentience and became a wandering Beastmaster. Non-binary. Travels with three loyal pets. Keeps a meticulous kill count etched somewhere internal. Born in a factory, raised by the road.',
      as: 'Fade Away (3 guaranteed crits) · Gamma Burst (radiation pet) · Rakk Attack (multi-charge spam). Pick one + one pet.',
      sigBuild: 'GITM Boss Killer — Guerrillas in the Mist + St4ckbot. 5-pellet Skullmasher × 3 crit shots = instant boss delete.',
      sigWeapon: 'Skullmasher · Monarch · Reflux',
      trees: ['Hunter', 'Stalker', 'Master', 'Trapper'],
      stats: { offense: 100, defense: 65, mobility: 70, utility: 75 }
    },
    {
      id: 'zane', name: 'Zane', title: 'The Operative',
      color: '#4A9BFF', panelClass: 'char-panel-zane', imgClass: 'char-art-zane',
      eyebrow: 'Operative — Partali',
      quote: "I've done a lot of things I'm not proud of. Way more things I am proud of though.",
      lore: 'Retired black ops assassin. Brother of Baron Flynt. Speaks with an Irish accent. The only Vault Hunter who equips TWO action skills simultaneously — at the cost of his grenade slot. Impeccable gadgets.',
      as: 'SNTNL Drone + Digi-Clone + Barrier + MNTIS Cannon. Pick any TWO. Loses grenade in exchange.',
      sigBuild: "Seein Dead God — ~4% chance per hit activates ALL kill skills. Playing Dirty doubles projectiles. Speed = damage.",
      sigWeapon: 'Plasma Coil · Redistributor · Light Show',
      trees: ['Hitman', 'Doubled Agent', 'Under Cover', 'The Professional'],
      stats: { offense: 85, defense: 75, mobility: 100, utility: 100 }
    }
  ];

  const statLabels = { offense: 'OFFENSE', defense: 'DEFENSE', mobility: 'MOBILITY', utility: 'UTILITY' };

  const panels = chars.map(c => {
    const statBars = Object.entries(c.stats).map(([k,v]) => `
      <div class="char-stat-pill">
        <span class="char-stat-pill-label">${statLabels[k]}</span>
        <div class="char-stat-pill-bar"><div class="char-stat-pill-fill" style="width:${v}%;background:${c.color}"></div></div>
      </div>
    `).join('');

    const treePills = c.trees.map((t,i) => `<span style="font-family:var(--font-mono);font-size:10px;border:1px solid ${c.color}44;color:${c.color};padding:2px 8px;${i===3?'border-color:var(--purple);color:var(--purple)':''}">${t}${i===3?' DLC':''}</span>`).join('');

    return `
      <div class="char-panel-full ${c.panelClass}">
        <!-- Creative background layer -->
        <div class="char-bg"></div>
        ${c.id === 'moze' ? '<div class="char-starburst"></div>' : ''}

        <!-- Character art — right side -->
        <div class="char-art-container">
          <img class="char-art-img ${c.imgClass}" src="${c.id}.png" alt="${c.name}" loading="lazy" />
        </div>

        <!-- Info panel — left side -->
        <div class="char-info-panel">
          <div class="char-panel-eyebrow" style="color:${c.color}">${c.eyebrow}</div>
          <div class="char-panel-name">${c.name}</div>
          <div class="char-panel-title" style="color:${c.color}">${c.title}</div>
          <div class="char-panel-quote" style="border-color:${c.color}">${c.quote}</div>
          <div class="char-panel-lore">${c.lore}</div>

          <div class="char-panel-stats-row">${statBars}</div>

          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px">${treePills}</div>

          <div class="char-panel-action-btns">
            <button class="char-panel-btn primary" style="border-color:${c.color};color:${c.color}" onclick="showSection('${c.id}')">Full Builds + Skills &rarr;</button>
            <button class="char-panel-btn secondary" onclick="showSection('skilltrees')">Skill Trees &rarr;</button>
          </div>
        </div>

        <!-- Bottom info strip -->
        <div class="char-panel-bottom">
          <div class="char-bottom-item">
            <span class="char-bottom-label">Action Skill</span>
            <span class="char-bottom-value" style="color:${c.color}">${c.as}</span>
          </div>
          <div class="char-bottom-item" style="margin-left:auto">
            <span class="char-bottom-label">Sig Weapon</span>
            <span class="char-bottom-value" style="font-family:var(--font-mono);font-size:11px;color:var(--orange)">${c.sigWeapon}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">The Vault Hunters</div>
      <h1>Characters</h1>
      <p>All four playable Vault Hunters — lore, stat profiles, signature builds, and action skills. Click any panel to go to full build guides.</p>
    </div>
    <div class="content-body">${panels}</div>
  `;
}


// ── LIVE STATS SECTION ─────────────────────────────────────
// SteamSpy data embedded at build time (updates daily, no CORS)
// Steam current players: live via Steam API (has CORS)
// Speedrun.com: live via their API (has CORS, correct game ID = 369penl1)

const STEAMSPY_DATA = {
  owners: "2,000,000 — 5,000,000",
  positive: 125248,
  negative: 23817,
  avgHoursForever: 2652,
  tags: ["RPG","Looter Shooter","Multiplayer","FPS","Online Co-Op","Action","Loot","Open World"],
  lastUpdated: "April 2026"
};

function buildLiveSection() {
  const sec = document.getElementById('section-live');
  if (!sec || sec.innerHTML.trim()) return;

  const pos = STEAMSPY_DATA.positive;
  const neg = STEAMSPY_DATA.negative;
  const total = pos + neg;
  const pct = Math.round((pos / total) * 100);
  const avgH = Math.floor(STEAMSPY_DATA.avgHoursForever / 60);
  const avgM = STEAMSPY_DATA.avgHoursForever % 60;
  const sentiment = pct >= 80 ? 'Very Positive' : pct >= 70 ? 'Mostly Positive' : 'Mixed';
  const sentColor = pct >= 80 ? 'var(--green)' : pct >= 70 ? '#a0d080' : 'var(--yellow)';

  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">Live Data</div>
      <h1>Live Stats</h1>
      <p>Speedrun world records pulled live from Speedrun.com API. Steam stats from SteamSpy (embedded — updates daily, no CORS). Current players from Steam API.</p>
    </div>
    <div class="content-body">

      <div class="section-title mb-8">Steam Stats</div>
      <div class="section-desc mb-16">Review data and ownership estimates from SteamSpy — Borderlands 3 (App ID: 397540).</div>
      <div class="grid-4 mb-24">
        ${liveStatCard('OWNERS', '2M — 5M', 'Estimated Steam copies sold', '#4A9BFF')}
        ${liveStatCard('REVIEWS', total.toLocaleString(), 'Total Steam reviews', '#52C41A')}
        ${liveStatCard('POSITIVE', pct+'%', sentiment, sentColor)}
        ${liveStatCard('AVG PLAYTIME', avgH+'h '+avgM+'m', 'Average hours all time', '#F5A623')}
      </div>

      <div class="card mb-8" style="border-color:rgba(255,255,255,0.1)">
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:12px">
          <div style="font-family:var(--font-head);font-size:48px;color:${sentColor};text-shadow:2px 2px 0 #000;line-height:1">${pct}%</div>
          <div>
            <div style="font-family:var(--font-head);font-size:24px;color:${sentColor};letter-spacing:2px">${sentiment}</div>
            <div style="font-size:12px;color:var(--text-dim)">${pos.toLocaleString()} positive · ${neg.toLocaleString()} negative · ${total.toLocaleString()} total</div>
          </div>
          <div style="margin-left:auto;text-align:right">
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">Data: SteamSpy — embedded ${STEAMSPY_DATA.lastUpdated}</div>
            <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">App ID: 397540</div>
          </div>
        </div>
        <div style="height:16px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);overflow:hidden;position:relative">
          <div style="position:absolute;left:0;top:0;bottom:0;width:${pct}%;background:var(--green)"></div>
          <div style="position:absolute;right:0;top:0;bottom:0;width:${100-pct}%;background:var(--red)"></div>
        </div>
        <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
          ${STEAMSPY_DATA.tags.map(t=>`<span style="font-family:var(--font-mono);font-size:10px;border:1px solid rgba(245,166,35,0.3);padding:2px 8px;color:var(--orange)">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;padding:10px 14px;background:var(--bg-card);border:1px solid rgba(74,155,255,0.3)">
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);letter-spacing:2px">CURRENT PLAYERS (STEAM LIVE)</div>
        <div id="live-players" style="font-family:var(--font-head);font-size:24px;color:#4A9BFF;text-shadow:2px 2px 0 #000;margin-left:8px">Fetching...</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-left:auto">Updates every page load via Steam API</div>
      </div>

      <div class="section-title mb-8">Speedrun World Records</div>
      <div class="section-desc mb-16">Live from Speedrun.com API · Game: Borderlands 3 (ID: 369penl1)</div>
      <div id="sr-records" class="card mb-24">
        <div style="font-family:var(--font-mono);font-size:12px;color:var(--gray)">Fetching records from Speedrun.com...</div>
      </div>

      <div class="section-title mb-8">API Architecture</div>
      <div class="grid-2 mb-8">
        ${apiInfoCard('Speedrun.com API','LIVE — CORS enabled','www.speedrun.com/api/v1/games/369penl1/categories','Returns BL3 category list and world records in real time. No auth required.','#52C41A','WORKING')}
        ${apiInfoCard('Steam GetNumberOfCurrentPlayers','LIVE — CORS enabled','api.steampowered.com/ISteamUserStats/.../v1/?appid=397540','Returns current concurrent player count in real time. No auth required.','#4A9BFF','WORKING')}
        ${apiInfoCard('SteamSpy','EMBEDDED — No CORS header','steamspy.com/api.php?request=appdetails&appid=397540','Works server-side only. Data embedded at build time since it updates daily anyway.','#F5A623','EMBEDDED')}
        ${apiInfoCard('Steam CDN','STATIC — Image hosting','cdn.cloudflare.steamstatic.com/steam/apps/397540/','Library hero, capsule, background images used throughout the site.','#9B59B6','STATIC')}
      </div>

    </div>
  `;

  fetchLivePlayers();
  fetchSpeedruns();
}

function liveStatCard(label, value, sub, color) {
  return `<div class="card" style="text-align:center;border-color:${color}33">
    <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--gray);margin-bottom:8px">${label}</div>
    <div style="font-family:var(--font-head);font-size:32px;color:${color};text-shadow:2px 2px 0 #000;line-height:1;margin-bottom:4px">${value}</div>
    <div style="font-size:11px;color:var(--text-dim)">${sub}</div>
  </div>`;
}

function apiInfoCard(name, status, endpoint, desc, color, badge) {
  const badgeColors = {WORKING:'var(--green)',EMBEDDED:'var(--yellow)',STATIC:'var(--gray)'};
  return `<div class="card" style="border-color:${color}33">
    <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px">
      <span style="font-family:var(--font-head);font-size:18px;color:${color};letter-spacing:1px;flex:1">${name}</span>
      <span style="font-family:var(--font-mono);font-size:9px;border:1px solid ${badgeColors[badge]};color:${badgeColors[badge]};padding:2px 6px;white-space:nowrap">${badge}</span>
    </div>
    <div style="font-family:var(--font-mono);font-size:9px;color:var(--gray);letter-spacing:1px;margin-bottom:4px">${status}</div>
    <div style="font-family:var(--font-mono);font-size:10px;color:var(--orange);margin-bottom:8px;word-break:break-all">${endpoint}</div>
    <div style="font-size:12px;color:var(--text-dim);line-height:1.5">${desc}</div>
  </div>`;
}

async function fetchLivePlayers() {
  const el = document.getElementById('live-players');
  if (!el) return;
  try {
    const res = await fetch('https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=397540');
    const d = await res.json();
    const count = d?.response?.player_count;
    if (count != null) {
      el.textContent = count.toLocaleString();
      el.title = 'Live from Steam API';
    } else {
      el.textContent = 'API error';
      el.style.color = 'var(--red)';
    }
  } catch(err) {
    el.textContent = 'N/A (CORS)';
    el.style.color = 'var(--gray)';
    el.title = 'Steam API CORS blocked in browser: ' + err.message;
  }
}

async function fetchSpeedruns() {
  const container = document.getElementById('sr-records');
  if (!container) return;

  try {
    // Use correct BL3 game ID: 369penl1 (not 'bl3' which redirects)
    const catRes = await fetch('https://www.speedrun.com/api/v1/games/369penl1/categories');
    const catData = await catRes.json();
    const cats = (catData.data || []).filter(c => c.type === 'per-game' && !c.miscellaneous).slice(0, 5);

    if (!cats.length) {
      container.innerHTML = '<div style="font-family:var(--font-mono);color:var(--red)">No categories found — check game ID</div>';
      return;
    }

    // Fetch WRs for each category
    const records = await Promise.all(cats.map(async cat => {
      try {
        const r = await fetch('https://www.speedrun.com/api/v1/leaderboards/369penl1/category/' + cat.id + '?top=1&embed=players');
        const d = await r.json();
        const run = d?.data?.runs?.[0];
        if (!run) return { name: cat.name, wr: '—', player: '—', link: cat.weblink };
        const t = run.run.times.primary_t;
        const h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = Math.floor(t % 60);
        const timeStr = h > 0 ? h+'h '+m+'m '+s+'s' : m+'m '+s+'s';
        const player = d.data?.players?.data?.[0]?.names?.international || 'Unknown';
        return { name: cat.name, wr: timeStr, player, link: run.run.weblink || 'https://www.speedrun.com/bl3' };
      } catch {
        return { name: cat.name, wr: 'Error', player: '—', link: 'https://www.speedrun.com/bl3' };
      }
    }));

    container.innerHTML = `
      <table class="bl3-table" style="width:100%">
        <thead><tr>
          <th>Category</th>
          <th>World Record</th>
          <th>Runner</th>
          <th>View Run</th>
        </tr></thead>
        <tbody>
          ${records.map(r => `<tr>
            <td style="font-weight:600;color:var(--text)">${r.name}</td>
            <td style="font-family:var(--font-head);font-size:20px;color:var(--orange);text-shadow:1px 1px 0 #000">${r.wr}</td>
            <td style="font-family:var(--font-mono);font-size:12px;color:var(--text-dim)">${r.player}</td>
            <td><a href="${r.link}" target="_blank" style="font-family:var(--font-mono);font-size:11px;color:var(--blue);text-decoration:none">speedrun.com &rarr;</a></td>
          </tr>`).join('')}
        </tbody>
      </table>
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-top:10px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">
        Source: Speedrun.com API · api/v1/games/369penl1 · Fetched live on page load
      </div>
    `;
  } catch(err) {
    container.innerHTML = `<div style="font-family:var(--font-mono);font-size:12px">
      <span style="color:var(--red)">API error: ${err.message}</span><br>
      <a href="https://www.speedrun.com/bl3" target="_blank" style="color:var(--blue)">View BL3 runs on Speedrun.com directly &rarr;</a>
    </div>`;
  }
}
