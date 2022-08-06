import React, { Children, useState } from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Minus } from '../assets/Icons/Minus';
import { Plus } from '../assets/Icons/Plus';

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #EEEDDE;
  margin: 3rem 0;
`;
const Title = styled.div`
font-size:1em;
display: flex;
justify-content: space-between;
align-items: center;
`

const Reveal = styled.div`
display: ${props=>props.clicked ? 'block' : 'none'};
margin-top:1rem;
color:#fff;
font-size: 1em;
font-weight: 300;
line-height: 1.1em;
`
const Name =  styled.div `
display:flex;
align-items: center;


`
const Indicator =  styled.span `
font-size:5em;
display:flex;
justify-content: center;
align-items: center;
svg{
    width: 1rem;
    height:auto;
    fill: #eeedee;
   
}
`


export const Question = ({title, children}) => {
    const[collapse,setCollapse]  = useState(false)
  return (
    <Container>
        <Title onClick={()=>setCollapse(!collapse)}>
            <Name>
                <span> {title}</span>
            </Name>
        
        {
            collapse ? <Indicator>
                <Minus />
            </Indicator> : <Indicator>
                <Plus />
            </Indicator>
        }
        </Title>
        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
};
