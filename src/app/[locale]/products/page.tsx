import { setRequestLocale } from "next-intl/server";
import ProductsClient from "./ProductsClient";

interface ProductsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-nae-dark-blue via-nae-blue to-blue-500 py-20 md:py-28 overflow-hidden">
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-nae-orange opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white opacity-5 rounded-full blur-xl" />

        <div className="container-content relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6">
              Nuestros Productos
            </h1>
            <p className="text-blue-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Soluciones de climatización eficientes para instaladores profesionales.
              Descubre nuestra gama completa de bombas de calor de alta eficiencia energética.
            </p>
          </div>
        </div>
      </section>

      {/* Client Component: Filter Pills + Product Grid + CTA */}
      <ProductsClient />
    </main>
  );
}
