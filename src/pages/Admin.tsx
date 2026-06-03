import { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  X,
  ChevronLeft,
  Save,
  Package,
  Tag,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  cop: string;
  power: string;
  price: string;
  moq: string;
  badgeBg: string;
  emoji: string;
  features: string[];
}

/* ------------------------------------------------------------------ */
/*  Seed data                                                          */
/* ------------------------------------------------------------------ */

const DEFAULT_PRODUCTS: Product[] = [
  {
    id: '1',
    slug: 'r290-monobloc-12kw',
    name: 'R290 Monobloc 12kW',
    category: 'Aire-Agua',
    description:
      'Unidad monobloc R290 de 12kW para calefacción y ACS. Ideal para viviendas unifamiliares.',
    cop: '4.5',
    power: '12kW',
    price: '$1,850',
    moq: '5',
    badgeBg: 'bg-blue-600',
    emoji: '❄️',
    features: ['COP 4.5', 'R290 Eco-friendly', 'Monobloc compacto', 'Hasta 60°C ACS'],
  },
  {
    id: '2',
    slug: 'r290-monobloc-20kw',
    name: 'R290 Monobloc 20kW',
    category: 'Aire-Agua',
    description:
      'Unidad monobloc R290 de 20kW para edificios comerciales medianos. Alta eficiencia y rendimiento.',
    cop: '4.2',
    power: '20kW',
    price: '$2,650',
    moq: '3',
    badgeBg: 'bg-blue-700',
    emoji: '🏭',
    features: ['COP 4.2', 'R290 Eco-friendly', 'Gran capacidad', 'Hasta 60°C ACS'],
  },
  {
    id: '3',
    slug: 'split-9kw-fancoil',
    name: 'Split 9kW + Fancoil',
    category: 'Split',
    description:
      'Sistema split de 9kW con fancoil incluido. Perfecto para instalaciones residenciales.',
    cop: '4.2',
    power: '9kW',
    price: '$1,450',
    moq: '5',
    badgeBg: 'bg-teal-600',
    emoji: '🌀',
    features: ['COP 4.2', 'Incluye fancoil', 'Split versátil', 'Fácil instalación'],
  },
  {
    id: '4',
    slug: 'circulacion-inteligente',
    name: 'Circulación Inteligente',
    category: 'Accesorios',
    description:
      'Sistema de circulación inteligente para optimizar el flujo y la eficiencia de la instalación.',
    cop: '-',
    power: '-',
    price: '$180',
    moq: '10',
    badgeBg: 'bg-gray-600',
    emoji: '💧',
    features: ['Circulación optimizada', 'Fácil integración', 'Bajo consumo'],
  },
  {
    id: '5',
    slug: 'monobloc-comercial-30kw',
    name: 'Monobloc Comercial 30kW',
    category: 'Comercial',
    description:
      'Unidad monobloc comercial de 30kW. Diseñada para grandes espacios comerciales e industriales.',
    cop: '4.0',
    power: '30kW',
    price: '$4,200',
    moq: '2',
    badgeBg: 'bg-purple-600',
    emoji: '🏢',
    features: ['COP 4.0', 'Alta capacidad', 'Uso comercial', 'Robusto y duradero'],
  },
  {
    id: '6',
    slug: 'geotermica-15kw',
    name: 'Geotérmica 15kW',
    category: 'Geotermia',
    description:
      'Bomba de calor geotérmica de 15kW. La máxima eficiencia aprovechando la energía del subsuelo.',
    cop: '5.2',
    power: '15kW',
    price: '$3,800',
    moq: '3',
    badgeBg: 'bg-emerald-600',
    emoji: '🌱',
    features: ['COP 5.2', 'Energía geotérmica', 'Máxima eficiencia', 'Ecológico'],
  },
  {
    id: '7',
    slug: 'piscina-20kw',
    name: 'Piscina 20kW',
    category: 'Piscina',
    description:
      'Bomba de calor para piscinas de 20kW. Disfruta de tu piscina todo el año con máxima eficiencia.',
    cop: '5.5',
    power: '20kW',
    price: '$1,950',
    moq: '5',
    badgeBg: 'bg-cyan-600',
    emoji: '🏊',
    features: ['COP 5.5', 'Para piscinas', 'Climatización año completo', 'Alta eficiencia'],
  },
];

const STORAGE_KEY = 'nae-admin-products';

const CATEGORIES = [
  'Aire-Agua',
  'Split',
  'Comercial',
  'Geotermia',
  'Piscina',
  'Accesorios',
];

