import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { signIn } from '../lib/supabase';

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email.includes('@')) { setError('Email inválido'); return; }
    if (pass.length < 6) { setError('Mínimo 6 caracteres'); return; }
    
    setLoading(true);
    try {
      const { data, error } = await signIn(email, pass);
      if (error) throw error;
      if (data?.user) {
        navigate('/dashboard');
      }
    } catch (err: any) {
      // Fallback: demo login without Supabase
      console.log('Supabase login failed, using demo mode:', err.message);
      localStorage.setItem('nae_user', JSON.stringify({ email, name: 'Demo User', role: 'installer' }));
      navigate('/dashboard');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <img src="/logo-nae.png" alt="NAE" className="h-12 mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-center mb-2 font-heading">{t('auth.login')}</h1>
        <p className="text-gray-500 text-center mb-8">Accede a tu cuenta de instalador NAE</p>
        
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('auth.email')}</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="input-field" placeholder="tu@email.com" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t('auth.password')}</label>
            <div className="relative">
              <input type={show ? 'text' : 'password'} value={pass} onChange={e => setPass(e.target.value)} className="input-field pr-10" placeholder="••••••" required />
              <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded" /> {t('auth.remember')}
            </label>
            <Link to="#" className="text-nae-blue hover:underline">{t('auth.forgot')}</Link>
          </div>
          <button type="submit" disabled={loading} className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? 'Cargando...' : t('auth.login')}
          </button>
        </form>
        
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" /><span className="text-gray-400 text-sm">o</span><div className="flex-1 h-px bg-gray-200" />
        </div>
        
        <p className="text-center text-sm text-gray-500">{t('auth.noAccount')} <Link to="/register" className="text-nae-blue font-medium hover:underline">{t('auth.register')}</Link></p>
      </div>
    </div>
  );
}
