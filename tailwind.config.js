/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          1: "var(--lime1)",
          2: "var(--lime2)",
          3: "var(--lime3)",
          4: "var(--lime4)",
          5: "var(--lime5)",
          6: "var(--lime6)",
          7: "var(--lime7)",
          8: "var(--lime8)",
          9: "var(--lime9)",
          10: "var(--lime10)",
          11: "var(--lime11)",
          12: "var(--lime12)",
        },
        gold: {
          1: "var(--gold1)",
          2: "var(--gold2)",
          3: "var(--gold3)",
          4: "var(--gold4)",
          5: "var(--gold5)",
          6: "var(--gold6)",
          7: "var(--gold7)",
          8: "var(--gold8)",
          9: "var(--gold9)",
          10: "var(--gold10)",
          11: "var(--gold11)",
          12: "var(--gold12)",
        },
      },
      fontFamily: {
        sans: ["var(--space-grotesk)"],
      },
    },
  },
  plugins: [],
};
