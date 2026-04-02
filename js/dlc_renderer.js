/* DLC RENDERER — no ternaries inside template literals */

function tierColor(t) {
  if (t === 'S') return 'var(--orange)';
  if (t === 'A') return 'var(--yellow)';
  if (t === 'B') return 'var(--blue)';
  return 'var(--gray)';
}

function buildDLCSection() {
  var sec = document.getElementById('section-dlc');
  if (!sec || sec.innerHTML.trim()) return;
  var dlc1to4 = DLC_DATA.dlcs.slice(0, 4);
  var dlc5to6 = DLC_DATA.dlcs.slice(4);
  sec.innerHTML =
    '<div class="page-header">' +
    '<div class="page-header-eyebrow">6 DLCs &middot; 2 Season Passes &middot; All Free Content</div>' +
    '<h1>DLC Content Guide</h1>' +
    '<p>Every paid DLC, free Takedown, Proving Ground, Circle of Slaughter, and seasonal event — boss farm tips, drop lists, recommended play order.</p>' +
    '</div>' +
    '<div class="content-body">' +
    '<div class="grid-2 mb-32" style="gap:16px">' + seasonPassCard(DLC_DATA.season1) + seasonPassCard(DLC_DATA.season2) + '</div>' +
    '<div style="display:flex;gap:0;border-bottom:3px solid var(--orange);margin-bottom:28px" id="dlc-tabs">' +
    '<button class="tab-btn active" style="background:var(--orange);color:#000" onclick="showDLCTab(\'season1\',this)">Season Pass 1</button>' +
    '<button class="tab-btn" onclick="showDLCTab(\'season2\',this)">Season Pass 2</button>' +
    '<button class="tab-btn" onclick="showDLCTab(\'free\',this)">Free Content</button>' +
    '</div>' +
    '<div id="dlctab-season1">' + dlc1to4.map(dlcCard).join('') + '</div>' +
    '<div id="dlctab-season2" style="display:none">' + dlc5to6.map(dlcCard).join('') + '</div>' +
    '<div id="dlctab-free" style="display:none">' + freeContentHTML() + '</div>' +
    '</div>';
}

function seasonPassCard(sp) {
  var itemList = sp.includes.map(function(i) {
    return '<div style="font-size:12px;color:var(--text-dim);padding:3px 0;border-bottom:.5px solid rgba(255,255,255,0.05)">&#10003; ' + i + '</div>';
  }).join('');
  return '<div class="card" style="border-color:' + sp.color + '44">' +
    '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">' +
    '<div style="font-family:var(--font-head);font-size:24px;color:' + sp.color + ';letter-spacing:2px">' + sp.name + '</div>' +
    '<div style="font-family:var(--font-head);font-size:20px;color:var(--orange);margin-left:auto">' + sp.price + '</div>' +
    '</div>' + itemList +
    '<div style="font-size:12px;color:var(--gray);margin-top:10px;line-height:1.6;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">' + sp.value + '</div>' +
    '</div>';
}

