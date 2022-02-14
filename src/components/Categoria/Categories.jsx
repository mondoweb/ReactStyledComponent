
import styled from 'styled-components';
import { categories } from '../../data'
import CategoryItem from './CategoryItem';



const Container = styled.div`
   /* width: 100%; */
   /* height: 100vh; */
  display: flex;
  justify-content: center;
  margin: 3px  auto ;
   /* font-size: 1.5em; */
  background-color: coral;
  

`;


const Categories = () => {
  return (
    <div> 
        
        <Container >
          {
            categories.map((item) =>(
              <CategoryItem   item={item}  key={item.id} />
            ))
          }
        </Container>
        
    </div>
  )
}

export default Categories