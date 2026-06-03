-- ============================================================
-- NAE SUPABASE SETUP
-- Ejecutar en: Supabase Dashboard → SQL Editor → New query
-- ============================================================

-- 1. Profiles table (users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    name TEXT,
    company TEXT,
    phone TEXT,
    country TEXT,
    role TEXT DEFAULT 'pending' CHECK (role IN ('pending', 'installer', 'admin')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Products table
CREATE TABLE IF NOT EXISTS public.products (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    name_en TEXT,
    category TEXT NOT NULL,
    category_en TEXT,
    description TEXT,
    cop TEXT,
    power TEXT,
    price TEXT,
    moq TEXT,
    badge_bg TEXT DEFAULT 'bg-blue-600',
    emoji TEXT DEFAULT '❄️',
    features TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Leads table (contact form submissions)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    company TEXT,
    country TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Profiles: everyone can view, only owner can update
CREATE POLICY "Public profiles are viewable by everyone" 
    ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" 
    ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Products: everyone can view, only admin can modify
CREATE POLICY "Products are viewable by everyone" 
    ON public.products FOR SELECT USING (true);

CREATE POLICY "Admins can manage products" 
    ON public.products FOR ALL USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

-- Leads: anyone can create, only admin can view
CREATE POLICY "Anyone can create leads" 
    ON public.leads FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view leads" 
    ON public.leads FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    );

-- Auto-create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, name, company, phone, country, role)
    VALUES (
        NEW.id, 
        NEW.email,
        NEW.raw_user_meta_data->>'name',
        NEW.raw_user_meta_data->>'company',
        NEW.raw_user_meta_data->>'phone',
        NEW.raw_user_meta_data->>'country',
        COALESCE(NEW.raw_user_meta_data->>'role', 'pending')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert seed products (12 products)
INSERT INTO public.products (id, slug, name, name_en, category, category_en, description, cop, power, price, moq, badge_bg, emoji, features)
VALUES 
('1', 'r290-monobloc-12kw', 'Bomba de Calor R290 Monobloc 12kW', 'R290 Monobloc 12kW', 'Aire-Agua', 'Air-Water', 'Sistema monobloc con refrigerante ecológico R290. Ideal para viviendas hasta 120m².', '4.5', '12 kW', '$1,850', '5 u.', 'bg-blue-600', '❄️', ARRAY['Refrigerante R290 ecológico', 'COP 4.5', 'Cubre hasta 120m²', 'Kit completo']),
('2', 'r290-monobloc-20kw', 'Bomba de Calor R290 Monobloc 20kW', 'R290 Monobloc 20kW', 'Aire-Agua', 'Air-Water', 'Potente sistema monobloc 20kW para aplicaciones comerciales ligeras.', '4.2', '20 kW', '$2,650', '3 u.', 'bg-blue-700', '🏭', ARRAY['Refrigerante R290', 'COP 4.2', 'Cubre hasta 200m²']),
('3', 'r290-monobloc-8kw', 'Bomba de Calor R290 Monobloc 8kW Compact', 'R290 Monobloc 8kW Compact', 'Aire-Agua', 'Air-Water', 'Sistema compacto de 8kW perfecto para departamentos.', '4.6', '8 kW', '$1,480', '5 u.', 'bg-blue-500', '🏠', ARRAY['Diseño compacto', 'COP 4.6', 'Cubre hasta 80m²']),
('4', 'split-9kw-fancoil', 'Sistema Split 9kW + Fancoil', 'Split 9kW + Fancoil', 'Split', 'Split', 'Kit completo split con unidad interior fancoil. Ideal para renovaciones.', '4.2', '9 kW', '$1,450', '5 u.', 'bg-teal-600', '🌀', ARRAY['Unidad interior fancoil', 'COP 4.2', 'Cubre hasta 90m²']),
('5', 'monobloc-comercial-30kw', 'Bomba Monobloc Comercial 30kW', 'Commercial Monobloc 30kW', 'Comercial', 'Commercial', 'Sistema de alta capacidad para edificios comerciales.', '4.0', '30 kW', '$4,200', '2 u.', 'bg-purple-600', '🏢', ARRAY['COP 4.0', 'Cubre hasta 400m²']),
('6', 'geotermica-15kw', 'Bomba Geotérmica 15kW', 'Geothermal 15kW', 'Geotermia', 'Geothermal', 'Aprovecha la energía del subsuelo para máxima eficiencia.', '5.2', '15 kW', '$3,800', '3 u.', 'bg-emerald-600', '🌱', ARRAY['COP 5.2', 'Rendimiento estable']),
('7', 'piscina-20kw', 'Calentador de Piscina 20kW', 'Pool Heater 20kW', 'Piscina', 'Pool', 'Mantén tu piscina a la temperatura ideal todo el año.', '5.5', '20 kW', '$1,950', '5 u.', 'bg-cyan-600', '🏊', ARRAY['COP 5.5', 'Intercambiador titanio']),
('8', 'circulacion-inteligente', 'Bomba de Circulación Inteligente', 'Smart Circulation Pump', 'Accesorios', 'Accessories', 'Bomba de circulación eficiente. Ahorro energético de hasta 80%.', '-', '6m', '$180', '10 u.', 'bg-gray-600', '💧', ARRAY['Ahorro 80% energía', 'Control automático']),
('9', 'estanque-200l', 'Estanque de Agua Caliente 200L', 'Hot Water Tank 200L', 'Estanques', 'Tanks', 'Estanque de agua caliente sanitaria de 200 litros. Acero inox 316L.', '-', '200L', '$320', '10 u.', 'bg-orange-500', '🔥', ARRAY['Acero inox 316L', 'Doble serpentín']),
('10', 'estanque-300l', 'Estanque de Agua Caliente 300L', 'Hot Water Tank 300L', 'Estanques', 'Tanks', 'Estanque de agua caliente sanitaria de 300 litros.', '-', '300L', '$420', '8 u.', 'bg-orange-600', '🔥', ARRAY['Acero inox 316L', 'Aislación premium']),
('11', 'kit-instalacion-pex', 'Kit Completo Instalación PEX', 'PEX Installation Kit', 'Kits', 'Kits', 'Kit completo con tubería PEX, fittings y válvulas.', '-', '-', '$450', '5 u.', 'bg-green-600', '📦', ARRAY['Tubería PEX 100m', 'Fittings completos']),
('12', 'kit-hidraulico', 'Kit Hidráulico Completo', 'Complete Hydraulic Kit', 'Kits', 'Kits', 'Kit hidráulico profesional con colector y bomba.', '-', '-', '$680', '5 u.', 'bg-green-700', '🔧', ARRAY['Colector 2-12 circuitos', 'Bomba circulación'])
ON CONFLICT (id) DO NOTHING;

-- Make first registered user an admin (optional, run this after first signup)
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'tu-email@ejemplo.com';
