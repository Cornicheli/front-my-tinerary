import React from "react";
import { useState } from "react";
import { LinksNav, ListLi, ListUl, StyledLink } from "../assets/Headers";

import { aboveArrow, belowArow } from "../../constants/img";

function ButtonNav1(props) {
  let { n4, n5 } = props;
  let [mostraryOcultar, setMostraryOcultar] = useState(false);

  let hidee = () => {
    setMostraryOcultar(!mostraryOcultar);
  };
  return (
    <div>
      {mostraryOcultar ? (
        <>
          <img
            className="img"
            onClick={hidee}
            src={aboveArrow}
            width="40"
            height="30"
            alt="-"
          />
          <ListUl>
            <StyledLink to="/">
              <ListLi>
                <LinksNav>{n5}</LinksNav>
              </ListLi>
            </StyledLink>

            <StyledLink to="/hotels">
              <ListLi>
                <LinksNav>{n4}</LinksNav>
              </ListLi>
            </StyledLink>
          </ListUl>
        </>
      ) : (
        <img
          className="img"
          onClick={hidee}
          src={belowArow}
          width="40"
          height="30"
          alt="-"
        />
      )}
    </div>
  );
}
export { ButtonNav1 };
