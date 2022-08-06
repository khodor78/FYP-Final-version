import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../index.css';
const NavContainer = styled(motion.div)`
  z-index: 6;

  position: absolute;
  bottom: 0;

  top: 0;
  right: -105px;
  transition: all 0.3s ease;
`;
const MenuItem = styled(motion.ul)`
  position: relative;

  color: ${(props) => props.theme.text};
  list-style: none;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 16rem;

  padding: 0 7rem;
`;
const MenuItems = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  font-size: 2rem;

  padding-top: 0.5rem;
`;
const Menu = styled.li`
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  font-weight: bold;
  font-size: 2em;
  cursor: pointer;
  width: 11rem;
  height: 2.5rem;
  padding-bottom: 1rem;

  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  position: absolute;
  top: 0%;
  left: -10%;
`;
const Navbar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => {
    setClick(!click);
    console.log(click);
  };
  return (
    <NavContainer
      className={click ? 'active' : ''}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{
        duration: 1,
        delay: 4,
      }}
    >
      <MenuItem
        
        drag="x"
        dragConstraints={{ top: 0, right: 0, left: 0 }}
        dragElastic={0.5}
        dragSnapToOrigin
        className={click ? '' : 'activeMenu'}
      >
        <Menu onClick={handleClick} >MENU</Menu>

        <br /><br/>

        <MenuItems whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.09, y:0}}>Home</MenuItems>
        <MenuItems whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.09, y:0}}>About US</MenuItems>
        <MenuItems whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.09, y:0}}>Theme</MenuItems>
        <MenuItems  whileHover={{scale:1.1,y:-5}} whileTap={{scale:0.09, y:0}}>Pricing</MenuItems>
      </MenuItem>
    </NavContainer>
  );
};

export default Navbar;
