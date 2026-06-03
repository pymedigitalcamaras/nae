export interface Product {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  category: string;
  categoryEn: string;
  description: string;
  cop: string;
  power: string;
  price: string;
  moq: string;
  badgeBg: string;
  emoji: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1', slug: 'r290-monobloc-12kw',
    name: 'Bomba de Calor R290 Monobloc 12kW', nameEn: 'R290 Monobloc 12kW Heat Pump',
    category: 'Aire-Agua', categoryEn: 'Air-Water',
    description: 'Sistema monobloc con refrigerante ecológico R290. Alta eficiencia para climas templados y fríos. Ideal para viviendas unifamiliares hasta 120m². Kit completo listo para instalar.',
    cop: '4.5', power: '12 kW', price: '$1,850', moq: '5 u.',
    badgeBg: 'bg-blue-600', emoji: '❄️', image: '/products/r290-12kw.jpg',
    features: ['Refrigerante R290 ecológico', 'COP 4.5', 'Cubre hasta 120m²', 'Kit completo incluido', 'Control WiFi opcional', 'Incluye bomba circulación']
  },
  {
    id: '2', slug: 'r290-monobloc-20kw',
    name: 'Bomba de Calor R290 Monobloc 20kW', nameEn: 'R290 Monobloc 20kW Heat Pump',
    category: 'Aire-Agua', categoryEn: 'Air-Water',
    description: 'Potente sistema monobloc 20kW para aplicaciones comerciales ligeras y residencias grandes. Rendimiento óptimo en climas variados. Kit completo.',
    cop: '4.2', power: '20 kW', price: '$2,650', moq: '3 u.',
    badgeBg: 'bg-blue-700', emoji: '🏭', image: '/products/r290-20kw.jpg',
    features: ['Refrigerante R290 ecológico', 'COP 4.2', 'Cubre hasta 200m²', 'Compresor inverter', 'Panel táctil LCD', 'Kit completo incluido']
  },
  {
    id: '3', slug: 'r290-monobloc-8kw',
    name: 'Bomba de Calor R290 Monobloc 8kW Compact', nameEn: 'R290 Monobloc 8kW Compact',
    category: 'Aire-Agua', categoryEn: 'Air-Water',
    description: 'Sistema compacto de 8kW perfecto para departamentos y espacios reducidos. Máxima eficiencia en mínimo espacio.',
    cop: '4.6', power: '8 kW', price: '$1,480', moq: '5 u.',
    badgeBg: 'bg-blue-500', emoji: '🏠', image: '/products/r290-8kw.jpg',
    features: ['Diseño compacto', 'COP 4.6', 'Cubre hasta 80m²', 'Instalación sencilla', 'Ultra silencioso', 'Kit completo']
  },
  {
    id: '4', slug: 'split-9kw-fancoil',
    name: 'Sistema Split 9kW + Fancoil', nameEn: 'Split 9kW + Fancoil System',
    category: 'Split', categoryEn: 'Split',
    description: 'Kit completo split con unidad interior fancoil. Ideal para renovaciones y sustitución de sistemas antiguos.',
    cop: '4.2', power: '9 kW', price: '$1,450', moq: '5 u.',
    badgeBg: 'bg-teal-600', emoji: '🌀', image: '/products/split-9kw.jpg',
    features: ['Unidad interior fancoil', 'COP 4.2', 'Cubre hasta 90m²', 'Instalación flexible', 'Mando a distancia', 'Kit completo']
  },
  {
    id: '5', slug: 'monobloc-comercial-30kw',
    name: 'Bomba Monobloc Comercial 30kW', nameEn: 'Commercial Monobloc 30kW',
    category: 'Comercial', categoryEn: 'Commercial',
    description: 'Sistema de alta capacidad para edificios comerciales, oficinas y aplicaciones industriales ligeras.',
    cop: '4.0', power: '30 kW', price: '$4,200', moq: '2 u.',
    badgeBg: 'bg-purple-600', emoji: '🏢', image: '/products/comercial-30kw.jpg',
    features: ['COP 4.0', 'Cubre hasta 400m²', 'Compresor scroll', 'Control PLC avanzado', 'Soporte técnico dedicado']
  },
  {
    id: '6', slug: 'geotermica-15kw',
    name: 'Bomba Geotérmica 15kW', nameEn: 'Geothermal 15kW Heat Pump',
    category: 'Geotermia', categoryEn: 'Geothermal',
    description: 'Aprovecha la energía del subsuelo para máxima eficiencia todo el año. Rendimiento estable independientemente del clima exterior.',
    cop: '5.2', power: '15 kW', price: '$3,800', moq: '3 u.',
    badgeBg: 'bg-emerald-600', emoji: '🌱', image: '/products/geotermica-15kw.jpg',
    features: ['COP 5.2', 'Rendimiento estable año completo', 'Cubre hasta 150m²', 'Intercambiador coaxial', 'Vida útil 20+ años']
  },
  {
    id: '7', slug: 'piscina-20kw',
    name: 'Calentador de Piscina 20kW', nameEn: 'Pool Heater 20kW',
    category: 'Piscina', categoryEn: 'Pool',
    description: 'Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia. Intercambiador de titanio anticorrosión.',
    cop: '5.5', power: '20 kW', price: '$1,950', moq: '5 u.',
    badgeBg: 'bg-cyan-600', emoji: '🏊', image: '/products/piscina-20kw.jpg',
    features: ['COP 5.5', 'Intercambiador titanio', 'Cubre hasta 80m³', 'Operación desde -15°C', 'Display digital']
  },
  {
    id: '8', slug: 'circulacion-inteligente',
    name: 'Bomba de Circulación Inteligente', nameEn: 'Smart Circulation Pump',
    category: 'Accesorios', categoryEn: 'Accessories',
    description: 'Bomba de circulación eficiente para sistemas de calefacción por suelo radiante. Ahorro energético de hasta 80%.',
    cop: '-', power: '6m', price: '$180', moq: '10 u.',
    badgeBg: 'bg-gray-600', emoji: '💧', image: '/products/circulacion.jpg',
    features: ['Ahorro 80% energía', 'Control automático variable', 'Hasta 6 metros altura', 'Instalación sencilla', 'Ultra silenciosa']
  },
  {
    id: '9', slug: 'estanque-200l',
    name: 'Estanque de Agua Caliente 200L', nameEn: 'Hot Water Tank 200L',
    category: 'Estanques', categoryEn: 'Tanks',
    description: 'Estanque de agua caliente sanitaria de 200 litros con doble serpentín. Acero inoxidable 316L. Incluye soporte y aislamiento.',
    cop: '-', power: '200L', price: '$320', moq: '10 u.',
    badgeBg: 'bg-orange-500', emoji: '🔥', image: '/products/estanque-200l.jpg',
    features: ['Acero inoxidable 316L', 'Doble serpentín', 'Aislación térmica', 'Incluye soporte', 'Válvula de seguridad']
  },
  {
    id: '10', slug: 'estanque-300l',
    name: 'Estanque de Agua Caliente 300L', nameEn: 'Hot Water Tank 300L',
    category: 'Estanques', categoryEn: 'Tanks',
    description: 'Estanque de agua caliente sanitaria de 300 litros. Ideal para familias grandes o uso comercial ligero.',
    cop: '-', power: '300L', price: '$420', moq: '8 u.',
    badgeBg: 'bg-orange-600', emoji: '🔥', image: '/products/estanque-300l.jpg',
    features: ['Acero inoxidable 316L', 'Doble serpentín', 'Aislación térmica premium', 'Incluye soporte reforzado', 'Válvula de seguridad']
  },
  {
    id: '11', slug: 'kit-instalacion-pex',
    name: 'Kit Completo Instalación PEX', nameEn: 'PEX Installation Kit',
    category: 'Kits', categoryEn: 'Kits',
    description: 'Kit completo con tubería PEX, fittings, válvulas y accesorios para instalación de sistema de calefacción por suelo radiante.',
    cop: '-', power: '-', price: '$450', moq: '5 u.',
    badgeBg: 'bg-green-600', emoji: '📦', image: '/products/kit-pex.jpg',
    features: ['Tubería PEX 100m', 'Fittings completos', 'Válvulas termostáticas', 'Manual instalación', 'Soporte técnico incluido']
  },
  {
    id: '12', slug: 'kit-hidraulico',
    name: 'Kit Hidráulico Completo', nameEn: 'Complete Hydraulic Kit',
    category: 'Kits', categoryEn: 'Kits',
    description: 'Kit hidráulico profesional con colector, bomba circulación, válvulas mezcladoras, expulsor de aire y todos los accesorios.',
    cop: '-', power: '-', price: '$680', moq: '5 u.',
    badgeBg: 'bg-green-700', emoji: '🔧', image: '/products/kit-hidraulico.jpg',
    features: ['Colector 2-12 circuitos', 'Bomba circulación', 'Válvula mezcladora 3 vías', 'Expulsor aire automático', 'Manómetros incluidos']
  }
];

