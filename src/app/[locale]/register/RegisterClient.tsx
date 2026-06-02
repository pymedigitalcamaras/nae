"use client";

import { useState } from "react";
import Link from "next/link";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  country?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: string;
}

type PasswordStrength = "weak" | "medium" | "strong" | "";

const countries = [
  "Mexico",
  "Colombia",
  "Argentina",
  "Chile",
  "Peru",
  "Ecuador",
  "Uruguay",
  "Paraguay",
  "Bolivia",
  "Costa Rica",
  "Panama",
  "Republica Dominicana",
  "Guatemala",
  "Venezuela",
  "Brasil",
  "Otro",
];

function getPasswordStrength(pw: string): PasswordStrength {
  if (!pw) return "";
  let score = 0;
  if (pw.length >= 8) score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;

  if (score <= 2) return "weak";
  if (score <= 4) return "medium";
  return "strong";
}

function strengthLabel(strength: PasswordStrength): string {
  if (strength === "weak") return "Debil";
  if (strength === "medium") return "Media";
  if (strength === "strong") return "Fuerte";
  return "";
}

function strengthColor(strength: PasswordStrength): string {
  if (strength === "weak") return "bg-red-500";
  if (strength === "medium") return "bg-yellow-500";
  if (strength === "strong") return "bg-green-500";
  return "bg-gray-200";
}

