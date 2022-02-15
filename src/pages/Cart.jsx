import React ,  { useState } from "react";

import styled from "styled-components";


import { cart } from "../data";

import NavMenu from "../Menu/NavMenu";
import Annuncio from "../components/Annuncio";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile, tablet } from "../responsive";





const Container = styled.div``;

const Wrapper = styled.div`
  text-align: center;
  padding: 20px 0;
`;

const Title = styled.h2`
  margin: 20px 0;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const TopButton = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  transition: 2s ease;

  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "trasparent"};

  color: ${(props) => props.type === "filled" && "red"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const TopTexts = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Toptext = styled.span`
  text-decoration: underline;
  padding: 0 15px;
  margin: 0 15px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  /* align-items: center; */
  margin: 30px 10px;
`;

const Info = styled.div`
  flex: 3;
  
  /* border: 1px solid red; */
 
`;

const Summary = styled.div`
  flex: 1;
  font-weight: bold;
  padding-bottom: 5px;
  border-radius: 10px;
  height: 80vh;
  border: 0.5px solid lightgray;
  ${tablet({   marginTop: "130px"   })}
`;

const SummaryTitle = styled.h2`
  font-size: 3vw;
  padding: 10px 20px;
`;

const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total"  &&  "24px"} ;
  
`;

const SummaryItemText = styled.span`
  font-weight: 400;
`;

const SummaryItemPrice = styled.span`
     font-weight: 500;
`;

const SummaryButton = styled.button`
  padding: 1px 10px;
  margin: 15px 5px;
  cursor: pointer;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  
  margin: 20px 0;
  /* border: 1px solid red; */
  
  ${mobile({   justifyContent: "center"   })}

`;


const ProductDetail = styled.div`
  flex: 2;
  display: flex;  
  justify-content: center;
  margin: 2px auto ;
   /* border: 1px solid ; */
   ${mobile({  flexDirection: "column"  })}
  
`;



const Details = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  gap: 10px;
  width: 40%;
  /* border: 1px dashed blue; */
  ${mobile({  width:"100%"  })}
`;


const Image = styled.img`
  width: 30%;
  object-fit: cover;
  ${mobile({  width:"50%" })}
   
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
  /* border: 1px dashed blue; */
  ${mobile({  fontSize:".9rem" })}
`;


const ProductId = styled.div`

${mobile({   margin: "20px 0 0 "    })}
`;


const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.div`
  font-size: 1.5rem;
  ${mobile({  fontSize:"1rem" })}
`;

const PriceDeleit = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  ${mobile({   margin: "20px 0 0 " })}
  
    /* border: 2px solid blue; */
`;

const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${mobile({ JustifyContent: "flex-start"})}
`;

const ProductAmount = styled.div`
  font-size: 18px;
  padding: 5px;
  margin: 10px 5px;

  border: 1px solid red;
`;

const Prezzo = styled.div`
  font-size: 1.5rem;
`;

const Hr = styled.div`
  margin: 10px 30px;
  height: 1px;
  background-color: rgb(203, 203, 213);
