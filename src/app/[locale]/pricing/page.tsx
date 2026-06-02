import { setRequestLocale } from "next-intl/server";
import Link from "next/link";

interface PricingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

// ============================================================
// INLINE DATA — All pricing data defined directly in this file
// ============================================================

interface PricingRow {
  id: number;
  product: string;
  category: string;
  categoryColor: string;
  power: string;
  moq: string;
  priceFob: string;
}

const pricingData: PricingRow[] = [
  {
    id: 1,
    product: "R290 Monobloc 12kW",
    category: "Aire-Agua",
    categoryColor: "bg-[#1E40AF]",
    power: "12 kW",
    moq: "5 unidades",
    priceFob: "$1,850",
  },
  {
    id: 2,
    product: "R290 Split 16kW",
    category: "Aire-Agua",
    categoryColor: "bg-[#1E40AF]",
    power: "16 kW",
    moq: "3 unidades",
    priceFob: "$2,400",
  },
  {
    id: 3,
    product: "Inverter 20kW",
    category: "Aire-Agua",
    categoryColor: "bg-[#1E40AF]",
    power: "20 kW",
    moq: "3 unidades",
    priceFob: "$2,950",
  },
  {
    id: 4,
    product: "Geotérmica 10kW",
    category: "Agua-Agua",
    categoryColor: "bg-[#3B82F6]",
    power: "10 kW",
    moq: "5 unidades",
    priceFob: "$3,200",
  },
  {
    id: 5,
    product: "Geotérmica 16kW",
    category: "Agua-Agua",
    categoryColor: "bg-[#3B82F6]",
    power: "16 kW",
    moq: "3 unidades",
    priceFob: "$4,100",
  },
  {
    id: 6,
    product: "Piscina 8kW",
    category: "Piscina",
    categoryColor: "bg-[#0EA5E9]",
    power: "8 kW",
    moq: "10 unidades",
    priceFob: "$1,250",
  },
  {
    id: 7,
    product: "Piscina 15kW",
    category: "Piscina",
    categoryColor: "bg-[#0EA5E9]",
    power: "15 kW",
    moq: "5 unidades",
    priceFob: "$1,850",
  },
  {
    id: 8,
    product: "Híbrido 12kW + ACS",
    category: "Híbrido",
    categoryColor: "bg-[#F97316]",
    power: "12 kW",
    moq: "5 unidades",
    priceFob: "$2,650",
  },
  {
    id: 9,
    product: "Comercial 30kW",
    category: "Comercial",
    categoryColor: "bg-[#8B5CF6]",
    power: "30 kW",
    moq: "2 unidades",
    priceFob: "$5,800",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nae-dark-blue via-nae-blue to-blue-500 py-20 md:py-28 overflow-hidden">
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pricing" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-pricing)" />
          </svg>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-nae-orange opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl" />

        <div className="container-content relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Tarifas Mayoristas
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Precios exclusivos para instaladores autorizados NAE.
              Accede a condiciones preferentes y maximiza tu rentabilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Access Restriction Notice */}
      <section className="py-10 bg-nae-grey">
        <div className="container-content">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-nae-orange rounded-card p-6 md:p-8 shadow-card">
            <div className="flex items-start gap-4">
              {/* Lock Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-nae-orange bg-opacity-10 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-nae-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-bold text-nae-dark mb-2">
                  Acceso Restringido
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esta página es exclusiva para instaladores registrados y aprobados por NAE.
                  Si eres instalador profesional, regístrate para acceder a nuestros precios mayoristas.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 text-nae-orange font-semibold hover:text-nae-dark-orange transition-colors"
                >
                  Registrarse como instalador
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="section-padding bg-nae-grey">
        <div className="container-content">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-nae-dark mb-2">
                Lista de Precios Mayoristas
              </h2>
              <p className="text-gray-500">
                Precios FOB Shenzhen en USD. Válidos para instaladores autorizados.
              </p>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-card shadow-card overflow-hidden">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-nae-dark-blue to-nae-blue text-white">
                      <th className="px-6 py-4 text-left font-heading font-semibold text-sm uppercase tracking-wider">
                        Producto
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-sm uppercase tracking-wider">
                        Categoría
                      </th>
                      <th className="px-6 py-4 text-center font-heading font-semibold text-sm uppercase tracking-wider">
                        Potencia
                      </th>
                      <th className="px-6 py-4 text-center font-heading font-semibold text-sm uppercase tracking-wider">
                        MOQ
                      </th>
                      <th className="px-6 py-4 text-right font-heading font-semibold text-sm uppercase tracking-wider">
                        Precio FOB (USD)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.map((row, index) => (
                      <tr
                        key={row.id}
                        className={`hover:bg-blue-50 transition-colors ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                      >
                        <td className="px-6 py-4 font-medium text-nae-dark">
                          {row.product}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`${row.categoryColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                          >
                            {row.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700">
                          {row.power}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-700">
                          {row.moq}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-heading font-bold text-lg text-nae-dark">
                            {row.priceFob}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y divide-gray-100">
                {pricingData.map((row) => (
                  <div
                    key={row.id}
                    className="p-5 hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-heading font-bold text-nae-dark mb-1">
                          {row.product}
                        </h3>
                        <span
                          className={`${row.categoryColor} text-white px-2.5 py-0.5 rounded-full text-xs font-semibold inline-block`}
                        >
                          {row.category}
                        </span>
                      </div>
                      <span className="font-heading font-bold text-xl text-nae-dark">
                        {row.priceFob}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        {row.power}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                        MOQ: {row.moq}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Note */}
            <div className="mt-6 flex items-start gap-3 text-sm text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <svg
                className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <p>
                <strong>Nota:</strong> Precios FOB Shenzhen en USD. Sujetos a cambio sin previo aviso.
                MOQ = Cantidad mínima de pedido. Los precios mostrados son para referencia;
                los instaladores registrados reciben tarifas actualizadas trimestralmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-nae-dark mb-4">
              ¿Quieres acceder a estos precios?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Únete a nuestra red de instaladores autorizados y benefíciate de condiciones
              exclusivas, soporte técnico prioritario y formación especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-block bg-nae-orange text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all shadow-lg hover:shadow-xl"
              >
                Solicitar Acceso
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-nae-blue text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-blue transition-all"
              >
                Contactar con Ventas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
