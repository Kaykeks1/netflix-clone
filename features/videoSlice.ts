import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface VideoState {
  categories: Array<object>
}

// Define the initial state using that type
const initialState: VideoState = {
  categories: [],
}

export const videoSlice = createSlice({
  name: 'video',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setHomeCategories: (state, action: PayloadAction<object[]>) => {
      const {payload} = action
      state.categories = payload.map((item:{name: string, videos: object[]}) => ({
        name: item.name,
        items: item.videos.map((vid:any) => ({
          type: vid.type,
          description: vid.description,
          duration: vid.duration,
          maturityRating: vid.maturityRating,
          name: vid.name,
          thumbnail: vid.thumbnail,
          year: vid.year,
        }))
      }))
    },
  },
})

export const { setHomeCategories } = videoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCategories = (state: RootState) => state.videos.categories

export default videoSlice.reducer