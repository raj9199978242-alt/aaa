import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = "outputs/first-smile-dental-clinic";
const site = "https://firstsmiledentalclinic.com";
const phone = "+91 8171515184";
const tel = "tel:+918171515184";
const whatsappText = encodeURIComponent("Hello First Smile Dental Clinic,\n\nMy Name:\nPhone Number:\nTreatment Required:\n\nI would like to book an appointment.");
const wa = `https://wa.me/918171515184?text=${whatsappText}`;
const address = "Kalibari Road, Behind Sakshi Medical, Near FirstCry Showroom, Katihar, Bihar";
const map = "https://maps.app.goo.gl/ZU24svRGdUQRfeUH6";
const mapEmbed = "https://www.google.com/maps?q=First%20Smile%20Dental%20Clinic%20Katihar%20Bihar&ll=25.5391959,87.5671782&z=17&output=embed";

const assets = {
  logo: "/assets/first-smile-logo.png",
  doctor: "/assets/doctor-pic.jpg",
  card: "/assets/dr-chandan-business-card.png",
  treatment: "/assets/clinic-treatment-1.jpg",
  patient: "/assets/clinic-patient-1.jpg",
  consult: "/assets/clinic-consultation-1.jpg",
  team: "/assets/clinic-team-patient-1.jpg",
};

const webImages = {
  clinic: assets.treatment,
  dentalCare: assets.treatment,
  xrayConsult: assets.consult,
  diagnosis: assets.patient,
};

const nav = [
  ["Home", "/"],
  ["About", "/about-us/"],
  ["Dr. Chandan Kumar", "/about-us/dr-chandan-kumar/"],
  ["Services", "/services/"],
  ["Gallery", "/gallery/"],
  ["Testimonials", "/testimonials/"],
  ["FAQ", "/faq/"],
  ["Blog", "/blog/"],
  ["Contact", "/contact/"],
];

const services = [
  {
    title: "Root Canal Treatment",
    slug: "root-canal-treatment",
    key: "Root Canal Treatment in Katihar",
    intro: "Relieve tooth pain and save a natural tooth with careful root canal treatment at First Smile Dental Clinic in Katihar.",
    image: webImages.dentalCare,
    symptoms: ["Lingering tooth pain", "Sensitivity to hot or cold", "Swelling near a tooth", "Pain while chewing"],
    process: ["Diagnosis and X-ray review", "Local anesthesia for comfort", "Cleaning and shaping the root canals", "Sealing and restoring the tooth"],
    related: ["dental-fillings", "tooth-extraction", "dental-implants"],
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    key: "Dental Implants in Katihar",
    intro: "A long-term tooth replacement option for missing teeth, planned carefully around your bone, bite and smile goals.",
    image: webImages.xrayConsult,
    symptoms: ["Single missing tooth", "Loose denture concerns", "Difficulty chewing", "Gaps that affect confidence"],
    process: ["Consultation and oral evaluation", "X-ray based planning", "Implant placement or referral planning when needed", "Final crown or prosthetic restoration"],
    related: ["dentures", "tooth-extraction", "smile-makeover"],
  },
  {
    title: "Teeth Cleaning",
    slug: "teeth-cleaning",
    key: "Teeth Cleaning in Katihar",
    intro: "Professional cleaning helps remove deposits, support gum health and keep your smile feeling fresh.",
    image: webImages.dentalCare,
    symptoms: ["Bleeding gums", "Bad breath", "Visible deposits", "Routine prevention"],
    process: ["Oral health check", "Scaling and plaque removal", "Polishing", "Home-care guidance"],
    related: ["teeth-whitening", "dental-fillings", "pediatric-dentistry"],
  },
  {
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    key: "Teeth Whitening in Katihar",
    intro: "Brighten stained teeth with dentist-guided whitening advice that respects enamel health and sensitivity.",
    image: webImages.dentalCare,
    symptoms: ["Tea or coffee stains", "Yellowing teeth", "Event-ready smile goals", "Uneven brightness"],
    process: ["Shade and sensitivity check", "Cleaning if needed", "Whitening plan selection", "After-care instructions"],
    related: ["teeth-cleaning", "smile-makeover", "dental-fillings"],
  },
  {
    title: "Braces",
    slug: "braces",
    key: "Braces in Katihar",
    intro: "Straighten crowded or misaligned teeth with orthodontic guidance designed for function, hygiene and confidence.",
    image: webImages.xrayConsult,
    symptoms: ["Crowded teeth", "Spacing", "Bite imbalance", "Teen or adult alignment needs"],
    process: ["Smile and bite assessment", "Records and treatment discussion", "Appliance planning", "Regular progress visits"],
    related: ["pediatric-dentistry", "teeth-cleaning", "smile-makeover"],
  },
  {
    title: "Tooth Extraction",
    slug: "tooth-extraction",
    key: "Tooth Extraction in Katihar",
    intro: "When a tooth cannot be saved, extraction is planned gently with clear after-care and replacement options.",
    image: webImages.diagnosis,
    symptoms: ["Severely damaged tooth", "Advanced infection", "Loose painful tooth", "Wisdom tooth concerns"],
    process: ["Exam and X-ray", "Discussion of save-or-remove options", "Comfort-focused extraction", "Healing and replacement guidance"],
    related: ["dental-implants", "dentures", "emergency-dental-care"],
  },
  {
    title: "Dental Fillings",
    slug: "dental-fillings",
    key: "Dental Fillings in Katihar",
    intro: "Repair cavities and minor tooth damage with tooth-colored filling care focused on comfort and durability.",
    image: webImages.dentalCare,
    symptoms: ["Small cavities", "Food sticking in a tooth", "Mild sensitivity", "Broken old fillings"],
    process: ["Cavity diagnosis", "Decay removal", "Filling placement", "Bite adjustment and polishing"],
    related: ["root-canal-treatment", "teeth-cleaning", "pediatric-dentistry"],
  },
  {
    title: "Dentures",
    slug: "dentures",
    key: "Dentures in Katihar",
    intro: "Restore chewing and facial support with partial or full denture options planned around your comfort.",
    image: webImages.xrayConsult,
    symptoms: ["Multiple missing teeth", "Loose old denture", "Difficulty eating", "Smile support concerns"],
    process: ["Mouth evaluation", "Impressions", "Trial and fit check", "Adjustment visits"],
    related: ["dental-implants", "tooth-extraction", "smile-makeover"],
  },
  {
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    key: "Kids Dental Clinic in Katihar",
    intro: "Gentle dental visits for children, with prevention, habit guidance and parent-friendly explanations.",
    image: webImages.clinic,
    symptoms: ["Child tooth pain", "Cavities in milk teeth", "Preventive checkups", "New permanent teeth"],
    process: ["Friendly introduction", "Child-focused examination", "Cleaning or treatment planning", "Diet and brushing guidance"],
    related: ["teeth-cleaning", "dental-fillings", "braces"],
  },
  {
    title: "Smile Makeover",
    slug: "smile-makeover",
    key: "Smile Makeover in Katihar",
    intro: "Plan cosmetic and restorative improvements together, from whitening to reshaping, fillings and replacement options.",
    image: webImages.xrayConsult,
    symptoms: ["Stained teeth", "Chipped teeth", "Gaps", "Uneven smile line"],
    process: ["Smile discussion", "Health-first exam", "Treatment sequencing", "Step-by-step smile improvement"],
    related: ["teeth-whitening", "dental-implants", "braces"],
  },
  {
    title: "Emergency Dental Care",
    slug: "emergency-dental-care",
    key: "Emergency Dentist in Katihar",
    intro: "For urgent tooth pain, swelling, broken teeth or dental injury, call First Smile Dental Clinic for guidance.",
    image: webImages.diagnosis,
    symptoms: ["Severe toothache", "Swelling", "Broken tooth", "Dental injury"],
    process: ["Phone triage", "Urgent evaluation", "Pain-relief focused treatment", "Follow-up plan"],
    related: ["root-canal-treatment", "tooth-extraction", "dental-fillings"],
  },
];

