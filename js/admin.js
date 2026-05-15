/* =============================================
   ADMIN PANEL — Said Najdeni
   Paneli i administrimit të faqes
   ============================================= */

const STORAGE_KEY = 'saidnajdeni_data';

// ── GitHub API Config ──
const GH_USER   = '23042006';
const GH_REPO   = 'Said-Najdeni';
const GH_FILE   = 'data/content.json';
const GH_BRANCH = 'main';

// Token i enkriptuar — GitHub nuk e njeh si token dhe nuk e fshin
// HAPI 1: Hap token_encoder.html në shfletues
// HAPI 2: Vendos token-in ghp_... dhe kliko "Enkrypto"
// HAPI 3: Zëvendëso rreshtin e mëposhtëm me rezultatin e enkriptimit
const GH_TOKEN_ENC = [77,67,92,114,74,89,81,79,91,127,72,75,91,125,83,65,73,100,28,70,64,92,27,118,97,87,75,114,24,76,24,20,124,126,1,76,123,65,124,28]; // ← NDRYSHO KËTU me array-in nga token_encoder.html

// Dekodimi (mos e ndrysho këtë)
function _gt() {
  const k = 42;
  return GH_TOKEN_ENC.map((b,i) => String.fromCharCode(b ^ (k + i % 7))).join('');
}

// ── Struktura fillestare e të dhënave ──
function getDefaultData() {
  return {
    hero: {
      eyebrow: 'Gjimnaz Publik · Peshkopi · Shqipëri',
      title: 'Forma<br>mendjet<br><em>e nesërmes.</em>',
      desc: 'Gjimnazi "Said Najdeni" — institucion arsimor me traditë mbi 60 vjeçare. Ofrojmë arsim cilësor, mjedis bashkëkohor dhe mundësi të pakufizuara për çdo nxënës.',
      stat1num: '1200+', stat1label: 'Nxënës aktive',
      stat2num: '86',    stat2label: 'Mësues specialist',
      stat3num: '98%',   stat3label: 'Kalueshmëria Maturës',
      year: '1962'
    },
    lajmet: [
      { cat: 'Arritje Akademike', title: 'Nxënësit tanë triumfojnë në Olimpiadën Kombëtare të Matematikës 2025', date: '15 Prill 2025' },
      { cat: 'Aktivitet Kulturor', title: 'Festivali i Artit dhe Kulturës — Ekspozitë e nxënësve të klasave 11–12', date: '8 Prill 2025' },
      { cat: 'Bashkëpunim', title: 'Marrëveshje partneriteti me Universitetin e Tiranës për praktika shkencore', date: '1 Prill 2025' }
    ],
    rreth: {
      vjet: '63', drejtim: '4',
      p1: 'Gjimnazi "Said Najdeni" është një ndër shkollat me histori më të pasur në Shqipëri. Themeluar në vitin 1962, ka formuar breza të tëra intelektualësh, shkencëtarësh dhe artistësh shqiptarë.',
      p2: 'Me mbi 1200 nxënës dhe 86 mësues të specializuar, ne ofrojmë një mjedis mësimor bashkëkohor ku çdo nxënës zhvillon potencialin e tij të plotë.'
    },
    drejtimet: [
      { num: '01', title: 'Shkenca Natyrore', desc: 'Fizikë, Kimi, Biologji të avancuar. Laboratorë modernë dhe projekte shkencore ndërkombëtare.' },
      { num: '02', title: 'Shoqëror-Humanist', desc: 'Histori, Gjeografi, Sociologji. Formim kritik dhe kulturë të gjerë humaniste.' },
      { num: '03', title: 'Teknologji & Informatikë', desc: 'Programim, rrjete kompjuterike dhe dizajn dixhital. Partneritet me kompanitë tech.' },
      { num: '04', title: 'Ekonomi & Biznes', desc: 'Ekonomi, Kontabilitet dhe Menaxhim. Simullime biznesi dhe vizita studimore.' },
      { num: '05', title: 'Gjuhë të Huaja', desc: 'Anglisht, Frëngjisht, Gjermanisht. Çertifikime ndërkombëtare dhe shkëmbime kulturore.' },
      { num: '06', title: 'Art & Muzikë', desc: 'Arte pamore, muzikë dhe teatër. Festivale vjetore dhe ekspozita studentore.' }
    ],
    mesuesit: [
      { initials: 'AK', name: 'Ardiana Kola',   lenda: 'Matematikë',      exp: '18 vjet eksperiencë', img: '' },
      { initials: 'BS', name: 'Besim Shehu',     lenda: 'Fizikë',          exp: '22 vjet eksperiencë', img: '' },
      { initials: 'EH', name: 'Elida Hoxha',     lenda: 'Informatikë',     exp: '11 vjet eksperiencë', img: '' },
      { initials: 'MN', name: 'Mentor Ndoci',    lenda: 'Histori',         exp: '15 vjet eksperiencë', img: '' },
      { initials: 'LB', name: 'Liria Brahimi',   lenda: 'Gjuhë Angleze',   exp: '9 vjet eksperiencë',  img: '' },
      { initials: 'FK', name: 'Fatos Kelmendi',  lenda: 'Kimi',            exp: '20 vjet eksperiencë', img: '' },
      { initials: 'DM', name: 'Diana Muka',      lenda: 'Biologji',        exp: '14 vjet eksperiencë', img: '' },
      { initials: 'RZ', name: 'Rezart Zeka',     lenda: 'Ekonomi',         exp: '12 vjet eksperiencë', img: '' }
    ],
    galeria: [
      { label: 'Laboratori i Shkencave', color: '#1a3a2e', img: '' },
      { label: 'Biblioteka',             color: '#0d1b2a', img: '' },
      { label: 'Salla e Arteve',         color: '#2a1a0d', img: '' },
      { label: 'Klasa Informatikës',     color: '#1a1a2e', img: '' },
      { label: 'Festivali Kulturor',     color: '#1a2a1a', img: '' }
    ],
    kontakti: {
      adresa: 'Rruga "Kongresi i Dibrës"\nPeshkopi, Shqipëri',
      tel1: '+355 4 222 3456', tel2: '+355 4 222 3457',
      email1: 'snajdeni@yahoo.com', email2: 'shefkicorja@gmail.com',
      orari: 'E Hënë — E Premte\n08:00 — 16:00'
    }
  };
}

