"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: ElementType;
}

interface AboutTimelineProps {
  milestones: Milestone[];
}

export function AboutTimeline({ milestones }: AboutTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-nae-blue via-nae-orange to-nae-blue/30" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          const isVisible = visibleItems.includes(index);
          const isLeft = index % 2 === 0;

          return (
            <div
              key={milestone.year}
              ref={(el) => { itemRefs.current[index] = el; }}
              className={`relative flex items-start gap-6 md:gap-0 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-card border-2 border-nae-orange flex items-center justify-center z-10`}
              >
                <Icon className="w-5 h-5 text-nae-orange" />
              </div>

              {/* Content */}
              <div
                className={`ml-20 md:ml-0 md:w-1/2 ${
                  isLeft
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:ml-auto"
                }`}
              >
                <div className="card p-6 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">
                  <span className="inline-block font-space-grotesk font-medium text-sm text-nae-orange bg-nae-orange/10 px-3 py-1 rounded-full mb-3">
                    {milestone.year}
                  </span>
                  <h4 className="font-space-grotesk font-medium text-lg text-nae-dark mb-2">
                    {milestone.title}
                  </h4>
                  <p className="text-nae-dark/65 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
