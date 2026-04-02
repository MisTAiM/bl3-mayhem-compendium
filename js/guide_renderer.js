/* ============================================================
   GUIDE RENDERER — appended to app.js via separate file
   Renders CHAR_GUIDES data into rich character guide sections
   ============================================================ */

function guideHTML(id) {
  const g = CHAR_GUIDES[id];
  if (!g) return '';

  // ── Overview bar ──────────────────────────────────────────
  const strengthList = g.strengths.map(s =>
    `<div style="display:flex;gap:8px;align-items:flex-start;padding:5px 0;border-bottom:.5px solid rgba(255,255,255,0.05)">
      <span style="color:var(--green);font-size:14px;flex-shrink:0">✓</span>
      <span style="font-size:12px;color:var(--text-dim);line-height:1.5">${s}</span>
    </div>`).join('');

  const weaknessList = g.weaknesses.map(w =>
    `<div style="display:flex;gap:8px;align-items:flex-start;padding:5px 0;border-bottom:.5px solid rgba(255,255,255,0.05)">
      <span style="color:var(--red);font-size:14px;flex-shrink:0">✗</span>
      <span style="font-size:12px;color:var(--text-dim);line-height:1.5">${w}</span>
    </div>`).join('');

  // ── Leveling phases ───────────────────────────────────────
  const levelingHTML = g.leveling.map((phase, pi) => {
    const skills = phase.prioritySkills.map(sk =>
      `<div style="padding:8px 12px;border-left:2px solid ${phase.color};background:${phase.color}08;margin-bottom:6px">
        <div style="font-family:var(--font-mono);font-size:11px;font-weight:600;color:${phase.color};margin-bottom:3px">${sk.skill}</div>
        <div style="font-size:12px;color:var(--text-dim);line-height:1.5">${sk.why}</div>
      </div>`).join('');

    const tips = phase.tips.map(t =>
      `<div style="display:flex;gap:8px;align-items:flex-start;margin-bottom:6px">
        <span style="color:${phase.color};font-size:16px;flex-shrink:0;line-height:1.2">›</span>
        <span style="font-size:12px;color:var(--text-dim);line-height:1.6">${t}</span>
      </div>`).join('');

    const farmBox = phase.farm ? `
      <div style="background:rgba(245,166,35,0.08);border:1px solid rgba(245,166,35,0.3);padding:10px 14px;margin-top:12px">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--orange);margin-bottom:4px">PHASE FARM TARGET</div>
        <div style="font-family:var(--font-head);font-size:18px;color:var(--orange);margin-bottom:2px">${phase.farm.boss}</div>
        <div style="font-family:var(--font-mono);font-size:11px;color:var(--gray);margin-bottom:6px">${phase.farm.location}</div>
        <div style="font-size:12px;color:var(--text-dim)">${phase.farm.why}</div>
      </div>` : '';

    return `
      <div class="guide-phase" style="--phase-color:${phase.color}">
        <div class="guide-phase-header" style="background:${phase.color}18;border-left:4px solid ${phase.color}" onclick="togglePhase(this)">
          <div style="display:flex;align-items:center;gap:14px">
            <span style="font-size:24px">${phase.icon}</span>
            <div>
              <div style="font-family:var(--font-head);font-size:22px;letter-spacing:2px;color:${phase.color}">${phase.phase}</div>
              <div style="font-family:var(--font-mono);font-size:11px;color:var(--gray)">${phase.levels}</div>
            </div>
          </div>
          <div style="font-size:13px;color:var(--text-dim);flex:1;max-width:480px;line-height:1.5;padding:0 20px">${phase.summary}</div>
          <div style="font-family:var(--font-mono);font-size:12px;color:${phase.color};opacity:.7;transition:transform .2s" class="guide-chevron">▼</div>
        </div>
        <div class="guide-phase-body">
          <div class="grid-2" style="gap:20px;padding:16px">
            <div>
              <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:8px">ACTION SKILL SETUP</div>
              <div style="font-size:12px;color:var(--text-dim);line-height:1.7;margin-bottom:14px;padding:8px 12px;border:1px solid rgba(255,255,255,0.06)">${phase.actionSkill}</div>
              <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:8px">PRIORITY SKILLS</div>
              ${skills}
              <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin:12px 0 8px">WEAPONS</div>
              <div style="font-size:12px;color:var(--text-dim);line-height:1.6;padding:8px 12px;border:1px solid rgba(255,255,255,0.06)">${phase.weapons}</div>
              ${farmBox}
            </div>
            <div>
              <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:8px">TIPS & NOTES</div>
              ${tips}
            </div>
          </div>
        </div>
      </div>`;
  }).join('');

  // ── Key Farms table ───────────────────────────────────────
  const farmsHTML = g.keyFarms.map(f => `
    <div style="display:grid;grid-template-columns:1fr 1fr 80px auto;gap:12px;padding:10px 14px;border-bottom:.5px solid rgba(255,255,255,0.06);align-items:start">
      <div>
        <div style="font-family:var(--font-head);font-size:16px;letter-spacing:1px;color:var(--white)">${f.boss}</div>
        <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">${f.location}</div>
      </div>
      <div>
        <div style="font-size:12px;color:var(--orange);font-weight:600;margin-bottom:2px">${f.drop}</div>
        <div style="font-size:11px;color:var(--text-dim);line-height:1.5">${f.tip}</div>
      </div>
      <div style="font-size:14px;text-align:center">${f.difficulty}</div>
      <div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">FARM</div>
    </div>`).join('');

  // ── Guardian Rank ─────────────────────────────────────────
  const grHTML = g.guardianRank.priority.map((p, i) =>
    `<div style="display:flex;gap:10px;padding:6px 0;border-bottom:.5px solid rgba(255,255,255,0.05)">
      <span style="font-family:var(--font-head);font-size:18px;color:var(--orange);min-width:20px">${i+1}</span>
      <span style="font-size:12px;color:var(--text-dim);line-height:1.5">${p}</span>
    </div>`).join('');

  // ── Mayhem modifiers ──────────────────────────────────────
  const goodMods = g.mayhem.good.map(m =>
    `<div style="padding:6px 10px;border-left:3px solid var(--green);background:rgba(82,196,26,0.06);margin-bottom:4px;font-size:12px;color:var(--text-dim);line-height:1.5">${m}</div>`).join('');
  const badMods = g.mayhem.bad.map(m =>
    `<div style="padding:6px 10px;border-left:3px solid var(--red);background:rgba(232,39,42,0.06);margin-bottom:4px;font-size:12px;color:var(--text-dim);line-height:1.5">${m}</div>`).join('');

  return `
    <!-- ══ FULL GUIDE ══════════════════════════════════ -->
    <div class="divider-strong"></div>
    <div class="section-title mb-8">📖 Complete Guide — Beginning to Endgame</div>

    <!-- Overview -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:24px">
      <div class="card" style="grid-column:span 1">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
          <div style="font-family:var(--font-head);font-size:28px;color:${g.diffColor};text-shadow:2px 2px 0 #000">${g.difficulty}</div>
          <div>
            <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--gray)">DIFFICULTY</div>
            <div style="font-size:12px;color:var(--text-dim)">${g.playstyle}</div>
          </div>
        </div>
        <div style="font-size:13px;color:var(--text-dim);line-height:1.7">${g.overview}</div>
      </div>
      <div class="card">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--green);margin-bottom:8px">STRENGTHS</div>
        ${strengthList}
      </div>
      <div class="card">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--red);margin-bottom:8px">WEAKNESSES</div>
        ${weaknessList}
      </div>
    </div>

    <!-- Leveling Phases -->
    <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:3px;color:var(--orange);margin-bottom:12px">LEVELING GUIDE — CLICK TO EXPAND</div>
    <div style="display:flex;flex-direction:column;gap:2px;margin-bottom:24px" id="guide-phases-${id}">
      ${levelingHTML}
    </div>

    <!-- Key Farms -->
    <div class="divider"></div>
    <div class="section-title mb-8">🎯 Key Farms</div>
    <div class="card mb-24" style="padding:0">
      <div style="display:grid;grid-template-columns:1fr 1fr 80px auto;gap:12px;padding:8px 14px;border-bottom:2px solid rgba(245,166,35,0.3);background:rgba(245,166,35,0.06)">
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--orange)">BOSS</div>
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--orange)">TARGET DROP / TIP</div>
        <div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--orange)">DIFF</div>
        <div></div>
      </div>
      ${farmsHTML}
    </div>

    <!-- Guardian Rank + Mayhem -->
    <div class="grid-2 mb-24" style="gap:20px">
      <div class="card">
        <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:12px">GUARDIAN RANK PRIORITY</div>
        ${grHTML}
        <div style="font-size:11px;color:var(--gray);margin-top:10px;line-height:1.6;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">${g.guardianRank.notes}</div>
      </div>
      <div class="card">
        <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--green);margin-bottom:8px">GOOD MAYHEM MODIFIERS</div>
        ${goodMods}
        <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--red);margin:12px 0 8px">AVOID THESE MODIFIERS</div>
        ${badMods}
        <div style="font-size:11px;color:var(--gray);margin-top:10px;line-height:1.6;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">${g.mayhem.notes}</div>
      </div>
    </div>
  `;
}

window.togglePhase = function(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('.guide-chevron');
  const isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
  body.style.maxHeight = isOpen ? '0px' : body.scrollHeight + 'px';
  body.style.overflow = isOpen ? 'hidden' : 'visible';
  if (chevron) chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
};
