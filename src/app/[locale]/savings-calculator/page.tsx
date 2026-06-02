import { setRequestLocale } from "next-intl/server";
import CalculatorClient from "./CalculatorClient";

interface PageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function SavingsCalculatorPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen bg-nae-grey">
      {/* ─── Hero Section ─── */}
      <section className="bg-nae-dark-blue py-20 md:py-28">
        <div className="container-content text-center">
          <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Calculadora de Ahorro
          </h1>
          <p className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre cuánto puedes ahorrar con una bomba de calor NAE
          </p>
        </div>
      </section>

      {/* ─── Calculator (Client Component with full interactivity) ─── */}
      <section className="py-12 md:py-16">
        <CalculatorClient />
      </section>
    </main>
  );
}
