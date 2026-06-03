import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { createLead } from '../lib/supabase';
import { countries } from '../data';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', company: '', country: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    
    try {
      await createLead(form);
      setStatus('success');
      setForm({ name: '', company: '', country: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      console.log('Supabase failed, saving locally:', err.message);
      // Fallback: save to localStorage
      const leads = JSON.parse(localStorage.getItem('nae_leads') || '[]');
      leads.push({ ...form, id: Date.now(), created_at: new Date().toISOString(), source: 'website' });
      localStorage.setItem('nae_leads', JSON.stringify(leads));
      setStatus('success');
      setForm({ name: '', company: '', country: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 font-heading">{t('contact.title')}</h1>
          <p className="text-blue-100">Estamos aquí para ayudarte con tu próximo proyecto</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-content mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {[
              { icon: <Mail size={22} />, title: 'Email', info: 'ventas@nae-energy.com' },
              { icon: <Phone size={22} />, title: 'WhatsApp', info: '+56 9 9011 7784' },
              { icon: <MapPin size={22} />, title: 'Dirección', info: 'NAE Energy Co., Ltd., Nanshan District, Shenzhen, China' },
            ].map(card => (
              <div key={card.title} className="bg-white rounded-xl shadow p-6 flex items-start gap-4 border border-gray-100">
                <div className="text-nae-blue">{card.icon}</div>
                <div><h3 className="font-semibold">{card.title}</h3><p className="text-gray-600">{card.info}</p></div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Envíanos un mensaje</h2>
            
            {status === 'success' && (
              <div className="bg-green-50 text-green-600 p-4 rounded-lg mb-4 flex items-center gap-2">
                <CheckCircle size={20} /> ¡Mensaje enviado! Te contactaremos pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4 flex items-center gap-2">
                <AlertCircle size={20} /> {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Nombre completo" className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
              <input type="text" placeholder="Empresa" className="input-field" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
              <select className="input-field" value={form.country} onChange={e => setForm({...form, country: e.target.value})} required>
                <option value="">Selecciona tu país</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input type="email" placeholder="tu@email.com" className="input-field" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
              <input type="tel" placeholder="+56 9 1234 5678" className="input-field" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
              <textarea rows={4} placeholder="Cuéntanos sobre tu proyecto..." className="input-field" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
              <button type="submit" disabled={status === 'sending'} className="w-full btn-primary disabled:opacity-50 flex items-center justify-center gap-2">
                <Send size={18} /> {status === 'sending' ? 'Enviando...' : t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </section>

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
