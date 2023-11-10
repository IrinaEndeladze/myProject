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
        primaryText: "#000000",
        primaryTextLight: "rgba(108, 108, 108, 1)",
        layoutBgColor: "rgba(242, 234, 225, 1)",
        primaryBg: "rgba(229, 229, 229, 1)",
        secondaryBg: "rgba(248, 248, 248, 1)",
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
