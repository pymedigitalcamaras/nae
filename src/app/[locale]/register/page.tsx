"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { countries } from "@/lib/data";

export default function RegisterPage() {
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          company_name: formData.company,
          country: formData.country,
          phone: formData.phone,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-space-grotesk font-medium text-2xl text-gray-900 mb-2">
            Registro exitoso
          </h2>
          <p className="text-gray-600 mb-6">
            Tu cuenta está en revisión. Te contactaremos en 24-48 horas para activar tu acceso a precios mayoristas.
          </p>
          <Link href={`/${locale}`} className="text-[#1E40AF] hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-16 pb-8">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="font-space-grotesk font-medium text-2xl text-[#1E40AF] mb-2">
              Crear Cuenta de Instalador
            </h1>
            <p className="text-gray-500 text-sm">
              Regístrate para acceder a precios mayoristas
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
              <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de empresa *</label>
              <input type="text" name="company" required value={formData.company} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">País *</label>
              <select name="country" required value={formData.country} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none">
                <option value="">Selecciona un país</option>
                {countries.map((c) => (
                  <option key={c.code} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña *</label>
                <input type="password" name="password" required value={formData.password} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirmar contraseña *</label>
                <input type="password" name="confirmPassword" required value={formData.confirmPassword} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] outline-none" />
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] disabled:bg-gray-300 text-white font-medium rounded-lg transition-colors mt-6">
              {loading ? "Creando cuenta..." : "Crear Cuenta"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <Link href={`/${locale}/login`} className="text-[#1E40AF] hover:underline font-medium">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
