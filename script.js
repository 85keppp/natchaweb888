/* ═══════════════════════════════════════════════════════════════
   NATCHA SPA — script.js
   All editable content lives in DATA at the top.
   Rendering functions below it are hands-off.
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   LOGO  (base64-embedded so file is self-contained)
───────────────────────────────────────────────*/
const LOGO_SRC = "image/logo.png";
/* ═══════════════════════════════════════════════
   ★  DATA  — Edit everything here  ★
═══════════════════════════════════════════════ */
const DATA = {

  /* ── Shop identity ─────────────────────────── */
  shop: {
    name:     "ณัชชา",
    nameSub:  "ศาสตร์แห่งความงามครบวงจร",
    tagline:  "ศาสตร์แห่งความงามครบวงจร",
    heroTitle: '<em>ณัชชา</em>',
    heroSub:  'ศาสตร์แห่งความงาม <span>·</span> ครบวงจร',
    aboutHeading: 'ความงามที่ดูแล<br><em>ด้วยใจและความเชี่ยวชาญ</em>',
    aboutDesc: "ณัชชา ศาสตร์แห่งความงามครบวงจร คือสถานที่แห่งการดูแลปรนนิบัติผิวพรรณเพื่อความผ่อนคลาย ผสมผสานภูมิปัญญาไทยโบราณและเทคนิคความเชี่ยวชาญกว่า 10 ปี เพื่อดูแลฟื้นฟูผิวพรรณ พร้อมบรรยากาศอบอุ่น สะอาดและเป็นกันเอง",
    copyright: "© 2026 ณัชชา ศาสตร์แห่งความงามครบวงจร",
  },

  /* ── Owner ─────────────────────────────────── */
  owner: {
    name:       "ณัชชา ลิ้มเลิศ",
    facebookUrl:"https://www.facebook.com/nuch.koi",
  },

  /* ── Contact ───────────────────────────────── */
  contact: {
    phone:      "086-399-6896",
    phoneHref:  "tel:0863996896",
    lineUrl:    "https://lin.ee/2KOuPzv",
    lineId:     "@ccd0489y (lin.ee/2KOuPzv)",
    facebookUrl:"https://m.facebook.com/ณัชชามือเพ็ชร-ศาสตร์แห่งความงามครบวงจร-107659511761659/",
    address:    "190/2 ซ.บางแก้ว ถ.เอกชัย<br>ต.แม่กลอง อ.เมือง สมุทรสงคราม 75000",
    hours:      "เปิดทุกวัน 09.00 น. - 18.00 น. (ตามนัดหมาย)",
    mapSrc:     "https://maps.google.com/maps?q=ณัชชามือเพ็ชร+สมุทรสงคราม&output=embed",
  },

  /* ══════════════════════════════════════════
     SERVICES
     ── To add a service: paste a new {} into the right array.
     ── To add a category: add a new {} to categories[].
  ══════════════════════════════════════════ */
  services: {

    /* 3 featured / signature cards */
    signature: [
      {
        name:  "นวดหน้าครบชุดVVIP",
        cat:   "นวดหน้า",
        desc:  "นวดหน้าผลัดเซลล์ผิว + นวดออกกำลังกายใบหน้า + นวดหน้ากัวซา + มาส์กหน้าสูตรบำรุงผิวมอบความชุ่มชื่นแบบล้ำลึก ลดริ้วรอย ผิวกระจ่างใส + นวดยกกระชับเดรนน้ำเหลือง",
        price: 1299,
        time:  75,
        image: "image/Guasha.jpg",
      },
      {
        name:  "บำรุงผิวกายครบชุดVVIP",
        cat:   "สปา",
        desc:  "อบสมุนไพร + ขัดผิวระเบิดขี้ไคล + นวดน้ำมันบำรุงผิว",
        price: 1750,
        time:  120,
        image: "image/Spa4.jpg",
      },
      {
        name:  "สปาผมครบชุดรวมนวดหน้า",
        cat:   "ผม+หน้า",
        desc:  "นวดหนังศีรษะ + กัวซาหนังศีรษะ + สปาเชื่อมแกนผม + ดีท็อกซ์ปรับสมดุลหนังศีรษะ พ่นสปานาโน + สระไดร์ + นวดหน้าออกกำลังกายใบหน้า + กัวซาครบชุด + มาส์กปรับสมดุลผิว ลดการระคายเคือง",
        price: 1790,
        time:  120,
        image: "image/Hair3.jpg",
      },
    ],

    /* Collapsible menu categories */
    categories: [
      {
        name:    "นวดหน้า",
        subName: "Facial Treatment",
        icon:    "fa-solid fa-face-grin",
        items: [
          {
            name:  "นวดหน้าผลัดเซลล์ผิว 8 ขั้นตอน",
            desc:  "",
            price: 199,
            time:  20,
            image: "image/Facial1.jpg",
          },
          {
            name:  "นวดหน้ามาส์กลดริ้วรอย",
            desc:  "นวดหน้าออกกำลังกายใบหน้า + มาส์กลดริ้วรอย",
            price: 599,
            time:  45,
            image: "image/facialMask.jpg",
          },
          {
            name:  "นวดหน้ากัวซายกกระชับ",
            desc:  "นวดหน้าออกกำลังกายใบหน้า + กัวซา4สหาย",
            price: 599,
            time:  45,
            image: "image/Guasha.jpg",
          },
          {
            name:  "นวดหน้าครบเซต",
            desc:  "นวดหน้าออกกำลังกายใบหน้า + กัวซาครบชุด + มาส์กปรับสมดุลผิว ลดการระคายเคือง",
            price: 999,
            time:  60,
            image: "image/Facial2.jpg",
          },
          {
        		name:  "นวดหน้าครบชุดVVIP",
        		desc:  "นวดหน้าผลัดเซลล์ผิว + นวดออกกำลังกายใบหน้า + นวดหน้ากัวซา + มาส์กหน้าสูตรบำรุงผิวมอบความชุ่มชื่นแบบล้ำลึก ลดริ้วรอย ผิวกระจ่างใส + นวดยกกระชับเดรนน้ำเหลือง",
        		price: 1299,
        		time:  75,
        		image: "image/Facial3.jpg",
          },
      ],
      },
      {
        name:    "สปา",
        subName: "Spa & Body Treatment",
        icon:    "fa-solid fa-person-dots-from-line",
        items: [
          {
            name:  "อบสมุนไพร",
            desc:  "",
            price: 290,
            time:  20,
            image: "image/Sparoom.jpg",
          },
          {
            name:  "มาส์กน้ำนมผสมทานาคาบำรุงผิว",
            desc:  "",
            price: 390,
            time:  15,
            image: "image/Spa2.jpg",
          },
          {
            name:  "นวดน้ำมันบำรุงผิว",
            desc:  "",
            price: 690,
            time:  50,
            image: "image/Spa3.jpg",
          },
          {
            name:  "ขัดผิวระเบิดขี้ไคล",
            desc:  "",
            price: 790,
            time:  45,
            image: "image/Spa4.jpg",
          },
          {
            name:  "ระเบิดขี้ไคลครบเซต",
            desc:  "อบสมุนไพร + ขัดผิวระเบิดขี้ไคล + มาส์กน้ำนม เติมวิตามิน",
            price: 1299,
            time:  90,
            image: "image/Spa5.jpg",
          },
          {
            name:  "บำรุงผิวกายครบชุดVVIP",
            desc:  "อบสมุนไพร + ขัดผิวระเบิดขี้ไคล + นวดน้ำมันบำรุงผิว",
            price: 1299,
            time:  120,
            image: "image/Spa1.jpg",
          },
        ],
      },
      {
        name:    "แว็กซ์",
        subName: "Waxing",
        icon:    "fa-solid fa-wand-sparkles",
        items: [
          {
            name:  "แว็กซ์บริเวณหนวด (หญิง)",
            desc:  "",
            price: 199,
            time:  20,
            image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=300&q=80",
          },
          {
            name:  "แว็กซ์คิ้ว พร้อมตกแต่ง",
            desc:  "",
            time:  20,
            price: 299,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
          {
            name:  "ออกแบบทรงคิ้ว + แว็กซ์คิ้ว + ลิฟติ้งขนคิ้ว",
            desc:  "",
            price: 690,
            time:  30,
            image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&q=80",
          },
          {
            name:  "แว็กซ์หน้าผาก พร้อมตกแต่ง",
            desc:  "",
            time:  30,
            price: 499,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
          {
            name:  "แว็กซ์ใบหน้าครบชุด",
            desc:  "แว็กซ์หน้าผาก + แว็กซ์คิ้ว + แว็กซ์หนวด + แว็กซ์เครา",
            time:  40,
            price: 999,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
          {
            name:  "แว็กซ์รักแร้",
            desc:  "",
            time:  20,
            price: 299,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
          {
            name:  "แว็กซ์แขน (ท่อนบนและท่อนล่าง)",
            desc:  "",
            time:  30,
            price: 599,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
          {
            name:  "แว็กซ์ขนหน้าแข้ง",
            desc:  "",
            time:  30,
            price: 599,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
          {
            name:  "แว็กซ์ขา (ท่อนบนและท่อนล่าง)",
            desc:  "",
            time:  40,
            price: 899,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
          {
            name:  "แว็กซ์บิกินี่ (แว็กซ์น้องสาว)",
            desc:  "",
            time:  30,
            price: 999,
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&q=80",
          },
        ],
      },
      {
        name:    "ขนตา & คิ้ว",
        subName: "Eyelash & Eyebrow",
        icon:    "fa-solid fa-eye",
        items: [
          {
            name:  "ต่อขนตา ไม่จำกัดเส้น",
            desc:  "",
            price: 699.799,
            time:  90,
            image: "https://images.unsplash.com/photo-1609357605129-74f2a1f0a7c0?w=300&q=80",
          },
          {
            name:  "ต่อขนตา วอลลุ่ม บาร์บี้ อนิเมะ",
            desc:  "",
            price: 899.999,
            time:  90,
            image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&q=80",
          },
          {
            name:  "ถอดขนตา + สปาขนตา",
            desc:  "",
            price: 100,
            time:  20,
            image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&q=80",
          },
          {
            name:  "ลิฟติ้งขนตา",
            desc:  "ขนตางอน ดูดีโดยไม่ต้องต่อ",
            price: 499,
            time:  40,
            image: "https://images.unsplash.com/photo-1583241475880-083f84372725?w=300&q=80",
          },
          {
            name:  "ลิฟติ้งขนคิ้ว",
            desc:  "ขนคิ้วเรียงเส้นสวยงาม",
            price: 399,
            time:  30,
            image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&q=80",
          },
          {
            name:  "ลิฟติ้งครบเซต",
            desc:  "ลิฟติ้งขนตา + ลิฟติ้งขนคิ้ว",
            price: 699,
            time:  50,
            image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&q=80",
          },
          {
            name:  "ออกแบบทรงคิ้ว + แว็กซ์คิ้ว + ลิฟติ้งขนคิ้ว",
            desc:  "",
            price: 690,
            time:  50,
            image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&q=80",
          },
          {
            name:  "ออกแบบทรงคิ้ว + แว็กซ์คิ้ว + ลิฟติ้งขนคิ้ว + ลิฟติ้งขนตา ครบชุด",
            desc:  "",
            price: 999,
            time:  60,
            image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&q=80",
          },
        ],
      },
      {
        name:    "ผม",
        subName: "Hair Treatment",
        icon:   "fa-solid fa-ruler",
        items: [
          {
            name:  "นวดบำรุงผมและหนังศีรษะ + กัวซาหนังศีรษะ",
            desc:  "",
            price: 199,
            time:  20,
            image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          },
          {
            name:  "สระ บำรุงทรีทเม้นท์ + ไดร์",
            desc:  "",
            price: 250,
            time:  20,
            image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80",
          },
          {
            name:  "นวดบำรุงผมและหนังศีรษะ + กัวซาหนังศีรษะ + บำรุงทรีทเม้นท์ + สระไดร์",
            desc:  "",
            price: 599,
            time:  60,
            image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=300&q=80",
          },
          {
            name:  "นวดบำรุงผมและหนังศีรษะ + นวดคอบ่าไหล่ + กัวซาหนังศีรษะ + ดีท็อกหนังศีรษะ + พ่นสปานาโนบำรุงเส้นผม + สระไดร์",
            desc:  "",
            price: 999,
            time:  90,
            image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=300&q=80",
          },
        ],
      },
      {
        name:    "เล็บ",
        subName: "Nail",
        icon:    "fa-solid fa-hand-sparkles",
        items: [
          {
            image: "image/nailmenu.jpg"
          },
        ],
      },
    ],
  },

  /* ── Promotions ────────────────────────────── */
  promotions: [
    {
      badge: "⭐ แนะนำ",
      name:  "คอร์สครบเซต หน้า+ผิว ชุดเล็ก",
      desc:  "Facial + Aroma Massage สำหรับ 2 ท่าน พร้อมน้ำชาสมุนไพร",
      price: 2990,
      oldPrice: 3980,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80",
    },
    {
      badge: "🔥 Hot Deal",
      name:  "Glow Up Package",
      desc:  "Facial + Body Scrub + Deep Hydration ครบจบในครั้งเดียว",
      price: 1990,
      oldPrice: 2870,
      image: "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?w=700&q=80",
    },
    {
      badge: "💚 สมาชิก",
      name:  "สมาชิกรายเดือน",
      desc:  "เลือกบริการได้ 4 ครั้ง/เดือน ส่วนลด 15% ตลอดปี",
      price: "3,490/เดือน",
      oldPrice: null,
      image: "https://images.unsplash.com/photo-1609357605129-74f2a1f0a7c0?w=700&q=80",
    },
  ],
};

/* ═══════════════════════════════════════════════
   RENDER HELPERS  (do not edit unless changing layout)
═══════════════════════════════════════════════ */

/** Format price: number → ฿1,234 */
function fmtPrice(p) {
  if (typeof p === "number") return "฿" + p.toLocaleString();
  return "฿" + p; // custom string like "3,490/เดือน"
}

/** Create a signature card element */
function buildSigCard(svc) {
  const card = document.createElement("div");
  card.className = "sig-card";
  card.innerHTML = `
    <img class="sig-img" src="${svc.image}" alt="${svc.name}" loading="lazy" />
    <div class="sig-body">
      <div class="sig-cat">${svc.cat}</div>
      <h3>${svc.name}</h3>
      <p>${svc.desc}</p>
      <div class="sig-foot">
        <span class="sig-dur"><i class="fa-regular fa-clock"></i> ${svc.time} นาที</span>
        <span class="sig-price">${fmtPrice(svc.price)}</span>
      </div>
    </div>`;
  return card;
}

/** Create a menu item card element */
function buildMenuCard(item) {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.innerHTML = `
    <img class="menu-card-img" src="${item.image}" alt="${item.name}" loading="lazy" />
    <div class="menu-card-body">
      <div>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
      </div>
      <div class="menu-card-foot">
        <span class="menu-card-dur"><i class="fa-regular fa-clock"></i> ${item.time} นาที</span>
        <span class="menu-card-price">${fmtPrice(item.price)}</span>
      </div>
    </div>`;
  return card;
}

/** Create an accordion category block */
function buildAccordionItem(cat) {
  const item = document.createElement("div");
  item.className = "acc-item";

  const header = document.createElement("div");
  header.className = "acc-header";
  header.innerHTML = `
    <div class="acc-title-wrap">
      <div class="acc-icon-wrap"><i class="${cat.icon}"></i></div>
      <div>
        <div class="acc-title">${cat.name}</div>
        <div class="acc-subtitle">${cat.subName}</div>
      </div>
    </div>
    <i class="fa-solid fa-chevron-down acc-chevron"></i>`;

  const body = document.createElement("div");
  body.className = "acc-body";

  const list = document.createElement("div");
  list.className = "acc-items-list";
  cat.items.forEach(item => list.appendChild(buildMenuCard(item)));
  body.appendChild(list);

  header.addEventListener("click", () => {
  if (cat.name === "เล็บ") {
    openNailGallery(cat.items);
  } else {
    toggleAccordion(header, body);
  }
});

  item.appendChild(header);
  item.appendChild(body);
  return item;
}

function openNailGallery(items) {
  const overlay = document.createElement("div");
  overlay.className = "nail-overlay";

  overlay.innerHTML = `
    <div class="nail-gallery">
      ${items.map(i => `
        <img src="${i.image}" alt="${i.name}" />
      `).join("")}
    </div>
    <div class="nail-close">✕</div>
  `;

  overlay.querySelector(".nail-close").onclick = () => overlay.remove();
  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.remove();
  };

  document.body.appendChild(overlay);
}

/** Create a promo card element */
function buildPromoCard(promo) {
  const card = document.createElement("div");
  card.className = "promo-card";
  const priceHTML = promo.oldPrice
    ? `<s>฿${promo.oldPrice.toLocaleString()}</s> ${fmtPrice(promo.price)}`
    : fmtPrice(promo.price);
  card.innerHTML = `
    <img src="${promo.image}" alt="${promo.name}" loading="lazy" />
    <div class="promo-over"></div>
    <div class="promo-body">
      <div class="promo-badge">${promo.badge}</div>
      <h3>${promo.name}</h3>
      <p>${promo.desc}</p>
      <div class="promo-price">${priceHTML}</div>
    </div>`;
  return card;
}

/* ═══════════════════════════════════════════════
   ACCORDION LOGIC
═══════════════════════════════════════════════ */
function toggleAccordion(header, body) {
  const item = header.parentElement; // << ตัว acc-item
  const isAlreadyOpen = header.classList.contains("is-open");

  // ปิดทั้งหมด
  document.querySelectorAll(".acc-header.is-open").forEach(h => {
    h.classList.remove("is-open");
    h.nextElementSibling.classList.remove("is-open");
    h.parentElement.classList.remove("is-open"); // << เพิ่มตรงนี้
  });

  // เปิดอันที่กด
  if (!isAlreadyOpen) {
    header.classList.add("is-open");
    body.classList.add("is-open");
    item.classList.add("is-open"); // << เพิ่มตรงนี้
  }
}
/* ═══════════════════════════════════════════════
   POPULATE HTML with DATA
═══════════════════════════════════════════════ */
function populate() {
  const { shop, owner, contact, services, promotions } = DATA;

  /* Logo */
  document.querySelectorAll("#nav-logo, #hero-logo, #footer-logo")
    .forEach(el => el.setAttribute("src", LOGO_SRC));

  /* Navbar */
  document.getElementById("nav-shop-name").textContent = shop.name;
  document.getElementById("nav-shop-sub").textContent  = shop.nameSub;
  setLink("nav-line",     contact.lineUrl);
  setLink("nav-facebook", contact.facebookUrl);
  setLink("nav-phone",    contact.phoneHref);

  /* Hero */
  document.getElementById("hero-title").innerHTML = shop.heroTitle;
  document.getElementById("hero-sub").innerHTML   = shop.heroSub;

  /* About */
  document.getElementById("about-heading").innerHTML = shop.aboutHeading;
  document.getElementById("about-desc").textContent  = shop.aboutDesc;
  document.getElementById("owner-name").textContent  = owner.name;
  document.getElementById("owner-fb").href           = owner.facebookUrl;

  /* Signature grid */
  const sigGrid = document.getElementById("sig-grid");
  services.signature.forEach(svc => sigGrid.appendChild(buildSigCard(svc)));

  /* Accordion */
  const accordion = document.getElementById("accordion");
  services.categories.forEach(cat => accordion.appendChild(buildAccordionItem(cat)));

  /* Promotions */
  const promoScroll = document.getElementById("promo-scroll");
  promotions.forEach(p => promoScroll.appendChild(buildPromoCard(p)));

  /* Contact */

  document.getElementById("contact-address").innerHTML     = contact.address;
  document.getElementById("contact-hours").textContent     = contact.hours;
  document.getElementById("contact-phone").textContent     = contact.phone;
  document.getElementById("contact-line-id").textContent   = contact.lineId;
  setLink("cta-line",     contact.lineUrl);
  setLink("cta-facebook", contact.facebookUrl);
  document.getElementById("cta-phone").href = contact.phoneHref;
  document.getElementById("cta-phone-text").textContent = "โทร " + contact.phone;
  document.getElementById("map-iframe").src = contact.mapSrc;

  /* Footer */
  document.getElementById("f-name").textContent = shop.name;
  document.getElementById("f-sub").textContent  = shop.tagline;
  document.getElementById("f-copy").textContent = shop.copyright;
  setLink("f-line",     contact.lineUrl);
  setLink("f-facebook", contact.facebookUrl);
  document.getElementById("f-phone").href = contact.phoneHref;
}

function setLink(id, href) {
  const el = document.getElementById(id);
  if (el) el.href = href;
}

/* ═══════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════ */
function initReveal() {
  const targets = document.querySelectorAll(".rv, .rv-l, .rv-r");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("on");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => obs.observe(el));
}

/* ═══════════════════════════════════════════════
   STICKY NAV
═══════════════════════════════════════════════ */
function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });
}

/* ═══════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  populate();
  initReveal();
  initNav();
});
