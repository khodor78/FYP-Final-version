import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../Components/CoverVideo';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;
const Home = () => {
  return (
    <Section>
      <CoverVideo />
      <Logo />
      <Navbar />
    </Section>
  );
};

export default Home;
