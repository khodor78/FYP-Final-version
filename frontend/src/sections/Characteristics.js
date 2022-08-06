import React from 'react'
import styled from 'styled-components'
import DrawSvg from '../Components/DrawSvg'

const Section = styled.section `
min-height: 100vh;
width:100vw;
background-color:#FFF;
position:relative;
`
const Title = styled.h1`
font-size:3em;
text-transform:capitalize;
color:#2020220;
display:flex;
justify-content:center;
align-items: center;
margin : 1rem auto;
border-bottom: 2px solid #202020;
width: fit-content;
`
const Container = styled.div`
width: 70%;
height:200vh;
background-color:#FFF;
margin: 0 auto;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`
const SvgContainer  = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Items = styled.ul`
list-style:none;
width:100%;
height:100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: lightblue;
`




const Characteristics = () => {
  return (
        <Section>
            <Title>
                Roadmap
            </Title>
            <Container>
                <SvgContainer>
                    <DrawSvg />
                </SvgContainer>
                <Items>
                    <li>
                        ds
                    </li>
                    <li>
                        ds
                    </li>
                </Items>
            </Container>
        </Section>
  )
}

export default Characteristics