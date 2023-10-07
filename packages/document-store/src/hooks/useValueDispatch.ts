import _merge from 'lodash/merge'
import { useDispatch } from 'react-redux'
import { useCallback, useContext } from 'react'
import { mutateValue } from '../redux/actions'
import { ReduxFormContext } from '../context/redux-form'
import { DispatchTarget, SelectorOptions } from '../types'

/*
|--------------------------------------------------------------------------
| Use Value Dispatch
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useValueDispatch<State>(
	path: string,
	options?: SelectorOptions
): DispatchTarget<State> {
	const { form } = useContext(ReduxFormContext)
	const dispatch = useDispatch()

	return useCallback(
		(value: State) =>
			dispatch(mutateValue(_merge({ path, form, value }, options))),
		[dispatch]
	)
}
