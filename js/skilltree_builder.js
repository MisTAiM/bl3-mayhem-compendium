/* ============================================================
   SKILL TREE BUILDER — Interactive Talent Tree for BL3 Compendium
   Appended to app.js; renders full visual talent trees
   ============================================================ */

function buildSkillTreesSection() {
  const sec = document.getElementById('section-skilltrees');
  if (!sec || sec.innerHTML.trim()) return;

  const charIds = ['moze','amara','flak','zane'];
  const charNames = { moze:'Moze', amara:'Amara', flak:'FL4K', zane:'Zane' };
  const charColors = { moze:'#E8272A', amara:'#9B59B6', flak:'#52C41A', zane:'#4A9BFF' };

  sec.innerHTML = `
    <div class="page-header">
      <div class="page-header-eyebrow">Designer\'s Cut Included</div>
      <h1>Skill Trees</h1>
      <p>All 4 trees per Vault Hunter — every skill, every augment, every capstone. Includes the purple 4th DLC trees from Designer\'s Cut. Click any skill node for full description and M10 context.</p>
    </div>
    <div class="content-body">
      <div style="display:flex;gap:0;border-bottom:3px solid var(--orange);margin-bottom:28px;overflow-x:auto" id="stchar-tabs">
        ${charIds.map(id=>`<button class="tab-btn${id==='moze'?' active':''}" style="${id==='moze'?'background:'+charColors[id]+';color:#000':''}" onclick="showSTChar('${id}')" id="stctab-${id}">${charNames[id]}</button>`).join('')}
      </div>
      ${charIds.map(id=>`<div id="stchar-${id}" style="display:${id==='moze'?'block':'none'}">${renderCharTrees(id)}</div>`).join('')}
    </div>
  `;
}

function renderCharTrees(charId) {
  const charData = SKILL_TREES[charId];
  if (!charData) return `<div style="color:var(--gray)">Data loading...</div>`;

  const charColors = { moze:'#E8272A', amara:'#9B59B6', flak:'#52C41A', zane:'#4A9BFF' };
  const color = charColors[charId];

  // Skill node detail panel
  const detailPanelId = `st-detail-${charId}`;

  const treesHTML = charData.trees.map((tree, treeIdx) => {
    const treeColor = tree.color;
    const isDlc = tree.dlc;

    // Action Skills row
    const asHTML = tree.actionSkills.map(as => `
      <div class="st-as-card" onclick="showSkillDetail('${charId}','${treeIdx}','as','${as.name.replace(/'/g,"\\'")}')">
        <div class="st-as-label">ACTION SKILL</div>
        <div class="st-as-name" style="color:${treeColor}">${as.name}</div>
        <div class="st-as-type">${as.type}</div>
        ${as.augments.length ? `<div class="st-aug-count">${as.augments.length} Augments</div>` : ''}
      </div>
    `).join('');

    // Tier rows
    const tiersHTML = tree.tiers.map((tier, tierIdx) => {
      const tierSkills = tier.skills || [];
      const cap = tier.capstone;

      const skillNodes = tierSkills.map((sk, skIdx) => {
        const isKey = sk.key;
        const hasM10 = sk.m10;
        return `<div class="st-skill-node${isKey?' st-key':''}" 
          style="${isKey?'border-color:'+treeColor+';':''}"
          onclick="showSkillDetail('${charId}','${treeIdx}','skill_${tierIdx}_${skIdx}','${sk.name.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')">
          <div class="st-skill-pts" style="color:${treeColor}">${sk.pts}pt</div>
          <div class="st-skill-name${isKey?' st-key-name':''}">${sk.name}</div>
          ${hasM10?`<div class="st-m10-dot" style="background:${treeColor}" title="Has M10 context"></div>`:''}
        </div>`;
      }).join('');

      const capHTML = cap ? `
        <div class="st-tier-row st-capstone-row">
          <div class="st-skill-node st-capstone" 
            style="border-color:${treeColor};background:${treeColor}18"
            onclick="showSkillDetail('${charId}','${treeIdx}','cap','${cap.name.replace(/'/g,"\\'")}')">
            <div class="st-skill-pts" style="color:var(--yellow)">CAPSTONE</div>
            <div class="st-skill-name" style="color:var(--yellow)">${cap.name} ★</div>
            ${cap.m10?`<div class="st-m10-dot" style="background:var(--yellow)"></div>`:''}
          </div>
        </div>` : '';

      if (!tierSkills.length) return capHTML;

      return `
        <div class="st-req-bar"><span class="st-req-label">${tier.req > 0 ? tier.req+' pts required in tree' : 'Tier 1 — No requirement'}</span></div>
        <div class="st-tier-row" style="grid-template-columns: repeat(${Math.min(tierSkills.length, 3)}, 1fr)">
          ${skillNodes}
        </div>
        ${capHTML}
      `;
    }).join('<div class="st-connector" style="background:'+treeColor+'33"></div>');

    return `
      <div class="st-tree-column">
        <div class="st-tree-header" style="background:${treeColor}18;border-color:${treeColor}">
          <div class="st-tree-name" style="color:${treeColor}">${tree.name}${isDlc?'<span class="st-dlc-badge">DLC</span>':''}</div>
          <div class="st-tree-focus">${tree.focus}</div>
          ${isDlc?`<div class="st-dlc-note">${tree.dlcName}</div>`:''}
        </div>
        <div class="st-as-row">${asHTML}</div>
        <div class="st-tiers">${tiersHTML}</div>
      </div>
    `;
  }).join('');

  return `
    <div style="font-size:13px;color:var(--text-dim);margin-bottom:16px;padding:8px 12px;border-left:3px solid ${color};background:${color}0a">${charData.note}</div>
    <div class="st-trees-grid">${treesHTML}</div>
    <div class="st-detail-panel" id="${detailPanelId}">
      <div style="font-size:13px;color:var(--text-dim)">Click any skill or action skill to see the full description and Mayhem 10 context.</div>
    </div>
  `;
}

