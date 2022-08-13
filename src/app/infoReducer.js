import { createAction, createReducer } from '@reduxjs/toolkit'

export const displayInfo = createAction('increment')
const initialState = { value: true }
//(法一)
// export const infoReducer = createReducer(initialState, (builder) => {
//     builder
//     .addCase(displayInfo, (state, action) => {
//       state.value = !state.value
//     })
// })

//(法二) 此方法比較簡潔 兩者效果一樣 至於命名的部分 希望是以xxReducer 
//舉此例 info的操作可能有很多種 不一定只有 true<->false互換
export const infoReducer = createReducer(initialState, {
    [displayInfo]: (state, action) => {
      state.value = !state.value
    }
})


