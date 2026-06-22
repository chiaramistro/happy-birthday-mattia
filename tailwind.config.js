import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7E9D3',
          dark: '#EDE0C8',
          light: '#FBF3E4',
        },
        primary: {
          DEFAULT: '#B62424',
          hover: '#991F1F',
          50: '#FBE9E9',
        },
        accent: '#D14B4B',
        ink: {
          DEFAULT: '#3D2E2E',
          secondary: '#6A5656',
        },
        gold: '#C9A227',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['"Caveat"', 'cursive'],
        body: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        paper: '0 2px 6px rgba(61, 46, 46, 0.12), 0 8px 24px rgba(61, 46, 46, 0.08)',
        photo: '0 6px 18px rgba(61, 46, 46, 0.25)',
        seal: '0 2px 4px rgba(153, 31, 31, 0.45), inset 0 1px 1px rgba(255,255,255,0.25)',
      },
      keyframes: {
        'heart-float': {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: '0' },
          '15%': { opacity: '0.85' },
          '100%': { transform: 'translateY(-120px) scale(1.1)', opacity: '0' },
        },
        'unfold': {
          '0%': { transform: 'scaleY(0.05)', opacity: '0' },
          '100%': { transform: 'scaleY(1)', opacity: '1' },
        },
        'stamp-in': {
          '0%': { transform: 'scale(2.2) rotate(-12deg)', opacity: '0' },
          '60%': { transform: 'scale(0.92) rotate(4deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'caret-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'heart-float': 'heart-float 4s ease-out forwards',
        unfold: 'unfold 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'stamp-in': 'stamp-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'caret-blink': 'caret-blink 0.9s step-end infinite',
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: '#F7E9D3',
            foreground: '#3D2E2E',
            primary: {
              50: '#FBE9E9',
              100: '#F5CCCC',
              200: '#E89E9E',
              300: '#DC7070',
              400: '#D14B4B',
              500: '#B62424',
              600: '#991F1F',
              700: '#7A1818',
              800: '#5C1212',
              900: '#3D0C0C',
              DEFAULT: '#B62424',
              foreground: '#F7E9D3',
            },
            focus: '#B62424',
          },
        },
      },
    }),
  ],
}
