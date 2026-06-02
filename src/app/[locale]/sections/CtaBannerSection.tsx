"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export function CtaBannerSection() {
  const t = useTranslations("ctaBanner");
  const locale = useLocale();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta-contacto"
      className="section-padding gradient-bg relative overflow-hidden"
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-content">
        <div
          ref={sectionRef}
          className={`max-w-[800px] mx-auto text-center transition-all duration-600 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="font-space-grotesk font-medium text-2xl md:text-3xl lg:text-4xl text-white leading-tight"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}
          >
            {t("title")}
          </h2>

          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/register`}
              className="btn-primary w-full sm:w-auto text-center"
            >
              {t("btnPrimary")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="btn-outline-white w-full sm:w-auto text-center"
            >
              {t("btnSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
