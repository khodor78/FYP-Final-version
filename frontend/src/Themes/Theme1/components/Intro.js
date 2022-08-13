import React from 'react';
import styled from 'styled-components';
import Me from '../assets/Images/me1.png';
import { motion } from 'framer-motion';
//import '../index.css';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;
const Subbox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 39px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1vw);
  color: ${(props) => props.theme.body};

  cursor: pointer;
  padding-left: 1rem;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
    margin-bottom: 10rem;
  }
`;

const Intro = (props) => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <Subbox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Full-Stach Developer </h3>
          <h6>
          Highly determined and energetic, efficient in my work, and well detail oriented.
          </h6>
        </Text>
      </Subbox>
      <Subbox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transision={{ type: 'spring', duration: 2, delay: 1 }}
        >
          <img className="pic" src={Me} alt="" />
        </motion.div>
      </Subbox>
    </Box>
  );
};

export default Intro;
