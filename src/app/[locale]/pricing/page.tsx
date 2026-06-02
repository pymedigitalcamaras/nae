import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Pricing" });

  const pricingRows = [
    {
      product: "Bomba de Calor R290 Monobloc 12kW",
      category: "Aire-Agua",
      power: "12 kW",
      moq: "2 unidades",
      price: "$1,850",
    },
    {
      product: "Bomba de Calor R290 Monobloc 20kW",
      category: "Aire-Agua",
      power: "20 kW",
      moq: "2 unidades",
      price: "$2,650",
    },
    {
      product: "Sistema Split 9kW + Fancoil",
      category: "Split",
      power: "9 kW",
      moq: "3 unidades",
      price: "$1,420",
    },
    {
      product: "Bomba de Circulación Inteligente",
      category: "Accesorios",
      power: "N/A",
      moq: "10 unidades",
      price: "$145",
    },
    {
      product: "Bomba Monobloc Comercial 30kW",
      category: "Comercial",
      power: "30 kW",
      moq: "1 unidad",
      price: "$4,200",
    },
    {
      product: "Bomba Geotérmica 15kW",
      category: "Geotermia",
      power: "15 kW",
      moq: "2 unidades",
      price: "$3,800",
    },
    {
      product: "Calentador de Piscina 20kW",
      category: "Piscina",
      power: "20 kW",
      moq: "2 unidades",
      price: "$2,950",
    },
  ];

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nae-dark-blue via-nae-blue to-blue-500 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title", { fallback: "Tarifas Mayoristas" })}
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Precios exclusivos para instaladores profesionales registrados
          </p>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-16 md:py-20">
        <div className="container-content">
          {/* Info Card */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 flex items-start gap-3">
            <span className="text-2xl flex-shrink-0 mt-0.5" role="img" aria-label="lock">
              🔒
            </span>
            <div>
              <p className="text-yellow-900 text-sm leading-relaxed">
                <span className="font-semibold">Acceso restringido:</span> Las tarifas mostradas están disponibles exclusivamente para instaladores profesionales registrados y validados. Para acceder a precios mayoristas, regístrate como instalador certificado o contacta con nuestro equipo comercial.
              </p>
            </div>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow overflow-hidden">
              {/* Table Header */}
              <thead>
                <tr className="bg-nae-blue text-white">
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider">
                    Producto
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider">
                    Potencia
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider">
                    MOQ
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-sm uppercase tracking-wider">
                    Precio FOB
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {pricingRows.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-blue-50 transition-colors duration-150`}
                  >
                    <td className="py-4 px-6 text-nae-dark font-medium">
                      {row.product}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                        {row.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-sm">
                      {row.power}
                    </td>
                    <td className="py-4 px-6 text-gray-600 text-sm">
                      {row.moq}
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-nae-orange font-bold text-lg">
                        {row.price}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <p className="text-sm text-gray-500 mt-4">
            * Los precios son FOB (Free On Board) y no incluyen transporte,
            aranceles ni impuestos locales. Sujetos a cambio sin previo aviso.
            MOQ = Cantidad Mínima de Orden.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-nae-grey py-16 md:py-20">
        <div className="container-content text-center">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-nae-dark mb-4">
            ¿Eres instalador profesional?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Regístrate como instalador certificado para acceder a precios
            mayoristas, soporte técnico prioritario y formación especializada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`/${locale}/register`}
              className="inline-block bg-nae-orange hover:bg-nae-dark-orange text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 text-lg"
            >
              Registrarse como Instalador
            </a>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-white border-2 border-nae-orange text-nae-orange hover:bg-nae-orange hover:text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 text-lg"
            >
              Contactar Comercial
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
