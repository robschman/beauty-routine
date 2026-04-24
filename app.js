// ===== Routine Data (Standard-Items) =====
const ROUTINES = {
  morning_skincare: [
    { id: 'ms1', emoji: '💧', name: 'Gesicht reinigen',       hint: 'Sanfter Cleanser für einen frischen Start' },
    { id: 'ms2', emoji: '🌸', name: 'Toner auftragen',        hint: 'pH-Balance & Vorbereitung für die Pflege' },
    { id: 'ms3', emoji: '💎', name: 'Serum auftragen',         hint: 'Konzentrierte Wirkstoffe für deine Haut' },
    { id: 'ms4', emoji: '👁️', name: 'Augencreme',              hint: 'Sanft unter den Augen eintupfen' },
    { id: 'ms5', emoji: '🧴', name: 'Feuchtigkeitscreme',      hint: 'Hautbarriere schützen & hydratisieren' },
    { id: 'ms6', emoji: '☀️', name: 'Sonnencreme SPF 30+',    hint: 'Täglich – der wichtigste Anti-Aging-Schritt!' },
  ],
  morning_makeup: [
    { id: 'mm1', emoji: '🌟', name: 'Primer auftragen',        hint: 'Make-up hält länger & Poren kaschieren' },
    { id: 'mm2', emoji: '🪞', name: 'Foundation / BB Cream',   hint: 'Gleichmäßiges Hautbild' },
    { id: 'mm3', emoji: '✨', name: 'Concealer',               hint: 'Augenringe & Unreinheiten abdecken' },
    { id: 'mm4', emoji: '🎨', name: 'Rouge / Bronzer',         hint: 'Farbe ins Gesicht bringen' },
    { id: 'mm5', emoji: '👀', name: 'Augen schminken',         hint: 'Lidschatten, Eyeliner & Mascara' },
    { id: 'mm6', emoji: '💋', name: 'Lippen pflegen / Lippenstift', hint: 'Lippenpflege oder Lippenstift' },
    { id: 'mm7', emoji: '🔒', name: 'Setting Spray',           hint: 'Make-up fixieren den ganzen Tag' },
  ],
  morning_body: [
    { id: 'mb1', emoji: '🚿', name: 'Duschen',                 hint: 'Frisch und sauber in den Tag starten' },
    { id: 'mb2', emoji: '🦷', name: 'Zähneputzen',             hint: '2 Minuten – morgens nicht vergessen!' },
    { id: 'mb3', emoji: '🧴', name: 'Körperlotion',            hint: 'Am besten nach dem Duschen eincremen' },
    { id: 'mb4', emoji: '🌸', name: 'Deodorant',               hint: 'Frisch bleiben den ganzen Tag' },
    { id: 'mb5', emoji: '💇‍♀️', name: 'Haare stylen',          hint: 'Kämmen, föhnen oder stylen' },
    { id: 'mb6', emoji: '💅', name: 'Parfüm',                  hint: 'Dein Signature-Duft' },
  ],
  morning_wellness: [
    { id: 'mw1', emoji: '💧', name: 'Glas Wasser trinken',     hint: 'Hydration von innen – direkt nach dem Aufwachen' },
    { id: 'mw2', emoji: '🧘‍♀️', name: 'Stretching / Yoga',   hint: 'Den Körper aufwachen lassen' },
    { id: 'mw3', emoji: '📓', name: 'Journaling',              hint: '5 Minuten Gedanken aufschreiben' },
    { id: 'mw4', emoji: '🌟', name: 'Affirmation',             hint: 'Den Tag positiv beginnen' },
  ],
  evening_skincare: [
    { id: 'es1', emoji: '🧹', name: 'Make-up entfernen',       hint: 'Mizellenwater, Reinigungsöl oder Balm' },
    { id: 'es2', emoji: '💧', name: 'Doppelte Reinigung',      hint: 'Schaum-Cleanser für die tiefe Reinigung' },
    { id: 'es3', emoji: '🌸', name: 'Toner auftragen',         hint: 'Haut auf die Nachtpflege vorbereiten' },
    { id: 'es4', emoji: '🔬', name: 'Serum / Wirkstoffe',      hint: 'Retinol, Hyaluronsäure oder Niacinamid' },
    { id: 'es5', emoji: '👁️', name: 'Augencreme',              hint: 'Sanft eintupfen – nicht einreiben' },
    { id: 'es6', emoji: '🌙', name: 'Nachtcreme',              hint: 'Reichhaltige Feuchtigkeitspflege' },
    { id: 'es7', emoji: '💋', name: 'Lippenpflege',            hint: 'Lippenbalsam über Nacht einwirken lassen' },
  ],
  evening_body: [
    { id: 'eb1', emoji: '🦷', name: 'Zähneputzen',             hint: '2 Minuten – Abends besonders wichtig' },
    { id: 'eb2', emoji: '🧵', name: 'Zahnseide',               hint: 'Einmal täglich – am besten abends' },
    { id: 'eb3', emoji: '🧴', name: 'Körperlotion / Öl',       hint: 'Hände, Ellenbogen & Füße nicht vergessen' },
    { id: 'eb4', emoji: '💇‍♀️', name: 'Haare bürsten',         hint: '100 Züge oder einfach entwirren' },
    { id: 'eb5', emoji: '🎀', name: 'Haare flechten / schützen', hint: 'Geflochtener Zopf verhindert Bruch' },
  ],
  evening_wellness: [
    { id: 'ew1', emoji: '📵', name: 'Handy weglegen',          hint: 'Mindestens 30 Min vor dem Schlafen' },
    { id: 'ew2', emoji: '📖', name: 'Lesen',                   hint: 'Entspannen mit einem guten Buch' },
    { id: 'ew3', emoji: '📓', name: 'Tagebuch schreiben',      hint: 'Den Tag reflektieren & Dankbarkeit notieren' },
    { id: 'ew4', emoji: '🫖', name: 'Beruhigenden Tee trinken', hint: 'Kamille oder Lavendel zum Einschlafen' },
    { id: 'ew5', emoji: '🌬️', name: 'Atemübung',              hint: '4-7-8 Technik zum Einschlafen' },
  ],
  weekly_skincare: [
    { id: 'ws1', emoji: '🫧', name: 'Gesichtspeeling',         hint: '1-2x pro Woche – abgestorbene Hautzellen entfernen' },
    { id: 'ws2', emoji: '🎭', name: 'Gesichtsmaske',           hint: 'Tonerde-, Hydro- oder Sheet-Mask (10–20 Min)' },
    { id: 'ws3', emoji: '💎', name: 'Peel-off Maske',          hint: 'Poren reinigen & Mitesser entfernen' },
    { id: 'ws4', emoji: '🌿', name: 'Gesichtsmassage',         hint: 'Gua-Sha oder Jade Roller für Lymphdrainage' },
    { id: 'ws5', emoji: '👄', name: 'Lippenpeeling',           hint: 'Sanft peelen für weiche Lippen' },
  ],
  weekly_hair: [
    { id: 'wh1', emoji: '🧴', name: 'Haarkur / Deep Conditioning', hint: 'Mindestens 20 Min einwirken lassen' },
    { id: 'wh2', emoji: '🥥', name: 'Haaröl-Behandlung',      hint: 'Kokos-, Argan- oder Jojobaöl vor dem Waschen' },
    { id: 'wh3', emoji: '💆‍♀️', name: 'Kopfhautmassage',      hint: 'Durchblutung fördern & Haarwachstum anregen' },
    { id: 'wh4', emoji: '✂️', name: 'Haare trimmen',           hint: 'Alle 8–12 Wochen für gesunde Spitzen' },
  ],
  weekly_nails: [
    { id: 'wn1', emoji: '💅', name: 'Maniküre',               hint: 'Nägel feilen, formen & lackieren' },
    { id: 'wn2', emoji: '🦶', name: 'Pediküre',               hint: 'Fußnägel pflegen & lackieren' },
    { id: 'wn3', emoji: '✨', name: 'Nagelhautpflege',         hint: 'Nagelhautöl auftragen & sanft zurückschieben' },
    { id: 'wn4', emoji: '🫧', name: 'Nagelbad',               hint: 'Warmes Öl-Bad für 10–15 Minuten' },
  ],
  weekly_body: [
    { id: 'wbo1', emoji: '🧂', name: 'Körperpeeling',          hint: 'Salzpeeling für seidige Haut' },
    { id: 'wbo2', emoji: '🛁', name: 'Entspannungsbad',        hint: 'Mit Badesalz, Ölen oder Badebomben' },
    { id: 'wbo3', emoji: '🦵', name: 'Rasieren / Epilieren',   hint: 'Beine, Achseln & Co. pflegen' },
    { id: 'wbo4', emoji: '🧴', name: 'Körpermaske',            hint: 'Intensive Feuchtigkeit für trockene Haut' },
    { id: 'wbo5', emoji: '🦶', name: 'Fußpflege',              hint: 'Hornhaut entfernen & gut eincremen' },
  ],
};

