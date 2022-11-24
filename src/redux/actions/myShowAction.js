import {  createAsyncThunk} from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const deleteShows = createAsyncThunk("deleteShows", async (id) => {
    let url = `${BASE_URL}/api/shows/${id}`;
    try {
      await axios.delete(url);
      return {
        success: true,
      };
    } catch (error) {
      return {
        error: true,
      };
    }
  });
const myShowAction ={
    deleteShows
}

export default myShowAction;