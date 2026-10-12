// Product data — edit names, prices and descriptions here
const allProducts = [
  { id:"avivit", name:"AviVit‑D Breeder", tag:"Breeding Formula", cats:["birds","breeders"], price:"Rs 3,000 – 10,000",
    c1:"#0f5c4d", c2:"#1f8a72", cap:"#c9a24b", tint:"#cdeadf", badge:"Best seller",
    short:"12 essential vitamins with boosted Vitamin D3.",
    desc:"A complete vitamin formula for breeding pairs, with extra D3 to support calcium absorption, egg quality and chick development.",
    points:["12 essential vitamins","Boosted Vitamin D3","Supports fertility and egg quality","Mixes in drinking water"], sizes:["100 g","500 g"] },
  { id:"mpower", name:"M Power", tag:"Multivitamin", cats:["birds"], price:"Rs 2,000 – 25,000",
    c1:"#7a3b0e", c2:"#c46a1d", cap:"#f3e3b5", tint:"#f6dcc3",
    short:"Multivitamin, mineral & amino acid supplement.",
    desc:"Daily all‑round support with vitamins, trace minerals and amino acids for energy, feather quality and immunity.",
    points:["Vitamins + minerals + amino acids","Supports feather condition","Boosts daily vitality","For all cage birds"], sizes:["Small","Large"] },
  { id:"enlyte", name:"EN Lyte", tag:"Electrolytes", cats:["birds","breeders"], price:"Rs 1,400 – 39,900",
    c1:"#1d4e89", c2:"#3f7fca", cap:"#d6e6f7", tint:"#d4e4f6", badge:"Summer essential",
    short:"Vital electrolyte supplement for birds.",
    desc:"Rapid rehydration and electrolyte balance during heat stress, travel, illness recovery and breeding season.",
    points:["Fast rehydration","Heat‑stress support","Recovery after illness or travel","Easy water‑soluble dose"], sizes:["Small","Large"] },
  { id:"dcal", name:"D Cal Super", tag:"Calcium + D3", cats:["birds","breeders"], price:"Rs 1,500 – 39,900",
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
  { id:"cranro", name:"Cranro‑C", tag:"Urinary Health", cats:["animals"], price:"Rs 850 – 1,650",
    c1:"#a3203f", c2:"#d8506c", cap:"#fbd9e1", tint:"#f6d6de", badge:"New",
    short:"Cranberry with Ursolia & Vitamin C for urinary and renal health.",
    desc:"A cranberry-based syrup with Ursolia and Vitamin C to support optimal urinary health and renal function in dogs and cats.",
    points:["Urinary tract support","Renal function support","Cranberry with Ursolia & Vitamin C","Oral syrup format"], sizes:["30 ml","120 ml"] },
  { id:"citof", name:"Citof Syrup", tag:"Respiratory", cats:["animals"], price:"Rs 850 – 1,650",
    c1:"#0e6a78", c2:"#2aa7b8", cap:"#d4f1f5", tint:"#cfecf0",
    short:"Supportive syrup for respiratory comfort.",
    desc:"Formulated to support respiratory comfort and recovery in pets.",
    points:["Respiratory support","Recovery aid","Oral syrup format"], sizes:["30 ml","120 ml"] },
];

// Only products that have a real photo in images/products/ are shown (add enlyte/silima here once photos exist)
const hasPhoto = ["avivit","mpower","dcal","jaundy","megavitb","cranro","citof"];
const products = allProducts.filter(p => hasPhoto.includes(p.id));

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

// ---- Variant prices (PKR). Prices per size are PROVISIONAL: smallest size = low end of the live-site range, largest = high end.
// Edit the numbers here once you have the exact price list.
const variantData = {
  avivit:  [["100 g",3000],["500 g",10000]],
  mpower:  [["Small",2000],["Large",25000]],
  enlyte:  [["Small",1400],["Large",39900]],
  dcal:    [["Small",1500],["Large",39900]],
  jaundy:  [["30 ml",650],["120 ml",1350]],
  megavitb:[["30 ml",650],["120 ml",1350]],
  silima:  [["30 ml",650],["120 ml",1350]],
  cranro:  [["30 ml",850],["120 ml",1650]],
  citof:   [["30 ml",850],["120 ml",1650]],
};
allProducts.forEach(p => { p.variants = (variantData[p.id] || []).map(([label,price]) => ({label,price})); });
const money = n => "Rs " + Number(n).toLocaleString("en-US");
const money2 = n => "Rs" + Number(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});

