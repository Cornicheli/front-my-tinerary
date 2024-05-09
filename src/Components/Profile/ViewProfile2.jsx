import EditProfile from "./components/EditProfile";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/url";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import './style/ViewProfile.css'

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
    <div className='main-profile'>
      <div className="flex flex-col items-center relative rounded-xl bg-neutral-100 bg-clip-border shadow-md">
        <div className="flex flex-row items-center justify-around">
          <NavLink className='text-3xl font-semibold text-gray-700 mx-2 p-2' to={"/Profile"}>Profile</NavLink>

          <NavLink className='text-3xl font-semibold text-gray-700 mx-2 p-2' to={"./"}>Edit Profile</NavLink>
        </div>
        <div className='flex items-center flex-row px-2 py-5 mx-4'>
          <div className='w-72 h-72 rounded-full border-2'>
            <img className="w-full h-full rounded-full border-2" src={`${user.photo}`} alt="profile-pic" />
          </div>
          <EditProfile />

        </div>
      </div>
    </div>
  );
}
