import React from "react";
import { ListUl } from "../assets/Headers";

function ButtonNav3(props) {
  const { onClick } = props;

  return (
    <ListUl>
      <button onClick={onClick} className="button-singout">
        SignOut
      </button>
    </ListUl>
  );
}
export { ButtonNav3 };
