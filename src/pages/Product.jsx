import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Annuncio from "../components/Annuncio";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import NavMenu from "../Menu/NavMenu";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
   /* box-shadow: 0px 2px 1px 1px gray; */


  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 2rem;
  margin: 20px 0;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const FilterTitle = styled.span`
  font-size: 2rem;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 3px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

const FilterSize = styled.select`
  margin-left: 10px;
`;

const FilterSizeOption = styled.option`
  padding: 20px;
`;

//
const AddContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  align-items: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  margin: 0 3px;
  border-radius: 30%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

const Button = styled.button`
  padding: 2px 10px;
  font-weight: 600;
  cursor: pointer;

  &:hover{
      background-color: white ;
  }
`;

const Product = () => {
  return (
    <div>
      <Container>
        <NavMenu />
        <Annuncio />

        <Wrapper>
          <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/jean.png" />
          </ImgContainer>

          <InfoContainer>
            <Title> Titolo </Title>
            <Desc>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Possimus, magnam. Aspernatur nam reiciendis, repellat, incidunt
              eveniet quibusdam aliquam rerum iste, fugit hic eligendi
              laudantium neque sequi animi amet libero. Quidem.{" "}
            </Desc>

            <Price> € 50 </Price>

            <FilterContainer>
              <Filter>
                <FilterTitle> Color </FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
              </Filter>

              <Filter>
                <FilterTitle> Size </FilterTitle>

                <FilterSize>
                  <FilterSizeOption> S </FilterSizeOption>
                  <FilterSizeOption> M </FilterSizeOption>
                  <FilterSizeOption> L </FilterSizeOption>
                  <FilterSizeOption> XL </FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>

            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount> 1</Amount>
                <Add />
              </AmountContainer>

              <Button> Aggiungi al Carrelo </Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>

        <Newsletter />
        <Footer />
      </Container>
    </div>
  );
};

export default Product;
