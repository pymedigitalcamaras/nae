import { setRequestLocale } from "next-intl/server";

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="container-content py-16">
      <h1 className="font-space-grotesk font-medium text-3xl text-nae-blue mb-4">
        Nosotros
      </h1>
      <p className="text-nae-dark/70">
        Conoce la historia y el equipo detrás de NAE — New AGE Energy.
      </p>
    </div>
  );
}
