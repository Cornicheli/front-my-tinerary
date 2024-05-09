import React from "react";
import "../../Styles/header.css";
import { ButtonNav } from "../buttonNav/ButtonNav";
import { ButtonNav1 } from "../buttonNav/ButtonNav1";
import { ButtonNav2 } from "../buttonNav/ButtonNav2";
import { ButtonNav3 } from "../buttonNav/ButtonNav3";
import { ButtonNav4 } from "../buttonNav/ButtonNav4";
import { ButtonNav5 } from "../buttonNav/ButtonNav5";
import { useDispatch, useSelector } from "react-redux";
import Profile1 from "../profile1/Profile1";
import loginAction from "../../redux/actions/loginAction";
const Swal = require("sweetalert2");

function Header() {
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.loginReducer);
  let name = userData.token.name
  let photo = userData.token.photo
  let logged = userData.token.logged
  console.log(logged)
  // console.log(logged, photo, name);

  let adminData = useSelector((state) => state.loginReducer);
  let { role } = adminData.token;

  const SingOut = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You wish to log out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        const tokenStorage = localStorage.getItem("token");
        dispatch(loginAction.logOut(tokenStorage));
        localStorage.removeItem("token")
        Swal.fire(
          'Closed',
          'success'
        )
      }
    })
  };

  return (
    <header className="main-nav-header">
      <>
        {logged ? null : (
          <div className="buton-nav-header">
            <h2 className="title">Login - Register</h2>
            <ButtonNav n1="Sign In" n2="Sign Up" />
          </div>
        )}
        {logged && role === "user" ? (
          <>
            <div className="buton-nav-header">
              <h2 className="title">Pages</h2>
              <ButtonNav1 n4="Hotels" n5="Home" />
            </div>
            <div className="buton-nav-header">
              <h2 className="title">City or Hotel</h2>
              <ButtonNav2 n8="My Shows" n9="My Hotels" />
            </div>
            <div className="buton-nav-header">
              <ButtonNav5 n11="Profile" />
            </div>
            <Profile1 />
            <div className="buton-nav-header">
              <ButtonNav3 onClick={SingOut} n10="Sing Out" />
            </div>
          </>
        ) : null}

        {logged && role === "admin" ? (
          <>
            <div className="buton-nav-header">
              <h2 className="title">Pages</h2>
              <ButtonNav1 n4="Hotels" n5="Home" />
            </div>
            <div className="buton-nav-header">
              <h2 className="title">City or Hotel</h2>
              <ButtonNav2 n8="My Shows" n9="My Hotels" />
            </div>
            <div className="buton-nav-header">
              <h2 className="title">New City or Hotel</h2>
              <ButtonNav4 n7="New Hotel" n11="New Shows" />
            </div>
            <div className="buton-nav-header">
              <h2 className="title">Profile</h2>
              <ButtonNav5 n11="Profile" />
            </div>
            <Profile1 />
            <div className="buton-nav-header">
              <ButtonNav3 onClick={SingOut} n10="Sing Out" />
            </div>
          </>
        ) : null}
      </>
    </header>
  );
}
export { Header };