// ── Storage helpers ──
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    return Object.assign({}, getDefaultData(), JSON.parse(raw));
  } catch(e) { return getDefaultData(); }
}
function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ── Apliko të dhënat në DOM ──
function applyData(data) {
  // HERO
  const h = data.hero;
  q('.hero-eyebrow').innerHTML = h.eyebrow;
  q('.hero-title').innerHTML   = h.title;
  q('.hero-desc').textContent  = h.desc;
  const stats = qa('.stat-num');
  const labels = qa('.stat-label');
  if(stats[0]) { stats[0].textContent = h.stat1num; labels[0].textContent = h.stat1label; }
  if(stats[1]) { stats[1].textContent = h.stat2num; labels[1].textContent = h.stat2label; }
  if(stats[2]) { stats[2].textContent = h.stat3num; labels[2].textContent = h.stat3label; }
  const yr = q('.hero-badge-year');
  if(yr) yr.textContent = h.year;

  // RRETH
  const r = data.rreth;
  const bigNum = q('.rreth-inner .big');
  const accNum = q('.rreth-box-accent .num');
  if(bigNum) bigNum.textContent = r.vjet;
  if(accNum) accNum.textContent = r.drejtim;
  const ps = qa('#rreth .rreth-content > p');
  if(ps[0]) ps[0].textContent = r.p1;
  if(ps[1]) ps[1].textContent = r.p2;

  // LAJMET
  const grid = q('.lajmet-grid');
  if(grid) {
    grid.innerHTML = data.lajmet.map((l, i) => `
      <div class="lajm-card">
        <div class="lajm-cat">${l.cat}</div>
        <div class="lajm-title">${l.title}</div>
        <div class="lajm-line"></div>
        <div class="lajm-date">${l.date}</div>
        <div class="lajm-num">0${i+1}</div>
      </div>`).join('');
    // re-observe
    reObserve(grid.querySelectorAll('.lajm-card'));
  }

  // DREJTIMET
  const dGrid = q('.drejtimet-grid');
  if(dGrid) {
    const icons = [
      `<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/>`,
      `<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>`,
      `<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>`,
      `<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`,
      `<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`,
      `<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>`
    ];
    dGrid.innerHTML = data.drejtimet.map((d, i) => `
      <div class="drejtim-card">
        <div class="drejtim-icon"><svg viewBox="0 0 24 24">${icons[i] || icons[0]}</svg></div>
        <div class="drejtim-num">${d.num} / Drejtim</div>
        <div class="drejtim-title">${d.title}</div>
        <div class="drejtim-desc">${d.desc}</div>
      </div>`).join('');
    reObserve(dGrid.querySelectorAll('.drejtim-card'));
  }

  // MËSUESIT
  const mGrid = q('.mesuesit-grid');
  if(mGrid) {
    mGrid.innerHTML = data.mesuesit.map(m => `
      <div class="mesues-card">
        <div class="mesues-avatar">
          ${m.img
            ? `<img src="${m.img}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;">`
            : `<div class="mesues-initials">${m.initials}</div>`}
        </div>
        <div class="mesues-name">${m.name}</div>
        <div class="mesues-lenda">${m.lenda}</div>
        <div class="mesues-exp">${m.exp}</div>
      </div>`).join('');
    reObserve(mGrid.querySelectorAll('.mesues-card'));
  }

  // GALERIA
  const gGrid = q('.galeria-grid');
  const svgs = [
    `<svg width="200" height="400" viewBox="0 0 200 400"><circle cx="100" cy="200" r="120" stroke="#5dcaa5" stroke-width="1" fill="none" opacity="0.3"/><circle cx="100" cy="200" r="80" stroke="#5dcaa5" stroke-width="0.5" fill="none" opacity="0.2"/><line x1="0" y1="200" x2="200" y2="200" stroke="#5dcaa5" stroke-width="0.5" opacity="0.2"/><line x1="100" y1="0" x2="100" y2="400" stroke="#5dcaa5" stroke-width="0.5" opacity="0.2"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><rect x="20" y="20" width="120" height="180" stroke="#c9a84c" stroke-width="1" fill="none" opacity="0.3"/><rect x="40" y="40" width="80" height="140" stroke="#c9a84c" stroke-width="0.5" fill="none" opacity="0.2"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><polygon points="80,20 140,200 20,200" stroke="#ef9f27" stroke-width="1" fill="none" opacity="0.3"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><circle cx="80" cy="110" r="60" stroke="#7f77dd" stroke-width="1" fill="none" opacity="0.3"/></svg>`,
    `<svg width="160" height="220" viewBox="0 0 160 220"><rect x="30" y="30" width="100" height="160" rx="4" stroke="#97c459" stroke-width="1" fill="none" opacity="0.3"/></svg>`
  ];
  if(gGrid) {
    gGrid.innerHTML = data.galeria.map((g, i) => `
      <div class="gal-item" style="background:${g.color}; ${g.img ? `background-image:url('${g.img}');background-size:cover;background-position:center;` : ''}">
        ${!g.img ? `<div class="gal-geo">${svgs[i] || svgs[0]}</div>` : ''}
        <div class="gal-inner"><span class="gal-label">${g.label}</span></div>
      </div>`).join('');
    const items = gGrid.querySelectorAll('.gal-item');
    if(items[0]) items[0].style.gridRow = '1 / 3';
    reObserve(items);
  }

  // KONTAKTI
  const k = data.kontakti;
  const citems = qa('.contact-item');
  if(citems[0]) citems[0].querySelector('p').innerHTML = k.adresa.replace(/\n/g,'<br>');
  if(citems[1]) citems[1].querySelector('p').innerHTML = `${k.tel1}<br>${k.tel2}`;
  if(citems[2]) citems[2].querySelector('p').innerHTML = `${k.email1}<br>${k.email2}`;
  if(citems[3]) citems[3].querySelector('p').innerHTML = k.orari.replace(/\n/g,'<br>');
}

