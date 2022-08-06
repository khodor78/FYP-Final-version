import React from 'react';
import styled from 'styled-components';
import Mainvideo from '../assets/video2-2 (1).mp4';
import { motion } from 'framer-motion';
const VideoContainerx = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      delayChildren: 3,
      staggerChildren: 0.3,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
`;
const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }
  h1 {
    font-family: 'Kaushan Script';
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  }
`;
const CoverVideo = () => {
  return (
    <VideoContainerx>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1  variants ={ item } data-scroll data-scroll-delay="0.13" data-scroll-speed="4 ">
            Portf
          </motion.h1>
          <motion.h1  variants ={ item} data-scroll data-scroll-delay="0.09" data-scroll-speed="4 ">
            olio
          </motion.h1>
          <motion.h1 variants ={ item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4 ">
            -
          </motion.h1>
          <motion.h1 variants ={ item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4 ">
            BUIL
          </motion.h1>
          <motion.h1 variants ={ item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4 ">
            DER
          </motion.h1>
        </div>
        <motion.h2 variants ={ item } data-scroll data-scroll-delay="0.04" data-scroll-speed="2 ">
          Just What you Want
        </motion.h2>
      </Title>

      <video src={Mainvideo} type="video/mp4" autoPlay muted loop></video>
    </VideoContainerx>
  );
};

export default CoverVideo;
