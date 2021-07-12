import React from 'react'
import withCounter from './withCounter'

const HoverComponent = ({ count, incrementCount }) => {
	return <h3 onMouseOver={incrementCount}>Hovered {count} (x3) times</h3>
}

export default withCounter(HoverComponent, 3)
