"use client";

import type { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  children,
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""}`}
      style={{ maxWidth: centered ? "800px" : "100%" }}
    >
      <h2 className="font-space-grotesk font-medium text-2xl md:text-3xl lg:text-4xl gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-nae-dark/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
