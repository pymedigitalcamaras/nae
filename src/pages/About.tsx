import { Award, Leaf, Lightbulb, Heart, Factory, Users, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  { icon: Award, title: 'Calidad', desc: 'Materiales premium y control de calidad riguroso en cada unidad.' },
  { icon: Lightbulb, title: 'Innovación', desc: 'I+D continuo para bombas de calor más eficientes cada año.' },
  { icon: Leaf, title: 'Sostenibilidad', desc: 'Refrigerantes ecológicos R290 y energías renovables.' },
  { icon: Heart, title: 'Servicio', desc: 'Acompañamiento técnico completo para instaladores.' },
];
const stats = [
  { icon: Factory, value: '20,000', label: 'm² fábrica' },
  { icon: Users, value: '50+', label: 'partners' },
  { icon: Globe, value: '15', label: 'países' },
  { icon: TrendingUp, value: '10+', label: 'años experiencia' },
];
const milestones = [
  { year: '2020', text: 'Fundación de NAE en Shenzhen, China' },
  { year: '2021', text: 'Primera línea de producción R290' },
  { year: '2022', text: 'Expansión a Latinoamérica' },
  { year: '2023', text: 'Certificaciones CE, ISO 9001, RoHS' },
  { year: '2024', text: 'Red de 50+ instaladores partners' },
  { year: '2025', text: 'Nueva fábrica de 20,000 m²' },
  { year: '2026', text: 'Lanzamiento plataforma digital NAE' },
];

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-20 text-white text-center">
        <h1 className="text-4xl font-bold md:text-5xl">Sobre NAE</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">New AGE Energy — Conectando la tecnología térmica de China con las necesidades de Latinoamérica.</p>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-center">Nuestra Historia</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>NAE (New AGE Energy) nació en Shenzhen, China, como respuesta a la creciente demanda de soluciones de climatización eficientes y sostenibles en Latinoamérica. Desde 2020, hemos diseñado y fabricado bombas de calor de última generación que combinan tecnología avanzada con precios competitivos.</p>
            <p>Nuestra misión es democratizar el acceso a la energía térmica renovable, apoyando a instaladores y distribuidores con equipos certificados, capacitación técnica y soporte integral.</p>
            <p>Hoy operamos en 15 países, contamos con más de 50 partners instaladores certificados, y seguimos creciendo gracias a la confianza de nuestros clientes.</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(v => <Card key={v.title} className="text-center hover:shadow-lg transition-shadow"><CardContent className="pt-6"><v.icon className="mx-auto mb-3 h-10 w-10 text-[#1B4DB5]" /><h3 className="mb-2 font-semibold">{v.title}</h3><p className="text-sm text-gray-600">{v.desc}</p></CardContent></Card>)}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map(s => <div key={s.label} className="rounded-xl bg-[#1B4DB5] p-6 text-center text-white"><s.icon className="mx-auto mb-2 h-8 w-8" /><div className="text-3xl font-bold">{s.value}</div><div className="text-sm text-blue-100">{s.label}</div></div>)}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-bold text-center">Línea de Tiempo</h2>
          <div className="space-y-6">
            {milestones.map(m => <div key={m.year} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E87722] text-sm font-bold text-white">{m.year.slice(2)}</div>
              <div className="rounded-lg bg-white p-4 shadow-sm flex-1"><span className="text-xs font-semibold text-[#1B4DB5]">{m.year}</span><p className="text-gray-700">{m.text}</p></div>
            </div>)}
          </div>
        </div>
      </section>
    </div>
  );
}
