/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary:"#05316f",
      secondary: '#FDB927',
      tertiary: '#000000',
      clearBlue: '#2f6bbf',
      white: '#FFFFFF'
      

    },
    extend: {},
  },
  plugins: [],
}

