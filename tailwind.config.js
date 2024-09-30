export default {
    darkMode: ["class"],
    content: [
			'./src/*.{html,tsx,css}',
			'./src/**/*.{html,tsx}',
			'./src/**/**/*.{html,tsx}',
		],
  theme: {
		fontFamily: {
			'serif': ['Arvo', 'ui-serif'],
			'sans': ['Montserrat', 'ui-sans-serif'],
		},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
			backgroundImage: {
				'orange-linear-gradient': 'linear-gradient(180deg, #FE5A1D, #CC2217)', //#FEB47B
			},
  		colors: {
				orange: {
					500: '#FE5A1D'
				}
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

