import { setRequestLocale } from "next-intl/server";

const countries = ["Chile", "México", "Brasil", "Colombia", "Perú", "Argentina", "Ecuador", "Uruguay", "Paraguay", "Bolivia"];

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-white mb-4">Contáctanos</h1>
          <p className="text-white/70 text-lg">Estamos aquí para ayudarte con tu proyecto de climatización.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="font-medium text-gray-900 mb-1">📧 Email</h3>
              <p className="text-gray-600 text-sm">pymedigitalcamaras@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">📞 Teléfono</h3>
              <p className="text-gray-600 text-sm">+56 9 1234 5678</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">🌎 Países</h3>
              <p className="text-gray-600 text-sm">Chile, México, Brasil, Colombia, Perú, Argentina</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="font-space-grotesk font-medium text-xl text-[#1E40AF] mb-6">Envíanos un mensaje</h2>
              <form className="space-y-5">
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
                <input type="tel" name="phone" placeholder="Teléfono"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
                <textarea name="message" placeholder="Mensaje *" required rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF] resize-none" />
                <button type="submit" className="w-full md:w-auto px-8 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
