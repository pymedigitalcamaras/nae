import { setRequestLocale } from "next-intl/server";

const benefits = [
  { title: "Marca propia", desc: "Lanza bombas de calor bajo tu propia marca", icon: "🏷️" },
  { title: "Personalización completa", desc: "Custom specs, colors, branding", icon: "⚙️" },
  { title: "Certificaciones incluidas", desc: "CE, ISO y certificaciones locales", icon: "📋" },
  { title: "Producción a escala", desc: "Desde lotes pequeños hasta producción masiva", icon: "🏭" },
  { title: "Soporte técnico", desc: "Capacitación y soporte técnico continuo", icon: "👥" },
  { title: "Logística global", desc: "Envío a cualquier puerto del mundo", icon: "🚚" },
];

const steps = [
  { num: "1", title: "Consulta", desc: "Comparte tus requerimientos y mercado objetivo" },
  { num: "2", title: "Propuesta", desc: "Diseñamos y cotizamos tu producto a medida" },
  { num: "3", title: "Producción", desc: "Manufactura con tu branding" },
  { num: "4", title: "Entrega", desc: "Control de calidad y envío global" },
];

const countries = ["Chile", "México", "Brasil", "Colombia", "Perú", "Argentina"];

export default function OemPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-5xl text-white mb-4">Servicios OEM/ODM</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Tu marca, nuestra tecnología.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl text-center text-[#1E40AF] mb-12">Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-medium text-lg text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl text-center text-[#1E40AF] mb-12">Proceso</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">{s.num}</div>
                <h3 className="font-medium text-lg">{s.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-xl border border-gray-100 p-8">
          <h2 className="font-space-grotesk font-medium text-2xl text-[#1E40AF] mb-6 text-center">Solicitar Proyecto OEM</h2>
          <form className="space-y-4" action={`/${locale}/contact`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Nombre *" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
              <input type="text" name="company" placeholder="Empresa *" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="country" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]">
                <option value="">País *</option>
                {countries.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <input type="email" name="email" placeholder="Email *" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            </div>
            <textarea name="project" placeholder="Describe tu proyecto *" required rows={4}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF] resize-none" />
            <button type="submit" className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
              Enviar solicitud OEM
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
