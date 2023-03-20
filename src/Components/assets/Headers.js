import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";

export const CtnBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  margin: 0.2rem;
`;
export const CtnHeaders = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 15vh;
  font-weight: 700;
  background-color: black;
`;

export const LinksNav = styled.a`
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  list-style: none;
`;

export const ListLi = styled.li``;

export const ListUl = styled.ul``;
