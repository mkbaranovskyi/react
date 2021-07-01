import React, { useEffect, useState } from 'react'

interface IState {
	counter: number
}

class MyComponent extends React.PureComponent {
	constructor(props: any) {
		super(props)
		this.state = {
			counter: 0
		} as IState

		// The value of Counter is updated to same value during continues interval

		setInterval(() => {
			this.setState({
				counter: 0
			})
		}, 1000)
	}

	render() {
		// This function wont be re-rendered in case when the new state is same as previous

		return <b>Counter Value: {this.state.counter}</b>
	}
}

function App() {
	return (
		<div className="App">
			<MyComponent />
		</div>
	)
}

export default App
