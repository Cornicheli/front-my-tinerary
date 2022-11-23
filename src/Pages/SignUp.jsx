import React, { useState } from "react";
import "../Styles/SignUp.css";
import { useNavigate } from "react-router-dom";

// funcionando correcto

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "user",
      JSON.stringify({ name, surName, country, mobileNumber, mail, password })
    );
    navigate("login");
  };

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (
      name === "" ||
      surName === "" ||
      country === "" ||
      mobileNumber === "" ||
      mail === "" ||
      password === ""
    ) {
    } else {
      localStorage.setItem("name", name);
      localStorage.setItem("surName", surName);
    }
  };

  return (
    <>
      <div className="content-singup">
        <div className="content-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="text">Name</label>
            <input
              name="name"
              value={name}
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="text">LastName</label>
            <input
              name="surName"
              value={surName}
              type="text"
              placeholder="SurName"
              onChange={(e) => setSurName(e.target.value)}
            />

            <label htmlFor="text">Country</label>
            <input
              name="country"
              value={country}
              type="text"
              placeholder="Country"
              onChange={(e) => setCountry(e.target.value)}
            />

            <label htmlFor="text">Phone</label>
            <input
              name="mobileNumber"
              value={mobileNumber}
              type="tel"
              placeholder="Phone"
              onChange={(e) => setMobileNumber(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              name="mail"
              value={mail}
              type="email"
              placeholder="Email"
              onChange={(e) => setMail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="bottom">

            <button className='botom-signup' onClick={submit}>Register</button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}
