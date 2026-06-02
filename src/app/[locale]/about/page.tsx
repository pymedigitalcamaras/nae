import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const milestones = [
    {
      year: "2016",
      title: "Inicio de operaciones",
      description: "Primeras instalaciones de bombas de calor residenciales en mercados latinoamericanos. Desde el día uno, nuestro enfoque fue combinar tecnología de origen europeo con el conocimiento local del clima y las regulaciones de cada país.",
    },
    {
      year: "2018",
      title: "Expansión regional",
      description: "Iniciamos operaciones formales en Chile y México, estableciendo centros de distribución local y alianzas estratégicas con instaladores certificados. Comenzamos a construir la red que hoy nos caracteriza.",
    },
    {
      year: "2020",
      title: "Certificación CE e ISO",
      description: "Obtuvimos las certificaciones CE para el mercado europeo y las certificaciones ISO 9001 e ISO 14001, garantizando los más altos estándares de calidad, seguridad y gestión ambiental en todos nuestros productos.",
    },
    {
      year: "2022",
      title: "Red de 500+ instaladores",
      description: "Alcanzamos la meta de más de 500 instaladores certificados en 15 países de Latinoamérica. Nuestra red de soporte técnico se consolidó como una de las más robustas de la región.",
    },
    {
      year: "2025",
      title: "Lanzamiento marca NAE",
      description: "Consolidamos toda nuestra experiencia en la marca New AGE Energy (NAE), lanzando una línea completa de bombas de calor diseñadas específicamente para las condiciones climáticas y operativas de Latinoamérica.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestra Historia
          </h1>
          <p className="font-inter text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Más de una década construyendo el futuro de la climatización eficiente en Latinoamérica
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6">
            New AGE Energy (NAE) nació de la experiencia real de instaladores que durante años enfrentaron los mismos problemas: equipos diseñados para climas europeos que fallaban en las condiciones extremas de Latinoamérica, falta de soporte técnico en español, y una cadena de suministro larga e ineficiente que encarecía cada proyecto.
          </p>
          <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6">
            Fundada por técnicos e ingenieros con más de 10 años de experiencia en el sector, NAE se propuso cambiar esta realidad. Comenzamos instalando bombas de calor, aprendiendo directamente de cada proyecto, cada cliente y cada desafío climático. Esa experiencia de primera mano es lo que nos diferencia: sabemos exactamente lo que un instalador necesita porque lo hemos vivido.
          </p>
          <p className="font-inter text-gray-700 text-lg leading-relaxed mb-6">
            Hoy operamos en 15 países de Latinoamérica, apoyando a una red de más de 500 instaladores certificados con productos diseñados específicamente para las condiciones de la región. Nuestro modelo de negocio no termina en la venta: ofrecemos acompañamiento técnico de extremo a extremo, desde la selección del equipo hasta la puesta en marcha y el servicio post-venta.
          </p>
          <p className="font-inter text-[#F97316] text-xl font-semibold italic mt-8">
            &ldquo;No vendemos máquinas. Vendemos certeza.&rdquo;
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-center text-[#111827] mb-12">
            Nuestra Historia
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start gap-6">
                  {/* Number circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <span className="font-space-grotesk text-2xl font-bold text-[#1E40AF]">
                      {milestone.year}
                    </span>
                    <h3 className="font-space-grotesk text-xl font-semibold text-[#111827] mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-[#F97316]">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-[#111827] mb-4">Misión</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Democratizar el acceso a tecnología de climatización eficiente en Latinoamérica, eliminando las barreras técnicas, económicas y logísticas que históricamente han limitado la adopción de bombas de calor en la región.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-[#1E40AF]">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-[#111827] mb-4">Visión</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Ser la marca de bombas de calor más confiable de Latinoamérica para 2030, reconocida por la calidad de nuestros productos, la fortaleza de nuestra red de instaladores y la excelencia de nuestro soporte técnico integral.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-green-500">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="font-space-grotesk text-2xl font-bold text-[#111827] mb-4">Valores</h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                Innovación constante en el diseño de nuestros productos, compromiso absoluto con la satisfacción de nuestros clientes e instaladores, y soporte técnico continuo que acompaña a nuestros partners en cada etapa del proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            ¿Quieres ser parte de nuestra red?
          </h2>
          <p className="font-inter text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Únete a más de 500 instaladores certificados en 15 países de Latinoamérica. Accede a productos diseñados para tu mercado, soporte técnico en español y precios competitivos directos de fábrica.
          </p>
          <Link
            href={`/${locale}/register`}
            className="inline-block bg-[#F97316] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            Registrarse como Instalador
          </Link>
        </div>
      </section>
    </main>
  );
}
