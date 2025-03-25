import type { Config } from "tailwindcss";

const config = {

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      
      white: "#FAF9F9",
      black: "#0A0A0A",
      charcoal: "#353A47",
      lavender: "#ECDEE8",
      cambridgeBlue: "#89B0AE",
      plum: "#E0A1D1", //change to PLUM

      // Form Colors
      'red-400':'#EF5350',
      'blue':'rgb(59 130 246)'

    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
  plugins: [],
} satisfies Config;

export default config;
