import { Link } from 'react-router-dom';
import { Target, Eye, Heart } from 'lucide-react';
import { timeline, team } from '../data';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">Nuestra Historia</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">Más de una década liderando la transición energética en Latinoamérica</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gray-700 leading-relaxed mb-4">
            New AGE Energy (NAE) nace de una década de experiencia en el campo de la climatización. No somos solo importadores de equipos: somos instaladores que entendemos el sudor de una obra, la urgencia de un cliente que necesita calefacción antes del invierno, y la frustración de quien compra una máquina y después no sabe a quién llamar cuando falla.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Durante 10 años hemos vivido cada etapa del proceso: desde el diseño de la instalación, el paso de tuberías, la configuración del tablero eléctrico, hasta el primer arranque de la bomba de calor. Por eso sabemos que vender la máquina es solo el 30% del trabajo.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A diferencia de las empresas que te envían un PDF y desaparecen, nosotros tomamos al cliente de la mano hasta que la máquina está funcionando. Ofrecemos asesoría técnica constante, soporte en español desde Latinoamérica, y la tranquilidad de saber que detrás de cada equipo NAE hay un equipo humano.
          </p>
          <p className="italic text-nae-orange font-semibold text-xl mt-6">"No vendemos máquinas. Vendemos certeza."</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-nae-grey">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Nuestra Historia</h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300" />
            {timeline.map((item, i) => (
              <div key={i} className="relative flex items-start mb-8 last:mb-0">
                <div className="w-12 h-12 rounded-full bg-nae-orange text-white flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
                  {item.year.slice(2)}
                </div>
                <div className="ml-6 bg-white rounded-lg shadow p-5 flex-1">
                  <span className="text-nae-orange font-bold text-sm">{item.year}</span>
                  <h3 className="font-semibold text-nae-dark mt-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target size={28} />, title: 'Misión', text: 'Democratizar el acceso a tecnología de climatización eficiente en Latinoamérica, acompañando al instalador en cada paso.', border: 'border-nae-orange' },
              { icon: <Eye size={28} />, title: 'Visión', text: 'Ser la marca de bombas de calor más confiable de Latinoamérica para 2030.', border: 'border-nae-blue' },
              { icon: <Heart size={28} />, title: 'Valores', text: 'Innovación, Sostenibilidad, Compromiso, Excelencia y Trabajo en Equipo.', border: 'border-green-500' },
            ].map(card => (
              <div key={card.title} className={`bg-white rounded-xl shadow-lg p-8 text-center border-t-4 ${card.border}`}>
                <div className="text-nae-blue mb-4 flex justify-center">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-nae-grey">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">Nuestro Equipo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg ${['bg-nae-blue', 'bg-nae-orange', 'bg-emerald-600', 'bg-purple-600'][i]}`}>
                  {member.initials}
                </div>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">¿Quieres ser parte de nuestra red?</h2>
          <p className="text-gray-600 mb-6">Regístrate como instalador y accede a precios mayoristas, soporte técnico y capacitación exclusiva.</p>
          <Link to="/register" className="btn-primary">Registrarme como Instalador</Link>
        </div>
      </section>
    </div>
  );
}
