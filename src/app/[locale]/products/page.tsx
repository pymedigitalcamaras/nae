import { setRequestLocale } from "next-intl/server";

const products = [
  { name: "Bomba de Calor R290 Monobloc 12kW", desc: "Sistema monobloc con refrigerante R290. Alta eficiencia para climas templados y fríos. COP 4.5", badge: "Aire-Agua", badgeColor: "#1E40AF", emoji: "❄️" },
  { name: "Bomba de Calor R290 Monobloc 20kW", desc: "Potente sistema monobloc 20kW para aplicaciones comerciales y residenciales grandes.", badge: "Aire-Agua", badgeColor: "#1E40AF", emoji: "🏭" },
  { name: "Sistema Split 9kW + Fancoil", desc: "Kit completo split con unidad interior fancoil. Ideal para renovaciones. COP 4.2", badge: "Split", badgeColor: "#059669", emoji: "🌀" },
  { name: "Bomba de Circulación Inteligente", desc: "Bomba de circulación eficiente para sistemas de calefacción por suelo radiante.", badge: "Accesorios", badgeColor: "#6b7280", emoji: "💧" },
  { name: "Bomba Monobloc Comercial 30kW", desc: "Sistema de alta capacidad para edificios comerciales y aplicaciones industriales.", badge: "Comercial", badgeColor: "#7c3aed", emoji: "🏢" },
  { name: "Bomba Geotérmica 15kW", desc: "Aprovecha la energía del subsuelo para máxima eficiencia todo el año.", badge: "Geotermia", badgeColor: "#047857", emoji: "🌱" },
  { name: "Calentador de Piscina 20kW", desc: "Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia.", badge: "Piscina", badgeColor: "#0891b2", emoji: "🏊" },
];

export default function ProductsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-white mb-4">Nuestros Productos</h1>
          <p className="text-white/70 text-lg max-w-2xl">Catálogo completo de bombas de calor NAE.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center text-6xl">{p.emoji}</div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3" style={{ backgroundColor: p.badgeColor }}>{p.badge}</span>
                <h3 className="font-medium text-lg text-[#1E40AF] mb-2">{p.name}</h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
