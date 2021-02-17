import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

function CustomTextInput() {
	const textInput = useRef(null) // 1

	useEffect(() => {
		focusTextInput() // 4 - Focus after render
	})

	const focusTextInput = () => {
		textInput.current.focus() // 3
	}

	return (
		<div>
			<input ref={textInput} />
			<button type="button" onClick={focusTextInput}>
				Focus the text input!
			</button>
		</div>
	)
}

function App() {
	return (
		<div></div>
		// <React.StrictMode>
		// <CustomTextInput />
		// </React.StrictMode>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
