import { setRequestLocale } from "next-intl/server";

interface SavingsCalculatorPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function SavingsCalculatorPage({
  params,
}: SavingsCalculatorPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-space-grotesk text-white text-4xl md:text-5xl font-bold mb-4">
            Calculadora de Ahorro
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Descubre tu potencial de ahorro al cambiar a bomba de calor NAE
          </p>
        </div>
      </section>

      {/* Input Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="font-space-grotesk text-[#111827] text-2xl font-bold text-center mb-8">
              Datos de tu instalación actual
            </h2>
            <form action="/api/calculate-savings" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="combustible"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Tipo de combustible actual
                </label>
                <select
                  id="combustible"
                  name="combustible"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent bg-white"
                >
                  <option value="">Selecciona tu combustible</option>
                  <option value="gas-natural">Gas Natural</option>
                  <option value="gas-lp">Gas LP</option>
                  <option value="electricidad">Electricidad</option>
                  <option value="diesel">Diésel</option>
                  <option value="carbon">Carbón</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="costo_mensual"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Costo mensual de calefacción (USD)
                </label>
                <input
                  type="number"
                  id="costo_mensual"
                  name="costo_mensual"
                  min={0}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                  placeholder="Ej: 250"
                />
              </div>

              <div>
                <label
                  htmlFor="metros_cuadrados"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Metros cuadrados del espacio
                </label>
                <input
                  type="number"
                  id="metros_cuadrados"
                  name="metros_cuadrados"
                  min={1}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                  placeholder="Ej: 120"
                />
              </div>

              <div>
                <label
                  htmlFor="zona_climatica"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Zona climática
                </label>
                <select
                  id="zona_climatica"
                  name="zona_climatica"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent bg-white"
                >
                  <option value="">Selecciona tu zona climática</option>
                  <option value="tropical">Tropical cálido</option>
                  <option value="templado">Templado</option>
                  <option value="frio">Frío</option>
                  <option value="muy-frio">Muy frío</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Calcular Ahorro
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Example Results Section */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-space-grotesk text-[#111827] text-3xl font-bold text-center mb-4">
            Ejemplo de Resultados
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Basado en una instalación de 120m² en zona templada con calefacción
            a gas natural ($250 USD/mes)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Monthly Savings */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">💰</div>
              <div className="text-3xl font-bold text-green-700 mb-2">
                $142 USD
              </div>
              <div className="text-gray-700 font-medium">Ahorro Mensual</div>
              <p className="text-gray-500 text-sm mt-2">
                Reducción del 57% en tu factura energética
              </p>
            </div>

            {/* Annual Savings */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">📅</div>
              <div className="text-3xl font-bold text-[#1E40AF] mb-2">
                $1,704 USD
              </div>
              <div className="text-gray-700 font-medium">Ahorro Anual</div>
              <p className="text-gray-500 text-sm mt-2">
                Acumulado en 12 meses de operación
              </p>
            </div>

            {/* CO2 Reduction */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🌱</div>
              <div className="text-3xl font-bold text-emerald-700 mb-2">
                3,200 kg/año
              </div>
              <div className="text-gray-700 font-medium">
                Reducción CO₂
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Equivalente a plantar 145 árboles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-space-grotesk text-[#111827] text-3xl font-bold text-center mb-10">
            Comparativa
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-6 py-4 text-left bg-gray-50 text-[#111827] font-bold">
                    Métrica
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center bg-red-50 text-red-800 font-bold">
                    Sistema Actual (Gas)
                  </th>
                  <th className="border border-gray-300 px-6 py-4 text-center bg-green-50 text-green-800 font-bold">
                    Bomba de Calor NAE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-700">
                    Costo mensual
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-red-700 font-semibold">
                    $250 USD
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-700 font-semibold">
                    $108 USD
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-700">
                    Costo anual
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-red-700 font-semibold">
                    $3,000 USD
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-700 font-semibold">
                    $1,296 USD
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-700">
                    Eficiencia
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-red-700 font-semibold">
                    90-95%
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-700 font-semibold">
                    300-400% (COP)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-700">
                    Emisiones CO₂
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-red-700 font-semibold">
                    5,400 kg/año
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-center text-green-700 font-semibold">
                    2,200 kg/año
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Product Recommendation */}
      <section className="py-12 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] px-8 py-6">
              <h2 className="font-space-grotesk text-white text-2xl font-bold mb-1">
                Producto Recomendado
              </h2>
              <p className="text-blue-100">
                Basado en tus datos (120m², zona templada)
              </p>
            </div>
            <div className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center shrink-0">
                  <div className="text-5xl mb-2">🔥</div>
                  <div className="text-sm font-semibold text-[#1E40AF] uppercase tracking-wide">
                    R290 Monobloc
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-space-grotesk text-[#111827] text-2xl font-bold mb-2">
                    R290 Monobloc 12kW
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Bomba de calor aire-agua con refrigerante ecológico R290.
                    Ideal para instalaciones residenciales de hasta 140m² en
                    climas templados. COP hasta 4.5 con agua sanitaria
                    incluida.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-[#1E40AF]">
                        12 kW
                      </div>
                      <div className="text-xs text-gray-500">Potencia</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-[#1E40AF]">
                        COP 4.5
                      </div>
                      <div className="text-xs text-gray-500">Eficiencia</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-[#1E40AF]">
                        R290
                      </div>
                      <div className="text-xs text-gray-500">Refrigerante</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-[#1E40AF]">
                        -25°C
                      </div>
                      <div className="text-xs text-gray-500">Min. operación</div>
                    </div>
                  </div>
                  <a
                    href={`/${locale}/contact`}
                    className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Solicitar Cotización Personalizada
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
