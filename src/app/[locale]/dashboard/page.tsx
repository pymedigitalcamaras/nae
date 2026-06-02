import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import {
  ClipboardList,
  Package,
  Users,
  Zap,
  BookOpen,
  Calculator,
  Tag,
  HeadphonesIcon,
  Pencil,
  CheckCircle,
  Clock,
  FileText,
  ShoppingCart,
  UserCheck,
} from "lucide-react";

interface DashboardPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const installer = {
    name: "Carlos Rodriguez",
    company: "ClimaSoluciones MX",
    email: "carlos@climasoluciones.mx",
    phone: "+52-55-XXXX-XXXX",
    country: "Mexico",
    initials: "CR",
    status: "certified" as const,
  };

  const stats = [
    { label: "Cotizaciones realizadas", value: "12", icon: ClipboardList, color: "bg-blue-50 text-blue-600" },
    { label: "Pedidos en proceso", value: "3", icon: Package, color: "bg-orange-50 text-orange-600" },
    { label: "Clientes atendidos", value: "8", icon: Users, color: "bg-green-50 text-green-600" },
    { label: "Ahorro energetico generado", value: "45,000 kWh", icon: Zap, color: "bg-yellow-50 text-yellow-600" },
  ];

  const quickLinks = [
    { label: "Ver Catalogo", href: "/products", icon: BookOpen, description: "Bombas de calor" },
    { label: "Calcular Ahorro", href: "/savings-calculator", icon: Calculator, description: "Herramienta interactiva" },
    { label: "Ver Tarifas", href: "/pricing", icon: Tag, description: "Precios especiales" },
    { label: "Soporte Tecnico", href: "/contact", icon: HeadphonesIcon, description: "Centro de ayuda" },
  ];

  const activities = [
    { title: "Cotizacion solicitada - R290 Monobloc 12kW", time: "Hace 2 dias", icon: FileText, color: "bg-blue-50 text-blue-600" },
    { title: "Pedido confirmado - 5 unidades", time: "Hace 5 dias", icon: ShoppingCart, color: "bg-green-50 text-green-600" },
    { title: "Cuenta aprobada", time: "Hace 15 dias", icon: UserCheck, color: "bg-purple-50 text-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-nae-grey">
      {/* Welcome Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nae-blue via-blue-700 to-nae-dark-blue">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-space-grotesk">
                Bienvenido, {installer.name.split(" ")[0]}
              </h1>
              <p className="text-white/70 font-inter text-base mt-1">
                Panel de control de instalador NAE
              </p>
            </div>
            <div>
              {installer.status === "certified" ? (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-300 text-sm font-medium font-inter">
                  <CheckCircle className="w-4 h-4" />
                  Instalador Certificado
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium font-inter">
                  <Clock className="w-4 h-4" />
                  Pendiente de Aprobacion
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Stats Row */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 font-inter">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 font-space-grotesk">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Two Column Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Mi Perfil */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-5 h-5 text-blue-700" />
              <h2 className="text-xl font-bold text-gray-900 font-space-grotesk">Mi Perfil</h2>
            </div>

            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white text-2xl font-bold font-space-grotesk mb-4 shadow-lg">
                {installer.initials}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 font-space-grotesk">{installer.name}</h3>
              <p className="text-sm text-gray-500 font-inter">{installer.company}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400 font-inter">Email</p>
                  <p className="text-sm text-gray-900 font-inter truncate">{installer.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-inter">Telefono</p>
                  <p className="text-sm text-gray-900 font-inter">{installer.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-inter">Pais</p>
                  <p className="text-sm text-gray-900 font-inter">{installer.country}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-700 text-blue-700 rounded-xl font-medium font-inter hover:bg-blue-700 hover:text-white transition-all">
                <Pencil className="w-4 h-4" />
                Editar Perfil
              </button>
            </div>
          </div>

          {/* Right: Accesos Rapidos */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-bold text-gray-900 font-space-grotesk">Accesos Rapidos</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="group p-5 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all">
                  <div className="flex flex-col items-start gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-orange-100 transition-colors">
                      <link.icon className="w-6 h-6 text-blue-700 group-hover:text-orange-600 transition-colors" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-inter text-sm">{link.label}</p>
                      <p className="text-xs text-gray-400 font-inter mt-0.5">{link.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom: Actividad Reciente */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-blue-700" />
            <h2 className="text-xl font-bold text-gray-900 font-space-grotesk">Actividad Reciente</h2>
          </div>

          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className={`p-3 rounded-xl ${activity.color} flex-shrink-0`}>
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 font-inter truncate">{activity.title}</p>
                  <p className="text-xs text-gray-400 font-inter mt-0.5">{activity.time}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
