"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  ShieldCheck,
  LogIn,
} from "lucide-react";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Detect scroll for background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}/products`, label: t("products") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/oem`, label: t("oem") },
    { href: `/${locale}/contact`, label: t("contact") },
    { href: `/${locale}/savings-calculator`, label: t("calculator") },
  ];

  const languages = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
  ];

  // Switch locale by replacing current locale in pathname
  function switchLocale(newLocale: string) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    return newPath;
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] h-[70px] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-navbar"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-content h-full flex items-center justify-between">
        {/* Logo - NAE Brand */}
        <Link href={`/${locale}`} className="flex items-center gap-2 z-10">
          <Image
            src="/images/logo-nae.png"
            alt="NAE - New AGE Energy"
            width={130}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-nae-blue bg-nae-blue/10"
                  : "text-nae-dark/80 hover:text-nae-blue hover:bg-nae-blue/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side: Language + Installer Access */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-nae-dark/80 hover:text-nae-blue hover:bg-nae-blue/5 transition-colors"
            >
              <Globe size={16} />
              <span>{locale.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-card-hover border border-gray-100 overflow-hidden z-50 py-1">
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={switchLocale(lang.code)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors ${
                        locale === lang.code
                          ? "text-nae-blue bg-nae-blue/5 font-medium"
                          : "text-nae-dark/80 hover:bg-nae-grey"
                      }`}
                      onClick={() => setLangDropdownOpen(false)}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Installer Access Button */}
          <Link
            href={`/${locale}/login`}
            className="btn-outline flex items-center gap-2 text-sm px-4 py-2.5"
          >
            <ShieldCheck size={16} />
            {t("installerAccess")}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden z-10 p-2 rounded-md text-nae-dark hover:bg-nae-grey transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] bg-white z-50 lg:hidden animate-fade-in">
          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-nae-blue bg-nae-blue/10"
                    : "text-nae-dark/80 hover:bg-nae-grey"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <hr className="my-3 border-gray-200" />

            {/* Language options */}
            <p className="px-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
              Idioma
            </p>
            <div className="flex gap-2 px-4">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={switchLocale(lang.code)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    locale === lang.code
                      ? "text-nae-blue bg-nae-blue/10"
                      : "text-nae-dark/70 hover:bg-nae-grey"
                  }`}
                >
                  {lang.flag} {lang.code.toUpperCase()}
                </Link>
              ))}
            </div>

            <hr className="my-3 border-gray-200" />

            <Link
              href={`/${locale}/login`}
              className="btn-secondary flex items-center justify-center gap-2 text-base py-3 mx-4"
            >
              <LogIn size={18} />
              {t("installerAccess")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
