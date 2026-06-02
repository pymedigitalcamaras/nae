export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  badgeBg: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  shortDescription: string;
  specs: Record<string, string>;
  featured: boolean;
  image: string;
  categorySlug?: string;
}

export interface Pricing {
  productId: string;
  wholesalePrice: number;
  moq: number;
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Air Source",
    slug: "air-source",
    description: "Air-to-water heat pumps for residential and commercial use",
    color: "#1E40AF",
    badgeBg: "#1E40AF",
  },
  {
    id: "cat-2",
    name: "Geothermal",
    slug: "geothermal",
    description: "Ground-source heat pumps with maximum efficiency",
    color: "#059669",
    badgeBg: "#059669",
  },
  {
    id: "cat-3",
    name: "Pool Heating",
    slug: "pool-heating",
    description: "Heat pumps designed for swimming pool temperature control",
    color: "#F97316",
    badgeBg: "#F97316",
  },
  {
    id: "cat-4",
    name: "Commercial",
    slug: "commercial",
    description: "High-capacity heat pumps for commercial applications",
    color: "#7C3AED",
    badgeBg: "#7C3AED",
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "R290 Monobloc 12kW",
    slug: "r290-monobloc-12kw",
    categoryId: "cat-1",
    description:
      "High-efficiency air-to-water heat pump with R290 refrigerant. Monobloc design for easy installation. Ideal for residential heating and domestic hot water.",
    shortDescription:
      "Solución eficiente para calefacción y ACS. Ideal para climas templados y fríos.",
    specs: {
      capacity: "12 kW",
      refrigerant: "R290 (Propane)",
      cop: "Up to 4.8",
      voltage: "220-240V / 50Hz",
      operatingTemp: "-25°C to +43°C",
      noiseLevel: "42 dB(A)",
      dimensions: "1100 x 420 x 850 mm",
      weight: "78 kg",
    },
    featured: true,
    image: "/product-r290-12kw.jpg",
    categorySlug: "air-source",
  },
  {
    id: "prod-2",
    name: "R290 Monobloc 20kW",
    slug: "r290-monobloc-20kw",
    categoryId: "cat-4",
    description:
      "Commercial-grade air-to-water heat pump with R290 refrigerant. High-capacity monobloc unit for larger installations and commercial buildings.",
    shortDescription:
      "Unidad monobloc comercial de alta capacidad para instalaciones de mayor envergadura.",
    specs: {
      capacity: "20 kW",
      refrigerant: "R290 (Propane)",
      cop: "Up to 4.5",
      voltage: "380-415V / 3-phase",
      operatingTemp: "-25°C to +43°C",
      noiseLevel: "48 dB(A)",
      dimensions: "1350 x 520 x 1050 mm",
      weight: "125 kg",
    },
    featured: true,
    image: "/product-r290-20kw.jpg",
    categorySlug: "commercial",
  },
  {
    id: "prod-3",
    name: "Split System 9kW",
    slug: "split-system-9kw",
    categoryId: "cat-1",
    description:
      "Split heat pump system with indoor hydrobox and outdoor unit. Includes fancoil for air distribution. Compact and quiet design for residential use.",
    shortDescription:
      "Sistema split con unidad interior y exterior. Incluye fancoil para distribución de aire.",
    specs: {
      capacity: "9 kW",
      refrigerant: "R32",
      cop: "Up to 5.2",
      voltage: "220-240V / 50Hz",
      operatingTemp: "-20°C to +40°C",
      noiseLevel: "38 dB(A) indoor",
      dimensions: "Outdoor: 900 x 380 x 650 mm",
      weight: "Outdoor: 52 kg",
    },
    featured: true,
    image: "/product-split-9kw.jpg",
    categorySlug: "air-source",
  },
  {
    id: "prod-4",
    name: "Smart Circulation Pump",
    slug: "smart-circulation-pump",
    categoryId: "cat-1",
    description:
      "High-efficiency circulation pump for hydronic heating systems. Variable speed control with smart temperature-based modulation.",
    shortDescription:
      "Bomba de circulación inteligente para sistemas de calefacción hidrónica.",
    specs: {
      maxFlow: "3.5 m³/h",
      maxHead: "6 m",
      power: "5-45 W",
      voltage: "220-240V / 50Hz",
      connection: "1 1/2\" BSP",
      control: "PWM / 0-10V",
    },
    featured: false,
    image: "/product-recirc.jpg",
    categorySlug: "air-source",
  },
  {
    id: "prod-5",
    name: "PEX Installation Kit",
    slug: "pex-installation-kit",
    categoryId: "cat-1",
    description:
      "Complete PEX pipe and fittings kit for underfloor heating and hydronic system installation. Includes manifold, connectors, and tools.",
    shortDescription:
      "Kit completo de tubería PEX y accesorios para instalación de suelo radiante.",
    specs: {
      pipeLength: "100m rolls",
      pipeSize: "16mm x 2.0mm",
      maxTemp: "95°C",
      maxPressure: "6 bar",
      includes: "Manifold, fittings, brackets, cutter",
    },
    featured: false,
    image: "/product-pex-kit.jpg",
    categorySlug: "air-source",
  },
  {
    id: "prod-6",
    name: "Geothermal HP 15kW",
    slug: "geothermal-hp-15kw",
    categoryId: "cat-2",
    description:
      "Ground-source heat pump with vertical loop compatibility. Maximum efficiency for year-round heating and cooling. Requires borehole installation.",
    shortDescription:
      "Máxima eficiencia aprovechando la energía del subsuelo. Reducción de consumo hasta un 70%.",
    specs: {
      capacity: "15 kW",
      refrigerant: "R410A",
      cop: "Up to 5.8",
      eer: "Up to 5.2",
      voltage: "220-240V / 50Hz",
      waterTemp: "Up to 65°C",
      dimensions: "850 x 480 x 720 mm",
      weight: "95 kg",
    },
    featured: true,
    image: "/images/product-geothermal.jpg",
    categorySlug: "geothermal",
  },
  {
    id: "prod-7",
    name: "Pool Heat Pump 12kW",
    slug: "pool-heat-pump-12kw",
    categoryId: "cat-3",
    description:
      "Dedicated swimming pool heat pump with titanium heat exchanger. corrosion-resistant design for pool water heating. Year-round operation capability.",
    shortDescription:
      "Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia energética.",
    specs: {
      capacity: "12 kW",
      refrigerant: "R32",
      cop: "Up to 6.0",
      voltage: "220-240V / 50Hz",
      poolVolume: "Up to 60 m³",
      heatExchanger: "Titanium",
      dimensions: "850 x 350 x 550 mm",
      weight: "42 kg",
    },
    featured: true,
    image: "/images/product-pool.jpg",
    categorySlug: "pool-heating",
  },
];

