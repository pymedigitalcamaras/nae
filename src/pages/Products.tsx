import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { products } from '../data';

const categoryFilters = [
  'Todos',
  'Aire-Agua',
  'Split',
  'Comercial',
  'Geotermia',
  'Piscina',
  'Estanques',
  'Kits',
  'Accesorios',
];

export default function Products() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProducts =
    activeFilter === 'Todos'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0D2B6B] to-[#1B4DB5] py-20">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">
            {t('products.title')}
          </h1>
          <p className="text-white/80 mt-4 text-lg">
            Catálogo completo de bombas de calor, estanques y kits NAE
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b">
        <div className="max-w-[1280px] mx-auto px-4 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#1B4DB5] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Top - Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.style.backgroundColor = product.badgeBg;
                      (e.target as HTMLImageElement).parentElement!.innerHTML += `<span class="text-6xl flex items-center justify-center h-full">${product.emoji}</span>`;
                    }}
                  />
                  <span className="absolute top-2 right-2 bg-white/90 rounded-full text-xs font-semibold px-3 py-1 shadow">
                    {product.category}
                  </span>
                </div>
                {/* Bottom */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1A2E]">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      COP {product.cop}
                    </span>
                    <Link
                      to={`/products/${product.slug}`}
                      className="text-[#1B4DB5] font-semibold text-sm hover:underline"
                    >
                      Ver Detalles →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-12">
              No se encontraron productos en esta categoría.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
            ¿Necesitas una solución personalizada?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-[#E87722] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#d66a1a] transition-colors"
          >
            Contactar Ventas
          </Link>
        </div>
      </section>
    </div>
  );
}
