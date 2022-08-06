import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import ScrollTrigger from 'gsap/ScrollTrigger';
import img1 from '../assets/Images/one.png';
import img2 from '../assets/Images/Homepagess.png';
import img3 from '../assets/Images/Skills.png';
import { motion } from 'framer-motion';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  position: Relative;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  position: absolute;
  top: 1rem;
  color: ${(props) => props.theme.text};
  left: 5%;
  z-index: 11;
  text-shadow: 1px 1px 1px ${(props) => props.theme.fontxxxl};
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 35%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
`;
const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 5;

  position:fixed;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
;
  p{
    font-size: ${(props) => props.theme.fontlg};   
     font-weight:300;
    width:80%;
    margin:0 auto;
  }
`;
const Item = styled(motion.div)`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  width: 45rem;
  height: 45rem;
  margin-right: 6rem;
  img {
    width: 100%;
    height: 80%;
    cursor: pointer;
  }
  h1 {
    display:inline-block;
    width:fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;
const Product = ({ img, title = '' }) => {
  return (
    <Item
      initial={{ filter: 'grayscale(0%)' }}
      whileInView={{ filter: 'grayscale(100%) ' }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 'all' }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};
const Feature = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizantalRef = useRef(null);
  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizantalRef.current;
    let pineWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: pineWrapWidth,
          scroller: '.App',
          scrub: true,
          pin: true,
        //  markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: 'none,',
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: 'top top',
          end: pineWrapWidth,
          scroller: '.App',
          scrub: true,
         // markers: true,
        },
        x: -pineWrapWidth,
        ease: 'none,',
      });

      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);
  return (
    <Section ref={ref}>
      <Title data-scroll data-scroll-delay="1" data-scroll-speed="-3 ">
        Who we Are?
      </Title>
      <Left>
        <p data-scroll data-scroll-delay="0.5" data-scroll-speed="-3 ">
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
        </p>
      </Left>
      <Right ref={horizantalRef}>
        <Product img={img1} title="Client-Satsifaction" />
        <Product img={img2} title="Good Introduction" />
        <Product img={img3} title="Skills to Have" />
        <Product img={img1} title="Satsifaction" />
        <Product img={img2} title="Good Introduction" />
        <Product img={img3} title="Skills to Have" />
        <Product img={img2} title="Skills to Have" />
        <Product img={img3} title="Skills to Have" />
      </Right>
    </Section>
  );
};

export default Feature;



