import React from 'react'
import withCounter from './withCounter'

const ClickComponent = ({ name, count, incrementCount }) => {
	return (
		<button onClick={incrementCount}>
			<h3>
				{name} Clicked {count} times
			</h3>
		</button>
	)
}

export default withCounter(ClickComponent)
