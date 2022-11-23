import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const deleteHotels = createAsyncThunk("deleteHotels", async (id) => {
  let url = `${BASE_URL}/api/hotels/${id}`;
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
const myHotelAction = {
  deleteHotels,
};

export default myHotelAction;
