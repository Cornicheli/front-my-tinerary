import {createReducer} from "@reduxjs/toolkit"
import hotelActions from "../actions/hotelActions"

const initialState ={
    listsHotels:[]
}

const hotelsReducers = createReducer(initialState, (builder)=>{

    builder.addCase(hotelActions.getHotels.fulfilled, (state, action) =>{
        console.log(action.payload)
        return{...state, listsHotels:action.payload.listsHotels}
    })

    builder.addCase(hotelActions.getHotelsNames.fulfilled, function (state, action) {
        return { ...state, listsHotels:action.payload.listsHotels }
    })

    builder.addCase(hotelActions.getHotelsFilters.fulfilled,(state,action)=>{
        return {...state, listsHotels:action.payload.listsHotels}
    })

})

export default hotelsReducers