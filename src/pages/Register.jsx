import styled from "styled-components";

import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), red),
    url("https://www.gkmoda.com/wp-content/uploads/2018/09/ingrosso-abbigliamento-donna.jpg")
      center center  ;
  background-repeat: no-repeat ;
  background-size: cover;
    
  display: flex;
  align-items: center;
  justify-content: center;
    
    
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 45%;
  border: none;
  box-shadow:  1px 1px 1px 2px  rgba(255, 255, 255, 0.35) ;
  background-color: rgba(255, 255, 255, 0.3) ;

   ${mobile({  width: "80%" })}
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 400; 

`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column"  })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 4px 7px;
`;

const Agreement = styled.div`
  font-size: 14px;
  margin: 20px 0;
  /* border: 1px solid red; */
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 40%; 
  display: flex;
  justify-content: center; 
  margin: 30px auto  10px;
  padding: 10px 15px;
`;


//     HHHHHHHHHHHH      //  

const Register = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title> Crea Account </Title>

          <Form>
            <Input placeholder="Nome " />
            <Input placeholder="Cognome" />
            <Input placeholder="Username" />
            <Input placeholder=" Email" />
            <Input placeholder="Password" />
            <Input placeholder="Conferma Password" />
          </Form>

          <Agreement>
                By Creating Account , I Consent to the processing of my personal
                data in accordance width the <b> PRIVACY POLICY </b>
          </Agreement>

          <Button> Registrati </Button>

          <Link to="/" >   Home  </Link>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;
