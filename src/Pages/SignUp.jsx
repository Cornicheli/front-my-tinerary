import { React, useRef } from "react";
import "../Styles/SignUp.css";
import { BASE_URL } from "../api/url";
import axios from "axios";
import Swal from "sweetalert2";

export default function Input() {
  const nameRef = useRef();
  const lastNameRef = useRef();
  const photoRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  async function saveData(e) {
    e.preventDefault();
    let userValue = {
      name: nameRef.current.value,
      lastName: lastNameRef.current.value,
      photo: photoRef.current.value,
      age: ageRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      let res = await axios.post(`${BASE_URL}/api/auth/`, userValue);
      console.log(res);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "The user has been created successfully!",
          text: `Activate your account login in your email.`,
        });
        formRef.current.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "We found an error...",
          text: `Errors: ${res.data.message.join(", ")}`,
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error, the user email, it s already exist",
        text: err.message,
      });
    }
  }

  return (
    <>
      <div className="content-singup">
        <div className="content-form">
          <h2>Sign Up</h2>
          <form ref={formRef}>
            <label htmlFor="text">Name</label>
            <input name="name" type="text" placeholder="Name" ref={nameRef} />

            <label htmlFor="text">LastName</label>
            <input
              name="lastName"
              type="text"
              placeholder="LastName"
              ref={lastNameRef}
            />
            <label htmlFor="text">Photo</label>
            <input
              name="photo"
              type="text"
              placeholder="Photo"
              ref={photoRef}
            />
            <label htmlFor="text">Age</label>
            <input name="age" type="number" placeholder="Age" ref={ageRef} />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              ref={emailRef}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            <div className="bottom">
              <input
                onClick={saveData}
                className="botom-signup"
                type="button"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
