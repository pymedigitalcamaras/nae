import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0D2B6B] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold">NAE</h3>
            <p className="mb-4 text-sm text-blue-200">New AGE Energy — Fabricante profesional de bombas de calor. Tecnología de China para Latinoamérica.</p>
            <p className="text-xs text-blue-300">© {year} NAE. Todos los derechos reservados.</p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Productos</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="/#/products" className="hover:text-white">Residencial</a></li>
              <li><a href="/#/products" className="hover:text-white">Comercial</a></li>
              <li><a href="/#/products" className="hover:text-white">Especializada</a></li>
              <li><a href="/#/products" className="hover:text-white">Accesorios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contacto</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Shenzhen, China / Santiago, Chile</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@nae-energy.com</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +56 9 9011 7784</li>
              <li><a href="https://wa.me/56990117784" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Enlaces</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><a href="/#/services" className="hover:text-white">Servicios</a></li>
              <li><a href="/#/about" className="hover:text-white">Nosotros</a></li>
              <li><a href="/#/pricing" className="hover:text-white">Precios</a></li>
              <li><a href="/#/oem" className="hover:text-white">OEM</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
