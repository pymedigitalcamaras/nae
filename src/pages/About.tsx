import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Heart, Award, FlaskConical, Check, Settings } from 'lucide-react';
import { timeline, team } from '../data';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-r from-nae-dark-blue to-nae-blue py-20 md:py-28">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
            Más de una década liderando la transición energética en Latinoamérica
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <p className="text-gray-700 leading-relaxed">
            NAE Heat Pumps nació de una necesidad real: después de más de 10 años trabajando como instaladores de sistemas de climatización,
            entendimos los desafíos que enfrentan los profesionales día a día. Vimos cómo muchas marcas ofrecían equipos con especificaciones técnicas
            que no se correspondían con la realidad, dejando a los instaladores sin respaldo cuando más lo necesitaban.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Decidimos cambiar el paradigma. Creamos NAE con una premisa clara: fabricar bombas de calor que realmente cumplan lo que prometen,
            con soporte técnico integral y una red de distribución que acompañe al instalador en cada proyecto.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Hoy operamos desde Shenzhen, China, con alcance en más de 15 países de Latinoamérica, liderando la transición energética
            con tecnología eficiente, sostenible y accesible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nuestro equipo combina décadas de experiencia en instalación con ingenieros de I+D de clase mundial,
            asegurando que cada producto que sale de nuestra fábrica esté diseñado para durar.
          </p>
          <p className="italic text-nae-orange font-semibold text-xl mt-6">
            "No vendemos máquinas. Vendemos certeza."
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-nae-grey py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nae-dark">
            Nuestra Historia
          </h2>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 md:left-1/2 md:-translate-x-px" />
            {timeline.map((item, idx) => (
              <div
                key={item.year}
                className={`relative flex items-start mb-10 last:mb-0 md:items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Orange circle with year */}
                <div className="w-12 h-12 rounded-full bg-nae-orange text-white font-bold flex items-center justify-center z-10 shrink-0 text-sm">
                  {item.year}
                </div>
                {/* Content card */}
                <div
                  className={`ml-6 md:ml-0 md:w-5/12 ${
                    idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow p-5">
                    <h3 className="font-bold text-nae-dark mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-nae-orange">
              <div className="w-14 h-14 rounded-full bg-nae-orange/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-nae-orange" />
              </div>
              <h3 className="text-xl font-bold text-nae-dark mb-3">{t('about.mission')}</h3>
              <p className="text-gray-600">
                Democratizar el acceso a tecnología de climatización eficiente en Latinoamérica
              </p>
            </div>
            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-nae-blue">
              <div className="w-14 h-14 rounded-full bg-nae-blue/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-nae-blue" />
              </div>
              <h3 className="text-xl font-bold text-nae-dark mb-3">{t('about.vision')}</h3>
              <p className="text-gray-600">
                Ser la marca de bombas de calor más confiable de Latinoamérica para 2030
              </p>
            </div>
            {/* Values */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-green-500">
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-nae-dark mb-3">{t('about.values')}</h3>
              <p className="text-gray-600">
                Innovación, Sostenibilidad, Compromiso, Excelencia y Trabajo en Equipo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section className="bg-nae-grey py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-nae-dark">
            Certificaciones de Calidad
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Respaldados por los estándares más exigentes del mercado
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                name: 'ISO 9001',
                desc: 'Sistema de Gestión de Calidad certificado internacionalmente.',
              },
              {
                icon: <FlaskConical className="w-8 h-8" />,
                name: 'ISO 14001',
                desc: 'Compromiso con la gestión ambiental y la sostenibilidad.',
              },
              {
                icon: <Check className="w-8 h-8" />,
                name: 'CE Mark',
                desc: 'Cumplimiento de normativas europeas de seguridad y calidad.',
              },
              {
                icon: <Settings className="w-8 h-8" />,
                name: 'STPRS',
                desc: 'Certificación sanitaria para equipos de tratamiento de agua.',
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-nae-orange mb-3 flex justify-center">{cert.icon}</div>
                <h4 className="font-bold text-nae-dark mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-nae-dark">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.initials} className="text-center">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4"
                  style={{ backgroundColor: "bg-nae-blue" }}
                >
                  {member.initials}
                </div>
                <h4 className="font-bold text-nae-dark">{member.name}</h4>
                <p className="text-nae-orange text-sm font-medium">{member.role}</p>
                <p className="text-gray-500 text-sm mt-1">{""}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white py-16">
        <div className="max-w-content mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-nae-dark mb-4">
            ¿Quieres ser parte de nuestra red?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Únete a los distribuidores e instaladores que ya confían en NAE para ofrecer
            la mejor tecnología de climatización a sus clientes.
          </p>
          <Link
            to="/register"
            className="inline-block bg-nae-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Registrarme Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
