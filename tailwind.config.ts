/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(254, 175, 0, 1), rgba(248, 212, 66, 1))",
      },
      colors: {
        primary: "rgba(254, 175, 0, 1)",
        primaryLight: "rgba(212, 33, 28, 0.1)",
        primaryMedium: "rgba(212, 33, 28, 0.2)",
        primaryText: "#2B281A",
        primaryTextLight: "rgba(43, 40, 26, 0.6)",
        primaryTextSuperLight: "rgba(56, 56, 56, 0.6)",
        secondaryText: "rgba(56, 56, 56, 0.8)",
        tertiaryText: "#383838",
        discountText: "rgba(43, 40, 26, 0.4)",
        primaryBg: "rgba(9, 31, 44, 0.06)",
        favorite: "#098F9D",
        favoriteLight: "rgba(9, 143, 157, 0.1)",
        lineColor: "rgba(43, 40, 26, 0.1)",
        successColor: "rgba(50, 197, 109, 1)",
        yellow: "#F6D55E",
        yellowLight: "rgba(246, 213, 94, 0.1)",
        lightBlue: "rgba(9, 143, 157, 1)",
      },
    },
    screens: {
      "3xl": { max: "1675px" },
      // => @media (max-width: 1575px) { ... }

      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "1xl": { max: "1368px" },
      // => @media (max-width: 1368px) { ... }

      xxl: { max: "1440px" },
      // => @media (max-width: 1368px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      xmd: { max: "850px" },
      // => @media (max-width: 850px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "500px" },
      // => @media (max-width: 500px) { ... }

      xxs: { max: "410px" },
      // => @media (max-width: 410px) { ... }

      "3xs": { max: "375px" },
      // => @media (max-width: 375px) { ... }
    },
  },
  plugins: [],
};
