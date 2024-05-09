import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../../../api/url";
import { useState } from "react";
import { useSelector } from "react-redux";
import { InputProfile } from "../../InputProfile";

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
    <div className="flex items-center flex-col h-full w-96 justify-around">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="relative z-10 md:mx-0 rounded-3xl"
        >
          <h2 className="text-xl no-underline h-6text-gray-700 text-center">Your Profile</h2>
          <div className="max-w-md mx-auto text-gray-700">
            <form className="mt-3 flex items-center flex-col">
              <InputProfile
                title={'Name :'}
                value={user.name}
                type={'text'}
              />
              <InputProfile
                title={'LastName :'}
                value={user.lastName}
                type={'text'}
              />
              <InputProfile
                title={'Age:'}
                value={user.age}
                type={'number'}
              />
              <InputProfile
                title={'Email :'}
                value={user.email}
                type={'email'}
              />
              <InputProfile
                title={'photo :'}
                value={user.photo}
                type={'text'}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
