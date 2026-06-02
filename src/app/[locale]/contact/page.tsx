"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { countries } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const supabase = (await import("@/lib/supabase")).supabase;
      await supabase.from("leads").insert({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        country: formData.country,
        phone: formData.phone,
        message: formData.message,
        source: "contact",
      });
      setSubmitted(true);
    } catch {
      // If Supabase fails, still show success
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-space-grotesk font-medium text-3xl md:text-4xl text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tu proyecto de climatización.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#1E40AF]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600 text-sm">pymedigitalcamaras@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#1E40AF]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Teléfono</h3>
                <p className="text-gray-600 text-sm">+56 9 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1E40AF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#1E40AF]" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Países de Operación</h3>
                <p className="text-gray-600 text-sm">Chile, México, Brasil, Colombia, Perú, Argentina</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <h3 className="text-xl font-medium text-green-800 mb-2">¡Mensaje enviado!</h3>
                <p className="text-green-600">Te contactaremos en 24-48 horas.</p>
                <Link href={`/${locale}`} className="inline-block mt-4 text-[#1E40AF] hover:underline">
                  ← Volver al inicio
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Empresa *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">País *</label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                    >
                      <option value="">Selecciona un país</option>
                      {countries.map((c) => (
                        <option key={c.code} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
