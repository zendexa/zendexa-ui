import { v4 } from 'uuid'
import { Idable } from './types'
import { createContext as newContext } from 'react'

export function createContext<T>(context: T) {
	return newContext<Idable & T>({ $id: v4(), ...context })
}
