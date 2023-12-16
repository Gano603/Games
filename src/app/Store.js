import { configureStore } from "@reduxjs/toolkit";
import StateReducer from "../features/State";

export const Store = configureStore({
    reducer:{state:StateReducer}
})