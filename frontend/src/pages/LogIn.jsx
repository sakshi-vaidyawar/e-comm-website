import React from 'react';
import styled from 'styled-components';
import { mobileDevice } from '../responsive';

const Container=styled.div`
width: 100vw;
height: 100vh;
background:  linear-gradient(rgba(255,255,255,0.5),
rgba(255,255,255,0.5)),  url("https://i.pinimg.com/736x/6e/f5/10/6ef5108ea2f75d7b34e1a732cee57737.jpg") center;
display: flex;
align-items: center;
justify-content: center;
background-size: cover;


`;
const Wrapper=styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobileDevice({width:"75%"})}




`;
const Title=styled.h1`
font-size: 24px;
font-weight: 300;

`;
const Form=styled.form`
display: flex;
flex-direction: column;
`;
const Input=styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;

`;

const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin: 10px;
`; 
const Link=styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;

`;



function LogIn() {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
          <Input placeholder="ENTER USERNAME"/>
         
          <Input placeholder="ENTER PASSWORD"/>
          
          
          
          <Button>LOG IN</Button>
          <Link>DO NOT YOU REMEBER THE PASSWORD</Link>
          <Link>CREATE NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
  </Container>
  );
}

export default LogIn;
