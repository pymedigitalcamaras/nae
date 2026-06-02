"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, TrendingUp, Users, Award } from "lucide-react";
import Image from "next/image";

interface Slide {
  image: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: React.ReactNode;
}

export function SuccessStoriesSection() {
  const t = useTranslations("successStories");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides: Slide[] = [
    {
      image: "/images/slider-1.jpg",
      title: t("slide1.title"),
      description: t("slide1.description"),
      stat: "300%",
      statLabel: t("slide1.statLabel"),
      icon: <TrendingUp size={24} />,
    },
    {
      image: "/images/slider-2.jpg",
      title: t("slide2.title"),
      description: t("slide2.description"),
      stat: "500+",
      statLabel: t("slide2.statLabel"),
      icon: <Users size={24} />,
    },
    {
      image: "/images/slider-3.jpg",
      title: t("slide3.title"),
      description: t("slide3.description"),
      stat: "10+",
      statLabel: t("slide3.statLabel"),
      icon: <Award size={24} />,
    },
  ];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent((prev) =>
        newDirection === 1
          ? prev === slides.length - 1 ? 0 : prev + 1
          : prev === 0 ? slides.length - 1 : prev - 1
      );
    },
    [slides.length]
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const slide = slides[current];

  return (
    <section className="relative bg-gradient-to-br from-[#111827] via-[#1E3A8A] to-[#1E40AF] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container-content relative z-10 py-16 md:py-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full text-sm font-medium text-nae-orange mb-4">
            <TrendingUp size={16} />
            {t("badge")}
          </div>
          <h2 className="font-space-grotesk font-medium text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            {t("headline")}
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-black/20 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority={current === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
                  <div className="max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="flex items-center gap-2 text-nae-orange mb-3"
                    >
                      {slide.icon}
                      <span className="text-sm font-semibold uppercase tracking-wider">
                        {slide.statLabel}
                      </span>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="font-space-grotesk font-medium text-2xl md:text-3xl lg:text-4xl text-white mb-3"
                    >
                      {slide.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-base md:text-lg text-white/80 leading-relaxed mb-4"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-5 py-3"
                    >
                      <span className="text-3xl md:text-4xl font-bold text-nae-orange">
                        {slide.stat}
                      </span>
                      <span className="text-sm text-white/70 leading-tight">
                        {slide.statLabel}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white transition-all z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/20 hover:bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-white transition-all z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={22} />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1);
                    setCurrent(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-nae-orange"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-white/60 text-sm mb-4">{t("ctaText")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#calculator"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("savings-calculator")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-nae-orange hover:bg-nae-dark-orange text-white font-medium rounded-lg transition-all hover:scale-[1.02] shadow-lg"
              >
                <TrendingUp size={18} />
                {t("ctaPrimary")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