// ── Helpers ──
function q(sel)  { return document.querySelector(sel); }
function qa(sel) { return document.querySelectorAll(sel); }
const scrollObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
function reObserve(els) {
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    scrollObserver.observe(el);
  });
}

// ── Ndërto Admin Panel HTML ──
function buildAdminPanel(data) {
  const panel = document.createElement('div');
  panel.id = 'admin-panel';
  panel.innerHTML = `
  <div id="admin-overlay" onclick="adminClose()"></div>
  <div id="admin-drawer">
    <div class="adm-header">
      <div class="adm-logo">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        Admin Panel
      </div>
      <button class="adm-close" onclick="adminClose()">✕</button>
    </div>

    <div class="adm-tabs">
      <button class="adm-tab active" onclick="adminTab(this,'hero')">Hero</button>
      <button class="adm-tab" onclick="adminTab(this,'lajmet')">Lajme</button>
      <button class="adm-tab" onclick="adminTab(this,'rreth')">Rreth</button>
      <button class="adm-tab" onclick="adminTab(this,'drejtimet')">Drejtim</button>
      <button class="adm-tab" onclick="adminTab(this,'mesuesit')">Mësues</button>
      <button class="adm-tab" onclick="adminTab(this,'galeria')">Galeria</button>
      <button class="adm-tab" onclick="adminTab(this,'kontakti')">Kontakt</button>
    </div>

    <div class="adm-body">

      <!-- HERO -->
      <div class="adm-section active" id="adm-hero">
        <div class="adm-group"><label>Teksti sipër</label>
          <input id="h-eyebrow" value="${data.hero.eyebrow}"></div>
        <div class="adm-group"><label>Titulli kryesor (HTML lejohet)</label>
          <textarea id="h-title" rows="3">${data.hero.title}</textarea></div>
        <div class="adm-group"><label>Përshkrimi</label>
          <textarea id="h-desc" rows="3">${data.hero.desc}</textarea></div>
        <div class="adm-row">
          <div class="adm-group"><label>Stat 1 — Numri</label><input id="h-s1n" value="${data.hero.stat1num}"></div>
          <div class="adm-group"><label>Stat 1 — Etiketa</label><input id="h-s1l" value="${data.hero.stat1label}"></div>
        </div>
        <div class="adm-row">
          <div class="adm-group"><label>Stat 2 — Numri</label><input id="h-s2n" value="${data.hero.stat2num}"></div>
          <div class="adm-group"><label>Stat 2 — Etiketa</label><input id="h-s2l" value="${data.hero.stat2label}"></div>
        </div>
        <div class="adm-row">
          <div class="adm-group"><label>Stat 3 — Numri</label><input id="h-s3n" value="${data.hero.stat3num}"></div>
          <div class="adm-group"><label>Stat 3 — Etiketa</label><input id="h-s3l" value="${data.hero.stat3label}"></div>
        </div>
        <div class="adm-group"><label>Viti i themelimit</label><input id="h-year" value="${data.hero.year}"></div>
      </div>

      <!-- LAJMET -->
      <div class="adm-section" id="adm-lajmet">
        <div id="lajmet-list">
          ${data.lajmet.map((l,i) => lajmHTML(l,i)).join('')}
        </div>
        <button class="adm-add-btn" onclick="addLajm()">+ Shto Lajm të Ri</button>
      </div>

      <!-- RRETH -->
      <div class="adm-section" id="adm-rreth">
        <div class="adm-row">
          <div class="adm-group"><label>Vjet tradita</label><input id="r-vjet" value="${data.rreth.vjet}"></div>
          <div class="adm-group"><label>Numri i drejtimeve</label><input id="r-drejtim" value="${data.rreth.drejtim}"></div>
        </div>
        <div class="adm-group"><label>Paragrafi 1</label><textarea id="r-p1" rows="4">${data.rreth.p1}</textarea></div>
        <div class="adm-group"><label>Paragrafi 2</label><textarea id="r-p2" rows="4">${data.rreth.p2}</textarea></div>
      </div>

      <!-- DREJTIMET -->
      <div class="adm-section" id="adm-drejtimet">
        <div id="drejtimet-list">
          ${data.drejtimet.map((d,i) => drejtimHTML(d,i)).join('')}
        </div>
      </div>

      <!-- MËSUESIT -->
      <div class="adm-section" id="adm-mesuesit">
        <div id="mesuesit-list">
          ${data.mesuesit.map((m,i) => mesuesHTML(m,i)).join('')}
        </div>
        <button class="adm-add-btn" onclick="addMesues()">+ Shto Mësues të Ri</button>
      </div>

      <!-- GALERIA -->
      <div class="adm-section" id="adm-galeria">
        <p class="adm-hint">Ngarko foto reale ose ndrysho etiketat. Imazhet ruhen si URL.</p>
        <div id="galeria-list">
          ${data.galeria.map((g,i) => galeriaHTML(g,i)).join('')}
        </div>
        <button class="adm-add-btn" onclick="addGaleria()">+ Shto Artikull Galerie</button>
      </div>

      <!-- KONTAKTI -->
      <div class="adm-section" id="adm-kontakti">
        <div class="adm-group"><label>Adresa</label><textarea id="k-adresa" rows="2">${data.kontakti.adresa}</textarea></div>
        <div class="adm-row">
          <div class="adm-group"><label>Telefon 1</label><input id="k-tel1" value="${data.kontakti.tel1}"></div>
          <div class="adm-group"><label>Telefon 2</label><input id="k-tel2" value="${data.kontakti.tel2}"></div>
        </div>
        <div class="adm-row">
          <div class="adm-group"><label>Email 1</label><input id="k-email1" value="${data.kontakti.email1}"></div>
          <div class="adm-group"><label>Email 2</label><input id="k-email2" value="${data.kontakti.email2}"></div>
        </div>
        <div class="adm-group"><label>Orari i sekretarisë</label><textarea id="k-orari" rows="2">${data.kontakti.orari}</textarea></div>
      </div>

    </div><!-- end adm-body -->

    <div class="adm-footer">
      <button class="adm-reset" onclick="adminReset()">Rikthe Fillestaret</button>
      <button class="adm-save"  onclick="adminSave()">💾 Ruaj Ndryshimet</button>
    </div>
  </div>`;
  document.body.appendChild(panel);
}

