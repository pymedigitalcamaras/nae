import { setRequestLocale } from "next-intl/server";

export default function DashboardPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-space-grotesk font-medium text-2xl md:text-3xl text-white">Panel de Control</h1>
          <p className="text-white/70 mt-1">Bienvenido a tu cuenta NAE.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-lg text-gray-900 mb-4">👤 Perfil</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Estado</span><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">En Revisión</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Rol</span><span className="font-medium">Instalador</span></div>
              <div className="flex justify-between"><span className="text-gray-500">País</span><span className="font-medium">—</span></div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-lg text-gray-900 mb-4">📊 Estado de cuenta</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                Tu cuenta está en revisión. Te contactaremos en 24-48h para activar tu acceso a precios mayoristas.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-lg text-gray-900 mb-4">⚡ Acciones rápidas</h3>
            <div className="space-y-2">
              <a href={`/${locale}/products`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">🔍 Ver productos</a>
              <a href={`/${locale}/contact`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">📞 Contactar soporte</a>
              <a href={`/${locale}/savings-calculator`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">📊 Calculadora de ahorro</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