// Tab → Kategorie-Keys
const TAB_KEYS = {
  morning: ['morning_skincare','morning_makeup','morning_body','morning_wellness'],
  evening: ['evening_skincare','evening_body','evening_wellness'],
  weekly:  ['weekly_skincare','weekly_hair','weekly_nails','weekly_body'],
};

// Kategorie-Key → Checklist-Element-ID
const KEY_TO_LIST = {
  morning_skincare: 'morning-skincare', morning_makeup: 'morning-makeup',
  morning_body:     'morning-body',     morning_wellness: 'morning-wellness',
  evening_skincare: 'evening-skincare', evening_body: 'evening-body',
  evening_wellness: 'evening-wellness',
  weekly_skincare:  'weekly-skincare',  weekly_hair: 'weekly-hair',
  weekly_nails:     'weekly-nails',     weekly_body: 'weekly-body',
};

// ===== localStorage Wrapper (sicher für file:// und Safari) =====
const store = {
  get(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  },
  set(key, val) {
    try { localStorage.setItem(key, val); } catch(e) {}
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch(e) {}
  }
};

// ===== Persistenz =====
let checkState   = {};
let hiddenItems  = new Set();
let customItems  = {};

function getTodayKey() { return new Date().toISOString().split('T')[0]; }

function loadPersisted() {
  try {
    const cs = store.get('routine_check');
    checkState = cs ? JSON.parse(cs) : {};

    const hi = store.get('routine_hidden');
    hiddenItems = new Set(hi ? JSON.parse(hi) : []);

    const ci = store.get('routine_custom');
    customItems = ci ? JSON.parse(ci) : {};
  } catch(e) {
    checkState = {}; hiddenItems = new Set(); customItems = {};
  }
}

