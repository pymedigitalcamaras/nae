import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { products, categories } from "@/lib/data";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-medium text-gray-900 mb-4">Producto no encontrado</h1>
          <Link href={`/${locale}/products`} className="text-[#1E40AF] hover:underline">
            ← Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.slug === product.categorySlug);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href={`/${locale}`} className="hover:text-[#1E40AF]">Inicio</Link>
            <span>/</span>
            <Link href={`/${locale}/products`} className="hover:text-[#1E40AF]">Productos</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square bg-white rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Info */}
          <div>
            {category && (
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-4"
                style={{ backgroundColor: category.badgeBg }}
              >
                {category.name}
              </span>
            )}
            <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-[#1E40AF] mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href={`/${locale}/register`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors"
              >
                Solicitar cotización
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white font-medium rounded-lg transition-colors"
              >
                Contactar
              </Link>
            </div>

            {/* Specs */}
            <div className="bg-white rounded-xl border border-gray-100 p-6">
              <h2 className="font-medium text-xl text-gray-900 mb-4">Especificaciones Técnicas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{key}</span>
                    <span className="text-sm font-medium text-gray-800">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
