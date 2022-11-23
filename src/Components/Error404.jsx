import React from "react";
import "../Styles/error404.css";
import {Link as LinkNav} from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div className="container-404">
        <div className="mainbox">
          <div className="error-in-404">
            <p className="err">4</p>
            <p className="far">0</p>
            <p className="err2">4</p>
          </div>

          <div className="msg">
            Maybe this page moved? <br /> Got deleted? <br /> Is hiding out in
            quarantine? <br /> Never existed in the first place? <br /> Try
            Again{" "}
          </div>

          <div className="msg1">
            {" "}
            <LinkNav className="Home-btn" to={`/`}> Home</LinkNav>
          </div>
          
        </div>
      </div>
    </>
  );
}
