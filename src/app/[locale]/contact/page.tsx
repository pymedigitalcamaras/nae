import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const countries = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Ecuador",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "República Dominicana",
    "Uruguay",
    "Venezuela",
    "China",
    "España",
    "Otros",
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E3A8A] to-[#1E40AF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h1>
          <p className="font-inter text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y un especialista te responderá en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT - Contact Info Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-space-grotesk text-lg font-semibold text-[#111827] mb-1">
                    Correo electrónico
                  </h3>
                  <p className="font-inter text-gray-600 mb-1">Para ventas y consultas generales:</p>
                  <a
                    href="mailto:ventas@nae-energy.com"
                    className="font-inter text-[#1E40AF] font-medium hover:underline"
                  >
                    ventas@nae-energy.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-space-grotesk text-lg font-semibold text-[#111827] mb-1">
                    Teléfono
                  </h3>
                  <p className="font-inter text-gray-600 mb-1">Lunes a viernes, 9:00 - 18:00 (Hora China):</p>
                  <a
                    href="tel:+86755XXXXXXXX"
                    className="font-inter text-[#1E40AF] font-medium hover:underline"
                  >
                    +86-755-XXXX-XXXX
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-lg shadow p-6 flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-space-grotesk text-lg font-semibold text-[#111827] mb-1">
                    Dirección
                  </h3>
                  <p className="font-inter text-gray-600">
                    NAE Energy Co., Ltd.
                  </p>
                  <p className="font-inter text-gray-600">
                    Shenzhen, Guangdong, China
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT - Contact Form */}
            <div className="bg-white rounded-lg shadow p-8">
              <h2 className="font-space-grotesk text-2xl font-bold text-[#111827] mb-2">
                Envíanos un mensaje
              </h2>
              <p className="font-inter text-gray-600 mb-6">
                Completa el formulario y te responderemos a la brevedad.
              </p>

              <form className="space-y-5">
                {/* Nombre completo */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block font-inter text-sm font-medium text-[#111827] mb-2"
                  >
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre y apellido"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label
                    htmlFor="empresa"
                    className="block font-inter text-sm font-medium text-[#111827] mb-2"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    placeholder="Nombre de tu empresa"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                  />
                </div>

                {/* País */}
                <div>
                  <label
                    htmlFor="pais"
                    className="block font-inter text-sm font-medium text-[#111827] mb-2"
                  >
                    País <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="pais"
                    name="pais"
                    required
                    defaultValue=""
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent bg-white"
                  >
                    <option value="" disabled>
                      Selecciona tu país
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-inter text-sm font-medium text-[#111827] mb-2"
                  >
                    Correo electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    htmlFor="telefono"
                    className="block font-inter text-sm font-medium text-[#111827] mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+XX XXX XXX XXXX"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="block font-inter text-sm font-medium text-[#111827] mb-2"
                  >
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    required
                    placeholder="¿Cómo podemos ayudarte? Cuéntanos sobre tu proyecto..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-inter text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent resize-vertical"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold font-inter text-base hover:bg-orange-600 transition-colors shadow-md cursor-pointer"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Map gradient placeholder */}
            <div className="h-80 bg-gradient-to-br from-blue-100 via-indigo-50 to-gray-100 flex items-center justify-center relative">
              {/* Decorative grid lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full" style={{
                  backgroundImage: `linear-gradient(#1E40AF 1px, transparent 1px), linear-gradient(90deg, #1E40AF 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Map pin */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#1E40AF] flex items-center justify-center shadow-lg mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg shadow-md px-6 py-3 text-center">
                  <p className="font-space-grotesk text-lg font-bold text-[#111827]">
                    Sede Principal: Shenzhen, China
                  </p>
                  <p className="font-inter text-sm text-gray-500 mt-1">
                    NAE Energy Co., Ltd.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer info */}
            <div className="px-6 py-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="font-inter text-sm text-gray-500">
                Distribución local en 15 países de Latinoamérica
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="font-inter text-sm text-green-600 font-medium">Oficina operativa activa</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
