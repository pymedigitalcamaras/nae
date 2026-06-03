import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Factory,
  Wrench,
  FlaskConical,
  Check,
  Ship,
  Settings,
  ChevronRight,
  ArrowRight,
  Send,
} from 'lucide-react';
import { countries } from '../data';

const benefits = [
  {
    icon: <Factory className="w-8 h-8" />,
    title: 'Producción a Escala',
    desc: '10,000+ unidades/mes con control de calidad ISO 9001 en cada etapa del proceso.',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Personalización Total',
    desc: 'Potencia, dimensiones, acabados, branding y empaques adaptados a tu marca.',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    icon: <FlaskConical className="w-8 h-8" />,
    title: 'Tecnología Propia',
    desc: '50+ ingenieros I&D desarrollando innovaciones propietarias cada temporada.',
    bg: 'bg-green-50',
    iconColor: 'text-green-600',
  },
  {
    icon: <Check className="w-8 h-8" />,
    title: 'Certificaciones',
    desc: 'CE Mark, ISO 9001, ISO 14001 y certificaciones locales bajo demanda.',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    icon: <Ship className="w-8 h-8" />,
    title: 'Logística Integral',
    desc: 'Envío marítimo, aéreo y terrestre con seguimiento y gestión aduanera.',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Soporte Post-Venta',
    desc: '2 años de garantía global con red de servicio técnico en Latinoamérica.',
    bg: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
  },
];

const steps = [
  {
    num: 1,
    title: 'Consulta',
    desc: 'Analizamos tus necesidades, mercado objetivo y requerimientos técnicos.',
  },
  {
    num: 2,
    title: 'Propuesta',
    desc: 'Diseñamos la solución y entregamos cotización detallada en 48h.',
  },
  {
    num: 3,
    title: 'Producción',
    desc: 'Fabricación con control de calidad en cada etapa del proceso.',
  },
  {
    num: 4,
    title: 'Entrega',
    desc: 'Logística internacional, documentación y soporte de lanzamiento.',
  },
];

export default function OEM() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    pais: '',
    email: '',
    telefono: '',
    tipoProducto: '',
    volumen: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Solicitud OEM enviada! Nuestro equipo te contactará pronto.');
  };

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-r from-nae-dark-blue to-nae-blue py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('oem.title')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Fabricamos tus bombas de calor con tu marca
          </p>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nae-dark">
            ¿Por qué elegir NAE como tu fabricante?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className={`${b.bg} rounded-xl p-6 hover:shadow-md transition-shadow`}
              >
                <div className={`${b.iconColor} mb-3`}>{b.icon}</div>
                <h3 className="font-bold text-nae-dark mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-nae-grey py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nae-dark">
            {t('oem.process')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex items-start">
                <div className="bg-white rounded-xl shadow p-6 text-center w-full relative z-10">
                  <div className="w-10 h-10 rounded-full bg-nae-orange text-white font-bold flex items-center justify-center mx-auto mb-3">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-nae-dark mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {/* Arrow between steps (desktop only) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-6 h-6 bg-white rounded-full shadow text-nae-orange">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OEM FORM ── */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT — Form */}
            <div>
              <h2 className="text-2xl font-bold text-nae-dark mb-6">
                Solicita tu cotización OEM
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    País
                  </label>
                  <select
                    name="pais"
                    value={form.pais}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue bg-white"
                  >
                    <option value="">Selecciona tu país</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Producto
                    </label>
                    <select
                      name="tipoProducto"
                      value={form.tipoProducto}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue bg-white"
                    >
                      <option value="">Selecciona</option>
                      <option value="pool">Bomba de Calor para Piscina</option>
                      <option value="dcc">Chiller / Fan Coil</option>
                      <option value="acs">Agua Caliente Sanitaria (ACS)</option>
                      <option value="other">Otro / Personalizado</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Volumen Mensual Estimado
                    </label>
                    <select
                      name="volumen"
                      value={form.volumen}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue bg-white"
                    >
                      <option value="">Selecciona</option>
                      <option value="10-50">10 - 50 unidades</option>
                      <option value="50-200">50 - 200 unidades</option>
                      <option value="200-500">200 - 500 unidades</option>
                      <option value="500+">500+ unidades</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje / Requerimientos Específicos
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue resize-none"
                    placeholder="Describe tus necesidades específicas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-nae-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Solicitar Cotización
                </button>
              </form>
            </div>

            {/* RIGHT — Info Card */}
            <div className="bg-gradient-to-br from-nae-dark-blue to-nae-blue rounded-2xl p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                Beneficios de fabricar con NAE
              </h3>
              <ul className="space-y-4">
                {[
                  'MOQ flexible desde 10 unidades',
                  'Tiempo de entrega: 15-30 días',
                  'Garantía de 2 años en todos los productos',
                  'Soporte técnico dedicado en español',
                  'Diseño de empaque y manual con tu marca',
                  'Capacidad de escala: 10,000+ unidades/mes',
                  'Laboratorio de I&D propio',
                  'Cumplimiento normativo CE, ISO y locales',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-nae-orange shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-nae-grey py-12">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-nae-dark mb-4">
            ¿Listo para lanzar tu propia marca?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Nuestro equipo de ventas te guiará en cada paso del proceso.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-nae-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Contactar con Ventas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
