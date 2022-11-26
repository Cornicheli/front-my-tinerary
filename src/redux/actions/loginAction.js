import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

let getToken = createAsyncThunk("getToken", async (tokenx) => {
  let headers = { headers: { Authorization: `Bearer ${tokenx}` } };
  let token = await axios.post(`${BASE_URL}/api/auth/token`, {}, headers);
  console.log(token.data.response.user)
  let res = token.data.response.user;
  return res;
});

const loginAction = {
  getToken,
};

export default loginAction;
