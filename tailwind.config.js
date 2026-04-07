/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Inter", "system-ui", "sans-serif"],
        body: ["Roboto Flex", "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(34 13% 6%)",
        foreground: "hsl(36 18% 93%)",
        card: "hsl(34 10% 9%)",
        "card-foreground": "hsl(36 18% 93%)",
        muted: "hsl(34 8% 15%)",
        "muted-foreground": "hsl(34 7% 48%)",
        border: "hsl(34 10% 17%)",
        accent: "hsl(36 62% 49%)",
        "accent-foreground": "hsl(0 0% 8%)",
      },
    },
  },
  plugins: [],
}

