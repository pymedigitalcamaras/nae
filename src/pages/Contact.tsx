import { useState } from 'react';
import { createLead } from '@/lib/supabase';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', company:'', country:'', message:'' });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [sent, setSent] = useState(false);
  const [saving, setSaving] = useState(false);

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim()) e.name = 'Requerido';
    if (!form.email.trim()) e.email = 'Requerido'; else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Email inválido';
    if (!form.phone.trim()) e.phone = 'Requerido';
    if (!form.message.trim()) e.message = 'Requerido';
    setErrors(e); return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); if (!validate()) return;
    setSaving(true);
    const ok = await createLead(form);
    setSaving(false);
    if (ok) { setSent(true); setTimeout(() => { setSent(false); setForm({name:'',email:'',phone:'',company:'',country:'',message:''}); }, 5000); }
    else { setErrors({ message: 'Error al enviar. Intenta de nuevo.' }); }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-16 text-white text-center"><h1 className="text-4xl font-bold">Contacto</h1><p className="mt-2 text-blue-100">Estamos aquí para ayudarte con tu proyecto</p></section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Información de Contacto</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[#1B4DB5]" /><div><p className="font-medium">Oficinas</p><p className="text-sm text-gray-600">Shenzhen, China</p><p className="text-sm text-gray-600">Santiago, Chile</p></div></div>
              <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#1B4DB5]" /><div><p className="font-medium">Email</p><p className="text-sm text-gray-600">info@nae-energy.com</p></div></div>
              <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#1B4DB5]" /><div><p className="font-medium">Teléfono</p><p className="text-sm text-gray-600">+56 9 9011 7784</p></div></div>
              <a href="https://wa.me/56990117784" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg bg-[#25D366] p-4 text-white hover:bg-[#128C7E] transition-colors"><MessageCircle className="h-6 w-6" /><div><p className="font-medium">WhatsApp</p><p className="text-sm">+56 9 9011 7784</p></div></a>
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold">Envíanos un mensaje</h2>
            {sent ? <div className="flex flex-col items-center justify-center rounded-lg border border-green-200 bg-green-50 p-8 text-center"><CheckCircle className="mb-3 h-12 w-12 text-green-600" /><h3 className="text-lg font-semibold text-green-800">¡Mensaje enviado!</h3><p className="text-sm text-green-600">Te contactaremos pronto.</p></div> : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div><Label>Nombre *</Label><Input value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} placeholder="Tu nombre" />{errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}</div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div><Label>Email *</Label><Input type="email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} placeholder="tu@email.com" />{errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}</div>
                  <div><Label>Teléfono *</Label><Input value={form.phone} onChange={e=>setForm(f=>({...f,phone:e.target.value}))} placeholder="+56..." />{errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}</div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div><Label>Empresa</Label><Input value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))} placeholder="Tu empresa" /></div>
                  <div><Label>País</Label><Input value={form.country} onChange={e=>setForm(f=>({...f,country:e.target.value}))} placeholder="Chile" /></div>
                </div>
                <div><Label>Mensaje *</Label><Textarea value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} rows={5} placeholder="Cuéntanos sobre tu proyecto..." />{errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}</div>
                <Button type="submit" disabled={saving} className="w-full bg-[#E87722] hover:bg-[#D66A1A]"><Send className="mr-2 h-4 w-4" />{saving ? 'Enviando...' : 'Enviar mensaje'}</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
