import React from 'react'
import { ThemeContext } from './themeContext'

function ThemeTogglerButton() {
	return (
		<ThemeContext.Consumer>
			{({ state: theme, toggleTheme }) => {
				// debugger
				return (
					<button
						onClick={toggleTheme}
						style={{ background: theme.background, color: theme.foreground }}
					>
						Toggle Theme
					</button>
				)
			}}
		</ThemeContext.Consumer>
	)
}

export default ThemeTogglerButton
