
import styled from "styled-components";


const Container = styled.div`
width: 80%;
height: 50vh;
display: flex;
justify-content: center;
 /* flex-direction: column; */
 /* gap: 10px ; */
 /* font-size: 1.5em; */
 /* background-color: gray ; */

position: relative;
flex: 1;
margin: 3px auto ;
 /* border: 1px dashed red; */

`;


const Image = styled.img`
   /* width: 90%; */
   /* height: 100%; */
  width: 100vw ;
  height: 50vh;
  max-width: 100%;

  object-fit: cover;
  
  
`;


const Info =  styled.div`
width: 100%;
height: 100%;
position: absolute; 
top: 0;
left: 0;
display: flex;
flex-direction: column;
  align-items: center ;
justify-content: center;
   font-size: 20px;
   padding: 50px 0;

   
`;

const Title = styled.h2`
text-align: center;
  margin-bottom: 20px;
  font-size:  1.2rem ; 
  color: #fff ;
`;

const Button = styled.button`

   padding: 5px 10px ;
   cursor: pointer;
`;




const CategoryItem = ({item}) => {
  return (
    <div> 
        
  <Container>
    

     <Image     src={item.img}   /> 

     <Info > 
         <Title>  { item.title} </Title>
         <Button>  Shop Now  </Button>
     </Info>
  
  </Container>



    </div>
  )
}

export default CategoryItem