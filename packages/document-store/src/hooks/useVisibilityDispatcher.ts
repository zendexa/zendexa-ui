import { useVisibilitySelector } from './useVisibilitySelector'
import { useVisibilityDispatch } from './useVisibilityDispatch'
import { DispatchSelectorTarget, SelectorOptions } from '../types'

/*
|--------------------------------------------------------------------------
| Use Value Dispatcher
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useVisibilityDispatcher<State extends boolean = boolean>(
	path: string,
	options?: SelectorOptions
): DispatchSelectorTarget<State> {
	const value = useVisibilitySelector<State>(path, options)
	const dispatch = useVisibilityDispatch(path, options)

	return [value, dispatch]
}
