import React from "react";
import { useState } from "react";
import "../../Styles/ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav4(props) {
  let { n7 , n11 } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);

  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
  };

  return (
    <div>
      {mostrarOcultar ? (
        <>
          <img
            className="img"
            onClick={hide}
            src="https://cdn-icons-png.flaticon.com/512/3240/3240696.png"
            width="40"
            height="30"
            alt="-"
          />
          <ul className="ul">
            <NavLink to="/new-hotel">
              <li className="a">
                <a className="ancorLink" href="-">
                  {n7}
                </a>
              </li>
            </NavLink>
          </ul>
          <ul className="ul">
            <NavLink to="/newshow">
              <li className="a">
                <a className="ancorLink" href="-">
                  {n11}
                </a>
              </li>
            </NavLink>
          </ul>
        </>
      ) : (
        <img
          className="img"
          onClick={hide}
          src="https://cdn-icons-png.flaticon.com/512/3240/3240694.png"
          width="40"
          height="30"
          alt="-"
        />
      )}
    </div>
  );
}
export { ButtonNav4 };
