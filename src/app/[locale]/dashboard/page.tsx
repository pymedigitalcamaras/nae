import { setRequestLocale } from "next-intl/server";

export default function DashboardPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="container-content py-16">
      <h1 className="font-space-grotesk font-medium text-3xl text-nae-blue mb-4">
        Panel de Control
      </h1>
      <p className="text-nae-dark/70">
        Gestiona tu cuenta y accede a recursos exclusivos.
      </p>
    </div>
  );
}
