import { deepMerge } from 'jsutils'
import { appState as state } from 'SVReducers/initialStates/app'

export const appState = deepMerge(
  {
    initialized: false,
  },
  state
)