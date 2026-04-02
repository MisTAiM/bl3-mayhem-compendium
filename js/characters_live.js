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
function buildLiveSection() {
  const sec = document.getElementById('section-live');
  if (!sec || sec.innerHTML.trim()) return;

  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">Live Data</div>
      <h1>Live Stats</h1>
      <p>Real-time data pulled from public APIs — SteamSpy player estimates, Steam review score, and speedrun world records.</p>
    </div>
    <div class="content-body">

      <div class="section-title mb-8">Steam Player Stats</div>
      <div class="section-desc mb-16">Data from SteamSpy — updates periodically. Borderlands 3 Steam App ID: 397540.</div>
      <div id="steamspy-cards" class="grid-4 mb-32">
        <div class="card" style="text-align:center"><div style="font-family:var(--font-head);font-size:14px;color:var(--gray);letter-spacing:1px">LOADING...</div></div>
      </div>

      <div class="section-title mb-8">Steam Reviews</div>
      <div id="review-bar" class="card mb-32">
        <div style="color:var(--gray);font-family:var(--font-mono);font-size:12px">Fetching review data...</div>
      </div>

      <div class="section-title mb-8">Speedrun World Records</div>
      <div class="section-desc mb-16">Top runs from Speedrun.com — BL3 category records.</div>
      <div id="sr-records" class="card mb-32">
        <div style="color:var(--gray);font-family:var(--font-mono);font-size:12px">Fetching speedrun data...</div>
      </div>

      <div class="section-title mb-8">What APIs Power This Site</div>
      <div class="grid-2 mb-16">
        ${apiCard('SteamSpy API','Public — No auth required','steamspy.com/api.php','Returns player estimates, review scores, owners, and tags for any Steam game. Used here for player count and review data.','#4A9BFF')}
        ${apiCard('Speedrun.com API','Public — No auth required','www.speedrun.com/api/v1','Full game data, leaderboards, and run records. Used here for BL3 speedrun WR and category data.','#52C41A')}
        ${apiCard('Steam Store API','Public — No auth required','store.steampowered.com/api','Game details, screenshots, pricing. Used here for background images and game metadata.','#F5A623')}
        ${apiCard('Steam CDN','Public image hosting','cdn.cloudflare.steamstatic.com','All game artwork — capsules, library heroes, screenshots. Used here for character section backgrounds.','#9B59B6')}
      </div>
      <div class="card mb-8" style="border-color:rgba(245,166,35,.2)">
        <div style="font-family:var(--font-head);font-size:18px;color:var(--orange);margin-bottom:8px">APIs Not Used (Require Auth/Key)</div>
        <div style="font-size:13px;color:var(--text-dim);line-height:1.8">
          Twitch API (OAuth 2.0 required) — would show live BL3 streams and viewer counts<br>
          YouTube Data API (key required) — would embed latest BL3 guide videos<br>
          Reddit API (OAuth required) — would pull r/borderlands3 hot posts<br>
          RAWG Game Database (key required) — additional game metadata<br>
          Gearbox SHiFT API (private) — SHiFT code validation not publicly documented
        </div>
      </div>

    </div>
  `;

  // Fetch live data async
  fetchSteamSpy();
  fetchSpeedruns();
}

function apiCard(name, auth, endpoint, desc, color) {
  return `<div class="card" style="border-color:${color}33">
    <div style="font-family:var(--font-head);font-size:18px;letter-spacing:1px;color:${color};margin-bottom:4px">${name}</div>
    <div style="font-family:var(--font-mono);font-size:9px;color:var(--gray);letter-spacing:1px;margin-bottom:6px">${auth}</div>
    <div style="font-family:var(--font-mono);font-size:10px;color:var(--orange);margin-bottom:8px">${endpoint}</div>
    <div style="font-size:12px;color:var(--text-dim);line-height:1.5">${desc}</div>
  </div>`;
}

async function fetchSteamSpy() {
  const container = document.getElementById('steamspy-cards');
  const reviewBar = document.getElementById('review-bar');
  if (!container) return;

  try {
    // SteamSpy is CORS-friendly
    const res = await fetch('https://steamspy.com/api.php?request=appdetails&appid=397540');
    const d = await res.json();

    const pos = d.positive || 0;
    const neg = d.negative || 0;
    const total = pos + neg;
    const pct = total > 0 ? Math.round((pos / total) * 100) : 0;
    const sentiment = pct >= 80 ? 'Very Positive' : pct >= 70 ? 'Mostly Positive' : pct >= 40 ? 'Mixed' : 'Mostly Negative';
    const sentColor = pct >= 80 ? 'var(--green)' : pct >= 70 ? '#a0d080' : pct >= 40 ? 'var(--yellow)' : 'var(--red)';

    container.innerHTML = `
      ${statCard('OWNERS', d.owners || '2M — 5M', 'Steam Copies Sold (Estimate)', '#4A9BFF')}
      ${statCard('REVIEWS', (pos + neg).toLocaleString(), 'Total Steam Reviews', '#52C41A')}
      ${statCard('SCORE', pct + '%', sentiment, sentColor)}
      ${statCard('PEAK CCU', (d.ccu || 0).toLocaleString(), 'Peak Concurrent Players (Steam)', '#F5A623')}
    `;

    if (reviewBar) {
      reviewBar.innerHTML = `
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:12px">
          <div style="font-family:var(--font-head);font-size:32px;color:${sentColor};text-shadow:2px 2px 0 #000">${pct}%</div>
          <div>
            <div style="font-family:var(--font-head);font-size:20px;color:${sentColor};letter-spacing:1px">${sentiment}</div>
            <div style="font-family:var(--font-mono);font-size:11px;color:var(--gray)">${(pos+neg).toLocaleString()} total reviews</div>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.08);height:12px;border:1px solid rgba(255,255,255,0.1);position:relative;overflow:hidden">
          <div style="position:absolute;left:0;top:0;bottom:0;width:${pct}%;background:var(--green);transition:width .8s"></div>
          <div style="position:absolute;right:0;top:0;bottom:0;width:${100-pct}%;background:var(--red)"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:6px;font-family:var(--font-mono);font-size:11px">
          <span style="color:var(--green)">${pos.toLocaleString()} Positive</span>
          <span style="color:var(--red)">${neg.toLocaleString()} Negative</span>
        </div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-top:8px">Source: SteamSpy API — steamspy.com/api.php?request=appdetails&appid=397540</div>
      `;
    }
  } catch (err) {
    if (container) container.innerHTML = `<div class="card" style="grid-column:span 4"><div style="font-family:var(--font-mono);font-size:12px;color:var(--red)">SteamSpy API unavailable — try refreshing or check CORS settings.</div></div>`;
  }
}

function statCard(label, value, sub, color) {
  return `<div class="card" style="text-align:center;border-color:${color}33">
    <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--gray);margin-bottom:8px">${label}</div>
    <div style="font-family:var(--font-head);font-size:32px;color:${color};text-shadow:2px 2px 0 #000;line-height:1;margin-bottom:4px">${value}</div>
    <div style="font-size:11px;color:var(--text-dim)">${sub}</div>
  </div>`;
}

async function fetchSpeedruns() {
  const container = document.getElementById('sr-records');
  if (!container) return;

  try {
    // Get BL3 categories
    const catRes = await fetch('https://www.speedrun.com/api/v1/games/bl3/categories');
    const catData = await catRes.json();
    const cats = (catData.data || []).filter(c => c.type === 'per-game').slice(0, 4);

    if (!cats.length) {
      container.innerHTML = '<div style="font-family:var(--font-mono);font-size:12px;color:var(--gray)">No speedrun categories found.</div>';
      return;
    }

    // Get WR for first few categories
    const records = await Promise.all(cats.slice(0,3).map(async cat => {
      try {
        const r = await fetch(`https://www.speedrun.com/api/v1/leaderboards/bl3/category/${cat.id}?top=1&embed=players`);
        const d = await r.json();
        const run = d.data?.runs?.[0];
        if (!run) return { name: cat.name, wr: null };
        const time = run.run.times.primary_t;
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = Math.floor(time % 60);
        const timeStr = h > 0 ? `${h}h ${m}m ${s}s` : `${m}m ${s}s`;
        const player = d.data.players?.data?.[0]?.names?.international || 'Unknown';
        return { name: cat.name, wr: timeStr, player, link: run.run.weblink };
      } catch { return { name: cat.name, wr: null }; }
    }));

    container.innerHTML = `
      <table class="bl3-table">
        <thead><tr><th>Category</th><th>World Record</th><th>Runner</th><th>Link</th></tr></thead>
        <tbody>
          ${records.map(r => `<tr>
            <td style="font-weight:600">${r.name}</td>
            <td style="font-family:var(--font-mono);color:var(--orange)">${r.wr || '—'}</td>
            <td style="color:var(--text-dim)">${r.player || '—'}</td>
            <td><a href="https://www.speedrun.com/bl3" target="_blank" style="color:var(--orange);font-family:var(--font-mono);font-size:11px">speedrun.com/bl3</a></td>
          </tr>`).join('')}
        </tbody>
      </table>
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-top:8px">Source: Speedrun.com API — www.speedrun.com/api/v1</div>
    `;
  } catch (err) {
    container.innerHTML = `<div style="font-family:var(--font-mono);font-size:12px;color:var(--gray)">Speedrun.com API unavailable (CORS/rate limit). Visit <a href="https://www.speedrun.com/bl3" target="_blank" style="color:var(--orange)">speedrun.com/bl3</a> directly.</div>`;
  }
}
