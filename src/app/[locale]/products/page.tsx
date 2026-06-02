"use client";

import Link from "next/link";

const products = [
  {
    slug: "r290-monobloc-12kw",
    name: "Bomba de Calor R290 Monobloc 12kW",
    description: "Sistema monobloc con refrigerante R290. Alta eficiencia para climas templados y frios. COP 4.5",
    image: "/images/product-air-source.jpg",
    badge: "Aire-Agua",
  },
  {
    slug: "r290-monobloc-20kw",
    name: "Bomba de Calor R290 Monobloc 20kW",
    description: "Potente sistema monobloc 20kW para aplicaciones comerciales y residenciales grandes.",
    image: "/images/product-air-source.jpg",
    badge: "Aire-Agua",
  },
  {
    slug: "split-system-9kw",
    name: "Sistema Split 9kW + Fancoil",
    description: "Kit completo split con unidad interior fancoil. Ideal para renovaciones. COP 4.2",
    image: "/images/product-geothermal.jpg",
    badge: "Split",
  },
  {
    slug: "smart-circulation-pump",
    name: "Bomba de Circulación Inteligente",
    description: "Bomba de circulación eficiente para sistemas de calefacción por suelo radiante.",
    image: "/images/product-pool.jpg",
    badge: "Accesorios",
  },
  {
    slug: "monobloc-30kw",
    name: "Bomba Monobloc Comercial 30kW",
    description: "Sistema de alta capacidad para edificios comerciales y aplicaciones industriales.",
    image: "/images/product-air-source.jpg",
    badge: "Comercial",
  },
  {
    slug: "geothermal-15kw",
    name: "Bomba Geotérmica 15kW",
    description: "Aprovecha la energía del subsuelo para máxima eficiencia todo el año.",
    image: "/images/product-geothermal.jpg",
    badge: "Geotermia",
  },
  {
    slug: "pool-heating-20kw",
    name: "Calentador de Piscina 20kW",
    description: "Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia.",
    image: "/images/product-pool.jpg",
    badge: "Piscina",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-white mb-4">
            Nuestros Productos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Soluciones térmicas de alta eficiencia para cada necesidad.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#1E40AF] text-white mb-3">
                  {product.badge}
                </span>
                <h3 className="font-medium text-lg text-[#1E40AF] mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <span className="text-sm font-medium text-[#1E40AF]">Ver detalles →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