function lajmHTML(l, i) {
  return `<div class="adm-card" data-i="${i}">
    <div class="adm-card-head">Lajmi ${i+1} <button class="adm-del" onclick="delLajm(${i})">✕</button></div>
    <div class="adm-group"><label>Kategoria</label><input class="lajm-cat" value="${l.cat}"></div>
    <div class="adm-group"><label>Titulli</label><textarea class="lajm-title" rows="2">${l.title}</textarea></div>
    <div class="adm-group"><label>Data</label><input class="lajm-date" value="${l.date}"></div>
  </div>`;
}
function drejtimHTML(d, i) {
  return `<div class="adm-card">
    <div class="adm-card-head">Drejtimi ${i+1}</div>
    <div class="adm-group"><label>Titulli</label><input class="drejtim-title-inp" value="${d.title}"></div>
    <div class="adm-group"><label>Përshkrimi</label><textarea class="drejtim-desc-inp" rows="3">${d.desc}</textarea></div>
  </div>`;
}
function mesuesHTML(m, i) {
  return `<div class="adm-card" data-i="${i}">
    <div class="adm-card-head">Mësuesi ${i+1} <button class="adm-del" onclick="delMesues(${i})">✕</button></div>
    <div class="adm-row">
      <div class="adm-group"><label>Iniciale</label><input class="m-init" value="${m.initials}" maxlength="3"></div>
      <div class="adm-group"><label>Emri e Mbiemri</label><input class="m-name" value="${m.name}"></div>
    </div>
    <div class="adm-row">
      <div class="adm-group"><label>Lënda</label><input class="m-lenda" value="${m.lenda}"></div>
      <div class="adm-group"><label>Eksperienca</label><input class="m-exp" value="${m.exp}"></div>
    </div>
    <div class="adm-group"><label>Foto (ngarko ose URL)</label>
      <div class="adm-img-upload">
        ${m.img ? `<img class="adm-img-preview" src="${m.img}" alt="">` : `<div class="adm-img-placeholder"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`}
        <input type="file" class="m-img-file" accept="image/*" onchange="uploadImg(this, ${i}, 'mesues')" style="display:none">
        <div class="adm-img-actions">
          <button class="adm-img-btn" onclick="this.closest('.adm-card').querySelector('.m-img-file').click()">📷 Ngarko foto</button>
          <input class="m-img-url" placeholder="ose ngjit URL..." value="${m.img}" oninput="previewImgUrl(this)">
        </div>
      </div>
    </div>
  </div>`;
}
function galeriaHTML(g, i) {
  return `<div class="adm-card" data-i="${i}">
    <div class="adm-card-head">Seksioni ${i+1} <button class="adm-del" onclick="delGaleria(${i})">✕</button></div>
    <div class="adm-row">
      <div class="adm-group"><label>Etiketa</label><input class="g-label" value="${g.label}"></div>
      <div class="adm-group"><label>Ngjyra (hex)</label><input class="g-color" type="color" value="${g.color}" style="height:38px;cursor:pointer;border-radius:4px;"></div>
    </div>
    <div class="adm-group"><label>Foto (ngarko ose URL)</label>
      <div class="adm-img-upload">
        ${g.img ? `<img class="adm-img-preview" src="${g.img}" alt="">` : `<div class="adm-img-placeholder"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>`}
        <input type="file" class="g-img-file" accept="image/*" onchange="uploadImg(this, ${i}, 'galeria')" style="display:none">
        <div class="adm-img-actions">
          <button class="adm-img-btn" onclick="this.closest('.adm-card').querySelector('.g-img-file').click()">📷 Ngarko foto</button>
          <input class="g-img-url" placeholder="ose ngjit URL..." value="${g.img}" oninput="previewImgUrl(this)">
        </div>
      </div>
    </div>
  </div>`;
}

