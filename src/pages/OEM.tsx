import { Link } from 'react-router-dom';
import { Factory, Settings, FlaskConical, Award, Ship, Wrench } from 'lucide-react';
import { countries } from '../data';

const benefits = [
  { icon: <Factory size={28} />, title: 'Producción a Escala', desc: 'Capacidad de 10,000+ unidades mensuales. Planta certificada ISO 9001.', bg: 'bg-blue-50' },
  { icon: <Settings size={28} />, title: 'Personalización Total', desc: 'Diseñamos según tus especificaciones: potencia, dimensiones, acabados.', bg: 'bg-orange-50' },
  { icon: <FlaskConical size={28} />, title: 'Tecnología Propia', desc: 'Plataforma de I+D con 50+ ingenieros especializados en sistemas térmicos.', bg: 'bg-green-50' },
  { icon: <Award size={28} />, title: 'Certificaciones', desc: 'CE, ISO 9001, ISO 14001 y certificaciones locales para cada país latinoamericano.', bg: 'bg-purple-50' },
  { icon: <Ship size={28} />, title: 'Logística Integral', desc: 'Envíos marítimos, aéreos y terrestres con tracking en tiempo real.', bg: 'bg-cyan-50' },
  { icon: <Wrench size={28} />, title: 'Soporte Post-Venta', desc: '2 años de garantía y soporte técnico permanente para tus clientes.', bg: 'bg-yellow-50' },
];

const steps = [
  { num: '1', title: 'Consulta', desc: 'Analizamos tus necesidades y requisitos específicos.' },
  { num: '2', title: 'Propuesta', desc: 'Presentamos diseño, muestras y cotización detallada.' },
  { num: '3', title: 'Producción', desc: 'Fabricación con control de calidad en cada etapa.' },
  { num: '4', title: 'Entrega', desc: 'Logística internacional y soporte de lanzamiento.' },
];

export default function OEM() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Servicios OEM & ODM</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">Fabricamos tus bombas de calor con tu marca</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">¿Por qué elegir NAE como tu fabricante?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(b => (
              <div key={b.title} className={`${b.bg} rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="text-nae-blue mb-3">{b.icon}</div>
                <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-nae-grey">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Nuestro Proceso</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 text-center relative">
                <div className="w-10 h-10 rounded-full bg-nae-orange text-white flex items-center justify-center font-bold mx-auto mb-3">{step.num}</div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-2 text-nae-orange text-xl">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-heading">Solicitar Cotización OEM</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className="input-field" />
              <input type="text" placeholder="Empresa" className="input-field" />
              <select className="input-field"><option value="">País</option>{countries.map(c => <option key={c} value={c}>{c}</option>)}</select>
              <input type="email" placeholder="Email" className="input-field" />
              <input type="tel" placeholder="Teléfono" className="input-field" />
              <select className="input-field">
                <option value="">Tipo de producto</option>
                <option>Aire-Agua</option><option>Agua-Agua</option><option>Piscina</option><option>Comercial</option><option>Híbrido</option>
              </select>
              <select className="input-field">
                <option value="">Volumen estimado mensual</option>
                <option>Menos de 100</option><option>100 - 500</option><option>500 - 1,000</option><option>Más de 1,000</option>
              </select>
              <textarea rows={3} placeholder="Mensaje" className="input-field" />
              <button type="submit" className="btn-primary w-full">Solicitar Cotización</button>
            </form>
          </div>
          <div className="bg-gradient-to-br from-nae-dark-blue to-nae-blue rounded-xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">¿Por qué fabricar con NAE?</h3>
            <ul className="space-y-3">
              {['Planta propia con control total de calidad', '50+ ingenieros de I+D', 'Certificaciones CE, ISO 9001, ISO 14001', 'Logística integral puerta a puerta', 'Soporte técnico en español'].map(item => (
                <li key={item} className="flex items-start gap-2"><span className="text-nae-orange mt-0.5">✓</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nae-grey py-12 text-center">
        <Link to="/contact" className="btn-primary">Contactar con Ventas</Link>
      </section>
    </div>
  );
}
