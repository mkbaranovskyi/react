import React from 'react'
import Nav from './features/Nav/Nav'
import Home from './features/Home/Home'
import About from './features/About/About'
import Shop from './features/Shop/Shop'
import ItemDetail from './features/ItemDetail/ItemDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'

const App: React.FC = () => {
	return (
		<Router>
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
