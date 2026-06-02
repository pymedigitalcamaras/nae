"use client";

export default function AboutPage() {
  const timeline = [
    { year: "2016", title: "Inicio de operaciones", desc: "First heat pump installations in Latin America" },
    { year: "2018", title: "Expansión regional", desc: "Started operations in Chile and Mexico" },
    { year: "2020", title: "Certificación CE y ISO", desc: "Obtained European and international certifications" },
    { year: "2022", title: "Red de 500+ instaladores", desc: "Built network of certified installers across 15 countries" },
    { year: "2025", title: "Lanzamiento marca NAE", desc: "New AGE Energy brand launch with full product line" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#111827] via-[#1E3A8A] to-[#1E40AF] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-5xl text-white mb-4">Sobre NAE</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">10 años de experiencia en bombas de calor.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-600 leading-relaxed mb-6">
          New AGE Energy (NAE) nace de una década de experiencia en el campo. No somos solo importadores de equipos: somos instaladores que entendemos el sudor de una obra, la urgencia de un cliente que necesita calefacción antes del invierno, y la frustración de quien compra una máquina y después no sabe a quién llamar cuando falla.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Durante 10 años hemos vivido cada etapa del proceso: desde el diseño de la instalación, el paso de tuberías, la configuración del tablero eléctrico, hasta el primer arranque de la bomba de calor. Por eso sabemos que vender la máquina es solo el 30% del trabajo. El otro 70% es acompañar al instalador, resolver la duda del sábado a la noche, y no abandonar al cliente hasta que el sistema ronronea y la casa está caliente.
        </p>
        <p className="text-xl font-medium text-[#1E40AF] mt-8">No vendemos máquinas. Vendemos certeza.</p>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl text-center text-[#1E40AF] mb-12">Nuestra Historia</h2>
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
    </div>
  );
}
