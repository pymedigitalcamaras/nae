import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import {
  Factory,
  Paintbrush,
  Cpu,
  ShieldCheck,
  Ship,
  Headphones,
  ClipboardList,
  FileText,
  Settings,
  PackageCheck,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { OemContactForm } from "./OemContactForm";

const benefits = [
  {
    icon: Factory,
    title: "Producción a Escala",
    description:
      "Capacidad de producción de 10,000+ unidades mensuales en nuestra planta certificada ISO 9001",
    color: "bg-nae-blue",
    bgColor: "bg-nae-blue/5",
  },
  {
    icon: Paintbrush,
    title: "Personalización Total",
    description:
      "Diseñamos el producto según tus especificaciones: potencia, dimensiones, acabados y empaque",
    color: "bg-nae-orange",
    bgColor: "bg-nae-orange/5",
  },
  {
    icon: Cpu,
    title: "Tecnología Propia",
    description:
      "Plataforma de I+D con 50+ ingenieros especializados en sistemas térmicos",
    color: "bg-nae-blue",
    bgColor: "bg-nae-blue/5",
  },
  {
    icon: ShieldCheck,
    title: "Certificaciones",
    description:
      "CE, ISO 9001, ISO 14001, y certificaciones locales para cada país latinoamericano",
    color: "bg-nae-orange",
    bgColor: "bg-nae-orange/5",
  },
  {
    icon: Ship,
    title: "Logística Integral",
    description:
      "Gestión de envíos marítimos, aéreos y terrestres con seguimiento en tiempo real",
    color: "bg-nae-blue",
    bgColor: "bg-nae-blue/5",
  },
  {
    icon: Headphones,
    title: "Soporte Post-Venta",
    description:
      "Garantía de 2 años y soporte técnico permanente para tus clientes",
    color: "bg-nae-orange",
    bgColor: "bg-nae-orange/5",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Consulta",
    description: "Analizamos tus necesidades y requisitos específicos",
    color: "bg-nae-blue",
  },
  {
    icon: FileText,
    title: "Propuesta",
    description: "Presentamos diseño, muestras y cotización detallada",
    color: "bg-nae-orange",
  },
  {
    icon: Settings,
    title: "Producción",
    description: "Fabricación con control de calidad en cada etapa",
    color: "bg-nae-blue",
  },
  {
    icon: PackageCheck,
    title: "Entrega",
    description: "Logística internacional y soporte de lanzamiento",
    color: "bg-nae-orange",
  },
];

export default function OemPage({
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
              Servicios OEM & ODM
            </h1>
            <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
              Fabricamos tus bombas de calor con tu marca
            </p>
          </div>
        </div>
      </section>

      {/* ====== BENEFITS SECTION ====== */}
      <section className="section-padding bg-nae-grey">
        <div className="container-content">
          <SectionTitle
            title="Ventajas de Fabricar con NAE"
            subtitle="Todo lo que necesitas para lanzar tu propia línea de bombas de calor"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="card p-8 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 ${benefit.bgColor} rounded-card flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-7 h-7 ${benefit.color.replace("bg-", "text-")}`} />
                  </div>
                  <h3 className="font-space-grotesk font-medium text-lg text-nae-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-nae-dark/65 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====== PROCESS SECTION ====== */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionTitle
            title="Nuestro Proceso"
            subtitle="De la idea al producto final en 4 pasos claros y eficientes"
          />

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-nae-blue via-nae-orange to-nae-blue" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative text-center"
                  >
                    {/* Step number + icon */}
                    <div className="relative z-10 w-16 h-16 mx-auto rounded-full flex items-center justify-center shadow-card mb-5 bg-white">
                      <div
                        className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Step number badge */}
                    <span className="inline-block font-space-grotesk font-medium text-xs text-white bg-nae-dark-blue px-2.5 py-0.5 rounded-full mb-3">
                      Paso {index + 1}
                    </span>

                    <h3 className="font-space-grotesk font-medium text-lg text-nae-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-nae-dark/60 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====== OEM CONTACT FORM ====== */}
      <section className="section-padding bg-nae-grey">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl gradient-text">
                Solicita una Cotización OEM
              </h2>
              <p className="mt-4 text-nae-dark/60 text-base leading-relaxed max-w-xl mx-auto">
                Cuéntanos sobre tu proyecto y te prepararemos una propuesta
                personalizada en menos de 48 horas.
              </p>
            </div>
            <div className="card p-8 md:p-10">
              <OemContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className="section-padding gradient-bg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="container-content relative z-10">
          <div className="max-w-[800px] mx-auto text-center">
            <h2
              className="font-space-grotesk font-medium text-2xl md:text-3xl lg:text-4xl text-white leading-tight"
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
            >
              ¿Tienes preguntas sobre nuestro servicio OEM?
            </h2>
            <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Nuestro equipo de especialistas está listo para asesorarte en cada
              etapa de tu proyecto.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-nae-orange text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Hablar con un Asesor
              </Link>
              <Link
                href={`/${locale}/products`}
                className="border border-white text-white bg-transparent px-8 py-4 rounded-button font-medium hover:bg-white hover:text-nae-blue transition-all inline-flex items-center justify-center gap-2"
              >
                Ver Productos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
