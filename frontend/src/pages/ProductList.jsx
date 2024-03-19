import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { mobileDevice } from '../responsive';


const Container=styled.div``;
const Title =styled.h1`
margin: 20px;
`;
const FilterContainer=styled.div`
display: flex;
justify-content: space-between;

`;
const Filter=styled.div`
margin: 20px;
${mobileDevice({margin:"0px 20px",display:"flex",flexDirection:"column"})}
`;

const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobileDevice({margineRight:"0px"})}

`;
const Select=styled.select`
padding: 10px;
margin-right: 20px;
${mobileDevice({margin:"10px 0px"})}

`;

const Option=styled.option``;


function ProductList() {
  return (
    <Container>
      <NavBar/>
      <Announcement/>
<Title>Dress</Title>
      <FilterContainer>
        <Filter>
<FilterText>Filter Products:</FilterText>
<Select>
    <Option disabled selected>Color</Option>
    <Option>White</Option>
    <Option>Black</Option>
    <Option>Red</Option>
    <Option>Blue</Option>
    <Option>Yellow</Option>
    <Option>Green</Option>
</Select>
<Select>
    <Option disabled selected>Size</Option>
    <Option>XS</Option>
    <Option>S</Option>
    <Option>M</Option>
    <Option>L</Option>
    <Option>Xl</Option>
    <Option>XXL</Option>
</Select>
        </Filter>
        <Filter>
        <FilterText>Sort Products:</FilterText>
        <Select>
    <Option disabled selected>Newest</Option>
    <Option>Price (High-Low)</Option>
    <Option>Price (Low-High)</Option>
   
</Select>
   
        </Filter>
       
      </FilterContainer>
      
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
  );
}

export default ProductList;
