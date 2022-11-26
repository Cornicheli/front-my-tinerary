import { createReducer } from "@reduxjs/toolkit"
import loginAction from "../actions/loginAction"
const initialState = {
    token: "",
}

const loginReducer = createReducer(initialState, (login) => {
    login.addCase(loginAction.getToken.fulfilled, function (state, action) {
        console.log(action)
            return { token: action.payload }
        }) })

export default loginReducer