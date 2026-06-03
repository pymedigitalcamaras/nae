import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '@/lib/supabase';
import type { Product } from '@/data';
import { categories } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2 } from 'lucide-react';

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState('Todos');

  useEffect(() => {
    getProducts().then(data => { setProducts(data); setLoading(false); });
  }, []);

  const filtered = activeCat === 'Todos' ? products : products.filter(p => p.category === activeCat);

  if (loading) return <div className="flex h-[60vh] items-center justify-center"><Loader2 className="h-8 w-8 animate-spin text-[#1B4DB5]" /></div>;

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-12 text-white text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Nuestros Productos</h1>
        <p className="mt-2 text-blue-100">Bombas de calor y accesorios para instaladores profesionales</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCat(c)} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCat === c ? 'bg-[#1B4DB5] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <Card key={p.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/product/${p.slug}`)}>
              <div className="aspect-[3/2] overflow-hidden bg-gray-100"><img src={p.image} alt={p.name} className="h-full w-full object-cover" /></div>
              <CardContent className="p-4">
                <Badge className="mb-2" variant="secondary">{p.category}</Badge>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
                <div className="mt-2 flex items-center justify-between"><span className="text-sm font-bold text-[#1B4DB5]">COP {p.cop}</span><span className="text-sm text-gray-500">${p.price}</span></div>
              </CardContent>
            </Card>
          ))}
        </div>
        {filtered.length === 0 && <p className="py-12 text-center text-gray-500">No hay productos en esta categoría.</p>}
      </section>
    </div>
  );
}
