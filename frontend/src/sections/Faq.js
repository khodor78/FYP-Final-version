import React from 'react'
import styled from 'styled-components'
import { Question } from '../Components/Question'
const Section = styled.section `
min-height:100vh;
height:100vh;
width:100vw;
background-color: #202020;
position: relative;

color:#fff;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1 `
font-size:${(props) => props.theme.fontxxxl}; 
text-transform: uppercase;
color: #fff;

margin: 1rem auto;
border-bottom: 2px solid #EEEDDE;
width: fit-content;
`
const Container = styled.div`
width:75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-content:center ;
`
const Box = styled.div`
width:45%;

`


export const Faq = () => {
  return (
    <Section>
        <Title>
            FAQ
        </Title>

        <Container>
<Box>
<Question title="Where i can pay?">
    you can pay using paypal,western union, credit card ............................ 

</Question>
<Question title="Where i can pay?">
you can pay using paypal,western union, credit card ............................ 

</Question>
<Question title="Where i can pay?">
you can pay using paypal,western union, credit card ............................ 

</Question>
<Question title="Where i can pay?">
you can pay using paypal,western union, credit card ............................ 

</Question>
</Box>
<Box>
<Question title="Where i can pay?">
    you can pay using paypal,western union, credit card ............................ 

</Question>
<Question title="Where i can pay?">
you can pay using paypal,western union, credit card ............................ 

</Question>
<Question title="Where i can pay?">
you can pay using paypal,western union, credit card ............................ 

</Question>
<Question title="Where i can pay?">
you can pay using paypal,western union, credit card ............................ 

</Question>
</Box>

        </Container>
    </Section>
  )
}
