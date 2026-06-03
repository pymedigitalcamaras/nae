import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Globe, LogIn, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const languages = [{ code:'es',label:'ES' },{ code:'en',label:'EN' },{ code:'pt',label:'PT' },{ code:'zh',label:'中文' }];
const navLinks = [{ to:'/products',key:'products' },{ to:'/services',key:'services' },{ to:'/about',key:'about' },{ to:'/contact',key:'contact' }];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const changeLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2"><span className="text-2xl font-extrabold text-[#1B4DB5]">NAE</span></Link>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${location.pathname.startsWith(l.to) ? 'bg-[#1B4DB5]/10 text-[#1B4DB5]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#1B4DB5]'}`}>{t(`nav.${l.key}`)}</Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden group md:block">
            <button className="flex items-center gap-1 rounded-md px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-50"><Globe className="h-4 w-4" /><span>{i18n.language?.toUpperCase() === 'ZH' ? '中文' : i18n.language?.toUpperCase() || 'ES'}</span><ChevronDown className="h-3 w-3" /></button>
            <div className="absolute right-0 top-full hidden w-24 overflow-hidden rounded-md border bg-white shadow-lg group-hover:block">
              {languages.map(l => <button key={l.code} onClick={() => changeLang(l.code)} className={`block w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${i18n.language === l.code ? 'font-semibold text-[#1B4DB5]' : 'text-gray-700'}`}>{l.label}</button>)}
            </div>
          </div>
          <Link to="/login" className="hidden items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1B4DB5] md:flex"><LogIn className="h-4 w-4" />{t('nav.login')}</Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild><button className="rounded-md p-2 text-gray-600 hover:bg-gray-50 md:hidden"><Menu className="h-6 w-6" /></button></SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map(l => <Link key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">{t(`nav.${l.key}`)}</Link>)}
                <hr className="my-2" />
                <Link to="/login" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"><LogIn className="h-4 w-4" />{t('nav.login')}</Link>
                <hr className="my-2" />
                <p className="px-3 text-xs font-medium text-gray-400">IDIOMA / LANGUAGE</p>
                <div className="flex gap-2 px-3">
                  {languages.map(l => <button key={l.code} onClick={() => { changeLang(l.code); setMobileOpen(false); }} className={`rounded-md px-2.5 py-1.5 text-xs ${i18n.language === l.code ? 'bg-[#1B4DB5] text-white' : 'bg-gray-100 text-gray-700'}`}>{l.label}</button>)}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
