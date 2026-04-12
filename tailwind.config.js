/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#6B6B6B",
        accent: "#C0001D",
        border: {
          light: "#E0E0E0",
          dark: "#0A0A0A",
        }
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
        "elegant-accent": "0 20px 50px -12px rgba(192, 0, 29, 0.12)",
        "elegant-lg": "0 30px 60px -15px rgba(0, 0, 0, 0.1)",
        "elegant-sm": "0 4px 12px -2px rgba(0, 0, 0, 0.04)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      borderRadius: {
        'xl': '12px',
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        "widest-plus": ".15em",
        "widest-max": ".2em",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      fontSize: {
        '10px': '10px',
        '11px': '11px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '32px': '32px',
        '48px': '48px',
        '56px': '56px',
        '64px': '64px',
        '72px': '72px',
        '80px': '80px',
        '96px': '96px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
