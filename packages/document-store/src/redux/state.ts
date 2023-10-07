import { ReduxFormState, Target } from '../types'

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
|
| The initial form state
|
*/

export function getInitialState<T>(state?: T): ReduxFormState {
	return {
		initialize: true,
		[Target.ERROR]: {},
		[Target.TOUCHED]: {},
		[Target.DISABLED]: {},
		[Target.VISIBILITY]: {},
		[Target.VALUE]: state || {}
	}
}
