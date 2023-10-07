import { SelectorOptions, Target } from '../types'
import { useFieldSelector } from './useFieldSelector'

/*
|--------------------------------------------------------------------------
| Use Value
|--------------------------------------------------------------------------
|
| Use to select source target
|
*/

export function useValueSelector<State>(path: string, options?: SelectorOptions): State {
	return useFieldSelector<State>(path, { ...options, target: Target.VALUE })
}
