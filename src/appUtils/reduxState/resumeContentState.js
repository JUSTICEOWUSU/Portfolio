import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    education:"education",
    programming:"",
    projects:"",
    current:"education"
}]

const resumeState = createSlice({
    name:"resume",
    initialState,
    reducers:{
        changeResume:(state,{payload})=>{
            const {content} = payload;
            const newState =  state[0]
           let currentState = newState.current;
           newState[currentState] = ""
           newState[content] = content;
           newState.current = content;
           state = newState
        }
    }
})

const {changeResume} = resumeState.actions;
const resumeReducer = resumeState.reducer;

export {
    changeResume,
    resumeReducer
}