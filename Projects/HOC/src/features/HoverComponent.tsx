import React, { FormEventHandler } from 'react'
import withCounter from './withCounter'

const HoverComponent: React.FC<{
	count: number
	incrementCount: FormEventHandler
}> = ({ count, incrementCount }) => {
	return <h3 onMouseOver={incrementCount}>Hovered {count} (х3) times</h3>
}

export default withCounter(HoverComponent, 3)