function saveCheck()  { store.set('routine_check',  JSON.stringify(checkState)); }
function saveHidden() { store.set('routine_hidden', JSON.stringify([...hiddenItems])); }
function saveCustom() { store.set('routine_custom', JSON.stringify(customItems)); }

function isChecked(id) { return checkState[getTodayKey()]?.[id] || false; }

function toggleCheck(id) {
  const day = getTodayKey();
  if (!checkState[day]) checkState[day] = {};
  checkState[day][id] = !checkState[day][id];
  saveCheck();
  renderAll();
  updateProgress();
  checkCompletion();
}

// ===== Edit Mode =====
let editMode = false;

function setEditMode(on) {
  editMode = on;
  document.querySelector('.app').classList.toggle('edit-mode', on);
  document.getElementById('editToggleBtn').textContent = on ? '✅' : '✏️';
  renderAll();
}

// ===== Alle Items einer Kategorie (Standard + Custom) =====
function getItems(catKey) {
  const standard = ROUTINES[catKey] || [];
  const custom   = customItems[catKey] || [];
  return [...standard, ...custom];
}

// ===== Render =====
function buildList(catKey) {
  const listId = KEY_TO_LIST[catKey];
  const ul = document.getElementById(listId);
  if (!ul) return;
  ul.innerHTML = '';

  const items = getItems(catKey);
  items.forEach(item => {
    const hidden  = hiddenItems.has(item.id);
    const checked = isChecked(item.id);
    const isCustom = (customItems[catKey] || []).some(c => c.id === item.id);

    const li = document.createElement('li');
    li.className = [
      'checklist-item',
      checked ? 'done' : '',
      hidden  ? 'item-hidden' : '',
    ].filter(Boolean).join(' ');
    li.dataset.id = item.id;

    // Actions (nur in edit-mode sichtbar via CSS)
    const toggleTitle = hidden ? 'Einblenden' : 'Ausblenden';
    const toggleIcon  = hidden ? '👁️' : '🙈';
    const customBtns  = isCustom
      ? `<button class="action-btn edit-btn"   data-id="${item.id}" data-cat="${catKey}" title="Bearbeiten">✏️</button>
         <button class="action-btn delete-btn" data-id="${item.id}" data-cat="${catKey}" title="Löschen">🗑️</button>`
      : '';

    li.innerHTML = `
      <span class="checkbox">
        <svg class="checkbox-check" viewBox="0 0 12 10">
          <polyline points="1,5 4.5,9 11,1"/>
        </svg>
      </span>
      <span class="item-emoji">${item.emoji || '📌'}</span>
      <span class="item-label">
        <span class="item-name">${escHtml(item.name)}</span>
        ${item.hint ? `<span class="item-hint">${escHtml(item.hint)}</span>` : ''}
      </span>
      <span class="item-actions">
        ${customBtns}
        <button class="action-btn toggle-btn ${hidden ? 'is-hidden' : ''}"
          data-id="${item.id}" title="${toggleTitle}">${toggleIcon}</button>
      </span>
    `;

    // Click: normal mode → check/uncheck; edit mode → nichts
    li.addEventListener('click', e => {
      if (editMode) return;
      if (e.target.closest('.item-actions')) return;
      toggleCheck(item.id);
    });

    ul.appendChild(li);
  });

  // Action-Button Events
  ul.querySelectorAll('.toggle-btn').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); toggleHidden(btn.dataset.id); })
  );
  ul.querySelectorAll('.edit-btn').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); openModal(btn.dataset.cat, btn.dataset.id); })
  );
  ul.querySelectorAll('.delete-btn').forEach(btn =>
    btn.addEventListener('click', e => { e.stopPropagation(); deleteCustomItem(btn.dataset.cat, btn.dataset.id); })
  );
}

