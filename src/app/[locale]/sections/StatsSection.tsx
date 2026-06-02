"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

function StatItem({ number, label, delay, isVisible }: StatItemProps) {
  const numericMatch = number.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = number.replace(/[\d.]+/, "");
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const startTime = Date.now() + delay;
    let rafId: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < 0) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      // Ease-out function
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * numericValue * 10) / 10);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isVisible, delay, numericValue]);

  const formattedValue =
    numericValue % 1 !== 0
      ? displayValue.toFixed(1)
      : Math.round(displayValue).toString();

  return (
    <div
      className={`text-center transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-space-grotesk font-medium text-3xl md:text-4xl lg:text-[42px] text-nae-blue">
        {isVisible ? formattedValue : "0"}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-nae-dark/60 font-inter">{label}</div>
    </div>
  );
}

export function StatsSection() {
  const t = useTranslations("stats");
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
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { key: "years", number: t("years.number"), label: t("years.label") },
    { key: "countries", number: t("countries.number"), label: t("countries.label") },
    { key: "installers", number: t("installers.number"), label: t("installers.label") },
    { key: "support", number: t("support.number"), label: t("support.label") },
  ];

  return (
    <section id="estadisticas" className="bg-white py-10 md:py-12">
      <div ref={sectionRef} className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="relative"
            >
              <StatItem
                number={stat.number}
                label={stat.label}
                delay={index * 200}
                isVisible={isVisible}
              />
              {/* Vertical divider */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
