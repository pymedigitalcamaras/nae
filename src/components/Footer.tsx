import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-nae-dark text-white">
      <div className="max-w-content mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-nae.png" alt="NAE" className="h-10 w-auto" />
              <div>
                <span className="font-heading font-bold text-lg leading-none">NAE</span>
                <span className="block text-[10px] text-gray-400 leading-none -mt-0.5">New AGE Energy</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">No vendemos máquinas. Vendemos certeza.</p>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">NAE</h4>
            <ul className="space-y-2">
              {[{to:'/products',l:t('nav.products')},{to:'/services',l:t('nav.services')},{to:'/about',l:t('nav.about')},{to:'/oem',l:t('nav.oem')}].map(l=> (
                <li key={l.to}><Link to={l.to} className="text-gray-400 hover:text-white text-sm transition-colors">{l.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">{t('nav.services')}</h4>
            <ul className="space-y-2">
              {[{to:'/contact',l:t('nav.contact')},{to:'/pricing',l:t('nav.products')},{to:'/savings-calculator',l:t('nav.calculator')},{to:'/login',l:t('nav.access')}].map(l=> (
                <li key={l.to}><Link to={l.to} className="text-gray-400 hover:text-white text-sm transition-colors">{l.l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">{t('nav.contact')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 ventas@nae-energy.com</li>
              <li>📱 WhatsApp: +56 9 9011 7784</li>
              <li>📍 Shenzhen, China</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">{t('footer.rights')}</div>
      </div>
    </footer>
  );
}
