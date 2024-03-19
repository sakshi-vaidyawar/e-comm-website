
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobileDevice } from '../responsive';


const Container=styled.div``;
const Wrapper=styled.div`
padding:50px;
display: flex;
${mobileDevice({padding:"10px",flexDirection:"column"})}

`;
const ImageContainer=styled.div`

flex:1`;
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobileDevice({heigth:"40%"})}
`;
const InfoContainer=styled.div`
padding: 0px 50px;
flex: 1;
${mobileDevice({padding:"10px"})}
`;
const Title=styled.h1`
font-weight: 200;

`;
const Desc=styled.p`
margin: 20px 0px;
`;
const Price=styled.span`
font-weight: 100;
font-size: 40px;
`;
const FilterContainer=styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;
const Filter=styled.div`
display:flex;
align-items: center;

`;
const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize=styled.select`
margin-left:10px;
padding: 5px;
`;
const FilterSizeOption=styled.option``;
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;
const Amount=styled.span`
width: 30px;
height: 30px;
border-radius:10px ;
border:  1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button=styled.button`
padding: 15px;
border:2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;
&:hover{
  background-color: #f8f4f4;
}

`;



function ProductPage() {
  return (
    <Container>
      <NavBar/>
<Announcement/>
<Wrapper>
  <ImageContainer>
    <Image src="https://cdn.shopify.com/s/files/1/0424/1876/5977/files/saree_480x480.jpg?v=1665580029"/>
    <InfoContainer>
      <Title>
      Indo-Western Saree
      </Title>
      <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus voluptas error, qui, repellat itaque recusandae dicta harum culpa minima quod quibusdam odit pariatur maiores! Excepturi odit aliquam placeat perspiciatis.</Desc>
      <Price>$20</Price>
      <FilterContainer>
      <Filter>
      <FilterTitle>Color: </FilterTitle>
      <FilterColor color="black"/>
      <FilterColor color="darkBlue"/>
      <FilterColor color="red"/>

      </Filter>
      <Filter>
      <FilterTitle>Size</FilterTitle>
      <FilterSize>
      <FilterSizeOption>XS</FilterSizeOption>
      <FilterSizeOption>S</FilterSizeOption>
      <FilterSizeOption>M</FilterSizeOption>
      <FilterSizeOption>L</FilterSizeOption>
      <FilterSizeOption>XL</FilterSizeOption>
      <FilterSizeOption>XXL</FilterSizeOption>
      </FilterSize>

      </Filter>
      </FilterContainer>

      <AddContainer>
      <AmountContainer>
      <RemoveIcon/>
      <Amount>1</Amount>
         <AddIcon/>
      </AmountContainer>
      <Button>ADD TO CART</Button>
      </AddContainer>
    </InfoContainer>

  </ImageContainer>
</Wrapper>
<NewsLetter/>
<Footer/>
    </Container>
  );
}

export default ProductPage;
