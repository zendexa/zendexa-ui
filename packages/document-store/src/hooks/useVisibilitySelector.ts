import { SelectorOptions, Target } from '../types'
import { useFieldSelector } from './useFieldSelector'

/*
|--------------------------------------------------------------------------
| Use Visibility
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useVisibilitySelector<State extends boolean = boolean>(
	path: string,
	options?: SelectorOptions
): State {
	return useFieldSelector<State>(path, {
		...options,
		target: Target.VISIBILITY
	})
}
