import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getComments = createAsyncThunk('getComments', async(showId)=>{
    try{
        const respComments = await axios.get(`${BASE_URL}/api/comments?showsId=${showId}`)
        console.log(respComments.data)
        return respComments.data.response
    } catch(error){
        console.log(error)
        return{
            payload: "Error"
        }
    }
})

const commentAction = {
    getComments
};

export default commentAction