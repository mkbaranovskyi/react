import React from 'react'
import ReactDOM from 'react-dom'

function App() {
	return (
		<div>
			<LoginControl />
			<LoginControl />
		</div>
	)
}

function UserGreeting(props) {
	return <h2>Welcome back!</h2>
}

function GuestGreeting(props) {
	return <h2>Please sign in</h2>
}

function Greeting(props) {
	if (props.isLoggedIn) {
		return <UserGreeting />
	}
	return <GuestGreeting />
}

function Button(props) {
	return <button onClick={props.onClick}>{props.textContent}</button>
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props)
		this.state = { isLoggedIn: false }

		this.handleLogIn = this.handleLogIn.bind(this)
		this.handleLogOut = this.handleLogOut.bind(this)
	}

	handleLogIn() {
		this.setState({ isLoggedIn: true })
	}

	handleLogOut() {
		this.setState({ isLoggedIn: false })
	}

	render() {
		const button = this.state.isLoggedIn ? (
			<Button onClick={this.handleLogOut} textContent="Logout" />
		) : (
			<Button onClick={this.handleLogIn} textContent="Login" />
		)
		return (
			<div>
				<Greeting isLoggedIn={this.state.isLoggedIn} />
				{button}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
