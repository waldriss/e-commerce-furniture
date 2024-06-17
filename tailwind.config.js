/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'sans':['var(--font-oswald-mono)','sans-serif'],
      'serif':['var(--font-merriweather-mono)', 'serif']
    }
    ,
    screens: {
      xxl:{'max':'1280px'},
      xl:{'max':'1060px'},
      lg:{'max':'800px'},
      md:{'max':'720px'},
      sm:{'max':'380px'},
      smcart:{'max':'540px'}

    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
