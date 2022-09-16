import React from 'react';
import styled from 'styled-components';
import { DarkTheme } from '../components/Themes';

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
   font-family: 'Pacifico', cursive;
  font-size:20px;

  position: absolute;
  top:1.45em;
  z-index: 5;
  margin-left: 1rem;
  margin-right:1rem;
`;

function LogoComponent(props) {
  return (
    <Logo color={props.theme}>
      <h1> Khoder</h1>
    </Logo>
  );
}

export default LogoComponent;
