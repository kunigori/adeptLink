/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1220",
          dark: "#111827",
        },
        accent: {
          blue: "#2563EB",
          gold: "#C8A45D",
        },
        bg: {
          light: "#F8FAFC",
        },
        text: {
          main: "#111827",
          sub: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-noto)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
