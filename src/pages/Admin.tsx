import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Plus, X, Save, LogOut, RefreshCw, Database } from 'lucide-react';

const SUPABASE_URL = 'https://irgulqhdmzxilwhzfhha.supabase.co';
const SUPABASE_KEY = 'sb_publishable_MfCjX53CpG8lLFS5zJslpQ_5qTzOwWL';

interface Product {
  id: string;
  slug: string;
  name: string;
  name_en: string;
  category: string;
  category_en: string;
  description: string;
  cop: string;
  power: string;
  price: string;
  moq: string;
  badge_bg: string;
  emoji: string;
  image: string;
  features: string[];
}

const emptyProduct: Product = {
  id: '', slug: '', name: '', name_en: '', category: 'Aire-Agua', category_en: 'Air-Water',
  description: '', cop: '', power: '', price: '', moq: '', badge_bg: 'bg-blue-600', emoji: '❄️', image: '', features: []
};

const categories = ['Aire-Agua', 'Split', 'Comercial', 'Geotermia', 'Piscina', 'Estanques', 'Kits', 'Accesorios'];

export default function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Check admin auth
  useEffect(() => {
    if (!localStorage.getItem('nae_admin')) {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Load products from Supabase
  const loadProducts = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=id`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      if (resp.ok) {
        const data = await resp.json();
        setProducts(data);
        setMessage(`✅ ${data.length} productos cargados de Supabase`);
      } else {
        setMessage('❌ Error al cargar productos');
      }
    } catch (e) {
      setMessage('❌ Error de conexión');
    }
    setLoading(false);
  };

  useEffect(() => { loadProducts(); }, []);

  const handleSave = async () => {
    if (!editing) return;
    setLoading(true);
    try {
      const isNew = !editing.id;
      const method = isNew ? 'POST' : 'PATCH';
      const url = isNew 
        ? `${SUPABASE_URL}/rest/v1/products` 
        : `${SUPABASE_URL}/rest/v1/products?id=eq.${editing.id}`;
      
      const body = isNew 
        ? { ...editing, id: Date.now().toString(), slug: editing.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') }
        : editing;

      const resp = await fetch(url, {
        method,
        headers: {
          'apikey': SUPABASE_KEY,
          'Authorization': `Bearer ${SUPABASE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(body)
      });

      if (resp.ok) {
        setMessage(isNew ? '✅ Producto creado' : '✅ Producto actualizado');
        setEditing(null);
        loadProducts();
      } else {
        await resp.text();
        // Fallback: save to localStorage
        const localProducts = JSON.parse(localStorage.getItem('nae_products') || '[]');
        if (isNew) {
          localProducts.push(body);
        } else {
          const idx = localProducts.findIndex((p: Product) => p.id === editing.id);
          if (idx >= 0) localProducts[idx] = body;
        }
        localStorage.setItem('nae_products', JSON.stringify(localProducts));
        setProducts(localProducts);
        setMessage('✅ Guardado localmente (Supabase en modo lectura)');
        setEditing(null);
      }
    } catch (e) {
      setMessage('❌ Error al guardar');
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Eliminar este producto?')) return;
    setLoading(true);
    try {
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${id}`, {
        method: 'DELETE',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      if (resp.ok) {
        setMessage('✅ Producto eliminado');
        loadProducts();
      } else {
        // Fallback local
        const localProducts = JSON.parse(localStorage.getItem('nae_products') || '[]').filter((p: Product) => p.id !== id);
        localStorage.setItem('nae_products', JSON.stringify(localProducts));
        setProducts(localProducts);
        setMessage('✅ Eliminado localmente');
      }
    } catch (e) {
      setMessage('❌ Error al eliminar');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('nae_admin');
    navigate('/admin-login');
  };

  return (
    <div className="min-h-screen bg-nae-grey">
      {/* Header */}
      <header className="bg-nae-dark-blue text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-nae.png" alt="NAE" className="h-8" />
            <div>
              <h1 className="font-bold text-lg">Panel de Administración</h1>
              <p className="text-xs text-blue-200">Conectado a Supabase</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={loadProducts} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Recargar">
              <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors text-sm">
              <LogOut size={16} /> Salir
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Message */}
        {message && (
          <div className={`p-3 rounded-lg mb-4 text-sm ${message.startsWith('✅') ? 'bg-green-50 text-green-700' : message.startsWith('❌') ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'}`}>
            {message}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Database size={18} className="text-nae-blue" />
            <span className="font-medium">{products.length} productos</span>
          </div>
          <button onClick={() => setEditing({ ...emptyProduct })} className="btn-primary text-sm py-2 px-4">
            <Plus size={16} className="mr-1" /> Nuevo Producto
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-nae-blue text-white">
                  <th className="text-left p-3">Foto</th>
                  <th className="text-left p-3">Nombre</th>
                  <th className="text-left p-3">Categoría</th>
                  <th className="text-left p-3">Potencia</th>
                  <th className="text-left p-3">COP</th>
                  <th className="text-left p-3">Precio</th>
                  <th className="text-left p-3">MOQ</th>
                  <th className="text-right p-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.id} className="border-b hover:bg-blue-50">
                    <td className="p-3">
                      {p.image ? (
                        <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                      ) : (
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: p.badge_bg }}>{p.emoji}</div>
                      )}
                    </td>
                    <td className="p-3 font-medium">{p.name}</td>
                    <td className="p-3"><span className={`${p.badge_bg} text-white px-2 py-0.5 rounded-full text-xs`}>{p.category}</span></td>
                    <td className="p-3">{p.power}</td>
                    <td className="p-3">{p.cop}</td>
                    <td className="p-3 font-bold text-nae-orange">{p.price}</td>
                    <td className="p-3 text-gray-500">{p.moq}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => setEditing(p)} className="p-1 text-blue-600 hover:bg-blue-100 rounded mr-1"><Pencil size={16} /></button>
                      <button onClick={() => handleDelete(p.id)} className="p-1 text-red-600 hover:bg-red-100 rounded"><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Form Modal */}
        {editing && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">{editing.id ? 'Editar Producto' : 'Nuevo Producto'}</h2>
                <button onClick={() => setEditing(null)} className="p-1 hover:bg-gray-100 rounded"><X size={20} /></button>
              </div>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Nombre ES</label>
                    <input className="input-field text-sm py-2" value={editing.name} onChange={e => setEditing({...editing, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Nombre EN</label>
                    <input className="input-field text-sm py-2" value={editing.name_en || ''} onChange={e => setEditing({...editing, name_en: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Slug (URL)</label>
                  <input className="input-field text-sm py-2" value={editing.slug} onChange={e => setEditing({...editing, slug: e.target.value})} placeholder="nombre-del-producto" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Categoría</label>
                    <select className="input-field text-sm py-2" value={editing.category} onChange={e => setEditing({...editing, category: e.target.value})}>
                      {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Emoji</label>
                    <input className="input-field text-sm py-2 w-16 text-center" value={editing.emoji} onChange={e => setEditing({...editing, emoji: e.target.value})} maxLength={2} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Descripción</label>
                  <textarea className="input-field text-sm py-2" rows={2} value={editing.description} onChange={e => setEditing({...editing, description: e.target.value})} />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">COP</label>
                    <input className="input-field text-sm py-2" value={editing.cop} onChange={e => setEditing({...editing, cop: e.target.value})} placeholder="4.5" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Potencia</label>
                    <input className="input-field text-sm py-2" value={editing.power} onChange={e => setEditing({...editing, power: e.target.value})} placeholder="12 kW" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Precio FOB</label>
                    <input className="input-field text-sm py-2" value={editing.price} onChange={e => setEditing({...editing, price: e.target.value})} placeholder="$1,850" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">MOQ</label>
                    <input className="input-field text-sm py-2" value={editing.moq} onChange={e => setEditing({...editing, moq: e.target.value})} placeholder="5 u." />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1">Color badge</label>
                    <select className="input-field text-sm py-2" value={editing.badge_bg} onChange={e => setEditing({...editing, badge_bg: e.target.value})}>
                      <option value="bg-blue-600">Azul</option>
                      <option value="bg-blue-700">Azul oscuro</option>
                      <option value="bg-blue-500">Azul claro</option>
                      <option value="bg-teal-600">Teal</option>
                      <option value="bg-purple-600">Púrpura</option>
                      <option value="bg-emerald-600">Verde</option>
                      <option value="bg-cyan-600">Cyan</option>
                      <option value="bg-orange-500">Naranja</option>
                      <option value="bg-orange-600">Naranja oscuro</option>
                      <option value="bg-green-600">Verde kit</option>
                      <option value="bg-green-700">Verde oscuro</option>
                      <option value="bg-gray-600">Gris</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">URL de imagen</label>
                  <input className="input-field text-sm py-2" value={editing.image || ''} onChange={e => setEditing({...editing, image: e.target.value})} placeholder="/products/nombre.jpg o URL externa" />
                  {editing.image && (
                    <div className="mt-2">
                      <img src={editing.image} alt="Preview" className="h-20 rounded-lg object-cover border" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Características (separadas por coma)</label>
                  <textarea className="input-field text-sm py-2" rows={2} value={Array.isArray(editing.features) ? editing.features.join(', ') : editing.features} onChange={e => setEditing({...editing, features: e.target.value.split(',').map(f => f.trim())})} />
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={handleSave} disabled={loading} className="flex-1 btn-primary text-sm py-2 disabled:opacity-50">
                    <Save size={16} className="mr-1" /> {loading ? 'Guardando...' : 'Guardar'}
                  </button>
                  <button onClick={() => setEditing(null)} className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
