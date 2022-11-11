import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    navbar: ""
}]

const navbarReducer = createSlice({
    name: "navbar",
    initialState,

    reducers: {
        mobile: (state) => {

            if (state[0].navbar) {
                state[0].navbar = "";

            } else {

                state[0].navbar = "mobile"
            }
        },
    }
})

const { mobile } = navbarReducer.actions;
const navReducer = navbarReducer.reducer;

export {
    mobile,
    navReducer
}