function renderAll() {
  Object.keys(KEY_TO_LIST).forEach(buildList);
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ===== Toggle Hidden =====
function toggleHidden(id) {
  if (hiddenItems.has(id)) hiddenItems.delete(id);
  else hiddenItems.add(id);
  saveHidden();
  renderAll();
  updateProgress();
}

// ===== Custom Items =====
function deleteCustomItem(catKey, id) {
  if (!confirm('Item löschen?')) return;
  customItems[catKey] = (customItems[catKey] || []).filter(i => i.id !== id);
  hiddenItems.delete(id);
  delete checkState[getTodayKey()]?.[id];
  saveCustom(); saveHidden(); saveCheck();
  renderAll(); updateProgress();
}

// ===== Vorschläge je Kategorie =====
const PRESETS = {
  morning_skincare: [
    { emoji: '🌊', name: 'Mizellenwasser',        hint: 'Sanft reinigen ohne ausspülen' },
    { emoji: '🧊', name: 'Eiswasser-Splash',      hint: 'Poren verfeinern & Haut wecken' },
    { emoji: '🌿', name: 'Aloe Vera auftragen',   hint: 'Beruhigt & hydratisiert sofort' },
    { emoji: '💊', name: 'Vitamine einnehmen',    hint: 'Biotin, Vitamin C & D für die Haut' },
    { emoji: '🌺', name: 'Rosenwasser sprühen',   hint: 'Erfrischt & setzt Make-up' },
  ],
  morning_makeup: [
    { emoji: '🖌️', name: 'Augenbrauen zeichnen', hint: 'Form betonen mit Brow-Pen oder Puder' },
    { emoji: '✨', name: 'Highlighter auftragen', hint: 'Auf Wangenknochen & Nasenspitze' },
    { emoji: '🌸', name: 'Lipliner benutzen',     hint: 'Lippen definieren & Lippenstift halten' },
    { emoji: '👁️', name: 'Wimpern curlen',        hint: 'Vor dem Mascara für mehr Öffnung' },
    { emoji: '🎭', name: 'Contouring',            hint: 'Gesicht formen mit Contour-Puder' },
  ],
  morning_body: [
    { emoji: '🧖‍♀️', name: 'Trockenbürsten',     hint: 'Vor dem Duschen für bessere Durchblutung' },
    { emoji: '🫧', name: 'Körperpeeling',         hint: 'Glatte Haut durch regelmäßiges Peelen' },
    { emoji: '💧', name: 'Kneipp-Dusche',         hint: 'Warm-kalt wechseln für den Kreislauf' },
    { emoji: '🌸', name: 'Handcreme auftragen',   hint: 'Hände pflegen – besonders nach dem Waschen' },
    { emoji: '🦵', name: 'Beine eincremen',       hint: 'Besonders Knie & Ellenbogen nicht vergessen' },
  ],
  morning_wellness: [
    { emoji: '☕', name: 'Kaffee/Tee genießen',   hint: 'Morgenritual für den perfekten Start' },
    { emoji: '📱', name: 'Handy-freie Zeit',       hint: '30 Min ohne Social Media am Morgen' },
    { emoji: '🌞', name: 'An die frische Luft',   hint: 'Kurzer Spaziergang belebt Körper & Geist' },
    { emoji: '🎵', name: 'Lieblingsmusik hören',  hint: 'Gute Laune-Playlist für den Morgen' },
    { emoji: '📝', name: 'To-Do Liste schreiben', hint: 'Den Tag planen & strukturieren' },
  ],
  evening_skincare: [
    { emoji: '🌙', name: 'Schlafmaske auftragen', hint: 'Intensivpflege über Nacht einwirken lassen' },
    { emoji: '💆‍♀️', name: 'Gesichtsmassage',     hint: 'Lymphdrainage & Entspannung mit Öl' },
    { emoji: '🌿', name: 'Nachtöl auftragen',     hint: 'Rosen- oder Arganöl für strahlende Haut' },
    { emoji: '❄️', name: 'Kühlende Augenpads',    hint: 'Abschwellen & Augenringe reduzieren' },
    { emoji: '💎', name: 'Halspflege',            hint: 'Hals & Dekolleté miteincremen' },
  ],
  evening_body: [
    { emoji: '🛁', name: 'Entspannungsbad',       hint: 'Mit Lavendel oder Badesalz' },
    { emoji: '🧴', name: 'Fußcreme auftragen',    hint: 'Besonders die Fersen eincremen' },
    { emoji: '💅', name: 'Nagelhautöl auftragen', hint: 'Täglich für gesunde & schöne Nägel' },
    { emoji: '🌸', name: 'Schlafanzug wechseln',  hint: 'Saubere PJs für erholsamen Schlaf' },
    { emoji: '🧼', name: 'Make-up Pinsel reinigen', hint: '1x pro Woche für reine Haut' },
  ],
  evening_wellness: [
    { emoji: '🕯️', name: 'Kerze anzünden',        hint: 'Stimmung für die Abendroutine schaffen' },
    { emoji: '🛌', name: 'Schlafzeit festlegen',   hint: 'Regelmäßige Schlafzeiten sind Beauty-Sleep' },
    { emoji: '🎧', name: 'Entspannungsmusik',      hint: 'Ruhige Musik oder Meditation' },
    { emoji: '🙏', name: 'Dankbarkeit aufschreiben', hint: '3 Dinge für die du dankbar bist' },
    { emoji: '🌬️', name: '4-7-8 Atemtechnik',    hint: '4 ein, 7 halten, 8 ausatmen – perfekt zum Schlafen' },
  ],
  weekly_skincare: [
    { emoji: '💜', name: 'Augenbrauen zupfen',    hint: 'Form pflegen & unerwünschte Haare entfernen' },
    { emoji: '🌡️', name: 'Dampfbad für Gesicht', hint: 'Poren öffnen vor der Reinigung' },
    { emoji: '🍯', name: 'Honigmaske',            hint: 'Antibakteriell & super feuchtigkeitsspendend' },
    { emoji: '🌿', name: 'Gurken-Augenpads',      hint: 'Frische Gurke für ausgeruhte Augen' },
    { emoji: '💆‍♀️', name: 'Gua-Sha Massage',    hint: 'Lifting-Effekt & Entspannung' },
  ],
  weekly_hair: [
    { emoji: '🚿', name: 'Haare waschen',         hint: 'Mit Shampoo & Spülung für dein Haartyp' },
    { emoji: '💨', name: 'Diffuser benutzen',     hint: 'Schonendes Trocknen für natürliche Wellen' },
    { emoji: '🌀', name: 'Locken definieren',     hint: 'Curl-Cream für schöne Locken' },
    { emoji: '✨', name: 'Glanz-Spray auftragen', hint: 'Für extra Glanz & Finish' },
    { emoji: '🧴', name: 'Leave-In Conditioner',  hint: 'Ohne ausspülen – für den ganzen Tag Pflege' },
  ],
  weekly_nails: [
    { emoji: '💅', name: 'Nagellack wechseln',    hint: 'Frische Farbe für frisches Feeling' },
    { emoji: '🌸', name: 'Nagelöl einmassieren',  hint: 'Täglich für gesunde & feste Nägel' },
    { emoji: '🪮', name: 'Nagelbürste benutzen',  hint: 'Unter den Nägeln gründlich reinigen' },
    { emoji: '✨', name: 'Nagelstärker auftragen', hint: 'Für brüchige Nägel als Basis' },
    { emoji: '🧴', name: 'Handmaske anlegen',     hint: 'Handschuhe + Handcreme über Nacht' },
  ],
  weekly_body: [
    { emoji: '🌊', name: 'Schwimmen gehen',       hint: 'Sport & Entspannung für Körper & Geist' },
    { emoji: '🧘‍♀️', name: 'Yoga-Einheit',        hint: 'Flexibilität & Entspannung fördern' },
    { emoji: '🌿', name: 'Selbstmassage',         hint: 'Faszienrolle oder Massageball benutzen' },
    { emoji: '☀️', name: 'Selbstbräuner auftragen', hint: 'Für ein gleichmäßiges, gesundes Strahlen' },
    { emoji: '🧴', name: 'Körperbutter auftragen', hint: 'Intensive Pflege für sehr trockene Stellen' },
  ],
};

function buildPresets(catKey) {
  const container = document.getElementById('modalPresets');
  container.innerHTML = '';
  const presets = PRESETS[catKey];
  if (!presets) return;

  const label = document.createElement('div');
  label.className = 'preset-label';
  label.textContent = '💡 Vorschläge';
  container.appendChild(label);

  const chips = document.createElement('div');
  chips.className = 'preset-chips';

  presets.forEach(p => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'preset-chip';
    chip.textContent = `${p.emoji} ${p.name}`;
    chip.addEventListener('click', () => {
      document.getElementById('modalEmoji').value = p.emoji;
      document.getElementById('modalName').value  = p.name;
      document.getElementById('modalHint').value  = p.hint;
      syncEmojiSelection();
      // Visuelles Feedback
      chips.querySelectorAll('.preset-chip').forEach(c => {
        c.style.background = '';
        c.style.color = '';
        c.style.borderColor = '';
      });
      chip.style.background = 'linear-gradient(135deg, #f06292, #ab47bc)';
      chip.style.color = 'white';
      chip.style.borderColor = 'transparent';
    });
    chips.appendChild(chip);
  });

  container.appendChild(chips);
}

