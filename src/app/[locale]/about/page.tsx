import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  MapPin,
  Mail,
  Phone,
  Calendar,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { AboutTimeline } from "./AboutTimeline";

const milestones = [
  {
    year: "2016",
    title: "Fundación de NAE en Shenzhen, China",
    description:
      "Inicio de la investigación y desarrollo de bombas de calor adaptadas al clima latinoamericano",
    icon: Calendar,
  },
  {
    year: "2018",
    title: "Primera exportación a Latinoamérica",
    description:
      "Colombia y México se convierten en nuestros primeros mercados internacionales",
    icon: TrendingUp,
  },
  {
    year: "2020",
    title: "Lanzamiento de la serie R290",
    description:
      "Pioneros en adoptar refrigerantes ecológicos en bombas de calor para la región",
    icon: Award,
  },
  {
    year: "2023",
    title: "Red de 500+ instaladores",
    description:
      "Alcanzamos la red de 500 instaladores certificados en 12 países",
    icon: Users,
  },
  {
    year: "2025",
    title: "Centro de Excelencia",
    description:
      "Inauguración de nuestro centro de capacitación y soporte técnico para Latinoamérica",
    icon: MapPin,
  },
];

const teamMembers = [
  {
    name: "Alejandro Martínez",
    role: "CEO & Fundador",
    initials: "AM",
    color: "bg-nae-blue",
  },
  {
    name: "Li Wei",
    role: "Director de Ingeniería",
    initials: "LW",
    color: "bg-nae-orange",
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Operaciones LATAM",
    initials: "CR",
    color: "bg-nae-dark-blue",
  },
  {
    name: "Ana Soto",
    role: "Jefa de Soporte Técnico",
    initials: "AS",
    color: "bg-nae-dark-orange",
  },
];

