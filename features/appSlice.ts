import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface appState {
  showShortDetails: Boolean
}

// Define the initial state using that type
const initialState: appState = {
  showShortDetails: false,
}

export const appSlice = createSlice({
  name: 'app',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    toggleShortDetailsVisibility: (state) => {
      state.showShortDetails = !state.showShortDetails
    },
  },
})

export const { toggleShortDetailsVisibility } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectShortDetailsVisibility = (state: RootState) => state.app.showShortDetails

export default appSlice.reducer