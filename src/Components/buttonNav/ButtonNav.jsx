import React from "react";
import { useState } from "react";
import { aboveArrow, belowArow } from "../../constants/img";
import { LinksNav, ListLi, ListUl, StyledLink } from "../assets/Headers";

function ButtonNav(props) {
  let { n1, n2 } = props;
  let [mostrarOcultar, setMostrarOcultar] = useState(false);

  //funcion para mostrar el menu
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
            src={aboveArrow}
            width="40"
            height="30"
            alt="-"
          />
          <ListUl>
            <StyledLink to="/SignIn">
              <ListLi>
                <LinksNav>{n1}</LinksNav>
              </ListLi>
            </StyledLink>
            <StyledLink to="/signup">
              <ListLi>
                <LinksNav>{n2}</LinksNav>
              </ListLi>
            </StyledLink>
          </ListUl>
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
      )}
    </div>
  );
}
export { ButtonNav };
