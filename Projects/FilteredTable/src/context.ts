import React from 'react'
import { IContext } from './types'

const Context = React.createContext<IContext | null>(null)

export default Context
