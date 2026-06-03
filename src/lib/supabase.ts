import { createClient } from '@supabase/supabase-js';
import type { Product } from '@/data';

const supabaseUrl = 'https://irgulqhdmzxilwhzfhha.supabase.co';
const supabaseKey = 'sb_publishable_MfCjX53CpG8lLFS5zJslpQ_5qTzOwWL';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Auth helpers
export async function signUp(email: string, password: string, metadata?: object) {
  return supabase.auth.signUp({ email, password, options: { data: metadata } });
}
export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}
export async function signOut() {
  return supabase.auth.signOut();
}
export async function getCurrentUser() {
  const { data } = await supabase.auth.getUser();
  return data?.user;
}

// Product helpers — ALL use Supabase
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase.from('products').select('*').order('id');
  if (error) { console.error('getProducts error:', error); return []; }
  return (data || []).map(row => ({
    id: String(row.id), slug: row.slug, name: row.name, nameEn: row.name_en || row.name,
    category: row.category, categoryEn: row.category_en || row.category,
    description: row.description, cop: row.cop || '-', power: row.power || '-',
    price: row.price || '-', moq: row.moq || '-', badgeBg: row.badge_bg || 'bg-gray-100',
    emoji: row.emoji || '🔧', image: row.image || '/products/r290-12kw.jpg',
    features: Array.isArray(row.features) ? row.features : (row.features ? JSON.parse(row.features) : []),
  }));
}
export async function createProduct(product: Omit<Product, 'id'>): Promise<Product | null> {
  const payload = {
    slug: product.slug, name: product.name, name_en: product.nameEn,
    category: product.category, category_en: product.categoryEn,
    description: product.description, cop: product.cop, power: product.power,
    price: product.price, moq: product.moq, badge_bg: product.badgeBg,
    emoji: product.emoji, image: product.image, features: product.features,
  };
  const { data, error } = await supabase.from('products').insert(payload).select().single();
  if (error) { console.error('createProduct error:', error); return null; }
  return data ? { ...product, id: String(data.id) } : null;
}
export async function updateProduct(id: string, product: Partial<Product>): Promise<boolean> {
  const payload: Record<string, unknown> = {};
  if (product.slug !== undefined) payload.slug = product.slug;
  if (product.name !== undefined) payload.name = product.name;
  if (product.nameEn !== undefined) payload.name_en = product.nameEn;
  if (product.category !== undefined) payload.category = product.category;
  if (product.categoryEn !== undefined) payload.category_en = product.categoryEn;
  if (product.description !== undefined) payload.description = product.description;
  if (product.cop !== undefined) payload.cop = product.cop;
  if (product.power !== undefined) payload.power = product.power;
  if (product.price !== undefined) payload.price = product.price;
  if (product.moq !== undefined) payload.moq = product.moq;
  if (product.badgeBg !== undefined) payload.badge_bg = product.badgeBg;
  if (product.emoji !== undefined) payload.emoji = product.emoji;
  if (product.image !== undefined) payload.image = product.image;
  if (product.features !== undefined) payload.features = product.features;
  const { error } = await supabase.from('products').update(payload).eq('id', id);
  if (error) { console.error('updateProduct error:', error); return false; }
  return true;
}
export async function deleteProduct(id: string): Promise<boolean> {
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) { console.error('deleteProduct error:', error); return false; }
  return true;
}

// Lead helpers
export async function createLead(lead: { name: string; email: string; phone: string; company?: string; country?: string; message: string }): Promise<boolean> {
  const { error } = await supabase.from('leads').insert({
    name: lead.name, email: lead.email, phone: lead.phone,
    company: lead.company || '', country: lead.country || '', message: lead.message,
  });
  if (error) { console.error('createLead error:', error); return false; }
  return true;
}
export async function getLeads(): Promise<Array<Record<string, unknown>>> {
  const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
  if (error) { console.error('getLeads error:', error); return []; }
  return data || [];
}
export async function deleteLead(id: string): Promise<boolean> {
  const { error } = await supabase.from('leads').delete().eq('id', id);
  if (error) { console.error('deleteLead error:', error); return false; }
  return true;
}
