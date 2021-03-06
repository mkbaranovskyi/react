import React, { useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount,
	asyncIncrement
} from './counterSlice'
import { RootState } from '../../app/store'

const Counter: React.FC<Props> = ({ count, dispatch }) => {
	const [incrementBy, setIncrementBy] = useState(0)

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
			{/* <button onClick={() => dispatch(asyncIncrement())}>
				Async increment (1s delay)
			</button> */}
		</div>
	)
}
const mapStateToPsops = (state: RootState) => ({ count: state.counter.value })

// const mapDispatchToProps = () => {}

const connector = connect(mapStateToPsops)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & { age: number; name: string }

export default connector(Counter)
