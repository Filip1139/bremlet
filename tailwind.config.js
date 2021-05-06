module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["messinaMono", "sans-serif"],
      serif: ["messinaMonoLight", "Arial"],
      messina: ["messina", "Arial"],
      messinaBook: ["messinaBook", "Arial"],
    },

    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
        maxWidth: {
          "2xl": "1750px",
        },
      },
      colors: {
        ["accent-gray"]: "#262525",
        ["accent-light-gray"]: "#f2efec",
        ["accent"]: "#e6813e",
      },
      fontSize: {
        xxs: "	0.625rem",
        "8xl": "5rem",
      },
      height: {
        base: "	1px",
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        products: "repeat(2, minmax(200px, 450px))",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
}
