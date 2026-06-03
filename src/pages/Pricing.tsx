import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const tiers = [
  { name: 'Starter', volume: '5-10 unidades', discount: 'Precio base', features: ['Precio FOB base','Soporte por email','Catálogo digital','Especificaciones técnicas','Manual de instalación'], popular: false },
  { name: 'Professional', volume: '11-50 unidades', discount: '8% descuento', features: ['8% descuento FOB','Soporte técnico WhatsApp','Capacitación online','Diseño de proyectos','Marketing co-branding','Prioridad en envíos'], popular: true },
  { name: 'Enterprise', volume: '51+ unidades', discount: '15% descuento', features: ['15% descuento FOB','Soporte técnico dedicado','Capacitación presencial','Proyectos llave en mano','Marketing full branding','Logística personalizada','Garantía extendida'], popular: false },
];

export default function Pricing() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-16 text-white text-center"><h1 className="text-4xl font-bold">Precios para Instaladores</h1><p className="mt-2 text-blue-100">Estructura de precios basada en volumen (MOQ)</p></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 rounded-xl bg-blue-50 p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold text-[#0D2B6B]">¿Qué es el MOQ?</h2>
          <p className="mx-auto max-w-2xl text-gray-600">MOQ (Minimum Order Quantity) es la cantidad mínima de unidades por pedido. A mayor volumen, mejores descuentos y condiciones comerciales.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map(tier => <Card key={tier.name} className={`relative overflow-hidden ${tier.popular ? 'border-2 border-[#E87722] shadow-xl md:scale-105' : ''}`}>
            {tier.popular && <div className="absolute right-0 top-0 bg-[#E87722] px-3 py-1 text-xs font-semibold text-white">Más Popular</div>}
            <CardHeader className="text-center pb-4"><h3 className="text-xl font-bold">{tier.name}</h3><p className="text-sm text-gray-500">{tier.volume}</p><p className="mt-2 text-2xl font-bold text-[#1B4DB5]">{tier.discount}</p></CardHeader>
            <CardContent><ul className="space-y-3">{tier.features.map(f => <li key={f} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /><span>{f}</span></li>)}</ul><Button className={`mt-6 w-full ${tier.popular ? 'bg-[#E87722] hover:bg-[#D66A1A]' : 'bg-[#1B4DB5] hover:bg-[#0D2B6B]'}`} onClick={() => navigate('/contact')}>Solicitar</Button></CardContent>
          </Card>)}
        </div>
      </section>
    </div>
  );
}
