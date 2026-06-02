import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        "space-grotesk": [
          "var(--font-space-grotesk)",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        "nae-blue": "#1E40AF",
        "nae-dark-blue": "#1E3A8A",
        "nae-light-blue": "#3B82F6",
        "nae-orange": "#F97316",
        "nae-dark-orange": "#EA580C",
        "nae-grey": "#F3F4F6",
        "nae-dark": "#111827",
        "nae-success": "#22C55E",
        "nae-warning": "#F59E0B",
        "nae-error": "#EF4444",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        card: "8px",
        button: "8px",
        input: "8px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.12)",
        navbar: "0 1px 3px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "count-up": "count-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
