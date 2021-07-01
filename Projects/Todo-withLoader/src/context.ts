import React from 'react'
import { ContextType } from './type.d'

const Context = React.createContext<ContextType>({
	removeTodo: Function
})

export default Context