export const categories = ['Todos', 'Aire-Agua', 'Split', 'Comercial', 'Geotermia', 'Piscina', 'Estanques', 'Kits', 'Accesorios'];
export const categoriesEn = ['All', 'Air-Water', 'Split', 'Commercial', 'Geothermal', 'Pool', 'Tanks', 'Kits', 'Accessories'];

export const countries = [
  'México', 'Colombia', 'Argentina', 'Chile', 'Perú', 'Ecuador',
  'Uruguay', 'Paraguay', 'Bolivia', 'Costa Rica', 'Panamá',
  'República Dominicana', 'Guatemala', 'Venezuela', 'Brasil', 'Otro'
];

export interface ProjectSlide {
  image: string;
  title: string;
  titleEn: string;
  location: string;
  description: string;
  descriptionEn: string;
}

export const projectSlides: ProjectSlide[] = [
  {
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800',
    title: 'Instalación Residencial 12kW', titleEn: 'Residential Installation 12kW',
    location: 'Santiago, Chile',
    description: 'Casa unifamiliar de 140m² con calefacción por suelo radiante. Ahorro del 65% en factura energética. Kit NAE completo.', descriptionEn: '140m² single-family home with underfloor heating. 65% savings on energy bill.'
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800',
    title: 'Proyecto Comercial 30kW', titleEn: 'Commercial Project 30kW',
    location: 'Bogotá, Colombia',
    description: 'Edificio de oficinas con climatización integral. Instalación de 6 unidades con sistema centralizado y seguimiento NAE.', descriptionEn: 'Office building with integral climate control. 6 units with centralized system.'
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
    title: 'Condominio 8 Unidades', titleEn: 'Condominium 8 Units',
    location: 'Buenos Aires, Argentina',
    description: 'Instalación de 8 sistemas monobloc R290 para condominio de lujo. Soporte técnico completo NAE durante toda la obra.', descriptionEn: '8 R290 monobloc systems for luxury condominium. Full NAE technical support.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Hotel Boutique 20kW', titleEn: 'Boutique Hotel 20kW',
    location: 'Lima, Perú',
    description: 'Sistema de climatización para hotel boutique con ACS integrada. Funcionamiento 24/7. Planos y seguimiento por NAE.', descriptionEn: 'Climate system for boutique hotel with integrated DHW. 24/7 operation.'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    title: 'Piscina Olímpica 40kW', titleEn: 'Olympic Pool 40kW',
    location: 'Ciudad de México, México',
    description: 'Sistema de calentamiento para piscina semi-olímpica. Mantenimiento térmico todo el año con máxima eficiencia.', descriptionEn: 'Heating system for semi-olympic pool. Year-round thermal maintenance.'
  }
];

