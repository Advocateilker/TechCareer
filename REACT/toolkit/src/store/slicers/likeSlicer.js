import { createSlice } from '@reduxjs/toolkit'

const initialState={
    likes:[]
}


export const likeSlicers = createSlice({
  name: 'likes',
  initialState,
  reducers: {

      addLike: (state, action) => {

        const repeat=state.likes.find((i)=> i.id === action.payload.id)

        if(repeat){
          return alert("zaten eklemişssiniz")
          
        }else{
          const newLike = [action.payload];

          state.likes = [...state.likes, ...newLike];

        }


      }

  },
})

export const { addLike,removeLike } = likeSlicers.actions

export default likeSlicers.reducer