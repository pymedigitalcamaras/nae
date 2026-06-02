-- NAE — New AGE Energy — Initial Schema Migration
-- Run this in Supabase SQL Editor to set up all tables, RLS, and seed data

-- ============================================
-- 1. CATEGORIES
-- ============================================
create table if not exists public.categories (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  slug        text not null unique,
  description text,
  color       text default '#1E40AF',
  badge_bg    text default '#1E40AF',
  created_at  timestamptz default now()
);

comment on table public.categories is 'Product categories for heat pump classification';

-- ============================================
-- 2. PRODUCTS
-- ============================================
create table if not exists public.products (
  id               uuid primary key default gen_random_uuid(),
  name             text not null,
  slug             text not null unique,
  category_id      uuid references public.categories(id) on delete set null,
  description      text,
  short_description text,
  specs            jsonb default '{}'::jsonb,
  featured         boolean default false,
  image            text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now()
);

comment on table public.products is 'Heat pump products catalog';

-- ============================================
-- 3. PRICING (wholesale — protected)
-- ============================================
create table if not exists public.pricing (
  id              uuid primary key default gen_random_uuid(),
  product_id      uuid references public.products(id) on delete cascade,
  wholesale_price numeric not null,
  moq             integer not null default 1,
  created_at      timestamptz default now(),
  unique (product_id)
);

comment on table public.pricing is 'Wholesale pricing — installer/admin access only';

-- ============================================
-- 4. PROFILES (extends Supabase Auth users)
-- ============================================
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  email         text,
  full_name     text,
  company_name  text,
  phone         text,
  country       text,
  city          text,
  role          text not null default 'installer' check (role in ('installer','admin')),
  status        text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

comment on table public.profiles is 'User profiles extending Supabase Auth';

-- ============================================
-- 5. LEADS (contact form submissions)
-- ============================================
create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  full_name    text not null,
  email        text not null,
  company_name text,
  phone        text,
  country      text,
  city         text,
  role_type    text not null check (role_type in ('installer','distributor','contractor','other')),
  message      text,
  status       text not null default 'new' check (status in ('new','contacted','qualified','closed')),
  created_at   timestamptz default now()
);

comment on table public.leads is 'Contact form and registration submissions';

-- ============================================
-- RLS — Row Level Security
-- ============================================

-- Enable RLS on all tables
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.pricing enable row level security;
alter table public.profiles enable row level security;
alter table public.leads enable row level security;

-- CATEGORIES: everyone can read
create policy "Categories are viewable by everyone"
  on public.categories for select to anon, authenticated using (true);

-- PRODUCTS: everyone can read
create policy "Products are viewable by everyone"
  on public.products for select to anon, authenticated using (true);

-- PRICING: only approved installers and admins
-- Admins see all
-- Approved installers see all
-- Others see nothing
create policy "Pricing viewable by approved installers"
  on public.pricing for select to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
        and profiles.status = 'approved'
    )
  );

create policy "Pricing manageable by admins"
  on public.pricing for all to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
        and profiles.role = 'admin'
    )
  )
  with check (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
        and profiles.role = 'admin'
    )
  );

-- PROFILES: users can read own profile, admins can read all
create policy "Users can view own profile"
  on public.profiles for select to authenticated
  using (auth.uid() = id);

create policy "Admins can view all profiles"
  on public.profiles for select to authenticated
  using (
    exists (
      select 1 from public.profiles as p
      where p.id = auth.uid() and p.role = 'admin'
    )
  );

create policy "Users can update own profile"
  on public.profiles for update to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Admins can update all profiles"
  on public.profiles for update to authenticated
  using (
    exists (
      select 1 from public.profiles as p
      where p.id = auth.uid() and p.role = 'admin'
    )
  )
  with check (true);

-- Insert allowed during signup (handled by trigger)
create policy "Allow insert during signup"
  on public.profiles for insert to authenticated, anon
  with check (true);

-- LEADS: anyone can create (contact form)
create policy "Anyone can submit leads"
  on public.leads for insert to anon, authenticated
  with check (true);