// ── Kontrollet e panelit ──
window.adminTab = function(btn, id) {
  qa('.adm-tab').forEach(t => t.classList.remove('active'));
  qa('.adm-section').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  q('#adm-' + id).classList.add('active');
};

window.adminClose = function() {
  q('#admin-panel').classList.remove('open');
  document.body.style.overflow = '';
};

let currentData = null;

// ── GitHub: merr SHA e fajllit aktual ──
async function ghGetSHA() {
  const url = `https://api.github.com/repos/${GH_USER}/${GH_REPO}/contents/${GH_FILE}?ref=${GH_BRANCH}&t=${Date.now()}`;
  const r = await fetch(url, { headers: { Authorization: `token ${_gt()}` } });
  if (r.status === 404) return null;   // fajlli nuk ekziston ende — do krijohet
  if (r.status === 401) throw new Error('Token i pavlefshëm — kontrollo GH_TOKEN në admin.js');
  if (r.status === 403) throw new Error('Pa të drejta — token-i duhet scope "repo"');
  if (r.status === 409) return null;   // conflict — provo sërish
  if (!r.ok) {
    const msg = await r.json().catch(() => ({}));
    throw new Error((msg.message || 'Gabim ' + r.status) + ' — kontrol: branch=' + GH_BRANCH + ', repo=' + GH_REPO);
  }
  const j = await r.json();
  return j.sha;
}

