"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function CalculatorPage() {
  const locale = useLocale();
  const [result, setResult] = useState<null | { monthlySavings: number; annualSavings: number; co2Reduction: number; currentCost: number; newCost: number }>(null);

  const [inputs, setInputs] = useState({
    fuelType: "gas-natural",
    monthlyCost: "",
    squareMeters: "",
    climateZone: "templado",
  });

  const fuelFactors: Record<string, number> = {
    "gas-natural": 0.65,
    "gas-lp": 0.60,
    "diesel": 0.55,
    "lena": 0.50,
    "electric": 0.40,
  };

  const copByZone: Record<string, number> = {
    "templado": 4.0,
    "frio": 3.2,
    "muy-frio": 2.5,
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    const monthlyCost = parseFloat(inputs.monthlyCost) || 0;
    const currentEfficiency = fuelFactors[inputs.fuelType] || 0.65;
    const cop = copByZone[inputs.climateZone] || 3.5;
    const heatPumpEfficiency = (cop / 3.5) * 0.9;
    const savingsRatio = 1 - currentEfficiency / (heatPumpEfficiency * 1.8);
    const monthlySavings = monthlyCost * Math.max(0, savingsRatio);
    const newCost = monthlyCost - monthlySavings;
    const co2Reduction = Math.max(0, (1 - currentEfficiency / (heatPumpEfficiency * 2.0)) * 100);

    setResult({
      monthlySavings,
      annualSavings: monthlySavings * 12,
      co2Reduction,
      currentCost: monthlyCost,
      newCost,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-white mb-4">
            Calculadora de Ahorro
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Descubre cuánto puedes ahorrar con una bomba de calor NAE.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inputs */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h2 className="font-medium text-xl text-gray-900 mb-6">Datos de tu instalación</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de calefacción actual</label>
                <select name="fuelType" value={inputs.fuelType} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none">
                  <option value="gas-natural">Gas Natural</option>
                  <option value="gas-lp">Gas LP (Propano)</option>
                  <option value="diesel">Diesel/Petróleo</option>
                  <option value="lena">Leña</option>
                  <option value="electric">Electricidad resistiva</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Costo mensual actual (USD)</label>
                <input type="number" name="monthlyCost" value={inputs.monthlyCost} onChange={handleChange} placeholder="Ej: 150"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Metros cuadrados</label>
                <input type="number" name="squareMeters" value={inputs.squareMeters} onChange={handleChange} placeholder="Ej: 120"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zona climática</label>
                <select name="climateZone" value={inputs.climateZone} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none">
                  <option value="templado">Templado</option>
                  <option value="frio">Frío</option>
                  <option value="muy-frio">Muy frío</option>
                </select>
              </div>
              <button onClick={calculate}
                className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
                Calcular ahorro
              </button>
            </div>
          </div>

          {/* Results */}
          <div>
            {result ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
                    <p className="text-sm text-gray-500 mb-1">Ahorro mensual</p>
                    <p className="text-2xl font-bold text-[#F97316]">${result.monthlySavings.toFixed(0)}</p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
                    <p className="text-sm text-gray-500 mb-1">Ahorro anual</p>
                    <p className="text-2xl font-bold text-[#1E40AF]">${result.annualSavings.toFixed(0)}</p>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-100 p-6 text-center">
                    <p className="text-sm text-gray-500 mb-1">Reducción CO₂</p>
                    <p className="text-2xl font-bold text-green-600">{result.co2Reduction.toFixed(0)}%</p>
                  </div>
                </div>

                {/* Bar chart comparison */}
                <div className="bg-white rounded-xl border border-gray-100 p-8">
                  <h3 className="font-medium text-lg text-gray-900 mb-6">Comparativa de costos mensuales</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Tu gasto actual</span>
                        <span className="font-medium text-red-500">${result.currentCost.toFixed(0)}</span>
                      </div>
                      <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full transition-all" style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Con bomba de calor NAE</span>
                        <span className="font-medium text-green-600">${result.newCost.toFixed(0)}</span>
                      </div>
                      <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full transition-all"
                          style={{ width: `${(result.newCost / result.currentCost) * 100}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1E40AF]/5 rounded-xl p-6 text-center">
                  <p className="text-gray-700 mb-4">¿Quieres saber más?</p>
                  <Link href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
                    Solicitar cotización →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <p className="text-gray-400">Ingresa tus datos y haz clic en "Calcular ahorro" para ver los resultados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
