import { FormContextProps } from '../types'
import { createContext } from '@zendexa/common-create-context'

/*
|--------------------------------------------------------------------------
| Form Context
|--------------------------------------------------------------------------
|
| Create form context and defined defaults.
|
*/

export const ReduxFormContext = createContext<FormContextProps>({ form: '' })
