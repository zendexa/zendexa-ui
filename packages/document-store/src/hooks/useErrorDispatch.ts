import _merge from 'lodash/merge'
import { mutateError } from '../redux/actions'
import { useCallback, useContext } from 'react'
import { ReduxFormContext } from '../context/redux-form'
import { DispatchTarget, SelectorOptions } from '../types'
import { useDispatch as useReduxDispatch } from 'react-redux/es/hooks/useDispatch'

/*
|--------------------------------------------------------------------------
| Use Value Dispatch
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useErrorDispatch<State extends string | null = string | null>(
	path: string,
	options?: SelectorOptions
): DispatchTarget<State> {
	const { form } = useContext(ReduxFormContext)
	const dispatch = useReduxDispatch()

	return useCallback(
		(value: State) => dispatch(mutateError(_merge({ path, form, value }, options))),
		[dispatch]
	)
}
