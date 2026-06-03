import { useNavigate } from 'react-router-dom';
import { Tag, Palette, Package, FileCheck, Factory, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  { icon: Tag, title: 'Private Labeling', desc: 'Tu marca, nuestros equipos. Etiquetado y branding personalizado.' },
  { icon: Palette, title: 'Diseño Personalizado', desc: 'Adaptamos colores, acabados y especificaciones a tu mercado.' },
  { icon: Package, title: 'Empaque a Medida', desc: 'Cajas, manuales y material promocional en tu idioma.' },
  { icon: FileCheck, title: 'Certificaciones', desc: 'CE, ISO 9001, RoHS, CB y certificaciones locales bajo tu marca.' },
];
const steps = [
  { num: '01', title: 'Consulta', desc: 'Analizamos tus necesidades y mercado objetivo.' },
  { num: '02', title: 'Diseño', desc: 'Propuesta técnica y comercial personalizada.' },
  { num: '03', title: 'Muestra', desc: 'Producción de muestras para validación.' },
  { num: '04', title: 'Producción', desc: 'Fabricación en serie con control de calidad.' },
  { num: '05', title: 'Entrega', desc: 'Logística internacional y soporte post-venta.' },
];
const certs = ['CE', 'ISO 9001', 'ERP', 'RoHS', 'CB', 'SAA'];

export default function OEM() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-20 text-white text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Servicios OEM</h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">Tu Marca, Nuestra Tecnología</p>
        <Button onClick={() => navigate('/contact')} className="mt-8 bg-[#E87722] hover:bg-[#D66A1A] px-8 py-6 text-lg">Solicitar Consulta OEM <ArrowRight className="ml-2 h-5 w-5" /></Button>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-center">Nuestros Servicios OEM</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(s => <Card key={s.title} className="hover:shadow-lg transition-shadow"><CardContent className="pt-6 text-center"><s.icon className="mx-auto mb-3 h-10 w-10 text-[#1B4DB5]" /><h3 className="mb-2 font-semibold">{s.title}</h3><p className="text-sm text-gray-600">{s.desc}</p></CardContent></Card>)}
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-center">Proceso de Trabajo</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map(step => <div key={step.num} className="relative text-center"><div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#1B4DB5] text-lg font-bold text-white">{step.num}</div><h3 className="mb-1 font-semibold">{step.title}</h3><p className="text-sm text-gray-600">{step.desc}</p></div>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-[#0D2B6B] p-8 text-white flex flex-col justify-center"><Factory className="mb-4 h-12 w-12" /><h3 className="text-2xl font-bold">MOQ OEM</h3><p className="mt-2 text-4xl font-extrabold">100+</p><p className="text-blue-200">unidades por modelo</p><p className="mt-2 text-blue-200">Tiempo: 45-60 días</p></div>
            <div className="p-8">
              <h4 className="mb-4 font-semibold">Incluye:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#E87722]" /> Diseño de etiquetas y manuales</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#E87722]" /> Empaque personalizado</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#E87722]" /> Certificaciones bajo tu marca</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#E87722]" /> Garantía extendida 3 años</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#E87722]" /> Capacitación técnica</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-[#E87722]" /> Soporte post-venta dedicado</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">Certificaciones Disponibles</h2>
          <div className="flex flex-wrap justify-center gap-3">{certs.map(c => <span key={c} className="rounded-full bg-white px-5 py-2 text-sm font-semibold shadow-sm border">{c}</span>)}</div>
        </div>
      </section>
    </div>
  );
}
