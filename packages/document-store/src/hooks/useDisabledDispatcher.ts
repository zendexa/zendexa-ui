import { useDisabledSelector } from './useDisabledSelector'
import { useDisabledDispatch } from './useDisabledDispatch'
import { DispatchSelectorTarget, SelectorOptions } from '../types'

/*
|--------------------------------------------------------------------------
| Use Value Dispatcher
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useDisabledDispatcher<State extends boolean = boolean>(
	path: string,
	options?: SelectorOptions
): DispatchSelectorTarget<State> {
	const value = useDisabledSelector<State>(path, options)
	const dispatch = useDisabledDispatch(path, options)

	return [value, dispatch]
}