const faqs = [
  ["Where is First Smile Dental Clinic located?", `${address}.`],
  ["Who is the dentist at First Smile Dental Clinic?", "The clinic is led by Dr. Chandan Kumar, BDS, MIDA, FAGE, Oral & Dental Surgeon."],
  ["Do you provide kids dental care in Katihar?", "Yes. The clinic welcomes children for checkups, cavity care, prevention and parent guidance."],
  ["How do I book an appointment?", `Call or WhatsApp ${phone}. You can also use the Book Appointment page to open WhatsApp with your details.`],
  ["What are the visiting hours?", "Visiting Hour: 9AM- 7PM DAILY. Please call or WhatsApp before visiting to confirm availability."],
  ["Do you provide emergency dental care?", "Yes. For severe tooth pain, swelling, broken teeth or dental injury, contact the clinic as soon as possible."],
];

const testimonials = [
  ["A comfortable dental visit", "The clinic explained the treatment clearly and made the visit feel simple from start to finish.", "Patient from Katihar"],
  ["Good care for family dental needs", "Dr. Chandan Kumar listened patiently and guided us with practical options.", "Local family"],
  ["Clear advice and gentle treatment", "The appointment felt organized, and the team gave helpful after-care instructions.", "First Smile patient"],
];

function ensure(file) {
  mkdirSync(dirname(join(root, file)), { recursive: true });
}

function depthFor(file) {
  const dir = dirname(file);
  return dir === "." ? 0 : dir.split("/").length;
}

function prefixFor(file) {
  return "../".repeat(depthFor(file));
}

