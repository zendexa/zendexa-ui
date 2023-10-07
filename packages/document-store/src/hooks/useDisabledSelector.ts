import { SelectorOptions, Target } from '../types'
import { useFieldSelector } from './useFieldSelector'

/*
|--------------------------------------------------------------------------
| Use Disabled
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useDisabledSelector<State extends boolean = boolean>(
	path: string,
	options?: SelectorOptions
): State {
	return useFieldSelector<State>(path, { ...options, target: Target.DISABLED })
}
