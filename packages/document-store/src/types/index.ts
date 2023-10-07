export interface ReduxFormProps<State> {
	name: string
	initialState: State
}

export interface ReduxFormState {
	initialize: boolean
	values: unknown
	errors: Record<string, string | null>
	touched: Record<string, boolean>
	disabled: Record<string, boolean>
	visibility: Record<string, boolean>
}

export type SelectorResult<State> = State | null
export type DispatchValue<State = unknown> = State
export type StateRoot = Record<string, ReduxFormState>
export type SelectorOptions = Partial<Pick<DispatcherPayload, 'form'>>
export type DispatchTarget<State = unknown> = (value: DispatchValue<State>) => void
export type DispatchSelectorTarget<State = unknown> = [SelectorResult<State>, DispatchTarget<State>]

export interface FormContextProps {
	form: string
}

export enum Target {
	ERROR = 'errors',
	VALUE = 'values',
	TOUCHED = 'touched',
	DISABLED = 'disabled',
	VISIBILITY = 'visibility'
}

export enum Type {
	SET_ERROR = 'SET_ERROR',
	SET_VALUE = 'SET_VALUE',
	INITIALIZE = 'INITIALIZE',
	SET_TOUCHED = 'SET_TOUCHED',
	SET_DISABLED = 'SET_DISABLED',
	SET_VISIBILITY = 'SET_VISIBILITY'
}

export interface DispatcherPayload<State = unknown> {
	value: State
	path: string
	form: string
}

export type Payload<Value> = {
	form: string
	value: Value
	path: string
}

export type Action<Payload> = {
	payload: Payload
}
