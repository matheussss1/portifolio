import type { Config } from "tailwindcss";

const config: Config = {
  purge: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'accent-purple-vibrant': 'var(--accent-purple-vibrant)',
        'accent-purple-pastel': 'var(--accent-purple-pastel)',
        'accent-purple-deep': 'var(--accent-purple-deep)',
        'accent-purple-interactive': 'var(--accent-purple-interactive)',
      },
    },
  },
  plugins: [],
};
export default config;
