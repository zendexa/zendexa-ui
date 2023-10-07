import { SelectorOptions, Target } from '../types'
import { useFieldSelector } from './useFieldSelector'

/*
|--------------------------------------------------------------------------
| Use Error
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useErrorSelector<State extends string | null = string>(
	path: string,
	options?: SelectorOptions
): State {
	return useFieldSelector<State>(path, { ...options, target: Target.ERROR })
}
