import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ServiceCard {
  icon: string;
  titleKey: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: '📐',
    titleKey: 'services.design',
    description:
      'Elaboramos planos técnicos completos para tu instalación. Desde el cálculo de carga térmica hasta la distribución de circuitos.',
  },
  {
    icon: '📊',
    titleKey: 'services.tracking',
    description:
      'Acompañamiento en cada etapa del proyecto. Reportes de avance, resolución de dudas y control de calidad.',
  },
  {
    icon: '🏗️',
    titleKey: 'services.development',
    description:
      'Desarrollo integral desde la idea hasta la puesta en marcha. Gestionamos todo el proceso por ti.',
  },
  {
    icon: '🎓',
    titleKey: 'services.training',
    description:
      'Cursos de formación para instaladores certificados. Teórico y práctico con casos reales.',
  },
  {
    icon: '🛠️',
    titleKey: 'services.postSale',
    description:
      'Asistencia técnica permanente en español. WhatsApp directo, videollamadas y documentación.',
  },
  {
    icon: '🤝',
    titleKey: 'services.work',
    description:
      'Te conectamos con clientes que necesitan instalación. Formamos equipos de instaladores locales.',
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0D2B6B] to-[#1B4DB5] py-20">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white">
            {t('services.title')}
          </h1>
          <p className="text-white/80 mt-4 text-lg">
            Todo lo que necesitas para instalar con éxito
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            NAE no es solo un proveedor de bombas de calor. Somos tu socio
            completo en cada etapa del proyecto, desde el diseño técnico hasta
            el soporte post-venta. Nuestro equipo de ingenieros e instaladores
            certificados te acompaña para garantizar que cada instalación sea un
            éxito.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.titleKey}
                className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-[#1B4DB5] hover:border-[#E87722] transition-colors"
              >
                <div className="text-4xl mb-4" role="img" aria-label={t(service.titleKey)}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-xl text-[#1A1A2E] mb-2">
                  {t(service.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
            ¿Quieres que te ayudemos con tu proyecto?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-[#E87722] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#d66a1a] transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
