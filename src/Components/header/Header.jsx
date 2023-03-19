import React from "react";
import { ButtonNav } from "../buttonNav/ButtonNav";
import { ButtonNav1 } from "../buttonNav/ButtonNav1";
import { ButtonNav2 } from "../buttonNav/ButtonNav2";
import { ButtonNav3 } from "../buttonNav/ButtonNav3";
import { ButtonNav4 } from "../buttonNav/ButtonNav4";
import { ButtonNav5 } from "../buttonNav/ButtonNav5";
import { useDispatch, useSelector } from "react-redux";
import Profile1 from "../profile1/Profile1";
import loginAction from "../../redux/actions/loginAction";
import { CtnBtn, CtnHeaders } from "../assets/Headers";
const Swal = require("sweetalert2");

function Header() {
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.loginReducer);
  let name = userData.token.name;
  let photo = userData.token.photo;
  let logged = userData.token.logged;
  console.log(logged);
  // console.log(logged, photo, name);

  let adminData = useSelector((state) => state.loginReducer);
  let { role } = adminData.token;

  const SingOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You wish to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const tokenStorage = localStorage.getItem("token");
        dispatch(loginAction.logOut(tokenStorage));
        localStorage.removeItem("token");
        Swal.fire("Closed", "success");
      }
    });
  };

  return (
    <CtnHeaders>
      <>
        {logged ? null : (
          <CtnBtn>
            <h2 className="title">Login - Register</h2>
            <ButtonNav n1="Sign In" n2="Sign Up" />
          </CtnBtn>
        )}
        {logged && role === "user" ? (
          <>
            <CtnBtn>
              <h2 className="title">Pages</h2>
              <ButtonNav1 n4="Hotels" n5="Home" />
            </CtnBtn>
            <CtnBtn>
              <h2 className="title">City or Hotel</h2>
              <ButtonNav2 n8="My Shows" n9="My Hotels" />
            </CtnBtn>
            <CtnBtn>
              <h2 className="title">Profile</h2>
              <ButtonNav5 n11="Profile" />
            </CtnBtn>
            <Profile1 />
            <CtnBtn>
              <ButtonNav3 onClick={SingOut} n10="Sing Out" />
            </CtnBtn>
          </>
        ) : null}

        {logged && role === "admin" ? (
          <>
            <CtnBtn>
              <h2 className="title">Pages</h2>
              <ButtonNav1 n4="Hotels" n5="Home" />
            </CtnBtn>
            <CtnBtn>
              <h2 className="title">City or Hotel</h2>
              <ButtonNav2 n8="My Shows" n9="My Hotels" />
            </CtnBtn>
            <CtnBtn>
              <h2 className="title">New City or Hotel</h2>
              <ButtonNav4 n7="New Hotel" n11="New Shows" />
            </CtnBtn>
            <CtnBtn>
              <h2 className="title">Profile</h2>
              <ButtonNav5 n11="Profile" />
            </CtnBtn>
            <Profile1 />
            <CtnBtn>
              <ButtonNav3 onClick={SingOut} n10="Sing Out" />
            </CtnBtn>
          </>
        ) : null}
      </>
    </CtnHeaders>
  );
}
export { Header };
