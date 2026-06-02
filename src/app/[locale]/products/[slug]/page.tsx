import { setRequestLocale } from "next-intl/server";

export default function ProductDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(params.locale);

  return (
    <div className="container-content py-16">
      <h1 className="font-space-grotesk font-medium text-3xl text-nae-blue mb-4">
        Detalle del Producto
      </h1>
      <p className="text-nae-dark/70">Producto: {params.slug}</p>
    </div>
  );
}
