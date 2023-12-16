import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    side:false
}

const State = createSlice({
name:"State",
initialState,
reducers:{
    setSideOpen:(state,action) =>{
        state["side"] = action.payload;
    }
}
})

export const {setSideOpen} = State.actions;

export default State.reducer