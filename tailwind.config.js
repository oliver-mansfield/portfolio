/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
        serif: ["var(--font-eb-garamond)", "EB Garamond", "serif"],
      },
      colors: {
        grayDarker: "#3E3E3E",
        grayDark: "#C9C5C2",
        grayMid: '#E9E5E1',
        grayLight: "#F6F3F0",
        grayText: "#46484B",
        neonPurple: "#7E22CE",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
