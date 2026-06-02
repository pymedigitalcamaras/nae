import { setRequestLocale } from "next-intl/server";

const pricingData = [
  { name: "Bomba R290 Monobloc 12kW", category: "Aire-Agua", price: 1299, moq: 5 },
  { name: "Bomba R290 Monobloc 20kW", category: "Aire-Agua", price: 1899, moq: 3 },
  { name: "Sistema Split 9kW + Fancoil", category: "Split", price: 999, moq: 5 },
  { name: "Bomba Circulación Inteligente", category: "Accesorios", price: 299, moq: 10 },
  { name: "Bomba Monobloc Comercial 30kW", category: "Comercial", price: 3499, moq: 2 },
  { name: "Bomba Geotérmica 15kW", category: "Geotermia", price: 2499, moq: 3 },
  { name: "Calentador de Piscina 20kW", category: "Piscina", price: 2199, moq: 3 },
];

export default function PricingPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-space-grotesk font-medium text-3xl text-white mb-2">Precios Mayoristas</h1>
          <p className="text-white/70">Acceso exclusivo para distribuidores e instaladores autorizados.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Producto</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Categoría</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Precio USD</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">MOQ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pricingData.map((p) => (
                  <tr key={p.name} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{p.name}</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-xs font-medium bg-[#1E40AF]/10 text-[#1E40AF]">{p.category}</span></td>
                    <td className="px-6 py-4 text-right font-bold text-[#F97316]">${p.price.toLocaleString()}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{p.moq} unids</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
