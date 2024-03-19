import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container=styled.div``;
const Wrapper=styled.div`
padding: 20px;
`;
const Title=styled.h1`
font-weight:300;
text-align: center;
`;
const TOP=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

`;
const TopButton=styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border:${props=>props.type==="filled"&&"none"} ;
background-color:${props=>props.type==="filled"?"black" :"transparent"} ;
color:${props=>props.type==="filled"&&"white"} ;
`;
const TopTexts=styled.div``;
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin:  0px 10px;
`;


const Bottom=styled.div`
display: flex;
justify-content: space-between;

`;
const Info=styled.div`
flex: 3;
`;

const Product=styled.div`
display: flex;
justify-content: space-between;
`;
const ProductDetail=styled.div`
flex: 2;
display: flex;
`;
const Image=styled.img`

width: 200px;

`;
const Details=styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;
const ProductName=styled.span``;
const ProductId=styled.span``;
const ProductColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=>props.color};
`;
const ProductSize=styled.span``;
const PriceDetail=styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom:20px ;
`;
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice=styled.div`
font-size:30px;
font-weight: 200;


`;

const Hr=styled.hr`
    background-color:#eee;
    border: none;
    height: 1px;
`;


const Summary=styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;
const SummartTitle=styled.h1`
font-weight: 200;
`;
const SummaryItem=styled.div`
display: flex;;
justify-content: space-between;
margin:30px 0px;
font-weight: ${props=>props.type==="total"&&"500"};
font-size: ${props=>props.type==="total"&&"24px"};
`;
const SummaryItemText=styled.span``;
const SummaryItemPrice=styled.span``;
const SummaryButton=styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`;


function Cart() {
  return (
    <Container>
      <NavBar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <TOP>
<TopButton>CONTINUE SHOPPING</TopButton>
<TopTexts>


<TopText>Shooping Bag(2)</TopText>
<TopText>Your Wishlist (0)</TopText>
</TopTexts>
<TopButton type="filled">CHECK OUT</TopButton>
        </TOP>
        <Bottom>
<Info>
<Product>
    <ProductDetail>
<Image src='https://imgs3.freeup.app/400x400/c57eaf634a4b952ab267f09e64c87e14.jpg'/>
<Details>
    <ProductName><b>Product:</b>Zara Footwear</ProductName>
    <ProductId><b>ID:</b>154545121</ProductId>
    <ProductColor color="#D90166" />

    <ProductSize><b>Size:</b>35</ProductSize>

</Details>
    </ProductDetail>
    <PriceDetail>
        <ProductAmountContainer>
            <AddIcon/>
            <ProductAmount>2</ProductAmount>
            <RemoveIcon/>
        </ProductAmountContainer>
        <ProductPrice>$30</ProductPrice>
    </PriceDetail>
</Product>
<Hr/>
<Product>
    <ProductDetail>
<Image src='https://images-static.nykaa.com/media/catalog/product/a/e/ae8e8ddHNGH1074033M3_1.jpg'/>
<Details>
    <ProductName><b>Product:</b>LAVIE MONOPRINT BAG</ProductName>
    <ProductId><b>ID:</b>144545441</ProductId>
    <ProductColor color="brown" />

    <ProductSize><b>Size:</b>M</ProductSize>

</Details>
    </ProductDetail>
    <PriceDetail>
        <ProductAmountContainer>
            <AddIcon/>
            <ProductAmount>1</ProductAmount>
            <RemoveIcon/>
        </ProductAmountContainer>
        <ProductPrice>$50</ProductPrice>
    </PriceDetail>
</Product>
</Info>
<Summary>
    <SummartTitle>ORDER SUMMARY</SummartTitle>
    <SummaryItem>
        <SummaryItemText>Sub Total</SummaryItemText>
        <SummaryItemPrice>$88</SummaryItemPrice>
    </SummaryItem>
    <SummaryItem>
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>$5.90</SummaryItemPrice>
    </SummaryItem>
    <SummaryItem>
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>$-5.90</SummaryItemPrice>
    </SummaryItem>
    <SummaryItem type="total">
        <SummaryItemText >Total</SummaryItemText>
        <SummaryItemPrice>$88</SummaryItemPrice>
    </SummaryItem>
    <SummaryButton>CHECKOUT NOW</SummaryButton>
</Summary>


        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  );
}

export default Cart;
