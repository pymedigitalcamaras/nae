import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '@/lib/supabase';
import type { Product } from '@/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(products => {
      const p = products.find(x => x.slug === slug);
      setProduct(p || null);
      if (p) setRelated(products.filter(x => x.id !== p.id && x.category === p.category).slice(0, 3));
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="flex h-[60vh] items-center justify-center text-gray-400">Cargando...</div>;
  if (!product) return <div className="flex h-[60vh] flex-col items-center justify-center"><h1 className="text-2xl font-bold text-gray-700">Producto no encontrado</h1><Button onClick={() => navigate('/products')} className="mt-4"><ArrowLeft className="mr-2 h-4 w-4" /> Volver</Button></div>;

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/products')} className="mb-4 flex items-center text-sm text-blue-200 hover:text-white"><ArrowLeft className="mr-1 h-4 w-4" /> Volver a productos</button>
          <Badge className="mb-2 bg-white/20 text-white">{product.category}</Badge>
          <h1 className="text-3xl font-bold md:text-4xl">{product.name}</h1>
          <p className="mt-2 max-w-2xl text-blue-100">{product.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-xl border bg-gray-50"><img src={product.image} alt={product.name} className="h-auto w-full object-cover" /></div>
            {related.length > 0 && <div className="mt-4 grid grid-cols-3 gap-2">{related.map(rp => <button key={rp.id} onClick={() => navigate(`/product/${rp.slug}`)} className="overflow-hidden rounded-lg border hover:shadow-md"><img src={rp.image} alt={rp.name} className="h-20 w-full object-cover" /></button>)}</div>}
          </div>
          <div className="space-y-6">
            <div><h2 className="text-xl font-semibold">{product.name}</h2><p className="mt-2 text-gray-600">{product.description}</p></div>
            <div><h3 className="mb-3 font-semibold">Características</h3><ul className="space-y-2">{product.features.map((f, i) => <li key={i} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /><span>{f}</span></li>)}</ul></div>
            <div className="rounded-xl bg-gray-50 p-4"><h3 className="mb-3 font-semibold">Especificaciones</h3><div className="grid grid-cols-2 gap-3 text-sm"><div><span className="text-gray-500">COP:</span> <span className="font-semibold">{product.cop}</span></div><div><span className="text-gray-500">Potencia:</span> <span className="font-semibold">{product.power}</span></div><div><span className="text-gray-500">Precio FOB:</span> <span className="font-semibold">${product.price}</span></div><div><span className="text-gray-500">MOQ:</span> <span className="font-semibold">{product.moq}</span></div></div></div>
            <div className="flex flex-wrap gap-3"><Button onClick={() => navigate('/contact')} className="bg-[#E87722] hover:bg-[#D66A1A]">Solicitar Cotización</Button><Button onClick={() => navigate('/contact')} variant="outline">Contactar</Button></div>
          </div>
        </div>
        {related.length > 0 && <div className="mt-16"><h2 className="mb-6 text-2xl font-bold">Productos Relacionados</h2><div className="grid grid-cols-1 gap-6 sm:grid-cols-3">{related.map(rp => <Card key={rp.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/product/${rp.slug}`)}><div className="aspect-[3/2] overflow-hidden bg-gray-100"><img src={rp.image} alt={rp.name} className="h-full w-full object-cover" /></div><CardContent className="p-4"><Badge className="mb-1" variant="secondary">{rp.category}</Badge><h3 className="font-semibold">{rp.name}</h3><p className="mt-1 text-sm text-gray-500">COP {rp.cop} · {rp.power}</p></CardContent></Card>)}</div></div>}
      </section>
    </div>
  );
}
