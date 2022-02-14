import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center ;
  font-size: 1.5em;
  padding: 5px 10px;
  /* height: 45px; */
  background-color: teal;
`;


const Annuncio = () => {
  return (
    <div>
      <Container> 
        {/* Super Deal!  Free Shipping on Orders Over €50,00  */}
        Super affare! Spedizione gratuita per ordini superiori a €50,00
        </Container>
    </div>
  );
};

export default Annuncio;
