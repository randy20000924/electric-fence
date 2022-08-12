import {configureStore} from '@reduxjs/toolkit'

//兩種reducer 效果一樣

//import {infoReducer} from './infoReducer'
import infoReducer from './infoReducer2'

export default configureStore({
    reducer: {
        info: infoReducer,
    }
});
