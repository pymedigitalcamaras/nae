import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { products, categories } from "@/lib/data";

export default function ProductsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-white mb-4">
            Nuestros Productos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Soluciones térmicas de alta eficiencia para cada necesidad. Bombas de calor, sistemas split y accesorios de instalación.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-[#1E40AF] text-white">
              Todos
            </span>
            {categories.map((cat) => (
              <span
                key={cat.slug}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const category = categories.find((c) => c.slug === product.categorySlug);
            return (
              <div
                key={product.slug}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  {category && (
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                      style={{ backgroundColor: category.badgeBg }}
                    >
                      {category.name}
                    </span>
                  )}
                  <h3 className="font-medium text-lg text-[#1E40AF] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {product.shortDescription}
                  </p>
                  <Link
                    href={`/${locale}/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E40AF] hover:text-[#F97316] transition-colors"
                  >
                    Ver detalles →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
