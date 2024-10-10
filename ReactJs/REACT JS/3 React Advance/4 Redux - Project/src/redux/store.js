import { configureStore } from "@reduxjs/toolkit";
import  CartSlice  from "./Slices/CartSlice";


export const store = configureStore({
    reducer:{
        cart:CartSlice
    }
})

// write provider inside index.js and pass store={store}