-- Only admins can read/update leads
create policy "Admins can manage leads"
  on public.leads for all to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  )
  with check (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid() and profiles.role = 'admin'
    )
  );

-- ============================================
-- TRIGGER: Auto-create profile on signup
-- ============================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, role, status)
  values (new.id, new.email, 'installer', 'pending')
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Drop if exists then create
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================
-- SEED DATA: Categories
-- ============================================
insert into public.categories (name, slug, description, color, badge_bg)
values
  ('Air Source', 'air-source', 'Air-to-water heat pumps for residential and commercial use', '#1E40AF', '#1E40AF'),
  ('Geothermal', 'geothermal', 'Ground-source heat pumps with maximum efficiency', '#059669', '#059669'),
  ('Pool Heating', 'pool-heating', 'Heat pumps designed for swimming pool temperature control', '#F97316', '#F97316'),
  ('Commercial', 'commercial', 'High-capacity heat pumps for commercial applications', '#7C3AED', '#7C3AED')
on conflict (slug) do nothing;

-- ============================================
-- SEED DATA: Products
-- ============================================
insert into public.products (name, slug, category_id, description, short_description, specs, featured, image)
select
  'R290 Monobloc 12kW',
  'r290-monobloc-12kw',
  c.id,
  'High-efficiency air-to-water heat pump with R290 refrigerant. Monobloc design for easy installation.',
  'Solución eficiente para calefacción y ACS. Ideal para climas templados y fríos.',
  '{"capacity":"12 kW","refrigerant":"R290 (Propane)","cop":"Up to 4.8","voltage":"220-240V / 50Hz","operatingTemp":"-25°C to +43°C","noiseLevel":"42 dB(A)","dimensions":"1100 x 420 x 850 mm","weight":"78 kg"}'::jsonb,
  true,
  '/product-r290-12kw.jpg'
from public.categories c where c.slug = 'air-source'
on conflict (slug) do nothing;

insert into public.products (name, slug, category_id, description, short_description, specs, featured, image)
select
  'R290 Monobloc 20kW',
  'r290-monobloc-20kw',
  c.id,
  'Commercial-grade air-to-water heat pump with R290 refrigerant. High-capacity monobloc unit.',
  'Unidad monobloc comercial de alta capacidad para instalaciones de mayor envergadura.',
  '{"capacity":"20 kW","refrigerant":"R290 (Propane)","cop":"Up to 4.5","voltage":"380-415V / 3-phase","operatingTemp":"-25°C to +43°C","noiseLevel":"48 dB(A)","dimensions":"1350 x 520 x 1050 mm","weight":"125 kg"}'::jsonb,
  true,
  '/product-r290-20kw.jpg'
from public.categories c where c.slug = 'commercial'
on conflict (slug) do nothing;

insert into public.products (name, slug, category_id, description, short_description, specs, featured, image)
select
  'Split System 9kW',
  'split-system-9kw',
  c.id,
  'Split heat pump system with indoor hydrobox and outdoor unit. Includes fancoil for air distribution.',
  'Sistema split con unidad interior y exterior. Incluye fancoil para distribución de aire.',
  '{"capacity":"9 kW","refrigerant":"R32","cop":"Up to 5.2","voltage":"220-240V / 50Hz","operatingTemp":"-20°C to +40°C","noiseLevel":"38 dB(A) indoor","dimensions":"Outdoor: 900 x 380 x 650 mm","weight":"Outdoor: 52 kg"}'::jsonb,
  true,
  '/product-split-9kw.jpg'
from public.categories c where c.slug = 'air-source'
on conflict (slug) do nothing;

insert into public.products (name, slug, category_id, description, short_description, specs, featured, image)
select
  'Smart Circulation Pump',
  'smart-circulation-pump',
  c.id,
  'High-efficiency circulation pump for hydronic heating systems. Variable speed control.',
  'Bomba de circulación inteligente para sistemas de calefacción hidrónica.',
  '{"maxFlow":"3.5 m³/h","maxHead":"6 m","power":"5-45 W","voltage":"220-240V / 50Hz","connection":"1 1/2\\\" BSP","control":"PWM / 0-10V"}'::jsonb,
  false,
  '/product-recirc.jpg'
