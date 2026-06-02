"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/SectionTitle";
import { Shield, Headphones, Users, TrendingDown } from "lucide-react";

const iconMap = {
  factory: Shield,
  support: Headphones,
  guidance: Users,
  pricing: TrendingDown,
};

const cardKeys = ["factory", "support", "guidance", "pricing"] as const;

export function WhyNaeSection() {
  const t = useTranslations("whyNae");
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="por-que-nae" className="section-padding bg-nae-grey">
      <div className="container-content">
        <div className="flex justify-center">
          <SectionTitle
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardKeys.map((key, index) => {
            const Icon = iconMap[key];
            return (
              <div
                key={key}
                className={`card p-8 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 transition-transform duration-300 hover:scale-110">
                  <Icon
                    size={48}
                    className="text-nae-blue transition-colors duration-300 hover:text-nae-orange"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-space-grotesk font-medium text-lg text-nae-blue mb-3">
                  {t(`cards.${key}.title`)}
                </h3>
                <p className="text-sm text-nae-dark/60 leading-relaxed">
                  {t(`cards.${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