// ---- Cart (kept in this browser only)
const CART_KEY = "fnp_cart";
function loadCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e){ return window.__cart || []; } }
function saveCart(c){ window.__cart = c; try { localStorage.setItem(CART_KEY, JSON.stringify(c)); } catch(e){} renderCartUI(); }
const findP = id => allProducts.find(p => p.id === id);
const unitPrice = (id,size) => { const v = (findP(id)?.variants||[]).find(v => v.label === size); return v ? v.price : 0; };
function cartTotals(c = loadCart()){
  return { count: c.reduce((a,i)=>a+i.qty,0), subtotal: c.reduce((a,i)=>a+i.qty*unitPrice(i.id,i.size),0) };
}
function addToCart(id,size,qty){
  const c = loadCart(); const row = c.find(i => i.id===id && i.size===size);
  if (row) row.qty += qty; else c.push({id,size,qty});
  saveCart(c);
}
const cartIcon = document.querySelector(".cart");
const drawer = document.createElement("div");
drawer.className = "cart-drawer"; drawer.id = "cartDrawer"; drawer.setAttribute("aria-hidden","true");
drawer.innerHTML = '<div class="cd-backdrop" data-cd-close></div><aside class="cd-panel" role="dialog" aria-label="Shopping cart"><div class="cd-head"><h3>Your cart</h3><button class="cd-x" data-cd-close aria-label="Close cart">×</button></div><div class="cd-items" id="cdItems"></div><div class="cd-foot" id="cdFoot"></div></aside>';
document.body.appendChild(drawer);
const openCart = () => { renderCartUI(); drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden"; };
const closeCart = () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden","true"); document.body.style.overflow=""; };
function renderCartUI(){
  const c = loadCart(), t = cartTotals(c);
  document.querySelectorAll(".cart-count").forEach(e => e.textContent = t.count);
  document.querySelectorAll(".cart b").forEach(e => e.textContent = money2(t.subtotal));
  const items = $("cdItems"), foot = $("cdFoot"); if (!items) return;
  if (!c.length){
    items.innerHTML = '<p class="cd-empty">Your cart is empty.</p>';
    foot.innerHTML = '<a href="products.html" class="btn btn-primary full">Continue shopping</a>';
    return;
  }
  items.innerHTML = c.map((i,idx) => { const p = findP(i.id); return `
    <div class="cd-item">
      <img src="images/products/${p.id}.webp" alt="${p.name}">
      <div class="cd-info"><b>${p.name}</b><small>${i.size}</small>
        <div class="qty sm"><button type="button" data-cd-q="${idx}" data-d="-1" aria-label="Decrease">−</button><span>${i.qty}</span><button type="button" data-cd-q="${idx}" data-d="1" aria-label="Increase">+</button></div>
      </div>
      <div class="cd-price">${money(i.qty*unitPrice(i.id,i.size))}<button type="button" class="cd-rm" data-cd-rm="${idx}">Remove</button></div>
    </div>`; }).join("");
  foot.innerHTML = `<div class="cd-sub"><span>Subtotal</span><b>${money(t.subtotal)}</b></div>
    <p class="cd-note">Shipping and taxes are calculated at checkout.</p>
    <a href="checkout.html" class="btn btn-gold full">Buy now</a>
    <a href="products.html" class="btn btn-ghost full">Continue shopping</a>`;
}
drawer.addEventListener("click", e => {
  if (e.target.closest("[data-cd-close]")) return closeCart();
  const q = e.target.closest("[data-cd-q]"), rm = e.target.closest("[data-cd-rm]");
  const c = loadCart();
  if (q){ const r = c[+q.dataset.cdQ]; r.qty = Math.max(1, r.qty + +q.dataset.d); saveCart(c); }
  if (rm){ c.splice(+rm.dataset.cdRm,1); saveCart(c); }
});
if (cartIcon) cartIcon.addEventListener("click", e => { e.preventDefault(); openCart(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeCart(); });

// product popup interactions
modalBody.addEventListener("click", e => {
  const box = e.target.closest(".buy"); if (!box) return;
  const id = box.dataset.id, valEl = box.querySelector(".qty-val");
  const size = () => box.querySelector(".size-opt.active").dataset.size;
  const refresh = () => box.querySelector(".m-price").textContent = money(unitPrice(id,size()) * +valEl.textContent);
  const so = e.target.closest(".size-opt");
  if (so){ box.querySelectorAll(".size-opt").forEach(b => b.classList.toggle("active", b === so)); refresh(); }
  const qb = e.target.closest(".qty-btn");
  if (qb){ valEl.textContent = Math.max(1, +valEl.textContent + +qb.dataset.d); refresh(); }
  if (e.target.closest("[data-add]")){ addToCart(id,size(),+valEl.textContent); closeModal(); openCart(); }
  if (e.target.closest("[data-buy]")){ addToCart(id,size(),+valEl.textContent); location.href = "checkout.html"; }
});

// Checkout page
const checkoutForm = $("checkoutForm");
if (checkoutForm){
  const c = loadCart(), t = cartTotals(c), sum = $("coSummary");
  if (!c.length){
    sum.innerHTML = '<p class="cd-empty">Your cart is empty. <a href="products.html" style="color:var(--green-700);font-weight:600">Browse products</a></p>';
  } else {
    sum.innerHTML = c.map(i => { const p = findP(i.id); return `<div class="co-item"><div class="co-thumb"><img src="images/products/${p.id}.webp" alt=""><i>${i.qty}</i></div><div class="co-name"><b>${p.name}</b><small>${i.size}</small></div><span>${money2(i.qty*unitPrice(i.id,i.size))}</span></div>`; }).join("") +
      `<div class="co-row"><span>Subtotal</span><span>${money2(t.subtotal)}</span></div>
       <div class="co-row"><span>Shipping</span><span class="co-muted">Calculated after address</span></div>
       <div class="co-row"><span>Taxes</span><span class="co-muted">—</span></div>
       <div class="co-row total"><span>Total</span><span><small>PKR</small> ${money2(t.subtotal)}</span></div>`;
  }
  checkoutForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!loadCart().length){ $("coMsg").textContent = "Your cart is empty."; return; }
    // Demo only: no payment or backend yet.
    saveCart([]);
    checkoutForm.style.display = "none"; $("coSummary").style.display = "none";
    $("coDone").style.display = "block";
  });
}
renderCartUI();

