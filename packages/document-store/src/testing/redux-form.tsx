import thunk from 'redux-thunk'
// import logger from "redux-logger";
import { Provider } from 'react-redux'
import { forms } from '../redux/reducer'
import { PropsWithChildren } from 'react'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		forms: forms
	},
	middleware: getDefaultMiddleware => [
		thunk,
		// logger,
		...getDefaultMiddleware({
			serializableCheck: true
		})
	]
})

export function TestComponent({ children }: PropsWithChildren) {
	return <Provider store={store}>{children}</Provider>
}
