"use client";

import { useState } from "react";
import Link from "next/link";

// ============================================================
// INLINE DATA — All product data defined directly in this file
// ============================================================

const categories = [
  { key: "Todos", label: "Todos" },
  { key: "Aire-Agua", label: "Aire-Agua" },
  { key: "Agua-Agua", label: "Agua-Agua" },
  { key: "Piscina", label: "Piscina" },
  { key: "Híbrido", label: "Híbrido" },
  { key: "Comercial", label: "Comercial" },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

const categoryBadgeColors: Record<string, string> = {
  "Aire-Agua": "bg-[#1E40AF] text-white",
  "Agua-Agua": "bg-[#3B82F6] text-white",
  Piscina: "bg-[#0EA5E9] text-white",
  Híbrido: "bg-[#F97316] text-white",
  Comercial: "bg-[#8B5CF6] text-white",
};

const categoryIcons: Record<string, string> = {
  "Aire-Agua": "❄️",
  "Agua-Agua": "♨️",
  Piscina: "🏊",
  Híbrido: "⚡",
  Comercial: "🏢",
};

interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  cop: number;
  power: string;
}

const products: Product[] = [
  {
    id: 1,
    slug: "r290-monobloc-12kw",
    name: "Bomba de Calor R290 Monobloc 12kW",
    category: "Aire-Agua",
    description:
      "Sistema monobloc de alta eficiencia con refrigerante ecológico R290. Ideal para viviendas unifamiliares.",
    cop: 4.65,
    power: "12 kW",
  },
  {
    id: 2,
    slug: "r290-split-16kw",
    name: "Bomba de Calor R290 Split 16kW",
    category: "Aire-Agua",
    description:
      "Sistema split con unidad interior y exterior separadas. Mayor flexibilidad de instalación.",
    cop: 4.8,
    power: "16 kW",
  },
  {
    id: 3,
    slug: "inverter-20kw",
    name: "Bomba de Calor Inverter 20kW",
    category: "Aire-Agua",
    description:
      "Potente sistema inverter para grandes viviendas y aplicaciones comerciales ligeras.",
    cop: 4.5,
    power: "20 kW",
  },
  {
    id: 4,
    slug: "geotermica-10kw",
    name: "Bomba de Calor Geotérmica 10kW",
    category: "Agua-Agua",
    description:
      "Aprovecha la energía del subsuelo para máxima eficiencia todo el año.",
    cop: 5.2,
    power: "10 kW",
  },
  {
    id: 5,
    slug: "geotermica-16kw",
    name: "Bomba de Calor Geotérmica 16kW",
    category: "Agua-Agua",
    description:
      "Sistema geotérmico de alta capacidad para climas extremos y grandes espacios.",
    cop: 5.0,
    power: "16 kW",
  },
  {
    id: 6,
    slug: "piscina-8kw",
    name: "Bomba de Calor para Piscina 8kW",
    category: "Piscina",
    description:
      "Mantén tu piscina a la temperatura ideal durante toda la temporada.",
    cop: 5.5,
    power: "8 kW",
  },
  {
    id: 7,
    slug: "piscina-15kw",
    name: "Bomba de Calor Piscina 15kW",
    category: "Piscina",
    description:
      "Alta capacidad de calentamiento para piscinas grandes y climas fríos.",
    cop: 5.3,
    power: "15 kW",
  },
  {
    id: 8,
    slug: "hibrido-12kw-acs",
    name: "Sistema Híbrido 12kW + ACS",
    category: "Híbrido",
    description:
      "Combina bomba de calor con resistencia auxiliar para máximo confort y agua caliente.",
    cop: 4.3,
    power: "12 kW",
  },
  {
    id: 9,
    slug: "comercial-30kw",
    name: "Bomba de Calor Comercial 30kW",
    category: "Comercial",
    description:
      "Solución industrial de alta capacidad para edificios comerciales y grandes instalaciones.",
    cop: 4.2,
    power: "30 kW",
  },
];

// ============================================================
// COMPONENT
// ============================================================

export default function ProductsClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter Pills */}
      <section className="bg-nae-grey py-6">
        <div className="container-content">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-nae-blue text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-nae-blue hover:text-white shadow-sm hover:shadow-md"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-nae-grey">
        <div className="container-content">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-6xl" role="img" aria-label={product.category}>
                    {categoryIcons[product.category] || "🔧"}
                  </span>
                  {/* Category Badge */}
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      categoryBadgeColors[product.category] || "bg-gray-500 text-white"
                    }`}
                  >
                    {product.category}
                  </span>
                  {/* COP Badge */}
                  <span className="absolute top-4 right-4 bg-nae-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                    COP {product.cop}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-lg font-bold text-nae-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {product.description}
                  </p>

                  {/* Specs Row */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {product.power}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 bg-nae-blue text-white px-4 py-2.5 rounded-button font-medium text-sm text-center hover:bg-nae-dark-blue transition-all"
                    >
                      Ver Detalles
                    </Link>
                    <button className="flex-1 bg-nae-orange text-white px-4 py-2.5 rounded-button font-medium text-sm hover:bg-nae-dark-orange transition-all">
                      Cotizar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-nae-dark-blue to-nae-blue">
        <div className="container-content text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Nuestro equipo de ingeniería puede diseñar sistemas a medida para proyectos especiales.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-nae-orange text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all shadow-lg hover:shadow-xl"
          >
            Contactar Ventas
          </Link>
        </div>
      </section>
    </>
  );
}
