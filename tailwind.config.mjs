/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          1: "hsl(var(--background-1) / <alpha-value>)",
          2: "hsl(var(--background-2) / <alpha-value>)",
          3: "hsl(var(--background-3) / <alpha-value>)",
          4: "hsl(var(--background-4) / <alpha-value>)",
          5: "hsl(var(--background-5) / <alpha-value>)",
          6: "hsl(var(--background-6) / <alpha-value>)",
          7: "hsl(var(--background-7) / <alpha-value>)",
          8: "hsl(var(--background-8) / <alpha-value>)",
          9: "hsl(var(--background-9) / <alpha-value>)",
          10: "hsl(var(--background-10) / <alpha-value>)",
          11: "hsl(var(--background-11) / <alpha-value>)",
          12: "hsl(var(--background-12) / <alpha-value>)"
        },
        primary: {
          1: "hsl(var(--primary-1) / <alpha-value>)",
          2: "hsl(var(--primary-2) / <alpha-value>)",
          3: "hsl(var(--primary-3) / <alpha-value>)",
          4: "hsl(var(--primary-4) / <alpha-value>)",
          5: "hsl(var(--primary-5) / <alpha-value>)",
          6: "hsl(var(--primary-6) / <alpha-value>)",
          7: "hsl(var(--primary-7) / <alpha-value>)",
          8: "hsl(var(--primary-8) / <alpha-value>)",
          9: "hsl(var(--primary-9) / <alpha-value>)",
          10: "hsl(var(--primary-10) / <alpha-value>)",
          11: "hsl(var(--primary-11) / <alpha-value>)",
          12: "hsl(var(--primary-12) / <alpha-value>)"
        }
      },
      fontFamily: {
        sans: ["var(--inter)"],
        display: ["var(--anton)"]
      }
    }
  },
	plugins: []
}
