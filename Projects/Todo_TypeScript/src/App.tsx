import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { InfoPage } from './pages/InfoPage'
import { TodoPage } from './pages/TodoPage'

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Navbar />

			<Switch>
				<Route component={TodoPage} path="/" exact />
				<Route component={InfoPage} path="/info" />
			</Switch>
		</BrowserRouter>
	)
}

export default App
