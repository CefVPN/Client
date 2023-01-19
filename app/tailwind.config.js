/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main_dbg: "#21252B",
        Sidebar_dbg: "#282C34",
        config_bg: "#292A2D"
      },
      transitionProperty: {
        'width': 'width',
        'height': 'height'
      },
    },
  },
  plugins: [],
}
