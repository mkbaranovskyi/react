import React from 'react'
import { Link } from 'react-router-dom'
import '../../index.css'

const navStyle = {
	color: 'black',
	textDecoration: 'none'
}

const Nav: React.FC = () => {
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
