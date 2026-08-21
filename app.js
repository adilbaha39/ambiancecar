/* ============================================================
   AMBIANCE CAR — assets/app.js
   Shared data, translations, i18n engine, and site-wide logic.
   Loaded by every page. No backend — WhatsApp is the "server".
   ============================================================ */

/* ---------------- AGENCY DATA (extracted from the design) ---------------- */
const AGENCY = {
  name: "Ambiance Car",
  phone: "06 18 07 13 98",
  phoneIntl: "212618071398", // used to build wa.me links
  email: "contact@ambiancecar.ma",
  address: "4 Rue Abi Hanifa, Fès 30000",
  mapQuery: "4 Rue Abi Hanifa, Fès 30000, Morocco",
  hours: { ar: "مفتوح على مدار الساعة 24/7", fr: "Ouvert 24/7", en: "Open 24/7" },
  social: {
    facebook: "#",
    instagram: "#",
    whatsapp: "https://wa.me/212618071398",
  },
  cities: [
    { ar: "فاس", fr: "Fès", en: "Fez" },
    { ar: "مكناس", fr: "Meknès", en: "Meknes" },
    { ar: "الرباط", fr: "Rabat", en: "Rabat" },
    { ar: "الدار البيضاء", fr: "Casablanca", en: "Casablanca" },
    { ar: "مراكش", fr: "Marrakech", en: "Marrakech" },
  ],
};

/* ---------------- FLEET DATA (extracted from the design) ---------------- */
const CARS = [
  {
    id: "golf",
    name: "Volkswagen Golf",
    year: 2024,
    price: 400,
    seats: 5,
    transmission: { ar: "أوتوماتيك", fr: "Automatique", en: "Automatic" },
    fuel: { ar: "بنزين", fr: "Essence", en: "Petrol" },
    extra: { ar: "تكييف", fr: "Climatisation", en: "A/C" },
    image: "https://placehold.co/800x600/1a1a1a/d4af37?font=montserrat&text=Volkswagen+Golf",
  },
  {
    id: "208",
    name: "Peugeot 208",
    year: 2024,
    price: 350,
    seats: 5,
    transmission: { ar: "أوتوماتيك", fr: "Automatique", en: "Automatic" },
    fuel: { ar: "بنزين", fr: "Essence", en: "Petrol" },
    extra: { ar: "تكييف", fr: "Climatisation", en: "A/C" },
    image: "https://placehold.co/800x600/1a1a1a/d4af37?font=montserrat&text=Peugeot+208",
  },
  {
    id: "clio",
    name: "Renault Clio",
    year: 2023,
    price: 400,
    seats: 5,
    transmission: { ar: "أوتوماتيك", fr: "Automatique", en: "Automatic" },
    fuel: { ar: "بنزين", fr: "Essence", en: "Petrol" },
    extra: { ar: "تكييف", fr: "Climatisation", en: "A/C" },
    image: "https://placehold.co/800x600/1a1a1a/d4af37?font=montserrat&text=Renault+Clio",
  },
  {
    id: "duster",
    name: "Dacia Duster",
    year: 2023,
    price: 550,
    seats: 5,
    transmission: { ar: "أوتوماتيك", fr: "Automatique", en: "Automatic" },
    fuel: { ar: "بنزين", fr: "Essence", en: "Petrol" },
    extra: { ar: "تكييف", fr: "Climatisation", en: "A/C" },
    image: "https://placehold.co/800x600/1a1a1a/d4af37?font=montserrat&text=Dacia+Duster",
  },
];

