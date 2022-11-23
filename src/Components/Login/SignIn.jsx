import React, { useState } from 'react';
import '../../Styles/SignIn.css';

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      let login = { email, password }
      localStorage.setItem("user", JSON.stringify(login));
    }
  };
  return (
    <>
    <div className="sigin-body-cont">


    <div className='contenedor-form-signin'>

      <div className='title-singin'>

        <h1 className='singin-form'>MyTinerary</h1>
        <h2 className='singin-form'>Log-In</h2>

      </div>

    <div className='cont-form-singin'>

    <form className="form-signin">

          <input className='button-google'
            type="email"
            autoComplete='current-email'
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input className='button-google'
            type="password"
            autoComplete='on'
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

      </form>

    </div>


    <div className="submit-singin">

    <button className='submit2-singin-google' onClick={submit}>Login</button>

    <button className='submit2-singin-google' onClick={submit}>Login with Google</button>

    </div>


      </div>

      </div>

    </>
  );
};

export default SignInForm 
