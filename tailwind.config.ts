import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // From DESIGN.md + premium glass updates (more blue emphasis, reduced yellow scream)
        surface: "#121414",
        "surface-dim": "#0c0f0f",
        "surface-bright": "#37393a",
        "surface-container-lowest": "#0c0f0f",
        "surface-container-low": "#1a1c1c",
        "surface-container": "#1e2020",
        "surface-container-high": "#282a2b",
        "surface-container-highest": "#333535",
        bolt: "#fde400", // kept for CTAs/energy only
        "bolt-dim": "#dec800",
        neural: "#2eb9df", // primary blue for text, accents
        "neural-deep": "#1f6feb",
        silver: "#bac8da",
        "on-surface": "#e2e2e2",
        outline: "#4b4731",
        "outline-strong": "#979177",
        "secondary-container": "#3d4a5a",
        accent: "#1f6feb",
        "text-blue": "#2eb9df",
      },
      spacing: {
        // 8px rhythm from spec
        unit: "8px",
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
