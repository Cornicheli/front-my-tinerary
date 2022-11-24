import { createReducer } from "@reduxjs/toolkit";
import myShowAction from "../actions/myShowAction";

const initialState = {}

const myShowReducer = createReducer(initialState, (myShow)=>{
    myShow.addCase(myShowAction.deleteShows.fulfilled, (state, action)=>{
        return {...state}
    })
} )

export default myShowReducer; 