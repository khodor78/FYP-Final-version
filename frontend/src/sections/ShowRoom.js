import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import img from '../assets/Images/one.png';
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & > *:first-child {
    animation-duration: 15s;
  }
  & > *:last-child {
    animation-duration: 15s;
  }
`;
const move = keyframes`
0%{ transform: translateX(100%) };
100%{ transform: translateX(-100%)}
`;
const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 30rem;
  margin: 0 1rem;
  background-color: #fff;
  border-radius: 20px;
  cursor: pointer;

  img {
    background-size: cover;
    width: 100%;
    height: auto;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: #202020;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: 0.875em;
    color: #fff;
    font-weight: 600;
    line-height: 1.5rem;
  }
  h1 {
    font-size: 2em;
    color: #fff;
    font-weight: 600;
  }
`;
const Product = ({ img, name, role, chara, x, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  };
  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="no-img" />
      <Details>
        <div>
          <span>
            {' '}
            <h1>{name} </h1>
          </span>{' '}
          <br />
          <h1>{chara}</h1>
        </div>
        <div>
          <span>
            {' '}
            <h1>{role} </h1>
          </span>{' '}
          <br />
          <h1>{x}</h1>
        </div>
      </Details>
    </ImgContainer>
  );
};
const ShowRoom = () => {
  const Row1ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <Section>
      <Row direction="none" ref={Row1ref}>
        <Product
          img={img}
          name={'Professionality'}
          role={'Credibility'}
          chara={'Gatanteed'}
          x={'Quality'}
          passRef={Row1ref}
        />
        <Product
          img={img}
          name={'Credibility'}
          role={'Professionality'}
          chara={'Quality'}
          x={'Gatanteed'}
          passRef={Row1ref}
        />
        <Product
          img={img}
          name={'Gatanteed'}
          role={'Credibility'}
          chara={'Professionality'}
          x={'Quality'}
          passRef={Row1ref}
        />
        <Product
          img={img}
          name={'Quality'}
          role={'Gatanteed'}
          chara={'Professionality'}
          x={'Credibility'}
          passRef={Row1ref}
        />
        <Product
          img={img}
          name={'Quality'}
          role={'Professionality'}
          chara={'Gatanteed'}
          x={'Credibility'}
          passRef={Row1ref}
        />
        <Product
          img={img}
          name={'Quality'}
          role={'Gatanteed'}
          chara={'Quality'}
          x={'Professionality'}
          passRef={Row1ref}
        />
        <Product
          img={img}
          name={'Credibility'}
          role={'Professionalitya'}
          chara={'Quality'}
          x={'Gatanteed'}
          passRef={Row1ref}
        />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <Product
          img={img}
          name={'Gatanteed'}
          role={'Credibilitya'}
          chara={'Professionality'}
          x={'Quality'}
          passRef={Row2Ref}
        />
        <Product
          img={img}
          name={'Professionality'}
          role={'Gatanteed'}
          chara={'Quality'}
          x={'Credibility'}
          passRef={Row2Ref}
        />
        <Product
          img={img}
          name={'sa'}
          role={'Gatanteed'}
          chara={'Professionality'}
          x={'Quality'}
          passRef={Row2Ref}
        />
        <Product
          img={img}
          name={'Credibility'}
          role={'Professionality'}
          chara={''}
          x={'Gatanteed'}
          passRef={Row2Ref}
        />
        <Product
          img={img}
          name={'Professionality'}
          role={'Quality'}
          chara={'Credibility'}
          x={'Quality'}
          passRef={Row2Ref}
        />
        <Product
          img={img}
          name={'Credibility'}
          role={'Quality'}
          chara={'Gatanteed'}
          x={'Professionality'}
          passRef={Row2Ref}
        />
        <Product
          img={img}
          name={'Professionality'}
          role={'sa'}
          chara={'Gatanteed'}
          x={'Credibility'}
          passRef={Row2Ref}
        />
      </Row>
    </Section>
  );
};

export default ShowRoom;
