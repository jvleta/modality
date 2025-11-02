/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f5f1",
          100: "#e9f0e6",
          200: "#c9ddc7",
          300: "#a9caa8",
          400: "#83b283",
          500: "#5e9a5f",
          600: "#4a7a4a",
          700: "#3b603b",
          800: "#2d472d",
          900: "#1f2e1f",
        },
      },
      fontFamily: {
        sans: ["'Segoe UI'", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "glow-green": "0 0 50px rgba(94, 154, 95, 0.35)",
        "amber-glow": "0 14px 32px rgba(212, 135, 42, 0.25)",
        "card": "0 20px 45px rgba(0, 0, 0, 0.55)",
        "inset-border": "inset 0 0 0 1px rgba(255,255,255,0.08)",
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(135deg, #3f3f3f 0%, #2b2b2b 100%)",
        "forest-gradient": "linear-gradient(135deg, #7f9f7f, #9fbc9f)",
        "amber-gradient": "linear-gradient(135deg, #d4872a, #e09940)",
      },
    },
  },
  plugins: [],
};
