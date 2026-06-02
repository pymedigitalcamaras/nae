"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { countries } from "@/lib/data";
import { Tag, Settings, FileCheck, Factory, Users, Truck } from "lucide-react";

export default function OemPage() {
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", country: "", email: "", phone: "", project: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const supabase = (await import("@/lib/supabase")).supabase;
      await supabase.from("leads").insert({ ...formData, source: "oem" });
    } catch { /* ok */ }
    setSubmitted(true);
  };

  const benefits = [
    { icon: <Tag size={24} />, title: "Marca propia", desc: "Lanza bombas de calor bajo tu propia marca" },
    { icon: <Settings size={24} />, title: "Personalización completa", desc: "Custom specs, colors, branding" },
    { icon: <FileCheck size={24} />, title: "Certificaciones incluidas", desc: "CE, ISO y certificaciones locales" },
    { icon: <Factory size={24} />, title: "Producción a escala", desc: "Desde lotes pequeños hasta producción masiva" },
    { icon: <Users size={24} />, title: "Soporte técnico", desc: "Capacitación y soporte técnico continuo" },
    { icon: <Truck size={24} />, title: "Logística global", desc: "Envío a cualquier puerto del mundo" },
  ];

  const steps = [
    { num: "1", title: "Consulta", desc: "Comparte tus requerimientos y mercado objetivo" },
    { num: "2", title: "Propuesta", desc: "Diseñamos y cotizamos tu producto a medida" },
    { num: "3", title: "Producción", desc: "Manufactura con tu branding" },
    { num: "4", title: "Entrega", desc: "Control de calidad y envío global" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-5xl text-white mb-4">
            Servicios OEM/ODM
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Tu marca, nuestra tecnología. Fabricamos bombas de calor bajo tu propia marca.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl text-center text-[#1E40AF] mb-12">
          Beneficios de Marca Propia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center text-[#1E40AF] mb-4">
                {b.icon}
              </div>
              <h3 className="font-medium text-lg text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl text-center text-[#1E40AF] mb-12">
            Proceso de Personalización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-[#F97316] rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-medium text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OEM Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <h3 className="text-xl font-medium text-green-800 mb-2">¡Solicitud enviada!</h3>
              <p className="text-green-600">Te contactaremos para tu proyecto OEM.</p>
              <Link href={`/${locale}`} className="inline-block mt-4 text-[#1E40AF] hover:underline">← Volver al inicio</Link>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-100 p-8">
              <h2 className="font-space-grotesk font-medium text-2xl text-[#1E40AF] mb-6 text-center">
                Solicitar Proyecto OEM
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="name" placeholder="Nombre *" required onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
                  <input type="text" name="company" placeholder="Empresa *" required onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select name="country" required onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none">
                    <option value="">País *</option>
                    {countries.map((c) => <option key={c.code} value={c.name}>{c.name}</option>)}
                  </select>
                  <input type="email" name="email" placeholder="Email *" required onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
                </div>
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
                <textarea name="project" placeholder="Describe tu proyecto *" required rows={4} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none resize-none" />
                <button type="submit" className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
                  Enviar solicitud OEM
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