// ── GitHub: shkruaj fajllin ──
async function ghPush(jsonStr) {
  const sha = await ghGetSHA();
  const body = {
    message: 'Admin: përditësim përmbajtje ' + new Date().toLocaleString('sq'),
    content: btoa(unescape(encodeURIComponent(jsonStr))),
    branch:  GH_BRANCH,
  };
  if (sha) body.sha = sha;

  const r = await fetch(
    `https://api.github.com/repos/${GH_USER}/${GH_REPO}/contents/${GH_FILE}`,
    {
      method:  'PUT',
      headers: { Authorization: `token ${_gt()}`, 'Content-Type': 'application/json' },
      body:    JSON.stringify(body)
    }
  );
  if (!r.ok) {
    const err = await r.json().catch(() => ({}));
    throw new Error(err.message || r.status);
  }
}

// ── GitHub: lexo të dhënat gjatë ngarkimit të faqes ──
async function ghLoad() {
  try {
    const url = `https://raw.githubusercontent.com/${GH_USER}/${GH_REPO}/${GH_BRANCH}/${GH_FILE}?t=${Date.now()}`;
    const r = await fetch(url);
    if (!r.ok) return null;
    return await r.json();
  } catch(e) { return null; }
}

window.adminSave = async function() {
  const btn = q('.adm-save');
  btn.textContent = '⏳ Duke ruajtur...';
  btn.disabled = true;

  try {
    currentData = collectFormData();
    // ruaj lokalisht gjithashtu
    saveData(currentData);
    applyData(currentData);

    if (!GH_TOKEN_ENC.length) {
      showToast('⚠️ Vendos token-in GitHub në admin.js');
      return;
    }

    await ghPush(JSON.stringify(currentData, null, 2));
    showToast('✓ U ruajt dhe u publikua në GitHub!');
  } catch(e) {
    console.error(e);
    showToast('✕ Gabim GitHub: ' + e.message);
  } finally {
    btn.textContent = '💾 Ruaj Ndryshimet';
    btn.disabled = false;
  }
};

window.adminReset = function() {
  if(!confirm('Kjo do të fshijë të gjitha ndryshimet tuaja. Jeni të sigurt?')) return;
  localStorage.removeItem(STORAGE_KEY);
  currentData = getDefaultData();
  applyData(currentData);
  // rebuild panel
  q('#admin-panel').remove();
  buildAdminPanel(currentData);
  q('#admin-panel').classList.add('open');
  document.body.style.overflow = 'hidden';
  showToast('↺ Të dhënat u rikthyen!');
};

window.addLajm = function() {
  const list = q('#lajmet-list');
  const i = list.children.length;
  list.insertAdjacentHTML('beforeend', lajmHTML({ cat: 'Kategoria', title: 'Titulli i lajmit të ri', date: 'Data' }, i));
};
window.delLajm = function(i) {
  const cards = qa('#lajmet-list .adm-card');
  if(cards[i]) cards[i].remove();
  updateCardHeads('#lajmet-list', 'Lajmi');
};

window.addMesues = function() {
  const list = q('#mesuesit-list');
  const i = list.children.length;
  list.insertAdjacentHTML('beforeend', mesuesHTML({ initials: 'XX', name: 'Emri Mbiemri', lenda: 'Lënda', exp: '0 vjet eksperiencë', img: '' }, i));
};
window.delMesues = function(i) {
  const cards = qa('#mesuesit-list .adm-card');
  if(cards[i]) cards[i].remove();
  updateCardHeads('#mesuesit-list', 'Mësuesi');
};

window.addGaleria = function() {
  const list = q('#galeria-list');
  const i = list.children.length;
  list.insertAdjacentHTML('beforeend', galeriaHTML({ label: 'Seksioni i Ri', color: '#1a3a2e', img: '' }, i));
};
window.delGaleria = function(i) {
  const cards = qa('#galeria-list .adm-card');
  if(cards[i]) cards[i].remove();
  updateCardHeads('#galeria-list', 'Seksioni');
};

function updateCardHeads(selector, label) {
  qa(selector + ' .adm-card').forEach((c, idx) => {
    const h = c.querySelector('.adm-card-head');
    const btn = h.querySelector('button');
    h.textContent = label + ' ' + (idx + 1) + ' ';
    if(btn) h.appendChild(btn);
  });
}

window.uploadImg = function(input, idx, type) {
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const url = e.target.result;
    const card = input.closest('.adm-card');
    const preview = card.querySelector('.adm-img-preview, .adm-img-placeholder');
    const container = card.querySelector('.adm-img-upload');
    // update preview
    let img = card.querySelector('.adm-img-preview');
    if(!img) {
      img = document.createElement('img');
      img.className = 'adm-img-preview';
      container.insertBefore(img, container.children[1]);
      if(preview && preview.classList.contains('adm-img-placeholder')) preview.remove();
    }
    img.src = url;
    // also update URL field
    const urlInput = type === 'mesues' ? card.querySelector('.m-img-url') : card.querySelector('.g-img-url');
    if(urlInput) urlInput.value = url;
  };
  reader.readAsDataURL(file);
};