from public.categories c where c.slug = 'air-source'
on conflict (slug) do nothing;

insert into public.products (name, slug, category_id, description, short_description, specs, featured, image)
select
  'PEX Installation Kit',
  'pex-installation-kit',
  c.id,
  'Complete PEX pipe and fittings kit for underfloor heating and hydronic system installation.',
  'Kit completo de tubería PEX y accesorios para instalación de suelo radiante.',
  '{"pipeLength":"100m rolls","pipeSize":"16mm x 2.0mm","maxTemp":"95°C","maxPressure":"6 bar","includes":"Manifold, fittings, brackets, cutter"}'::jsonb,
  false,
  '/product-pex-kit.jpg'
from public.categories c where c.slug = 'air-source'
on conflict (slug) do nothing;

insert into public.products (name, slug, category_id, description, short_description, specs, featured, image)
select
  'Geothermal HP 15kW',
  'geothermal-hp-15kw',
  c.id,
  'Ground-source heat pump with vertical loop compatibility. Maximum efficiency for year-round operation.',
  'Máxima eficiencia aprovechando la energía del subsuelo. Reducción de consumo hasta un 70%.',
  '{"capacity":"15 kW","refrigerant":"R410A","cop":"Up to 5.8","eer":"Up to 5.2","voltage":"220-240V / 50Hz","waterTemp":"Up to 65°C","dimensions":"850 x 480 x 720 mm","weight":"95 kg"}'::jsonb,
  true,
  '/images/product-geothermal.jpg'
from public.categories c where c.slug = 'geothermal'
on conflict (slug) do nothing;

insert into public.products (name, slug, category_id, description, short_description, specs, featured, image)
select
  'Pool Heat Pump 12kW',
  'pool-heat-pump-12kw',
  c.id,
  'Dedicated swimming pool heat pump with titanium heat exchanger. Year-round operation.',
  'Mantén tu piscina a la temperatura ideal todo el año con máxima eficiencia energética.',
  '{"capacity":"12 kW","refrigerant":"R32","cop":"Up to 6.0","voltage":"220-240V / 50Hz","poolVolume":"Up to 60 m³","heatExchanger":"Titanium","dimensions":"850 x 350 x 550 mm","weight":"42 kg"}'::jsonb,
  true,
  '/images/product-pool.jpg'
from public.categories c where c.slug = 'pool-heating'
on conflict (slug) do nothing;

-- ============================================
-- SEED DATA: Pricing
-- ============================================
insert into public.pricing (product_id, wholesale_price, moq)
select p.id, 1850, 5 from public.products p where p.slug = 'r290-monobloc-12kw'
on conflict do nothing;

insert into public.pricing (product_id, wholesale_price, moq)
select p.id, 3200, 3 from public.products p where p.slug = 'r290-monobloc-20kw'
on conflict do nothing;

insert into public.pricing (product_id, wholesale_price, moq)
select p.id, 1650, 5 from public.products p where p.slug = 'split-system-9kw'
on conflict do nothing;

insert into public.pricing (product_id, wholesale_price, moq)
select p.id, 245, 10 from public.products p where p.slug = 'smart-circulation-pump'
on conflict do nothing;

insert into public.pricing (product_id, wholesale_price, moq)
select p.id, 380, 5 from public.products p where p.slug = 'pex-installation-kit'
on conflict do nothing;

insert into public.pricing (product_id, wholesale_price, moq)
select p.id, 4200, 2 from public.products p where p.slug = 'geothermal-hp-15kw'
on conflict do nothing;

insert into public.pricing (product_id, wholesale_price, moq)
select p.id, 1850, 3 from public.products p where p.slug = 'pool-heat-pump-12kw'
on conflict do nothing;
