import { createReducer } from "@reduxjs/toolkit";
import myHotelAction from "../actions/myHotelAction";

const initialState = {};

const myHotelsReducer = createReducer(initialState, (myHotel) => {
  myHotel.addCase(myHotelAction.deleteHotels.fulfilled, (state, action) => {
    return { ...state };
  });
});

export default myHotelsReducer;