// ===== Beauty Emoji Picker =====
const BEAUTY_EMOJIS = [
  '💄','💋','👄','💅','🧴','🪞','🧼','🛁','🚿','🪥',
  '🦷','🧖‍♀️','💆‍♀️','💇‍♀️','🪮','👁️','🦶','🎀','🌸','🌺',
  '🌹','🌷','🪷','🌼','🌻','💎','✨','🌟','💫','🌙',
  '☀️','💧','🫧','🍯','🥥','🌿','🍃','🎨','🧘‍♀️','🩹',
];

function buildEmojiGrid() {
  const grid = document.getElementById('emojiGrid');
  grid.innerHTML = '';
  BEAUTY_EMOJIS.forEach(em => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'emoji-btn';
    btn.textContent = em;
    btn.addEventListener('click', () => {
      document.getElementById('modalEmoji').value = em;
      grid.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
    grid.appendChild(btn);
  });
}

function syncEmojiSelection() {
  const val  = document.getElementById('modalEmoji').value.trim();
  const grid = document.getElementById('emojiGrid');
  grid.querySelectorAll('.emoji-btn').forEach(b => {
    b.classList.toggle('selected', b.textContent === val);
  });
}

// ===== Modal =====
let modalCtx = null; // {catKey, itemId|null}

function openModal(catKey, itemId = null) {
  modalCtx = { catKey, itemId };
  const isEdit = itemId !== null;
  document.getElementById('modalTitle').textContent = isEdit ? 'Item bearbeiten' : 'Item hinzufügen';

  if (isEdit) {
    const item = (customItems[catKey] || []).find(i => i.id === itemId);
    document.getElementById('modalEmoji').value = item?.emoji || '';
    document.getElementById('modalName').value  = item?.name  || '';
    document.getElementById('modalHint').value  = item?.hint  || '';
  } else {
    document.getElementById('modalEmoji').value = '';
    document.getElementById('modalName').value  = '';
    document.getElementById('modalHint').value  = '';
  }

  buildPresets(catKey);
  syncEmojiSelection();
  document.getElementById('modalOverlay').classList.add('open');
  setTimeout(() => document.getElementById('modalName').focus(), 80);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  modalCtx = null;
}

function saveModal() {
  const name  = document.getElementById('modalName').value.trim();
  const emoji = document.getElementById('modalEmoji').value.trim() || '📌';
  const hint  = document.getElementById('modalHint').value.trim();

  if (!name) { document.getElementById('modalName').focus(); return; }

  const { catKey, itemId } = modalCtx;

  if (itemId) {
    // Bearbeiten
    const list = customItems[catKey] || [];
    const idx  = list.findIndex(i => i.id === itemId);
    if (idx >= 0) list[idx] = { ...list[idx], emoji, name, hint };
  } else {
    // Neu hinzufügen
    if (!customItems[catKey]) customItems[catKey] = [];
    customItems[catKey].push({ id: 'c_' + Date.now(), emoji, name, hint });
  }

  saveCustom();
  closeModal();
  renderAll();
  updateProgress();
}

// ===== Progress =====
function getActiveTab() {
  return document.querySelector('.tab.active')?.dataset.tab || 'morning';
}

function getActiveVisibleItems() {
  const keys = TAB_KEYS[getActiveTab()] || [];
  return keys.flatMap(k => getItems(k)).filter(i => !hiddenItems.has(i.id));
}

function updateProgress() {
  const items = getActiveVisibleItems();
  const done  = items.filter(i => isChecked(i.id)).length;
  const total = items.length;
  const pct   = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressLabel').textContent =
    `${done} / ${total} erledigt`;
}

// ===== Completion =====
let confettiShown = false;

function checkCompletion() {
  const tab   = getActiveTab();
  const items = getActiveVisibleItems();
  const allDone = items.length > 0 && items.every(i => isChecked(i.id));
  const banner  = document.getElementById('banner-' + tab);

  if (banner) banner.classList.toggle('show', allDone);

  if (allDone && !confettiShown) {
    launchConfetti();
    confettiShown = true;
  } else if (!allDone) {
    confettiShown = false;
  }
}

// ===== Confetti =====
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors  = ['#f48fb1','#ce93d8','#f06292','#fff','#ffe082','#80cbc4'];
  const pieces  = Array.from({ length: 110 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    speed: Math.random() * 3 + 2,
    drift: (Math.random() - 0.5) * 2,
    rot: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 6,
  }));
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.5);
      ctx.restore();
      p.y += p.speed; p.x += p.drift; p.rot += p.rotSpeed;
      if (p.y > canvas.height) { p.y = -20; p.x = Math.random() * canvas.width; }
    });
    if (++frame < 200) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

