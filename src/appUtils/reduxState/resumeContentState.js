import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    education:"education",
    programming:"",
    project:"",
    current:"education"
}]

const resumeState = createSlice({
    name:"resume",
    initialState,
    reducers:{
        changeResume:(state,{change})=>{
           let currentState = state[0].current;
           state[0][currentState] = ""
           state[0][change] = change;
           state[0].currentState = change;

        }
    }
})

const {changeResume} = resumeState.actions;
const resumeReducer = resumeState.reducer;

export {
    changeResume,
    resumeReducer
}