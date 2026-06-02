"use client";

import { useState, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";

/* ─── Data ─── */
interface Fuel {
  id: string;
  label: string;
  efficiency: number;
  costPerKwh: number;
  emissionFactor: number;
  co2ReductionPercent: number;
}

interface ClimateZone {
  id: string;
  label: string;
  cop: number;
}

const FUELS: Fuel[] = [
  { id: "gas_natural", label: "Gas Natural", efficiency: 0.9, costPerKwh: 0.08, emissionFactor: 0.2, co2ReductionPercent: 30 },
  { id: "gas_lp", label: "Gas LP", efficiency: 0.85, costPerKwh: 0.12, emissionFactor: 0.3, co2ReductionPercent: 45 },
  { id: "electricidad", label: "Electricidad Resistencia", efficiency: 1.0, costPerKwh: 0.15, emissionFactor: 0.25, co2ReductionPercent: 25 },
  { id: "diesel", label: "Di\u00e9sel", efficiency: 0.8, costPerKwh: 0.18, emissionFactor: 0.35, co2ReductionPercent: 55 },
  { id: "carbon", label: "Carb\u00f3n", efficiency: 0.7, costPerKwh: 0.05, emissionFactor: 0.45, co2ReductionPercent: 65 },
];

const CLIMATE_ZONES: ClimateZone[] = [
  { id: "tropical", label: "Tropical c\u00e1lido", cop: 4.8 },
  { id: "templado", label: "Templado", cop: 4.2 },
  { id: "frio", label: "Fr\u00edo", cop: 3.5 },
  { id: "muy_frio", label: "Muy fr\u00edo", cop: 3.0 },
];

const ELEC_COST_PER_KWH = 0.15;

/* ─── Results type ─── */
interface Results {
  monthlySavings: number;
  annualSavings: number;
  co2ReductionKg: number;
  currentMonthlyCost: number;
  heatPumpMonthlyCost: number;
  currentAnnualCost: number;
  heatPumpAnnualCost: number;
  currentEfficiency: number;
  heatPumpCop: number;
  currentEmissions: number;
  heatPumpEmissions: number;
  fuelLabel: string;
  co2ReductionPercent: number;
  recommendedProduct: { name: string; link: string };
}

/* ─── Select component ─── */
function SelectField({
  id,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { id: string; label: string }[];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-nae-dark mb-2 font-inter">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg font-inter text-nae-dark bg-white focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent transition-all"
      >
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

/* ─── Number input component ─── */
function NumberField({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  min,
  max,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-nae-dark mb-2 font-inter">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-inter text-sm">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          min={min ?? 0}
          max={max}
          value={value}
          onChange={(e) => onChange(Math.max(min ?? 0, Number(e.target.value)))}
          className={`w-full ${prefix ? "pl-8" : "px-4"} ${suffix ? "pr-12" : "pr-4"} py-3 border border-gray-300 rounded-lg font-inter text-nae-dark bg-white focus:outline-none focus:ring-2 focus:ring-nae-blue focus:border-transparent transition-all`}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-inter text-sm">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Result card ─── */
function ResultCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: "green" | "orange" | "blue";
}) {
  const colorClasses = {
    green: "bg-green-50 border-green-200 text-green-700",
    orange: "bg-orange-50 border-orange-200 text-orange-700",
    blue: "bg-blue-50 border-blue-200 text-blue-700",
  };

  return (
    <div className={`${colorClasses[color]} border rounded-xl p-6 text-center`}>
      <p className="font-inter text-sm text-gray-600 mb-2">{label}</p>
      <p className="font-space-grotesk text-3xl font-bold">{value}</p>
    </div>
  );
}

/* ─── Main calculator client component ─── */
export default function CalculatorClient() {
  const locale = useLocale();
  const t = useTranslations("savingsCalculator");

  const [fuelId, setFuelId] = useState<string>(FUELS[0].id);
  const [monthlyCost, setMonthlyCost] = useState<number>(200);
  const [squareMeters, setSquareMeters] = useState<number>(120);
  const [zoneId, setZoneId] = useState<string>(CLIMATE_ZONES[0].id);
  const [results, setResults] = useState<Results | null>(null);
  const [animated, setAnimated] = useState(false);

  /* Get recommended product based on m2 */
  const getRecommendedProduct = useCallback(
    (m2: number) => {
      if (m2 < 80) return { name: "R290 Monobloc 12kW", link: `/${locale}/products/r290-monobloc-12kw` };
      if (m2 <= 150) return { name: "R290 Split 16kW", link: `/${locale}/products/r290-split-16kw` };
      if (m2 <= 250) return { name: "Inverter 20kW", link: `/${locale}/products/inverter-20kw` };
      return { name: "Comercial 30kW", link: `/${locale}/products/comercial-30kw` };
    },
    [locale]
  );

  const handleCalculate = useCallback(() => {
    const fuel = FUELS.find((f) => f.id === fuelId) ?? FUELS[0];
    const zone = CLIMATE_ZONES.find((z) => z.id === zoneId) ?? CLIMATE_ZONES[0];

    // Costo mensual de bomba de calor = (costo actual * costo kWh combustible) / (COP * costo kWh electricidad)
    const heatPumpMonthlyCost =
      (monthlyCost * fuel.costPerKwh) / (zone.cop * ELEC_COST_PER_KWH);
    const monthlySavings = Math.max(0, monthlyCost - heatPumpMonthlyCost);
    const annualSavings = monthlySavings * 12;

    // CO₂: (monthlyCost / fuelCostPerKwh) * emissionFactor * 12
    const currentEmissions = (monthlyCost / fuel.costPerKwh) * fuel.emissionFactor * 12;
    const heatPumpEmissions = currentEmissions * 0.3; // 70% less
    const co2ReductionKg = currentEmissions - heatPumpEmissions;

    const recommendedProduct = getRecommendedProduct(squareMeters);

    setResults({
      monthlySavings,
      annualSavings,
      co2ReductionKg,
      currentMonthlyCost: monthlyCost,
      heatPumpMonthlyCost,
      currentAnnualCost: monthlyCost * 12,
      heatPumpAnnualCost: heatPumpMonthlyCost * 12,
      currentEfficiency: fuel.efficiency,
      heatPumpCop: zone.cop,
      currentEmissions,
      heatPumpEmissions,
      fuelLabel: fuel.label,
      co2ReductionPercent: fuel.co2ReductionPercent,
      recommendedProduct,
    });

    // Trigger animation
    setAnimated(false);
    setTimeout(() => setAnimated(true), 50);
  }, [fuelId, monthlyCost, squareMeters, zoneId, getRecommendedProduct]);

  const formatCurrency = (val: number) => {
    return `$${val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatNumber = (val: number) => {
    return val.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  };

  const fuel = FUELS.find((f) => f.id === fuelId) ?? FUELS[0];
  const zone = CLIMATE_ZONES.find((z) => z.id === zoneId) ?? CLIMATE_ZONES[0];

  return (
    <div className="space-y-12">
      {/* ─── Calculator Card ─── */}
      <section className="container-content">
        <div className="max-w-2xl mx-auto bg-white rounded-card shadow-card p-8 md:p-12">
          <h2 className="font-space-grotesk text-2xl font-bold text-nae-dark text-center mb-8">
            Datos de tu sistema actual
          </h2>

          <div className="space-y-6">
            {/* Fuel Type */}
            <SelectField
              id="fuel-type"
              label="Tipo de combustible actual"
              value={fuelId}
              onChange={setFuelId}
              options={FUELS.map((f) => ({ id: f.id, label: f.label }))}
            />

            {/* Monthly Cost */}
            <NumberField
              id="monthly-cost"
              label="Costo mensual de calefacción (USD)"
              value={monthlyCost}
              onChange={setMonthlyCost}
              prefix="$"
              min={1}
            />

            {/* Square Meters */}
            <NumberField
              id="square-meters"
              label="Metros cuadrados a climatizar"
              value={squareMeters}
              onChange={setSquareMeters}
              suffix="m²"
              min={1}
            />

            {/* Climate Zone */}
            <SelectField
              id="climate-zone"
              label="Zona climática"
              value={zoneId}
              onChange={setZoneId}
              options={CLIMATE_ZONES.map((z) => ({ id: z.id, label: z.label }))}
            />

            {/* Calculate Button */}
            <button
              onClick={handleCalculate}
              className="w-full bg-nae-orange text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all text-lg mt-4"
            >
              Calcular Ahorro
            </button>
          </div>
        </div>
      </section>

      {/* ─── Results Section ─── */}
      {results && (
        <section
          className={`container-content transition-all duration-700 ease-out ${
            animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <ResultCard
              label="Ahorro Mensual Estimado"
              value={formatCurrency(results.monthlySavings)}
              color="green"
            />
            <ResultCard
              label="Ahorro Anual"
              value={formatCurrency(results.annualSavings)}
              color="orange"
            />
            <ResultCard
              label={`Reducción de CO₂ (${results.co2ReductionPercent}%)`}
              value={`${formatNumber(results.co2ReductionKg)} kg/año`}
              color="blue"
            />
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-card shadow-card overflow-hidden mb-12">
            <div className="px-6 py-4 bg-nae-dark-blue">
              <h3 className="font-space-grotesk text-xl font-bold text-white text-center">
                Comparativa: Combustible Actual vs Bomba de Calor NAE
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-space-grotesk font-semibold text-nae-dark">
                      Métrica
                    </th>
                    <th className="px-6 py-4 text-center font-space-grotesk font-semibold text-gray-700">
                      {results.fuelLabel} (Actual)
                    </th>
                    <th className="px-6 py-4 text-center font-space-grotesk font-semibold text-nae-blue">
                      Bomba de Calor NAE
                    </th>
                  </tr>
                </thead>
                <tbody className="font-inter">
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-nae-dark font-medium">Costo mensual</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {formatCurrency(results.currentMonthlyCost)}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">
                      {formatCurrency(results.heatPumpMonthlyCost)}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-nae-dark font-medium">Costo anual</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {formatCurrency(results.currentAnnualCost)}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">
                      {formatCurrency(results.heatPumpAnnualCost)}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-nae-dark font-medium">Eficiencia / COP</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {results.currentEfficiency.toFixed(2)} (eficiencia)
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">
                      {results.heatPumpCop.toFixed(1)} COP
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-nae-dark font-medium">Emisiones CO₂ (kg/año)</td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      {formatNumber(results.currentEmissions)}
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">
                      {formatNumber(results.heatPumpEmissions)} (70% menos)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Product */}
          <div className="bg-white rounded-card shadow-card p-8 md:p-10 mb-12 text-center">
            <h3 className="font-space-grotesk text-xl font-bold text-nae-dark mb-4">
              Producto Recomendado
            </h3>
            <p className="font-inter text-gray-600 mb-6">
              Basado en <strong className="text-nae-dark">{squareMeters} m²</strong> de superficie a climatizar
            </p>
            <div className="inline-block bg-nae-grey rounded-xl px-8 py-6 mb-6">
              <p className="font-space-grotesk text-2xl font-bold text-nae-blue">
                {results.recommendedProduct.name}
              </p>
            </div>
            <div>
              <a
                href={results.recommendedProduct.link}
                className="inline-block bg-nae-blue text-white px-8 py-3 rounded-button font-medium hover:bg-nae-dark-blue transition-all"
              >
                Ver Producto
              </a>
            </div>
          </div>

          {/* ─── CTA ─── */}
          <div className="text-center bg-nae-dark-blue rounded-card p-10 md:p-14">
            <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para empezar a ahorrar?
            </h3>
            <p className="font-inter text-gray-300 mb-8 max-w-xl mx-auto">
              Nuestros especialistas te ayudarán a diseñar la solución perfecta para tu espacio.
            </p>
            <a
              href={`/${locale}/contact`}
              className="inline-block bg-nae-orange text-white px-10 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all text-lg"
            >
              Solicitar Cotización Personalizada
            </a>
          </div>
        </section>
      )}

      {/* ─── Info Section (visible before calculation) ─── */}
      {!results && (
        <section className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-card shadow-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center text-3xl">
                💰
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-nae-dark mb-2">
                Ahorro Garantizado
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Nuestras bombas de calor pueden reducir tu factura de calefacción hasta un 75%.
              </p>
            </div>
            <div className="bg-white rounded-card shadow-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center text-3xl">
                🌱
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-nae-dark mb-2">
                Sostenibilidad
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                Reduce las emisiones de CO₂ de tu empresa hasta un 70% con energía renovable.
              </p>
            </div>
            <div className="bg-white rounded-card shadow-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 rounded-full flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="font-space-grotesk text-lg font-bold text-nae-dark mb-2">
                Alta Eficiencia
              </h3>
              <p className="font-inter text-gray-600 text-sm">
                COP de hasta 4.8x, lo que significa más calor con menos energía consumida.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
