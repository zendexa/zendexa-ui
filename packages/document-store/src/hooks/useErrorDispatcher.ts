import { useErrorSelector } from './useErrorSelector'
import { useErrorDispatch } from './useErrorDispatch'
import { DispatchSelectorTarget, SelectorOptions } from '../types'

/*
|--------------------------------------------------------------------------
| Use Value Dispatcher
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useErrorDispatcher<State extends string | null = string | null>(
	path: string,
	options?: SelectorOptions
): DispatchSelectorTarget<State> {
	const value = useErrorSelector<State>(path, options)
	const dispatch = useErrorDispatch(path, options)

	return [value, dispatch]
}
