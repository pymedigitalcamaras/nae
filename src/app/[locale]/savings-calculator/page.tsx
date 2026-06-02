import { setRequestLocale } from "next-intl/server";

export default function CalculatorPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-white mb-4">Calculadora de Ahorro</h1>
          <p className="text-white/70 text-lg">Descubre cuánto puedes ahorrar con una bomba de calor NAE.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h2 className="font-medium text-xl text-gray-900 mb-6">Datos de tu instalación</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de calefacción actual</label>
                <select name="fuelType" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]">
                  <option value="gas-natural">Gas Natural</option>
                  <option value="gas-lp">Gas LP (Propano)</option>
                  <option value="diesel">Diesel/Petróleo</option>
                  <option value="lena">Leña</option>
                  <option value="electric">Electricidad resistiva</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Costo mensual actual (USD)</label>
                <input type="number" name="monthlyCost" placeholder="Ej: 150"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zona climática</label>
                <select name="climateZone" className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]">
                  <option value="templado">Templado</option>
                  <option value="frio">Frío</option>
                  <option value="muy-frio">Muy frío</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
                Calcular ahorro
              </button>
            </form>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
            <p className="text-gray-400 mb-4">Ingresa tus datos y haz clic en "Calcular ahorro" para ver los resultados.</p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Ahorro mensual</p>
                <p className="text-xl font-bold text-[#F97316]">—</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Ahorro anual</p>
                <p className="text-xl font-bold text-[#1E40AF]">—</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">Reducción CO₂</p>
                <p className="text-xl font-bold text-green-600">—</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
