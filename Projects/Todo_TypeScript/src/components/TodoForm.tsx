import React, { useRef } from 'react'

interface TodoFormProps {
	onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
	// const [title, setTitle] = useState<string>('')
	const ref = useRef<HTMLInputElement>(null)

	// const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
	// 	setTitle(event.target.value)
	// }

	const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === 'Enter') {
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
		}
	}

	return (
		<div className="input-field mt2">
			<label className="active">
				Enter your task
				<input
					placeholder="Buy milk"
					ref={ref}
					// value={title}
					// onChange={changeHandler}
					onKeyPress={keyPressHandler}
				/>
			</label>
		</div>
	)
}
