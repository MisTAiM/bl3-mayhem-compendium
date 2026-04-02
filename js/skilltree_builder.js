/* ============================================================
   SKILL TREE BUILDER — Interactive Point Allocation System
   Left-click = add point | Right-click = remove point
   Tier gates enforce point requirements per tree
   ============================================================ */

// ─── CONSTANTS ──────────────────────────────────────────────
const ST_MAX_BUDGET = 48; // Level 72 = 48 investable skill points

const ST_CHAR_COLORS  = { moze:'#E8272A', amara:'#9B59B6', flak:'#52C41A', zane:'#4A9BFF' };
const ST_CHAR_NAMES   = { moze:'Moze', amara:'Amara', flak:'FL4K', zane:'Zane' };
const ST_CHAR_TITLES  = { moze:'The Gunner', amara:'The Siren', flak:'The Beastmaster', zane:'The Operative' };

// ─── STATE ────────────────────────────────────────────────────
if (!window.ST_PTS) window.ST_PTS = {};

function stInitChar(charId) {
  if (window.ST_PTS[charId]) return;
  window.ST_PTS[charId] = {};
  const charData = SKILL_TREES[charId];
  if (!charData) return;
  charData.trees.forEach(tree => {
    window.ST_PTS[charId][tree.id] = {};
    tree.tiers.forEach(tier => {
      (tier.skills || []).forEach(sk => { window.ST_PTS[charId][tree.id][sk.name] = 0; });
      if (tier.capstone) window.ST_PTS[charId][tree.id][tier.capstone.name] = 0;
    });
  });
}

function stGetPts(charId, treeId, skillName) {
  return (window.ST_PTS[charId] && window.ST_PTS[charId][treeId] && window.ST_PTS[charId][treeId][skillName]) || 0;
}

function stGetTreeTotal(charId, treeId) {
  const t = window.ST_PTS[charId] && window.ST_PTS[charId][treeId];
  return t ? Object.values(t).reduce((a,b)=>a+b,0) : 0;
}

function stGetCharTotal(charId) {
  if (!window.ST_PTS[charId]) return 0;
  return SKILL_TREES[charId].trees.reduce((s,tree)=>s+stGetTreeTotal(charId,tree.id),0);
}

function stIsTierUnlocked(charId, treeId, req) {
  return req === 0 || stGetTreeTotal(charId, treeId) >= req;
}

function stValidateGates(charId, treeId) {
  const charData = SKILL_TREES[charId];
  const tree = charData.trees.find(t=>t.id===treeId);
  if (!tree) return;
  let changed = true;
  while (changed) {
    changed = false;
    tree.tiers.forEach(tier => {
      if (!tier.req) return;
      if (stGetTreeTotal(charId, treeId) < tier.req) {
        (tier.skills||[]).forEach(sk => {
          if ((window.ST_PTS[charId][treeId][sk.name]||0) > 0) { window.ST_PTS[charId][treeId][sk.name]=0; changed=true; }
        });
        if (tier.capstone && (window.ST_PTS[charId][treeId][tier.capstone.name]||0) > 0) {
          window.ST_PTS[charId][treeId][tier.capstone.name]=0; changed=true;
        }
      }
    });
  }
}

// ─── ACTIONS ──────────────────────────────────────────────────
window.stAdd = function(charId, treeId, skillName, maxPts, tierReq, e) {
  if (e) e.preventDefault();
  stInitChar(charId);
  if (!stIsTierUnlocked(charId, treeId, tierReq)) return;
  if (stGetCharTotal(charId) >= ST_MAX_BUDGET) return;
  const cur = stGetPts(charId, treeId, skillName);
  if (cur < maxPts) window.ST_PTS[charId][treeId][skillName] = cur + 1;
  stRerender(charId);
};

window.stRemove = function(charId, treeId, skillName, tierReq, e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  stInitChar(charId);
  const cur = stGetPts(charId, treeId, skillName);
  if (cur > 0) { window.ST_PTS[charId][treeId][skillName] = cur - 1; stValidateGates(charId, treeId); }
  stRerender(charId);
};

