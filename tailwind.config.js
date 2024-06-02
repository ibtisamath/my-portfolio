

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "gray-global": "#444444",
        "gray-dark": "#292929",
        "gray-light": "#999",
        "pink-global": "#d68da2",
        "pink-light": "#f3b0c3",
        "pink-ultra-light": "#f3b0c091",
        "off-white": "#fafafa",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        "bg-black": "url(/img/bg_black.png)",
      },
      boxShadow: {
        "2xl": "0 25px 50px 0 rgba(0, 0, 0, 0.045)",
      },
    },
  },
  plugins: [],
};
