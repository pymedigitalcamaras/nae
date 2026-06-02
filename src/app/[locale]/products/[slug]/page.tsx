import { setRequestLocale } from "next-intl/server";

const products: Record<string, { name: string; desc: string; badge: string; badgeColor: string; emoji: string; specs: Record<string, string> }> = {
  "r290-monobloc-12kw": {
    name: "Bomba de Calor R290 Monobloc 12kW",
    desc: "Sistema monobloc con refrigerante R290. Alta eficiencia para climas templados y fríos. COP 4.5",
    badge: "Aire-Agua", badgeColor: "#1E40AF", emoji: "❄️",
    specs: { Capacidad: "12kW", COP: "4.5", Voltaje: "230V/50Hz", Refrigerante: "R290", Rango: "-25°C a +43°C", Potencia: "2.8kW" },
  },
  "r290-monobloc-20kw": {
    name: "Bomba de Calor R290 Monobloc 20kW",
    desc: "Potente sistema monobloc 20kW para aplicaciones comerciales y residenciales grandes.",
    badge: "Aire-Agua", badgeColor: "#1E40AF", emoji: "🏭",
    specs: { Capacidad: "20kW", COP: "4.2", Voltaje: "400V/50Hz", Refrigerante: "R290", Rango: "-25°C a +43°C", Potencia: "4.8kW" },
  },
  "split-system-9kw": {
    name: "Sistema Split 9kW + Fancoil",
    desc: "Kit completo split con unidad interior fancoil. Ideal para renovaciones. COP 4.2",
    badge: "Split", badgeColor: "#059669", emoji: "🌀",
    specs: { Capacidad: "9kW", COP: "4.2", Voltaje: "230V/50Hz", Refrigerante: "R32", Rango: "-15°C a +43°C", Potencia: "2.1kW" },
  },
  "smart-circulation-pump": {
    name: "Bomba de Circulación Inteligente",
    desc: "Bomba de circulación eficiente para sistemas de calefacción por suelo radiante.",
    badge: "Accesorios", badgeColor: "#6b7280", emoji: "💧",
    specs: { Caudal: "0.5-3.0 m³/h", Altura: "2-6m", Voltaje: "230V/50Hz", Potencia: "6-45W", Control: "PWM" },
  },
  "monobloc-30kw": {
    name: "Bomba Monobloc Comercial 30kW",
    desc: "Sistema de alta capacidad para edificios comerciales y aplicaciones industriales.",
    badge: "Comercial", badgeColor: "#7c3aed", emoji: "🏢",
    specs: { Capacidad: "30kW", COP: "3.8", Voltaje: "400V/50Hz", Refrigerante: "R290", Rango: "-25°C a +43°C", Potencia: "7.9kW" },
  },
  "geothermal-15kw": {
    name: "Bomba Geotérmica 15kW",
    desc: "Aprovecha la energía del subsuelo para máxima eficiencia todo el año.",
    badge: "Geotermia", badgeColor: "#047857", emoji: "🌱",
    specs: { Capacidad: "15kW", COP: "5.2", Voltaje: "400V/50Hz", Refrigerante: "R410A", Rango: "-10°C a +50°C", Potencia: "2.9kW" },
  },
  "pool-heating-20kw": {
    name: "Calentador de Piscina 20kW",
    desc: "Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia.",
    badge: "Piscina", badgeColor: "#0891b2", emoji: "🏊",
    specs: { Capacidad: "20kW", COP: "5.0", Voltaje: "230V/50Hz", Refrigerante: "R32", Rango: "+5°C a +43°C", Potencia: "4.0kW" },
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export default function ProductDetailPage({ params: { locale, slug } }: { params: { locale: string; slug: string } }) {
  setRequestLocale(locale);
  const product = products[slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-medium text-gray-900 mb-4">Producto no encontrado</h1>
          <a href={`/${locale}/products`} className="text-[#1E40AF] hover:underline">← Volver a productos</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-white rounded-2xl border border-gray-100 flex items-center justify-center text-9xl">
            {product.emoji}
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4" style={{ backgroundColor: product.badgeColor }}>
              {product.badge}
            </span>
            <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-[#1E40AF] mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={`/${locale}/register`} className="inline-flex items-center justify-center px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
                Solicitar cotización
              </a>
              <a href={`/${locale}/contact`} className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white font-medium rounded-lg transition-colors">
                Contactar
              </a>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="font-medium text-xl text-gray-900 mb-4">Especificaciones Técnicas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{key}</span>
                    <span className="text-sm font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
