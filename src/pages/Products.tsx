import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data';

export default function Products() {
  const [filter, setFilter] = useState('Todos');
  const filtered = filter === 'Todos' ? products : products.filter(p => p.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-nae-dark-blue via-nae-blue to-blue-500 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Nuestros Productos</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">Catálogo completo de bombas de calor NAE</p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === c ? 'bg-nae-blue text-white shadow' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-nae-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <div key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`${p.badgeBg} h-48 flex items-center justify-center relative`}>
                  <span className="text-6xl">{p.emoji}</span>
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">{p.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nae-dark mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">COP {p.cop}</span>
                    <Link to={`/products/${p.slug}`} className="text-nae-blue font-medium hover:underline text-sm">Ver Detalles →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-gray-500 py-12">No hay productos en esta categoría.</p>}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
          <p className="text-gray-600 mb-6">Nuestro equipo de ingenieros puede diseñar un sistema adaptado a tus necesidades específicas.</p>
          <Link to="/contact" className="btn-primary">Contactar Ventas</Link>
        </div>
      </section>
    </div>
  );
}
