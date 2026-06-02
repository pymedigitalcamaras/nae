"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { MessageCircle, X } from "lucide-react";

// WhatsApp number - Chinese number placeholder (user can change this)
const WHATSAPP_NUMBER = "8613812345678";

// Pre-defined messages by language
const messagesByLocale: Record<string, string> = {
  es: "Hola, me gustaría recibir más información sobre las bombas de calor NAE. Estoy interesado en convertirme en instalador.",
  en: "Hello, I would like to receive more information about NAE heat pumps. I am interested in becoming an installer.",
  pt: "Olá, gostaria de receber mais informações sobre as bombas de calor NAE. Estou interessado em me tornar um instalador.",
};

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = (selectedLocale: string) => {
    const message = messagesByLocale[selectedLocale] || messagesByLocale["en"];
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">
      {/* Language Selection Popup */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mb-2 w-72 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-gray-800">
              {t("chooseLanguage")}
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X size={16} className="text-gray-500" />
            </button>
          </div>
          <div className="space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleWhatsAppClick(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  locale === lang.code
                    ? "bg-green-50 border border-green-200 text-green-800"
                    : "bg-gray-50 hover:bg-green-50 border border-transparent hover:border-green-200"
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <div>
                  <p className="text-sm font-medium">{lang.label}</p>
                  <p className="text-xs text-gray-500">
                    {t(`messagePreview.${lang.code}`)}
                  </p>
                </div>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            {t(" Powered by NAE")}
          </p>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 pl-4 pr-2 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        aria-label="WhatsApp"
      >
        <span className="text-sm font-medium whitespace-nowrap">
          {t("contactUs")}
        </span>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <MessageCircle size={22} fill="white" />
        </div>
      </button>
    </div>
  );
}