// ===== Date & Time =====
function updateDate() {
  const now    = new Date();
  const days   = ['So','Mo','Di','Mi','Do','Fr','Sa'];
  const months = ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'];
  const date   = `${days[now.getDay()]}, ${now.getDate()}. ${months[now.getMonth()]}`;
  const time   = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
  document.getElementById('dateDisplay').innerHTML =
    `<span class="date-date">${date}</span><span class="date-time">${time}</span>`;
}

// Uhrzeit jede Minute aktualisieren
setInterval(updateDate, 60000);

// ===== Reset =====
function clearBanners(tabs) {
  tabs.forEach(t => document.getElementById('banner-' + t)?.classList.remove('show'));
}

function resetToday() {
  // Nur Morgen & Abend zurücksetzen, nicht Wöchentlich
  const day = getTodayKey();
  if (checkState[day]) {
    const weeklyIds = TAB_KEYS.weekly.flatMap(k => getItems(k)).map(i => i.id);
    weeklyIds.forEach(id => {
      // Weekly-Checks aufbewahren
    });
    // Nur morning + evening Keys löschen
    const keepIds = new Set(TAB_KEYS.weekly.flatMap(k => getItems(k)).map(i => i.id));
    Object.keys(checkState[day]).forEach(id => {
      if (!keepIds.has(id)) delete checkState[day][id];
    });
  }
  saveCheck();
  confettiShown = false;
  renderAll(); updateProgress();
  clearBanners(['morning', 'evening']);
}

