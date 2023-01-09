import EditProfile from "./components/EditProfile";
import { NavLink } from "react-router-dom";
import "./style/ViewProfile2.css";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ViewProfile2() {
  const [user, setUser] = useState([]);
  let token = useSelector((store) => store.loginReducer.token);
  console.log(token);
  useEffect(() => {
    return async function fetchdata() {
      await axios.get(`${BASE_URL}/api/auth/me/${token.id}`).then((res) => {
        console.log(res);
        let userdata = res.data.response;
        setUser(userdata);
      });
    };
  }, []);
  return (
    <div className="main-profile">
      <div className="profile-card">
        <div className="col-1-pc2">
          <div className="col-1-profile">
            <div>
              <img className="profile-pic" src={`${user.photo}`} />
            </div>
            <div className="profile-name">
              <h2 className="title-profile">{`${user.name}`}</h2>
            </div>
            <div className="col-1-links2">
              <NavLink to={"/Profile"}>Profile</NavLink>
              <hr />
              <NavLink to={"./"}>Edit Profile</NavLink>
            </div>
          </div>
        </div>
        <div className="col-2-pc2">
          <EditProfile />
        </div>
      </div>
    </div>
  );
}
