import type { Localized } from "./i18n";

const L = (id: string, en: string): Localized => ({ id, en });
const img = (name: string) => `/images/${name}.jpg`;

export type Service = { title: Localized; desc: Localized; items: Localized[] };

export const services: Service[] = [
  {
    title: L("Precision machining", "Precision machining"),
    desc: L(
      "Komponen mesin dibubut, di-milling, dan di-grinding sesuai kebutuhan Anda.",
      "Machine components turned, milled, and ground to your needs.",
    ),
    items: [
      L("Bushing kuningan", "Brass bushings"),
      L("Pin dan pin KCF", "Pins and KCF pins"),
      L("Pulley", "Pulleys"),
      L("Gear", "Gears"),
      L("Flange", "Flanges"),
    ],
  },
  {
    title: L("Jig, fixture & moulding", "Jig, fixture & moulding"),
    desc: L(
      "Alat bantu produksi dan cetakan untuk lini manufaktur dan otomotif.",
      "Production aids and moulds for manufacturing and automotive lines.",
    ),
    items: [
      L("Core & cavity moulding", "Core & cavity moulding"),
      L("Jig proses", "Process jigs"),
      L("Checking jig", "Checking jigs"),
      L("Welding jig", "Welding jigs"),
      L("Checking fixture head lamp dan spoiler", "Head lamp and spoiler checking fixtures"),
    ],
  },
  {
    title: L("Fabrikasi & material handling", "Fabrication & material handling"),
    desc: L(
      "Struktur dan alat angkut untuk gudang, pabrik, dan area terbuka.",
      "Structures and handling equipment for warehouses, factories, and outdoor areas.",
    ),
    items: [
      L(
        "Conveyor belt, wire mesh, table top, rubber, logic pipe",
        "Belt, wire mesh, table top, rubber, and logic pipe conveyors",
      ),
      L("Rak gudang dan rak Kanagata", "Warehouse racks and Kanagata racks"),
      L("Trolley delivery", "Delivery trolleys"),
      L("Grating stainless dan gutter system", "Stainless grating and gutter systems"),
      L("Pagar dan railing", "Fences and railings"),
    ],
  },
  {
    title: L("Sipil, MEP & finishing", "Civil, MEP & finishing"),
    desc: L(
      "Pekerjaan bangunan dan instalasi untuk pabrik, kantor, dan sekolah.",
      "Building and installation work for factories, offices, and schools.",
    ),
    items: [
      L("Renovasi dan perluasan gedung", "Building renovation and extension"),
      L("Gedung kantor dan sekolah", "Office and school buildings"),
      L("AHU dan piping", "AHU and piping"),
      L("Coating lantai", "Floor coating"),
      L("Kusen aluminium", "Aluminium frames"),
      L("LED display dan APAR system", "LED displays and fire extinguisher systems"),
    ],
  },
];

export const mission: Localized[] = [
  L(
    "Meningkatkan keterampilan SDM lewat pelatihan dan uji kompetensi.",
    "Raising staff skills through training and competence tests.",
  ),
  L(
    "Menyediakan sarana dan prasarana yang memadai demi hasil yang memuaskan pelanggan.",
    "Providing adequate facilities to deliver results that satisfy customers.",
  ),
  L(
    "Menjalankan Standard Kerja Produksi sesuai SOP.",
    "Carrying out the Standard Production Procedure to SOP.",
  ),
];

export const industries: Localized[] = [
  L("Otomotif", "Automotive"),
  L("Farmasi", "Pharmaceutical"),
  L("Makanan & minuman", "Food & beverage"),
  L("Kimia", "Chemical"),
  L("Tekstil", "Textile"),
  L("Elektronik", "Electronics"),
  L("Pertambangan", "Mining"),
  L("Sipil & konstruksi", "Civil & construction"),
];

export const welding: { count: number; label: Localized }[] = [
  { count: 5, label: L("Mesin las listrik", "Electric welders") },
  { count: 2, label: L("Mesin las CO", "CO welders") },
  { count: 1, label: L("Mesin spot welding", "Spot welder") },
  { count: 3, label: L("Mesin las argon", "Argon welders") },
];

export type Photo = { src: string; caption: Localized };

export const facilities: Photo[] = [
  { src: img("fac-lathe"), caption: L("Bubut manual", "Manual lathe") },
  { src: img("fac-cylindrical-grinding"), caption: L("Cylindrical grinding", "Cylindrical grinding") },
  { src: img("fac-surface-grinding-1"), caption: L("Surface grinding", "Surface grinding") },
  { src: img("fac-surface-grinding-2"), caption: L("Surface grinding", "Surface grinding") },
  { src: img("fac-edm-orbiter"), caption: L("EDM with orbiter", "EDM with orbiter") },
  { src: img("fac-tapping"), caption: L("Mesin tap", "Tapping machine") },
  { src: img("fac-cnc-milling-2"), caption: L("CNC milling", "CNC milling") },
  { src: img("fac-cnc-milling-1"), caption: L("CNC milling", "CNC milling") },
];

