import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';
import { countries } from '../data';

export default function Register() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', country: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.phone || !form.country || !form.password) { setError('Completa todos los campos'); return; }
    if (form.password !== form.confirm) { setError('Las contraseñas no coinciden'); return; }
    if (form.password.length < 6) { setError('Mínimo 6 caracteres'); return; }
    setError(''); setSubmitted(true);
  };

  const s = (p: string) => {
    if (!p) return 0;
    let score = 0;
    if (p.length >= 6) score++;
    if (p.length >= 10) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    return Math.min(score, 4);
  };
  const score = s(form.password);
  const colors = ['bg-gray-200', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const labels = ['', 'Débil', 'Regular', 'Buena', 'Fuerte'];

  if (submitted) return (
    <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">¡Registro exitoso!</h2>
        <p className="text-gray-600 mb-6">Tu cuenta está pendiente de aprobación. Recibirás un correo cuando sea aprobada.</p>
        <Link to="/login" className="btn-primary">{t('auth.login')}</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <img src="/logo-nae.png" alt="NAE" className="h-12 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-center mb-2 font-heading">{t('auth.register')}</h1>
        <p className="text-gray-500 text-center mb-8">Únete a la red de instaladores profesionales NAE</p>
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder={t('auth.name')} className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          <input type="text" placeholder={t('auth.company')} className="input-field" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
          <input type="email" placeholder={t('auth.email')} className="input-field" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input type="tel" placeholder={t('auth.phone')} className="input-field" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          <select className="input-field" value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
            <option value="">{t('auth.country')}</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="relative">
            <input type={show ? 'text' : 'password'} placeholder={t('auth.password')} className="input-field pr-10" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
          {form.password && (
            <div>
              <div className="flex gap-1 h-1.5">{[1,2,3,4].map(i => <div key={i} className={`flex-1 rounded-full ${i <= score ? colors[score] : 'bg-gray-200'}`} />)}</div>
              <p className="text-xs text-gray-500 mt-1">{labels[score]}</p>
            </div>
          )}
          <input type="password" placeholder={t('auth.confirmPassword')} className="input-field" value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} />
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="rounded mt-0.5" /> Acepto los términos y condiciones
          </label>
          <button type="submit" className="w-full btn-primary">{t('auth.createAccount')}</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">{t('auth.hasAccount')} <Link to="/login" className="text-nae-blue font-medium hover:underline">{t('auth.login')}</Link></p>
      </div>
    </div>
  );
}
