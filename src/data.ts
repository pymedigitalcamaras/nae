export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  cop: string;
  power: string;
  price: string;
  moq: string;
  badgeBg: string;
  emoji: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'r290-monobloc-12kw',
    name: 'Bomba de Calor R290 Monobloc 12kW',
    category: 'Aire-Agua',
    description: 'Sistema monobloc con refrigerante ecológico R290. Alta eficiencia para climas templados y fríos. Ideal para viviendas unifamiliares hasta 120m².',
    cop: '4.5',
    power: '12 kW',
    price: '$1,850',
    moq: '5 unidades',
    badgeBg: 'bg-blue-600',
    emoji: '❄️',
    features: ['Refrigerante R290 ecológico', 'COP 4.5', 'Hasta 120m²', 'Incluye bomba circulación', 'Control WiFi opcional']
  },
  {
    id: '2',
    slug: 'r290-monobloc-20kw',
    name: 'Bomba de Calor R290 Monobloc 20kW',
    category: 'Aire-Agua',
    description: 'Potente sistema monobloc 20kW para aplicaciones comerciales ligeras y residencias grandes. Rendimiento óptimo en climas variados.',
    cop: '4.2',
    power: '20 kW',
    price: '$2,650',
    moq: '3 unidades',
    badgeBg: 'bg-blue-700',
    emoji: '🏭',
    features: ['Refrigerante R290', 'COP 4.2', 'Hasta 200m²', 'Compresor inverter', 'Panel táctil']
  },
  {
    id: '3',
    slug: 'split-9kw-fancoil',
    name: 'Sistema Split 9kW + Fancoil',
    category: 'Split',
    description: 'Kit completo split con unidad interior fancoil. Ideal para renovaciones y sustitución de sistemas antiguos. Instalación flexible.',
    cop: '4.2',
    power: '9 kW',
    price: '$1,450',
    moq: '5 unidades',
    badgeBg: 'bg-teal-600',
    emoji: '🌀',
    features: ['Unidad interior fancoil', 'COP 4.2', 'Hasta 90m²', 'Instalación flexible', 'Mando a distancia']
  },
  {
    id: '4',
    slug: 'circulacion-inteligente',
    name: 'Bomba de Circulación Inteligente',
    category: 'Accesorios',
    description: 'Bomba de circulación eficiente para sistemas de calefacción por suelo radiante. Ahorro energético de hasta 80% vs bombas tradicionales.',
    cop: '-',
    power: '6m',
    price: '$180',
    moq: '10 unidades',
    badgeBg: 'bg-gray-600',
    emoji: '💧',
    features: ['Ahorro 80% energía', 'Control automático', 'Hasta 6 metros', 'Instalación sencilla', 'Silenciosa']
  },
  {
    id: '5',
    slug: 'monobloc-comercial-30kw',
    name: 'Bomba Monobloc Comercial 30kW',
    category: 'Comercial',
    description: 'Sistema de alta capacidad para edificios comerciales, oficinas y aplicaciones industriales ligeras. Diseño robusto para uso intensivo.',
    cop: '4.0',
    power: '30 kW',
    price: '$4,200',
    moq: '2 unidades',
    badgeBg: 'bg-purple-600',
    emoji: '🏢',
    features: ['COP 4.0', 'Hasta 400m²', 'Compresor scroll', 'Control PLC', 'Soporte técnico dedicado']
  },
  {
    id: '6',
    slug: 'geotermica-15kw',
    name: 'Bomba Geotérmica 15kW',
    category: 'Geotermia',
    description: 'Aprovecha la energía del subsuelo para máxima eficiencia todo el año. Rendimiento estable independientemente de la temperatura exterior.',
    cop: '5.2',
    power: '15 kW',
    price: '$3,800',
    moq: '3 unidades',
    badgeBg: 'bg-emerald-600',
    emoji: '🌱',
    features: ['COP 5.2', 'Rendimiento estable', 'Hasta 150m²', 'Intercambiador coaxial', 'Vida útil 20+ años']
  },
  {
    id: '7',
    slug: 'piscina-20kw',
    name: 'Calentador de Piscina 20kW',
    category: 'Piscina',
    description: 'Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia. Intercambiador de titanio anticorrosión.',
    cop: '5.5',
    power: '20 kW',
    price: '$1,950',
    moq: '5 unidades',
    badgeBg: 'bg-cyan-600',
    emoji: '🏊',
    features: ['COP 5.5', 'Intercamb. titanio', 'Hasta 80m³', 'Operación -15°C', 'Display digital']
  }
];

