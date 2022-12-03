import { React, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../api/url";
import loginAction from "../../redux/actions/loginAction";
import { useNavigate } from "react-router-dom";

import "../../Styles/SignIn.css";
const Swal = require("sweetalert2");

function SignInForm() {
  const email = useRef();
  const pwd = useRef();
  const navigate = useNavigate();
  let store = useSelector((state) => state.loginReducer);
  console.log(store.token, "<===");
  const dispatch = useDispatch();
  async function submit(e) {
    e.preventDefault();
    const dataLogin = {
      email: email.current.value,
      password: pwd.current.value,
    };
    try {
      let res = await axios.post(`${BASE_URL}/api/auth/signin`, dataLogin);
      console.log(res);
      if (res.data.success) {
        let tokenx = res.data.response.token;
        dispatch(loginAction.getToken(tokenx));
        console.log(tokenx, "tokenx<==");
        localStorage.setItem("token", tokenx);
        Swal.fire({
          title: "Successfully Login",
          html: "We're redirecting you to Home Page...",
          timer: 2200,
          timerProgressBar: true,
          willClose: () => {
            navigate("/");
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "We found an error... ",
          text: `Errors: ${res.data.message.join(", ")}`,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "We found an error...",
        text: `Errors: You have entered an invalid email or password.`,
      });
    }
  }
  return (
    <>
      <div className="sigin-body-cont">
        <div className="contenedor-form-signin">
          <div className="title-singin">
            <h1 className="singin-form">MyTinerary</h1>
            <h2 className="singin-form">Log-In</h2>
          </div>

          <div className="cont-form-singin">
            <form className="form-signin">
              <input
                className="button-google"
                type="email"
                autoComplete="current-email"
                placeholder="Email"
                ref={email}
              />

              <input
                className="button-google"
                type="password"
                autoComplete="on"
                placeholder="Password"
                ref={pwd}
              />
            </form>
          </div>

          <div className="submit-singin">
            <button className="submit2-singin-google" onClick={submit}>
              Login
            </button>

            <Link to="/SignUp">
              <button className="buttonsignin">Register now!</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignInForm;
