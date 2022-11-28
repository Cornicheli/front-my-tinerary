import React from "react";
import "../../Styles/header.css";
import { ButtonNav } from "../buttonNav/ButtonNav";
import { ButtonNav1 } from "../buttonNav/ButtonNav1";
import { ButtonNav2 } from "../buttonNav/ButtonNav2";
import { ButtonNav3 } from "../buttonNav/ButtonNav3";
import { ButtonNav4 } from "../buttonNav/ButtonNav4";
import { useDispatch, useSelector } from "react-redux";
import loginAction from "../../redux/actions/loginAction";
import Profile from "../Profile/Profile";

function Header() {
  const dispatch = useDispatch();
  let userData = useSelector((state) => state.loginReducer);
  let { logged, photo, name } = userData?.token;
  console.log(logged, photo, name);

  let adminData = useSelector((state) => state.loginReducer);
  let { role } = adminData?.token;

  const SingOut = () => {
    const tokenStorage = localStorage.getItem("token");
    dispatch(loginAction.logOut(tokenStorage));
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
              <ButtonNav3 onClick={SingOut} n10="Sing Out" />
            </div>
            <Profile />
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
              <h2 className="title">SignOut</h2>
              <ButtonNav3 onClick={SingOut} n10="Sing Out" />
            </div>
            <div className="buton-nav-header">
              <h2 className="title">New City or Hotel</h2>
              <ButtonNav4 n7="New Hotel" />
            </div>
            <Profile />
          </>
        ) : null}
      </>
    </header>
  );
}
export { Header };
