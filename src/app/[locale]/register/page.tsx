import { setRequestLocale } from "next-intl/server";

export default function RegisterPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="container-content py-16">
      <h1 className="font-space-grotesk font-medium text-3xl text-nae-blue mb-4">
        Registro de Instalador
      </h1>
      <p className="text-nae-dark/70">
        Crea tu cuenta para acceder a precios mayoristas.
      </p>
    </div>
  );
}
