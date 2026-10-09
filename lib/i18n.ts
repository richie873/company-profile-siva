export type Lang = "id" | "en";
export type Localized = Record<Lang, string>;

const id = {
  nav_services: "Layanan",
  nav_about: "Tentang",
  nav_facilities: "Fasilitas",
  nav_portfolio: "Portofolio",
  nav_contact: "Kontak",
  menu: "Menu",
  lang_label: "Bahasa / Language",
  cta_quote: "Minta penawaran",
  cta_portfolio: "Lihat portofolio",

  hero_h1: "Presisi dari bubutan sampai bangunan.",
  hero_p:
    "Machining, jig & fixture, moulding, fabrikasi, hingga pekerjaan sipil dan MEP, dikerjakan sesuai SOP oleh tim yang dibangun dari pengalaman lapangan sejak 1999.",
  fact1: "Pengalaman sejak 1999",
  fact2: "Workshop sejak 2018",
  fact3: "Badan usaha sejak Agustus 2025",
  plate_cap: "Special purpose machine",

  svc_h2: "Satu workshop, empat lini pekerjaan.",
  svc_p:
    "Dari satu komponen sampai satu gedung. Setiap pekerjaan mengikuti Standard Kerja Produksi perusahaan.",

  about_h2: "Workshop kecil yang tumbuh menjadi perseroan.",
  about_p:
    "Berawal dari pengalaman bekerja di berbagai perusahaan sejak 1999, kami memberanikan diri membuka workshop machining sendiri. Seiring berkembangnya workshop, usaha ini dilegalkan agar cakupan kerja makin luas dan layanan kepada pelanggan makin maksimal.",
  tl1: "Mulai bekerja di bidang precision machining part, dies, moulding, jig & fixture, automation, special purpose machine, fabrikasi, konstruksi, sipil, dan pertambangan.",
  tl2: "Mendirikan workshop machining di Cikarang, Bekasi, Jawa Barat.",
  tl3_y: "Agustus 2025",
  tl3: "PT Siva Parama Dhana resmi berdiri dengan legalitas lengkap. Kantor pusat berada di Mojokerto, Jawa Timur.",
  vision_h: "Visi",
  vision_p:
    "Menjadi perusahaan yang kompeten dalam harga, kualitas, dan kecepatan kerja.",
  mission_h: "Misi",

  ind_h2: "Industri yang kami layani.",
  ind_p:
    "Kebutuhan tiap industri berbeda. Kami menyesuaikan material, toleransi, dan jadwal dengan lini produksi Anda.",

  fac_h2: "Mesin yang bekerja untuk pesanan Anda.",
  fac_p:
    "Peralatan machining dan pengelasan di workshop kami, dioperasikan oleh teknisi yang terus dilatih dan diuji kompetensinya.",
  weld_h: "Peralatan las",

  pf_h2: "Hasil produksi dan pekerjaan lapangan.",
  pf_p: "Pilih kategori untuk melihat contoh pekerjaan. Klik foto untuk memperbesar.",
  more: "Tampilkan lebih banyak",
  close: "Tutup",

  ct_h2: "Ceritakan kebutuhan Anda.",
  ct_p: "Kirim gambar kerja atau contoh komponen lewat WhatsApp. Kami balas dengan estimasi waktu dan harga.",
  ct_addr_h: "Kantor pusat",
  ct_phone_h: "Telepon / WhatsApp",
  ct_map: "Buka di Google Maps",
  f_name: "Nama",
  f_company: "Perusahaan",
  f_type: "Jenis pekerjaan",
  f_msg: "Kebutuhan Anda",
  f_send: "Kirim lewat WhatsApp",
  other: "Lainnya",
  wa_hello: "Halo PT Siva Parama Dhana, saya ingin menanyakan penawaran.",
  wa_name: "Nama",
  wa_company: "Perusahaan",
  wa_type: "Jenis pekerjaan",
  wa_need: "Kebutuhan",
};

export type Key = keyof typeof id;

const en: Record<Key, string> = {
  nav_services: "Services",
  nav_about: "About",
  nav_facilities: "Facilities",
  nav_portfolio: "Portfolio",
  nav_contact: "Contact",
  menu: "Menu",
  lang_label: "Bahasa / Language",
  cta_quote: "Request a quote",
  cta_portfolio: "View portfolio",

  hero_h1: "Precision from the lathe to the building.",
  hero_p:
    "Machining, jig & fixture, moulding, fabrication, and civil and MEP works, done to standard operating procedure by a team built on field experience since 1999.",
  fact1: "Experience since 1999",
  fact2: "Workshop since 2018",
  fact3: "Incorporated August 2025",
  plate_cap: "Special purpose machine",

  svc_h2: "One workshop, four lines of work.",
  svc_p:
    "From a single component to a whole building. Every job follows the company's Standard Production Procedure.",

  about_h2: "A small workshop that grew into a company.",
  about_p:
    "Starting from hands-on experience at various companies since 1999, we took the step of opening our own machining workshop. As the workshop grew, the business was formalised to widen its scope and serve customers better.",
  tl1: "Began working in precision machining parts, dies, moulding, jig & fixture, automation, special purpose machines, fabrication, construction, civil works, and mining.",
  tl2: "Set up a machining workshop in Cikarang, Bekasi, West Java.",
  tl3_y: "August 2025",
  tl3: "PT Siva Parama Dhana was officially established with complete legal standing. Head office is in Mojokerto, East Java.",
  vision_h: "Vision",
  vision_p: "To be a competent company in price, quality, and speed of work.",
  mission_h: "Mission",

  ind_h2: "Industries we serve.",
  ind_p:
    "Every industry has different needs. We match materials, tolerances, and schedules to your production line.",

  fac_h2: "Machines at work for your order.",
  fac_p:
    "The machining and welding equipment in our workshop, run by technicians who keep training and are tested for competence.",
  weld_h: "Welding equipment",

  pf_h2: "Production results and field work.",
  pf_p: "Pick a category to see sample work. Click a photo to enlarge.",
  more: "Show more",
  close: "Close",

  ct_h2: "Tell us what you need.",
  ct_p: "Send drawings or sample parts via WhatsApp. We reply with time and price estimates.",
  ct_addr_h: "Head office",
  ct_phone_h: "Phone / WhatsApp",
  ct_map: "Open in Google Maps",
  f_name: "Name",
  f_company: "Company",
  f_type: "Type of work",
  f_msg: "Your requirements",
  f_send: "Send via WhatsApp",
  other: "Other",
  wa_hello: "Hello PT Siva Parama Dhana, I would like to ask for a quote.",
  wa_name: "Name",
  wa_company: "Company",
  wa_type: "Type of work",
  wa_need: "Requirements",
};

export const dict: Record<Lang, Record<Key, string>> = { id, en };
