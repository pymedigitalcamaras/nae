import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const ADMIN_USER = 'alejandro';
const ADMIN_PASS = 'fundo@123Fundo120';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      localStorage.setItem('nae_admin', 'true');
      navigate('/admin');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nae-dark-blue px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full">
        <div className="text-center mb-6">
          <img src="/logo-nae.png" alt="NAE" className="h-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-nae-dark font-heading">Panel Admin</h1>
          <p className="text-gray-500 text-sm">NAE Energy - Gestión de productos</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input
              type="text"
              value={user}
              onChange={e => setUser(e.target.value)}
              className="input-field"
              placeholder="alejandro"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              value={pass}
              onChange={e => setPass(e.target.value)}
              className="input-field"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="w-full btn-primary">
            Entrar al Panel
          </button>
        </form>
      </div>
    </div>
  );
}
