import { getTranslations, setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Products" });

  const products = [
    {
      emoji: "❄️",
      name: "Bomba de Calor R290 Monobloc 12kW",
      category: "Aire-Agua",
      badgeColor: "bg-blue-100 text-blue-800",
      description:
        "Sistema monobloc con refrigerante R290. Alta eficiencia para climas templados y fríos.",
      cop: "COP 4.5",
      bgColor: "bg-blue-600",
    },
    {
      emoji: "🏭",
      name: "Bomba de Calor R290 Monobloc 20kW",
      category: "Aire-Agua",
      badgeColor: "bg-blue-100 text-blue-800",
      description:
        "Potente sistema monobloc 20kW para aplicaciones comerciales y residenciales grandes.",
      cop: "COP 4.2",
      bgColor: "bg-blue-600",
    },
    {
      emoji: "🌀",
      name: "Sistema Split 9kW + Fancoil",
      category: "Split",
      badgeColor: "bg-teal-100 text-teal-800",
      description:
        "Kit completo split con unidad interior fancoil. Ideal para renovaciones.",
      cop: "COP 4.2",
      bgColor: "bg-teal-600",
    },
    {
      emoji: "💧",
      name: "Bomba de Circulación Inteligente",
      category: "Accesorios",
      badgeColor: "bg-gray-100 text-gray-800",
      description:
        "Bomba de circulación eficiente para sistemas de calefacción por suelo radiante.",
      cop: "80% ahorro",
      bgColor: "bg-gray-600",
    },
    {
      emoji: "🏢",
      name: "Bomba Monobloc Comercial 30kW",
      category: "Comercial",
      badgeColor: "bg-purple-100 text-purple-800",
      description:
        "Sistema de alta capacidad para edificios comerciales y aplicaciones industriales.",
      cop: "COP 4.0",
      bgColor: "bg-purple-600",
    },
    {
      emoji: "🌱",
      name: "Bomba Geotérmica 15kW",
      category: "Geotermia",
      badgeColor: "bg-emerald-100 text-emerald-800",
      description:
        "Aprovecha la energía del subsuelo para máxima eficiencia todo el año.",
      cop: "COP 5.2",
      bgColor: "bg-emerald-600",
    },
    {
      emoji: "🏊",
      name: "Calentador de Piscina 20kW",
      category: "Piscina",
      badgeColor: "bg-cyan-100 text-cyan-800",
      description:
        "Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia.",
      cop: "COP 5.5",
      bgColor: "bg-cyan-600",
    },
  ];

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-nae-dark-blue via-nae-blue to-blue-500 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title", { fallback: "Nuestros Productos" })}
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Soluciones de climatización de alta eficiencia energética para
            instaladores profesionales
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                {/* Card Top - Emoji + Category Badge */}
                <div
                  className={`${product.bgColor} relative py-8 flex items-center justify-center`}
                >
                  <span className="text-6xl">{product.emoji}</span>
                  <span
                    className={`absolute top-2 right-2 ${product.badgeColor} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {product.category}
                  </span>
                </div>

                {/* Card Bottom - Details */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-nae-dark font-space-grotesk">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mt-3 w-fit">
                    {product.cop}
                  </span>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a
                      href={`/${locale}/contact`}
                      className="inline-block bg-nae-orange hover:bg-nae-dark-orange text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200 text-sm"
                    >
                      Cotizar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-nae-grey py-16 md:py-20">
        <div className="container-content text-center">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-nae-dark mb-4">
            ¿Necesitas ayuda para elegir?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Nuestro equipo de ingenieros te asesorará para encontrar la solución
            óptima para tu proyecto.
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-block bg-nae-orange hover:bg-nae-dark-orange text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 text-lg"
          >
            Contactar un Asesor
          </a>
        </div>
      </section>
    </main>
  );
}
