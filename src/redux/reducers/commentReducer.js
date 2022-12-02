import  {createReducer} from '@reduxjs/toolkit'
import commentAction from '../actions/commentAction'

const initialState ={}

const commentReducer = createReducer(initialState,(comment) =>{
comment.addCase(commentAction.getComments.fulfilled,(state, action) =>{
    return{...state}
    })
})
export default commentReducer