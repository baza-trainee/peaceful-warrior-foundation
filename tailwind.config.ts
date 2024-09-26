import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
         smallMobile:"8px",
        mobile: '16px',
        tablet: '32px',
        laptop: '32px',
        desktop: '150px',
      },
    },
    screens: {
      smallMobile: "320px",
      // => @media (min-width: 320px) { ... }
      mobile: '375px',
      // => @media (min-width: 375px) { ... }
      tablet: '744px',
      // => @media (min-width: 768px) { ... }
      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }
      desktop: '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    colors: {
      accent: '#115ccd',
      hover: '#0d408c',
      secondaryTitile: '#fffdfd',
      mainTitle:'#3b3b3b',

      // => background-colors
      'light-background': '#f0f0f0',
      'gray-background': '#929ba8',
      'card-background': '#f1e9d9',
      'btn-background': '#ededed',
      'swiper-card-background': '#ede8dd',
      'footer-background': '#2b3748',
      'header-background': 'rgba(205, 204, 199, 0.5)',

      // => text-colors
      black: '#000',
      white: '#fff',
      'body-text': '#3b3b3b',
      'gray-footer-text': '#bcb9b9',
      'second-text': '#dadada',
      'footer-text': '#8b8b8b',

      // => decor-elements
      'gray-devider': '#858585',
      'gray-border': '#c6c6c5',
      'dashed-border': '#538fe9',
      'gray-form': '#787878',
      'stroke-quotes': '#5b5b5b',
      'footer-socials': '#d7d7d7',
    },
    extend: {
      fontFamily: {
        noteworthy: ['Noteworthy', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      fontSize: {
        xs: '12px',
        s: '14px',
        m: '16px',
        sm: '18px',
        md: '20px',
        l: '22px',
        lg: '26px',
        xl: '28px',
        '2xl': '30px',
        '3xl': '32px',
        '4xl': '34px',
        '5xl': '36px',
        '6xl': '40px',
        '7xl': '44px',
        '8xl': '56px',
      },
      boxShadow: {
        'btn-shadow': '0 4px 8px 0 rgba(150, 150, 152, 0.45)',
        'card-shadow': '0 4px 20px 0 rgba(205, 204, 199, 0.85)',
      },
      borderRadius: {
        'btn-radius': '24px',
      },
      transitionTimingFunction: {
        'ease-in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