window.stReset = function(charId) {
  window.ST_PTS[charId] = null;
  stInitChar(charId);
  stRerender(charId);
};

function stRerender(charId) {
  const c = document.getElementById('stchar-'+charId);
  if (c) c.innerHTML = renderCharTrees(charId);
}

// ─── SECTION BOOTSTRAP ────────────────────────────────────────
function buildSkillTreesSection() {
  const sec = document.getElementById('section-skilltrees');
  if (!sec || sec.innerHTML.trim()) return;
  const charIds = ['moze','amara','flak','zane'];
  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">Designer's Cut Included — All 4 Trees Per Character</div>
      <h1>Skill Trees</h1>
      <p>Left-click a skill to invest a point. Right-click to remove. Tiers unlock at 5 / 10 / 15 / 20 / 25 pts in that tree. Budget: ${ST_MAX_BUDGET} points at Level 72. Orange border = priority skill. ★ = capstone.</p>
    </div>
    <div class="content-body">
      <div style="display:flex;gap:0;margin-bottom:0;overflow-x:auto;border:2px solid var(--orange);box-shadow:4px 4px 0 #000" id="stchar-tabs">
        ${charIds.map((id,i)=>`
          <button onclick="showSTChar('${id}')" id="stctab-${id}"
            style="flex:1;padding:14px 8px;font-family:var(--font-head);font-size:22px;letter-spacing:2px;text-transform:uppercase;border:none;border-right:2px solid #000;cursor:pointer;transition:all .15s;background:${i===0?ST_CHAR_COLORS[id]:'var(--bg-card)'};color:${i===0?'#000':'var(--gray)'}">
            <div>${ST_CHAR_NAMES[id]}</div>
            <div style="font-size:10px;letter-spacing:1px;font-family:var(--font-mono);opacity:.7;margin-top:2px">${ST_CHAR_TITLES[id]}</div>
          </button>`).join('')}
      </div>
      ${charIds.map((id,i)=>`<div id="stchar-${id}" style="display:${i===0?'block':'none'}">${renderCharTrees(id)}</div>`).join('')}
    </div>`;
}

// ─── CHARACTER PANEL ──────────────────────────────────────────
function renderCharTrees(charId) {
  stInitChar(charId);
  const charData = SKILL_TREES[charId];
  if (!charData) return '<div style="padding:40px;color:var(--gray)">Data not found.</div>';
  const color = ST_CHAR_COLORS[charId];
  const used  = stGetCharTotal(charId);
  const rem   = ST_MAX_BUDGET - used;
  const remColor = rem===0?'var(--orange)':rem<=10?'#F5C026':'var(--text-dim)';

  return `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:20px;padding:18px 24px;background:${color}12;border-bottom:3px solid ${color};margin-bottom:20px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:20px">
        <div style="font-family:var(--font-head);font-size:52px;letter-spacing:4px;color:${color};text-shadow:3px 3px 0 #000,-1px -1px 0 #000;line-height:1">${charData.name}</div>
        <div>
          <div style="font-family:var(--font-head);font-size:17px;letter-spacing:2px;color:var(--text-dim)">${charData.trees.length} Trees — ${charData.trees.filter(t=>!t.dlc).length} Base + ${charData.trees.filter(t=>t.dlc).length} DLC</div>
          <div style="font-size:11px;color:var(--gray);margin-top:3px;font-family:var(--font-mono)">${charData.note}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:14px">
        <div style="text-align:right">
          <div style="font-family:var(--font-head);font-size:30px;letter-spacing:2px;color:${color}">${used}<span style="font-size:15px;color:var(--gray)">/${ST_MAX_BUDGET}</span></div>
          <div style="font-size:11px;font-family:var(--font-mono);color:${remColor}">${rem} pts remaining</div>
        </div>
        <button onclick="stReset('${charId}')"
          style="padding:8px 18px;font-family:var(--font-head);font-size:13px;letter-spacing:1px;background:transparent;border:1px solid var(--gray);color:var(--gray);cursor:pointer;transition:all .15s"
          onmouseover="this.style.borderColor='${color}';this.style.color='${color}'"
          onmouseout="this.style.borderColor='var(--gray)';this.style.color='var(--gray)'">RESET</button>
      </div>
    </div>
    <div class="st-trees-grid">${charData.trees.map((tree,i)=>renderTree(charId,tree,i)).join('')}</div>
    <div class="st-detail-panel" id="st-detail-${charId}">
      <div style="font-size:13px;color:var(--text-dim)">Click any skill to see its full description and M10 context. Left-click = add point. Right-click = remove point.</div>
    </div>`;
}

// ─── TREE COLUMN ──────────────────────────────────────────────
function renderTree(charId, tree, treeIdx) {
  const tc = tree.color;
  const tpt = stGetTreeTotal(charId, tree.id);
  const barPct = Math.min(100, (tpt/25)*100);

  const asHTML = tree.actionSkills.map(as=>`
    <div class="st-as-card" onclick="showSkillDetail('${charId}','${treeIdx}','as','${escQ(as.name)}')"
      style="border-color:${tc}44;cursor:pointer;transition:border-color .15s"
      onmouseover="this.style.borderColor='${tc}'" onmouseout="this.style.borderColor='${tc}44'">
      <div class="st-as-label" style="color:${tc}">ACTION SKILL</div>
      <div class="st-as-name" style="color:${tc}">${as.name}</div>
      <div class="st-as-type">${as.type}</div>
      ${as.augments&&as.augments.length?`<div class="st-aug-count">${as.augments.length} Augments</div>`:''}
    </div>`).join('');

  const tiersHTML = tree.tiers.map((tier,tierIdx)=>{
    const req = tier.req||0;
    const unlocked = stIsTierUnlocked(charId,tree.id,req);
    const skills = tier.skills||[];
    const cap = tier.capstone;

    const reqBar = skills.length ? `
      <div class="st-req-bar" style="border-color:${unlocked?tc+'44':'#2a2a2a'}">
        <span class="st-req-label" style="color:${unlocked?tc:'var(--gray)'}">${req===0?'Tier 1 — No requirement':req+' pts required'+(unlocked?' ✓':' — LOCKED')}</span>
        <span style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">${tpt}/25</span>
      </div>` : '';

    const skillNodes = skills.map((sk,skIdx)=>{
      const cur = stGetPts(charId,tree.id,sk.name);
      const max = sk.pts;
      const fillPct = max>0?(cur/max)*100:0;
      const locked = !unlocked;
      const active = cur>0;
      const isKey = sk.key;
      const borderColor = locked?'#333':isKey?tc:(active?tc+'88':'#555');

      const oc = locked ? '' : `stAdd('${charId}','${tree.id}','${escQ(sk.name)}',${max},${req},event);showSkillDetail('${charId}','${treeIdx}','skill_${tierIdx}_${skIdx}','${escQ(sk.name)}')`;
      const ocm = locked ? 'event.preventDefault()' : `stRemove('${charId}','${tree.id}','${escQ(sk.name)}',${req},event)`;
      return `<div class="st-skill-node" style="position:relative;border:2px solid ${borderColor};background:${locked?'#0d0d0d':active?tc+'1a':'var(--bg-card)'};cursor:${locked?'not-allowed':'pointer'};opacity:${locked?.4:1};overflow:hidden;transition:all .15s;user-select:none"
        onclick="${oc}"
        oncontextmenu="${ocm}">
        ${max>1?`<div style="position:absolute;bottom:0;left:0;height:3px;width:${fillPct}%;background:${tc};transition:width .2s"></div>`:''}
        ${active&&max===1?`<div style="position:absolute;top:5px;right:5px;width:7px;height:7px;border-radius:50%;background:${tc}"></div>`:''}
        <div class="st-skill-pts" style="color:${locked?'var(--gray)':tc}">${cur}/${max}</div>
        <div class="st-skill-name${isKey?' st-key-name':''}" style="color:${locked?'#555':isKey?'var(--white)':'var(--text)'}">${sk.name}</div>
        ${sk.m10&&!locked?`<div class="st-m10-dot" style="background:${tc}"></div>`:''}
      </div>`;
    }).join('');

    const capHTML = cap?`
      <div class="st-tier-row st-capstone-row">${(()=>{
        const cur=stGetPts(charId,tree.id,cap.name);
        const capU=tpt>=25;
        const act=cur>0;
        return `<div class="st-skill-node st-capstone"
          style="border-color:${capU?'var(--yellow)':'#333'};background:${act?'rgba(255,215,0,.12)':capU?'var(--bg-card)':'#0a0a0a'};cursor:${capU?'pointer':'not-allowed'};opacity:${capU?1:.35};transition:all .15s;position:relative;overflow:hidden"
          onclick="${capU?`stAdd('${charId}','${tree.id}','${escQ(cap.name)}',1,25,event);showSkillDetail('${charId}','${treeIdx}','cap','${escQ(cap.name)}')`:''}"
          oncontextmenu="${capU?`stRemove('${charId}','${tree.id}','${escQ(cap.name)}',25,event)`:'event.preventDefault()'}">
          ${act?`<div style="position:absolute;top:5px;right:5px;width:8px;height:8px;border-radius:50%;background:var(--yellow)"></div>`:''}
          <div class="st-skill-pts" style="color:${capU?'var(--yellow)':'#444'}">${act?'CAPSTONE ✓':capU?'CAPSTONE':'CAPSTONE — 25 PTS'}</div>
          <div class="st-skill-name" style="color:${capU?'var(--yellow)':'#444'};font-size:13px">${cap.name} ★</div>
          ${cap.m10&&capU?`<div class="st-m10-dot" style="background:var(--yellow)"></div>`:''}
        </div>`;
      })()}</div>`:''

    if (!skills.length) return capHTML;
    return `${reqBar}<div class="st-tier-row" style="grid-template-columns:repeat(${Math.min(skills.length,3)},1fr)">${skillNodes}</div>${capHTML}`;
  }).join(`<div class="st-connector" style="background:${tc}33"></div>`);

  return `
    <div class="st-tree-column">
      <div class="st-tree-header" style="background:${tc}18;border-color:${tc};position:relative;overflow:hidden">
        <div style="position:absolute;bottom:0;left:0;height:3px;width:${barPct}%;background:${tc};transition:width .3s"></div>
        <div style="display:flex;align-items:baseline;justify-content:space-between">
          <div class="st-tree-name" style="color:${tc}">${tree.name}${tree.dlc?'<span class="st-dlc-badge">DLC</span>':''}</div>
          <div style="font-family:var(--font-mono);font-size:12px;color:${tc}">${tpt}/25</div>
        </div>
        <div class="st-tree-focus">${tree.focus}</div>
      </div>
      <div class="st-as-row">${asHTML}</div>
      <div class="st-tiers">${tiersHTML}</div>
    </div>`;
}

// ─── DETAIL PANEL ─────────────────────────────────────────────
window.showSkillDetail = function(charId, treeIdx, skillKey, skillName) {
  const charData = SKILL_TREES[charId];
  if (!charData) return;
  const tree = charData.trees[treeIdx];
  if (!tree) return;
  const tc = tree.color;
  let skill=null, isAS=false;

  if (skillKey==='as') { skill=tree.actionSkills.find(a=>a.name===skillName); isAS=true; }
  else if (skillKey==='cap') { const ct=tree.tiers.find(t=>t.capstone&&t.capstone.name===skillName); skill=ct&&ct.capstone; }
  else { const [,ti,si]=skillKey.split('_'); const t2=tree.tiers[+ti]; if(t2&&t2.skills) skill=t2.skills[+si]; }

  if (!skill) return;
  const panel = document.getElementById('st-detail-'+charId);
  if (!panel) return;

  if (isAS) {
    panel.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap">
        <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:${tc};background:${tc}22;padding:2px 7px;text-transform:uppercase">ACTION SKILL</span>
        <span style="font-family:var(--font-head);font-size:22px;color:${tc};letter-spacing:2px">${skill.name}</span>
        <span style="font-size:11px;color:var(--gray)">${skill.type}</span>
      </div>
      <div style="font-size:13px;color:var(--text-dim);line-height:1.6;margin-bottom:12px">${skill.desc}</div>
      ${(skill.augments||[]).length?`<div style="font-family:var(--font-head);font-size:13px;color:var(--orange);letter-spacing:1px;margin-bottom:8px">AUGMENTS — equip up to 2</div>
      ${(skill.augments||[]).map(aug=>`<div style="display:flex;gap:10px;padding:8px 0;border-bottom:.5px solid rgba(255,255,255,.06)"><div style="font-family:var(--font-mono);font-size:9px;color:${tc};min-width:65px;text-transform:uppercase;letter-spacing:1px;padding-top:2px">Augment</div><div><div style="font-size:13px;font-weight:500;color:var(--white);margin-bottom:2px">${aug.name}</div><div style="font-size:12px;color:var(--text-dim);line-height:1.55">${aug.desc}</div></div></div>`).join('')}`:''}`;
  } else {
    const isKey=skill.key; const isCap=skillKey==='cap';
    const cur=stGetPts(charId,tree.id,skill.name); const max=skill.pts||1;
    const nameColor=isCap?'var(--yellow)':isKey?tc:'var(--white)';
    panel.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:12px;flex-wrap:wrap">
        <div style="flex:1;min-width:200px">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:6px">
            ${isCap?`<span style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--yellow);background:rgba(255,215,0,.15);padding:2px 7px;text-transform:uppercase">CAPSTONE ★</span>`:''}
            ${isKey?`<span style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:${tc};background:${tc}22;padding:2px 7px;text-transform:uppercase">PRIORITY</span>`:''}
            <span style="font-family:var(--font-mono);font-size:9px;color:var(--gray)">${tree.name} — max ${max} pt${max!==1?'s':''}</span>
          </div>
          <div style="font-family:var(--font-head);font-size:24px;color:${nameColor};letter-spacing:2px;line-height:1;margin-bottom:8px">${skill.name}</div>
          ${max>1?`<div style="display:flex;gap:4px;margin-bottom:10px;align-items:center">${Array.from({length:max}).map((_,i)=>`<div style="width:22px;height:6px;border:1px solid ${tc};background:${i<cur?tc:'transparent'};transition:background .15s"></div>`).join('')}<span style="font-size:11px;color:${tc};margin-left:6px;font-family:var(--font-mono)">${cur}/${max}</span></div>`:`<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><div style="width:20px;height:20px;border:2px solid ${isCap?'var(--yellow)':tc};background:${cur>0?(isCap?'rgba(255,215,0,.2)':tc+'33'):'transparent'};display:flex;align-items:center;justify-content:center;font-size:12px">${cur>0?'✓':''}</div><span style="font-size:11px;color:var(--gray);font-family:var(--font-mono)">${cur>0?'UNLOCKED':'NOT INVESTED'}</span></div>`}
          <div style="font-size:13px;color:var(--text-dim);line-height:1.7;margin-bottom:${skill.m10?'12px':'0'}">${skill.desc}</div>
          ${skill.m10?`<div style="border-left:3px solid ${isCap?'var(--yellow)':tc};background:${isCap?'rgba(255,215,0,.07)':tc+'0f'};padding:8px 12px;font-size:12px;line-height:1.6;color:var(--text)"><span style="font-family:var(--font-mono);font-size:10px;color:${isCap?'var(--yellow)':tc};letter-spacing:1px;display:block;margin-bottom:3px">M10 CONTEXT</span>${skill.m10}</div>`:''}
        </div>
      </div>`;
  }
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});
};

// ─── TAB SWITCH ───────────────────────────────────────────────
window.showSTChar = function(id) {
  ['moze','amara','flak','zane'].forEach(cid=>{
    const p=document.getElementById('stchar-'+cid);
    const t=document.getElementById('stctab-'+cid);
    if(p) p.style.display = cid===id?'block':'none';
    if(t){ t.style.background=cid===id?ST_CHAR_COLORS[cid]:'var(--bg-card)'; t.style.color=cid===id?'#000':'var(--gray)'; }
  });
};

// ─── UTIL ─────────────────────────────────────────────────────
function escQ(str){ return (str||'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/"/g,'&quot;'); }
