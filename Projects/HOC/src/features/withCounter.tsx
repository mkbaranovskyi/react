import React, { useState } from 'react'

const withCounter = (
	WrappedComponent: React.FC<any>,
	incrementNumber: number = 1
) => {
	const WithCounter = (props: Object) => {
		const [count, setCount] = useState(0)

		const incrementCount = () => {
			setCount((prevState) => prevState + incrementNumber)
		}

		return (
			<WrappedComponent
				count={count} // New functionality 1
				incrementCount={incrementCount} // New functionality 2
				{...props} // The original component's props - don't forget them!
			/>
		)
	}

	return WithCounter
}

export default withCounter
