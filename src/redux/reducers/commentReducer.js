import { createReducer } from "@reduxjs/toolkit";
import commentAction from "../actions/commentAction";

const initialState = {};

const commentReducer = createReducer(initialState, (comment) => {
comment.addCase(commentAction.getCommentss.fulfilled, (state, action) => {
    console.log(action.payload, "action <==");
    return { ...state, ...action.payload };
});
});
export default commentReducer;