export const categories = ['Todos', 'Aire-Agua', 'Split', 'Comercial', 'Geotermia', 'Piscina', 'Accesorios'];

export const countries = [
  'México', 'Colombia', 'Argentina', 'Chile', 'Perú', 'Ecuador',
  'Uruguay', 'Paraguay', 'Bolivia', 'Costa Rica', 'Panamá',
  'República Dominicana', 'Guatemala', 'Venezuela', 'Brasil', 'Otro'
];

export interface ProjectSlide {
  image: string;
  title: string;
  location: string;
  description: string;
}

export const projectSlides: ProjectSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
    title: 'Instalación Residencial 12kW',
    location: 'Santiago, Chile',
    description: 'Casa unifamiliar de 140m² con calefacción por suelo radiante. Ahorro del 65% en factura energética.'
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
    title: 'Proyecto Comercial 30kW',
    location: 'Bogotá, Colombia',
    description: 'Edificio de oficinas con climatización integral. Instalación de 6 unidades con sistema centralizado.'
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    title: 'Condominio 8 Unidades',
    location: 'Buenos Aires, Argentina',
    description: 'Instalación de 8 sistemas monobloc R290 para condominio de lujo. Soporte técnico completo NAE.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Hotel Boutique 20kW',
    location: 'Lima, Perú',
    description: 'Sistema de climatización para hotel boutique con ACS integrada. Funcionamiento 24/7.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    title: 'Piscina Olímpica 40kW',
    location: 'Ciudad de México',
    description: 'Sistema de calentamiento para piscina semi-olímpica. Mantenimiento térmico todo el año.'
  }
];

export const successSlides = [
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    title: 'Instalador Certificado 500+',
    description: 'Red de instaladores certificados NAE en 15 países de Latinoamérica. Capacitación continua y soporte técnico directo.',
    stat: '500+',
    statLabel: 'Instaladores Activos'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    title: 'Ahorro Energético Real',
    description: 'Nuestros clientes reportan ahorros de hasta el 70% en costos de calefacción tras la instalación de sistemas NAE.',
    stat: '70%',
    statLabel: 'Ahorro Promedio'
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    title: 'Proyectos en 15 Países',
    description: 'Desde Chile hasta México, NAE ha equipado miles de instalaciones residenciales y comerciales con tecnología de punta.',
    stat: '15',
    statLabel: 'Países LATAM'
  }
];

export const timeline = [
  { year: '2016', title: 'Inicio de Operaciones', desc: 'Primeras instalaciones de bombas de calor en Latinoamérica' },
  { year: '2018', title: 'Expansión Regional', desc: 'Operaciones en Chile y México' },
  { year: '2020', title: 'Certificación CE y ISO', desc: 'Certificaciones europeas e internacionales' },
  { year: '2022', title: 'Red de 500+ Instaladores', desc: 'Red certificada en 15 países' },
  { year: '2025', title: 'Lanzamiento Marca NAE', desc: 'Lanzamiento de marca propia con línea completa' }
];

export const team = [
  { name: 'Alejandro Martínez', role: 'CEO & Fundador', initials: 'AM' },
  { name: 'Li Wei', role: 'Director de Ingeniería', initials: 'LW' },
  { name: 'Carlos Rodríguez', role: 'Director LATAM', initials: 'CR' },
  { name: 'Ana Soto', role: 'Soporte Técnico', initials: 'AS' }
];
