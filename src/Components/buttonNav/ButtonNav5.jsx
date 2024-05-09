import React from "react";
import { useState } from "react";
import "../../Styles/ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav5(props) {
  let { n11 } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);

  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
  };

  return (
    <div>
      {mostrarOcultar ? (

        <ul className="ul">
          <NavLink to="/profile">
            <li className="a">
              <a className="ancorLink" href="-">
                {n11}
              </a>
            </li>
          </NavLink>
        </ul>
      ) : (
        <img
          className="img"
          onClick={hide}
          src="https://cdn-icons-png.flaticon.com/512/3240/3240694.png"
          width="25"
          height="25"
          alt="-"
        />
      )}
    </div>
  );
}
export { ButtonNav5 };
