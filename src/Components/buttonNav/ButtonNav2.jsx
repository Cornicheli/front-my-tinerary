import React from "react";
import { useState } from "react";
import { aboveArrow, belowArow } from "../../constants/img";
import { LinksNav, ListLi, ListUl, StyledLink } from "../assets/Headers";

function ButtonNav2(props) {
  let { n8, n9 } = props;
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
            <StyledLink to="/myhotels">
              <ListLi>
                <LinksNav>{n9}</LinksNav>
              </ListLi>
            </StyledLink>
            <StyledLink to="/myshows">
              <ListLi>
                <LinksNav>{n8}</LinksNav>
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
export { ButtonNav2 };
