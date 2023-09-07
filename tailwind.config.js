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
        'FF6B6B': '#FF6B6B',
        '9ACD32': '#9ACD32',
        'FAAE2B': '#FAAE2B'
      },
      colors: {
        '00473E': '#00473E',
        '5C5C5C': '#5C5C5C',
        '525151': '#525151',
        'FFD700': '#FFD700',
        'ef4444': '#ef4444',
        'FF6B6B': '#FF6B6B',
        '9ACD32': '#9ACD32',
        'FAAE2B': '#FAAE2B'
      }
    },
  },
  plugins: [],
}

