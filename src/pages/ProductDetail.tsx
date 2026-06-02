import { Link, useParams } from 'react-router-dom';
import { products } from '../data';
import { Check, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nae-grey">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <Link to="/products" className="text-nae-blue hover:underline">← Volver al catálogo</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="text-blue-200 hover:text-white text-sm mb-4 inline-flex items-center gap-1">
            <ArrowLeft size={16} /> Volver al catálogo
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className={`${product.badgeBg} text-white px-3 py-1 rounded-full text-sm font-medium`}>{product.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white font-heading">{product.name}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-nae-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Visual */}
            <div className={`${product.badgeBg} rounded-2xl h-80 lg:h-96 flex items-center justify-center`}>
              <span className="text-9xl">{product.emoji}</span>
            </div>

            {/* Right - Details */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{product.description}</p>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Potencia', value: product.power },
                  { label: 'COP', value: product.cop },
                  { label: 'Categoría', value: product.category },
                  { label: 'Precio FOB', value: product.price },
                  { label: 'MOQ', value: product.moq },
                  { label: 'Garantía', value: '2 años' },
                ].map(spec => (
                  <div key={spec.label} className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-xs text-gray-500 uppercase">{spec.label}</p>
                    <p className="font-semibold text-nae-dark">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 className="font-semibold mb-3">Características</h3>
              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <Check size={18} className="text-green-500 shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">Solicitar Cotización</Link>
                <Link to="/products" className="btn-outline">Volver al Catálogo</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
