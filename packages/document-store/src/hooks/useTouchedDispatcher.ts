import { useTouchedSelector } from './useTouchedSelector'
import { useTouchedDispatch } from './useTouchedDispatch'
import { DispatchSelectorTarget, SelectorOptions } from '../types'

/*
|--------------------------------------------------------------------------
| Use Value Dispatcher
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useTouchedDispatcher<State extends boolean = boolean>(
	path: string,
	options?: SelectorOptions
): DispatchSelectorTarget<State> {
	const value = useTouchedSelector<State>(path, options)
	const dispatch = useTouchedDispatch(path, options)

	return [value, dispatch]
}
