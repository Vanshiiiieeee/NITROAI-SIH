/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        slate: {
          850: "#172033",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-emerald-500/10", "bg-emerald-500/20", "bg-red-500/10", "bg-red-500/20",
    "bg-amber-500/10", "bg-amber-500/20", "border-emerald-500/20", "border-red-500/20",
    "border-amber-500/20", "text-emerald-400", "text-red-400", "text-amber-400",
  ],
};
