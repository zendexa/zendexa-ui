import _set from 'lodash/set'
import { getInitialState } from './state'
import { createSlice } from '@reduxjs/toolkit'
import { Action, Payload, ReduxFormState, StateRoot, Target } from '../types'

export const formState = createSlice({
	name: 'forms',
	initialState: {} as StateRoot,
	reducers: {
		initializer: (state, { payload }: Action<Omit<Payload<unknown>, 'path'>>) => {
			if (!state[payload.form]?.initialize) state[payload.form] = getInitialState(payload.value)
		},
		clear: (state, { payload }: Action<Omit<Payload<ReduxFormState>, 'path'>>) => {
			state[payload.form] = getInitialState(payload.value)
		},
		mutateValue: (state, { payload }: Action<Payload<unknown>>) => {
			_set(state, `${payload.form}.${[Target.VALUE]}.${payload.path}`, payload.value)
		},
		mutateError: (state, { payload }: Action<Payload<string | null>>) => {
			_set(state, `${payload.form}.${[Target.ERROR]}["${payload.path}"]`, payload.value)
		},
		mutateVisibility: (state, { payload }: Action<Payload<boolean>>) => {
			_set(state, `${payload.form}.${[Target.VISIBILITY]}["${payload.path}"]`, payload.value)
		},
		mutateTouched: (state, { payload }: Action<Payload<boolean>>) => {
			_set(state, `${payload.form}.${[Target.TOUCHED]}["${payload.path}"]`, payload.value)
		},
		mutateDisabled: (state, { payload }: Action<Payload<boolean>>) => {
			_set(state, `${payload.form}.${[Target.DISABLED]}["${payload.path}"]`, payload.value)
		}
	}
})