function dlcCard(d) {
  var bossArr = d.bosses || d.armsRaceBosses || [];
  var bossRows = bossArr.map(function(b) {
    return '<div style="padding:10px 14px;border-bottom:.5px solid rgba(255,255,255,0.06)">' +
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">' +
      '<div style="font-family:var(--font-head);font-size:16px;letter-spacing:1px;color:var(--white)">' + b.name + '</div>' +
      '<div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">' + b.location + '</div>' +
      '</div>' +
      '<div style="font-size:12px;color:var(--orange);margin-bottom:4px">' + b.drops.join(' &middot; ') + '</div>' +
      '<div style="font-size:11px;color:var(--text-dim);line-height:1.5">' + b.tip + '</div>' +
      '</div>';
  }).join('');

  var weaponRows = (d.legendaryWeapons || []).map(function(w) {
    var tc = tierColor(w.tier);
    return '<div style="display:grid;grid-template-columns:28px 1fr 1fr;gap:10px;align-items:start;padding:8px 0;border-bottom:.5px solid rgba(255,255,255,0.05)">' +
      '<div style="font-family:var(--font-head);font-size:18px;color:' + tc + '">' + w.tier + '</div>' +
      '<div><div style="font-size:13px;font-weight:600;color:var(--white)">' + w.name + '</div>' +
      '<div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-bottom:3px">' + w.type + '</div>' +
      '<div style="font-size:11px;color:var(--text-dim);line-height:1.5">' + w.special + '</div></div>' +
      '<div style="font-size:10px;color:var(--gray);font-family:var(--font-mono);line-height:1.5">' + w.farm + '</div>' +
      '</div>';
  }).join('');

  var modRows = (d.legendaryMods || []).map(function(m) {
    var mt = tierColor(m.tier);
    return '<div style="padding:8px 0;border-bottom:.5px solid rgba(255,255,255,0.05)">' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:3px">' +
      '<span style="font-size:13px;font-weight:600;color:var(--orange)">' + m.name + '</span>' +
      '<span style="font-family:var(--font-mono);font-size:9px;border:1px solid ' + mt + ';padding:1px 5px;color:' + mt + '">' + m.tier + '</span>' +
      '<span style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">' + m.char + '</span>' +
      '</div>' +
      '<div style="font-size:11px;color:var(--text-dim);line-height:1.5;margin-bottom:3px">' + m.effect + '</div>' +
      '<div style="font-size:11px;color:var(--green);line-height:1.5">' + m.why + '</div>' +
      '</div>';
  }).join('');

  var features = (d.keyFeatures || []).map(function(f) {
    return '<div style="display:flex;gap:8px;padding:5px 0;border-bottom:.5px solid rgba(255,255,255,0.05)">' +
      '<span style="color:' + d.color + ';flex-shrink:0">&#9670;</span>' +
      '<span style="font-size:12px;color:var(--text-dim);line-height:1.5">' + f + '</span></div>';
  }).join('');

  var tips = (d.tips || []).map(function(t) {
    return '<div style="display:flex;gap:8px;margin-bottom:6px">' +
      '<span style="color:' + d.color + ';font-size:14px;flex-shrink:0">&#x203A;</span>' +
      '<span style="font-size:12px;color:var(--text-dim);line-height:1.6">' + t + '</span></div>';
  }).join('');

  var treesHTML = '';
  if (d.newTrees) {
    var treeItems = d.newTrees.map(function(t) {
      return '<div style="padding:10px;border:1px solid ' + d.color + '33;background:' + d.color + '06">' +
        '<div style="font-family:var(--font-head);font-size:16px;color:' + d.color + ';margin-bottom:2px">' + t.char + ' &mdash; ' + t.tree + '</div>' +
        '<div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-bottom:6px">AS: ' + t.as + '</div>' +
        '<div style="font-size:11px;color:var(--text-dim);line-height:1.5;margin-bottom:4px"><strong style="color:var(--yellow)">Capstone:</strong> ' + t.capstone + '</div>' +
        '<div style="font-size:11px;color:var(--green);line-height:1.5"><strong>Key:</strong> ' + t.highlight + '</div></div>';
    }).join('');
    treesHTML = '<div style="margin-top:16px">' +
      '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:10px">NEW 4TH SKILL TREES</div>' +
      '<div class="grid-2" style="gap:10px">' + treeItems + '</div></div>';
  }

  var vaultHTML = '';
  if (d.vaultCards) {
    var vcItems = d.vaultCards.map(function(vc) {
      return '<div style="padding:8px 12px;border-left:3px solid ' + d.color + ';background:' + d.color + '06;margin-bottom:6px">' +
        '<div style="font-family:var(--font-head);font-size:16px;color:' + d.color + '">Vault Card ' + vc.num + ': ' + vc.name + '</div>' +
        '<div style="font-size:11px;color:var(--text-dim);margin:3px 0">' + vc.theme + '</div>' +
        '<div style="font-size:11px;color:var(--orange)">' + vc.keyReward + '</div></div>';
    }).join('');
    vaultHTML = '<div style="margin-top:16px">' +
      '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:10px">VAULT CARDS (3 TOTAL)</div>' +
      vcItems +
      '<div style="font-size:11px;color:var(--gray);margin-top:6px">3 Daily Challenges per active card (9 total with all 3). 1 Weekly each. Diamond Keys unlock the Diamond Armory.</div>' +
      '</div>';
  }

  var armsRaceHTML = '';
  if (d.armsRaceBosses) {
    var arBosses = d.armsRaceBosses.map(function(b) {
      return '<div style="padding:8px 12px;border-left:3px solid ' + d.color + ';background:' + d.color + '06;margin-bottom:6px">' +
        '<div style="font-weight:600;color:var(--white);margin-bottom:2px">' + b.name + '</div>' +
        '<div style="font-size:11px;color:var(--orange);margin-bottom:3px">' + b.drops.join(' &middot; ') + '</div>' +
        '<div style="font-size:11px;color:var(--text-dim)">' + b.tip + '</div></div>';
    }).join('');
    armsRaceHTML = '<div style="margin-top:12px">' +
      '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:8px">ARMS RACE BOSS TARGETS</div>' +
      arBosses + '</div>';
  }

  var storyLen = d.length.story || d.length.armsRace || '';
  var compLen  = d.length.completionist || d.length.newContent || '';

  var weaponsSection = '';
  if (d.legendaryWeapons && d.legendaryWeapons.length) {
    weaponsSection = '<div style="border-bottom:1px solid rgba(255,255,255,0.06)">' +
      '<div style="padding:10px 24px;background:rgba(255,255,255,0.03);border-bottom:1px solid rgba(255,255,255,0.06)">' +
      '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange)">LEGENDARY WEAPONS &mdash; S=BiS A=Strong B=Situational</div>' +
      '</div><div style="padding:8px 24px">' + weaponRows + '</div></div>';
  }

  var modsSection = '';
  if (d.legendaryMods && d.legendaryMods.length) {
    modsSection = '<div><div style="padding:10px 24px;background:rgba(255,255,255,0.03);border-bottom:1px solid rgba(255,255,255,0.06)">' +
      '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange)">NEW CLASS MODS</div>' +
      '</div><div style="padding:8px 24px">' + modRows + '</div></div>';
  }

  return '<div class="card mb-20" style="border-color:' + d.color + '44;padding:0;overflow:hidden">' +
    '<div style="padding:20px 24px;background:' + d.color + '12;border-bottom:2px solid ' + d.color + '44">' +
    '<div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">' +
    '<div>' +
    '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:' + d.color + ';margin-bottom:4px">DLC ' + d.num + ' &mdash; Season Pass ' + d.seasonPass + ' &mdash; ' + d.released + '</div>' +
    '<div style="font-family:var(--font-head);font-size:32px;letter-spacing:2px;color:var(--white);text-shadow:2px 2px 0 #000">' + d.name + '</div>' +
    '<div style="font-size:13px;color:' + d.color + ';margin-top:2px">' + d.planet + ' &middot; ' + d.theme + '</div>' +
    '</div>' +
    '<div style="text-align:right">' +
    '<div style="font-size:20px">' + d.rating + '</div>' +
    '<div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">Story: ' + storyLen + ' &middot; Completionist: ' + compLen + '</div>' +
    '<div style="font-family:var(--font-mono);font-size:10px;color:var(--orange)">Req: Level ' + d.levelReq + '</div>' +
    '</div></div>' +
    '<div style="font-size:13px;color:var(--text-dim);line-height:1.7;margin-top:12px">' + d.story + '</div>' +
    '</div>' +
    '<div style="padding:16px 24px;border-bottom:1px solid rgba(255,255,255,0.06)">' +
    '<div class="grid-2" style="gap:20px">' +
    '<div><div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:8px">KEY FEATURES</div>' +
    features + treesHTML + armsRaceHTML + vaultHTML + '</div>' +
    '<div><div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange);margin-bottom:8px">TIPS &amp; STRATEGY</div>' +
    tips + '</div></div></div>' +
    '<div style="border-bottom:1px solid rgba(255,255,255,0.06)">' +
    '<div style="padding:10px 24px;background:rgba(255,255,255,0.03);border-bottom:1px solid rgba(255,255,255,0.06)">' +
    '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:2px;color:var(--orange)">BOSSES &amp; FARM TARGETS</div>' +
    '</div>' + bossRows + '</div>' +
    weaponsSection + modsSection +
    '</div>';
}

