import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export const CounterComponent: React.FC = () => {
	const [number, setNumber] = useState(0)

	const counter = useSelector((state: any) => state.counter)
	const dispatch = useDispatch()

	return (
		<div>
			<p>
				<strong>{counter}</strong>
			</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<button onClick={() => dispatch(incrementByAmount(number))}>
				Increment by amount ({number})
			</button>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(+e.target.value)}
			/>
		</div>
	)
}
