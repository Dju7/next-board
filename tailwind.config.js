/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary:"#552583",
      secondary: '#FDB927',
      tertiary: '#000000',
      darkBlue: '#080062',
      white: '#FFFFFF'
      

    },
    extend: {},
  },
  plugins: [],
}

