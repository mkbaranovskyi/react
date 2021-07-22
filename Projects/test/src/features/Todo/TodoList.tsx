import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import TodoItem from './TodoItem'
import { RootState } from '../../app/store'

const TodoList: React.FC<Props> = ({ todos }) => {
	if (!todos.length) {
		return <h5>No todos yet</h5>
	}

	return (
		<ul className="todoList">
			{todos.map((todo, index) => (
				<TodoItem todo={todo} key={todo.id} index={index + 1} />
			))}
		</ul>
	)
}

const mapStateToProps = (state: RootState) => ({
	todos: state.todos
})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

export default connector(TodoList)
