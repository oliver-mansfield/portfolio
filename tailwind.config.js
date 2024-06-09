/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      // center: true,
      // padding: "2rem",
      // screens: {
      //   "2xl": "1400px",
      // },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
        // serif: ["var(--font-nunito)", "Nunito", "sans-serif"],
        // fantasy: ["var(--font-jacquard_12)", "Jacquard_12", "fantasy"],
        nunito: ["var(--font-nunito)", "Nunito", "sans-serif"],
      },
      colors: {
        grayDarker: "#3E3E3E",
        grayDark: "#C9C5C2",
        grayMid: '#E9E5E1',
        grayLight: "#F6F3F0",
        grayText: "#46484B",
        neonPurple: "#7E22CE",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}