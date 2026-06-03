import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fuelTypes, climateZones } from '../data';

export default function SavingsCalculator() {
  const { t } = useTranslation();
  const [fuel, setFuel] = useState(0);
  const [cost, setCost] = useState(200);
  const [sqm, setSqm] = useState(120);
  const [zone, setZone] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const f = fuelTypes[fuel];
  const z = climateZones[zone];
  const hpCost = (cost * f.cost) / (z.cop * 0.15);
  const monthlySave = Math.max(0, cost - hpCost);
  const annualSave = monthlySave * 12;
  const co2Current = (cost / f.cost) * f.emission * 12;
  const co2Reduction = co2Current * 0.7;

  const recommend = sqm < 80 ? 'Bomba de Calor R290 Monobloc 8kW Compact' : sqm < 150 ? 'Bomba de Calor R290 Monobloc 12kW' : sqm < 250 ? 'Bomba de Calor R290 Monobloc 20kW' : 'Bomba Monobloc Comercial 30kW';

  return (
    <div>
      <section className="bg-gradient-to-br from-nae-dark-blue to-nae-blue py-20">
        <div className="max-w-content mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 font-heading">{t('calculator.title')}</h1>
          <p className="text-blue-100">Descubre cuánto puedes ahorrar con una bomba de calor NAE</p>
        </div>
      </section>
      <section className="py-16 bg-nae-grey">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-xl font-bold mb-6">Datos de tu instalación actual</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('calculator.fuelType')}</label>
                <select className="input-field" value={fuel} onChange={e => { setFuel(Number(e.target.value)); setShowResults(false); }}>
                  {fuelTypes.map((ft, i) => <option key={i} value={i}>{ft.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('calculator.monthlyCost')} (USD)</label>
                <input type="number" className="input-field" value={cost} onChange={e => { setCost(Number(e.target.value)); setShowResults(false); }} min={10} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('calculator.sqm')}</label>
                <input type="number" className="input-field" value={sqm} onChange={e => { setSqm(Number(e.target.value)); setShowResults(false); }} min={20} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t('calculator.climate')}</label>
                <select className="input-field" value={zone} onChange={e => { setZone(Number(e.target.value)); setShowResults(false); }}>
                  {climateZones.map((cz, i) => <option key={i} value={i}>{cz.name} (COP {cz.cop})</option>)}
                </select>
              </div>
              <button onClick={() => setShowResults(true)} className="w-full btn-primary">{t('calculator.calculate')}</button>
            </div>
          </div>

          {showResults && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-green-600 mb-1">{t('calculator.monthlySave')}</p>
                  <p className="text-3xl font-bold text-green-700">${monthlySave.toFixed(0)}</p>
                  <p className="text-xs text-green-500">USD/mes</p>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-blue-600 mb-1">{t('calculator.annualSave')}</p>
                  <p className="text-3xl font-bold text-blue-700">${annualSave.toFixed(0)}</p>
                  <p className="text-xs text-blue-500">USD/año</p>
                </div>
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-6 text-center">
                  <p className="text-sm text-emerald-600 mb-1">{t('calculator.co2')}</p>
                  <p className="text-3xl font-bold text-emerald-700">{co2Reduction.toFixed(0)}</p>
                  <p className="text-xs text-emerald-500">kg/año</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-bold mb-4">Comparativa</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b"><th className="text-left p-2">Concepto</th><th className="text-right p-2">{f.name}</th><th className="text-right p-2 text-nae-blue">Bomba NAE</th></tr></thead>
                    <tbody>
                      <tr className="border-b"><td className="p-2">Costo mensual</td><td className="text-right p-2">${cost}</td><td className="text-right p-2 font-semibold text-nae-blue">${hpCost.toFixed(0)}</td></tr>
                      <tr className="border-b"><td className="p-2">Costo anual</td><td className="text-right p-2">${(cost * 12).toFixed(0)}</td><td className="text-right p-2 font-semibold text-nae-blue">${(hpCost * 12).toFixed(0)}</td></tr>
                      <tr className="border-b"><td className="p-2">Eficiencia</td><td className="text-right p-2">{Math.round(f.eff * 100)}%</td><td className="text-right p-2 font-semibold text-nae-blue">COP {z.cop}</td></tr>
                      <tr><td className="p-2">Emisiones CO₂</td><td className="text-right p-2">{co2Current.toFixed(0)} kg/año</td><td className="text-right p-2 font-semibold text-nae-blue">{(co2Current * 0.3).toFixed(0)} kg/año</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

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
