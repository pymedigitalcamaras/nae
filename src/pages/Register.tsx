import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Check } from 'lucide-react';
import { countries } from '../data';

export default function Register() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', country: '', password: '', confirm: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.company || !form.email || !form.phone || !form.country || !form.password) { setError('Completa todos los campos'); return; }
    if (form.password !== form.confirm) { setError('Las contraseñas no coinciden'); return; }
    if (form.password.length < 6) { setError('Mínimo 6 caracteres'); return; }
    setError('');
    setSubmitted(true);
  };

  const strength = (p: string) => {
    if (p.length === 0) return 0;
    let s = 0;
    if (p.length >= 6) s++;
    if (p.length >= 10) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    return Math.min(s, 4);
  };

  const s = strength(form.password);
  const sColors = ['bg-gray-200', 'bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  const sLabels = ['', 'Débil', 'Regular', 'Buena', 'Fuerte'];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">¡Registro exitoso!</h2>
          <p className="text-gray-600 mb-6">Tu cuenta está pendiente de aprobación. Recibirás un correo cuando sea aprobada.</p>
          <Link to="/login" className="btn-primary">Ir al Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center mb-2 font-heading">Registro de Instalador</h1>
        <p className="text-gray-500 text-center mb-8">Únete a la red de instaladores profesionales NAE</p>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Nombre completo" className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          <input type="text" placeholder="Nombre de empresa" className="input-field" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
          <input type="email" placeholder="Correo electrónico" className="input-field" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <input type="tel" placeholder="Teléfono" className="input-field" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
          <select className="input-field" value={form.country} onChange={e => setForm({...form, country: e.target.value})}>
            <option value="">Selecciona tu país</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <div className="relative">
            <input type={show ? 'text' : 'password'} placeholder="Contraseña" className="input-field pr-10" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>
          </div>
          {form.password && (
            <div>
              <div className="flex gap-1 h-1.5">
                {[1,2,3,4].map(i => <div key={i} className={`flex-1 rounded-full ${i <= s ? sColors[s] : 'bg-gray-200'}`} />)}
              </div>
              <p className="text-xs text-gray-500 mt-1">{sLabels[s]}</p>
            </div>
          )}
          <input type="password" placeholder="Confirmar contraseña" className="input-field" value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} />
          <label className="flex items-start gap-2 text-sm text-gray-600">
            <input type="checkbox" className="rounded mt-0.5" /> Acepto los términos y condiciones
          </label>
          <button type="submit" className="w-full btn-primary">Crear Cuenta</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">¿Ya tienes cuenta? <Link to="/login" className="text-nae-blue font-medium hover:underline">Inicia sesión</Link></p>
      </div>
    </div>
  );
}
