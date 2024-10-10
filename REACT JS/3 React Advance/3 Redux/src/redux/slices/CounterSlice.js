import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
    // if we write value:100 then count show 100 initially
}

export const CounterSlice = createSlice({
    name:"counter",    //used when we fetch the value of initialState 
    initialState,
    reducers:{
        // function
        increment : (state)=>{
            state.value += 1;
        },
        decrement :(state) => {
            state.value -= 1;
        }
    }
})

export const {increment,decrement} = CounterSlice.actions //function fetched and exported so we can use this by using useDispatch

export default  CounterSlice.reducer