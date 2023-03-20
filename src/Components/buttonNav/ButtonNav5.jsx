import React from "react";
import { useState } from "react";
import { aboveArrow, belowArow } from "../../constants/img";
import { LinksNav, ListLi, ListUl, StyledLink } from "../assets/Headers";

function ButtonNav5(props) {
  let { n11 } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);

  let hide = () => {
    setMostrarOcultar(!mostrarOcultar);
  };

  return (
    <div>
      <ListUl>
        <StyledLink to="/profile">
          <ListLi>
            <LinksNav>{n11}</LinksNav>
          </ListLi>
        </StyledLink>
      </ListUl>
      {/* {mostrarOcultar ? (
        <>
          <img
            className="img"
            onClick={hide}
            src={aboveArrow}
            width="40"
            height="30"
            alt="-"
          />
         
        </>
      ) : (
        <img
          className="img"
          onClick={hide}
          src={belowArow}
          width="40"
          height="30"
          alt="-"
        />
      )} */}
    </div>
  );
}
export { ButtonNav5 };
