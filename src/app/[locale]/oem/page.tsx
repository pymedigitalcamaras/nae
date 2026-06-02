import { setRequestLocale } from "next-intl/server";

interface OEMPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function OEMPage({ params }: OEMPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const benefits = [
    {
      emoji: "🏭",
      title: "Producción a Escala",
      description:
        "Capacidad de 10,000+ unidades mensuales. Planta certificada ISO 9001",
      bgClass: "bg-blue-50",
    },
    {
      emoji: "🔧",
      title: "Personalización Total",
      description:
        "Diseñamos según tus especificaciones: potencia, dimensiones, acabados",
      bgClass: "bg-orange-50",
    },
    {
      emoji: "🔬",
      title: "Tecnología Propia",
      description:
        "Plataforma de I+D con 50+ ingenieros especializados",
      bgClass: "bg-green-50",
    },
    {
      emoji: "✅",
      title: "Certificaciones",
      description:
        "CE, ISO 9001, ISO 14001 y certificaciones locales LATAM",
      bgClass: "bg-purple-50",
    },
    {
      emoji: "🚢",
      title: "Logística Integral",
      description:
        "Envíos marítimos, aéreos y terrestres con tracking",
      bgClass: "bg-cyan-50",
    },
    {
      emoji: "🛠️",
      title: "Soporte Post-Venta",
      description:
        "2 años de garantía y soporte técnico permanente",
      bgClass: "bg-yellow-50",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Consulta",
      description: "Analizamos tus necesidades",
    },
    {
      number: 2,
      title: "Propuesta",
      description: "Diseño y cotización",
    },
    {
      number: 3,
      title: "Producción",
      description: "Fabricación con QC",
    },
    {
      number: 4,
      title: "Entrega",
      description: "Logística y soporte",
    },
  ];

  return (
    <main className="font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-space-grotesk text-white text-4xl md:text-5xl font-bold mb-4">
            Servicios OEM & ODM
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Fabricamos tus bombas de calor con tu marca
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-space-grotesk text-[#111827] text-3xl font-bold text-center mb-12">
            ¿Por qué elegir NAE como tu fabricante?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`${benefit.bgClass} rounded-lg shadow p-6`}
              >
                <div className="text-3xl mb-3">{benefit.emoji}</div>
                <h3 className="font-space-grotesk text-[#111827] text-xl font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-space-grotesk text-[#111827] text-3xl font-bold text-center mb-12">
            Nuestro Proceso
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-2">
                <div className="bg-white rounded-lg shadow p-6 text-center flex-1">
                  <div className="bg-[#F97316] text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto font-bold mb-3">
                    {step.number}
                  </div>
                  <h3 className="font-space-grotesk text-[#111827] text-lg font-bold mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:flex text-[#F97316] text-2xl font-bold shrink-0">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-space-grotesk text-[#111827] text-3xl font-bold text-center mb-12">
            Solicitar Cotización OEM
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form action="/api/contact" method="POST" className="space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="pais"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    País
                  </label>
                  <select
                    id="pais"
                    name="pais"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent bg-white"
                  >
                    <option value="">Selecciona un país</option>
                    <option value="mx">México</option>
                    <option value="co">Colombia</option>
                    <option value="ar">Argentina</option>
                    <option value="cl">Chile</option>
                    <option value="pe">Perú</option>
                    <option value="ec">Ecuador</option>
                    <option value="br">Brasil</option>
                    <option value="es">España</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                    placeholder="+52 55 1234 5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tipo_producto"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tipo de producto
                  </label>
                  <select
                    id="tipo_producto"
                    name="tipo_producto"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent bg-white"
                  >
                    <option value="">Selecciona tipo de producto</option>
                    <option value="aire-agua">Aire-Agua</option>
                    <option value="agua-agua">Agua-Agua</option>
                    <option value="piscina">Piscina</option>
                    <option value="comercial">Comercial</option>
                    <option value="hibrido">Híbrido</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="volumen"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Volumen estimado mensual
                  </label>
                  <select
                    id="volumen"
                    name="volumen"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent bg-white"
                  >
                    <option value="">Selecciona volumen mensual</option>
                    <option value="<100">Menos de 100 unidades</option>
                    <option value="100-500">100 - 500 unidades</option>
                    <option value="500-1000">500 - 1,000 unidades</option>
                    <option value="1000+">Más de 1,000 unidades</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensaje / Requerimientos adicionales
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent resize-none"
                    placeholder="Describe tus requerimientos específicos..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200"
                >
                  Solicitar Cotización
                </button>
              </form>
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] rounded-xl shadow-lg p-8 text-white">
                <h3 className="font-space-grotesk text-2xl font-bold mb-4">
                  ¿Por qué fabricar con NAE?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#F97316] text-xl mt-0.5">✓</span>
                    <span>
                      Reduce costos de producción hasta un 40% comparado con
                      fabricación propia
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F97316] text-xl mt-0.5">✓</span>
                    <span>
                      Time-to-market reducido: primeras muestras en 4-6 semanas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F97316] text-xl mt-0.5">✓</span>
                    <span>
                      Sin inversión en infraestructura ni equipamiento industrial
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F97316] text-xl mt-0.5">✓</span>
                    <span>
                      Flexibilidad en volúmenes: desde lotes pequeños hasta
                      producción masiva
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F97316] text-xl mt-0.5">✓</span>
                    <span>
                      Confidencialidad total: acuerdos de NDA estándar
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F3F4F6] rounded-xl p-8">
                <h3 className="font-space-grotesk text-xl font-bold text-[#111827] mb-4">
                  Nuestras Certificaciones
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-2xl font-bold text-[#1E40AF]">CE</div>
                    <div className="text-sm text-gray-600">
                      Conformidad Europea
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-2xl font-bold text-[#1E40AF]">
                      ISO 9001
                    </div>
                    <div className="text-sm text-gray-600">Calidad</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-2xl font-bold text-[#1E40AF]">
                      ISO 14001
                    </div>
                    <div className="text-sm text-gray-600">Medio Ambiente</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow">
                    <div className="text-2xl font-bold text-[#1E40AF]">
                      LATAM
                    </div>
                    <div className="text-sm text-gray-600">Locales</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F3F4F6] py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-space-grotesk text-[#111827] text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para lanzar tu marca de bombas de calor?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contáctanos hoy y recibe una propuesta personalizada en menos de 48
            horas.
          </p>
          <a
            href={`/${locale}/contact`}
            className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200"
          >
            Hablar con un Especialista
          </a>
        </div>
      </section>
    </main>
  );
}
