import styled from "styled-components";
import Button from './button'; 

const Wrapper = styled.header`
  margin:  0;
  width: 100%;
  background-color: yellow;
`; 


export default function Header() {
   return (
     <Wrapper>
         Header
     </Wrapper>
   )
};