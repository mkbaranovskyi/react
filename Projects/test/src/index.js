import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { nanoid } from 'nanoid'

function Table() {
	return (
		<table>
			<tbody>
				<tr>
					<Column />
				</tr>
				<tr>
					<Column />
				</tr>
			</tbody>
		</table>
	)
}

function Column() {
	return [
		<td key={nanoid()}>1</td>,
		<td key={nanoid()}>2</td>,
		<td key={nanoid()}>3</td>
	]
	// return <td>1</td>
}

function App() {
	return (
		<div>
			<Table />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
