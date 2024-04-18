const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./app/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./content/**/*.mdx',
	],
	darkMode: 'class',
	theme: {
		extend: {
      height: {
        '1/2': '50%',

      },
			colors: {
				dark: '#10101A',
				light: '#fcfcfc',
				primary: '#8353E2',
				secondary: '#05B19A',
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
			},
			typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
			keyframes: {
				bounceRight: {
					'0%': { transform: 'translateX(-20%)' },
					'50%': { transform: 'translateX(20%)' },
					'100%': { transform: 'translateX(-20%)' },
				},
			},
			animation: {
				'bounce-right': 'bounceRight 2s linear infinite',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
