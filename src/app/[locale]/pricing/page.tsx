"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { products, pricing } from "@/lib/data";
import { supabase } from "@/lib/supabase";

export default function PricingPage() {
  const locale = useLocale();
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

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

  // Not logged in
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-16">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center max-w-md">
          <h2 className="font-medium text-xl text-gray-900 mb-4">Acceso exclusivo</h2>
          <p className="text-gray-600 mb-6">
            Los precios mayoristas están disponibles solo para instaladores y distribuidores registrados.
          </p>
          <div className="flex flex-col gap-3">
            <Link href={`/${locale}/login`} className="inline-flex items-center justify-center px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
              Iniciar sesión
            </Link>
            <Link href={`/${locale}/register`} className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white font-medium rounded-lg transition-colors">
              Registrarse como instalador
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const role = profile?.role || "pending";

  // Logged in but pending
  if (role === "pending") {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center max-w-2xl mx-auto">
            <h2 className="font-medium text-xl text-yellow-900 mb-4">Cuenta en revisión</h2>
            <p className="text-yellow-800 mb-4">
              Tu cuenta está en revisión. Te contactaremos en 24-48h para activar tu acceso a precios mayoristas.
            </p>
            <p className="text-yellow-700 text-sm">
              Si tienes preguntas, escríbenos a <strong>pymedigitalcamaras@gmail.com</strong>
            </p>
            <Link href={`/${locale}/products`} className="inline-block mt-6 text-[#1E40AF] hover:underline">
              Ver productos →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Approved user - show pricing
  const productsWithPricing = products.map((product) => {
    const priceInfo = pricing.find((p) => p.productId === product.id);
    return { ...product, wholesalePrice: priceInfo?.wholesalePrice, moq: priceInfo?.moq };
  }).filter((p) => !filter || p.categorySlug === filter);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <section className="bg-gradient-to-br from-[#1E40AF] to-[#1E3A8A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-space-grotesk font-medium text-3xl text-white mb-2">
            Precios Mayoristas
          </h1>
          <p className="text-white/70">
            Acceso exclusivo para distribuidores e instaladores autorizados.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setFilter("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!filter ? "bg-[#1E40AF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            Todos
          </button>
          {["air-source", "geothermal", "pool-heating", "commercial"].map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === cat ? "bg-[#1E40AF] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {cat === "air-source" ? "Aire-Agua" : cat === "pool-heating" ? "Piscina" : cat === "geothermal" ? "Geotermia" : "Comercial"}
            </button>
          ))}
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Producto</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Categoría</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Descripción</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">Precio USD</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">MOQ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {productsWithPricing.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-[#1E40AF]/10 text-[#1E40AF]">
                        {product.categorySlug}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">{product.shortDescription}</td>
                    <td className="px-6 py-4 text-right font-bold text-[#F97316]">
                      ${product.wholesalePrice?.toLocaleString() || "—"}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">
                      {product.moq || "—"} unids
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Para cotizaciones de volumen o proyectos especiales, contáctanos.
          </p>
          <Link href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium rounded-lg transition-colors">
            Solicitar cotización especial →
          </Link>
        </div>
      </div>
    </div>
  );
}
