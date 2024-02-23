import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      lato: ["Lato", "sans-serif"], // override the default font
    },
    spacing: {
      0: "0",
      1: "0.333333333rem",
      2: "0.666666667rem",
      3: "1rem",
      4: "1.333333333rem",
      5: "1.666666667rem",
      6: "2rem",
      7: "2.333333333rem",
      8: "2.666666667rem",
      9: "3rem",
      10: "3.333333333rem",
      11: "3.666666667rem",
      12: "4rem",
      13: "4.333333333rem",
      14: "4.666666667rem",
      15: "5rem",
      16: "5.333333333rem",
      17: "5.666666667rem",
      18: "6rem",
    },
    lineHeight:{
      0: "0",
      1: "0.75rem",
      2: "1.5rem",
      3: "2rem",
      4: "2.5rem",
      5: "3rem",
      6: "3.5rem",
      7: "4rem",
      8: "4.5rem",
      9: "5rem",
      10: "5.5rem",
      11: "6rem",
      12: "6.5rem",
      13: "7rem",
    },
    container: {
       screens:{
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
       }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        opensans: ["Open Sans", "sans-serif"],
      },

      
  },
  plugins: [],
};
export default config;
