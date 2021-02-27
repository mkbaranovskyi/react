import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import ItemDetail from './components/ItemDetail'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'
import './App.css'

function App() {
	return (
		<Router forceRefresh={false}>
			<div className="App">
				<Nav /> {/* Nav will always be rendered as it's not a part of Switch*/}
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" exact component={Shop} />
					<Route path="/shop/:id" component={ItemDetail} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
