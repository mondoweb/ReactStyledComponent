
import { Send } from '@material-ui/icons';


import styled from 'styled-components'

import { tablet } from '../responsive'



 const Container = styled.div`
   display: flex;
   justify-content: center ;
   align-items: center ;
   flex: 1;
   flex-direction: column;
   margin: 45px  0  75px;
     /* border: 1px solid red ; */
   `;


  const Title  = styled.h1`
    font-size : 8vw;


    `;


  const Desc  = styled.div`
    font-size : 25px;
    font-weight: 300;
    margin-bottom: 20px ;
    ${ tablet({ textAlign: "center"  })}

  `;

  const InputContainer  = styled.div`
    width:  50% ;
    height: 40px ; 
    display: flex ;
    justify-content: space-around ;
    margin-bottom : 15px ;

    `;
  

    const Input  = styled.input`
        border: none;
        flex: 8 ;
        padding : 2px 5px ; 
   `;


   const  Button  = styled.button`
      flex: 1 ; 
      border: none;
      width:  30% ;
      background-color : teal  ;
      cursor:  pointer;

   `;



const Newsletter = () => {
  return (
    <div>
        
    <Container>
    
        <Title>   Newsletter  {/* / Notiziario   */} </Title>

        <Desc> Ottieni qui il tuo prodotto  Aggiornato  </Desc>
        <InputContainer> 
            <Input placeholder='Email ....'  />

            <Button  >
                <Send  />    
            </Button> 

        </InputContainer>

    </Container>


    </div>
  )
}

export default Newsletter