import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    if (email && password.length >= 4) {
      localStorage.setItem('nae_user', JSON.stringify({ email, name: email.split('@')[0] }));
      navigate('/dashboard');
    } else { setError('Email y contraseña requeridos (mínimo 4 caracteres)'); }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center"><Link to="/" className="text-3xl font-extrabold text-[#1B4DB5]">NAE</Link></div>
        <Card><CardHeader className="text-center pb-2"><h1 className="text-xl font-bold">Iniciar Sesión</h1></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><Label>Email</Label><Input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tu@email.com" /></div>
              <div><Label>Contraseña</Label><Input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••" /></div>
              {error && <p className="text-xs text-red-500">{error}</p>}
              <Button type="submit" className="w-full bg-[#1B4DB5] hover:bg-[#0D2B6B]"><LogIn className="mr-2 h-4 w-4" /> Ingresar</Button>
            </form>
            <div className="mt-4 text-center text-sm"><Link to="/register" className="text-[#1B4DB5] hover:underline">Crear cuenta</Link> <span className="mx-2 text-gray-300">|</span> <Link to="/" className="text-gray-500 hover:text-gray-700">Volver</Link></div>
          </CardContent></Card>
      </div>
    </div>
  );
}