window.showSTChar = function(id) {
  const colors = { moze:'#E8272A', amara:'#9B59B6', flak:'#52C41A', zane:'#4A9BFF' };
  ['moze','amara','flak','zane'].forEach(cid => {
    const panel = document.getElementById(`stchar-${cid}`);
    const tab = document.getElementById(`stctab-${cid}`);
    if (panel) panel.style.display = cid === id ? 'block' : 'none';
    if (tab) {
      tab.classList.toggle('active', cid === id);
      tab.style.background = cid === id ? colors[cid] : '';
      tab.style.color = cid === id ? '#000' : '';
    }
  });
};

window.showSkillDetail = function(charId, treeIdx, skillKey, skillName) {
  const charData = SKILL_TREES[charId];
  if (!charData) return;
  const tree = charData.trees[treeIdx];
  if (!tree) return;

  let skill = null;
  let isAS = false;

  if (skillKey === 'as') {
    skill = tree.actionSkills.find(a => a.name === skillName);
    isAS = true;
  } else if (skillKey === 'cap') {
    skill = tree.tiers.find(t => t.capstone && t.capstone.name === skillName)?.capstone;
  } else {
    const [, tierIdxStr, skIdxStr] = skillKey.split('_');
    const tier = tree.tiers[parseInt(tierIdxStr)];
    if (tier && tier.skills) skill = tier.skills[parseInt(skIdxStr)];
  }

  if (!skill) return;

  const panel = document.getElementById(`st-detail-${charId}`);
  if (!panel) return;

  const treeColor = tree.color;

  if (isAS) {
    const augHTML = skill.augments.map(aug => `
      <div style="display:flex;gap:10px;padding:8px 0;border-bottom:0.5px solid rgba(255,255,255,0.06)">
        <div style="font-family:var(--font-mono);font-size:10px;color:${treeColor};min-width:70px;text-transform:uppercase;letter-spacing:1px;padding-top:2px">Augment</div>
        <div>
          <div style="font-size:13px;font-weight:500;color:var(--white);margin-bottom:2px">${aug.name}</div>
          <div style="font-size:12px;color:var(--text-dim);line-height:1.5">${aug.desc}</div>
        </div>
      </div>
    `).join('');

    panel.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
        <span style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:${treeColor};text-transform:uppercase;background:${treeColor}22;padding:2px 6px">ACTION SKILL</span>
        <span style="font-family:var(--font-head);font-size:24px;color:${treeColor};letter-spacing:2px">${skill.name}</span>
        <span style="font-size:11px;color:var(--gray)">${skill.type}</span>
      </div>
      <div style="font-size:13px;color:var(--text-dim);line-height:1.6;margin-bottom:12px">${skill.desc}</div>
      ${skill.augments.length ? `<div style="font-family:var(--font-head);font-size:14px;color:var(--orange);letter-spacing:1px;margin-bottom:8px">AUGMENTS (equip up to 2)</div>${augHTML}` : ''}
    `;
  } else {
    const isKey = skill.key;
    const isCap = skillKey === 'cap';
    const nameColor = isCap ? 'var(--yellow)' : isKey ? treeColor : 'var(--white)';

    panel.innerHTML = `
      <div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:8px">
        <div>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:4px">
            ${isCap ? '<span style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--yellow);background:rgba(255,215,0,0.15);padding:2px 6px;text-transform:uppercase">CAPSTONE ★</span>' : ''}
            ${isKey ? '<span style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:'+treeColor+';background:'+treeColor+'22;padding:2px 6px;text-transform:uppercase">PRIORITY</span>' : ''}
            <span style="font-family:var(--font-mono);font-size:9px;color:var(--gray)">${tree.name} — ${skill.pts} point${skill.pts!==1?'s':''}</span>
          </div>
          <div style="font-family:var(--font-head);font-size:26px;color:${nameColor};letter-spacing:2px;line-height:1;margin-bottom:6px">${skill.name}</div>
          <div style="font-size:13px;color:var(--text-dim);line-height:1.7;margin-bottom:${skill.m10?'12px':'0'}">${skill.desc}</div>
          ${skill.m10 ? `
            <div style="border-left:3px solid ${treeColor};background:${treeColor}0f;padding:8px 12px;font-size:12px;line-height:1.6;color:var(--text)">
              <span style="font-family:var(--font-mono);font-size:10px;color:${treeColor};letter-spacing:1px;display:block;margin-bottom:3px">M10 CONTEXT</span>
              ${skill.m10}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }

  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};