export const successSlides = [
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
    title: 'Instalador Certificado 500+', titleEn: '500+ Certified Installers',
    description: 'Red de instaladores certificados NAE en 15 países de Latinoamérica. Capacitación continua y soporte técnico directo.', descriptionEn: 'NAE certified installer network in 15 Latin American countries.',
    stat: '500+', statLabel: 'Instaladores Activos', statLabelEn: 'Active Installers'
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    title: 'Ahorro Energético Real', titleEn: 'Real Energy Savings',
    description: 'Nuestros clientes reportan ahorros de hasta el 70% en costos de calefacción tras la instalación de sistemas NAE completos.', descriptionEn: 'Our customers report savings of up to 70% on heating costs.',
    stat: '70%', statLabel: 'Ahorro Promedio', statLabelEn: 'Avg. Savings'
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    title: 'Proyectos en 15 Países', titleEn: 'Projects in 15 Countries',
    description: 'Desde Chile hasta México, NAE ha equipado miles de instalaciones residenciales y comerciales con tecnología de punta y soporte local.', descriptionEn: 'From Chile to Mexico, NAE has equipped thousands of installations.',
    stat: '15', statLabel: 'Países LATAM', statLabelEn: 'LATAM Countries'
  }
];

export const timeline = [
  { year: '2016', title: 'Inicio de Operaciones', titleEn: 'Operations Start', desc: 'Primeras instalaciones de bombas de calor en Latinoamérica', descEn: 'First heat pump installations in Latin America' },
  { year: '2018', title: 'Expansión Regional', titleEn: 'Regional Expansion', desc: 'Operaciones en Chile y México con soporte local', descEn: 'Operations in Chile and Mexico with local support' },
  { year: '2020', title: 'Certificación CE y ISO', titleEn: 'CE & ISO Certification', desc: 'Certificaciones europeas e internacionales obtenidas', descEn: 'European and international certifications obtained' },
  { year: '2022', title: 'Red de 500+ Instaladores', titleEn: '500+ Installer Network', desc: 'Red certificada en 15 países de Latinoamérica', descEn: 'Certified network in 15 Latin American countries' },
  { year: '2025', title: 'Lanzamiento Marca NAE', titleEn: 'NAE Brand Launch', desc: 'Lanzamiento de marca propia con línea completa y servicios integrales', descEn: 'Own brand launch with complete product line and full services' }
];

