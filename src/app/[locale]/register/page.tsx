import { setRequestLocale } from "next-intl/server";

interface RegisterPageProps {
  params: Promise<{ locale: string }>;
}

export default async function RegisterPage({ params }: RegisterPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const countries = [
    { value: "", label: "Selecciona un pa\u00EDs" },
    { value: "MX", label: "M\u00E9xico" },
    { value: "CO", label: "Colombia" },
    { value: "AR", label: "Argentina" },
    { value: "CL", label: "Chile" },
    { value: "PE", label: "Per\u00FA" },
    { value: "BR", label: "Brasil" },
    { value: "EC", label: "Ecuador" },
    { value: "VE", label: "Venezuela" },
    { value: "GT", label: "Guatemala" },
    { value: "CR", label: "Costa Rica" },
    { value: "PA", label: "Panam\u00E1" },
    { value: "DO", label: "Rep\u00FAblica Dominicana" },
    { value: "UY", label: "Uruguay" },
    { value: "PY", label: "Paraguay" },
    { value: "BO", label: "Bolivia" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center text-nae-dark font-space-grotesk">
          Registro de Instalador
        </h1>
        <p className="text-gray-600 text-center mb-8 font-inter">
          &Uacute;nete a la red de instaladores profesionales NAE
        </p>

        <form className="space-y-5" action="/api/auth/register" method="POST">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-nae-dark mb-1 font-inter"
            >
              Nombre completo
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Carlos Rodr&iacute;guez"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-nae-dark mb-1 font-inter"
            >
              Nombre de empresa
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="ClimaSoluciones MX"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

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
              placeholder="tu@empresa.com"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-nae-dark mb-1 font-inter"
            >
              Tel&eacute;fono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+52 55 1234 5678"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-nae-dark mb-1 font-inter"
            >
              Pa&iacute;s
            </label>
            <select
              id="country"
              name="country"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter bg-white"
            >
              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
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
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-nae-dark mb-1 font-inter"
            >
              Confirmar contrase&ntilde;a
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent font-inter"
            />
          </div>

          <div className="flex items-start">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-nae-orange border-gray-300 rounded focus:ring-nae-orange mt-1"
            />
            <label
              htmlFor="terms"
              className="ml-2 text-sm text-gray-600 font-inter"
            >
              Acepto los{" "}
              <a href="/terms" className="text-nae-blue hover:underline">
                t&eacute;rminos y condiciones
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-nae-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors font-inter"
          >
            Crear Cuenta
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6 font-inter">
          &iquest;Ya tienes cuenta?{" "}
          <a
            href="/login"
            className="text-nae-blue font-semibold hover:underline"
          >
            Inicia sesi&oacute;n
          </a>
        </p>
      </div>
    </div>
  );
}
