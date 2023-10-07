import { useValueSelector } from './useValueSelector'
import { useValueDispatch } from './useValueDispatch'
import { DispatchSelectorTarget, SelectorOptions } from '../types'

/*
|--------------------------------------------------------------------------
| Use Value Dispatcher
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useValueDispatcher<State>(
	path: string,
	options?: SelectorOptions
): DispatchSelectorTarget<State> {
	const value = useValueSelector<State>(path, options)
	const dispatch = useValueDispatch(path, options)

	return [value, dispatch]
}
