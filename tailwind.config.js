import { spacing, fontFamily } from 'tailwindcss/defaultTheme';
import hocus from 'tailwindcss-hocus';
import plugin from 'tailwindcss/plugin';
import twColors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';





export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        '1/2': '50%',
        '1/3': '33.333333%',
      },
      colors: {
        dark: '#10101A',
        light: '#fcfcfc',
        primary: '#8353E2',
        secondary: '#05B19A',
        brand: {
          DEFAULT: '#3867D6',
          950: '#060A15',
          900: '#0B152B',
          800: '#162956',
          700: '#223E80',
          600: '#2D52AB',
          500: '#3867D6',
          400: '#6085DE',
          300: '#88A4E6',
          200: '#AFC2EF',
          100: '#D7E1F7',
          50: '#EBF0FB',
        },
        tint: {
          bg: `rgba(var(--tint)/var(--opacity-tint-bg))`,
          border: `rgba(var(--tint)/var(--opacity-tint-border))`,
        },
        black: twColors.black,
        white: twColors.white,
        blue: twColors.sky,
        green: twColors.emerald,
        yellow: twColors.yellow,
        orange: twColors.orange,
        red: twColors.rose,
        purple: twColors.violet,
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        manrope: [
          'var(--font-manrope)', 'Manrope', ...fontFamily.sans
        ],
        mono: ['monospace', ...fontFamily.mono],
      },
      spacing: {
        ...spacing,
        px: '0.0625rem',
        '0.75': '0.1875rem',
        '5.5': '1.375rem',
        18: '4.5rem',
        21: '5.25rem',
        22: '5.5rem',
        30: '7.5rem',
        nice: '69ch', // Example of adding custom values
      },
      borderRadius: {
        half: '50%',
        full: '9999px',
      },
      borderWidth: {
        DEFAULT: '0.0625rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.secondary-txt'),
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      }),
      lineHeight: {
        relaxed: '1.75',
      },
      saturate: {
        125: '1.25',
      },
      boxShadow: {
        'toolbar-hover': '0 0 8px 2px var(--tw-shadow-color)',
        'toolbar-elevated': '0 0 6px 1px var(--tw-shadow-color)',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
      keyframes: {
        bounceRight: {
          '0%': { transform: 'translateX(-20%)' },
          '50%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-20%)' },
        },
        // Include other keyframes from the original configuration if needed
      },
      animation: {
        'bounce-right': 'bounceRight 2s linear infinite',
        // Include other animations from the original configuration if needed
      },
      transitionTimingFunction: {
        in: 'ease-in',
        out: 'ease-out',
        'in-out': 'ease-in-out',
        DEFAULT: 'ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hocus'],  // Active hocus pour le fond
      borderColor: ['hocus'],      // Active hocus pour les bordures
      textColor: ['hocus'],        // Active hocus pour la couleur du texte
      borderWidth: ['hocus'],      // Active hocus pour la largeur de la bordure
    }
  },
  plugins: [
    typography,
    hocus,
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      }, {
        values: theme('textShadow', {
          DEFAULT: '0 0.0625rem 0.125rem var(--tw-shadow-color)',
        }),
      });
    }),
  ],
  safelist: [
    'max-tablet-sm:overflow-hidden',
    {
      pattern: /^shadow-(brand|blue|green|yellow|orange|red|purple)-300$/,
    },
  ],
};
