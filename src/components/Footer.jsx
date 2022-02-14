import { logo } from "../data";

import styled from "styled-components";

import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;

    
@media only screen and (max-width: 600px ) {
   flex-direction: column;

}
  /* border: 1px solid red; */
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Desc = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.8s ease;
  color: white;

  &:hover {
    transform: scale(1.1);
  }
`;

//

const Center = styled.div`
  flex: 1;
  padding: 20px;

   /* border: 1px solid blue; */
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  flex-wrap: wrap;

          
@media only screen and (max-width: 825px ) {
  
  flex-direction: column;

}


`;

const ListItem = styled.li`
  width: 50%;
  padding: 3px 0 ;






`;

//
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const  Titlee  = styled.h4`
margin-bottom: 30px;
`;

 const ContactItem =  styled.div`
 display: flex;
 align-items : center ;
  gap: 10px ;
  padding :  10px 5px ;
`;

const Payment  = styled.img`
   width:  50%;
  //  height: 50px;
  //  border:  1px solid red ;
`;


const Footer = () => {
  return (
    <div>
      <Container>
        <Left>
          <Logo> {logo} </Logo>
          <Desc>
            Avrai un esperienza Unica, materiale di alta qualità 
            ed capi originali e moderni con un reparto dedicato 
            allo style "RETRO IN CHIAVE MODERNA". 

            {/* Lorem ipsum dolor sit amet consectetur adipisicing  */}
            {/* elit. Placeat eligendi, tenetur iure exercitationem  */}
            {/* a debitis iusto voluptatibus  quam voluptatum quae  */}
            {/* labore sit numquam, eaque quis vel! Voluptates */}
            {/* quas corrupti eius. */}
          </Desc>

          <SocialContainer>
            <SocialIcon color="#4287f5">
              <Facebook />
            </SocialIcon>

            <SocialIcon color="#f50800">
              <Instagram />
            </SocialIcon>

            <SocialIcon color="#006af5">
              <Twitter />
            </SocialIcon>

            <SocialIcon color="#f55a42">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Center>
          <Title> Link </Title>
          <List>
            <ListItem>  <Link to="/"> Home </Link> </ListItem>
            <ListItem> Cart </ListItem>
            <ListItem> Man Fashion </ListItem>
            <ListItem> Woman Fashion </ListItem>
            <ListItem> Accessori </ListItem>
            <ListItem> My Account </ListItem>
            <ListItem> Order Tracking </ListItem>
            <ListItem> Wishlist </ListItem>
            <ListItem> Terms </ListItem>
          </List>
        </Center>

        <Right>
          <Titlee> Contatti</Titlee>

          <ContactItem>
              <Room />
            Street Dixie 555</ContactItem>

          <ContactItem> 
            <Phone /> 
                + 33 58522777 
          </ContactItem>
          <ContactItem> 
               <MailOutline  />    email@kkscjndsv.com    
          </ContactItem>

        <Payment  src="https://i.ibb.co/Qfvn4z6/payment.png"   />

        </Right>
      </Container>
    </div>
  );
};

export default Footer;
