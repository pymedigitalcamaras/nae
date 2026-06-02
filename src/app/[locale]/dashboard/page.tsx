"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const locale = useLocale();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const { data } = await supabase.from("profiles").select("*").eq("id", session.user.id).single();
        setProfile(data);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-16">
        <div className="text-gray-400">Cargando...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center max-w-md">
          <h2 className="font-medium text-xl text-gray-900 mb-4">Acceso requerido</h2>
          <p className="text-gray-600 mb-6">Debes iniciar sesión para ver tu panel de control.</p>
          <Link href={`/${locale}/login`} className="inline-flex items-center px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
            Iniciar sesión
          </Link>
        </div>
      </div>
    );
  }

  const role = profile?.role || "pending";
  const roleLabels: Record<string, { label: string; color: string }> = {
    pending: { label: "En Revisión", color: "bg-yellow-100 text-yellow-800" },
    installer: { label: "Instalador Aprobado", color: "bg-green-100 text-green-800" },
    admin: { label: "Administrador", color: "bg-blue-100 text-blue-800" },
  };
  const roleInfo = roleLabels[role] || roleLabels.pending;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-space-grotesk font-medium text-2xl md:text-3xl text-white">
                Panel de Control
              </h1>
              <p className="text-white/70 mt-1">
                Bienvenido, {profile?.full_name || user.email}
              </p>
            </div>
            <span className={`inline-flex px-4 py-2 rounded-full text-sm font-medium ${roleInfo.color} w-fit`}>
              {roleInfo.label}
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-lg text-gray-900 mb-4">Perfil</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Nombre</span>
                <span className="font-medium">{profile?.full_name || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">{user.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Empresa</span>
                <span className="font-medium">{profile?.company_name || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">País</span>
                <span className="font-medium">{profile?.country || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Teléfono</span>
                <span className="font-medium">{profile?.phone || "—"}</span>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-lg text-gray-900 mb-4">Estado de cuenta</h3>
            <div className="space-y-4">
              {role === "pending" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    Tu cuenta está en revisión. Te contactaremos en 24-48h para activar tu acceso a precios mayoristas.
                  </p>
                </div>
              )}
              {role === "installer" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800">
                    Tu cuenta está activa. Tienes acceso a precios mayoristas.
                  </p>
                  <Link href={`/${locale}/pricing`} className="inline-block mt-2 text-sm text-green-700 hover:underline">
                    Ver precios mayoristas →
                  </Link>
                </div>
              )}
              {role === "admin" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">Cuenta administrativa. Acceso completo.</p>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h3 className="font-medium text-lg text-gray-900 mb-4">Acciones rápidas</h3>
            <div className="space-y-3">
              <Link href={`/${locale}/products`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-2xl">🔍</span>
                <span className="text-sm font-medium text-gray-700">Ver productos</span>
              </Link>
              {role !== "pending" && (
                <Link href={`/${locale}/pricing`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-2xl">💰</span>
                  <span className="text-sm font-medium text-gray-700">Ver precios mayoristas</span>
                </Link>
              )}
              <Link href={`/${locale}/contact`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-2xl">📞</span>
                <span className="text-sm font-medium text-gray-700">Contactar soporte</span>
              </Link>
              <Link href={`/${locale}/savings-calculator`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <span className="text-2xl">📊</span>
                <span className="text-sm font-medium text-gray-700">Calculadora de ahorro</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
