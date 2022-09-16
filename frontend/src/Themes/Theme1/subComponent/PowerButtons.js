import React, { useRef } from 'react';
import styled from 'styled-components';
import { PowerBtn } from '../components/AllSvg';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
const Power = styled.button`
z-index: -10;
  position: fixed;
  top: 2rem;
  left: 49%;


  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;

  &:hover {
    background-color: silver;
    box-shadow:0 0 8px 6px white;
  }

&>*:first-child{
  text-decoration:none;
  color:inherit;
  margin-right:0px;
}

`;

function PowerButtons() {
  const navigate = useNavigate();
const change = () =>{
  navigate('/Theme1');
}
  return (
    <Power onClick={change}>
        <PowerBtn width={30} height={30} fill="" />
     
    </Power>
  );
}

export default PowerButtons;
