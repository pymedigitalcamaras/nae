import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-nae-dark text-white">
      <div className="container-content py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-nae-orange flex items-center justify-center">
                <span className="text-white font-bold font-heading">N</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg leading-none">NAE</span>
                <span className="block text-[10px] text-gray-400 leading-none -mt-0.5">New AGE Energy</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              No vendemos máquinas. Vendemos certeza. Tecnología de climatización para Latinoamérica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Enlaces</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/products', label: 'Productos' },
                { to: '/about', label: 'Nosotros' },
                { to: '/oem', label: 'OEM' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Servicios</h4>
            <ul className="space-y-2">
              {[
                { to: '/contact', label: 'Contacto' },
                { to: '/pricing', label: 'Tarifas Mayoristas' },
                { to: '/savings-calculator', label: 'Calculadora' },
                { to: '/login', label: 'Acceso Instalador' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 ventas@nae-energy.com</li>
              <li>📱 +86-755-XXXX-XXXX</li>
              <li>📍 Shenzhen, China</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2025 NAE — New AGE Energy. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
