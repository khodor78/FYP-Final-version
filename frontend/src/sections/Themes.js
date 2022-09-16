import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Theme from './Theme';
import { Blogs } from '../data/BlogData';
import { motion } from 'framer-motion';
import img from '../assets/Images/one.png';

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Themes = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 300) / 30;
    setNumbers(parseInt(num));
  }, []);
  return (
    <Section>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <Container>
      

          <Center>
            <Grid>
              {Blogs.map((blog) => {
                return <Theme key={blog.id} blog={blog} />;
              })}
            </Grid>
          </Center>
        </Container>
      </MainContainer>
    </Section>
  );
};

export default Themes;
