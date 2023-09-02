/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'index.html',
    './src/styles/main.css'
  ],
  theme: {
    extend: {
      fontFamily:{
        'Pretendard':['Pretendard'],
        'tenada':['Tenada']
      },
      backgroundColor: {
        'f2f2f2': '#F2F2F2',
        'FFD700': '#FFD700',
        '00473E': '#00473E',
        'FFFFFF': '#FFFFFF',
      },
      colors: {
        '00473E': '#00473E',
        '5C5C5C': '#5C5C5C'
      }
    },
  },
  plugins: [],
}

