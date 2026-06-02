import { setRequestLocale } from "next-intl/server";

export default function PricingPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="container-content py-16">
      <h1 className="font-space-grotesk font-medium text-3xl text-nae-blue mb-4">
        Precios Mayoristas
      </h1>
      <p className="text-nae-dark/70">
        Acceso exclusivo para instaladores certificados.
      </p>
    </div>
  );
}
