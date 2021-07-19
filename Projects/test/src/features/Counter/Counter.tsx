import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export const Counter: React.FC = () => {
	const [incrementBy, setIncrementBy] = useState(0)

	const count = useSelector((state: any) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div>
			<div>
				<h2>Counter</h2>
				<span>
					<strong>{count}</strong>
				</span>
				<button
					aria-label="Increment value"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<button
					aria-label="Decrement value"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
				<button onClick={() => dispatch(incrementByAmount(incrementBy))}>
					Increment by amount ({incrementBy})
				</button>
				<input
					type="number"
					value={incrementBy}
					onChange={(e) => setIncrementBy(+e.target.value)}
				/>
			</div>
		</div>
	)
}
