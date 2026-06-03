export interface Product {
  id: string; slug: string; name: string; nameEn: string;
  category: string; categoryEn: string; description: string;
  cop: string; power: string; price: string; moq: string;
  badgeBg: string; emoji: string; image: string; features: string[];
}

export const defaultProducts: Product[] = [
  { id:'1',slug:'r290-12kw',name:'Bomba R290 12kW',nameEn:'R290 Heat Pump 12kW',category:'Residencial',categoryEn:'Residential',description:'Sistema split R290 de alta eficiencia para calefacción y ACS.',cop:'4.8',power:'12 kW',price:'1,299',moq:'5 unidades',badgeBg:'bg-emerald-100',emoji:'🏠',image:'/products/r290-12kw.jpg',features:['R290 ecológico','COP 4.8','Inversor DC','WiFi incluido','-25°C operación'] },
  { id:'2',slug:'r290-20kw',name:'Bomba R290 20kW',nameEn:'R290 Heat Pump 20kW',category:'Residencial',categoryEn:'Residential',description:'Potente sistema R290 para grandes residencias y climas extremos.',cop:'4.6',power:'20 kW',price:'1,899',moq:'3 unidades',badgeBg:'bg-emerald-100',emoji:'🏠',image:'/products/r290-20kw.jpg',features:['R290 ecológico','COP 4.6','Doble compresor','-30°C operación'] },
  { id:'3',slug:'r290-8kw',name:'Bomba R290 8kW',nameEn:'R290 Heat Pump 8kW',category:'Residencial',categoryEn:'Residential',description:'Compacta y eficiente para hogares pequeños y medianos.',cop:'5.0',power:'8 kW',price:'999',moq:'8 unidades',badgeBg:'bg-emerald-100',emoji:'🏠',image:'/products/r290-8kw.jpg',features:['R290 ecológico','COP 5.0','Ultra silenciosa','WiFi incluido'] },
  { id:'4',slug:'split-9kw',name:'Bomba Split 9kW',nameEn:'Split Heat Pump 9kW',category:'Residencial',categoryEn:'Residential',description:'Diseño split separado para instalaciones flexibles.',cop:'4.5',power:'9 kW',price:'1,099',moq:'6 unidades',badgeBg:'bg-blue-100',emoji:'❄️',image:'/products/split-9kw.jpg',features:['Diseño split','COP 4.5','Instalación flexible','Bajo ruido'] },
  { id:'5',slug:'comercial-30kw',name:'Bomba Comercial 30kW',nameEn:'Commercial Heat Pump 30kW',category:'Comercial',categoryEn:'Commercial',description:'Solución comercial de alta capacidad para edificios y negocios.',cop:'4.2',power:'30 kW',price:'3,499',moq:'2 unidades',badgeBg:'bg-orange-100',emoji:'🏢',image:'/products/comercial-30kw.jpg',features:['Alta capacidad','COP 4.2','Cascadable','Monitorización'] },
  { id:'6',slug:'geotermica-15kw',name:'Bomba Geotérmica 15kW',nameEn:'Geothermal Heat Pump 15kW',category:'Especializada',categoryEn:'Specialized',description:'Aprovecha la energía del subsuelo para máxima eficiencia.',cop:'5.5',power:'15 kW',price:'4,299',moq:'2 unidades',badgeBg:'bg-teal-100',emoji:'🌍',image:'/products/geotermica-15kw.jpg',features:['Energía geotérmica','COP 5.5','Vida útil 25 años','Bajo mantenimiento'] },
  { id:'7',slug:'piscina-20kw',name:'Bomba Piscina 20kW',nameEn:'Pool Heat Pump 20kW',category:'Especializada',categoryEn:'Specialized',description:'Mantén tu piscina a la temperatura ideal todo el año.',cop:'6.0',power:'20 kW',price:'1,599',moq:'4 unidades',badgeBg:'bg-cyan-100',emoji:'🏊',image:'/products/piscina-20kw.jpg',features:['COP 6.0','Titanio','Anti-corrosión','Control digital'] },
  { id:'8',slug:'circulacion',name:'Kit Circulación',nameEn:'Circulation Kit',category:'Accesorios',categoryEn:'Accessories',description:'Kit completo de circulación hidráulica profesional.',cop:'-',power:'-',price:'189',moq:'20 unidades',badgeBg:'bg-gray-100',emoji:'🔧',image:'/products/circulacion.jpg',features:['Bomba circuladora','Válvulas incluidas','Conexiones rápidas'] },
  { id:'9',slug:'estanque-200l',name:'Estanque 200L',nameEn:'Tank 200L',category:'Accesorios',categoryEn:'Accessories',description:'Estanque de almacenamiento de agua caliente sanitaria 200 litros.',cop:'-',power:'-',price:'249',moq:'10 unidades',badgeBg:'bg-gray-100',emoji:'🛢️',image:'/products/estanque-200l.jpg',features:['Acero inoxidable','Aislamiento térmico','200 litros'] },
  { id:'10',slug:'estanque-300l',name:'Estanque 300L Inox',nameEn:'Tank 300L Stainless',category:'Accesorios',categoryEn:'Accessories',description:'Estanque premium 300 litros en acero inoxidable para alta demanda.',cop:'-',power:'-',price:'389',moq:'8 unidades',badgeBg:'bg-gray-100',emoji:'🛢️',image:'/products/estanque-300l.jpg',features:['Acero inox 316L','Aislamiento VIP','300 litros'] },
  { id:'11',slug:'kit-pex',name:'Kit Tuberías PEX',nameEn:'PEX Pipe Kit',category:'Accesorios',categoryEn:'Accessories',description:'Kit completo de tuberías PEX para instalaciones hidráulicas.',cop:'-',power:'-',price:'129',moq:'25 unidades',badgeBg:'bg-gray-100',emoji:'🔧',image:'/products/kit-pex.jpg',features:['Tubería PEX-A','Conectores incluidos','50 años vida útil'] },
  { id:'12',slug:'kit-hidraulico',name:'Kit Hidráulico Pro',nameEn:'Hydraulic Pro Kit',category:'Accesorios',categoryEn:'Accessories',description:'Kit hidráulico profesional completo para instaladores.',cop:'-',power:'-',price:'349',moq:'8 unidades',badgeBg:'bg-gray-100',emoji:'⚙️',image:'/products/kit-hidraulico.jpg',features:['Válvula mezcladora','Manómetros','Purga automática'] },
];

export const categories = ['Todos','Residencial','Comercial','Especializada','Accesorios'];
export const categoriesEn = ['All','Residential','Commercial','Specialized','Accessories'];

export function getProductBySlug(slug: string): Product | undefined {
  return defaultProducts.find(p => p.slug === slug);
}
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return defaultProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, limit);
}