function localPreviewPath(file, target) {
  const prefix = prefixFor(file);
  const match = target.match(/^([^?#]*)(.*)$/);
  const clean = match?.[1] || "/";
  const suffix = match?.[2] || "";

  if (clean === "/" || clean === "") return `${prefix}index.html${suffix}`;
  if (clean.includes(".")) return `${prefix}${clean.replace(/^\//, "")}${suffix}`;

  const normalized = clean.replace(/^\//, "").replace(/\/$/, "");
  return `${prefix}${normalized}/index.html${suffix}`;
}

function localizeHtml(file, html) {
  if (!file.endsWith(".html")) return html;

  return html
    .replace(/\b(href|src|data-lightbox)="\/(?!\/)([^"]*)"/g, (_all, attr, target) => `${attr}="${localPreviewPath(file, `/${target}`)}"`)
    .replace(/url=\/([^"'>]*)/g, (_all, target) => `url=${localPreviewPath(file, `/${target}`)}`);
}

function schemaBase(extra = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "First Smile Dental Clinic",
    image: `${site}/assets/first-smile-logo.png`,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kalibari Road, Behind Sakshi Medical, Near FirstCry Showroom",
      addressLocality: "Katihar",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 09:00-19:00",
    url: site,
    areaServed: ["Katihar", "Bihar", "India"],
    ...extra,
  };
}

function layout({ title, description, path, hero, eyebrow = "First Smile Dental Clinic", body, schema = [] }) {
  const canonical = `${site}${path}`;
  const json = [schemaBase(), ...schema].map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("");
  const heroMedia = hero.noImage ? "" : `<div class="hero-photo reveal"><img src="${hero.image || assets.treatment}" alt="${hero.alt || hero.title}"></div>`;
  const heroClass = hero.noImage ? "container hero-grid hero-grid-single" : "container hero-grid";
  return `<!doctype html>
<html lang="en-IN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site}/assets/first-smile-logo.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <link rel="icon" href="/assets/first-smile-logo.png">
  <link rel="stylesheet" href="/styles.css">
  ${json}
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <header class="topbar">
    <nav class="container nav" aria-label="Main navigation">
      <a class="brand" href="/" aria-label="First Smile Dental Clinic home"><img src="${assets.logo}" alt="First Smile Dental Clinic logo"><span>First Smile Dental Clinic</span></a>
      <button class="menu-toggle" type="button" aria-label="Open menu">Menu</button>
      <div class="links">${nav.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>
      <div class="actions"><a class="btn secondary" href="${tel}">Call</a><a class="btn" href="${wa}" target="_blank" rel="noopener">WhatsApp</a></div>
    </nav>
  </header>
  <main id="main">
    <section class="page-hero premium-hero">
      <div class="${heroClass}">
        <div class="reveal"><p class="eyebrow">${eyebrow}</p><h1>${hero.title}</h1><p class="lead">${hero.text}</p><div class="hero-actions"><a class="btn" href="${wa}" target="_blank" rel="noopener">Book on WhatsApp</a><a class="btn secondary" href="${tel}">Call ${phone}</a></div></div>
        ${heroMedia}
      </div>
    </section>
    ${body}
  </main>
  <footer class="footer">
    <div class="container footer-grid">
      <div><img src="${assets.logo}" alt="First Smile Dental Clinic logo"><p>Premium, simple dental care for Katihar families. Led by Dr. Chandan Kumar, BDS, MIDA, FAGE.</p></div>
      <div><h3>Pages</h3>${nav.slice(1).map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}<a href="/book-appointment/">Book Appointment</a></div>
      <div><h3>Services</h3>${services.slice(0, 7).map((s) => `<a href="/services/${s.slug}/">${s.title}</a>`).join("")}</div>
      <div><h3>Contact</h3><a href="${tel}">${phone}</a><a href="${wa}" target="_blank" rel="noopener">WhatsApp Appointment</a><a href="${map}" target="_blank" rel="noopener">${address}</a><p>Visiting Hour: 9AM- 7PM DAILY</p></div>
    </div>
    <div class="container bottom">© 2026 First Smile Dental Clinic. Information is educational and does not replace a clinical examination.</div>
  </footer>
  <script src="/script.js" defer></script>
</body>
</html>`;
}

function serviceCards(list = services) {
  return `<div class="service-grid">${list.map((s) => `<article class="card service-card reveal"><p class="eyebrow">${s.key}</p><h3>${s.title}</h3><p>${s.intro}</p><a href="/services/${s.slug}/">Learn more</a></article>`).join("")}</div>`;
}

function ctaBlock(title = "Ready to plan your visit?", text = "Send your name, phone number and service needed on WhatsApp. The clinic team will guide you with the next step.") {
  return `<section class="section cta-band"><div class="container grid-2"><div><p class="eyebrow">Appointment</p><h2>${title}</h2><p class="lead">${text}</p></div><div class="cta-actions"><a class="btn" href="${wa}" target="_blank" rel="noopener">Book on WhatsApp</a><a class="btn secondary" href="/contact/">Contact Clinic</a></div></div></section>`;
}

function mapSection() {
  return `<section class="section soft"><div class="container"><iframe class="map lazy-map" title="First Smile Dental Clinic map" data-src="${mapEmbed}" src="about:blank" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><p class="map-link"><a href="${map}" target="_blank" rel="noopener">Open First Smile Dental Clinic on Google Maps</a></p></div></section>`;
}

function writePage(file, html) {
  ensure(file);
  writeFileSync(join(root, file), localizeHtml(file, html));
}

function writeAsset(file, content) {
  ensure(file);
  writeFileSync(join(root, file), content);
}

function treatmentSvg(service) {
  const label = service.title.replace(/&/g, "and");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" role="img" aria-labelledby="title desc">
  <title id="title">${label} at First Smile Dental Clinic</title>
  <desc id="desc">Original dental treatment illustration for patient education.</desc>
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#eaf7ff"/><stop offset="1" stop-color="#c9f0f0"/></linearGradient>
    <linearGradient id="tooth" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#ffffff"/><stop offset="1" stop-color="#d9f1ff"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#0d5f91" flood-opacity=".22"/></filter>
  </defs>
  <rect width="1200" height="900" rx="58" fill="url(#bg)"/>
  <circle cx="980" cy="160" r="110" fill="#5db656" opacity=".18"/>
  <circle cx="190" cy="720" r="160" fill="#3ea5f5" opacity=".16"/>
  <path d="M484 193c-74 0-132 62-132 146 0 54 30 132 52 214 24 89 37 170 87 170 39 0 59-61 109-151 50 90 70 151 109 151 50 0 63-81 87-170 22-82 52-160 52-214 0-84-58-146-132-146-47 0-75 28-116 28s-69-28-116-28z" fill="url(#tooth)" stroke="#0d5f91" stroke-width="22" filter="url(#shadow)"/>
  <path d="M480 308c32 93 54 172 94 226 17-37 38-82 59-119" fill="none" stroke="#3ea5f5" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>
  <rect x="270" y="662" width="660" height="86" rx="43" fill="#10283d" opacity=".95"/>
  <text x="600" y="715" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="800" fill="#ffffff">${label}</text>
  <text x="600" y="790" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#0d5f91">First Smile Dental Clinic, Katihar</text>
</svg>`;
}

const homeBody = `
<section class="home-visual-band"><div class="container home-gallery-wrap reveal"><div class="home-gallery-card"><img src="${assets.patient}" alt="Dental treatment at First Smile Dental Clinic Katihar"><img src="${assets.consult}" alt="Dr. Chandan Kumar explaining dental treatment"><img src="${assets.treatment}" alt="Dental chair and treatment setup in Katihar"><img src="${assets.team}" alt="Patient care at First Smile Dental Clinic"></div></div></section>
<section class="section soft welcome-section"><div class="container grid-2"><div class="reveal"><p class="eyebrow">Welcome</p><h2>Your trusted dentist in Katihar, Bihar.</h2><p class="lead">First Smile Dental Clinic offers premium, simple dental care led by Dr. Chandan Kumar, BDS, MIDA, FAGE. The clinic focuses on clear explanations, gentle planning and practical treatment options for families in Katihar.</p><div class="cards two"><div class="card"><h3>Dr. Chandan Kumar</h3><p>Oral & Dental Surgeon providing patient-friendly dental care in Katihar.</p><a href="/about-us/dr-chandan-kumar/">Meet the doctor</a></div><div class="card"><h3>Visiting Hour</h3><p>9AM- 7PM DAILY. Please call or WhatsApp before visiting.</p><a href="/contact/">Contact clinic</a></div></div></div><div class="doctor-card reveal"><img src="${assets.doctor}" alt="Dr. Chandan Kumar at First Smile Dental Clinic Katihar"></div></div></section>
<section class="section"><div class="container"><p class="eyebrow">Why Choose Us</p><h2>Care that feels organized, warm and easy to understand.</h2><div class="cards"><div class="card reveal"><h3>Clear Treatment Guidance</h3><p>Every visit is planned around diagnosis, explanation and realistic next steps.</p></div><div class="card reveal"><h3>Complete Dental Services</h3><p>From cleaning and fillings to root canals, braces, dentures and emergency dental care.</p></div><div class="card reveal"><h3>Local Katihar Clinic</h3><p>Conveniently located on Kalibari Road, behind Sakshi Medical, near FirstCry Showroom.</p></div></div></div></section>
<section class="section soft"><div class="container grid-2"><div class="doctor-card reveal"><img src="${assets.consult}" alt="Dental consultation at First Smile Dental Clinic Katihar"></div><div class="reveal"><p class="eyebrow">Patient Journey</p><h2>A calm path from concern to care.</h2><p class="lead">Whether you have tooth pain, want a routine cleaning, need treatment for a child or are planning a smile improvement, the clinic team helps you understand the process before treatment begins.</p><div class="journey"><div class="card"><h3>Share Concern</h3><p>Tell us your symptoms or treatment goal.</p></div><div class="card"><h3>Clinical Check</h3><p>Get a careful oral evaluation.</p></div><div class="card"><h3>Clear Plan</h3><p>Understand options and steps.</p></div><div class="card"><h3>Follow Care</h3><p>Receive after-care guidance.</p></div></div></div></div></section>
<section class="section"><div class="container"><p class="eyebrow">Services</p><h2>Dental services for Katihar families.</h2><p class="lead">Explore patient-friendly treatment pages written in simple language for local dental searches.</p>${serviceCards(services.slice(0, 9))}<div class="hero-actions"><a class="btn" href="/services/">View all services</a><a class="btn secondary" href="${wa}" target="_blank" rel="noopener">Book on WhatsApp</a></div></div></section>
<section class="section soft"><div class="container"><p class="eyebrow">Clinic Gallery</p><h2>First Smile Dental Clinic in pictures.</h2><div class="gallery">${[
  [assets.treatment, "Dental treatment at First Smile Dental Clinic Katihar"],
  [assets.patient, "Patient care at First Smile Dental Clinic"],
  [assets.consult, "Dental consultation with X-ray explanation"],
  [assets.team, "First Smile Dental Clinic patient result"],
  [assets.doctor, "Dr. Chandan Kumar"],
  [assets.card, "First Smile Dental Clinic business card"],
].map(([src, alt]) => `<button type="button" data-lightbox="${src}"><img src="${src}" alt="${alt}" loading="lazy"></button>`).join("")}</div></div></section>
<section class="section"><div class="container grid-2"><div class="reveal"><p class="eyebrow">FAQ</p><h2>Questions before visiting?</h2><div class="faq-list">${faqs.slice(0, 4).map(([q, a]) => `<div class="faq-item"><button class="faq-q" type="button">${q}</button><div class="faq-a"><p>${a}</p></div></div>`).join("")}</div></div><form class="form booking-form reveal"><h3>Appointment Form</h3><label>Name<input name="name" required></label><label>Phone Number<input name="phone" required></label><label>Service Needed<select name="service">${services.map((s) => `<option>${s.title}</option>`).join("")}</select></label><button class="btn" type="submit">Open WhatsApp</button></form></div></section>
${mapSection()}
${ctaBlock("Welcome to a better dental visit.", "Whether you need a routine checkup or a comprehensive treatment plan, First Smile Dental Clinic is ready to welcome you. Visiting Hour: 9AM- 7PM DAILY.")}`;

writePage("index.html", layout({
  title: "Dental Clinic in Katihar | First Smile Dental Clinic",
  description: "First Smile Dental Clinic is a premium dental clinic in Katihar led by Dr. Chandan Kumar, BDS, MIDA, FAGE. Call or WhatsApp +91 8171515184.",
  path: "/",
  hero: { title: "Your Smile, Our Priority.", text: "Trust Dr. Chandan Kumar for premium dental care, advanced treatments and personalized attention in Katihar.", image: assets.treatment, alt: "Dental care at First Smile Dental Clinic Katihar" },
  body: homeBody,
}));

const aboutBody = `
<section class="section"><div class="container grid-2"><div class="reveal"><p class="eyebrow">About Us</p><h2>Premium care, explained simply.</h2><p class="lead">First Smile Dental Clinic serves patients in Katihar with a calm, organized approach to dental care led by Dr. Chandan Kumar. The focus is not only treatment, but also helping every patient understand the concern, the available options and the expected next steps.</p><div class="cards two"><div class="card"><h3>Clear Planning</h3><p>Diagnosis, options and treatment sequence are explained before care begins.</p></div><div class="card"><h3>Family Friendly</h3><p>Dental care for adults, children and families looking for a reliable local dentist in Katihar.</p></div></div></div><div class="doctor-card reveal"><img src="${assets.doctor}" alt="Dr. Chandan Kumar, dentist at First Smile Dental Clinic Katihar"></div></div></section>
<section class="section soft"><div class="container grid-2"><div class="doctor-card reveal"><img src="${assets.consult}" alt="Dr. Chandan Kumar explaining dental treatment to a patient in Katihar"></div><div class="reveal"><p class="eyebrow">Meet Your Dentist</p><h2>Dr. Chandan Kumar</h2><p class="lead">BDS, MIDA, FAGE. Oral & Dental Surgeon. Dr. Chandan Kumar keeps visits calm and practical with clear explanations, careful diagnosis and treatment planning that patients can understand.</p><div class="hero-actions"><a class="btn" href="/about-us/dr-chandan-kumar/">Meet Dr. Chandan Kumar</a><a class="btn secondary" href="${wa}" target="_blank" rel="noopener">Book on WhatsApp</a></div></div></div></section>
<section class="section soft"><div class="container"><h2>Why patients choose First Smile</h2><div class="cards"><div class="card"><h3>Led by Dr. Chandan Kumar</h3><p>BDS, MIDA, FAGE, Oral & Dental Surgeon.</p></div><div class="card"><h3>Complete Dental Services</h3><p>Root canal, implants, cleaning, whitening, braces, fillings, dentures and emergency care.</p></div><div class="card"><h3>Local Katihar Access</h3><p>Located on Kalibari Road, behind Sakshi Medical, near FirstCry Showroom.</p></div></div></div></section>
${ctaBlock()}`;

const doctorBody = `
<section class="section"><div class="container grid-2"><div class="doctor-card reveal"><img src="${assets.doctor}" alt="Dr. Chandan Kumar First Smile Dental Clinic Katihar"></div><div class="reveal"><p class="eyebrow">Meet The Doctor</p><h2>Dr. Chandan Kumar</h2><p class="lead">Dr. Chandan Kumar is a BDS, MIDA, FAGE qualified Oral & Dental Surgeon. His approach is calm, practical and patient-first: understand the problem, explain the treatment, and help the patient make a confident decision.</p><div class="cards two"><div class="card"><h3>Qualification</h3><p>BDS, MIDA, FAGE</p></div><div class="card"><h3>Designation</h3><p>Oral & Dental Surgeon</p></div></div></div></div></section>
<section class="section soft"><div class="container"><h2>Care Philosophy</h2><div class="journey"><div class="card"><h3>Listen First</h3><p>Your symptoms and expectations guide the consultation.</p></div><div class="card"><h3>Diagnose Clearly</h3><p>The concern is evaluated with appropriate clinical checks.</p></div><div class="card"><h3>Explain Options</h3><p>Benefits, limitations and appointment needs are discussed.</p></div><div class="card"><h3>Treat Gently</h3><p>Care is planned around comfort and long-term oral health.</p></div></div></div></section>
${ctaBlock("Book a consultation with Dr. Chandan Kumar", "For tooth pain, missing teeth, kids dental care or a routine checkup, contact First Smile Dental Clinic in Katihar.")}`;

const servicesBody = `
<section class="section"><div class="container"><p class="eyebrow">Dental Services in Katihar</p><h2>Care for pain relief, prevention, confidence and long-term function.</h2><p class="lead">Explore common treatments offered at First Smile Dental Clinic. Each service page is written in simple language so patients can understand when treatment may be needed and what usually happens during a visit.</p>${serviceCards()}</div></section>
${ctaBlock("Not sure which service you need?", "Message the clinic with your concern. The team can help you choose the right appointment type.")}`;

const galleryBody = `
<section class="section"><div class="container"><p class="eyebrow">Clinic Gallery</p><h2>First Smile Dental Clinic in Katihar</h2><p class="lead">A look at the clinic, treatment room and patient-care moments.</p><div class="gallery">${[
  [assets.treatment, "Dental treatment at First Smile Dental Clinic Katihar"],
  [assets.patient, "Patient care at First Smile Dental Clinic"],
  [assets.consult, "Dental consultation with X-ray explanation"],
  [assets.team, "First Smile Dental Clinic patient result"],
  [assets.doctor, "Dr. Chandan Kumar"],
  [assets.card, "First Smile Dental Clinic business card"],
].map(([src, alt]) => `<button type="button" data-lightbox="${src}"><img src="${src}" alt="${alt}" loading="lazy"></button>`).join("")}</div></div></section>
${ctaBlock("Visit First Smile Dental Clinic", "Call or WhatsApp before visiting so the team can guide you with availability.")}`;

const testimonialsBody = `
<section class="section"><div class="container"><p class="eyebrow">Patient Reviews</p><h2>What patients say about First Smile Dental Clinic</h2><p class="lead">Patient feedback is summarized in original language for the website. For public reviews, visit the clinic's Google Maps profile.</p><div class="cards">${testimonials.map(([t, q, n]) => `<article class="card reveal"><h3>${t}</h3><p>"${q}"</p><p><strong>${n}</strong></p></article>`).join("")}</div><div class="hero-actions"><a class="btn secondary" href="${map}" target="_blank" rel="noopener">See Google Profile</a><a class="btn" href="${wa}" target="_blank" rel="noopener">Book Appointment</a></div></div></section>`;

const faqBody = `
<section class="section"><div class="container narrow"><p class="eyebrow">FAQ</p><h2>Dental clinic questions in Katihar</h2><div class="faq-list">${faqs.map(([q, a]) => `<div class="faq-item"><button class="faq-q" type="button">${q}</button><div class="faq-a"><p>${a}</p></div></div>`).join("")}</div></div></section>
${ctaBlock("Have another question?", "Send it on WhatsApp and the clinic team will help you choose the right next step.")}`;

const blogPosts = [
  ["When should you see a dentist for tooth pain?", "Tooth pain that lingers, wakes you at night, or comes with swelling should be checked promptly. Early diagnosis can often make treatment simpler.", "tooth-pain-dentist-katihar"],
  ["How often should children visit a dentist?", "Many children benefit from regular checkups so cavities, brushing issues and tooth eruption can be monitored early.", "kids-dental-checkup-katihar"],
  ["Cleaning vs whitening: what is the difference?", "Cleaning removes deposits and stains from the tooth surface. Whitening is a separate cosmetic process to improve tooth shade after dental evaluation.", "teeth-cleaning-vs-whitening"],
];
const blogBody = `
<section class="section"><div class="container"><p class="eyebrow">Dental Blog</p><h2>Simple dental advice for Katihar families</h2><div class="cards">${blogPosts.map(([t, p, slug]) => `<article class="card reveal"><h3>${t}</h3><p>${p}</p><a href="/blog/#${slug}">Read guide</a></article>`).join("")}</div></div></section>
<section class="section soft"><div class="container narrow">${blogPosts.map(([t, p, slug]) => `<article id="${slug}" class="article-block"><h2>${t}</h2><p class="lead">${p}</p><p>Dental symptoms can look similar from the outside, so online information should be used as guidance only. A dentist can examine the tooth, gums and bite to identify the actual cause and recommend suitable care.</p><p><a href="${wa}" target="_blank" rel="noopener">Ask First Smile Dental Clinic on WhatsApp</a></p></article>`).join("")}</div></section>`;

const contactBody = `
<section class="section"><div class="container grid-2"><div class="reveal"><p class="eyebrow">Contact</p><h2>First Smile Dental Clinic, Katihar</h2><p class="lead">${address}</p><div class="cards two"><div class="card"><h3>Phone & WhatsApp</h3><p><a href="${tel}">${phone}</a></p></div><div class="card"><h3>Visiting Hours</h3><p>9AM- 7PM DAILY</p></div></div><div class="hero-actions"><a class="btn" href="${wa}" target="_blank" rel="noopener">Book on WhatsApp</a><a class="btn secondary" href="${map}" target="_blank" rel="noopener">Open Google Maps</a></div></div><form class="form booking-form reveal"><h3>Appointment Form</h3><label>Name<input name="name" required></label><label>Phone Number<input name="phone" required></label><label>Service Needed<select name="service">${services.map((s) => `<option>${s.title}</option>`).join("")}</select></label><button class="btn" type="submit">Open WhatsApp</button></form></div></section>
${mapSection()}`;

const appointmentBody = `
<section class="section"><div class="container grid-2"><div class="reveal"><p class="eyebrow">Book Appointment</p><h2>Send your appointment request on WhatsApp.</h2><p class="lead">Only three fields are needed. On submit, WhatsApp will open with a prepared message for First Smile Dental Clinic.</p><div class="card"><h3>Message format</h3><p>Hello First Smile Dental Clinic,<br>My Name:<br>Phone Number:<br>Treatment Required:<br>I would like to book an appointment.</p></div></div><form class="form booking-form reveal"><h3>Appointment Form</h3><label>Name<input name="name" required></label><label>Phone Number<input name="phone" required></label><label>Service Needed<select name="service">${services.map((s) => `<option>${s.title}</option>`).join("")}</select></label><button class="btn" type="submit">Open WhatsApp</button></form></div></section>`;

const patientInfoBody = `
<section class="section"><div class="container"><p class="eyebrow">Patient Information</p><h2>Before your dental visit in Katihar.</h2><p class="lead">A little preparation helps your appointment move smoothly. Bring details of current medicines, allergies, previous dental records if available and any specific concern you want to discuss.</p><div class="cards"><article class="card"><h3>Before Visit</h3><p>Brush normally, list your symptoms, and note when pain or sensitivity started.</p></article><article class="card"><h3>During Visit</h3><p>The dentist will examine your teeth and gums, explain findings and suggest suitable next steps.</p></article><article class="card"><h3>After Care</h3><p>Follow the instructions given after cleaning, filling, extraction, root canal or other treatment.</p></article></div></div></section>
${ctaBlock("Need help choosing an appointment?", "Message First Smile Dental Clinic on WhatsApp with your concern and preferred visit time.")}`;

const technologyBody = `
<section class="section"><div class="container grid-2"><div class="reveal"><p class="eyebrow">Technology</p><h2>Careful diagnosis and clear explanations.</h2><p class="lead">Technology is useful when it helps patients understand the problem and the treatment plan. First Smile Dental Clinic uses practical clinical evaluation and visual explanation so care feels less confusing.</p><ul class="check-list"><li>Patient-friendly consultation</li><li>X-ray based treatment discussion when required</li><li>Clear explanation of treatment steps</li><li>After-care instructions for home</li></ul></div><div class="doctor-card reveal"><img src="${assets.consult}" alt="Dental consultation and X-ray explanation at First Smile Dental Clinic"></div></div></section>
${ctaBlock("Talk to the clinic team", "Call or WhatsApp for appointment availability and treatment guidance.")}`;

const privacyBody = `
<section class="section"><div class="container narrow"><p class="eyebrow">Privacy Policy</p><h2>Your information is handled respectfully.</h2><p class="lead">This website is designed to help patients contact First Smile Dental Clinic. Appointment details submitted through WhatsApp are sent directly through WhatsApp, subject to WhatsApp's own terms and privacy practices.</p><div class="article-block"><h3>Information collected</h3><p>The appointment form asks for name, phone number and service needed so the clinic can understand your request.</p></div><div class="article-block"><h3>How it is used</h3><p>Information is used only to respond to appointment or treatment-related enquiries.</p></div><div class="article-block"><h3>Medical advice</h3><p>Website content is educational. A clinical examination is required for diagnosis and treatment advice.</p></div></div></section>`;

const termsBody = `
<section class="section"><div class="container narrow"><p class="eyebrow">Terms of Use</p><h2>Website terms for visitors.</h2><p class="lead">By using this website, you understand that the information is general dental education and clinic information for First Smile Dental Clinic in Katihar.</p><div class="article-block"><h3>No emergency guarantee</h3><p>For urgent pain, swelling, injury or bleeding, call the clinic or seek immediate local medical help.</p></div><div class="article-block"><h3>No online diagnosis</h3><p>Final dental diagnosis and treatment planning require an in-person consultation.</p></div><div class="article-block"><h3>Content accuracy</h3><p>The clinic details should be confirmed by phone or WhatsApp before visiting.</p></div></div></section>`;

const accessibilityBody = `
<section class="section"><div class="container narrow"><p class="eyebrow">Accessibility</p><h2>A website designed to be simple to use.</h2><p class="lead">The website uses readable text, clear headings, keyboard-friendly links and descriptive image alt text wherever possible.</p><div class="cards two"><article class="card"><h3>Readable Layout</h3><p>Pages are mobile-first and structured with clear sections.</p></article><article class="card"><h3>Need Help?</h3><p>If you have trouble using the website, call or WhatsApp ${phone}.</p></article></div></div></section>`;

const pages = [
  ["about-us/index.html", "About First Smile Dental Clinic Katihar | Dr. Chandan Kumar", "Learn about First Smile Dental Clinic in Katihar, a patient-friendly dental clinic led by Dr. Chandan Kumar.", "/about-us/", { title: "About First Smile Dental Clinic", text: "A local dental clinic in Katihar focused on premium, simple and patient-friendly care led by Dr. Chandan Kumar.", noImage: true }, aboutBody],
  ["about-us/dr-chandan-kumar/index.html", "Dr. Chandan Kumar Dentist Katihar | First Smile Dental Clinic", "Meet Dr. Chandan Kumar, BDS, MIDA, FAGE, Oral & Dental Surgeon at First Smile Dental Clinic Katihar.", "/about-us/dr-chandan-kumar/", { title: "Meet Dr. Chandan Kumar", text: "BDS, MIDA, FAGE. Oral & Dental Surgeon providing thoughtful dental care in Katihar.", image: assets.doctor }, doctorBody],
  ["services/index.html", "Dental Services in Katihar | First Smile Dental Clinic", "Explore root canal, dental implants, cleaning, whitening, braces, fillings, dentures and kids dental care in Katihar.", "/services/", { title: "Dental Services in Katihar", text: "Complete dental care for prevention, pain relief, smile confidence and family oral health.", image: webImages.clinic, alt: "Modern dental clinic treatment room" }, servicesBody],
  ["gallery/index.html", "Gallery | First Smile Dental Clinic Katihar", "See photos from First Smile Dental Clinic in Katihar, including clinic and patient-care moments.", "/gallery/", { title: "Clinic Gallery", text: "A closer look at First Smile Dental Clinic and patient care in Katihar.", image: assets.consult }, galleryBody],
  ["testimonials/index.html", "Testimonials | First Smile Dental Clinic Katihar", "Read patient-friendly testimonials and feedback for First Smile Dental Clinic in Katihar.", "/testimonials/", { title: "Patient Testimonials", text: "Clear, gentle and organized dental care for Katihar families.", image: assets.patient }, testimonialsBody],
  ["faq/index.html", "FAQ | Dentist in Katihar | First Smile Dental Clinic", "Answers to common questions about First Smile Dental Clinic, appointment booking, kids dental care and visiting hours.", "/faq/", { title: "Frequently Asked Questions", text: "Answers for patients looking for a dentist or kids dental clinic in Katihar.", image: assets.doctor, alt: "Dr. Chandan Kumar at First Smile Dental Clinic Katihar" }, faqBody],
  ["blog/index.html", "Dental Blog Katihar | First Smile Dental Clinic", "Original dental tips for tooth pain, kids dental care, teeth cleaning, whitening and oral health in Katihar.", "/blog/", { title: "Dental Blog", text: "Simple, original dental education for families in Katihar.", image: assets.team }, blogBody],
  ["contact/index.html", "Contact Dentist in Katihar | First Smile Dental Clinic", "Contact First Smile Dental Clinic in Katihar. Call or WhatsApp +91 8171515184. Visiting hours 9AM-7PM daily.", "/contact/", { title: "Contact First Smile Dental Clinic", text: "Call, WhatsApp or find the clinic on Kalibari Road in Katihar.", image: assets.consult }, contactBody],
  ["book-appointment/index.html", "Book Dental Appointment in Katihar | First Smile Dental Clinic", "Book a dental appointment at First Smile Dental Clinic in Katihar using WhatsApp.", "/book-appointment/", { title: "Book Appointment", text: "Send your appointment request to First Smile Dental Clinic on WhatsApp.", image: assets.doctor }, appointmentBody],
  ["patient-information/index.html", "Patient Information | First Smile Dental Clinic Katihar", "Patient information for dental visits at First Smile Dental Clinic in Katihar.", "/patient-information/", { title: "Patient Information", text: "Helpful guidance before visiting First Smile Dental Clinic in Katihar.", noImage: true }, patientInfoBody],
  ["patient-information/insurance-financing/index.html", "Insurance and Payment Guidance | First Smile Dental Clinic", "Payment and appointment guidance for patients visiting First Smile Dental Clinic Katihar.", "/patient-information/insurance-financing/", { title: "Payment Guidance", text: "Call or WhatsApp the clinic to confirm treatment fees and available payment guidance.", noImage: true }, patientInfoBody],
  ["technology/index.html", "Dental Technology | First Smile Dental Clinic Katihar", "Learn how First Smile Dental Clinic uses clear diagnosis and patient-friendly explanation for dental care in Katihar.", "/technology/", { title: "Dental Technology", text: "Practical tools and clear guidance for confident dental treatment planning.", image: assets.consult }, technologyBody],
  ["privacy-policy/index.html", "Privacy Policy | First Smile Dental Clinic", "Privacy policy for First Smile Dental Clinic website and appointment enquiries.", "/privacy-policy/", { title: "Privacy Policy", text: "How appointment enquiries and website information are handled.", noImage: true }, privacyBody],
  ["terms/index.html", "Terms of Use | First Smile Dental Clinic", "Terms of use for the First Smile Dental Clinic website.", "/terms/", { title: "Terms of Use", text: "Important information about using this dental clinic website.", noImage: true }, termsBody],
  ["accessibility/index.html", "Accessibility Statement | First Smile Dental Clinic", "Accessibility statement for First Smile Dental Clinic website.", "/accessibility/", { title: "Accessibility Statement", text: "A simple, mobile-friendly website for First Smile Dental Clinic patients.", noImage: true }, accessibilityBody],
];

for (const [file, title, description, path, hero, body] of pages) {
  writePage(file, layout({ title, description, path, hero, body, schema: path === "/faq/" ? [{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
  }] : [] }));
}

for (const service of services) {
  const illustrationPath = `/assets/treatments/${service.slug}.svg`;
  writeAsset(`assets/treatments/${service.slug}.svg`, treatmentSvg(service));
  const related = service.related.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean);
  const serviceImage = illustrationPath;
  const body = `
  <section class="section"><div class="container grid-2"><div class="reveal"><p class="eyebrow">${service.key}</p><h2>When ${service.title.toLowerCase()} may help</h2><p class="lead">${service.intro}</p><ul class="check-list">${service.symptoms.map((x) => `<li>${x}</li>`).join("")}</ul></div><div class="doctor-card reveal"><img src="${serviceImage}" alt="${service.title} dental treatment reference image"></div></div></section>
  <section class="section soft"><div class="container"><h2>What to expect</h2><div class="journey">${service.process.map((p) => `<div class="card"><h3>${p}</h3><p>Dr. Chandan Kumar and the clinic team explain each step in simple language before treatment continues.</p></div>`).join("")}</div></div></section>
  <section class="section"><div class="container"><h2>Related dental services</h2>${serviceCards(related)}</div></section>
  ${ctaBlock(`Book ${service.title} in Katihar`, `Call or WhatsApp First Smile Dental Clinic to discuss ${service.title.toLowerCase()} with Dr. Chandan Kumar.`)}`;
  writePage(`services/${service.slug}/index.html`, layout({
    title: `${service.title} in Katihar | First Smile Dental Clinic`,
    description: `${service.title} in Katihar at First Smile Dental Clinic. Patient-friendly care led by Dr. Chandan Kumar. Call or WhatsApp ${phone}.`,
    path: `/services/${service.slug}/`,
    eyebrow: service.key,
    hero: { title: service.title, text: service.intro, image: serviceImage, alt: `${service.title} dental treatment reference image` },
    body,
    schema: [{
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      name: service.title,
      description: service.intro,
      procedureType: "Dental treatment",
      provider: { "@type": "Dentist", name: "First Smile Dental Clinic" },
    }],
  }));
}

const flatAliases = [
  ["about.html", "/about-us/"],
  ["services.html", "/services/"],
  ["gallery.html", "/gallery/"],
  ["testimonials.html", "/testimonials/"],
  ["faq.html", "/faq/"],
  ["blog.html", "/blog/"],
  ["contact.html", "/contact/"],
  ["services/root-canal-treatment-katihar.html", "/services/root-canal-treatment/"],
  ["services/dental-implants-katihar.html", "/services/dental-implants/"],
  ["services/teeth-cleaning-katihar.html", "/services/teeth-cleaning/"],
  ["services/teeth-whitening-katihar.html", "/services/teeth-whitening/"],
  ["services/braces-katihar.html", "/services/braces/"],
  ["services/tooth-extraction-katihar.html", "/services/tooth-extraction/"],
  ["services/dental-fillings-katihar.html", "/services/dental-fillings/"],
  ["services/dentures-katihar.html", "/services/dentures/"],
  ["services/pediatric-dentistry-katihar.html", "/services/pediatric-dentistry/"],
  ["services/smile-makeover-katihar.html", "/services/smile-makeover/"],
  ["services/emergency-dental-care-katihar.html", "/services/emergency-dental-care/"],
];
for (const [file, target] of flatAliases) {
  writePage(file, `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${site}${target}"><title>Redirecting | First Smile Dental Clinic</title></head><body><p><a href="${target}">Continue to First Smile Dental Clinic</a></p></body></html>`);
}

const prettyAliases = [
  ["/services/cosmetic-dentistry", "/services/smile-makeover/"],
  ["/services/cosmetic-dentistry/dental-bonding", "/services/dental-fillings/"],
  ["/services/cosmetic-dentistry/icon-resin", "/services/dental-fillings/"],
  ["/services/cosmetic-dentistry/smile-makeovers", "/services/smile-makeover/"],
  ["/services/cosmetic-dentistry/veneers", "/services/smile-makeover/"],
  ["/services/cosmetic-dentistry/whitening-trays", "/services/teeth-whitening/"],
  ["/services/cosmetic-dentistry/zoom-teeth-whitening", "/services/teeth-whitening/"],
  ["/services/endodontics", "/services/root-canal-treatment/"],
  ["/services/endodontics/post-and-core", "/services/root-canal-treatment/"],
  ["/services/endodontics/root-canal-therapy", "/services/root-canal-treatment/"],
  ["/services/endodontics/traumatic-injuries", "/services/emergency-dental-care/"],
  ["/services/endodontics/vital-pulp-therapy", "/services/root-canal-treatment/"],
  ["/services/general-preventive", "/services/teeth-cleaning/"],
  ["/services/general-preventive/dental-cleanings", "/services/teeth-cleaning/"],
  ["/services/general-preventive/emergency-dentistry", "/services/emergency-dental-care/"],
  ["/services/general-preventive/fillings", "/services/dental-fillings/"],
  ["/services/general-preventive/occlusal-night-guards", "/services/"],
  ["/services/general-preventive/oral-cancer-screenings", "/services/"],
  ["/services/general-preventive/pediatric-dentistry", "/services/pediatric-dentistry/"],
  ["/services/general-preventive/tooth-extractions", "/services/tooth-extraction/"],
  ["/services/orthodontics", "/services/braces/"],
  ["/services/orthodontics/invisalign", "/services/braces/"],
  ["/services/orthodontics/invisalign-faq", "/services/braces/"],
  ["/services/orthodontics/invisalign-for-teens", "/services/braces/"],
  ["/services/restorative", "/services/dentures/"],
  ["/services/restorative/all-on-six", "/services/dental-implants/"],
  ["/services/restorative/dental-bridges", "/services/dentures/"],
  ["/services/restorative/dental-crowns", "/services/dental-fillings/"],
  ["/services/restorative/dental-implants", "/services/dental-implants/"],
  ["/services/restorative/flippers-partials", "/services/dentures/"],
  ["/services/restorative/full-partial-dentures", "/services/dentures/"],
  ["/services/restorative/implant-dentures", "/services/dental-implants/"],
  ["/services/restorative/implant-partials", "/services/dental-implants/"],
  ["/services/restorative/implant-restoration", "/services/dental-implants/"],
  ["/services/restorative/inlays-onlays", "/services/dental-fillings/"],
  ["/services/restorative/single-tooth-replacement", "/services/dental-implants/"],
];
for (const [alias, target] of prettyAliases) {
  const file = `${alias.replace(/^\//, "")}/index.html`;
  writePage(file, `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="refresh" content="0; url=${target}"><link rel="canonical" href="${site}${target}"><title>Redirecting | First Smile Dental Clinic</title></head><body><p><a href="${target}">Continue to First Smile Dental Clinic</a></p></body></html>`);
}

writePage("404.html", layout({
  title: "Page Not Found | First Smile Dental Clinic",
  description: "Find the right page on the First Smile Dental Clinic website.",
  path: "/404.html",
  hero: { title: "Page not found", text: "The page may have moved. Use the links below to continue to First Smile Dental Clinic.", noImage: true },
  body: `<section class="section"><div class="container"><div class="cards"><article class="card"><h3>Home</h3><p>Return to the main website.</p><a href="index.html">Go home</a></article><article class="card"><h3>Services</h3><p>Explore dental treatments in Katihar.</p><a href="services/index.html">View services</a></article><article class="card"><h3>Book Appointment</h3><p>Open WhatsApp to request a visit.</p><a href="${wa}" target="_blank" rel="noopener">Book on WhatsApp</a></article></div></div></section>`
}));

const urls = ["/", ...pages.map((p) => p[3]), ...services.map((s) => `/services/${s.slug}/`)];
writePage("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${site}${u}</loc><changefreq>monthly</changefreq><priority>${u === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}\n</urlset>\n`);
writePage("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${site}/sitemap.xml\n`);

writePage("script.js", `document.querySelectorAll('.menu-toggle').forEach((button)=>button.addEventListener('click',()=>document.querySelector('.links')?.classList.toggle('open')));
document.querySelectorAll('.faq-q').forEach((button)=>button.addEventListener('click',()=>button.closest('.faq-item')?.classList.toggle('open')));
document.querySelectorAll('video').forEach((video)=>{video.muted=true;video.defaultMuted=true;video.autoplay=true;video.loop=true;video.playsInline=true;video.controls=true;video.setAttribute('muted','');video.setAttribute('autoplay','');video.setAttribute('loop','');video.setAttribute('playsinline','');video.play?.().catch(()=>{});});
document.querySelectorAll('[data-lightbox]').forEach((button)=>button.addEventListener('click',()=>{let box=document.querySelector('.lightbox');if(!box){box=document.createElement('div');box.className='lightbox';box.innerHTML='<img alt="Expanded clinic gallery image">';box.addEventListener('click',()=>box.classList.remove('open'));document.body.appendChild(box);}box.querySelector('img').src=button.dataset.lightbox;box.classList.add('open');}));
document.querySelectorAll('.booking-form').forEach((form)=>form.addEventListener('submit',(event)=>{event.preventDefault();const data=new FormData(form);const name=data.get('name')||'';const phone=data.get('phone')||'';const service=data.get('service')||'';const text=encodeURIComponent('Hello First Smile Dental Clinic,\n\nMy Name: '+name+'\nPhone Number: '+phone+'\nTreatment Required: '+service+'\n\nI would like to book an appointment.');window.open('https://wa.me/918171515184?text='+text,'_blank','noopener');}));
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting)entry.target.classList.add('is-visible');}),{threshold:.12});document.querySelectorAll('.reveal').forEach((item)=>observer.observe(item));
const loadMap=(map)=>{if(map.dataset.src){map.src=map.dataset.src;delete map.dataset.src;}};const mapObserver=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){loadMap(entry.target);mapObserver.unobserve(entry.target);}}),{rootMargin:'240px'});document.querySelectorAll('.lazy-map').forEach((map)=>mapObserver.observe(map));
`);

writePage("styles.css", `:root{--blue:#0d5f91;--navy:#112b42;--blue-dark:#10283d;--sky:#3ea5f5;--ink:#16243a;--muted:#607083;--soft:#eaf7ff;--line:#d8e9f5;--green:#5db656;--white:#fff;--shadow:0 28px 80px rgba(13,50,84,.18)}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,Aptos,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.65}a{color:inherit;text-decoration:none}img{max-width:100%;display:block}.container{width:min(1160px,calc(100% - 32px));margin:0 auto}.skip{position:absolute;left:-999px;top:8px;background:#fff;padding:8px;z-index:99}.skip:focus{left:8px}.topbar{position:sticky;top:0;z-index:20;background:rgba(17,43,66,.98);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.08)}.nav{min-height:94px;display:flex;align-items:center;justify-content:space-between;gap:18px}.brand{display:flex;align-items:center;gap:12px;font-weight:800;color:#fff}.brand img{width:116px;height:auto}.links{display:flex;align-items:center;gap:18px;color:rgba(255,255,255,.78);font-size:14px;font-weight:750}.links a:hover{color:#fff}.actions{display:flex;gap:10px;align-items:center}.menu-toggle{display:none}.btn{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;padding:15px 25px;min-height:52px;background:var(--green);color:#fff;font-weight:850;box-shadow:0 16px 34px rgba(93,182,86,.28);cursor:pointer}.btn.secondary{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.24);box-shadow:none}.premium-hero{position:relative;overflow:hidden;background:radial-gradient(circle at 78% 20%,rgba(16,129,151,.45),transparent 34%),linear-gradient(135deg,#0b2f50 0%,#0a3f6a 58%,#08736f 100%);color:#fff}.premium-hero:after{content:"";position:absolute;inset:auto 0 0;height:34%;background:linear-gradient(0deg,rgba(4,18,36,.34),transparent);pointer-events:none}.hero-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr .92fr;gap:44px;align-items:center;min-height:640px;padding:70px 0 82px}.hero-grid-single{display:block;min-height:auto;padding:110px 0 120px}.eyebrow{margin:0 0 12px;color:#43b1ff;font-weight:900;letter-spacing:.09em;text-transform:uppercase;font-size:13px}h1,h2,h3{margin:0;line-height:1.08;letter-spacing:0}h1{font-family:Georgia,Cambria,"Times New Roman",serif;font-size:clamp(48px,6.2vw,82px);max-width:780px}h2{font-family:Georgia,Cambria,"Times New Roman",serif;font-size:clamp(34px,4.8vw,58px);color:var(--blue-dark)}h3{font-family:Georgia,Cambria,"Times New Roman",serif;font-size:24px}.premium-hero .eyebrow{color:#bfe9ff}.premium-hero .lead{color:rgba(255,255,255,.86);font-size:clamp(19px,2.2vw,25px)}.lead{font-size:19px;color:var(--muted);max-width:780px}.hero-actions{display:flex;flex-wrap:wrap;gap:16px;margin-top:30px}.hero-photo{border-radius:44px 44px 8px 8px;overflow:hidden;border:1px solid rgba(255,255,255,.24);box-shadow:var(--shadow);background:rgba(255,255,255,.12)}.hero-photo img{width:100%;height:min(58vh,560px);object-fit:cover;object-position:center}.hero-photo img[src$=".svg"]{object-fit:contain;background:#eaf7ff;padding:24px}.home-visual-band{background:linear-gradient(135deg,#082744,#0d5f91 68%,#08736f);padding:0 0 72px;margin-top:-1px}.home-gallery-wrap{background:rgba(211,235,255,.96);border-radius:38px 38px 8px 8px;padding:34px;box-shadow:0 36px 90px rgba(6,39,71,.28)}.home-gallery-card{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}.home-gallery-card img{width:100%;height:270px;object-fit:cover;object-position:center;border-radius:8px}.welcome-section{padding-top:104px}.section{padding:88px 0}.section.soft{background:var(--soft)}.grid-2{display:grid;grid-template-columns:1fr 1fr;gap:42px;align-items:center}.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}.cards.two{grid-template-columns:1fr 1fr}.card{background:var(--white);border:1px solid var(--line);border-radius:8px;padding:26px;box-shadow:0 10px 30px rgba(13,95,145,.08)}.card p{color:var(--muted);margin:12px 0 0}.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}.service-card{min-height:240px;display:flex;flex-direction:column}.service-card a{color:var(--blue);font-weight:900;margin-top:auto}.doctor-card{border-radius:8px;background:#fff;border:1px solid var(--line);padding:16px;box-shadow:var(--shadow)}.doctor-card img{width:100%;border-radius:8px;object-fit:cover;object-position:center}.doctor-card img[src$=".svg"]{aspect-ratio:4/3;object-fit:contain;background:#eaf7ff;padding:18px}.journey{counter-reset:step;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:32px}.journey .card:before{counter-increment:step;content:counter(step);display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--blue);color:#fff;font-weight:900;margin-bottom:14px}.gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px}.gallery button{padding:0;border:0;border-radius:8px;overflow:hidden;background:#fff;cursor:pointer}.gallery img{aspect-ratio:4/3;width:100%;object-fit:cover;object-position:center}.faq-item{border-bottom:1px solid var(--line)}.faq-q{width:100%;text-align:left;background:none;border:0;padding:20px 0;color:inherit;font:inherit;font-weight:900;cursor:pointer}.faq-a{display:none;color:var(--muted);padding-bottom:20px}.faq-item.open .faq-a{display:block}.form{display:grid;gap:14px;padding:28px;background:#fff;border:1px solid var(--line);border-radius:8px;box-shadow:var(--shadow)}input,select,textarea{width:100%;min-height:50px;border:1px solid var(--line);border-radius:8px;padding:0 14px;font:inherit;background:#fff;color:var(--ink)}.map{width:100%;height:380px;border:0;border-radius:8px;background:#dbeaf5}.map-link{margin:14px 0 0;color:var(--blue);font-weight:850}video{width:100%;height:auto;display:block;border-radius:8px;background:#10283d}.check-list{display:grid;gap:10px;margin:24px 0 0;padding:0;list-style:none}.check-list li{padding:12px 14px;border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--muted)}.check-list li:before{content:"✓";color:var(--green);font-weight:900;margin-right:8px}.cta-band{background:linear-gradient(135deg,#082744,#0d5f91);color:#fff}.cta-band h2{color:#fff}.cta-band .lead{color:rgba(255,255,255,.82)}.cta-actions{display:flex;gap:14px;flex-wrap:wrap;justify-content:flex-end}.narrow{max-width:860px}.article-block{padding:28px 0;border-bottom:1px solid var(--line)}.footer{color:rgba(255,255,255,.76);background:#10283d;padding:64px 0 28px}.footer h3{color:#fff}.footer-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr 1fr;gap:30px}.footer a{display:block;margin:9px 0}.footer img{width:178px;background:#fff;border-radius:8px;padding:8px}.bottom{border-top:1px solid rgba(255,255,255,.14);margin-top:34px;padding-top:22px;font-size:14px}.lightbox{position:fixed;inset:0;background:rgba(0,0,0,.82);display:none;place-items:center;z-index:99;padding:24px}.lightbox.open{display:grid}.lightbox img{max-height:88vh;border-radius:8px}.reveal{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease}.reveal.is-visible{opacity:1;transform:none}@media(max-width:1040px){.links{display:none;position:absolute;left:16px;right:16px;top:94px;background:#10283d;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:18px;flex-direction:column;align-items:flex-start}.links.open{display:flex}.menu-toggle{display:inline-flex;background:#fff;color:var(--blue);border:0;border-radius:999px;padding:10px 14px;font-weight:800}.hero-grid,.grid-2,.footer-grid{grid-template-columns:1fr}.cards,.service-grid,.journey{grid-template-columns:1fr 1fr}.cta-actions{justify-content:flex-start}.home-gallery-card img{height:220px}}@media(max-width:640px){.brand span{display:none}.brand img{width:96px}.actions .btn.secondary{display:none}.hero-grid{min-height:auto;padding:52px 0}.cards,.cards.two,.service-grid,.journey,.gallery,.home-gallery-card{grid-template-columns:1fr}.section{padding:62px 0}h1{font-size:46px}.home-gallery-wrap{padding:18px;border-radius:28px 28px 8px 8px}.home-gallery-card img{height:230px}.home-visual-band{padding-bottom:46px}}`);
