import { setRequestLocale } from "next-intl/server";

const countries = ["Chile", "México", "Brasil", "Colombia", "Perú", "Argentina", "Ecuador", "Uruguay", "Paraguay", "Bolivia"];

export default function RegisterPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-16 pb-8">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="font-space-grotesk font-medium text-2xl text-[#1E40AF] mb-2">Crear Cuenta de Instalador</h1>
            <p className="text-gray-500 text-sm">Regístrate para acceder a precios mayoristas</p>
          </div>

          <form className="space-y-4" action={`/${locale}/dashboard`}>
            <input type="text" name="fullName" placeholder="Nombre completo *" required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            <input type="text" name="company" placeholder="Nombre de empresa *" required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" name="email" placeholder="Email *" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
              <input type="tel" name="phone" placeholder="Teléfono"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            </div>
            <select name="country" required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]">
              <option value="">País *</option>
              {countries.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="password" name="password" placeholder="Contraseña *" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
              <input type="password" name="confirmPassword" placeholder="Confirmar contraseña *" required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#1E40AF]" />
            </div>
            <button type="submit" className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors mt-6">
              Crear Cuenta
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta? <a href={`/${locale}/login`} className="text-[#1E40AF] hover:underline font-medium">Inicia sesión</a>
          </div>
        </div>
      </div>
    </div>
  );
}
