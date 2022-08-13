import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvg';
import { DarkTheme } from '../components/Themes'

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  &>*:not(:last-child){
    margin:0.5rem 0;
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props=>props.color === 'dark' ? DarkTheme.text : DarkTheme.body };
`;

const Socialicons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/khodor78"}}>
          <Github width={25} height={25} fill={props.theme ==="dark" ? DarkTheme.text : DarkTheme.body } />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}} to="/">
          <Twitter width={25} height={25} fill={props.theme ==="dark" ? DarkTheme.text : DarkTheme.body } />
        </NavLink>
      </div>
      <div>
        <NavLink  style={{color:'inherit'}} target="_blank" to={{pathname:"https://www.facebook.com/khodor.habbal.33"}}>
          <Facebook width={25} height={25} fill={props.theme ==="dark" ? DarkTheme.text : DarkTheme.body } />
        </NavLink>
      </div>
      <div>
        <NavLink style={{color:'inherit'}}  target="_blank" to={{pathname:"https://www.youtube.com"}}>
          <YouTube width={25} height={25} fill={props.theme ==="dark" ? DarkTheme.text : DarkTheme.body }/>
        </NavLink>
      </div>
      <Line theme={props.theme}/>
    </Icons>
  );
};

export default Socialicons;
