import { Link, useParams } from 'react-router-dom';

import { Check } from 'lucide-react';
import { products } from '../data';

export default function ProductDetail() {
  
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F7FA]">
        <h1 className="text-2xl font-bold text-[#1A1A2E] mb-4">
          Producto no encontrado
        </h1>
        <Link
          to="/products"
          className="text-[#1B4DB5] font-semibold hover:underline"
        >
          ← Volver al catálogo
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const specs = [
    { label: 'Potencia', value: product.power || 'N/A' },
    { label: 'COP', value: product.cop || 'N/A' },
    { label: 'Categoría', value: product.category },
    { label: 'Precio FOB', value: product.price || 'Consultar' },
    { label: 'MOQ', value: product.moq ? `${product.moq} unidades` : 'Consultar' },
    { label: 'Garantía', value: '2 años' },
  ];

  return (
    <div>
      {/* Hero */}
      <section
        className="bg-gradient-to-r from-[#0D2B6B] to-[#1B4DB5] py-20"
      >
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <span
            className="inline-block rounded-full text-xs font-semibold px-4 py-1 mb-4"
            style={{ backgroundColor: product.badgeBg }}
          >
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-white">{product.name}</h1>
        </div>
      </section>

      {/* Detail */}
      <section className="bg-[#F5F7FA] py-12">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT */}
            <div
              className="rounded-2xl h-80 flex items-center justify-center"
              style={{ backgroundColor: product.badgeBg }}
            >
              <span className="text-9xl" role="img" aria-label={product.name}>
                {product.emoji}
              </span>
            </div>

            {/* RIGHT */}
            <div>
              <p className="text-lg text-gray-700 mb-6">
                {product.description}
              </p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {spec.label}
                    </p>
                    <p className="font-semibold text-[#1A1A2E] mt-1">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-bold text-lg text-[#1A1A2E] mb-3">
                    Características
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-block bg-[#1B4DB5] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#163d8f] transition-colors"
                >
                  Solicitar Cotización
                </Link>
                <Link
                  to="/products"
                  className="inline-block border-2 border-[#1B4DB5] text-[#1B4DB5] font-semibold px-6 py-3 rounded-lg hover:bg-[#1B4DB5] hover:text-white transition-colors"
                >
                  Volver al Catálogo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-12">
          <div className="max-w-[1280px] mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border"
                >
                  <div
                    className="relative h-48 flex items-center justify-center"
                    style={{ backgroundColor: p.badgeBg }}
                  >
                    <span className="text-6xl" role="img" aria-label={p.name}>
                      {p.emoji}
                    </span>
                    <span className="absolute top-2 right-2 bg-white/90 rounded-full text-xs font-semibold px-3 py-1">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1A2E]">
                      {p.name}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {p.description}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        COP {p.cop}
                      </span>
                      <Link
                        to={`/products/${p.slug}`}
                        className="text-[#1B4DB5] font-semibold text-sm hover:underline"
                      >
                        Ver Detalles →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
