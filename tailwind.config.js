export default {
  theme: {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    extend: {
      colors: {
        primary: '--color-primary', //Indigo 800
        accent: '--color-accent', //Green 700
        highlight: '--color-highlight', //Amber 600
        text: '--color-text', //Stone 800
        border: '--color-border', //Stone 200
        background: '--color-background', //Stone 50
        plain: '--color-white', //White
        alert: '--color-alert', //Red 600
        black: '--color-black', //Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
};
