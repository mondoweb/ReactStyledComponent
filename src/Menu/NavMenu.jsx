
import React from 'react';

import { logo } from '../data';

import { Badge } from '@material-ui/core';

import { Search ,ShoppingCartOutlined   } from '@material-ui/icons';

import styled from 'styled-components';


import {mobile , tablet} from "../responsive"

import { Link } from 'react-router-dom';


const Container = styled.div`

  font-size: 1.5em;
  background-color: red;
  /* background-color: rgba(255,255,255, .6); */
  color: palevioletred;



`;


const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    align-items: center; 
    /* flex-wrap: wrap; */
    padding : 10px ;

  /* ${ tablet({ color: "yellow"})} */
  /* ${ mobile({  border: "1px solid yellow"     })} */
  ${ mobile({  justifyContent: "flex-start !importatnt"  })}

`;



const Left = styled.div`
    padding : 10px ;
    flex: 1;
    display: flex; 
    /* ${ mobile({  border: "1px solid yellow"     })} */
`;

const Input = styled.input`
    border:none;
    width: 150px;
    padding: 5px 10px;

    ${ mobile({ width: "80px"  })}
`;

const Lenguage = styled.span`
    font-size: 1em;
    cursor:pointer;

    ${ mobile({ display: "none"})}
`;


const SearchContainer = styled.span`
    display: flex;
    font-size: 1em;
    align-items: center; 
    padding: 0 10px;
    gap: 10px;
    cursor: pointer ;
`;


const Center = styled.div` 
    display: flex;
    justify-content: center;
    flex: 1;
`;

const Logo = styled.span`
    font-size: 1em;

    ${ mobile({ fontSize: ".8rem"})}
`;

const Rigth = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 1em;
    padding: 0 15px;
    gap: 15px;
    flex: 1;
`;

const MenuItems = styled.div`
    font-size: 1em;
    cursor: pointer;

    ${ mobile({ fontSize: ".8rem"})}
`;



const NavMenu = () => {
  return (
    <div >
        
        
        <Container>
            <Wrapper >   
                
                <Left>       
                    <Lenguage> EN </Lenguage>

                    <SearchContainer> 
                        <Input />
                        <Search />
                    </SearchContainer>
                </Left>

                <Center> <Logo > {logo} </Logo>  </Center>

                <Rigth > 
                     <MenuItems>    <Link  to="/Login">  Login  </Link>  </MenuItems>
                     <MenuItems>   <Link  to="/Register">  Registrati  </Link>      </MenuItems>
                     <MenuItems> 
                      
                    <Link  to="/Cart">   
                      <Badge badgeContent={4} color="primary">
                          <ShoppingCartOutlined />
                        </Badge>
                    </Link>  

                  
                      </MenuItems>
                
                 </Rigth>

            </Wrapper>
        
        </Container>

        
        </div>
  )
}

export default NavMenu