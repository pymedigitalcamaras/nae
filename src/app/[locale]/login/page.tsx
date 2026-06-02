import { setRequestLocale } from "next-intl/server";

interface LoginPageProps {
  params: Promise<{ locale: string }>;
}

export default async function LoginPage({ params }: LoginPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-nae-dark font-space-grotesk">
          Iniciar Sesi&oacute;n
        </h1>
        <p className="text-gray-600 text-center mb-8 font-inter">
          Accede a tu cuenta de instalador NAE
        </p>

        <form className="space-y-5" action="/api/auth/login" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-nae-dark mb-1 font-inter"
            >
              Correo electr&oacute;nico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-nae-dark mb-1 font-inter"
            >
              Contrase&ntilde;a
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 text-nae-orange border-gray-300 rounded focus:ring-nae-orange"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-sm text-gray-600 font-inter"
            >
              Recordarme
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-nae-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors font-inter"
          >
            Iniciar Sesi&oacute;n
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-gray-400 text-sm font-inter">o</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="text-center space-y-3">
          <a
            href="/forgot-password"
            className="block text-sm text-nae-blue hover:underline font-inter"
          >
            &iquest;Olvidaste tu contrase&ntilde;a?
          </a>
          <p className="text-sm text-gray-600 font-inter">
            &iquest;No tienes cuenta?{" "}
            <a
              href="/register"
              className="text-nae-blue font-semibold hover:underline"
            >
              Reg&iacute;strate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
