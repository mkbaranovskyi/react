import React, { FormEventHandler } from 'react'
import withCounter from './withCounter'

const ClickComponent: React.FC<{
	name: string
	count: number
	incrementCount: FormEventHandler
}> = ({ name, count, incrementCount }) => {
	return (
		<button onClick={incrementCount}>
			<h3>
				{name} Clicked {count} times
			</h3>
		</button>
	)
}

export default withCounter(ClickComponent)
