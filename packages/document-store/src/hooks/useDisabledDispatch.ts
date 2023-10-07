import _merge from 'lodash/merge'
import { useDispatch } from 'react-redux'
import { useCallback, useContext } from 'react'
import { mutateDisabled } from '../redux/actions'
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

export function useDisabledDispatch<State extends boolean = boolean>(
	path: string,
	options?: SelectorOptions
): DispatchTarget<State> {
	const dispatch = useDispatch()
	const { form } = useContext(ReduxFormContext)

	return useCallback(
		(value: State) => dispatch(mutateDisabled(_merge({ path, form, value }, options))),
		[dispatch]
	)
}
