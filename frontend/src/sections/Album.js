import React from 'react';
import styled from 'styled-components';
import Carousel from '../Components/Carousel';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;;
  background-color: #fff;
  display: flex;
  color: ${(props) => props.theme.text};
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Container = styled.div`
  width: 35%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  background-color: #fff;
  width: 30%;
  height: 100%;
  display: flex;
position: absolute;
  left: 10rem;
  display: flex-start;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
position:absolute;
left:35.5%;
width:100%;
min-height: 100vh;
padding-left:1rem;
display:flex;
  justify-content:center;
  align-items:center;
background-color: #202020;
p{
    font-size: ${(props) => props.theme.fontlg};   
     font-weight:300;
    width:80%;
    margin:0 auto;
  }
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  position: absolute;
  top: 1rem;
  color: ${(props) => props.theme.text};
  left: 50%;
  z-index: 11;
  text-shadow: 1px 1px 1px ${(props) => props.theme.fontxxxl};
`;
const Left = styled.div`
  width: 90%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
 

  position:fixed;
  left:35.5%;
  
  display:flex;
  justify-content:center;
  align-items:center;
;
  p{
    padding-top:2%;
    font-size: ${(props) => props.theme.fontlg};   
     font-weight:300;
    width:70%;
    padding-right:13%;
    max-width: 55%;
  }
`;
const SubTextLight = styled.p`
  font-size: 20px;
  color: yellow;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`;
const SubText = styled.p`
    font-size: ${(props) => props.theme.fontxl};   
     font-weight:300;
    position:absolute;
    
`;


const Album = () => {
  return (
    <Section>
      <Container>
      <Box>
          <Carousel />
        </Box>
        <Title data-scroll data-scroll-delay="1" data-scroll-speed="-3 ">
  Find Your Dream Job
      </Title>
      <Left>
        <p data-scroll data-scroll-delay="0.5" data-scroll-speed="2 ">
          Marketing yourself, particularly getting a job, needs having a CV
          (Curriculum Vitae), your valuable tool. For the interview Stage, the
          more time and effort you spend on tailoring your CV to the job you're
          going for, the better your chances of getting an interview. But they
          usually come with unattractive and boring visuals.
          <br />
          <br />
          <br />
          Thanks to BuilderRESUME project that customizes your business
          requirement to buy a CV template and fill it with your own data.
          <br />
          <br />
          Marketing yourself, particularly getting a job, needs having a CV
          (Curriculum Vitae), your valuable tool. For the interview Stage, the
          more time and effort you spen
        </p>
      </Left>
      </Container>
    </Section>
  );
};

export default Album;
