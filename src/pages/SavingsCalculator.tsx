import { useState } from 'react';
import { Link } from 'react-router-dom';

const fuelTypes = [
  { name: 'Gas Natural', eff: 0.9, cost: 0.08, emission: 0.2 },
  { name: 'Gas LP', eff: 0.85, cost: 0.12, emission: 0.3 },
  { name: 'Electricidad Resistencia', eff: 1.0, cost: 0.15, emission: 0.25 },
  { name: 'Diésel', eff: 0.8, cost: 0.18, emission: 0.35 },
  { name: 'Carbón', eff: 0.7, cost: 0.05, emission: 0.45 },
];

const climateZones = [
  { name: 'Tropical cálido', cop: 4.8 },
  { name: 'Templado', cop: 4.2 },
  { name: 'Frío', cop: 3.5 },
  { name: 'Muy frío', cop: 3.0 },
];

export default function SavingsCalculator() {
  const [fuel, setFuel] = useState(0);
  const [cost, setCost] = useState(200);
  const [sqm, setSqm] = useState(120);
  const [zone, setZone] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const f = fuelTypes[fuel];
  const z = climateZones[zone];
  const hpCost = (cost * f.cost) / (z.cop * 0.15);
  const monthlySave = cost - hpCost;
  const annualSave = monthlySave * 12;
  const co2Current = (cost / f.cost) * f.emission * 12;
  const co2Reduction = co2Current * 0.7;

  const recommend = sqm < 80 ? 'R290 Monobloc 12kW' : sqm < 150 ? 'R290 Split 16kW' : sqm < 250 ? 'Inverter 20kW' : 'Comercial 30kW';

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 font-heading">Calculadora de Ahorro</h1>
          <p className="text-blue-100">Descubre cuánto puedes ahorrar con una bomba de calor NAE</p>
        </div>
      </section>

      <section className="py-16 bg-nae-grey">
        <div className="max-w-2xl mx-auto px-4">
          {/* Input Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold mb-6">Datos de tu instalación actual</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de combustible actual</label>
                <select className="input-field" value={fuel} onChange={e => { setFuel(Number(e.target.value)); setShowResults(false); }}>
                  {fuelTypes.map((ft, i) => <option key={i} value={i}>{ft.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Costo mensual de calefacción (USD)</label>
                <input type="number" className="input-field" value={cost} onChange={e => { setCost(Number(e.target.value)); setShowResults(false); }} min={10} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Metros cuadrados a climatizar</label>
                <input type="number" className="input-field" value={sqm} onChange={e => { setSqm(Number(e.target.value)); setShowResults(false); }} min={20} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Zona climática</label>
                <select className="input-field" value={zone} onChange={e => { setZone(Number(e.target.value)); setShowResults(false); }}>
                  {climateZones.map((cz, i) => <option key={i} value={i}>{cz.name} (COP {cz.cop})</option>)}
                </select>
              </div>
              <button onClick={() => setShowResults(true)} className="w-full btn-primary">Calcular Ahorro</button>
            </div>
          </div>

          {/* Results */}
          {showResults && (
            <div className="space-y-8">
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-green-600 mb-1">Ahorro Mensual</p>
                  <p className="text-3xl font-bold text-green-700">${monthlySave.toFixed(0)}</p>
                  <p className="text-xs text-green-500">USD/mes</p>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-blue-600 mb-1">Ahorro Anual</p>
                  <p className="text-3xl font-bold text-blue-700">${annualSave.toFixed(0)}</p>
                  <p className="text-xs text-blue-500">USD/año</p>
                </div>
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-emerald-600 mb-1">Reducción CO₂</p>
                  <p className="text-3xl font-bold text-emerald-700">{co2Reduction.toFixed(0)}</p>
                  <p className="text-xs text-emerald-500">kg/año</p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold mb-4">Comparativa</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b"><th className="text-left p-2">Concepto</th><th className="text-right p-2">{f.name}</th><th className="text-right p-2 text-nae-blue">Bomba NAE</th></tr></thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">Costo mensual</td><td className="text-right p-2">${cost}</td><td className="text-right p-2 font-semibold text-nae-blue">${hpCost.toFixed(0)}</td></tr>
                      <tr className="border-b"><td className="p-2">Costo anual</td><td className="text-right p-2">${(cost * 12).toFixed(0)}</td><td className="text-right p-2 font-semibold text-nae-blue">${(hpCost * 12).toFixed(0)}</td></tr>
                      <tr className="border-b"><td className="p-2">Eficiencia</td><td className="text-right p-2">{f.eff * 100}%</td><td className="text-right p-2 font-semibold text-nae-blue">COP {z.cop}</td></tr>
                      <tr><td className="p-2">Emisiones CO₂</td><td className="text-right p-2">{co2Current.toFixed(0)} kg/año</td><td className="text-right p-2 font-semibold text-nae-blue">{(co2Current * 0.3).toFixed(0)} kg/año</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Product Recommendation */}
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold mb-2">Producto recomendado para {sqm}m²</h3>
                <p className="text-nae-blue font-semibold text-lg mb-4">{recommend}</p>
                <Link to="/contact" className="btn-primary">Solicitar Cotización Personalizada</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
