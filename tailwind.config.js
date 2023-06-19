/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'pink': '#fa3296',
        'gg': '#1f2532',
        'jj': '#E8EAED',
        'rx': '#7C3AFF',
        'Dr': '#FFD700',
        'Az': '#3299CC',
        'Rs': '#eca698',
        'Ca': '#5d8aa8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

