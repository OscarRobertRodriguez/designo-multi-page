import { useContext } from "react";
import styled from "styled-components";
import Button from "./button";
import Image from "next/image";
import {MobileContext} from '../pages/_app.js';
import Link from "next/link";
import { QUERIES } from "../constants";
import { Portal } from "@reach/portal";
import HeaderNavTab from "./headerNavTablet";

const Wrapper = styled.header`
  height: 96px;
  background-color: var(--white);
  margin : 0 -24px;
  padding: 0 24px;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

`;


const HeaderWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 96px;
  margin: 0;
  position: relative;
  width: min(1111px, 100%);
  display: grid;
  justify-content: space-between;


div:first-child {
  height: 27px;
}

div:last-child {
  justify-self: end;
  cursor: pointer;

} 
`;

const List = styled.ul`
  position: sticky;
   list-style-type: none;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   background-color: var(--black);
   height:235px;
   width: 100%;
   padding:0 24px;
   top: 280px;

   z-index: 99;
   height: ${props => props.open ? '235px' :  0};
   overflow: ${props => props.open ? 'initial' : 'hidden'};

    & a { 
      text-decoration:  none;
      font-size: var(--24px);
      text-transform: uppercase;
      color: var(--white);
      cursor: pointer;
    }
    &:before {
      content: '';
      width: 25px;
      height: 235px;
      position: absolute;
      background: var(--black);
      left: -24px;
      top: 0;
    }

    &:after {
      content: '';
      width: 25px;
      height: 235px;
      position: absolute;
      background: var(--black);
      right: -24px;
      top: 0;
    }

    @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`; 


const Background = styled.div`
  position: sticky;
  height: 100vh;
  top: 230px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .4);
  display: ${props => props.open ? 'block' : 'none'};


  &:before {
      content: '';
      width: 24px;
      height: 100vh;
      position: absolute;
      background: rgba(0, 0, 0, .4);
      left: -24px;
      top: 0;
    }

    &:after {
      content: '';
      width: 24px;
      height: 100vh;
      position: absolute;
      background: rgba(0, 0, 0, .4);
      right: -24px;
      top: 0;
    }
`


export default function Header() {


  const [open, setOpen] = useContext(MobileContext);

  return (
    <>
    <Wrapper>
    <HeaderWrapper>
      <div >
        <Image
          src={"/assets/shared/desktop/logo-dark.png"}
          alt="logo"
          width="202px"
          height="27px"
        />
      </div>
      <div>
        <Image
          src={`/assets/shared/mobile/icon-${ open ? 'close' : 'hamburger'}.svg`}
          alt="logo"
          width="24px"
          height="20px"
          onClick={() => setOpen(prev => !prev)}
        />
      </div>

    </HeaderWrapper>
    <List open={open}>
        <li onClick={() => setOpen(prev => !prev)}>
          <Link href="/about" >
            <a>Our Company</a>
          </Link>
        </li>
        <li onClick={() => setOpen(prev => !prev)}>
          <Link href="/locations">
          <a>locations</a>
          </Link>
        </li>
        <li onClick={() => setOpen(prev => !prev)}>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </List>

      <Background open={open} />
    </Wrapper>
    
 


    </>
  );
}
