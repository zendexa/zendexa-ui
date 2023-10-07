import { useSelector } from 'react-redux'
import { initializer } from '../redux/actions'
import { ReduxFormProps, StateRoot } from '../types'
import { ReduxFormContext } from '../context/redux-form'
import { PropsWithChildren, useContext, useEffect } from 'react'
import { useDispatch as useReduxDispatch } from 'react-redux/es/hooks/useDispatch'

/*
|--------------------------------------------------------------------------
| Formdux
|--------------------------------------------------------------------------
|
| Create form provider
|
*/

export function Form<State>({
	children,
	name,
	initialState
}: PropsWithChildren<ReduxFormProps<State>>) {
	const form = name
	const { $id } = useContext(ReduxFormContext)
	const dispatch = useReduxDispatch()
	const initialize = useSelector((state: { forms: StateRoot }) => state['forms'][form]?.initialize)

	// Use to initialize the state, should trigger once
	useEffect(() => {
		dispatch(initializer({ form, value: initialState }))
	}, [])

	// Render form elements
	return (
		<ReduxFormContext.Provider value={{ $id, form }}>
			{initialize ? children : null}
		</ReduxFormContext.Provider>
	)
}
