import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./navbarState";
import { resumeReducer } from "./resumeContentState";

const store = configureStore({
    reducer: {
        navbar: navReducer,
        resume:resumeReducer
    }
})

export default store