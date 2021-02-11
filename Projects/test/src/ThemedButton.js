import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'

function ThemedButton(props) {
	const theme = useContext(ThemeContext)

	return (
		<button
			{...props}
			style={{ backgroundColor: theme.background, color: theme.foreground }}
		>
			Button
		</button>
	)
}

export default ThemedButton
