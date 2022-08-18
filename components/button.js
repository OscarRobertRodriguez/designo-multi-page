
import styled from "styled-components"
import { QUERIES } from "../constants";
import { forwardRef } from "react";

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
  text-decoration: none;

   :hover {
        background-color: var(--light-peach);
        color: var(--white);
  }
`; 


const Button = forwardRef(( props, innerRef) => {
    return (
        <Wrapper bg={props.bg} onClick={props.onClick} href={props.href} ref={innerRef} {...props} > 
           {props.children}
        </Wrapper>
    )
})

Button.displayName = 'Button'; 
export default Button;


// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