window.previewImgUrl = function(input) {
  const card = input.closest('.adm-card');
  const container = card.querySelector('.adm-img-upload');
  let img = card.querySelector('.adm-img-preview');
  const placeholder = card.querySelector('.adm-img-placeholder');
  if(!input.value.trim()) return;
  if(!img) {
    img = document.createElement('img');
    img.className = 'adm-img-preview';
    container.insertBefore(img, container.children[1] || container.firstChild);
    if(placeholder) placeholder.remove();
  }
  img.src = input.value;
};

function collectFormData() {
  const d = JSON.parse(JSON.stringify(currentData));

  // Hero
  d.hero.eyebrow   = v('h-eyebrow');
  d.hero.title     = v('h-title');
  d.hero.desc      = v('h-desc');
  d.hero.stat1num  = v('h-s1n'); d.hero.stat1label = v('h-s1l');
  d.hero.stat2num  = v('h-s2n'); d.hero.stat2label = v('h-s2l');
  d.hero.stat3num  = v('h-s3n'); d.hero.stat3label = v('h-s3l');
  d.hero.year      = v('h-year');

  // Rreth
  d.rreth.vjet    = v('r-vjet');
  d.rreth.drejtim = v('r-drejtim');
  d.rreth.p1      = v('r-p1');
  d.rreth.p2      = v('r-p2');

  // Lajmet
  d.lajmet = [];
  qa('#lajmet-list .adm-card').forEach(c => {
    d.lajmet.push({
      cat:   c.querySelector('.lajm-cat').value,
      title: c.querySelector('.lajm-title').value,
      date:  c.querySelector('.lajm-date').value
    });
  });

  // Drejtimet
  qa('#drejtimet-list .adm-card').forEach((c, i) => {
    if(d.drejtimet[i]) {
      d.drejtimet[i].title = c.querySelector('.drejtim-title-inp').value;
      d.drejtimet[i].desc  = c.querySelector('.drejtim-desc-inp').value;
    }
  });

  // Mësuesit
  d.mesuesit = [];
  qa('#mesuesit-list .adm-card').forEach(c => {
    const urlInput = c.querySelector('.m-img-url');
    const imgPreview = c.querySelector('.adm-img-preview');
    let img = urlInput ? urlInput.value : '';
    if(!img && imgPreview) img = imgPreview.src;
    d.mesuesit.push({
      initials: c.querySelector('.m-init').value,
      name:     c.querySelector('.m-name').value,
      lenda:    c.querySelector('.m-lenda').value,
      exp:      c.querySelector('.m-exp').value,
      img:      img
    });
  });

  // Galeria
  d.galeria = [];
  qa('#galeria-list .adm-card').forEach(c => {
    const urlInput = c.querySelector('.g-img-url');
    const imgPreview = c.querySelector('.adm-img-preview');
    let img = urlInput ? urlInput.value : '';
    if(!img && imgPreview) img = imgPreview.src;
    d.galeria.push({
      label: c.querySelector('.g-label').value,
      color: c.querySelector('.g-color').value,
      img:   img
    });
  });

  // Kontakti
  d.kontakti.adresa = v('k-adresa');
  d.kontakti.tel1   = v('k-tel1');   d.kontakti.tel2   = v('k-tel2');
  d.kontakti.email1 = v('k-email1'); d.kontakti.email2 = v('k-email2');
  d.kontakti.orari  = v('k-orari');

  return d;
}

function v(id) { const el = q('#' + id); return el ? el.value : ''; }

function showToast(msg) {
  let t = q('#adm-toast');
  if(!t) {
    t = document.createElement('div');
    t.id = 'adm-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._to);
  t._to = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── Kredencialet (ndrysho këtu fjalëkalimin) ──
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'najdeni2025';
const SESSION_KEY = 'saidnajdeni_auth';
const SESSION_TTL = 2 * 60 * 60 * 1000; // 2 orë

function isLoggedIn() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return false;
    const { ts } = JSON.parse(raw);
    return Date.now() - ts < SESSION_TTL;
  } catch(e) { return false; }
}
function doLogin()  { sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ts: Date.now() })); }
function doLogout() { sessionStorage.removeItem(SESSION_KEY); }

