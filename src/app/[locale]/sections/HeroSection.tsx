"use client";

import { useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  // Mouse parallax for diagonal image
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const diagonalImg = section.querySelector(".diagonal-image") as HTMLElement;
    if (!diagonalImg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      diagonalImg.style.transform = `
        perspective(1000px)
        rotateY(${x * 5}deg)
        rotateX(${-y * 5}deg)
        scale(1.02)
      `;
    };

    const handleMouseLeave = () => {
      diagonalImg.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/images/hero-industrial.jpg"
          alt="NAE Manufacturing Facility"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Blue Gradient Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(30, 64, 175, 0.88) 0%, rgba(30, 64, 175, 0.6) 50%, transparent 100%)",
        }}
      />

      {/* Diagonal Parallax Image (desktop only) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="diagonal-image hidden lg:block absolute right-[8%] top-[15%] z-[2] w-[400px] xl:w-[480px] rounded-card overflow-hidden shadow-2xl"
        style={{ transform: "rotate(-7deg)", transition: "transform 0.15s ease-out" }}
      >
        <img
          src="/product-r290-12kw.jpg"
          alt="NAE Heat Pump Product"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-[3] container-content py-20 lg:py-0">
        <div className="max-w-2xl">
          {/* Headline Line 1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-space-grotesk font-medium text-white leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            {t("headline1")}
          </motion.h1>

          {/* Headline Line 2 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-space-grotesk font-medium text-white leading-[1.1] tracking-tight mt-1"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            {t("headline2")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            className="mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-xl"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.2)" }}
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/products`}
              className="btn-primary inline-flex items-center justify-center gap-2 text-center"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href={`/${locale}/register`}
              className="btn-outline-white inline-flex items-center justify-center gap-2 text-center"
            >
              {t("ctaSecondary")}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[2]"
        style={{
          background:
            "linear-gradient(to top, rgba(243, 244, 246, 1) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