/* ---------------- TRANSLATIONS ---------------- */
const I18N = {
  ar: {
    dir: "rtl",
    lang: "ar",
    nav_home: "الرئيسية",
    nav_fleet: "أسطول السيارات",
    nav_services: "خدماتنا",
    nav_cities: "المدن",
    nav_join: "التسجل بنا",
    nav_book_btn: "احجز عبر واتساب",
    hero_title_1: "تجربة قيادة",
    hero_title_2: "تليق بك.",
    hero_desc: "سيارات حديثة، نظيفة ومريحة لرحلاتك في فاس وكل مدن المغرب.",
    feat_insurance: "تأمين شامل",
    feat_support: "خدمة 24/7",
    feat_delivery: "توصيل للمطار",
    hero_cta_book: "احجز الآن عبر واتساب",
    hero_cta_fleet: "عرض جميع السيارات",
    fleet_eyebrow: "أسطولنا",
    fleet_title: "اختر السيارة المناسبة لرحلتك",
    fleet_page_title: "أسطول السيارات",
    fleet_page_desc: "تشكيلة من السيارات الحديثة والمريحة، جاهزة لرحلتك القادمة في فاس وكل مدن المغرب.",
    per_day: "الدرهم / اليوم",
    seats: "مقاعد",
    book_now: "احجز الآن",
    view_details: "التفاصيل",
    why_title: "لماذا تختارنا",
    why_insurance_t: "تأمين شامل",
    why_insurance_d: "جميع سياراتنا مؤمنة بأفضل معايير الأمان",
    why_delivery_t: "توصيل للمطار",
    why_delivery_d: "توصيل واستقبال مجاني في مطار فاس",
    why_support_t: "خدمة 24/7",
    why_support_d: "فريقنا متواجد لخدمتكم على مدار الساعة",
    why_price_t: "أفضل الأسعار",
    why_price_d: "أسعار تنافسية بدون رسوم مخفية",
    steps_eyebrow: "3 خطوات بسيطة",
    steps_title: "كيف تحجز سيارتك؟",
    step1_t: "اختر سيارتك",
    step1_d: "تصفح أسطولنا واختر السيارة المناسبة لك",
    step2_t: "حدد التواريخ",
    step2_d: "اختر تاريخ الاستلام وتاريخ التسليم",
    step3_t: "احجز عبر واتساب",
    step3_d: "تواصل معنا عبر واتساب لتأكيد الحجز",
    cities_title: "المدن المغطاة",
    contact_title: "تواصل معنا",
    booking_terms_title: "شروط الحجز",
    term1: "رخصة سياقة سارية المفعول",
    term2: "بطاقة التعريف الوطنية",
    term3: "الحد الأدنى 21 سنة",
    term4: "تأمين شامل",
    term5: "سياسة وقود عادلة",
    footer_why_title: "لماذا Ambiance Car؟",
    footer_why_desc: "نقدم لكم سيارات حديثة وخدمة عملاء مميزة وأسعار تنافسية لرحلة أكثر راحة وأمانا.",
    footer_links_title: "روابط سريعة",
    footer_legal_title: "الشروط والأحكام",
    footer_terms: "الشروط والأحكام",
    footer_about: "من نحن",
    footer_contact: "اتصل بنا",
    footer_rights: "جميع الحقوق محفوظة",
    footer_dev: "تطوير ADILOUD.DEV",
    agence_eyebrow: "من نحن",
    agence_title: "وكالة Ambiance Car",
    agence_desc: "وكالة Ambiance Car متخصصة في تأجير السيارات الحديثة في مدينة فاس وباقي مدن المغرب. نضع رهن إشارتكم أسطولاً من السيارات النظيفة والمريحة، مرفوقة بخدمة عملاء متواصلة على مدار الساعة، لنضمن لكم تجربة قيادة تليق بكم.",
    agence_mission_t: "مهمتنا",
    agence_mission_d: "نسعى لتوفير تجربة كراء سيارات بسيطة، شفافة وموثوقة لكل زوار وسكان فاس.",
    agence_services_title: "خدماتنا",
    svc1_t: "كراء السيارات",
    svc1_d: "أسطول متنوع من السيارات الاقتصادية والعائلية بأسعار تنافسية.",
    svc2_t: "توصيل للمطار",
    svc2_d: "استقبال وتوصيل مجاني بمطار فاس-سايس في أي وقت.",
    svc3_t: "تأمين شامل",
    svc3_d: "جميع السيارات مؤمنة بالكامل لراحة بالكم وأمانكم.",
    svc4_t: "خدمة 24/7",
    svc4_d: "فريقنا جاهز للرد على استفساراتكم في أي وقت من اليوم.",
    map_title: "موقعنا",
    res_title: "احجز سيارتك",
    res_desc: "عبّئ المعلومات أسفله، وسيتم توجيهك مباشرة إلى واتساب لتأكيد حجزك.",
    form_name: "الاسم الكامل",
    form_phone: "رقم الهاتف",
    form_car: "السيارة",
    form_car_choose: "اختر سيارة",
    form_start: "تاريخ الاستلام",
    form_end: "تاريخ التسليم",
    form_location: "مكان الاستلام",
    form_message: "رسالة إضافية (اختياري)",
    form_message_ph: "أي طلبات خاصة؟",
    form_submit: "تأكيد الحجز عبر واتساب",
    form_required: "الرجاء تعبئة جميع الحقول المطلوبة",
    wa_greeting: "السلام عليكم، بغيت نحجز سيارة من Ambiance Car:",
    wa_car: "السيارة",
    wa_start: "تاريخ الاستلام",
    wa_end: "تاريخ التسليم",
    wa_location: "مكان الاستلام",
    wa_name: "الاسم",
    wa_phone: "الهاتف",
    wa_message: "رسالة",
  },
  fr: {
    dir: "ltr",
    lang: "fr",
    nav_home: "Accueil",
    nav_fleet: "Notre Flotte",
    nav_services: "Nos Services",
    nav_cities: "Villes",
    nav_join: "Nous Rejoindre",
    nav_book_btn: "Réserver via WhatsApp",
    hero_title_1: "Une expérience de conduite",
    hero_title_2: "à votre image.",
    hero_desc: "Des voitures modernes, propres et confortables pour vos trajets à Fès et dans toutes les villes du Maroc.",
    feat_insurance: "Assurance complète",
    feat_support: "Service 24/7",
    feat_delivery: "Livraison à l'aéroport",
    hero_cta_book: "Réserver via WhatsApp",
    hero_cta_fleet: "Voir toutes les voitures",
    fleet_eyebrow: "Notre Flotte",
    fleet_title: "Choisissez la voiture qui vous convient",
    fleet_page_title: "Notre Flotte",
    fleet_page_desc: "Une sélection de voitures modernes et confortables, prêtes pour votre prochain trajet à Fès et partout au Maroc.",
    per_day: "DH / jour",
    seats: "places",
    book_now: "Réserver",
    view_details: "Détails",
    why_title: "Pourquoi nous choisir",
    why_insurance_t: "Assurance complète",
    why_insurance_d: "Toutes nos voitures sont assurées selon les meilleures normes",
    why_delivery_t: "Livraison à l'aéroport",
    why_delivery_d: "Prise en charge et livraison gratuites à l'aéroport de Fès",
    why_support_t: "Service 24/7",
    why_support_d: "Notre équipe est disponible à tout moment pour vous servir",
    why_price_t: "Meilleurs prix",
    why_price_d: "Des tarifs compétitifs, sans frais cachés",
    steps_eyebrow: "3 étapes simples",
    steps_title: "Comment réserver votre voiture ?",
    step1_t: "Choisissez votre voiture",
    step1_d: "Parcourez notre flotte et choisissez le véhicule qui vous convient",
    step2_t: "Fixez les dates",
    step2_d: "Choisissez la date de prise en charge et de retour",
    step3_t: "Réservez via WhatsApp",
    step3_d: "Contactez-nous sur WhatsApp pour confirmer votre réservation",
    cities_title: "Villes couvertes",
    contact_title: "Contactez-nous",
    booking_terms_title: "Conditions de réservation",
    term1: "Permis de conduire valide",
    term2: "Carte d'identité nationale",
    term3: "Âge minimum 21 ans",
    term4: "Assurance complète",
    term5: "Politique de carburant équitable",
    footer_why_title: "Pourquoi Ambiance Car ?",
    footer_why_desc: "Des voitures modernes, un service client de qualité et des prix compétitifs pour un voyage plus confortable et plus sûr.",
    footer_links_title: "Liens rapides",
    footer_legal_title: "Conditions générales",
    footer_terms: "Conditions générales",
    footer_about: "À propos",
    footer_contact: "Contact",
    footer_rights: "Tous droits réservés",
    footer_dev: "Développé par ADILOUD.DEV",
    agence_eyebrow: "À propos",
    agence_title: "Agence Ambiance Car",
    agence_desc: "Ambiance Car est une agence spécialisée dans la location de voitures modernes à Fès et dans les autres villes du Maroc. Nous mettons à votre disposition une flotte de véhicules propres et confortables, accompagnée d'un service client disponible 24/7, pour vous garantir une expérience de conduite à votre image.",
    agence_mission_t: "Notre mission",
    agence_mission_d: "Offrir une expérience de location simple, transparente et fiable à tous les visiteurs et habitants de Fès.",
    agence_services_title: "Nos services",
    svc1_t: "Location de voitures",
    svc1_d: "Une flotte variée de voitures économiques et familiales à prix compétitifs.",
    svc2_t: "Livraison aéroport",
    svc2_d: "Accueil et livraison gratuits à l'aéroport Fès-Saïss à toute heure.",
    svc3_t: "Assurance complète",
    svc3_d: "Toutes nos voitures sont entièrement assurées pour votre tranquillité.",
    svc4_t: "Service 24/7",
    svc4_d: "Notre équipe est prête à répondre à vos questions à tout moment.",
    map_title: "Notre emplacement",
    res_title: "Réservez votre voiture",
    res_desc: "Remplissez les informations ci-dessous, vous serez redirigé directement vers WhatsApp pour confirmer votre réservation.",
    form_name: "Nom complet",
    form_phone: "Numéro de téléphone",
    form_car: "Voiture",
    form_car_choose: "Choisir une voiture",
    form_start: "Date de prise en charge",
    form_end: "Date de retour",
    form_location: "Lieu de prise en charge",
    form_message: "Message additionnel (optionnel)",
    form_message_ph: "Des demandes particulières ?",
    form_submit: "Confirmer via WhatsApp",
    form_required: "Veuillez remplir tous les champs requis",
    wa_greeting: "Bonjour, je souhaite réserver une voiture chez Ambiance Car :",
    wa_car: "Voiture",
    wa_start: "Date de prise en charge",
    wa_end: "Date de retour",
    wa_location: "Lieu de prise en charge",
    wa_name: "Nom",
    wa_phone: "Téléphone",
    wa_message: "Message",
  },
  en: {
    dir: "ltr",
    lang: "en",
    nav_home: "Home",
    nav_fleet: "Our Fleet",
    nav_services: "Our Services",
    nav_cities: "Cities",
    nav_join: "Join Us",
    nav_book_btn: "Book via WhatsApp",
    hero_title_1: "A driving experience",
    hero_title_2: "made for you.",
    hero_desc: "Modern, clean and comfortable cars for your trips in Fès and every city in Morocco.",
    feat_insurance: "Full insurance",
    feat_support: "24/7 support",
    feat_delivery: "Airport delivery",
    hero_cta_book: "Book now via WhatsApp",
    hero_cta_fleet: "View all cars",
    fleet_eyebrow: "Our Fleet",
    fleet_title: "Choose the car that fits your trip",
    fleet_page_title: "Our Fleet",
    fleet_page_desc: "A range of modern, comfortable cars, ready for your next trip in Fès and across Morocco.",
    per_day: "DH / day",
    seats: "seats",
    book_now: "Book now",
    view_details: "Details",
    why_title: "Why choose us",
    why_insurance_t: "Full insurance",
    why_insurance_d: "All our cars are insured to the highest safety standards",
    why_delivery_t: "Airport delivery",
    why_delivery_d: "Free pickup and drop-off at Fès airport",
    why_support_t: "24/7 support",
    why_support_d: "Our team is available around the clock to serve you",
    why_price_t: "Best prices",
    why_price_d: "Competitive rates with no hidden fees",
    steps_eyebrow: "3 simple steps",
    steps_title: "How to book your car?",
    step1_t: "Choose your car",
    step1_d: "Browse our fleet and pick the vehicle that suits you",
    step2_t: "Set the dates",
    step2_d: "Choose your pickup date and return date",
    step3_t: "Book via WhatsApp",
    step3_d: "Contact us on WhatsApp to confirm your booking",
    cities_title: "Cities we cover",
    contact_title: "Contact us",
    booking_terms_title: "Booking conditions",
    term1: "Valid driver's license",
    term2: "National ID card",
    term3: "Minimum age 21",
    term4: "Full insurance",
    term5: "Fair fuel policy",
    footer_why_title: "Why Ambiance Car?",
    footer_why_desc: "Modern cars, outstanding customer service and competitive prices for a safer, more comfortable trip.",
    footer_links_title: "Quick links",
    footer_legal_title: "Terms & conditions",
    footer_terms: "Terms & conditions",
    footer_about: "About us",
    footer_contact: "Contact us",
    footer_rights: "All rights reserved",
    footer_dev: "Built by ADILOUD.DEV",
    agence_eyebrow: "About us",
    agence_title: "Ambiance Car Agency",
    agence_desc: "Ambiance Car is a car rental agency specializing in modern vehicles in Fès and across Morocco. We offer a fleet of clean, comfortable cars backed by round-the-clock customer support, so every trip lives up to you.",
    agence_mission_t: "Our mission",
    agence_mission_d: "To provide a simple, transparent and reliable car rental experience to every visitor and resident of Fès.",
    agence_services_title: "Our services",
    svc1_t: "Car rental",
    svc1_d: "A varied fleet of economy and family cars at competitive prices.",
    svc2_t: "Airport delivery",
    svc2_d: "Free pickup and drop-off at Fès-Saïss airport, any time of day.",
    svc3_t: "Full insurance",
    svc3_d: "Every car is fully insured for your peace of mind.",
    svc4_t: "24/7 support",
    svc4_d: "Our team is ready to answer your questions any time.",
    map_title: "Our location",
    res_title: "Book your car",
    res_desc: "Fill in the details below and you'll be taken straight to WhatsApp to confirm your booking.",
    form_name: "Full name",
    form_phone: "Phone number",
    form_car: "Car",
    form_car_choose: "Choose a car",
    form_start: "Pickup date",
    form_end: "Return date",
    form_location: "Pickup location",
    form_message: "Additional message (optional)",
    form_message_ph: "Any special requests?",
    form_submit: "Confirm via WhatsApp",
    form_required: "Please fill in all required fields",
    wa_greeting: "Hello, I'd like to book a car with Ambiance Car:",
    wa_car: "Car",
    wa_start: "Pickup date",
    wa_end: "Return date",
    wa_location: "Pickup location",
    wa_name: "Name",
    wa_phone: "Phone",
    wa_message: "Message",
  },
};

