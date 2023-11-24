import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background-color: #1871cd;
  padding: 15px;
`;
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;

  color: #fff;
`;

export const Logo = styled.svg`
  width: 20px;
  height: 20px;
`;
export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 30px;
    align-items: start;
    grid-template-columns: 1fr 1fr;
  }
`;
