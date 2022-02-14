import styled from "styled-components"


import Annuncio from "../components/Annuncio"  ;
import NavMenu from '../Menu/NavMenu'  ;
import Products  from '../components/Prodotti/Products' ;
import  Newsletter from '../components/Newsletter'
import Footer from "../components/Footer";

const Container = styled.div`
     
`;


const Title = styled.h1`
   margin: 20px ;
`;

const FilterContainer = styled.div`
    display: flex  ;
    justify-content : space-between ;
`;

const Filter = styled.div`
    margin: 20px ;
`;



const FilterText = styled.h2`
    font-size: 1rem ; 
    font-weight: 600 ;
`;



const Select = styled.select`
    margin: 5px 15px ;
    padding: 5px 15px ;
`;


const Option = styled.option`
    padding: 5px 15px ;
    
`;



const ProductList = () => {
  return (
    <div> 

        <Container >  
            <NavMenu />
            <Annuncio />

            <Title>   Dresses / Vestiti  </Title>
            <FilterContainer>
                <Filter> 
                     < FilterText> Filter Products  </FilterText>
                  <Select>
                      <Option  disabled selected > Color</Option>
                      <Option>  White   </Option>
                      <Option>   Black </Option>
                      <Option>   Red   </Option>
                      <Option>  Blue  </Option>
                      <Option>   Yellow </Option>
                      <Option>   Green   </Option>
              
                  </Select>
                  <Select>
                         <Option disabled selected > Size</Option>
                         <Option>  S   </Option>
                         <Option>   M </Option>
                         <Option>   L   </Option>
                         <Option>  XL  </Option>   
               </Select>

               </Filter>
                <Filter>   
                    
                    < FilterText> Sort Products  </FilterText>
                    <Select>
                       <Option disabled selected > Newest Recente</Option>
                       <Option>  Price (asc) </Option>
                       <Option>   Price (desc) </Option>
                      
                    </Select>
                </Filter>
            </FilterContainer>


            <Products />
            <Newsletter />
            <Footer />

        </Container>


    </div>
  )
}

export default ProductList