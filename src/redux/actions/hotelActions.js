import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {BASE_URL} from "../../api/url"

//siempre en function async usar try catch para que no rompa la pagina
let getHotels = createAsyncThunk('getHotels', async()=>{
    try{
        const resp = await axios.get(`${BASE_URL}/api/hotels/`)
        console.log(resp)
        return{
            listsHotels: resp.data.response
        }
    }
    catch(error){
        console.log(error)
    }
})

let getHotelsFilters = createAsyncThunk('getHotelsFilters', async(filter)=>{
    try{
        const resp = await axios.get(`${BASE_URL}/api/hotels/?name=${filter.name}&order=${filter.order}`)
        console.log(resp)
        return{
            listsHotels: resp.data.response
        }
    }
    catch(error){
        return{
            listsHotels: error.resp.data.response
        }
    }
})


const hotelActions ={
    getHotels,
    getHotelsFilters,
}
export default hotelActions
