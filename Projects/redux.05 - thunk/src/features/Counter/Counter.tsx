import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount,
	asyncIncrement
} from './counterSlice'
import { RootState } from '../../app/store'

export const Counter: React.FC = () => {
	const [incrementBy, setIncrementBy] = useState(0)

	const count = useSelector((state: RootState) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div className="counterContainer">
			<h2>Counter</h2>
			<strong>{count}</strong>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(incrementByAmount(incrementBy))}>
				Increment by amount ({incrementBy})
			</button>
			<input
				type="number"
				value={incrementBy}
				onChange={(e) => setIncrementBy(+e.target.value)}
			/>
			<button onClick={() => dispatch(asyncIncrement)}>
				Async increment (1s delay)
			</button>
		</div>
	)
}