export const pricing: Pricing[] = [
  { productId: "prod-1", wholesalePrice: 1850, moq: 5 },
  { productId: "prod-2", wholesalePrice: 3200, moq: 3 },
  { productId: "prod-3", wholesalePrice: 1650, moq: 5 },
  { productId: "prod-4", wholesalePrice: 245, moq: 10 },
  { productId: "prod-5", wholesalePrice: 380, moq: 5 },
  { productId: "prod-6", wholesalePrice: 4200, moq: 2 },
  { productId: "prod-7", wholesalePrice: 1850, moq: 3 },
];

export const countries = [
  { code: "AR", name: "Argentina" },
  { code: "BO", name: "Bolivia" },
  { code: "BR", name: "Brasil" },
  { code: "CL", name: "Chile" },
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "CU", name: "Cuba" },
  { code: "DO", name: "República Dominicana" },
  { code: "EC", name: "Ecuador" },
  { code: "GT", name: "Guatemala" },
  { code: "HN", name: "Honduras" },
  { code: "MX", name: "México" },
  { code: "NI", name: "Nicaragua" },
  { code: "PA", name: "Panamá" },
  { code: "PE", name: "Perú" },
  { code: "PY", name: "Paraguay" },
  { code: "SV", name: "El Salvador" },
  { code: "UY", name: "Uruguay" },
  { code: "VE", name: "Venezuela" },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
