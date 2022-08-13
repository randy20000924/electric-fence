import { createSlice} from '@reduxjs/toolkit'

const initialState = { value: true }

export const infoSlices = createSlice({
  name: 'infoDisplay',
  initialState,
  reducers:{
    displayInfo:(state, action)=>{
      state.value = !state.value
    }
  }
})

export const {displayInfo} = infoSlices.actions;

export default infoSlices.reducer

