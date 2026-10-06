// Product data — edit names, prices and descriptions here
const products = [
  { id:"avivit", name:"AviVit‑D Breeder", tag:"Breeding Formula", cats:["birds","breeders"], price:"Rs 2,500", from:true,
    c1:"#0f5c4d", c2:"#1f8a72", cap:"#c9a24b", tint:"#cdeadf", badge:"Best seller",
    short:"12 essential vitamins with boosted Vitamin D3.",
    desc:"A complete vitamin formula for breeding pairs, with extra D3 to support calcium absorption, egg quality and chick development.",
    points:["12 essential vitamins","Boosted Vitamin D3","Supports fertility and egg quality","Mixes in drinking water"], sizes:["Small","Large"] },
  { id:"mpower", name:"M Power", tag:"Multivitamin", cats:["birds"], price:"Rs 1,600", from:true,
    c1:"#7a3b0e", c2:"#c46a1d", cap:"#f3e3b5", tint:"#f6dcc3",
    short:"Multivitamin, mineral & amino acid supplement.",
    desc:"Daily all‑round support with vitamins, trace minerals and amino acids for energy, feather quality and immunity.",
    points:["Vitamins + minerals + amino acids","Supports feather condition","Boosts daily vitality","For all cage birds"], sizes:["Small","Large"] },
  { id:"enlyte", name:"EN Lyte", tag:"Electrolytes", cats:["birds","breeders"], price:"Rs 1,400", from:true,
    c1:"#1d4e89", c2:"#3f7fca", cap:"#d6e6f7", tint:"#d4e4f6", badge:"Summer essential",
    short:"Vital electrolyte supplement for birds.",
    desc:"Rapid rehydration and electrolyte balance during heat stress, travel, illness recovery and breeding season.",
    points:["Fast rehydration","Heat‑stress support","Recovery after illness or travel","Easy water‑soluble dose"], sizes:["Small","Large"] },
  { id:"dcal", name:"D Cal Super", tag:"Calcium + D3", cats:["birds","breeders"], price:"Rs 1,500", from:true,
    c1:"#5b4a9a", c2:"#8a77d1", cap:"#e9e3fb", tint:"#e2dcf7",
    short:"Calcium & Vitamin D3 supplement.",
    desc:"Supports strong bones, healthy beaks and well‑formed eggshells, helping prevent calcium deficiency in laying hens.",
    points:["Calcium with Vitamin D3","Stronger eggshells","Bone and beak health","Ideal for laying birds"], sizes:["Small","Large"] },
  { id:"jaundy", name:"Jaundy Syrup", tag:"Liver Support", cats:["animals","birds"], price:"Rs 650 – 1,350",
    c1:"#8a6a12", c2:"#cfa52a", cap:"#fff1c4", tint:"#f6e8bd",
    short:"Liver tonic syrup for pets.",
    desc:"A supportive syrup formulated to help maintain healthy liver function and appetite in pets.",
    points:["Liver function support","Helps maintain appetite","Oral syrup format"], sizes:["30 ml","120 ml"] },
  { id:"megavitb", name:"Megavit‑B", tag:"B‑Complex", cats:["animals","birds"], price:"Rs 650 – 1,350",
    c1:"#9a2b45", c2:"#d4506f", cap:"#fbd9e1", tint:"#f6d6de",
    short:"Vitamin B‑complex syrup.",
    desc:"B‑complex vitamins to support energy, metabolism, nerve health and recovery.",
    points:["Energy and metabolism","Nerve health","Recovery support"], sizes:["30 ml","120 ml"] },
  { id:"silima", name:"Silima Syrup", tag:"Wellness", cats:["animals"], price:"Rs 650 – 1,350",
    c1:"#2e6b3a", c2:"#56a465", cap:"#dff2e2", tint:"#d6eedb",
    short:"Herbal‑based wellness syrup for pets.",
    desc:"A wellness syrup to support detox and general health in companion animals.",
    points:["General wellness","Detox support","Oral syrup format"], sizes:["30 ml","120 ml"] },
  { id:"citof", name:"Citof Syrup", tag:"Respiratory", cats:["animals"], price:"Rs 850 – 1,650",
    c1:"#0e6a78", c2:"#2aa7b8", cap:"#d4f1f5", tint:"#cfecf0",
    short:"Supportive syrup for respiratory comfort.",
    desc:"Formulated to support respiratory comfort and recovery in pets.",
    points:["Respiratory support","Recovery aid","Oral syrup format"], sizes:["30 ml","120 ml"] },
];

