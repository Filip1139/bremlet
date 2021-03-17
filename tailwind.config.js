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
  plugins: [
    require("@tailwindcss/typography"),
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          marginInline: "auto",
          paddingInline: theme("spacing.4"),
          maxWidth: theme("screens.sm"),

          // Breakpoints
          "@screen sm": {
            maxWidth: theme("screens.sm"),
          },
          "@screen md": {
            maxWidth: theme("screens.md"),
          },
          "@screen lg": {
            maxWidth: theme("screens.lg"),
          },
          "@screen xl": {
            maxWidth: theme("screens.xl"),
          },
          "@screen 2xl": {
            maxWidth: "1750px",
          },
        },
      })
    },
  ],
}
