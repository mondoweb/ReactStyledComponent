import { useState } from "react";
import { ArrowLeftOutlined,  ArrowRightOutlined } from "@material-ui/icons";

import styled from "styled-components";

import { mobile } from "../responsive";

import { sliderItems } from "../data";



const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
   /* font-size: 1.5em; */
   /* background-color: coral; */
  position: relative ;
  overflow: hidden  ;
  ${mobile({  display: "none" })} 
`;


const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  margin: 5px;
  
  font-size: 1.5em;
  position: absolute ;
  top: 0 ;
  bottom: 0; 
  left: ${ props => props.direction === "left" && "10px"};
  right: ${ props => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: .5; 
  z-index: 2;

`;


const Wrapper = styled.div`
display: flex;
    height: 100%;
    transition : all  1.5s ease ;
    transform: translateX(${props=> props.slideIndex * -100}vw);

`;


const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};

`;

const ImgContainer  = styled.div`
  flex: 1;
  height: 100%;

`;


const Image  = styled.img`
    width: 100%;
    height: 80%;
     
max-width: 100%;
object-fit: cover;
    

`;


const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
  
  
   /* border: 1px solid red; */

`;



const Text = styled.h1`
    font-size: 5 rem;
`;          

const Desc = styled.p`
    font-size: 1.5m;
    margin: 50px 0;
    font-weight: 500;
    letter-spacing: 3px;
`;          

const Button = styled.button`
   /* width: 25%; */
    padding: 10px;
    background-color: trasparent ;
    cursor: pointer;
`;      


//   ------------           ----------- // 


const Slider = () => {

  const [slideIndex, setSlideIndex] = useState(0);

  const  handleClick = (direction) => {
   
    if(direction === "left") {
      setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 3);
    } else{
      setSlideIndex( slideIndex < 3 ? slideIndex + 1 : 0) ;
    }

  }

  return (
    <div>
        
  <Container>
        
        <Arrow direction="left"  onClick={() => handleClick("left")}    >
          <ArrowLeftOutlined    />
        </Arrow>


    <Wrapper slideIndex={slideIndex}>

      {
        sliderItems.map((el) =>(

  
        <Slide bg={el.bg}    key={el.id}  >
                 <ImgContainer >  
                     <Image src={el.img} /> 
                  </ImgContainer>

                 <InfoContainer> 
                   <Text> {el.title}   </Text>    
                   <Desc>   {el.desc} </Desc>
                   <Button>  Descrizione  </Button>
               </InfoContainer>

        </Slide>
    )  )
  }





    </Wrapper>

        <Arrow direction="right"   onClick={() => handleClick("right")} >
          <ArrowRightOutlined />
        </Arrow>


  </Container>


    </div>
  );
};

export default Slider;
