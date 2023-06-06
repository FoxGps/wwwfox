/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './app/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto_700Bold',
        title: 'Inter_900Black',
        text: 'Inter_400Regular',
      },
      colors: {
        main_light: '#1E1E1E',
        body_light: '#f3eef5',
        text_light: '#3F3F3F',
        main_dark: '#eaeaea',
        body_dark: '#2F2F2F',
        text_dark: '#f3eef5',
      },
    },
  },
  plugins: [],
}
