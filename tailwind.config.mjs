/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FAFAF7',
        ink: '#2B2A26',
        green: '#6B8E5A',
        wood: '#C9A87B',
        beige: '#E8DFCB'
      },
      boxShadow: {
        card: '0 20px 45px -30px rgba(43, 42, 38, 0.35)'
      }
    }
  },
  plugins: []
};