// Avian care articles — edit or add articles here
const articles = [
  { id:"diet", tag:"Nutrition", g1:"#0f5c4d", g2:"#3aa58a", read:"4 min",
    title:"Building a balanced diet for parrots",
    short:"Why a seed-only diet falls short, and how to fill the vitamin and mineral gaps safely.",
    body:[
      "Seeds are tasty and convenient, but most seed mixes are high in fat and low in vitamin A, calcium and several amino acids. Birds fed only seeds can slowly develop dull feathers, weak immunity and breeding problems.",
      "A better diet combines a quality seed or pellet base with fresh vegetables, some fruit, sprouted seeds and clean water every day. Dark leafy greens, carrots and pumpkin are good sources of vitamin A.",
      "A regular multivitamin such as M Power helps cover the gaps, especially for birds that are picky eaters. Add it to drinking water as directed on the pack and change the water daily."
    ]},
  { id:"breeding", tag:"Breeding", g1:"#a07c25", g2:"#e2c06b", read:"5 min",
    title:"Preparing your pairs for breeding season",
    short:"Calcium, D3 and conditioning tips for healthy egg laying and strong chicks.",
    body:[
      "Start conditioning pairs 4–6 weeks before you expect them to breed. Healthy, well-fed birds lay better eggs and raise stronger chicks.",
      "Laying hens use large amounts of calcium to form eggshells. Without enough calcium and Vitamin D3, hens can suffer egg binding and soft-shelled eggs. A calcium supplement like D Cal Super, along with cuttlebone, helps meet this demand.",
      "A breeder vitamin such as AviVit-D Breeder supports fertility and chick development. Keep nest boxes clean, provide extra soft food once chicks hatch, and avoid disturbing pairs during laying."
    ]},
  { id:"heat", tag:"Health", g1:"#1d4e89", g2:"#5b8fd1", read:"4 min",
    title:"Keeping birds safe in extreme heat",
    short:"Spotting heat stress early and using electrolytes to support rapid recovery.",
    body:[
      "Pakistani summers can push aviary temperatures to dangerous levels. Signs of heat stress include panting with an open beak, wings held away from the body and sitting fluffed on the floor.",
      "Move cages out of direct sun, improve airflow and offer shallow water for bathing. Never place birds near hot walls or tin roofs in the afternoon.",
      "Electrolytes such as EN Lyte help birds replace lost minerals and stay hydrated. Use them during heat waves, after travel or shows, and during recovery from illness."
    ]},
  { id:"moult", tag:"Health", g1:"#5b4a9a", g2:"#8a77d1", read:"3 min",
    title:"Helping your birds through the moult",
    short:"Feathers are almost pure protein — here’s how to support birds while they regrow them.",
    body:[
      "During moult, birds replace old feathers with new ones. This takes a lot of energy and protein, so birds may seem quieter or more tired than usual.",
      "Increase protein with egg food and sprouted seeds, and give a vitamin and amino acid supplement to support healthy feather growth.",
      "Offer bathing water to help loosen old feathers, and reduce stress by keeping routines calm and consistent."
    ]},
  { id:"water", tag:"Nutrition", g1:"#0e6a78", g2:"#2aa7b8", read:"3 min",
    title:"Clean water: the simplest health habit",
    short:"Why fresh water every day matters more than most keepers think.",
    body:[
      "Water bowls quickly collect droppings, seed husks and bacteria, especially in warm weather. Dirty water is one of the most common causes of stomach problems in cage birds.",
      "Wash and refill drinkers every day. When adding vitamins or electrolytes, mix a fresh batch daily, because supplements in water lose strength over time.",
      "Use separate bowls for drinking and bathing where possible, and place them away from perches so droppings don’t fall in."
    ]},
  { id:"signs", tag:"Health", g1:"#9a2b45", g2:"#d4506f", read:"4 min",
    title:"Early warning signs of illness in birds",
    short:"Birds hide sickness well. Learn the small changes that mean it’s time to act.",
    body:[
      "In the wild, birds hide illness to avoid predators, so by the time a pet bird looks sick it may already be quite unwell.",
      "Watch for fluffed feathers for long periods, reduced appetite, changes in droppings, tail bobbing while breathing, or sleeping on the floor.",
      "Separate a sick bird, keep it warm and quiet, and contact an avian vet quickly. Supplements support general health but are not a replacement for veterinary treatment."
    ]},
];

const $ = id => document.getElementById(id);
const modal = $("modal"), modalBody = $("modalBody");

function bottle(p){
  return `<div class="bottle" style="--c1:${p.c1};--c2:${p.c2};--cap:${p.cap}">
    <div class="cap"></div>
    <div class="label"><small>FEATHERS NP</small><strong>${p.name.split(" ")[0]}</strong><span>${p.tag}</span></div>
  </div>`;
}
function openModal(html){
  modalBody.innerHTML = html;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function clickable(container, selector, fn){
  container.addEventListener("click", e => { const el = e.target.closest(selector); if (el) fn(el.dataset.id); });
  container.addEventListener("keydown", e => {
    const el = e.target.closest(selector);
    if (el && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); fn(el.dataset.id); }
  });
}

// Real photos: put files in images/products/<id>.jpg (or .png / .webp)
// and images/care/<id>.jpg. If a photo is missing, the illustration shows instead.
function photo(folder, id, alt){
  return `<img class="photo" src="images/${folder}/${id}.jpg" alt="${alt}" loading="lazy"
    data-exts="png,webp,jpeg" onload="photoOk(this)" onerror="photoNext(this)">`;
}
function photoOk(img){ img.parentNode.classList.add("has-photo"); }
function photoNext(img){
  const exts = img.dataset.exts ? img.dataset.exts.split(",") : [];
  if (!exts.length) { img.remove(); return; }
  img.dataset.exts = exts.slice(1).join(",");
  img.src = img.src.replace(/\.[a-z]+$/i, "." + exts[0]);
}

