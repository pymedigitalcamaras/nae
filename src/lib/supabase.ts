import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://irgulqhdmzxilwhzfhha.supabase.co';
const supabaseKey = 'sb_publishable_MfCjX53CpG8lLFS5zJslpQ_5qTzOwWL';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Auth helpers
export const signUp = async (email: string, password: string, metadata: any) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata }
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();
  return { ...user, profile };
};

// Products CRUD
export const getProducts = async () => {
  const { data, error } = await supabase.from('products').select('*').order('id');
  if (error) throw error;
  return data || [];
};

export const createProduct = async (product: any) => {
  const { data, error } = await supabase.from('products').insert(product).select().single();
  if (error) throw error;
  return data;
};

export const updateProduct = async (id: string, product: any) => {
  const { data, error } = await supabase.from('products').update(product).eq('id', id).select().single();
  if (error) throw error;
  return data;
};

export const deleteProduct = async (id: string) => {
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) throw error;
};

// Leads
export const createLead = async (lead: any) => {
  const { data, error } = await supabase.from('leads').insert(lead).select().single();
  if (error) throw error;
  return data;
};

export const getLeads = async () => {
  const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
};
