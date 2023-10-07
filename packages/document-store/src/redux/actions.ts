import { formState } from './slice'

export const {
	mutateDisabled,
	mutateTouched,
	mutateError,
	mutateVisibility,
	mutateValue,
	initializer
} = formState.actions