// Products
const grid = $("productGrid");
if (grid) {
  const limit = +grid.dataset.limit || products.length;
  grid.innerHTML = products.slice(0, limit).map(p => `
    <article class="product reveal" data-id="${p.id}" data-cats="${p.cats.join(" ")}" tabindex="0">
      <div class="product-stage" style="--tint:${p.tint}">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
        ${bottle(p)}${photo("products", p.id, p.name)}
      </div>
      <div class="product-body">
        <small>${p.tag}</small>
        <h3>${p.name}</h3>
        <p>${p.short}</p>
        <div class="product-foot">
          <span class="price">${p.from ? "<span>From </span>" : ""}${p.price}</span>
          <span class="more" aria-hidden="true">→</span>
        </div>
      </div>
    </article>`).join("");

  clickable(grid, ".product", id => {
    const p = products.find(x => x.id === id);
    openModal(`
      <div class="m-grid">
        <div class="m-stage" style="--tint:${p.tint}">${bottle(p)}${photo("products", p.id, p.name)}</div>
        <div class="m-info">
          <small>${p.tag}</small>
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <ul>${p.points.map(x => `<li>${x}</li>`).join("")}</ul>
          <div class="sizes">${p.sizes.map(s => `<span>${s}</span>`).join("")}</div>
          <p class="price">${p.from ? "<span>From </span>" : ""}${p.price}</p>
          <a href="contact.html" class="btn btn-primary">Enquire about this product</a>
        </div>
      </div>`);
  });

  const chips = document.querySelectorAll(".chip[data-filter]");
  const applyFilter = f => {
    chips.forEach(c => c.classList.toggle("active", c.dataset.filter === f));
    grid.querySelectorAll(".product").forEach(el =>
      el.classList.toggle("hide", f !== "all" && !el.dataset.cats.includes(f)));
  };
  chips.forEach(c => c.addEventListener("click", () => applyFilter(c.dataset.filter)));
  const cat = new URLSearchParams(location.search).get("cat");
  if (cat && chips.length) applyFilter(cat);
}

// Articles
const careGrid = $("careGrid");
if (careGrid) {
  const limit = +careGrid.dataset.limit || articles.length;
  careGrid.innerHTML = articles.slice(0, limit).map(a => `
    <article class="care-card reveal" data-id="${a.id}" data-tag="${a.tag}" tabindex="0">
      <div class="care-img" style="--g1:${a.g1};--g2:${a.g2}">${photo("care", a.id, a.title)}<span>${a.tag}</span></div>
      <small class="read">${a.read} read</small>
      <h3>${a.title}</h3>
      <p>${a.short}</p>
    </article>`).join("");

  clickable(careGrid, ".care-card", id => {
    const a = articles.find(x => x.id === id);
    openModal(`
      <div class="article">
        <div class="article-hero" style="--g1:${a.g1};--g2:${a.g2}">${photo("care", a.id, a.title)}<span>${a.tag} · ${a.read} read</span></div>
        <div class="article-body">
          <h3>${a.title}</h3>
          ${a.body.map(p => `<p>${p}</p>`).join("")}
          <a href="products.html" class="btn btn-primary">Browse products</a>
        </div>
      </div>`);
  });

  const tags = document.querySelectorAll("#careFilters .chip");
  tags.forEach(c => c.addEventListener("click", () => {
    tags.forEach(x => x.classList.toggle("active", x === c));
    careGrid.querySelectorAll(".care-card").forEach(el =>
      el.classList.toggle("hide", c.dataset.tag !== "all" && el.dataset.tag !== c.dataset.tag));
  }));
}

// Mobile menu
const nav = $("nav"), toggle = $("menuToggle");
toggle.addEventListener("click", () => { nav.classList.toggle("open"); toggle.classList.toggle("open"); });

// Header shadow on scroll
const header = $("header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 10), { passive:true });

// Reveal on scroll + counters
function countUp(el){
  const end = +el.dataset.count; let n = 0;
  const step = () => { n++; el.textContent = n; if (n < end) setTimeout(step, 1000 / end); };
  step();
}
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    en.target.querySelectorAll("[data-count]").forEach(countUp);
    io.unobserve(en.target);
  });
}, { threshold:.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Contact form (demo — not connected to a backend yet)
const form = $("contactForm");
if (form) {
  const msg = $("formMsg");
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.name.value.trim() || !form.message.value.trim()) {
      msg.textContent = "Please add your name and a message.";
      msg.className = "form-msg err";
      return;
    }
    msg.textContent = "Thank you! This is a test build — connect a form service to receive messages.";
    msg.className = "form-msg";
    form.reset();
  });
}

$("year").textContent = new Date().getFullYear();
