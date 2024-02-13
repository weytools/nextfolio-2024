import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'shark': {
        '50': '#f5f5f6',
        '100': '#e6e6e7',
        '200': '#d0d0d1',
        '300': '#aeaeb2',
        '400': '#86878a',
        '500': '#6b6c6f',
        '600': '#5b5b5f',
        '700': '#4e4f50',
        '800': '#444546',
        '900': '#3c3c3d',
        DEFAULT: '#1d1d1e',
      },
      'mercury': {
        '50': '#f7f8f7',
        DEFAULT: '#e6e8e6',
        '200': '#daddda',
        '300': '#bbbfba',
        '400': '#959c94',
        '500': '#788077',
        '600': '#616960',
        '700': '#4e564e',
        '800': '#434943',
        '900': '#3c3f3b',
        '950': '#272a27',
    },
    'woodsmoke': {
      '50': '#e9feff',
      '100': '#c9fcff',
      '200': '#99f7ff',
      '300': '#54eeff',
      '400': '#07dbff',
      '500': '#00bdef',
      '600': '#0095c9',
      '700': '#0076a1',
      '800': '#085f82',
      '900': '#0c4e6d',
      DEFAULT: '#000609',
  },
  'torch': {
    '50': '#fff1f2',
    '100': '#ffe0e2',
    '200': '#ffc6c9',
    '300': '#ff9fa4',
    '400': '#ff676f',
    DEFAULT: '#fb222e',
    '600': '#e91925',
    '700': '#c4111b',
    '800': '#a2121a',
    '900': '#86161c',
    '950': '#49060a',
},

  
    
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
