module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#374151', // Blue
        secondary: '#9333EA', // Purple
        background: '#F3F4F6', // Light Gray
        text: '#1F2937', // Dark Gray
      },
      boxShadow: {
        xl: '0 10px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 20px 50px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
