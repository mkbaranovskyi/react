import React, { useState } from 'react'

const withCounter = (WrappedComponent, incrementNumber = 1) => {
	const WithCounter = (props) => {
		const [count, setCount] = useState(0)

		const incrementCount = () => {
			setCount((prevState) => prevState + incrementNumber)
		}

		return (
			<WrappedComponent
				count={count}
				incrementCount={incrementCount}
				{...props} // Don't forget to pass the original wrapped component's props to it
			/>
		)
	}

	return WithCounter
}

export default withCounter
