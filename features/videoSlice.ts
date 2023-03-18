import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state

interface videoDetailsType {
  name:string,
  description:string,
  year:string,
  duration:string,
  maturityRating:string,
  thumbnail:object
}
interface VideoState {
  categories: Array<object>,
  videoDetails: videoDetailsType
}

// Define the initial state using that type
const initialState: VideoState = {
  categories: [],
  videoDetails: {
    name: '',
    description: '',
    year: '',
    duration: '',
    maturityRating: '',
    thumbnail: {},
  }
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
        items: item.videos.map((vid:videoDetailsType) => ({
          description: vid.description,
          duration: vid.duration,
          maturityRating: vid.maturityRating,
          name: vid.name,
          thumbnail: vid.thumbnail,
          year: vid.year,
        }))
      }))
    },
    setVideoDetails: (state, action: PayloadAction<videoDetailsType>) => {
      const { payload } = action
      state.videoDetails = payload;
    }
  },
})

export const { setHomeCategories, setVideoDetails } = videoSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCategories = (state: RootState) => state.videos.categories
export const selectVideoDetails = (state: RootState) => state.videos.videoDetails

export default videoSlice.reducer