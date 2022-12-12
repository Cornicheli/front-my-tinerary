import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../../api/url";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SeeProfile() {
  const [user, setUser] = useState([]);
  let token = useSelector((store) => store.loginReducer.token);
  useEffect(() => {
    return async function fetchdata() {
      await axios.get(`${BASE_URL}/api/auth/me/${token.id}`).then((res) => {
        let userdata = res.data.response;
        setUser(userdata);
      });
    };
  }, []);
  return (
    <>
      <div className="col-2-header">
        <h2 className="title-profile">Your Profile</h2>
      </div>
      <div className="userData-cols">
        <form className="col-2-userData-1">
          <label> Name: </label>
          <input type="text" value={`${user.name}`} disabled />
          <label> LastName: </label>
          <input type="text" value={`${user.lastName}`} disabled />
          <label> Photo: </label>
          <input type="text" value={`${user.photo}`} disabled />
        </form>
        <form className="col-2-userData-2">
          <label> Age: </label>
          <input type="number" value={`${user.age}`} disabled />
          <label> Email: </label>
          <input type="text" value={`${user.email}`} disabled />
        </form>
      </div>
    </>
  );
}
