import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Productos' },
  { to: '/about', label: 'Nosotros' },
  { to: '/oem', label: 'OEM' },
  { to: '/contact', label: 'Contacto' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-content">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-nae-blue flex items-center justify-center">
              <span className="text-white font-bold text-lg font-heading">N</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-nae-dark leading-none">NAE</span>
              <span className="block text-[10px] text-gray-500 leading-none -mt-0.5">New AGE Energy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-nae-blue bg-blue-50'
                    : 'text-gray-600 hover:text-nae-blue hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              to="/savings-calculator"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-nae-orange hover:bg-orange-50 rounded-lg transition-colors"
            >
              Calculadora
            </Link>
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-nae-blue text-white rounded-lg hover:bg-nae-dark-blue transition-colors"
            >
              Acceso Instalador
            </Link>
            <button className="p-2 text-gray-500 hover:text-nae-blue rounded-lg hover:bg-gray-50 transition-colors">
              <Globe size={18} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="container-content py-4 space-y-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-nae-blue bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/savings-calculator"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-nae-orange hover:bg-orange-50 rounded-lg"
            >
              Calculadora
            </Link>
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium bg-nae-blue text-white rounded-lg text-center mt-2"
            >
              Acceso Instalador
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