export default function RegisterClient() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const strength = getPasswordStrength(form.password);

  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const validatePhone = (val: string) => /^[\d\s\-+()]{7,20}$/.test(val);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "El nombre completo es obligatorio";
    if (!form.companyName.trim()) newErrors.companyName = "El nombre de empresa es obligatorio";

    if (!form.email.trim()) {
      newErrors.email = "El correo electronico es obligatorio";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Ingresa un correo electronico valido";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "El telefono es obligatorio";
    } else if (!validatePhone(form.phone)) {
      newErrors.phone = "Ingresa un numero de telefono valido";
    }

    if (!form.country) newErrors.country = "Selecciona un pais";

    if (!form.password) {
      newErrors.password = "La contrasena es obligatoria";
    } else if (form.password.length < 6) {
      newErrors.password = "La contrasena debe tener al menos 6 caracteres";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu contrasena";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Las contrasenas no coinciden";
    }

    if (!form.acceptTerms) {
      newErrors.acceptTerms = "Debes aceptar los terminos y condiciones";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4">
        <div className="w-full max-w-2xl bg-white rounded-card shadow-card p-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-nae-dark font-space-grotesk mb-3">
            Registro exitoso!
          </h2>
          <p className="text-gray-600 font-inter mb-2 max-w-md mx-auto">
            Tu cuenta esta pendiente de aprobacion. Recibiras un correo cuando sea aprobada.
          </p>
          <div className="mt-8 p-4 bg-blue-50 rounded-xl inline-block">
            <p className="text-sm text-blue-700 font-inter">
              Revisa tu bandeja de entrada en{" "}
              <span className="font-medium">{form.email}</span>
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/login"
              className="inline-block bg-nae-orange text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all font-inter shadow-lg shadow-orange-200"
            >
              Ir al Inicio de Sesion
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-nae-grey px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-card shadow-card p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-nae-blue to-nae-dark-blue rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-nae-dark font-space-grotesk mb-1">
            Registro de Instalador
          </h1>
          <p className="text-gray-500 font-inter text-sm">
            Unete a la red de instaladores profesionales NAE
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1: Full Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-nae-dark mb-1.5 font-inter">
                Nombre completo
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="Juan Perez"
                className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 focus:ring-nae-orange/30 ${
                  errors.fullName
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50 focus:border-nae-orange"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500 font-inter">
                  {errors.fullName}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-nae-dark mb-1.5 font-inter">
                Nombre de empresa
              </label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                placeholder="ClimaSoluciones MX"
                className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 focus:ring-nae-orange/30 ${
                  errors.companyName
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50 focus:border-nae-orange"
                }`}
              />
              {errors.companyName && (
                <p className="mt-1 text-xs text-red-500 font-inter">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-nae-dark mb-1.5 font-inter">
                Correo electronico
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="tu@empresa.com"
                className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 focus:ring-nae-orange/30 ${
                  errors.email
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50 focus:border-nae-orange"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500 font-inter">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-nae-dark mb-1.5 font-inter">
                Telefono
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+52-55-XXXX-XXXX"
                className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 focus:ring-nae-orange/30 ${
                  errors.phone
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50 focus:border-nae-orange"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500 font-inter">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-nae-dark mb-1.5 font-inter">
              Pais
            </label>
            <select
              value={form.country}
              onChange={(e) => updateField("country", e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 focus:ring-nae-orange/30 appearance-none bg-no-repeat bg-right-3 ${
                errors.country
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200 bg-gray-50 focus:border-nae-orange"
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%236B7280' viewBox='0 0 16 16'%3E%3Cpath d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
                backgroundPosition: "right 12px center",
                paddingRight: "40px",
              }}
            >
              <option value="">Selecciona tu pais</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-xs text-red-500 font-inter">
                {errors.country}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-nae-dark mb-1.5 font-inter">
              Contrasena
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => updateField("password", e.target.value)}
                placeholder="Crea una contrasena segura"
                className={`w-full px-4 py-3 pr-12 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 focus:ring-nae-orange/30 ${
                  errors.password
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50 focus:border-nae-orange"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {form.password && (
              <div className="mt-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${strengthColor(strength)}`}
                      style={{
                        width:
                          strength === "weak"
                            ? "33%"
                            : strength === "medium"
                              ? "66%"
                              : "100%",
                      }}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium font-inter ${
                      strength === "weak"
                        ? "text-red-500"
                        : strength === "medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                    }`}
                  >
                    {strengthLabel(strength)}
                  </span>
                </div>
                <p className="text-xs text-gray-400 font-inter">
                  Minimo 8 caracteres, incluye mayusculas, numeros y simbolos
                </p>
              </div>
            )}
            {errors.password && (
              <p className="mt-1 text-xs text-red-500 font-inter">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-nae-dark mb-1.5 font-inter">
              Confirmar contrasena
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(e) => updateField("confirmPassword", e.target.value)}
                placeholder="Repite tu contrasena"
                className={`w-full px-4 py-3 pr-12 rounded-xl border font-inter text-sm transition-all focus:outline-none focus:ring-2 focus:ring-nae-orange/30 ${
                  errors.confirmPassword
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200 bg-gray-50 focus:border-nae-orange"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showConfirmPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500 font-inter">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.acceptTerms}
                onChange={(e) => updateField("acceptTerms", e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded border-gray-300 text-nae-orange focus:ring-nae-orange"
              />
              <span className="text-sm text-gray-600 font-inter leading-relaxed">
                Acepto los{" "}
                <Link
                  href="/terms"
                  className="text-nae-blue hover:underline font-medium"
                >
                  terminos y condiciones
                </Link>{" "}
                y la{" "}
                <Link
                  href="/privacy"
                  className="text-nae-blue hover:underline font-medium"
                >
                  politica de privacidad
                </Link>{" "}
                de NAE
              </span>
            </label>
            {errors.acceptTerms && (
              <p className="mt-1 text-xs text-red-500 font-inter ml-7">
                {errors.acceptTerms}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-nae-orange text-white py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all font-inter shadow-lg shadow-orange-200"
          >
            Crear Cuenta
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-400 font-inter">o</span>
          </div>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-gray-500 font-inter">
          Ya tienes una cuenta?{" "}
          <Link href="/login" className="text-nae-blue font-medium hover:underline">
            Inicia sesion aqui
          </Link>
        </p>
      </div>
    </div>
  );
}
