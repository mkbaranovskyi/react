import React from 'react'
// This is for our app to work in the SPA mode, method 1
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
	return (
		<nav>
			<div className="nav-wrapper px1">
				<a href="/" className="brand-logo">
					React + TypeScript
				</a>
				<ul className="right hide-on-med-and-down">
					<li>
						<NavLink to="/">Tasks</NavLink>
					</li>
					<li>
						<NavLink to="/info">Info</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}
