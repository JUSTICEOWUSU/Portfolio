import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./navbarState";

const store = configureStore({
    reducer: {
        navbar: navReducer
    }
})

export default store