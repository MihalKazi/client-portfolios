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
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        paper: '#F4F4F0',   // Archival off-white
        ink: '#111111',     // Stark black for high contrast
        zinc: '#52525B',    // Muted text for metadata
        alert: '#E63946',   // Journalistic red for highlights/accents
      }
    },
  },
  plugins: [],
};