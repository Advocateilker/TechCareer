import { configureStore } from '@reduxjs/toolkit'
import likeSlicer from './slicers/likeSlicer'

const store = configureStore({
  reducer:likeSlicer
})

export default store