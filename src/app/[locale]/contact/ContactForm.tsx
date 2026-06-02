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

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    pais: "",
    email: "",
    telefono: "",
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
      <div className="card p-10 text-center bg-nae-success/5 border border-nae-success/20">
        <div className="w-16 h-16 bg-nae-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-nae-success" />
        </div>
        <h3 className="font-space-grotesk font-medium text-xl text-nae-dark mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-nae-dark/65 leading-relaxed max-w-md mx-auto">
          Gracias por contactarnos, <strong>{formData.nombre}</strong>. Nuestro
          equipo revisará tu mensaje y te responderá en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Nombre completo */}
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Nombre completo <span className="text-nae-error">*</span>
          </label>
          <input
            type="text"
            id="nombre"
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
            htmlFor="empresa"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
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
            htmlFor="pais"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            País <span className="text-nae-error">*</span>
          </label>
          <select
            id="pais"
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

        {/* Correo electrónico */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-nae-dark mb-1.5"
          >
            Correo electrónico <span className="text-nae-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all"
            placeholder="tu@email.com"
          />
        </div>
      </div>

      {/* Teléfono */}
      <div>
        <label
          htmlFor="telefono"
          className="block text-sm font-medium text-nae-dark mb-1.5"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all"
          placeholder="+XX XXX XXX XXXX"
        />
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-medium text-nae-dark mb-1.5"
        >
          Mensaje <span className="text-nae-error">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          value={formData.mensaje}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-input text-nae-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nae-blue/30 focus:border-nae-blue transition-all resize-none"
          placeholder="Cuéntanos sobre tu proyecto o consulta..."
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
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Enviar Mensaje
          </>
        )}
      </button>
    </form>
  );
}
