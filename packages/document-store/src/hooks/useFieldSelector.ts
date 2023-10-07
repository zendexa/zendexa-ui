import _get from 'lodash/get'
import _merge from 'lodash/merge'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { ReduxFormContext } from '../context/redux-form'
import { SelectorOptions, StateRoot, Target } from '../types'

/*
|--------------------------------------------------------------------------
| Get Data From
|--------------------------------------------------------------------------
|
| Get data from the given target object base on path.
|
*/

export function useFieldSelector<T>(
	path: string,
	options?: SelectorOptions & { target: Target }
): T {
	const { form } = useContext(ReduxFormContext)
	const newOptions = _merge({ form, path }, options)
	const appendPath = ['values'].includes(newOptions.target)
		? `.${newOptions.path}`
		: `['${newOptions.path}']`

	return useSelector((state: StateRoot) =>
		_get(
			state.forms,
			`${newOptions.form}.${newOptions.target}${appendPath}`,
			null
		)
	) as T
}