/* ---------------- LANGUAGE DETECTION & APPLICATION ---------------- */
const SUPPORTED_LANGS = ["ar", "fr", "en"];

function detectLanguage() {
  const saved = localStorage.getItem("ambiance_lang");
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  const nav = (navigator.language || "ar").slice(0, 2).toLowerCase();
  if (SUPPORTED_LANGS.includes(nav)) return nav;
  return "ar";
}

function t(key) {
  const lang = document.documentElement.getAttribute("data-lang") || "ar";
  return (I18N[lang] && I18N[lang][key]) || I18N.ar[key] || key;
}

function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = "ar";
  localStorage.setItem("ambiance_lang", lang);
  const dict = I18N[lang];
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", dict.dir);
  document.documentElement.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.classList.toggle(
      "text-[#b8935a]",
      btn.getAttribute("data-lang-switch") === lang
    );
  });

  if (typeof onLanguageApplied === "function") onLanguageApplied(lang);
}

/* ---------------- WHATSAPP LINK BUILDER ---------------- */
function buildWhatsAppLink({ carName, start, end, location, name, phone, message }) {
  const lang = document.documentElement.getAttribute("data-lang") || "ar";
  const d = I18N[lang];
  let lines = [d.wa_greeting, ""];
  if (carName) lines.push(`${d.wa_car}: ${carName}`);
  if (start) lines.push(`${d.wa_start}: ${start}`);
  if (end) lines.push(`${d.wa_end}: ${end}`);
  if (location) lines.push(`${d.wa_location}: ${location}`);
  if (name) lines.push(`${d.wa_name}: ${name}`);
  if (phone) lines.push(`${d.wa_phone}: ${phone}`);
  if (message) lines.push(`${d.wa_message}: ${message}`);
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${AGENCY.phoneIntl}?text=${text}`;
}

/* ---------------- MOBILE MENU ---------------- */
function initMobileMenu() {
  const btn = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
}

/* ---------------- LANGUAGE SWITCHER BUTTONS ---------------- */
function initLangSwitcher() {
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang-switch"));
    });
  });
}

/* ---------------- REVEAL ON SCROLL ---------------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("reveal-visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => obs.observe(el));
}

/* ---------------- STICKY NAVBAR SHADOW ---------------- */
function initNavbarScroll() {
  const nav = document.getElementById("siteNavbar");
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add("nav-scrolled");
    else nav.classList.remove("nav-scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------------- CAR CARD RENDERING ---------------- */
function carCardHTML(car) {
  const lang = document.documentElement.getAttribute("data-lang") || "ar";
  return `
  <div class="reveal car-card group bg-white rounded-2xl overflow-hidden border border-[#e9e0d0] shadow-sm hover:shadow-xl transition-all duration-500">
    <div class="relative overflow-hidden aspect-[4/3]">
      <img src="${car.image}" alt="${car.name} ${car.year} — Ambiance Car Fès"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <span class="absolute top-3 ${lang === 'ar' ? 'right-3' : 'left-3'} bg-[#141414]/85 text-[#d4af37] text-xs tracking-wide px-3 py-1 rounded-full">${car.year}</span>
    </div>
    <div class="p-5">
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-bold text-[#1a1a1a] text-lg">${car.name}</h3>
      </div>
      <div class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#8a7f6a] mb-4">
        <span>${car.transmission[lang]}</span>
        <span>&middot;</span>
        <span>${car.seats} ${t("seats")}</span>
        <span>&middot;</span>
        <span>${car.fuel[lang]}</span>
        <span>&middot;</span>
        <span>${car.extra[lang]}</span>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-[#efe8d9]">
        <div class="text-[#141414]">
          <span class="text-xl font-extrabold">${car.price}</span>
          <span class="text-xs text-[#8a7f6a]"> ${t("per_day")}</span>
        </div>
        <a href="reservation.html?car=${car.id}"
          class="text-sm font-semibold bg-[#141414] text-white px-4 py-2 rounded-full hover:bg-[#b8935a] transition-colors">
          ${t("book_now")}
        </a>
      </div>
    </div>
  </div>`;
}

function renderCarGrid(containerId, limit) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = limit ? CARS.slice(0, limit) : CARS;
  el.innerHTML = list.map(carCardHTML).join("");
}

/* Determine relative path prefix to site root depending on current page depth */
function rootPath() {
  const depth = document.documentElement.getAttribute("data-depth") || "0";
  return depth === "1" ? "../" : "./";
}

/* ---------------- INIT (called on every page) ---------------- */
function initSite() {
  applyLanguage(detectLanguage());
  initLangSwitcher();
  initMobileMenu();
  initReveal();
  initNavbarScroll();
}

document.addEventListener("DOMContentLoaded", initSite);