function resetWeekly() {
  const day = getTodayKey();
  if (checkState[day]) {
    const weeklyIds = TAB_KEYS.weekly.flatMap(k => getItems(k)).map(i => i.id);
    weeklyIds.forEach(id => delete checkState[day][id]);
  }
  saveCheck();
  confettiShown = false;
  renderAll(); updateProgress();
  clearBanners(['weekly']);
}

function resetAll() {
  if (!confirm('Wirklich alle gespeicherten Fortschritte löschen?')) return;
  store.remove('routine_check');
  checkState = {};
  confettiShown = false;
  renderAll(); updateProgress();
  clearBanners(['morning', 'evening', 'weekly']);
}

// ===== Haar-Routinen je nach Profil =====
function getHairItems(color, length) {
  // Basis-Items die immer passen
  const base = [
    { id: 'wh1', emoji: '🧴', name: 'Haarkur / Deep Conditioning', hint: 'Mindestens 20 Min einwirken lassen' },
    { id: 'wh2', emoji: '🥥', name: 'Haaröl-Behandlung',           hint: 'Kokos-, Argan- oder Jojobaöl vor dem Waschen' },
    { id: 'wh3', emoji: '💆‍♀️', name: 'Kopfhautmassage',           hint: 'Durchblutung fördern & Haarwachstum anregen' },
  ];

  // Längen-spezifisch
  if (length === 'kurz') {
    base.push({ id: 'wh4', emoji: '✂️', name: 'Haare nachschneiden lassen', hint: 'Alle 4–6 Wochen für gepflegte Kurzhaarfrisur' });
    base.push({ id: 'wh5', emoji: '🪮', name: 'Stylingprodukt auftragen',   hint: 'Pomade oder Wax für Definition & Halt' });
  } else if (length === 'mittel') {
    base.push({ id: 'wh4', emoji: '✂️', name: 'Spitzen trimmen',            hint: 'Alle 6–8 Wochen für gesunde Spitzen' });
    base.push({ id: 'wh5', emoji: '🌊', name: 'Hitzeschutz auftragen',      hint: 'Vor dem Föhnen oder Glätten – immer!' });
    base.push({ id: 'wh6', emoji: '🎀', name: 'Haare flechten/aufbinden',   hint: 'Nachts schützen um Bruch zu vermeiden' });
  } else if (length === 'lang') {
    base.push({ id: 'wh4', emoji: '✂️', name: 'Spitzen trimmen',            hint: 'Alle 8–12 Wochen gegen Spliss' });
    base.push({ id: 'wh5', emoji: '🌊', name: 'Hitzeschutz auftragen',      hint: 'Vor dem Föhnen oder Glätten – ein Muss!' });
    base.push({ id: 'wh6', emoji: '🎀', name: 'Haare flechten zum Schlafen', hint: 'Losen Zopf oder French Braid – schützt vor Bruch' });
    base.push({ id: 'wh7', emoji: '🧣', name: 'Satin-Kissenbezug nutzen',   hint: 'Reduziert Reibung & hält Feuchtigkeit' });
  }

  // Farb-spezifisch
  if (color === 'blond') {
    base.push({ id: 'wh_c1', emoji: '💜', name: 'Silbershampoo anwenden',   hint: '1x pro Woche gegen Gelbstich' });
  } else if (color === 'gefarbt') {
    base.push({ id: 'wh_c1', emoji: '🎨', name: 'Farb-Shampoo verwenden',   hint: 'Schützt die Farbe & hält sie frisch' });
    base.push({ id: 'wh_c2', emoji: '💧', name: 'Farbschutz-Kur auftragen', hint: 'Gefärbtes Haar braucht extra Feuchtigkeit' });
  } else if (color === 'rot') {
    base.push({ id: 'wh_c1', emoji: '🔴', name: 'Rotes Farbshampoo nutzen', hint: 'Rote Töne verblassen schnell – Farbe auffrischen' });
  } else if (color === 'schwarz') {
    base.push({ id: 'wh_c1', emoji: '🖤', name: 'Glanz-Spülung verwenden',  hint: 'Dunkles Haar strahlt mit Pflegebehandlungen' });
  }

  return base;
}

function applyHairProfile() {
  const color  = store.get('routine_haircolor') || '';
  const length = store.get('routine_hairlength') || '';
  if (!color && !length) return;
  ROUTINES.weekly_hair = getHairItems(color, length);

  // Auch morning_body Haar-Style-Hint anpassen
  const styleItem = ROUTINES.morning_body.find(i => i.id === 'mb5');
  if (styleItem && length) {
    const hints = { kurz: 'Styling-Wax oder Pomade für deinen Look', mittel: 'Föhnen, wellen oder glätten', lang: 'Föhnen, flechten oder offen tragen' };
    styleItem.hint = hints[length] || styleItem.hint;
  }
}

