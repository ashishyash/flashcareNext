import type { Config } from 'tailwindcss'

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.json",
  ],
  safelist: [
    "bg-red-100",
    "bg-red-600",
    "bg-amber-100",
    "bg-amber-600",
    "bg-green-100",
    "bg-green-600",
    "text-red-600",
    "text-amber-600",
    "text-green-600",
    "border-red-300",
    "border-amber-300",
    "border-green-300",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brand: {
          blue: "hsl(var(--brand-blue))",
          green: "hsl(var(--brand-green))",
          green1: "hsl(var(--brand-green1))",
          orange: "hsl(var(--brand-orange))",
          black1: "hsl(var(--brand-black1))",
          black2: "hsl(var(--brand-black2))",
          black3: "hsl(var(--brand-black3))",
          black4: "hsl(var(--brand-black4))",
          red1: "hsl(var(--brand-red1))",
          cyan1: "hsl(var(--brand-cyan1))",
          cyan2: "hsl(var(--brand-cyan2))",
          cyan3: "hsl(var(--brand-cyan3))",
          amber1: "hsl(var(--brand-amber1))",
          greengradient: "var(--brand-greengradient)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "brand-greengradient1": "linear-gradient(90deg, #009689 0%, #0092B8 100%)",
        "brand-greengradient2": "linear-gradient(90deg, #ECFDF5 0%, #F0FDFA 100%)",
        "sidebar-gradient": "linear-gradient(180deg, #007D92 0%, #006576 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config
