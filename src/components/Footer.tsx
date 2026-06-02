"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [email, setEmail] = useState("");

  const quickLinks = [
    { href: `/${locale}`, label: "Home" },
    { href: `/${locale}/products`, label: t("quickLinks") === "Enlaces Rápidos" ? "Productos" : t("quickLinks") === "Quick Links" ? "Products" : "Produtos" },
    { href: `/${locale}/about`, label: t("quickLinks") === "Enlaces Rápidos" ? "Nosotros" : t("quickLinks") === "Quick Links" ? "About" : "Sobre" },
    { href: `/${locale}/oem`, label: "OEM" },
    { href: `/${locale}/contact`, label: t("quickLinks") === "Enlaces Rápidos" ? "Contacto" : t("quickLinks") === "Quick Links" ? "Contact" : "Contato" },
    { href: `/${locale}/savings-calculator`, label: t("quickLinks") === "Enlaces Rápidos" ? "Calculadora" : t("quickLinks") === "Quick Links" ? "Calculator" : "Calculadora" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — will integrate with backend
    setEmail("");
  };

  return (
    <footer className="bg-white">
      {/* Main Footer */}
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <svg
                width="48"
                height="48"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect width="40" height="40" rx="8" fill="#1E40AF" />
                <path
                  d="M12 28V12L20 22L28 12V28"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 12H24"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-space-grotesk font-semibold text-2xl text-nae-blue tracking-tight">
                NAE
              </span>
            </Link>
            <p className="text-nae-dark/70 text-sm leading-relaxed">
              {t("slogan")}
            </p>
            <p className="text-nae-dark/50 text-xs">
              New AGE Energy
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-space-grotesk font-medium text-base text-nae-dark mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-nae-dark/70 hover:text-nae-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-space-grotesk font-medium text-base text-nae-dark mb-4">
              {t("contact")}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-nae-blue mt-0.5 shrink-0" />
                <span className="text-sm text-nae-dark/70">
                  pymedigitalcamaras@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-space-grotesk font-medium text-base text-nae-dark mb-4">
              {t("newsletter.title")}
            </h4>
            <p className="text-sm text-nae-dark/60 mb-3">
              Recibe actualizaciones de productos y noticias de la industria.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletter.placeholder")}
                className="flex-1 h-11 px-4 rounded-input border border-gray-200 text-sm focus:outline-none focus:border-nae-blue focus:ring-2 focus:ring-nae-blue/10 transition-all"
                required
              />
              <button
                type="submit"
                className="h-11 px-4 bg-nae-orange hover:bg-nae-dark-orange text-white rounded-input transition-colors flex items-center justify-center shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-nae-blue">
        <div className="container-content py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/80 text-xs">
            {t("copyright")}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${locale}/login`}
              className="text-white/60 hover:text-white text-xs transition-colors"
            >
              Installer Login
            </Link>
            <Link
              href={`/${locale}/register`}
              className="text-white/60 hover:text-white text-xs transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
