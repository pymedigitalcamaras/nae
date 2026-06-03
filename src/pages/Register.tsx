import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({name:'',email:'',phone:'',company:'',country:'',password:'',confirm:''});
  const [errors, setErrors] = useState<Record<string,string>>({});

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name = 'Requerido';
    if (!form.email.trim()) e.email = 'Requerido'; else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email inválido';
    if (!form.password) e.password = 'Requerido'; else if (form.password.length < 6) e.password = 'Mínimo 6 caracteres';
    if (form.password !== form.confirm) e.confirm = 'Las contraseñas no coinciden';
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); if (!validate()) return;
    const users = JSON.parse(localStorage.getItem('nae_users') || '[]');
    if (users.find((u: any) => u.email === form.email)) { setErrors({email:'Este email ya está registrado'}); return; }
    const {confirm,...userData} = form;
    users.push({...userData, id: Date.now()});
    localStorage.setItem('nae_users', JSON.stringify(users));
    localStorage.setItem('nae_user', JSON.stringify({email: form.email, name: form.name}));
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center"><Link to="/" className="text-3xl font-extrabold text-[#1B4DB5]">NAE</Link></div>
        <Card><CardHeader className="text-center pb-2"><h1 className="text-xl font-bold">Crear Cuenta</h1></CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div><Label>Nombre *</Label><Input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Tu nombre" />{errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}</div>
              <div><Label>Email *</Label><Input type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="tu@email.com" />{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}</div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Teléfono</Label><Input value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} placeholder="+56..." /></div>
                <div><Label>País</Label><Input value={form.country} onChange={e=>setForm(f=>({...f,country:e.target.value}))} placeholder="Chile" /></div>
              </div>
              <div><Label>Empresa</Label><Input value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))} placeholder="Tu empresa" /></div>
              <div><Label>Contraseña *</Label><Input type="password" value={form.password} onChange={e=>setForm(f=>({...f,password:e.target.value}))} placeholder="Mínimo 6 caracteres" />{errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}</div>
              <div><Label>Confirmar contraseña *</Label><Input type="password" value={form.confirm} onChange={e=>setForm(f=>({...f,confirm:e.target.value}))} placeholder="Repite la contraseña" />{errors.confirm && <p className="mt-1 text-xs text-red-500">{errors.confirm}</p>}</div>
              <Button type="submit" className="w-full bg-[#1B4DB5] hover:bg-[#0D2B6B]"><UserPlus className="mr-2 h-4 w-4" /> Registrarse</Button>
            </form>
            <div className="mt-4 text-center text-sm"><Link to="/login" className="text-[#1B4DB5] hover:underline">Ya tengo cuenta</Link> <span className="mx-2 text-gray-300">|</span> <Link to="/" className="text-gray-500 hover:text-gray-700">Volver</Link></div>
          </CardContent></Card>
      </div>
    </div>
  );
}
