import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api/url";
import axios from "axios";

const deleteHotels = createAsyncThunk("deleteHotels", async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/hotels/${id}`);
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