// Products
document.querySelectorAll(".product-grid").forEach(grid => {
  const ids = grid.dataset.ids ? grid.dataset.ids.split(",") : null;
  const list = ids ? ids.map(i => products.find(p => p.id === i)).filter(Boolean) : grid.dataset.cat ? products.filter(p => p.cats.includes(grid.dataset.cat)) : products.slice(0, +grid.dataset.limit || products.length);
  grid.innerHTML = list.map(p => `
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
          <div class="buy" data-id="${p.id}">
            <div class="opt-label">Size</div>
            <div class="sizes">${p.variants.map((v,i) => `<button type="button" class="size-opt${i===0?" active":""}" data-size="${v.label}">${v.label}</button>`).join("")}</div>
            <p class="price m-price">${money(p.variants[0].price)}</p>
            <div class="buy-row">
              <div class="qty"><button type="button" class="qty-btn" data-d="-1" aria-label="Decrease">−</button><span class="qty-val">1</span><button type="button" class="qty-btn" data-d="1" aria-label="Increase">+</button></div>
              <button type="button" class="btn btn-primary" data-add>Add to cart</button>
            </div>
            <button type="button" class="btn btn-gold full" data-buy>Buy now</button>
            <a href="contact.html" class="enq">Enquire about this product</a>
          </div>
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
});

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


// Search overlay
(function(){
  const ov=$("searchOverlay"), input=$("searchInput"), res=$("searchResults");
  if(!ov) return;
  const open=()=>{ov.classList.add("open");ov.setAttribute("aria-hidden","false");setTimeout(()=>input.focus(),50)};
  const close=()=>{ov.classList.remove("open");ov.setAttribute("aria-hidden","true")};
  $("searchBtn").addEventListener("click",open);
  $("searchClose").addEventListener("click",close);
  ov.addEventListener("click",e=>{if(e.target===ov)close()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
  input.addEventListener("input",()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){res.innerHTML="";return}
    const hits=products.filter(p=>(p.name+" "+p.tag+" "+p.short).toLowerCase().includes(q));
    res.innerHTML=hits.length?hits.map(p=>`<a class="sr" href="products.html"><img src="images/products/${p.id}.webp" alt=""><span><b>${p.name}</b><small>${p.tag} · ${p.price}</small></span></a>`).join(""):'<p class="muted">No products found.</p>';
  });
})();


// Hero slider
(function(){
  const s=document.querySelector(".slider"); if(!s) return;
  const slides=[...s.querySelectorAll(".slide")], dots=s.querySelector(".s-dots"); let i=0,t;
  slides.forEach((_,n)=>{const b=document.createElement("button");b.setAttribute("aria-label","Go to slide "+(n+1));b.addEventListener("click",()=>{go(n);restart()});dots.appendChild(b)});
  const go=n=>{i=(n+slides.length)%slides.length;slides.forEach((x,k)=>x.classList.toggle("active",k===i));[...dots.children].forEach((d,k)=>d.classList.toggle("active",k===i))};
  const restart=()=>{clearInterval(t);if(!matchMedia("(prefers-reduced-motion:reduce)").matches)t=setInterval(()=>go(i+1),7000)};
  s.querySelector(".prev").addEventListener("click",()=>{go(i-1);restart()});
  s.querySelector(".next").addEventListener("click",()=>{go(i+1);restart()});
  s.addEventListener("mouseenter",()=>clearInterval(t)); s.addEventListener("mouseleave",restart);
  go(0);restart();
})();

// External brand links: set the real URLs here
const EXTERNAL = { nutrava: "#", vdl: "#" };
document.querySelectorAll("[data-nutrava]").forEach(a => { a.href = EXTERNAL.nutrava; if (EXTERNAL.nutrava !== "#") { a.target = "_blank"; a.rel = "noopener"; } });
document.querySelectorAll("[data-vdl]").forEach(a => { a.href = EXTERNAL.vdl; if (EXTERNAL.vdl !== "#") { a.target = "_blank"; a.rel = "noopener"; } });