function freeContentHTML() {
  var fc = DLC_DATA.freeContent;

  var takedownCards = fc.takedowns.map(function(t) {
    var bosses = t.bosses.map(function(b) {
      return '<div style="padding:8px 12px;border-left:3px solid #52C41A;background:rgba(82,196,26,0.06);margin-bottom:6px">' +
        '<div style="font-weight:600;color:var(--white);margin-bottom:2px">' + b.name + '</div>' +
        '<div style="font-size:11px;color:var(--orange);margin-bottom:3px">' + b.drops.join(' &middot; ') + '</div>' +
        '<div style="font-size:11px;color:var(--text-dim)">' + b.tip + '</div></div>';
    }).join('');
    var tips2 = t.tips.map(function(tip) {
      return '<div style="display:flex;gap:8px;margin-top:6px"><span style="color:#52C41A">&#x203A;</span>' +
        '<span style="font-size:12px;color:var(--text-dim);line-height:1.5">' + tip + '</span></div>';
    }).join('');
    return '<div class="card mb-16" style="border-color:#52C41A33">' +
      '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">' +
      '<div><div style="font-family:var(--font-head);font-size:22px;letter-spacing:2px;color:#52C41A">' + t.name + '</div>' +
      '<div style="font-family:var(--font-mono);font-size:10px;color:var(--gray)">' + t.location + ' &middot; ' + t.released + ' &middot; FREE</div>' +
      '</div><div style="font-size:18px">' + t.difficulty + '</div></div>' +
      '<div style="font-size:13px;color:var(--text-dim);line-height:1.7;margin-bottom:12px">' + t.description + '</div>' +
      '<div style="font-family:var(--font-mono);font-size:11px;color:var(--orange);margin-bottom:8px">KEY DROPS: ' + t.keyDrops + '</div>' +
      bosses + tips2 + '</div>';
  }).join('');

  var trialRows = fc.provingGrounds.trials.map(function(t) {
    return '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding:8px 0;border-bottom:.5px solid rgba(255,255,255,0.06)">' +
      '<div style="font-size:12px;font-weight:600;color:var(--white)">' + t.name + '</div>' +
      '<div style="font-size:11px;color:var(--gray)">' + t.location + '<br><span style="color:var(--text-dim)">' + t.boss + '</span></div>' +
      '<div style="font-size:11px;color:var(--orange)">' + t.trueDrops + '</div></div>';
  }).join('');

  var slaughterCards = fc.circlesOfSlaughter.map(function(s) {
    return '<div style="padding:10px 14px;border-left:3px solid var(--red);background:rgba(232,39,42,0.06);margin-bottom:6px">' +
      '<div style="font-weight:600;color:var(--white);margin-bottom:2px">' + s.name + '</div>' +
      '<div style="font-family:var(--font-mono);font-size:10px;color:var(--gray);margin-bottom:4px">' + s.location + '</div>' +
      '<div style="font-size:12px;color:var(--text-dim);line-height:1.5;margin-bottom:3px">' + s.desc + '</div>' +
      '<div style="font-size:11px;color:var(--orange)">' + s.tip + '</div></div>';
  }).join('');

  var eventCards = fc.seasonalEvents.map(function(e) {
    return '<div class="card">' +
      '<div style="font-family:var(--font-head);font-size:18px;color:var(--orange);margin-bottom:2px">' + e.name + '</div>' +
      '<div style="font-family:var(--font-mono);font-size:9px;color:var(--gray);margin-bottom:6px">' + e.type + ' &middot; ' + e.when + '</div>' +
      '<div style="font-size:12px;color:var(--text-dim);line-height:1.5;margin-bottom:6px">' + e.desc + '</div>' +
      '<div style="font-size:11px;color:var(--orange)">Key loot: ' + e.keyLoot + '</div></div>';
  }).join('');

  return '<div class="section-title mb-8">Takedowns &mdash; Raid-Level Free Content</div>' +
    '<div class="section-desc mb-16">Free for all players. Toggle "True Takedown Mode" off for solo play.</div>' +
    takedownCards +
    '<div class="divider"></div>' +
    '<div class="section-title mb-8">Proving Grounds</div>' +
    '<div class="section-desc mb-16">6 timed trials. Final chest always drops legendaries. Enable True Trials at entrance for best loot.</div>' +
    '<div class="card mb-24"><div style="font-size:12px;color:var(--text-dim);margin-bottom:12px">' + fc.provingGrounds.description + '</div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(245,166,35,0.3)">' +
    '<div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--orange)">TRIAL</div>' +
    '<div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--orange)">LOCATION / BOSS</div>' +
    '<div style="font-family:var(--font-mono);font-size:9px;letter-spacing:2px;color:var(--orange)">TRUE TRIALS DROPS</div>' +
    '</div>' + trialRows +
    '<div style="font-size:11px;color:var(--orange);margin-top:10px">' + fc.provingGrounds.tip + '</div></div>' +
    '<div class="divider"></div>' +
    '<div class="section-title mb-8">Circles of Slaughter</div>' +
    '<div class="section-desc mb-16">Wave-based arenas &mdash; world drops, XP, and Eridium.</div>' +
    '<div class="mb-24">' + slaughterCards + '</div>' +
    '<div class="divider"></div>' +
    '<div class="section-title mb-8">Seasonal Events</div>' +
    '<div class="section-desc mb-16">Toggle from the main menu. Active events inject enemies and loot into all content.</div>' +
    '<div class="grid-2" style="gap:12px">' + eventCards + '</div>';
}

window.showDLCTab = function(id, btn) {
  ['season1', 'season2', 'free'].forEach(function(t) {
    var el = document.getElementById('dlctab-' + t);
    if (el) el.style.display = (t === id) ? 'block' : 'none';
  });
  document.querySelectorAll('#dlc-tabs .tab-btn').forEach(function(b) {
    b.classList.remove('active');
    b.style.background = '';
    b.style.color = '';
  });
  if (btn) { btn.classList.add('active'); btn.style.background = 'var(--orange)'; btn.style.color = '#000'; }
};
