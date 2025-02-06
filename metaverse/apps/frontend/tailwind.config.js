/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#090909",
        "secondary": "#FFFFFF",
        "gradientLeft": "#F9D0BF",
        "gradientRight": "#DF82FF",
        "gradientSecondary": "#D4576B",
      },
      fontFamily: {
        BaseNeue: ["Neue-Bold", "sans-serif"],
        ExtraNeue: ["Neue-ExtraBold"],
        SuperNeue: ["Neue-Super"],
        SyneRegular: ["Syne-Regular"],
        SyneMedium: ["Syne-Medium"],
        SyneBold: ["Syne-Bold"],
        SyneExtra: ["Syne-ExtraBold"],
      }
    },
  },
  plugins: [],
}