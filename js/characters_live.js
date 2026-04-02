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
      color: '#E8272A', border: '#E8272A',
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1097840/library_hero.jpg',
      quote: '"Iron Bear is my therapist."',
      lore: 'Former Vladof Ursa Corps soldier, Gunner First Class. Survived a failed operation in Darzaran Bay thanks to her 15-ton Iron Bear mech. Now a Vault Hunter dragging that mech across six galaxies. Reads paranormal romance novels in her downtime.',
      class: 'Gunner', origin: 'Vladof Ursa Corps',
      actionSkill: 'Iron Bear — 15-ton mech suit with dual configurable hardpoint weapons. Bears all your sins while you sit inside it.',
      treeNames: ['Bottomless Mags', 'Demolition Woman', 'Shield of Retribution', 'Bear Mother (DLC)'],
      sigBuild: 'Mozerker Forever — Bloodletter + Deathless + Front Loader. Permanent 1HP, permanent Desperate Measures, permanent +50% gun damage. Near-unkillable.',
      sigWeapon: 'Kaoson (Corrosive) + Backburner (Radiation) + Light Show (Incendiary)',
      dlcTree: 'Bear Mother — Iron Cub autonomous companion. Baby Nukes explosion on deploy/destroy (31x Mayhem scaled).',
      stats: { offense: 95, defense: 85, mobility: 55, utility: 70, complexity: 65 }
    },
    {
      id: 'amara', name: 'Amara', title: 'The Siren',
      color: '#9B59B6', border: '#9B59B6',
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1248830/library_hero.jpg',
      quote: '"My fists are registered as sacred relics in six star systems."',
      lore: 'Celebrity martial artist and champion of the people from Partali. One of only six Sirens in the universe, gifted with the power to channel elemental energy. Uses fists the size of freight cars as a matter of casual conversation.',
      class: 'Siren', origin: 'Partali',
      actionSkill: 'Phasecast / Phaseslam / Phasegrasp / Phaseflare — elemental action skills. Can pick any one and augment it.',
      treeNames: ['Brawl', 'Fist of the Elements', 'Mystical Assault', 'Enlightened Force (DLC)'],
      sigBuild: 'Face-puncher melee — Unleash the Dragon artifact + Find Your Center + Jab Cross. Permanent unresistable fire DOT. One-shot melee clears M10.',
      sigWeapon: 'Face-puncher (12-pellet shotgun that counts as melee) + Plasma Coil + Hellshock',
      dlcTree: 'Enlightened Force — Phaseflare orb of elemental destruction. Cold Hearted converts to Cryo — frozen enemies take 3x melee damage.',
      stats: { offense: 90, defense: 60, mobility: 80, utility: 95, complexity: 85 }
    },
    {
      id: 'flak', name: 'FL4K', title: 'The Beastmaster',
      color: '#52C41A', border: '#52C41A',
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1232090/library_hero.jpg',
      quote: '"The hunt is the harvest."',
      lore: 'A robot of unknown origin who gained sentience and became a wandering Beastmaster. Travels with three loyal pets: Skag, Spiderant, and Jabber. Non-binary. Born in a factory, raised by the road. Keeps a meticulous kill count.',
      class: 'Beastmaster', origin: 'Unknown factory',
      actionSkill: 'Fade Away (3 guaranteed crits) / Gamma Burst (radiation pet) / Rakk Attack (multi-charge spam) — one + one pet.',
      treeNames: ['Hunter', 'Stalker', 'Master', 'Trapper (DLC)'],
      sigBuild: '3-Shot GITM — Guerrillas in the Mist augment fires all ammo in Fade Away window. St4ckbot stacks to +500% crit damage. Boss delete.',
      sigWeapon: 'Skullmasher (5-pellet Jakobs sniper) + Monarch (Corrosive) + Reflux (Corrosive)',
      dlcTree: 'Trapper — Gravity Snare CC + Loader Bot pet + Shared Soul capstone (pet gives FL4K infinite revives). Virtually unkillable solo.',
      stats: { offense: 100, defense: 65, mobility: 70, utility: 75, complexity: 90 }
    },
    {
      id: 'zane', name: 'Zane', title: 'The Operative',
      color: '#4A9BFF', border: '#4A9BFF',
      img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1232091/library_hero.jpg',
      quote: '"I\'ve done a lot of things I\'m not proud of. Way more things I am proud of though."',
      lore: 'Retired black ops assassin, brother of Baron Flynt and Captain Flynt. Has since gone freelance. The only Vault Hunter who can equip TWO action skills simultaneously — at the cost of his grenade slot. Irish accent, questionable life choices, impeccable gadgets.',
      class: 'Operative', origin: 'Partali (same planet as Amara)',
      actionSkill: 'SNTNL Drone + Digi-Clone + Barrier Shield + MNTIS Shoulder Cannon — pick any two simultaneously.',
      treeNames: ['Hitman', 'Doubled Agent', 'Under Cover', 'The Professional (DLC)'],
      sigBuild: 'Seein\'s Dead God — Seein\' Dead mod activates ALL kill skills every ~4% hit. Playing Dirty doubles projectiles post-kill. Speed = gun damage via Violent Momentum.',
      sigWeapon: 'Plasma Coil + Redistributor (shock chain) + Light Show + Yellowcake (radiation)',
      dlcTree: 'The Professional — MNTIS Shoulder Cannon (3 charges). Eraser makes all crits pierce enemies. Art of War stacks damage after each shot.',
      stats: { offense: 85, defense: 75, mobility: 100, utility: 100, complexity: 80 }
    }
  ];

  const charCards = chars.map(c => {
    const bars = Object.entries(c.stats).map(([stat, val]) => `
      <div class="char-stat-row">
        <span class="char-stat-label">${stat.toUpperCase()}</span>
        <div class="char-stat-bar"><div class="char-stat-fill" style="width:${val}%;background:${c.color}"></div></div>
        <span class="char-stat-num">${val}</span>
      </div>
    `).join('');

    return `
      <div class="char-gallery-card" style="--char-color:${c.color}">
        <div class="char-hero" style="
          background: linear-gradient(to right, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.5) 100%),
                      url('${c.img}') right center/cover no-repeat;
          border-bottom: 2px solid ${c.color};
        ">
          <div class="char-hero-text">
            <div class="char-class-badge" style="border-color:${c.color};color:${c.color}">${c.class} — ${c.origin}</div>
            <div class="char-hero-name" style="text-shadow: 3px 3px 0 #000,-1px -1px 0 #000,color:${c.color}">${c.name}</div>
            <div class="char-hero-title" style="color:${c.color}">${c.title}</div>
            <div class="char-hero-quote">${c.quote}</div>
          </div>
        </div>

        <div class="char-body">
          <div class="char-grid-2">
            <div>
              <div class="char-section-label">Background</div>
              <div class="char-lore">${c.lore}</div>

              <div class="char-section-label" style="margin-top:16px">Action Skill</div>
              <div class="char-detail-box" style="border-color:${c.color}22;background:${c.color}08">${c.actionSkill}</div>

              <div class="char-section-label" style="margin-top:16px">Skill Trees</div>
              <div style="display:flex;flex-wrap:wrap;gap:4px">
                ${c.treeNames.map(t => `<span class="char-tree-pill" style="border-color:${c.color}44;color:${c.color}">${t}</span>`).join('')}
              </div>

              <div class="char-section-label" style="margin-top:16px">DLC 4th Tree</div>
              <div class="char-detail-box" style="border-color:#9B59B622;background:#9B59B608;border-left:3px solid #9B59B6">${c.dlcTree}</div>
            </div>

            <div>
              <div class="char-section-label">Stat Profile</div>
              ${bars}

              <div class="char-section-label" style="margin-top:16px">Signature Build</div>
              <div class="char-detail-box" style="border-color:${c.color}22;background:${c.color}08;border-left:3px solid ${c.color}">${c.sigBuild}</div>

              <div class="char-section-label" style="margin-top:12px">Core Weapons</div>
              <div class="char-detail-box" style="border-color:rgba(255,255,255,0.06);font-family:var(--font-mono);font-size:12px;color:var(--orange)">${c.sigWeapon}</div>

              <button class="char-goto-btn" style="border-color:${c.color};color:${c.color}" onclick="showSection('${c.id}')">
                Full Build Guide + Skill Trees &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">The Vault Hunters</div>
      <h1>Characters</h1>
      <p>All four playable Vault Hunters — lore, stat profiles, signature builds, weapon choices, and DLC skill tree overviews. Click "Full Build Guide" to go to detailed builds and skill trees.</p>
    </div>
    <div class="content-body">
      <div style="display:flex;flex-direction:column;gap:32px">${charCards}</div>
    </div>
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