// ===== Onboarding & Greeting =====
function getUsername()  { return store.get('routine_username') || ''; }
function saveUsername(n){ store.set('routine_username', n); }

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5  && h < 12) return { text: 'Guten Morgen',  emoji: '☀️' };
  if (h >= 12 && h < 17) return { text: 'Hallo',         emoji: '🌸' };
  if (h >= 17 && h < 22) return { text: 'Guten Abend',   emoji: '🌙' };
  return                         { text: 'Hey',           emoji: '⭐' };
}

const DAILY_MESSAGES = [
  'Du schaffst das heute!',
  'Strahle heute wie ein Diamant.',
  'Deine Haut wird es dir danken.',
  'Ein kleines Ritual, ein großes Lächeln.',
  'Self-care ist keine Seltenheit – es ist ein Muss!',
  'Du bist wunderschön, vergiss das nicht.',
  'Gönn dir heute etwas Gutes.',
  'Heute wird ein guter Tag!',
];

function showGreeting(name) {
  // Name in der dicken Logo-Leiste
  const logoName = document.getElementById('logoName');
  if (logoName) logoName.textContent = `von ${name} 🌸✨`;

  // Kleine Begrüßungszeile darunter
  const { text, emoji } = getGreeting();
  const msg = DAILY_MESSAGES[Math.floor(Math.random() * DAILY_MESSAGES.length)];
  const row = document.getElementById('greetingRow');
  if (row) row.innerHTML =
    `${emoji} ${text}, <strong>${escHtml(name)}</strong>! — <em>${msg}</em>`;
}

function initOnboarding() {
  const name = getUsername();

  if (!name) {
    const screen = document.getElementById('onboarding');
    screen.classList.add('show');
    setTimeout(() => document.getElementById('nameInput').focus(), 300);

    let selectedColor  = '';
    let selectedLength = '';

    // Schritt 1 → 2
    const goStep2 = () => {
      const val = document.getElementById('nameInput').value.trim();
      if (!val) { document.getElementById('nameInput').focus(); return; }
      document.getElementById('ob-step1').style.display = 'none';
      document.getElementById('ob-step2').style.display = 'block';
    };
    document.getElementById('obNext1').addEventListener('click', goStep2);
    document.getElementById('nameInput').addEventListener('keydown', e => { if (e.key === 'Enter') goStep2(); });

    // Haarfarbe auswählen
    document.querySelectorAll('#hairColorOptions .ob-option').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#hairColorOptions .ob-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedColor = btn.dataset.value;
        document.getElementById('obNext2').disabled = false;
      });
    });

    // Schritt 2 → 3
    document.getElementById('obNext2').addEventListener('click', () => {
      document.getElementById('ob-step2').style.display = 'none';
      document.getElementById('ob-step3').style.display = 'block';
    });

    // Haarlänge auswählen
    document.querySelectorAll('#hairLengthOptions .ob-option').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#hairLengthOptions .ob-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedLength = btn.dataset.value;
        document.getElementById('obFinish').disabled = false;
      });
    });

    // Fertig
    document.getElementById('obFinish').addEventListener('click', () => {
      const val = document.getElementById('nameInput').value.trim();
      saveUsername(val);
      store.set('routine_haircolor',  selectedColor);
      store.set('routine_hairlength', selectedLength);
      applyHairProfile();
      screen.classList.remove('show');
      showGreeting(val);
      renderAll();
      updateProgress();
    });

  } else {
    applyHairProfile();
    showGreeting(name);
  }
}

// ===== Init =====
function init() {
  loadPersisted();
  updateDate();
  initOnboarding();
  renderAll();
  updateProgress();
  checkCompletion();

  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
      confettiShown = false;
      updateProgress();
      checkCompletion();
    });
  });

  // Edit-Toggle
  document.getElementById('editToggleBtn').addEventListener('click', () => setEditMode(!editMode));

  // Add-Item Buttons
  document.querySelectorAll('.add-item-btn').forEach(btn =>
    btn.addEventListener('click', () => openModal(btn.dataset.key))
  );

  // Modal
  buildEmojiGrid();
  document.getElementById('modalEmoji').addEventListener('input', syncEmojiSelection);
  document.getElementById('modalSave').addEventListener('click', saveModal);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.getElementById('modalName').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveModal();
    if (e.key === 'Escape') closeModal();
  });

  // Reset Buttons
  document.getElementById('resetBtn').addEventListener('click', resetToday);
  document.getElementById('resetWeeklyBtn').addEventListener('click', resetWeekly);
  document.getElementById('resetAllBtn').addEventListener('click', resetAll);
}

document.addEventListener('DOMContentLoaded', init);
