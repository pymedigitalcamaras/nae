import { setRequestLocale } from "next-intl/server";

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const timeline = [
    { year: "2016", title: "Inicio de operaciones", desc: "First heat pump installations in Latin America" },
    { year: "2018", title: "Expansión regional", desc: "Started operations in Chile and Mexico" },
    { year: "2020", title: "Certificación CE y ISO", desc: "Obtained European and international certifications" },
    { year: "2022", title: "Red de 500+ instaladores", desc: "Built network of certified installers across 15 countries" },
    { year: "2025", title: "Lanzamiento marca NAE", desc: "New AGE Energy brand launch with full product line" },
  ];

  const team = [
    { name: "Carlos Méndez", role: "Director Técnico", country: "Chile" },
    { name: "Ana Paula Silva", role: "Soporte Técnico", country: "Brasil" },
    { name: "Roberto García", role: "Ventas B2B", country: "México" },
    { name: "María Torres", role: "Logística y Operaciones", country: "Colombia" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#111827] via-[#1E3A8A] to-[#1E40AF] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-5xl text-white mb-4">
            Sobre NAE
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            10 años de experiencia en bombas de calor. No vendemos máquinas, vendemos certeza.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 leading-relaxed mb-6">
            New AGE Energy (NAE) nace de una década de experiencia en el campo. No somos solo importadores de equipos: somos instaladores que entendemos el sudor de una obra, la urgencia de un cliente que necesita calefacción antes del invierno, y la frustración de quien compra una máquina y después no sabe a quién llamar cuando falla.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Durante 10 años hemos vivido cada etapa del proceso: desde el diseño de la instalación, el paso de tuberías, la configuración del tablero eléctrico, hasta el primer arranque de la bomba de calor. Por eso sabemos que vender la máquina es solo el 30% del trabajo. El otro 70% es acompañar al instalador, resolver la duda del sábado a la noche, y no abandonar al cliente hasta que el sistema ronronea y la casa está caliente.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            A diferencia de las empresas que te envían un PDF y desaparecen, nosotros tomamos al cliente de la mano hasta que la máquina está funcionando. Ofrecemos asesoría técnica constante, soporte en español desde Latinoamérica, y la tranquilidad de saber que detrás de cada equipo NAE hay un equipo humano que entiende tu mercado, tu clima y tu presupuesto.
          </p>
          <p className="text-xl font-medium text-[#1E40AF] mt-8">
            No vendemos máquinas. Vendemos certeza.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl text-center text-[#1E40AF] mb-12">
            Nuestra Historia
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1E40AF]/20" />
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1E40AF] rounded-full flex items-center justify-center z-10">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                  <span className="text-[#F97316] font-bold text-lg">{item.year}</span>
                  <h3 className="font-medium text-xl text-gray-900 mt-1">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#1E40AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-medium text-xl text-gray-900 mb-3">Misión</h3>
            <p className="text-gray-600">
              Democratizar el acceso a tecnología de climatización eficiente en Latinoamérica, acompañando al instalador en cada paso.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="w-12 h-12 bg-[#F97316]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-medium text-xl text-gray-900 mb-3">Visión</h3>
            <p className="text-gray-600">
              Ser la marca de bombas de calor más confiable de Latinoamérica para 2030.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#059669]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-medium text-xl text-gray-900 mb-3">Valores</h3>
            <p className="text-gray-600">
              Compromiso, Transparencia, Excelencia técnica, Cercanía. Estamos contigo en cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl text-center text-[#1E40AF] mb-12">
            Equipo de Soporte Latinoamérica
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 mx-auto bg-[#1E40AF]/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-medium text-[#1E40AF]">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-medium text-gray-900">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="text-xs text-[#F97316]">{member.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
