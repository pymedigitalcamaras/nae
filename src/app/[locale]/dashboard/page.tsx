import { setRequestLocale } from "next-intl/server";

interface DashboardPageProps {
  params: Promise<{ locale: string }>;
}

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const stats = [
    { label: "Cotizaciones", value: "12", icon: "\uD83D\uDCCB" },
    { label: "Pedidos", value: "3", icon: "\uD83D\uDCE6" },
    { label: "Clientes", value: "8", icon: "\uD83D\uDC65" },
    { label: "Ahorro", value: "45,000 kWh", icon: "\u26A1" },
  ];

  const quickLinks = [
    { label: "Ver Cat\u00E1logo", href: "/products" },
    { label: "Calcular Ahorro", href: "/savings-calculator" },
    { label: "Ver Tarifas", href: "/pricing" },
    { label: "Soporte", href: "/contact" },
  ];

  const activities = [
    {
      text: "Cotizaci\u00F3n solicitada - R290 Monobloc",
      date: "2 d\u00EDas",
      color: "bg-nae-blue",
    },
    {
      text: "Pedido confirmado - 5 unidades",
      date: "5 d\u00EDas",
      color: "bg-green-500",
    },
    {
      text: "Cuenta aprobada",
      date: "15 d\u00EDas",
      color: "bg-nae-orange",
    },
  ];

  return (
    <div className="min-h-screen bg-nae-grey">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-nae-dark-blue to-nae-blue py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-white text-2xl font-bold font-space-grotesk">
                Bienvenido, Carlos
              </h1>
              <p className="text-blue-100 mt-1 font-inter">
                Panel de control de instalador NAE
              </p>
            </div>
            <span className="inline-flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium font-inter self-start sm:self-auto">
              Instalador Certificado
            </span>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm"
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-2xl font-bold text-nae-blue font-space-grotesk">
                  {s.value}
                </div>
                <div className="text-sm text-gray-600 font-inter">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Mi Perfil */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-nae-dark mb-4 font-space-grotesk">
              Mi Perfil
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-nae-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold font-space-grotesk">
                CR
              </div>
              <div>
                <p className="font-semibold text-nae-dark font-inter">
                  Carlos Rodr&iacute;guez
                </p>
                <p className="text-sm text-gray-500 font-inter">
                  ClimaSoluciones MX
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4 font-inter">
              <p>
                <span className="font-medium">Email:</span>{" "}
                carlos@climasoluciones.mx
              </p>
              <p>
                <span className="font-medium">Tel&eacute;fono:</span> +52 55
                1234 5678
              </p>
              <p>
                <span className="font-medium">Pa&iacute;s:</span> M&eacute;xico
              </p>
            </div>
            <a
              href="/profile/edit"
              className="inline-block border border-nae-blue text-nae-blue px-4 py-2 rounded-lg text-sm font-medium hover:bg-nae-blue hover:text-white transition-colors font-inter"
            >
              Editar Perfil
            </a>
          </div>

          {/* RIGHT: Accesos R&aacute;pidos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-nae-dark mb-4 font-space-grotesk">
              Accesos R&aacute;pidos
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="bg-nae-grey hover:bg-nae-blue hover:text-white transition-colors p-4 rounded-lg text-center text-sm font-medium text-nae-dark font-inter"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-nae-dark mb-4 font-space-grotesk">
            Actividad Reciente
          </h2>
          <div className="space-y-4">
            {activities.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-3 border-b border-gray-100 last:border-0 pb-3 last:pb-0"
              >
                <span
                  className={`w-2 h-2 rounded-full ${a.color} flex-shrink-0`}
                />
                <span className="flex-1 text-sm text-nae-dark font-inter">
                  {a.text}
                </span>
                <span className="text-xs text-gray-400 font-inter">
                  {a.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
