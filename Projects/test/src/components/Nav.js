import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const navStyle = {
	color: 'black',
	textDecoration: 'none'
}

function Nav(props) {
	return (
		<nav>
			<NavLink activeClassName="selected" exact to="/">
				<h2>Logo</h2>
			</NavLink>
			<ul className={'nav-links'}>
				<NavLink activeClassName="selected" to="/about">
					<li>About</li>
				</NavLink>
				<NavLink activeClassName="selected" to="/shop">
					<li>Shop</li>
				</NavLink>
			</ul>
		</nav>
	)
}

export default Nav
