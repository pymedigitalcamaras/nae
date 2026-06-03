import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { countries } from '../data';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    pais: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to real API
    alert('¡Mensaje enviado! Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-gradient-to-r from-nae-dark-blue to-nae-blue py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tu próximo proyecto
          </p>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT — Info Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-nae-blue/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-nae-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-nae-dark mb-1">Email</h3>
                  <a
                    href="mailto:ventas@nae-energy.com"
                    className="text-gray-600 hover:text-nae-blue transition-colors"
                  >
                    ventas@nae-energy.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-bold text-nae-dark mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/56990117784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +56 9 9011 7784
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl shadow p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-nae-orange/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-nae-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-nae-dark mb-1">Dirección</h3>
                  <p className="text-gray-600">
                    NAE Energy Co., Ltd.<br />
                    Nanshan District, Shenzhen, China
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-nae-dark mb-6">
                Envíanos un mensaje
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-nae-blue/50 focus:border-nae-blue resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-nae-orange text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section className="bg-nae-grey py-16">
        <div className="max-w-content mx-auto px-4">
          <div className="bg-gradient-to-br from-nae-dark-blue to-nae-blue rounded-2xl h-80 flex items-center justify-center shadow-lg">
            <div className="text-center text-white">
              <MapPin className="w-12 h-12 mx-auto mb-3 opacity-80" />
              <p className="text-lg font-medium">NAE Energy Co., Ltd.</p>
              <p className="text-white/70 text-sm">Nanshan District, Shenzhen, China</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
