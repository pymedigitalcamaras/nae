import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ClipboardList, Package, Users, Zap, LayoutGrid, Calculator, Tag, MessageCircle, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';

const stats = [
  { icon: <ClipboardList size={20} />, label: 'Cotizaciones', value: '12', color: 'bg-blue-100 text-blue-600' },
  { icon: <Package size={20} />, label: 'Pedidos', value: '3', color: 'bg-orange-100 text-orange-600' },
  { icon: <Users size={20} />, label: 'Clientes', value: '8', color: 'bg-green-100 text-green-600' },
  { icon: <Zap size={20} />, label: 'Ahorro generado', value: '45,000 kWh', color: 'bg-purple-100 text-purple-600' },
];

const quickLinks = [
  { icon: <LayoutGrid size={20} />, label: 'Ver Catálogo', to: '/products' },
  { icon: <Calculator size={20} />, label: 'Calcular Ahorro', to: '/savings-calculator' },
  { icon: <Tag size={20} />, label: 'Ver Tarifas', to: '/pricing' },
  { icon: <MessageCircle size={20} />, label: 'Soporte', to: '/contact' },
];

const activity = [
  { text: 'Cotización solicitada - R290 Monobloc 12kW', date: 'Hace 2 días' },
  { text: 'Pedido confirmado - 5 unidades', date: 'Hace 5 días' },
  { text: 'Cuenta aprobada', date: 'Hace 15 días' },
];

export default function Dashboard() {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Try to get user from localStorage (fallback)
    const stored = localStorage.getItem('nae_user');
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      // Default demo user
      setUser({ name: 'Carlos Rodríguez', email: 'carlos@climasoluciones.mx', role: 'installer', company: 'ClimaSoluciones MX', phone: '+52-55-XXXX-XXXX', country: 'México' });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('nae_user');
    window.location.href = '/';
  };

  const initials = user?.name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-nae-grey">
      <section className="bg-gradient-to-r from-nae-dark-blue to-nae-blue py-8 px-4">
        <div className="max-w-content mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-white font-heading">{t('dashboard.welcome')}, {user?.name?.split(' ')[0] || 'Usuario'}</h1>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${user?.role === 'admin' ? 'bg-purple-500' : user?.role === 'installer' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                  {user?.role === 'admin' ? 'Admin' : user?.role === 'installer' ? 'Instalador Certificado' : 'Pendiente'}
                </span>
              </div>
              <p className="text-blue-100 text-sm">Panel de control de instalador NAE</p>
            </div>
            <button onClick={handleLogout} className="text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-colors flex items-center gap-2">
              <LogOut size={18} /> Salir
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(s => (
            <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-gray-100">
              <div className={`w-10 h-10 rounded-lg ${s.color} flex items-center justify-center mx-auto mb-2`}>{s.icon}</div>
              <p className="text-2xl font-bold text-nae-blue">{s.value}</p>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-lg mb-4">{t('dashboard.myProfile')}</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-nae-orange text-white flex items-center justify-center text-xl font-bold">{initials}</div>
              <div>
                <p className="font-semibold">{user?.name || 'Usuario'}</p>
                <p className="text-gray-500 text-sm">{user?.company || ''}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">📧 {user?.email || ''}</p>
              <p className="text-gray-600">📱 {user?.phone || ''}</p>
              <p className="text-gray-600">📍 {user?.country || ''}</p>
            </div>
            <button className="mt-4 px-4 py-2 border border-nae-blue text-nae-blue rounded-lg text-sm hover:bg-nae-blue hover:text-white transition-colors">Editar Perfil</button>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-bold text-lg mb-4">{t('dashboard.quickLinks')}</h2>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map(link => (
                <Link key={link.to} to={link.to} className="bg-nae-grey hover:bg-nae-blue hover:text-white rounded-lg p-4 text-center transition-all group">
                  <div className="text-gray-400 group-hover:text-white mb-1 flex justify-center">{link.icon}</div>
                  <span className="text-sm font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="font-bold text-lg mb-4">{t('dashboard.activity')}</h2>
          <div className="space-y-3">
            {activity.map((item, i) => (
              <div key={i} className="flex items-center gap-3 pb-3 border-b last:border-0">
                <div className="w-2 h-2 rounded-full bg-nae-blue" />
                <div className="flex-1"><p className="text-sm">{item.text}</p></div>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
