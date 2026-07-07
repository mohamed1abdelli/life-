/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#0A0A0F",
        "surface-container": "#14141C",
        "surface-container-high": "#1E1E28",
        "on-surface": "#E6E6EB",
        "on-surface-variant": "#9A9AA6",
        "outline-variant": "#2A2A36",
        "neon-cyan": "#00F0FF",
        "neon-pink": "#FF007A",
        "neon-orange": "#FF8A00",
        "success-green": "#00FF66",
        "error-red": "#FF3B5C",
      },
      spacing: {
        "stack-sm": "0.5rem",
        "stack-md": "1rem",
        "stack-lg": "2rem",
        "margin-page": "1.25rem",
      },
      fontSize: {
        "headline-xl": ["2.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "headline-lg": ["2rem", { lineHeight: "1.15", fontWeight: "700" }],
        "label-caps": ["0.75rem", { letterSpacing: "0.08em", fontWeight: "600" }],
        "mono-sm": ["0.85rem", { fontWeight: "500" }],
        "data-display": ["1.75rem", { fontWeight: "700" }],
      },
      fontFamily: {
        "label-caps": ["'Space Grotesk'", "sans-serif"],
        "headline-xl": ["'Space Grotesk'", "sans-serif"],
        "headline-lg": ["'Space Grotesk'", "sans-serif"],
        "mono-sm": ["'JetBrains Mono'", "monospace"],
        "data-display": ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