export type CategoryKey = "all" | "mach" | "jig" | "fab" | "civil" | "plant";

export const categories: { key: CategoryKey; label: Localized }[] = [
  { key: "all", label: L("Semua", "All") },
  { key: "mach", label: L("Machining", "Machining") },
  { key: "jig", label: L("Jig & moulding", "Jig & moulding") },
  { key: "fab", label: L("Fabrikasi", "Fabrication") },
  { key: "civil", label: L("Sipil & MEP", "Civil & MEP") },
  { key: "plant", label: L("Plant", "Plant") },
];

export type PortfolioItem = Photo & { category: Exclude<CategoryKey, "all"> };

const p = (
  category: PortfolioItem["category"],
  file: string,
  id: string,
  en: string,
): PortfolioItem => ({ category, src: img(file), caption: L(id, en) });

export const portfolio: PortfolioItem[] = [
  p("mach", "part-brass-bushing", "Bushing kuningan", "Brass bushings"),
  p("mach", "part-pin", "Pin", "Pins"),
  p("mach", "part-pulley", "Pulley", "Pulleys"),
  p("mach", "part-gear", "Gear", "Gear"),
  p("mach", "part-flange", "Flange", "Flange"),
  p("mach", "part-pin-kcf", "Pin KCF", "KCF pins"),

  p("jig", "jig-core-cavity", "Core & cavity moulding", "Core & cavity moulding"),
  p("jig", "jig-process", "Jig proses", "Process jig"),
  p("jig", "jig-checking", "Checking jig", "Checking jig"),
  p("jig", "jig-welding", "Welding jig", "Welding jig"),
  p("jig", "jig-head-lamp", "Checking fixture head lamp", "Head lamp checking fixture"),
  p("jig", "jig-spoiler", "Checking fixture spoiler", "Spoiler checking fixture"),

  p("fab", "fab-grating", "Grating stainless", "Stainless grating"),
  p("fab", "fab-gutter", "Gutter system", "Gutter system"),
  p("fab", "fab-trolley-1", "Trolley delivery", "Delivery trolley"),
  p("fab", "fab-trolley-2", "Trolley delivery", "Delivery trolley"),
  p("fab", "fab-rack-kanagata", "Rak Kanagata", "Kanagata rack"),
  p("fab", "fab-rack-warehouse", "Rak gudang", "Warehouse rack"),
  p("fab", "fab-fence", "Pagar dan railing", "Fence and railing"),
  p("fab", "conv-logic-pipe", "Conveyor logic pipe", "Logic pipe conveyor"),
  p("fab", "conv-wire-mesh", "Conveyor wire mesh", "Wire mesh conveyor"),
  p("fab", "conv-belt", "Conveyor belt", "Belt conveyor"),
  p("fab", "conv-table-top", "Conveyor table top", "Table top conveyor"),
  p("fab", "conv-rubber", "Conveyor rubber", "Rubber conveyor"),

  p("civil", "mep-ahu", "AHU system", "AHU system"),
  p("civil", "mep-piping", "Piping", "Piping"),
  p("civil", "civil-coating-1", "Coating lantai", "Floor coating"),
  p("civil", "civil-coating-2", "Coating lantai", "Floor coating"),
  p("civil", "civil-frame-1", "Kusen aluminium", "Aluminium frames"),
  p("civil", "civil-frame-2", "Kusen aluminium", "Aluminium frames"),
  p("civil", "civil-renovation", "Sipil: renovasi gedung", "Civil: building renovation"),
  p("civil", "civil-extension", "Sipil: perluasan gedung", "Civil: building extension"),
  p("civil", "civil-office", "Sipil: kantor", "Civil: office building"),
  p("civil", "civil-school", "Konstruksi: gedung sekolah", "Construction: school building"),
  p("civil", "civil-led", "LED display gedung kantor", "LED display for office building"),
  p(
    "civil",
    "civil-apar",
    "APAR system alat berat, tambang batubara Samarinda",
    "Fire extinguisher system for heavy equipment, coal mine in Samarinda",
  ),

  p("plant", "plant-1", "Instalasi plant", "Plant installation"),
  p("plant", "plant-2", "Instalasi plant", "Plant installation"),
  p("plant", "plant-3", "Instalasi plant", "Plant installation"),
  p("plant", "plant-4", "Instalasi plant", "Plant installation"),
];
