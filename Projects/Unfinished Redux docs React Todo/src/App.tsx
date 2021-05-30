import React from 'react'
import './App.css'
import Footer from './features/footer/Footer'
import Header from './features/header/Header'

const App: React.FC = () => {
	return (
		<div className="App">
			<nav>
				<section>
					<h1>Redux Todo Example</h1>
				</section>
			</nav>
			<main>
				<section className="medium-container"></section>
				<h2>Todos</h2>
				<div className="todoapp">
					<Header />
					<Footer />
				</div>
			</main>
		</div>
	)
}

export default App
