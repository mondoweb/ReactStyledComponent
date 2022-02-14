
import React from 'react'

import { popularProducts } from '../../data';

import styled from 'styled-components'
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;

    display: flex;
    justify-content: center;
    align-items: center   ;  
`;

const Products = () => {
  return (
    <div>

      <Container>  
      

        {
          popularProducts.map((item) => (

            <Product  item={item}   key={item.id} />

          ))
        }


        </Container>

    </div>
  )
}

export default Products