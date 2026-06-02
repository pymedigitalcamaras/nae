import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";

const products = [
  {
    slug: "r290-12kw",
    title: "Bomba de Calor R290 Monobloc 12kW",
    description: "Sistema monobloc con refrigerante R290. Alta eficiencia para climas templados y frios. COP 4.5",
    image: "/images/product-air-source.jpg",
    badge: "Aire-Agua",
    badgeColor: "#1E40AF",
  },
  {
    slug: "r290-20kw",
    title: "Bomba de Calor R290 Monobloc 20kW",
    description: "Potente sistema monobloc 20kW para aplicaciones comerciales y residenciales grandes.",
    image: "/images/product-air-source.jpg",
    badge: "Aire-Agua",
    badgeColor: "#1E40AF",
  },
  {
    slug: "split-9kw",
    title: "Sistema Split 9kW + Fancoil",
    description: "Kit completo split con unidad interior fancoil. Ideal para renovaciones. COP 4.2",
    image: "/images/product-geothermal.jpg",
    badge: "Split",
    badgeColor: "#059669",
  },
];

interface ProductsSectionProps {
  locale: string;
}

export function ProductsSection({ locale }: ProductsSectionProps) {
  return (
    <section id="productos" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <SectionTitle 
            title="Productos Destacados" 
            subtitle="Soluciones termicas de alta eficiencia para cada necesidad" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {products.map((product, index) => (
            <div
              key={product.slug}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3" 
                  style={{ backgroundColor: product.badgeColor }}
                >
                  {product.badge}
                </span>
                <h3 className="font-medium text-lg text-[#1E40AF] mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                  {product.description}
                </p>
                <Link 
                  href={`/${locale}/products/${product.slug}`} 
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E40AF] hover:text-[#F97316] transition-colors"
                >
                  Ver detalles <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            href={`/${locale}/products`} 
            className="inline-flex items-center gap-2 text-[#1E40AF] hover:text-[#F97316] font-medium transition-colors"
          >
            Ver todos los productos <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
