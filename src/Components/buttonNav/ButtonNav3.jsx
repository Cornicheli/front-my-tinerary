import React from "react";
import "../../Styles/ButtonNav.css";

function ButtonNav3(props) {
  const { onClick } = props;

  return (
    <ul className="ul">
      <button onClick={onClick} className="button-singout">
        SignOut
      </button>
    </ul>
  );
}
export { ButtonNav3 };
