import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), red),
    url("https://www.gkmoda.com/wp-content/uploads/2018/09/ingrosso-abbigliamento-donna.jpg")
      center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
 
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 45%;
  border: none;
  box-shadow: 1px 1px 1px 2px rgba(255, 255, 255, 0.35);
  background-color: rgba(255, 255, 255, 0.3);
 
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

const Button = styled.button`
  cursor: pointer;
  border: none;
  width: 40%;
  display: flex;
  justify-content: center;
  margin: 30px auto 10px;
  padding: 10px 15px;
`;

const Links = styled.a`
  cursor: pointer;
  font-weight: 400 ;
  margin:  10px 0;
`;

const Login = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title> Sign IN </Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />

            <Button> LOGIN </Button>

            <Links > Don Not You Remember The Password </Links>
            <Links   >  <Link to="/Register" >   Create A New Account  </Link> </Links>
           <span style={{margin: " 0 30px"}} />
            <Link to="/" >   Home  </Link>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Login;
