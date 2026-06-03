import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, createProduct, updateProduct, deleteProduct, getLeads, deleteLead } from '@/lib/supabase';
import type { Product } from '@/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Search, Plus, Pencil, Trash2, LogOut, Loader2, ImageIcon, AlertCircle } from 'lucide-react';

const emptyForm: Omit<Product, 'id'> = {
  slug: '', name: '', nameEn: '', category: 'Residencial', categoryEn: 'Residential',
  description: '', cop: '', power: '', price: '', moq: '',
  badgeBg: 'bg-gray-100', emoji: '🔧', image: '/products/r290-12kw.jpg', features: [],
};

export default function Admin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [leads, setLeads] = useState<Array<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [featuresText, setFeaturesText] = useState('');
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<{type:'product'|'lead';id:string}|null>(null);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    if (localStorage.getItem('nae_admin_auth') !== 'authenticated') {
      navigate('/admin-login'); return;
    }
    fetchData();
  }, [navigate]);

  async function fetchData() {
    setLoading(true); setError('');
    try {
      const [p, l] = await Promise.all([getProducts(), getLeads()]);
      setProducts(p); setLeads(l);
    } catch { setError('Error al cargar datos de Supabase'); }
    setLoading(false);
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase()) ||
    p.slug.toLowerCase().includes(search.toLowerCase())
  );

  function openCreate() {
    setForm(emptyForm); setFeaturesText(''); setEditingId(null); setShowForm(true);
  }

  function openEdit(p: Product) {
    setForm({ ...p }); setFeaturesText(p.features.join('\n')); setEditingId(p.id); setShowForm(true);
  }

  async function handleSave() {
    if (!form.name || !form.slug) return;
    setSaving(true);
    const payload = { ...form, features: featuresText.split('\n').filter(f => f.trim()) };
    let ok: boolean;
    if (editingId) {
      ok = await updateProduct(editingId, payload);
    } else {
      const created = await createProduct(payload);
      ok = !!created;
    }
    setSaving(false);
    if (ok) { setShowForm(false); fetchData(); }
    else { setError('Error al guardar en Supabase'); }
  }

  async function handleConfirmedDelete() {
    if (!confirmDelete) return;
    let ok: boolean;
    if (confirmDelete.type === 'product') ok = await deleteProduct(confirmDelete.id);
    else ok = await deleteLead(confirmDelete.id);
    setConfirmDelete(null);
    if (ok) fetchData();
  }

  function logout() {
    localStorage.removeItem('nae_admin_auth');
    window.location.href = '/#/admin-login';
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0D2B6B] text-white shadow-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <h1 className="text-lg font-bold">NAE Admin</h1>
          <Button variant="ghost" size="sm" onClick={logout} className="text-white hover:bg-white/10"><LogOut className="mr-2 h-4 w-4" /> Cerrar Sesión</Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6">
        {error && <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-600"><AlertCircle className="h-4 w-4" />{error}</div>}

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4"><TabsTrigger value="products">Productos ({products.length})</TabsTrigger><TabsTrigger value="leads">Leads ({leads.length})</TabsTrigger></TabsList>

          <TabsContent value="products">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[200px]"><Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" /><Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar productos..." className="pl-9" /></div>
              <Button onClick={openCreate} className="bg-[#E87722] hover:bg-[#D66A1A]"><Plus className="mr-1 h-4 w-4" /> Agregar</Button>
            </div>

            {loading ? <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-[#1B4DB5]" /></div> : (
              <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                <Table>
                  <TableHeader><TableRow><TableHead>Imagen</TableHead><TableHead>Nombre</TableHead><TableHead>Categoría</TableHead><TableHead>COP</TableHead><TableHead>Potencia</TableHead><TableHead>Precio</TableHead><TableHead>MOQ</TableHead><TableHead className="text-right">Acciones</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {filtered.map(p => <TableRow key={p.id}>
                      <TableCell><img src={p.image} alt={p.name} className="h-10 w-14 rounded object-cover" /></TableCell>
                      <TableCell className="font-medium">{p.name}</TableCell>
                      <TableCell><Badge variant="outline">{p.category}</Badge></TableCell>
                      <TableCell>{p.cop}</TableCell><TableCell>{p.power}</TableCell><TableCell>${p.price}</TableCell><TableCell>{p.moq}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" onClick={() => openEdit(p)}><Pencil className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="sm" onClick={() => setConfirmDelete({type:'product',id:p.id})} className="text-red-500"><Trash2 className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>)}
                  </TableBody>
                </Table>
                {filtered.length === 0 && <p className="py-8 text-center text-gray-500">No se encontraron productos.</p>}
              </div>
            )}
          </TabsContent>

          <TabsContent value="leads">
            {loading ? <div className="flex justify-center py-12"><Loader2 className="h-8 w-8 animate-spin text-[#1B4DB5]" /></div> : (
              <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
                <Table>
                  <TableHeader><TableRow><TableHead>Nombre</TableHead><TableHead>Email</TableHead><TableHead>Teléfono</TableHead><TableHead>Empresa</TableHead><TableHead>País</TableHead><TableHead>Mensaje</TableHead><TableHead className="text-right">Acciones</TableHead></TableRow></TableHeader>
                  <TableBody>
                    {leads.map((lead: any) => <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.email}</TableCell><TableCell>{lead.phone}</TableCell><TableCell>{lead.company}</TableCell><TableCell>{lead.country}</TableCell>
                      <TableCell><span className="max-w-[200px] truncate block text-sm">{lead.message}</span></TableCell>
                      <TableCell className="text-right"><Button variant="ghost" size="sm" onClick={() => setConfirmDelete({type:'lead',id:String(lead.id)})} className="text-red-500"><Trash2 className="h-4 w-4" /></Button></TableCell>
                    </TableRow>)}
                  </TableBody>
                </Table>
                {leads.length === 0 && <p className="py-8 text-center text-gray-500">No hay leads registrados.</p>}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Product Form Dialog */}
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>{editingId ? 'Editar Producto' : 'Nuevo Producto'}</DialogTitle></DialogHeader>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div className="flex items-center gap-4">
                {form.image ? <img src={form.image} alt="preview" className="h-20 w-28 rounded object-cover border" /> : <div className="flex h-20 w-28 items-center justify-center rounded border bg-gray-50"><ImageIcon className="h-6 w-6 text-gray-400" /></div>}
                <div className="flex-1"><Label>URL de imagen</Label><Input value={form.image} onChange={e => setForm(f => ({...f,image:e.target.value}))} placeholder="/products/r290-12kw.jpg" /></div>
              </div>
            </div>
            <div><Label>Nombre (ES) *</Label><Input value={form.name} onChange={e => setForm(f => ({...f,name:e.target.value}))} placeholder="Bomba R290 12kW" /></div>
            <div><Label>Nombre (EN)</Label><Input value={form.nameEn} onChange={e => setForm(f => ({...f,nameEn:e.target.value}))} placeholder="R290 Heat Pump 12kW" /></div>
            <div><Label>Slug *</Label><Input value={form.slug} onChange={e => setForm(f => ({...f,slug:e.target.value}))} placeholder="r290-12kw" /></div>
            <div><Label>Categoría (ES)</Label><Input value={form.category} onChange={e => setForm(f => ({...f,category:e.target.value}))} placeholder="Residencial" /></div>
            <div><Label>Categoría (EN)</Label><Input value={form.categoryEn} onChange={e => setForm(f => ({...f,categoryEn:e.target.value}))} placeholder="Residential" /></div>
            <div><Label>COP</Label><Input value={form.cop} onChange={e => setForm(f => ({...f,cop:e.target.value}))} placeholder="4.8" /></div>
            <div><Label>Potencia</Label><Input value={form.power} onChange={e => setForm(f => ({...f,power:e.target.value}))} placeholder="12 kW" /></div>
            <div><Label>Precio FOB</Label><Input value={form.price} onChange={e => setForm(f => ({...f,price:e.target.value}))} placeholder="1,299" /></div>
            <div><Label>MOQ</Label><Input value={form.moq} onChange={e => setForm(f => ({...f,moq:e.target.value}))} placeholder="5 unidades" /></div>
            <div className="sm:col-span-2"><Label>Descripción</Label><Textarea value={form.description} onChange={e => setForm(f => ({...f,description:e.target.value}))} rows={2} placeholder="Descripción del producto..." /></div>
            <div className="sm:col-span-2"><Label>Características (una por línea)</Label><Textarea value={featuresText} onChange={e => setFeaturesText(e.target.value)} rows={4} placeholder="R290 ecológico&#10;COP 4.8&#10;Inversor DC" /></div>
          </div>
          <DialogFooter><Button variant="outline" onClick={() => setShowForm(false)}>Cancelar</Button><Button onClick={handleSave} disabled={saving || !form.name || !form.slug} className="bg-[#E87722] hover:bg-[#D66A1A]">{saving ? 'Guardando...' : 'Guardar'}</Button></DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <Dialog open={!!confirmDelete} onOpenChange={() => setConfirmDelete(null)}>
        <DialogContent><DialogHeader><DialogTitle>¿Eliminar {confirmDelete?.type === 'product' ? 'producto' : 'lead'}?</DialogTitle></DialogHeader><p className="text-gray-600">Esta acción no se puede deshacer.</p>
          <DialogFooter><Button variant="outline" onClick={() => setConfirmDelete(null)}>Cancelar</Button><Button variant="destructive" onClick={handleConfirmedDelete}>Eliminar</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
