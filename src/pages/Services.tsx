import { useNavigate } from 'react-router-dom';
import { ShoppingCart, GraduationCap, Layout, Headphones, Truck, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  { icon: ShoppingCart, title: 'Venta de Equipos', desc: 'Bombas de calor al por mayor para instaladores y distribuidores. Precios competitivos FOB Shenzhen.' },
  { icon: GraduationCap, title: 'Capacitación Técnica', desc: 'Formación completa para instaladores: instalación, mantenimiento y diagnóstico de fallas.' },
  { icon: Layout, title: 'Diseño de Proyectos', desc: 'Soporte técnico en el diseño y dimensionamiento de sistemas de calefacción.' },
  { icon: Headphones, title: 'Soporte Post-Venta', desc: 'Asistencia técnica continua vía WhatsApp, email y videollamada.' },
  { icon: Truck, title: 'Logística y Envío', desc: 'Gestión de transporte internacional. Entrega puerta a puerta disponible.' },
  { icon: TrendingUp, title: 'Marketing para Instaladores', desc: 'Material promocional, fichas técnicas y apoyo en estrategias de venta.' },
];

export default function Services() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-16 text-white text-center"><h1 className="text-4xl font-bold">Nuestros Servicios</h1><p className="mt-2 text-blue-100">Todo lo que necesitas para instalar bombas de calor NAE</p></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => <Card key={s.title} className="hover:shadow-lg transition-shadow"><CardContent className="pt-6"><s.icon className="mb-3 h-10 w-10 text-[#1B4DB5]" /><h3 className="mb-2 text-lg font-semibold">{s.title}</h3><p className="text-sm text-gray-600">{s.desc}</p></CardContent></Card>)}
        </div>
        <div className="mt-12 rounded-xl bg-gray-50 p-8 text-center">
          <h2 className="mb-3 text-xl font-semibold">¿Necesitas un servicio personalizado?</h2>
          <p className="mb-4 text-gray-600">Contáctanos y diseñamos una solución a tu medida.</p>
          <Button onClick={() => navigate('/contact')} className="bg-[#E87722] hover:bg-[#D66A1A]">Contactar</Button>
        </div>
      </section>
    </div>
  );
}
