import { countries } from '../data';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 font-heading">Contáctanos</h1>
          <p className="text-blue-100">Estamos aquí para ayudarte con tu próximo proyecto</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <div className="space-y-6">
            {[
              { icon: <Mail size={22} />, title: 'Email', info: 'ventas@nae-energy.com' },
              { icon: <Phone size={22} />, title: 'Teléfono', info: '+86-755-XXXX-XXXX' },
              { icon: <MapPin size={22} />, title: 'Dirección', info: 'NAE Energy Co., Ltd., Nanshan District, Shenzhen, China' },
            ].map(card => (
              <div key={card.title} className="bg-white rounded-xl shadow p-6 flex items-start gap-4 border border-gray-100">
                <div className="text-nae-blue">{card.icon}</div>
                <div>
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-gray-600">{card.info}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Envíanos un mensaje</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                <input type="text" className="input-field" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                <input type="text" className="input-field" placeholder="Nombre de tu empresa" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">País</label>
                <select className="input-field">
                  <option value="">Selecciona tu país</option>
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input type="email" className="input-field" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input type="tel" className="input-field" placeholder="+56 9 1234 5678" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea rows={4} className="input-field" placeholder="Cuéntanos sobre tu proyecto..." />
              </div>
              <button type="submit" className="w-full btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-nae-grey">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-nae-dark-blue to-blue-400 rounded-2xl h-64 flex items-center justify-center shadow-lg">
            <div className="text-center text-white">
              <MapPin size={40} className="mx-auto mb-2" />
              <p className="font-semibold text-lg">Sede Principal</p>
              <p className="text-blue-100">Shenzhen, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
