import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const navStyle = {
	color: 'black',
	textDecoration: 'none'
}

function Nav() {
	return (
		<nav>
			<Link style={navStyle} to="/">
				<h2>Logo</h2>
			</Link>
			<ul className={'nav-links'}>
				<Link style={navStyle} to="/about">
					<li>About</li>
				</Link>
				<Link style={navStyle} to="/shop">
					<li>Shop</li>
				</Link>
			</ul>
		</nav>
	)
}

export default Nav