export default function AboutPage({
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
              Nuestra Historia
            </h1>
            <p className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-2xl">
              Más de una década liderando la transición energética en
              Latinoamérica
            </p>
            <div className="mt-8 flex items-center gap-4 text-white/70 text-sm">
              <Link
                href={`/${locale}`}
                className="hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <span>/</span>
              <span className="text-white">Nosotros</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== OUR STORY SECTION ====== */}
      <section className="section-padding bg-nae-grey">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <SectionTitle
                title="De Shenzhen a Latinoamérica"
                subtitle="Una historia de innovación y compromiso con la transición energética"
                centered={false}
              />
              <div className="space-y-5 text-nae-dark/75 leading-relaxed">
                <p>
                  <strong className="text-nae-dark">
                    NAE (New AGE Energy)
                  </strong>{" "}
                  fue fundada en 2016 con una misión clara: democratizar el
                  acceso a la climatización eficiente y sostenible en América
                  Latina.
                </p>
                <p>
                  Lo que comenzó como un pequeño taller de investigación en
                  Shenzhen, China, se ha transformado en una de las fabricantes
                  de bombas de calor de mayor confianza para instaladores
                  profesionales en toda Latinoamérica.
                </p>
                <p>
                  Nuestro equipo de ingenieros desarrolla cada producto pensando
                  en las condiciones climáticas específicas de la región: desde
                  el clima tropical húmedo del Caribe hasta las bajas
                  temperaturas de la Patagonia.
                </p>
                <p>
                  Hoy contamos con una red de distribución que abarca{" "}
                  <strong className="text-nae-dark">15 países</strong>, más de{" "}
                  <strong className="text-nae-dark">
                    500 instaladores certificados
                  </strong>
                  , y una tasa de satisfacción del{" "}
                  <strong className="text-nae-dark">98%</strong> entre nuestros
                  clientes.
                </p>
              </div>

              {/* Stats Row */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center lg:text-left">
                  <div className="font-space-grotesk font-medium text-2xl md:text-3xl text-nae-blue">
                    15
                  </div>
                  <div className="text-sm text-nae-dark/60 mt-1">
                    Países
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-space-grotesk font-medium text-2xl md:text-3xl text-nae-blue">
                    500+
                  </div>
                  <div className="text-sm text-nae-dark/60 mt-1">
                    Instaladores
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="font-space-grotesk font-medium text-2xl md:text-3xl text-nae-blue">
                    98%
                  </div>
                  <div className="text-sm text-nae-dark/60 mt-1">
                    Satisfacción
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="bg-white rounded-card shadow-card p-8 md:p-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-nae-blue/5 rounded-card p-6 text-center">
                    <Calendar className="w-8 h-8 text-nae-blue mx-auto mb-3" />
                    <div className="font-space-grotesk font-medium text-2xl text-nae-dark">
                      2016
                    </div>
                    <div className="text-xs text-nae-dark/60 mt-1">
                      Año de fundación
                    </div>
                  </div>
                  <div className="bg-nae-orange/5 rounded-card p-6 text-center">
                    <MapPin className="w-8 h-8 text-nae-orange mx-auto mb-3" />
                    <div className="font-space-grotesk font-medium text-2xl text-nae-dark">
                      Shenzhen
                    </div>
                    <div className="text-xs text-nae-dark/60 mt-1">
                      Sede principal
                    </div>
                  </div>
                  <div className="bg-nae-blue/5 rounded-card p-6 text-center">
                    <Users className="w-8 h-8 text-nae-blue mx-auto mb-3" />
                    <div className="font-space-grotesk font-medium text-2xl text-nae-dark">
                      50+
                    </div>
                    <div className="text-xs text-nae-dark/60 mt-1">
                      Ingenieros I+D
                    </div>
                  </div>
                  <div className="bg-nae-orange/5 rounded-card p-6 text-center">
                    <Award className="w-8 h-8 text-nae-orange mx-auto mb-3" />
                    <div className="font-space-grotesk font-medium text-2xl text-nae-dark">
                      ISO 9001
                    </div>
                    <div className="text-xs text-nae-dark/60 mt-1">
                      Certificación
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TIMELINE SECTION ====== */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionTitle
            title="Nuestra Trayectoria"
            subtitle="Hitos que marcan nuestro crecimiento y compromiso con la región"
          />
          <AboutTimeline milestones={milestones} />
        </div>
      </section>

      {/* ====== MISSION / VISION / VALUES ====== */}
      <section className="section-padding bg-nae-grey">
        <div className="container-content">
          <SectionTitle
            title="Lo que Nos Define"
            subtitle="Nuestros pilares fundamentales que guían cada decisión"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="card p-8 md:p-10">
              <div className="w-14 h-14 bg-nae-blue/10 rounded-card flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-nae-blue" />
              </div>
              <h3 className="font-space-grotesk font-medium text-xl md:text-2xl text-nae-dark mb-4">
                Misión
              </h3>
              <p className="text-nae-dark/70 leading-relaxed">
                Proveer soluciones de climatización de última generación que
                reduzcan el consumo energético y las emisiones de carbono,
                mientras creamos oportunidades de negocio para instaladores
                profesionales.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-8 md:p-10">
              <div className="w-14 h-14 bg-nae-orange/10 rounded-card flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-nae-orange" />
              </div>
              <h3 className="font-space-grotesk font-medium text-xl md:text-2xl text-nae-dark mb-4">
                Visión
              </h3>
              <p className="text-nae-dark/70 leading-relaxed">
                Ser la marca de bombas de calor líder en Latinoamérica,
                reconocida por nuestra innovación, calidad y compromiso con la
                transición energética.
              </p>
            </div>

            {/* Values */}
            <div className="card p-8 md:p-10">
              <div className="w-14 h-14 bg-nae-blue/10 rounded-card flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-nae-blue" />
              </div>
              <h3 className="font-space-grotesk font-medium text-xl md:text-2xl text-nae-dark mb-4">
                Valores
              </h3>
              <p className="text-nae-dark/70 leading-relaxed">
                Innovación, Sostenibilidad, Compromiso, Excelencia y Trabajo en
                Equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TEAM SECTION ====== */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionTitle
            title="Nuestro Equipo Directivo"
            subtitle="Líderes apasionados por la transición energética en Latinoamérica"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card p-8 text-center hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  <span className="font-space-grotesk font-medium text-xl text-white">
                    {member.initials}
                  </span>
                </div>
                <h4 className="font-space-grotesk font-medium text-lg text-nae-dark">
                  {member.name}
                </h4>
                <p className="text-sm text-nae-dark/60 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
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
              Únete a nuestra red de instaladores
            </h2>
            <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Sé parte del cambio hacia una climatización sostenible. Accede a
              precios exclusivos, capacitación técnica y soporte permanente.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/register`}
                className="bg-nae-orange text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all inline-flex items-center justify-center gap-2"
              >
                Registrarse Ahora
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="border border-white text-white bg-transparent px-8 py-4 rounded-button font-medium hover:bg-white hover:text-nae-blue transition-all inline-flex items-center justify-center gap-2"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
