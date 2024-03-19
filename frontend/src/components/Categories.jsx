import React from 'react';
import styled from 'styled-components';
import {categories} from '../data';
import CategoriesItems from "./CategoriesItems";
import {mobileDevice} from "../responsive"
const Container=styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobileDevice({padding:"0px",flexDirection:"column"})}
    
`;
function Categories() {
  return (
    <Container>
      {
        categories.map((item)=>(
            <CategoriesItems item={item} key={item.id}/>
        ))
      }
    </Container>
  );
}

export default Categories;
