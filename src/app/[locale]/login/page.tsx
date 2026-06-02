"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const locale = useLocale();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message === "Invalid login credentials" ? "Email o contraseña incorrectos" : error.message);
      setLoading(false);
    } else {
      router.push(`/${locale}/dashboard`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="font-space-grotesk font-medium text-2xl text-[#1E40AF] mb-2">
              Acceso para Instaladores
            </h1>
            <p className="text-gray-500 text-sm">
              Inicia sesión para acceder a precios mayoristas
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-6 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#F97316] hover:bg-[#EA580C] disabled:bg-gray-300 text-white font-medium rounded-lg transition-colors"
            >
              {loading ? "Iniciando..." : "Iniciar Sesión"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            ¿No tienes cuenta?{" "}
            <Link href={`/${locale}/register`} className="text-[#1E40AF] hover:underline font-medium">
              Regístrate aquí
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
