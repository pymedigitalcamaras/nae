import { useState } from 'react';
import { Calculator, Leaf, Clock, Wallet, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export default function Savings() {
  const [heatingType, setHeatingType] = useState('');
  const [monthlyCost, setMonthlyCost] = useState('');
  const [sqMeters, setSqMeters] = useState('');
  const [climate, setClimate] = useState('');
  const [results, setResults] = useState<null | {annualSavings:number;co2Reduction:number;paybackMonths:number;tenYear:number}>(null);

  const calculate = () => {
    if (!monthlyCost || !heatingType || !climate) return;
    const monthly = parseFloat(monthlyCost);
    const climateFactor = climate === 'cold' ? 0.65 : climate === 'moderate' ? 0.55 : climate === 'warm' ? 0.45 : 0.5;
    const installCost = sqMeters ? parseFloat(sqMeters) * 12 : 3000;
    const annualSavings = Math.round(monthly * 12 * climateFactor);
    const co2Reduction = Math.round(monthly * 12 * 0.25);
    const paybackMonths = Math.round((installCost / (annualSavings / 12)) * 10) / 10;
    const tenYear = annualSavings * 10 - installCost;
    setResults({ annualSavings, co2Reduction, paybackMonths, tenYear });
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-[#0D2B6B] to-[#1B4DB5] py-16 text-white text-center"><h1 className="text-4xl font-bold">Calculadora de Ahorro</h1><p className="mt-2 text-blue-100">Descubre cuánto puedes ahorrar con una bomba de calor NAE</p></section>
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-xl font-semibold">Datos de tu instalación</h2>
            <div><Label>Tipo de calefacción actual</Label><div className="mt-2 grid grid-cols-3 gap-2">{[{k:'gas',l:'Gas'},{k:'electric',l:'Eléctrico'},{k:'diesel',l:'Diésel'}].map(t => <button key={t.k} onClick={() => setHeatingType(t.k)} className={`rounded-lg border px-3 py-2 text-sm transition-colors ${heatingType === t.k ? 'border-[#1B4DB5] bg-[#1B4DB5] text-white' : 'border-gray-200 hover:border-gray-300'}`}>{t.l}</button>)}</div></div>
            <div><Label>Costo mensual actual (USD)</Label><Input type="number" value={monthlyCost} onChange={e => setMonthlyCost(e.target.value)} placeholder="150" min="0" /></div>
            <div><Label>Metros cuadrados (opcional)</Label><Input type="number" value={sqMeters} onChange={e => setSqMeters(e.target.value)} placeholder="120" min="0" /></div>
            <div><Label>Zona climática</Label><div className="mt-2 grid grid-cols-2 gap-2">{[{k:'cold',l:'Frío (< 0°C)'},{k:'moderate',l:'Templado'},{k:'warm',l:'Cálido'},{k:'tropical',l:'Tropical'}].map(c => <button key={c.k} onClick={() => setClimate(c.k)} className={`rounded-lg border px-3 py-2 text-xs transition-colors ${climate === c.k ? 'border-[#1B4DB5] bg-[#1B4DB5] text-white' : 'border-gray-200 hover:border-gray-300'}`}>{c.l}</button>)}</div></div>
            <Button onClick={calculate} disabled={!heatingType || !monthlyCost || !climate} className="w-full bg-[#E87722] hover:bg-[#D66A1A] disabled:opacity-50"><Calculator className="mr-2 h-4 w-4" /> Calcular ahorro</Button>
          </div>
          <div>
            {results ? <div className="space-y-4">
              <h2 className="text-xl font-semibold">Resultados</h2>
              <Card className="border-green-200 bg-green-50"><CardContent className="flex items-center gap-4 pt-6"><Wallet className="h-10 w-10 text-green-600" /><div><p className="text-sm text-gray-600">Ahorro anual estimado</p><p className="text-3xl font-bold text-green-700">${results.annualSavings.toLocaleString()}</p></div></CardContent></Card>
              <Card><CardContent className="flex items-center gap-4 pt-6"><Leaf className="h-10 w-10 text-emerald-600" /><div><p className="text-sm text-gray-600">Reducción CO₂ / año</p><p className="text-2xl font-bold text-emerald-700">{results.co2Reduction.toLocaleString()} kg</p></div></CardContent></Card>
              <Card><CardContent className="flex items-center gap-4 pt-6"><Clock className="h-10 w-10 text-[#1B4DB5]" /><div><p className="text-sm text-gray-600">Periodo de retorno</p><p className="text-2xl font-bold text-[#1B4DB5]">{results.paybackMonths} meses</p></div></CardContent></Card>
              <Card className="border-blue-200 bg-blue-50"><CardContent className="flex items-center gap-4 pt-6"><TrendingDown className="h-10 w-10 text-blue-600" /><div><p className="text-sm text-gray-600">Ahorro a 10 años (neto)</p><p className="text-2xl font-bold text-blue-700">${results.tenYear.toLocaleString()}</p></div></CardContent></Card>
            </div> : <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-8 text-center text-gray-400"><Calculator className="mb-3 h-12 w-12" /><p>Completa los datos y presiona Calcular</p></div>}
          </div>
        </div>
      </section>
    </div>
  );
}
