import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeContext, themes } from './themeContext'
import ThemedButton from './ThemedButton'
import './index.css'

function Toolbar(props) {
	return <ThemedButton onClick={props.changeTheme} />
}

function App() {
	const [theme, setTheme] = useState(themes.light)

	function toggleTheme() {
		setTheme(theme === themes.light ? themes.dark : themes.light)
	}

	return (
		<div>
			{/* This component will take its context from the `value` of the nearest Provider */}
			<ThemeContext.Provider value={theme}>
				<Toolbar changeTheme={toggleTheme} />
			</ThemeContext.Provider>
			{/* This component doesn't have a Provider so it'll count on the default value of the Context*/}
			<ThemedButton />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
