
import {createSlice,configureStore} from "@reduxjs/toolkit";

const counterSlice= createSlice({
    name: "counter",
    initialState :{
        value: 0
    },
    reducers: {
        doIncrement: state=>{
            state.value=state.value+1
        },
        doDecrement: state=>{
            state.value=state.value-1
        }
    }
})
export const {doIncrement,doDecrement}=counterSlice.actions;
export const store=configureStore({
    reducer: counterSlice.reducer
})