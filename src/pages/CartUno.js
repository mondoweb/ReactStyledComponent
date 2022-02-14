import styled from "styled-components";



import NavMenu from "../Menu/NavMenu";
import Annuncio from "../components/Annuncio";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

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
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 30%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  gap: 10px;
  width: 40%;
  /* border: 1px dashed blue; */
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
`;
const ProductId = styled.div``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.div`
  font-size: 1.5rem;
`;

//
const PriceDeleit = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  /* border: 2px solid blue; */
`;
const ProductAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const CartUno = () => {
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
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtbVVPDxYnuu1qsGCY1qL3D994cfCrieUoA&usqp=CAU" />
                <Details>
                  <ProductName>
                    {" "}
                    <b> Pantalone </b>{" "}
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b> id: </b> 2545544{" "}
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    {" "}
                    <b> Size </b> 48{" "}
                  </ProductSize>
                </Details>

                <PriceDeleit>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount> 2</ProductAmount>

                    <Remove />
                  </ProductAmountContainer>

                  <Prezzo> € 30</Prezzo>
                </PriceDeleit>
              </ProductDetail>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle> Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText> Subtotal </SummaryItemText>
              <SummaryItemPrice> € {85} </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText> Estimated Shipping </SummaryItemText>
              <SummaryItemPrice> €  5.50 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText> Shipping Discount </SummaryItemText>
              <SummaryItemPrice> € - 5.90 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText> Total </SummaryItemText>
              <SummaryItemPrice> € 65 </SummaryItemPrice>
            </SummaryItem>

            <SummaryButton> Checkout </SummaryButton>
          </Summary>
        </Bottom>

        <Hr> </Hr> 

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxF-gi6Y8Hvf4fZ_IfEACGtW2SBQabaG-Gw&usqp=CAU" />
                <Details>
                  <ProductName>
                    {" "}
                    <b> T-Shirt </b>{" "}
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b> id: </b> 6485544{" "}
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b> Size </b> L{" "}
                  </ProductSize>
                </Details>
                <PriceDeleit>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount> 1 </ProductAmount>
                    <Remove />
                  </ProductAmountContainer>

                  <Prezzo> € 35 </Prezzo>
                </PriceDeleit>
              </ProductDetail>
            </Product>
          </Info>
          <Summary> Summary </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default CartUno;
