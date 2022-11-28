import {createReducer} from "@reduxjs/toolkit";
import loginAction from "../actions/loginAction";
const initialState = {
  token: "",
};

const loginReducer = createReducer(initialState, (login) => {
  login.addCase(loginAction.getToken.fulfilled, function (state, action) {
    console.log(action);
    return { token: action.payload };
  });

  login.addCase(loginAction.logOut.fulfilled, (state, action) => {
    const { success } = action.payload;
    if (success) {
      return { token: '' };
    }
  });
});

export default loginReducer;
