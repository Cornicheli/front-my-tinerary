import React from "react";
import { useState } from "react";
import { aboveArrow, belowArow } from "../../constants/img";
import { LinksNav, ListLi, ListUl, StyledLink } from "../assets/Headers";

function ButtonNav4(props) {
  let { n7, n11 } = props;
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
            src={aboveArrow}
            width="40"
            height="30"
            alt="-"
          />

          <ListUl>
            <StyledLink to="/new-hotel">
              <ListLi>
                <LinksNav>{n7}</LinksNav>
              </ListLi>
            </StyledLink>

            <StyledLink to="/newshow">
              <ListLi>
                <LinksNav>{n11}</LinksNav>
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
export { ButtonNav4 };
