
import styled from "styled-components"
import { QUERIES } from "../constants";

const Wrapper = styled.a`
  background-color: ${props => props.bg === 'light' ? 'var(--peach)' : 'var(--white)' }; 
  border-radius: 5px;
  width: 152px;
  height: 56px;
  display: block;
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: .5s;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: var(--15px);
  color: ${props => props.bg === 'light' ? 'var(--white)' : 'var(--black)'};

   :hover {
        background-color: var(--light-peach);
        color: var(--white);
  }
`; 


const Button = (props) => {
    return (
        <Wrapper bg={props.bg} {...props}> 
           {props.children}
        </Wrapper>
    )
}

export default Button;