const BADGE_OPTIONS = [
  { label: 'Blue 600', value: 'bg-blue-600' },
  { label: 'Blue 700', value: 'bg-blue-700' },
  { label: 'Teal 600', value: 'bg-teal-600' },
  { label: 'Gray 600', value: 'bg-gray-600' },
  { label: 'Purple 600', value: 'bg-purple-600' },
  { label: 'Emerald 600', value: 'bg-emerald-600' },
  { label: 'Cyan 600', value: 'bg-cyan-600' },
  { label: 'Red 600', value: 'bg-red-600' },
  { label: 'Orange 600', value: 'bg-orange-600' },
  { label: 'Indigo 600', value: 'bg-indigo-600' },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function slugify(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function loadProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as Product[];
  } catch {
    // ignore
  }
  return [...DEFAULT_PRODUCTS];
}

function saveProducts(products: Product[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Admin() {
  /* -- state -- */
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingProduct, setEditingProduct] = useState<Product | 'new' | null>(
    null
  );
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  /* -- load from localStorage -- */
  useEffect(() => {
    const loaded = loadProducts();
    setProducts(loaded);
  }, []);

  /* -- persist to localStorage -- */
  useEffect(() => {
    if (products.length > 0) {
      saveProducts(products);
    }
  }, [products]);

  /* -- derived -- */
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.power.toLowerCase().includes(q)
    );
  }, [products, searchQuery]);

  const totalProducts = products.length;
  const totalCategories = useMemo(
    () => new Set(products.map((p) => p.category)).size,
    [products]
  );

  /* -- form state -- */
  const emptyForm: Omit<Product, 'id'> = {
    slug: '',
    name: '',
    category: CATEGORIES[0],
    description: '',
    cop: '',
    power: '',
    price: '',
    moq: '',
    badgeBg: BADGE_OPTIONS[0].value,
    emoji: '',
    features: [],
  };

  const [formData, setFormData] = useState<Omit<Product, 'id'>>(emptyForm);
  const [featuresText, setFeaturesText] = useState('');

  function initForm(product?: Product) {
    if (product) {
      setFormData({ ...product });
      setFeaturesText(product.features.join(', '));
    } else {
      setFormData({ ...emptyForm });
      setFeaturesText('');
    }
  }

  function startNew() {
    setEditingProduct('new');
    initForm();
  }

  function startEdit(product: Product) {
    setEditingProduct(product);
    initForm(product);
    setConfirmDeleteId(null);
  }

  function cancelEdit() {
    setEditingProduct(null);
    setFormData(emptyForm);
    setFeaturesText('');
    setConfirmDeleteId(null);
  }

  function handleSave() {
    const features = featuresText
      .split(',')
      .map((f) => f.trim())
      .filter(Boolean);

    const payload: Product = {
      ...formData,
      slug: formData.slug || slugify(formData.name),
      features,
      id:
        editingProduct && editingProduct !== 'new'
          ? editingProduct.id
          : Date.now().toString(),
    };

    if (editingProduct === 'new') {
      setProducts((prev) => [...prev, payload]);
    } else if (editingProduct && typeof editingProduct === 'object' && 'id' in editingProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === payload.id ? payload : p))
      );
    }

    setEditingProduct(null);
    setFormData(emptyForm);
    setFeaturesText('');
  }

  function handleDelete(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    setConfirmDeleteId(null);
  }

  /* -- render helpers -- */
  const isEditing = editingProduct !== null;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ========== HEADER ========== */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="w-7 h-7 text-orange-500" />
            <h1 className="text-xl font-bold tracking-tight">
              Panel de Administraci&oacute;n NAE
            </h1>
          </div>
          <div className="text-sm text-gray-300">
            Heat Pumps &middot; Admin
          </div>
        </div>

        {/* Stats row */}
        <div className="max-w-7xl mx-auto mt-4 flex gap-6">
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-2">
            <Package className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">
              Productos:{' '}
              <strong className="text-white">{totalProducts}</strong>
            </span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-2">
            <Tag className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">
              Categor&iacute;as:{' '}
              <strong className="text-white">{totalCategories}</strong>
            </span>
          </div>
        </div>
      </header>

      {/* ========== MAIN CONTENT ========== */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* --- LIST VIEW --- */}
        {!isEditing && (
          <>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                />
              </div>
              <button
                onClick={startNew}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                Nuevo Producto
              </button>
            </div>

            {/* Product table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-600 font-semibold uppercase text-xs">
                    <tr>
                      <th className="px-4 py-3">Emoji</th>
                      <th className="px-4 py-3">Nombre</th>
                      <th className="px-4 py-3">Categor&iacute;a</th>
                      <th className="px-4 py-3">Potencia</th>
                      <th className="px-4 py-3">COP</th>
                      <th className="px-4 py-3">Precio</th>
                      <th className="px-4 py-3">MOQ</th>
                      <th className="px-4 py-3 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.length === 0 && (
                      <tr>
                        <td
                          colSpan={8}
                          className="px-4 py-12 text-center text-gray-400"
                        >
                          No se encontraron productos.
                        </td>
                      </tr>
                    )}
                    {filteredProducts.map((product, idx) => (
                      <tr
                        key={product.id}
                        className={`border-b border-gray-100 ${
                          idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'
                        } hover:bg-orange-50 transition-colors`}
                      >
                        <td className="px-4 py-3 text-lg">
                          {product.emoji || '-'}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-900">
                          {product.name}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block text-white text-xs font-medium px-2.5 py-1 rounded-full ${product.badgeBg}`}
                          >
                            {product.category}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {product.power}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {product.cop}
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-800">
                          {product.price}
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {product.moq}
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="inline-flex items-center gap-2">
                            {/* Edit */}
                            <button
                              onClick={() => startEdit(product)}
                              className="p-1.5 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                              title="Editar"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>

                            {/* Delete */}
                            {confirmDeleteId === product.id ? (
                              <div className="inline-flex items-center gap-1">
                                <span className="text-xs text-red-600 font-medium mr-1">
                                  &iquest;Seguro?
                                </span>
                                <button
                                  onClick={() => handleDelete(product.id)}
                                  className="px-2 py-1 rounded-md bg-red-600 text-white text-xs font-medium hover:bg-red-700 transition-colors"
                                >
                                  S&iacute;
                                </button>
                                <button
                                  onClick={() => setConfirmDeleteId(null)}
                                  className="px-2 py-1 rounded-md bg-gray-200 text-gray-700 text-xs font-medium hover:bg-gray-300 transition-colors"
                                >
                                  No
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() =>
                                  setConfirmDeleteId(product.id)
                                }
                                className="p-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                title="Eliminar"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* --- FORM VIEW --- */}
        {isEditing && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Form header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={cancelEdit}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Volver
              </button>
              <h2 className="text-lg font-bold text-gray-900">
                {editingProduct === 'new'
                  ? 'Nuevo Producto'
                  : 'Editar Producto'}
              </h2>
              <button
                onClick={cancelEdit}
                className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Nombre */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    const name = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      name,
                      slug: slugify(name),
                    }));
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: R290 Monobloc 12kW"
                />
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug <span className="text-gray-400">(auto)</span>
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="r290-monobloc-12kw"
                />
              </div>

              {/* Categoría */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Categor&iacute;a <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Descripción */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Descripci&oacute;n
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  placeholder="Descripci&oacute;n del producto..."
                />
              </div>

              {/* COP */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  COP
                </label>
                <input
                  type="text"
                  value={formData.cop}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, cop: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: 4.5"
                />
              </div>

              {/* Potencia */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Potencia
                </label>
                <input
                  type="text"
                  value={formData.power}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, power: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: 12kW"
                />
              </div>

              {/* Precio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Precio FOB
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, price: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: $1,850"
                />
              </div>

              {/* MOQ */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  MOQ
                </label>
                <input
                  type="text"
                  value={formData.moq}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, moq: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: 5"
                />
              </div>

              {/* Emoji */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emoji
                </label>
                <input
                  type="text"
                  value={formData.emoji}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, emoji: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Ej: ❄️"
                  maxLength={4}
                />
              </div>

              {/* Badge Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Color badge
                </label>
                <select
                  value={formData.badgeBg}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      badgeBg: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                >
                  {BADGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Características */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Caracter&iacute;sticas{' '}
                  <span className="text-gray-400">(separadas por comas)</span>
                </label>
                <textarea
                  rows={2}
                  value={featuresText}
                  onChange={(e) => setFeaturesText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  placeholder="COP 4.5, R290 Eco-friendly, Monobloc compacto, Hasta 60°C ACS"
                />
              </div>
            </div>

            {/* Form actions */}
            <div className="flex items-center gap-3 mt-8 pt-5 border-t border-gray-200">
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
              >
                <Save className="w-4 h-4" />
                Guardar
              </button>
              <button
                onClick={cancelEdit}
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
