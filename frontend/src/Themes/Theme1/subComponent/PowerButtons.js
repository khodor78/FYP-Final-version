import React, { useRef } from 'react';
import styled from 'styled-components';
import { PowerBtn } from '../components/AllSvg';
import { NavLink } from 'react-router-dom';
const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-20%, 0);

  background-color: #fcf6f4;
  padding: 0.1rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

&>*:first-child{
  text-decoration:none;
  color:inherit;
}

`;
function PowerButtons() {

  return (
    <Power>
      <NavLink to="/Theme1">
        <PowerBtn  className="try" width={30} height={30} fill="black" />
      </NavLink>
    </Power>
  );
}

export default PowerButtons;
