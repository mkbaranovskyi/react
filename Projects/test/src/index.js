import React from 'react'
import ReactDOM from 'react-dom'
import { nanoid } from 'nanoid'

function Glossary(props) {
	return (
		<dl>
			{props.items.map((item) => {
				const elem = [<dt>{item.term}</dt>, <dd>{item.description}</dd>]
				elem.key = item.id
				return elem
			})}
		</dl>
	)
}

const glossary = [
	{
		id: nanoid(),
		term: 'WHO',
		description:
			'The World Health Organization is a specialized agency of the United Nations responsible for international public health.'
	},
	{
		id: nanoid(),
		term: 'ISS',
		description:
			'The International Space Station is a modular space station in low Earth orbit.'
	}
]

function App() {
	return (
		<div>
			<Glossary items={glossary} />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
