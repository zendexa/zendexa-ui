import { SelectorOptions, Target } from '../types'
import { useFieldSelector } from './useFieldSelector'

/*
|--------------------------------------------------------------------------
| Use Touched
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useTouchedSelector<State extends boolean = boolean>(
	path: string,
	options?: SelectorOptions
): State {
	return useFieldSelector<State>(path, { ...options, target: Target.TOUCHED })
}
