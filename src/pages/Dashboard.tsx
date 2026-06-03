import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, FileText, Headphones, LogOut, Home, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Dashboard() {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('nae_user');
  const user = userStr ? JSON.parse(userStr) : null;
  useEffect(() => { if (!user) navigate('/login'); }, [user, navigate]);
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden w-64 flex-col border-r bg-white md:flex">
        <div className="border-b p-4"><span className="text-xl font-bold text-[#1B4DB5]">NAE</span><p className="text-xs text-gray-500">Panel de Usuario</p></div>
        <nav className="flex-1 p-3 space-y-1">
          <div className="rounded-lg bg-[#1B4DB5]/10 px-3 py-2 text-sm font-medium text-[#1B4DB5] flex items-center gap-2"><Home className="h-4 w-4" /> Inicio</div>
          <div className="rounded-lg px-3 py-2 text-sm text-gray-600 flex items-center gap-2"><FileText className="h-4 w-4" /> Mis Cotizaciones</div>
          <div className="rounded-lg px-3 py-2 text-sm text-gray-600 flex items-center gap-2"><Headphones className="h-4 w-4" /> Soporte</div>
        </nav>
        <div className="border-t p-3"><Button variant="ghost" className="w-full justify-start text-red-600" onClick={() => { localStorage.removeItem('nae_user'); navigate('/'); }}><LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión</Button></div>
      </aside>
      <main className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between md:hidden"><span className="text-xl font-bold text-[#1B4DB5]">NAE</span><Button variant="ghost" size="sm" onClick={() => { localStorage.removeItem('nae_user'); navigate('/'); }}><LogOut className="h-4 w-4" /></Button></div>
        <h1 className="mb-6 text-2xl font-bold">Bienvenido, {user.name || user.email}</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card><CardContent className="pt-6"><User className="mb-2 h-8 w-8 text-[#1B4DB5]" /><h3 className="font-semibold">Mi Perfil</h3><p className="text-sm text-gray-500">{user.email}</p></CardContent></Card>
          <Card className="cursor-pointer hover:shadow-md" onClick={() => navigate('/products')}><CardContent className="pt-6"><FileText className="mb-2 h-8 w-8 text-[#E87722]" /><h3 className="font-semibold">Ver Productos</h3><p className="text-sm text-gray-500">Explora nuestro catálogo</p><ChevronRight className="mt-2 h-4 w-4 text-gray-400" /></CardContent></Card>
          <Card className="cursor-pointer hover:shadow-md" onClick={() => navigate('/contact')}><CardContent className="pt-6"><Headphones className="mb-2 h-8 w-8 text-green-600" /><h3 className="font-semibold">Soporte</h3><p className="text-sm text-gray-500">Contactar a ventas</p><ChevronRight className="mt-2 h-4 w-4 text-gray-400" /></CardContent></Card>
        </div>
        <div className="mt-8"><h2 className="mb-4 text-lg font-semibold">Accesos Rápidos</h2><div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate('/savings')}>Calculadora de Ahorro</Button>
          <Button variant="outline" size="sm" onClick={() => navigate('/pricing')}>Precios</Button>
          <Button variant="outline" size="sm" onClick={() => navigate('/oem')}>Servicios OEM</Button>
        </div></div>
      </main>
    </div>
  );
}
