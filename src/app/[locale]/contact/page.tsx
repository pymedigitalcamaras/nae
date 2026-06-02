import { setRequestLocale } from "next-intl/server";
import { Mail, Phone, MapPin, Navigation } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "./ContactForm";

export default function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <main className="font-inter">
      {/* ====== HERO SECTION ====== */}
      <section className="gradient-bg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="container-content py-20 md:py-28 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              Contáctanos
            </h1>
            <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
              Estamos aquí para ayudarte con tu próximo proyecto
            </p>
          </div>
        </div>
      </section>

      {/* ====== CONTACT INFO CARDS ====== */}
      <section className="section-padding bg-nae-grey">
        <div className="container-content">
          <SectionTitle
            title="Información de Contacto"
            subtitle="Comunícate con nosotros a través de cualquiera de nuestros canales"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="card p-8 text-center hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
              <div className="w-14 h-14 bg-nae-blue/10 rounded-card flex items-center justify-center mx-auto mb-5">
                <Mail className="w-7 h-7 text-nae-blue" />
              </div>
              <h3 className="font-space-grotesk font-medium text-lg text-nae-dark mb-2">
                Correo Electrónico
              </h3>
              <a
                href="mailto:ventas@nae-energy.com"
                className="text-nae-dark/70 hover:text-nae-blue transition-colors"
              >
                ventas@nae-energy.com
              </a>
            </div>

            {/* Phone */}
            <div className="card p-8 text-center hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
              <div className="w-14 h-14 bg-nae-orange/10 rounded-card flex items-center justify-center mx-auto mb-5">
                <Phone className="w-7 h-7 text-nae-orange" />
              </div>
              <h3 className="font-space-grotesk font-medium text-lg text-nae-dark mb-2">
                Teléfono
              </h3>
              <div className="text-nae-dark/70 text-sm space-y-1">
                <p>+86-755-XXXX-XXXX (Shenzhen)</p>
                <p>+57-1-XXX-XXXX (Bogotá)</p>
              </div>
            </div>

            {/* Address */}
            <div className="card p-8 text-center hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
              <div className="w-14 h-14 bg-nae-blue/10 rounded-card flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-7 h-7 text-nae-blue" />
              </div>
              <h3 className="font-space-grotesk font-medium text-lg text-nae-dark mb-2">
                Dirección
              </h3>
              <p className="text-nae-dark/70 text-sm">
                NAE Energy Co., Ltd.
                <br />
                Nanshan District, Shenzhen, China
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CONTACT FORM + MAP ====== */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="mb-10">
                <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl gradient-text">
                  Envíanos un Mensaje
                </h2>
                <p className="mt-4 text-nae-dark/60 text-base leading-relaxed">
                  Completa el formulario y nuestro equipo te responderá en menos
                  de 24 horas.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="h-full min-h-[400px] rounded-card overflow-hidden relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 40%, #3B82F6 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <Navigation className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-space-grotesk font-medium text-xl text-white mb-2">
                    Sede Principal
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                    NAE Energy Co., Ltd.
                    <br />
                    Nanshan District
                    <br />
                    Shenzhen, China
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-white/70 text-xs">
                    <MapPin className="w-4 h-4" />
                    <span>22.5431° N, 113.9589° E</span>
                  </div>
                </div>
                {/* Decorative dots pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern
                        id="dots"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1" fill="white" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
