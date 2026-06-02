"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";

const featuredProductKeys = [
  {
    key: "airSource" as const,
    slug: "air-source",
    image: "/images/product-air-source.jpg",
  },
  {
    key: "geothermal" as const,
    slug: "geothermal",
    image: "/images/product-geothermal.jpg",
  },
  {
    key: "pool" as const,
    slug: "pool-heating",
    image: "/images/product-pool.jpg",
  },
];

function getCategoryBadge(slug: string) {
  const cat = categories.find((c) => c.slug === slug);
  return {
    label: cat?.name || slug,
    color: cat?.badgeBg || "#1E40AF",
  };
}

export function ProductsSection() {
  const t = useTranslations("products");
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="productos" className="section-padding bg-white">
      <div className="container-content">
        <div className="flex justify-center">
          <SectionTitle
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProductKeys.map((product, index) => {
            const badge = getCategoryBadge(product.slug);
            return (
              <div
                key={product.key}
                className={`bg-white rounded-card shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-nae-grey">
                  <img
                    src={product.image}
                    alt={t(`featured.${product.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3"
                    style={{ backgroundColor: badge.color }}
                  >
                    {badge.label}
                  </span>

                  <h3 className="font-space-grotesk font-medium text-lg text-nae-blue mb-2">
                    {t(`featured.${product.key}.title`)}
                  </h3>

                  <p className="text-sm text-nae-dark/60 leading-relaxed line-clamp-2 mb-4">
                    {t(`featured.${product.key}.description`)}
                  </p>

                  <Link
                    href={`/${locale}/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-nae-blue hover:text-nae-orange transition-colors group/link"
                  >
                    {t("viewDetails")}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center gap-2 text-nae-blue hover:text-nae-orange font-medium transition-colors"
          >
            {t("viewAll")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
