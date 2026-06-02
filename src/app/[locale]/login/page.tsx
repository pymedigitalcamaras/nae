import { setRequestLocale } from "next-intl/server";

export default function LoginPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="font-space-grotesk font-medium text-2xl text-[#1E40AF] mb-2">Acceso para Instaladores</h1>
            <p className="text-gray-500 text-sm">Inicia sesión para acceder a precios mayoristas</p>
          </div>

          <form className="space-y-5" action={`/${locale}/dashboard`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" name="email" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input type="password" name="password" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            </div>
            <button type="submit" className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes cuenta? <a href={`/${locale}/register`} className="text-[#1E40AF] hover:underline font-medium">Regístrate aquí</a>
          </div>
        </div>
      </div>
    </div>
  );
}