export const team = [
  { name: 'Alejandro Martínez', role: 'CEO & Fundador', roleEn: 'CEO & Founder', initials: 'AM' },
  { name: 'Li Wei', role: 'Director de Ingeniería', roleEn: 'Engineering Director', initials: 'LW' },
  { name: 'Carlos Rodríguez', role: 'Director LATAM', roleEn: 'LATAM Director', initials: 'CR' },
  { name: 'Ana Soto', role: 'Soporte Técnico', roleEn: 'Technical Support', initials: 'AS' }
];

export const fuelTypes = [
  { name: 'Gas Natural', nameEn: 'Natural Gas', eff: 0.9, cost: 0.08, emission: 0.2 },
  { name: 'Gas LP', nameEn: 'LP Gas', eff: 0.85, cost: 0.12, emission: 0.3 },
  { name: 'Electricidad Resistencia', nameEn: 'Electric Resistance', eff: 1.0, cost: 0.15, emission: 0.25 },
  { name: 'Diésel', nameEn: 'Diesel', eff: 0.8, cost: 0.18, emission: 0.35 },
  { name: 'Carbón', nameEn: 'Coal', eff: 0.7, cost: 0.05, emission: 0.45 },
];

export const climateZones = [
  { name: 'Tropical cálido', nameEn: 'Warm Tropical', cop: 4.8 },
  { name: 'Templado', nameEn: 'Temperate', cop: 4.2 },
  { name: 'Frío', nameEn: 'Cold', cop: 3.5 },
  { name: 'Muy frío', nameEn: 'Very Cold', cop: 3.0 },
];

export const services = [
  { icon: '📐', title: 'Planos y Diseño', titleEn: 'Plans & Design', desc: 'Elaboramos planos técnicos completos para tu instalación', descEn: 'We prepare complete technical plans for your installation' },
  { icon: '📊', title: 'Seguimiento de Proyectos', titleEn: 'Project Tracking', desc: 'Acompañamiento en cada etapa del proyecto', descEn: 'Support at every stage of the project' },
  { icon: '🏗️', title: 'Desarrollo de Proyectos', titleEn: 'Project Development', desc: 'Desarrollo integral desde la idea hasta la puesta en marcha', descEn: 'Full development from idea to commissioning' },
  { icon: '🎓', title: 'Capacitación', titleEn: 'Training', desc: 'Cursos de formación para instaladores certificados', descEn: 'Training courses for certified installers' },
  { icon: '🛠️', title: 'Soporte Post-Venta', titleEn: 'Post-Sale Support', desc: 'Asistencia técnica permanente en español', descEn: 'Permanent technical assistance in Spanish' },
  { icon: '🤝', title: 'Conexión con Trabajos', titleEn: 'Job Connections', desc: 'Te conectamos con clientes que necesitan instalación', descEn: 'We connect you with customers who need installation' },
];

export const oemBenefits = [
  { icon: '🏭', title: 'Producción a Escala', titleEn: 'Large Scale Production', desc: 'Capacidad de 10,000+ unidades mensuales. Planta certificada ISO 9001.', descEn: '10,000+ units monthly capacity. ISO 9001 certified plant.' },
  { icon: '🔧', title: 'Personalización Total', titleEn: 'Full Customization', desc: 'Diseñamos según tus especificaciones: potencia, dimensiones, acabados.', descEn: 'Design according to your specs: power, dimensions, finishes.' },
  { icon: '🔬', title: 'Tecnología Propia', titleEn: 'Own Technology', desc: 'Plataforma de I+D con 50+ ingenieros especializados.', descEn: 'R&D platform with 50+ specialized engineers.' },
  { icon: '✅', title: 'Certificaciones', titleEn: 'Certifications', desc: 'CE, ISO 9001, ISO 14001 y certificaciones locales LATAM.', descEn: 'CE, ISO 9001, ISO 14001 and LATAM local certifications.' },
  { icon: '🚢', title: 'Logística Integral', titleEn: 'Integrated Logistics', desc: 'Envíos marítimos, aéreos y terrestres con tracking.', descEn: 'Sea, air and land shipping with tracking.' },
  { icon: '🛠️', title: 'Soporte Post-Venta', titleEn: 'After-Sales Support', desc: '2 años de garantía y soporte técnico permanente.', descEn: '2 year warranty and permanent technical support.' },
];