`;




const Cart = () => {

  // const [carello, setCarello] = useState(cart);
  const [contatore, setContatore] = useState(1);

    // setCarello(carello);
    
 
  // const Rimuovi =  (id)  =>{
    // setCarello((oldRimuov) => {
      // return  oldRimuov.filter((el) => el.id !== id)  ;
    // })
  // }
// 


  const Incre = () => { 

     setContatore( (oldPlus) => {
      //  return old.filter((el) => el.costo ?  el.id !== id  &&  el.costo *contatore : el.costo  )  
  
      return oldPlus +1 ;
    }
     )}


  
  const Decrem = () => {
    setContatore((oldDecr) => {
      return  oldDecr -1 ;
    } )
  }

  return (
    <Container>
      <NavMenu />
      <Annuncio />
      <Wrapper>
        <Title> You BAG </Title>
        <Top>
          <TopButton> Continue Shopping </TopButton>
          <TopTexts>
            <Toptext> Shopping Bug(2) </Toptext>
            <Toptext> You Wishist(0) </Toptext>
          </TopTexts>
          <TopButton type="filled"> CheckOut Now </TopButton>
        </Top>

{/*  */}
 
   

  <Bottom>   
  <Info>





 {  
 cart.map((el) => {

    const {  id, titolo , colore, size , img , costo   } = el;

return(  

    <Product  key={id}>
      <ProductDetail>
        <Image src={img} />
        <Details>
          <ProductName>
            
            <b> {titolo} </b>
          </ProductName>
          <ProductId>
          
            <b> id: </b> {id}
          </ProductId>
          <ProductColor color={colore} />
          <ProductSize>
            
            <b> Size </b> {size}
          </ProductSize>
        </Details>
        <PriceDeleit>
          <ProductAmountContainer>
            <Add  onClick={Incre}  className="corsp" />
            <ProductAmount> {contatore} </ProductAmount>
            <Remove  onClick={Decrem}  className="corsp"/>
          </ProductAmountContainer>
          <Prezzo> € {  costo   }</Prezzo>
        </PriceDeleit>
      </ProductDetail>
    </Product>


)

  } )

}




  
</Info>


{/*  */}
{/*  *}
// 
    
// 
         {/* <Summary  key={el.id}> */}
        {/* <SummaryTitle> Order Summary</SummaryTitle> */}
        {/* <SummaryItem>  */}
{/*            */}
          {/* <SummaryItemText> Subtotal </SummaryItemText> */}
          {/* <SummaryItemPrice> €    {el.costo * contatore}   </SummaryItemPrice> */}
        {/* </SummaryItem> */}
        {/* <SummaryItem> */}
          {/* <SummaryItemText> Estimated Shipping </SummaryItemText> */}
          {/* <SummaryItemPrice> €  5.50 </SummaryItemPrice> */}
        {/* </SummaryItem> */}
        {/* <SummaryItem> */}
          {/* <SummaryItemText> Sconto Shipping Discount </SummaryItemText> */}
          {/* <SummaryItemPrice  >   €  { contatore *  el.sconto}     </SummaryItemPrice> */}
{/*      */}
     {/* <SummaryItemPrice  >   € 30     </SummaryItemPrice> */}
{/*           */}
        {/* </SummaryItem> */}
        {/* <SummaryItem type="total"> */}
          {/* <SummaryItemText> Total </SummaryItemText> */}
          {/* <SummaryItemPrice> €   </SummaryItemPrice> */}
        {/* </SummaryItem> */}
        {/* <SummaryButton> Checkout </SummaryButton> */}
      {/* </Summary> */}
    








  {/*      *************    Start  Summary     ***************     */}


  <Summary>
    <SummaryTitle> Order Summary</SummaryTitle>
    <SummaryItem> 

      <SummaryItemText> Subtotal </SummaryItemText>
      <SummaryItemPrice> €   </SummaryItemPrice>
    </SummaryItem>
    <SummaryItem>
      <SummaryItemText> Estimated Shipping </SummaryItemText>
      <SummaryItemPrice> €  5.50 </SummaryItemPrice>
    </SummaryItem>
    <SummaryItem>
      <SummaryItemText> Sconto Shipping Discount </SummaryItemText>
       <SummaryItemPrice  >   €    </SummaryItemPrice>     

 <SummaryItemPrice  >   € 30     </SummaryItemPrice>
     
    </SummaryItem>
    <SummaryItem type="total">
      <SummaryItemText> Total </SummaryItemText>
      <SummaryItemPrice> € </SummaryItemPrice>
    </SummaryItem>
    <SummaryButton> Checkout </SummaryButton>
  </Summary>

 {/*      *************    The End  Summary     ***************     */}

</Bottom>

<Hr> </Hr> 



      </Wrapper>

      {/* <button  onClick={Rimuovi  }  >  Rimuovi</button> */}

      <Footer />
    </Container>
  );
};

export default Cart;
