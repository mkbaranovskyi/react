import React, { useMemo, useState, useCallback, useEffect } from 'react'

const Test: React.FC = () => {
	const [message, setMessage] = useState('Hi')
	const [counter, setCounter] = useState(0)

	const greeting = useCallback((text: string) => {
		console.log(text)
	}, [])

	useEffect(() => greeting(message), [message, greeting])

	return (
		<button onClick={() => setCounter((prevState) => prevState + 1)}>
			Pressed {counter} times
		</button>
	)
}

const App: React.FC = () => {
	return (
		<div className="App">
			<Test />
		</div>
	)
}

export default App