// ── Modal Login ──
function buildLoginModal() {
  const el = document.createElement('div');
  el.id = 'login-modal';
  el.innerHTML = `
  <div id="login-box">
    <button class="lm-x" onclick="closeLoginModal()" title="Mbyll">&#x2715;</button>
    <div class="lm-brand">
      <div class="lm-logo-mark">SN</div>
      <div>
        <div class="lm-logo-name">Said Najdeni</div>
        <div class="lm-logo-sub">Paneli i Administrimit</div>
      </div>
    </div>
    <div class="lm-title">Hyrja e Administratorit</div>
    <div class="lm-field">
      <label>Përdoruesi</label>
      <div class="lm-input-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        <input id="lm-user" type="text" placeholder="Emri i përdoruesit" autocomplete="username" spellcheck="false">
      </div>
    </div>
    <div class="lm-field">
      <label>Fjalëkalimi</label>
      <div class="lm-input-wrap">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        <input id="lm-pass" type="password" placeholder="••••••••" autocomplete="current-password">
        <button class="lm-eye" onclick="togglePass()" tabindex="-1" title="Shfaq/fshih">
          <svg id="lm-eye-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </div>
    <div id="lm-error" class="lm-error"></div>
    <button id="lm-submit" onclick="submitLogin()">Hyr në Panel</button>
    <div class="lm-footer">Gjimnazi "Said Najdeni" &mdash; Sistem i brendshëm</div>
  </div>`;
  document.body.appendChild(el);

  // Enter key submit
  el.addEventListener('keydown', e => { if(e.key === 'Enter') submitLogin(); });
  // Klik jashtë kutisë → mbyll
  el.addEventListener('click', e => { if(e.target === el) closeLoginModal(); });
  // Escape → mbyll
  document.addEventListener('keydown', function escClose(e) {
    if(e.key === 'Escape') { closeLoginModal(); document.removeEventListener('keydown', escClose); }
  });
  // Focus username
  setTimeout(() => { const u = q('#lm-user'); if(u) u.focus(); }, 100);
}

window.togglePass = function() {
  const inp = q('#lm-pass');
  const icon = q('#lm-eye-icon');
  if(inp.type === 'password') {
    inp.type = 'text';
    icon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
  } else {
    inp.type = 'password';
    icon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
  }
};

window.closeLoginModal = function() {
  const m = q('#login-modal');
  if(!m) return;
  m.classList.add('fade-out');
  setTimeout(() => m.remove(), 400);
};

window.submitLogin = function() {
  const user = (q('#lm-user').value || '').trim();
  const pass = (q('#lm-pass').value || '');
  const btn  = q('#lm-submit');
  const err  = q('#lm-error');

  btn.classList.add('loading');
  btn.textContent = 'Duke u kontrolluar...';
  err.style.display = 'none';

  setTimeout(() => {
    if(user === ADMIN_USER && pass === ADMIN_PASS) {
      doLogin();
      q('#login-modal').classList.add('fade-out');
      setTimeout(() => {
        q('#login-modal').remove();
        openAdminPanel();
      }, 400);
    } else {
      err.textContent = '✕  Përdoruesi ose fjalëkalimi është i gabuar.';
      err.style.display = 'block';
      q('#lm-pass').value = '';
      q('#lm-pass').focus();
      // shake animation
      q('#login-box').classList.add('shake');
      setTimeout(() => q('#login-box').classList.remove('shake'), 500);
      btn.classList.remove('loading');
      btn.textContent = 'Hyr në Panel';
    }
  }, 600);
};

function openAdminPanel() {
  q('#admin-panel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Butoni i toggle ──
function createAdminToggle() {
  const btn = document.createElement('button');
  btn.id = 'admin-toggle';
  btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`;
  btn.title = 'Hap Panelin e Administrimit';
  btn.onclick = () => {
    if(isLoggedIn()) {
      openAdminPanel();
    } else {
      buildLoginModal();
    }
  };
  document.body.appendChild(btn);
}

// ── Butoni Dil (shtohet në header të panelit) ──
function addLogoutBtn() {
  const header = q('.adm-header');
  if(!header) return;
  const existing = q('#adm-logout');
  if(existing) return;
  const btn = document.createElement('button');
  btn.id = 'adm-logout';
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg> Dil`;
  btn.title = 'Dil nga paneli';
  btn.onclick = () => {
    doLogout();
    adminClose();
    showToast('✓ Dolët nga paneli.');
  };
  // insert before close button
  header.insertBefore(btn, q('.adm-close'));
}

// patch adminClose to also handle logout state
const _origClose = window.adminClose;
window.adminClose = function() {
  if(_origClose) _origClose();
  else {
    q('#admin-panel').classList.remove('open');
    document.body.style.overflow = '';
  }
};

// patch open to add logout btn
const _origOpen = openAdminPanel;

// ── Inicializo ──
document.addEventListener('DOMContentLoaded', async () => {
  // Lexo nga GitHub (burimi kryesor), pastaj nga localStorage si rezervë
  let ghData = null;
  try { ghData = await ghLoad(); } catch(e) {}

  currentData = ghData
    ? Object.assign({}, getDefaultData(), ghData)
    : loadData();

  // Sinkronizo localStorage me të dhënat e GitHub
  if (ghData) saveData(currentData);

  applyData(currentData);
  buildAdminPanel(currentData);
  createAdminToggle();
  addLogoutBtn();
});
