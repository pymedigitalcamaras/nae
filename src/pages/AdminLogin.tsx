import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    if (username === 'alejandro' && password === 'fundo@123Fundo120') {
      localStorage.setItem('nae_admin_auth', 'authenticated');
      navigate('/admin');
    } else { setError('Usuario o contraseña incorrectos'); }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center"><Shield className="mx-auto mb-2 h-12 w-12 text-white" /><h1 className="text-2xl font-bold text-white">NAE Admin</h1><p className="text-blue-200">Panel de Administración</p></div>
        <Card>
          <CardHeader className="text-center pb-2"><h2 className="text-lg font-semibold">Iniciar Sesión</h2></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><Label>Usuario</Label><Input value={username} onChange={e=>setUsername(e.target.value)} placeholder="alejandro" /></div>
              <div><Label>Contraseña</Label><Input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" /></div>
              {error && <p className="text-xs text-red-500">{error}</p>}
              <Button type="submit" className="w-full bg-[#E87722] hover:bg-[#D66A1A]">Ingresar al Panel</Button>
            </form>
            <div className="mt-4 text-center"><Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Volver al sitio</Link></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
