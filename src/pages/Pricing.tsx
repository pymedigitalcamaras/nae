import { products } from '../data';
import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 font-heading">Tarifas Mayoristas</h1>
          <p className="text-blue-100">Precios exclusivos para instaladores autorizados NAE</p>
        </div>
      </section>

      <section className="py-12 bg-nae-grey">
        <div className="max-w-5xl mx-auto px-4">
          {/* Alert */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 flex items-start gap-3">
            <Lock size={20} className="text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800">Acceso Restringido</h3>
              <p className="text-yellow-700 text-sm">Esta página es exclusiva para instaladores registrados y aprobados por NAE. Si eres instalador profesional, <Link to="/register" className="underline">regístrate aquí</Link>.</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-nae-blue text-white">
                    <th className="text-left p-4 font-semibold">Producto</th>
                    <th className="text-left p-4 font-semibold">Categoría</th>
                    <th className="text-left p-4 font-semibold">Potencia</th>
                    <th className="text-left p-4 font-semibold">MOQ</th>
                    <th className="text-right p-4 font-semibold">Precio FOB (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p, i) => (
                    <tr key={p.id} className={`border-b ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                      <td className="p-4 font-medium">{p.emoji} {p.name}</td>
                      <td className="p-4"><span className={`${p.badgeBg} text-white px-2 py-0.5 rounded-full text-xs`}>{p.category}</span></td>
                      <td className="p-4">{p.power}</td>
                      <td className="p-4">{p.moq}</td>
                      <td className="p-4 text-right font-bold text-nae-orange">{p.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">* Precios FOB Shenzhen en USD. Sujetos a cambio sin previo aviso. MOQ = Cantidad mínima de pedido.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">¿Quieres acceder a estos precios?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register" className="btn-primary">Solicitar Acceso</Link>
            <Link to="/contact" className="btn-outline">Contactar con Ventas</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
