import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Calculator } from 'lucide-react';

const flags: Record<string, string> = { es: '🇪🇸', en: '🇬🇧', pt: '🇧🇷', zh: '🇨🇳' };
const langs = ['es', 'en', 'pt', 'zh'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/products', label: t('nav.products') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/oem', label: t('nav.oem') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-content mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo-nae.png" alt="NAE" className="h-10 w-auto" />
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-nae-dark leading-none">NAE</span>
              <span className="block text-[10px] text-gray-500 leading-none -mt-0.5">New AGE Energy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.to ? 'text-nae-blue bg-blue-50' : 'text-gray-600 hover:text-nae-blue hover:bg-gray-50'}`}>{link.label}</Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <Link to="/savings-calculator" className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-nae-orange hover:bg-orange-50 rounded-lg transition-colors"><Calculator size={16} /> {t('nav.calculator')}</Link>
            <Link to="/login" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-nae-blue text-white rounded-lg hover:bg-nae-dark-blue transition-colors">{t('nav.access')}</Link>

            {/* Language Selector */}
            <div className="relative">
              <button onClick={() => setLangOpen(!langOpen)} className="p-2 text-gray-500 hover:text-nae-blue rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1">
                <Globe size={18} /><span className="text-sm">{flags[i18n.language] || '🇪🇸'}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 py-1 min-w-[120px]">
                  {langs.map(l => (
                    <button key={l} onClick={() => { i18n.changeLanguage(l); setLangOpen(false); }} className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 ${i18n.language === l ? 'text-nae-blue font-medium' : 'text-gray-600'}`}>
                      <span>{flags[l]}</span><span>{l === 'es' ? 'Español' : l === 'en' ? 'English' : l === 'pt' ? 'Português' : '中文'}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t shadow-lg">
          <div className="max-w-content mx-auto px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium ${location.pathname === link.to ? 'text-nae-blue bg-blue-50' : 'text-gray-600 hover:bg-gray-50'}`}>{link.label}</Link>
            ))}
            <Link to="/savings-calculator" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium text-nae-orange hover:bg-orange-50 rounded-lg">{t('nav.calculator')}</Link>
            <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm font-medium bg-nae-blue text-white rounded-lg text-center">{t('nav.access')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
