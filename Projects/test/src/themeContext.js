import React from 'react'

export const themes = {
	light: {
		foreground: '#000',
		background: '#fffdd0'
	},
	dark: {
		foreground: '#fff',
		background: '#333'
	}
}

export const ThemeContext = React.createContext(themes.dark)
