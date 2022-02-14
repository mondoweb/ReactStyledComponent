import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

import styled from "styled-components";




const Info = styled.div`
opacity :  0;
  width: 100% ;
  height: 100% ;
  position: absolute ;
  top: 0 ;
  left:  0 ; 
  display: flex ;
  background-color: rgba(0,0,0,.2) ; 
  z-index: 3 ;
  display: flex;
  justify-content: center;
  align-items: center   ;  
  transition :  all 0.5s ease ;
  cursor: pointer;
`;


const Container = styled.div`   
  flex:1;
  margin: 5px;
   
  // min-width: 150px ; 
  height : 160px ;  

  display: flex;
  justify-content: center;
  align-items: center   ;  

  position: relative;
  background-color: white ; 

  // border: 1px solid red;

  &:hover ${Info}{
    opacity: 1;
  }

`;


const Circle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50% ; 
  background-color :  white;
  position: absolute ; 
`;


const Image = styled.img`
  width: 150px;
  height: 150px;
  max-width: 100%;
  object-fit: cover;
  z-index: 2 ;
   
`;



const Icon = styled.div`
  
  width:   35px ; 
  height:  35px ;
  margin:   5px ;
  border-radius: 50% ;  
  background-color: white  ; 
  display: flex ;
  justify-content: center ;
  align-items: center   ;  
  transition: all .8s ease  ;
  
  &:hover{
      background-color :  #e9f5f5 ;
      transform: scale(1.1);
  }


`;


const Product = ({ item }) => {
  return (
    <div>
      <Container   >
        <Circle />

        <Image src={item.img} />

        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>

          <Icon>
            <SearchOutlined/>
          </Icon>

          <Icon>
            < FavoriteBorderOutlined />
          </Icon>
        </Info>

      </Container>
    </div>
  );
};

export default Product;