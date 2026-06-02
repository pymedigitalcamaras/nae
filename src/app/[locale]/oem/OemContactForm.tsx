"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const countries = [
  "México",
  "Colombia",
  "Argentina",
  "Chile",
  "Perú",
  "Ecuador",
  "Uruguay",
  "Paraguay",
  "Bolivia",
  "Costa Rica",
  "Panamá",
  "República Dominicana",
  "Guatemala",
  "Venezuela",
  "Brasil",
  "Otro",
];

const productTypes = [
  "Bomba de calor aire-agua (monobloc)",
  "Bomba de calor aire-agua (split)",
  "Bomba de calor para piscinas",
  "Bomba de calor para ACS (agua caliente sanitaria)",
  "Bomba de calor comercial/industrial",
  "Multiproducto",
  "Otro (especificar en mensaje)",
];

export function OemContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    pais: "",
    email: "",
    telefono: "",
    tipoProducto: "",
    volumen: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-nae-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-nae-success" />
        </div>
        <h3 className="font-space-grotesk font-medium text-xl text-nae-dark mb-2">
          ¡Solicitud Recibida!
        </h3>
        <p className="text-nae-dark/65 leading-relaxed max-w-md mx-auto">
          Gracias, <strong>{formData.nombre}</strong>. Nuestro equipo comercial
          OEM te contactará en menos de 48 horas con una propuesta personalizada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Nombre */}
        <div>
          <label
            htmlFor="oem-nombre"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Nombre completo <span className="text-nae-error">*</span>
          </label>
          <input
            type="text"
            id="oem-nombre"
            name="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all"
            placeholder="Tu nombre"
          />
        </div>

        {/* Empresa */}
        <div>
          <label
            htmlFor="oem-empresa"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Empresa <span className="text-nae-error">*</span>
          </label>
          <input
            type="text"
            id="oem-empresa"
            name="empresa"
            required
            value={formData.empresa}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all"
            placeholder="Nombre de tu empresa"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* País */}
        <div>
          <label
            htmlFor="oem-pais"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            País <span className="text-nae-error">*</span>
          </label>
          <select
            id="oem-pais"
            name="pais"
            required
            value={formData.pais}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all appearance-none cursor-pointer"
          >
            <option value="">Selecciona tu país</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="oem-email"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Correo electrónico <span className="text-nae-error">*</span>
          </label>
          <input
            type="email"
            id="oem-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Teléfono */}
        <div>
          <label
            htmlFor="oem-telefono"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Teléfono <span className="text-nae-error">*</span>
          </label>
          <input
            type="tel"
            id="oem-telefono"
            name="telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all"
            placeholder="+XX XXX XXX XXXX"
          />
        </div>

        {/* Tipo de producto */}
        <div>
          <label
            htmlFor="oem-tipo"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Tipo de producto <span className="text-nae-error">*</span>
          </label>
          <select
            id="oem-tipo"
            name="tipoProducto"
            required
            value={formData.tipoProducto}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all appearance-none cursor-pointer"
          >
            <option value="">Selecciona un tipo</option>
            {productTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Volumen estimado mensual */}
      <div>
        <label
          htmlFor="oem-volumen"
          className="block text-sm font-medium text-nae-dark mb-1.5"
        >
          Volumen estimado mensual (unidades)
        </label>
        <input
          type="text"
          id="oem-volumen"
          name="volumen"
          value={formData.volumen}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all"
          placeholder="Ej: 500 unidades/mes"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="oem-mensaje"
          className="block text-sm font-medium text-nae-dark mb-1.5"
        >
          Mensaje / Requisitos adicionales
        </label>
        <textarea
          id="oem-mensaje"
          name="mensaje"
          rows={4}
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all resize-none"
          placeholder="Describe tus requisitos específicos: especificaciones técnicas, personalización de marca, empaque, etc."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="bg-nae-orange text-white px-8 py-4 rounded-button font-medium hover:bg-nae-dark-orange transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando solicitud...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Solicitar Cotización OEM
          </>
        )}
      </button>
    </form>
  );
}
