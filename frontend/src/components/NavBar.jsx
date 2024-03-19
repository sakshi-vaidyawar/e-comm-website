import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobileDevice} from '../responsive'

const Container= styled.div`
heigth:60px;
${mobileDevice({height:"50px"})}




`
const Wrapper= styled.div`
    padding: 10px 20px;
    display:  flex;
    justify-content: space-between;
    align-items: center;
    ${mobileDevice({padding:"10px 0px"})}
`;
const Left=styled.div`
flex: 1;
display:flex;
align-items: center;

`;
const Language= styled.span`
font-size:14px;
cursor: pointer;
${mobileDevice({display:"none"})}
`;
const SearchContainer= styled.div`
    border: 1px solid  lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobileDevice({width:"40px"})}
`
const Input= styled.input`
border:none

`
const Center=styled.div`
flex: 1;
text-align:center;
`;


const Logo=styled.h1`
    font-weight: bold;
    ${mobileDevice({fontSize:"20px"})};
`;
const Right=styled.div`
flex: 1;
display:flex;
align-items: center;
justify-content:flex-end;
${mobileDevice({flex:"2",justifyContent:"center"})};
`;

const MenuItem= styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobileDevice({fontSize:"12px",marginLeft:"10px"})}

    
`;

function NavBar() {
  return (
    <Container >
        <Wrapper>
<Left><Language>EN </Language>
<SearchContainer>
    <Input placeholder="Search"/>
    <SearchIcon style={{color:"grey", fontSize:"16"}}/>
    
    </SearchContainer> 
   </Left>
 
          <Center><Logo>E-SHOP.</Logo></Center>
            <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SING IN</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon />
      </Badge>
            </MenuItem>
            </Right>
       
        </Wrapper>
   
    </Container>
  );
}

export default NavBar;
