import { useContext } from "react";
import Header from "./header";
import Footer from "./footer";
import ContactFooter from "./contactFooter";
import styled from "styled-components";
import { useRouter } from "next/router";
import { Portal } from "@reach/portal";
import Link from "next/link";
import HeaderNavTablet from "./headerNavTablet";
import {MobileContext} from '../pages/_app.js';


const Wrapper = styled.div`
  width: min(1111px, 100%);
  display: grid;
  grid-template-rows: min-content 1fr;
  justify-self: center;

`;




export default function Layout({ children, isTablet }) {
  let router = useRouter();

  
  return (
    <>
   
      <Wrapper>
       {isTablet ? <HeaderNavTablet /> : <Header />} 
        <main>{children}</main>
      </Wrapper>
      {router.pathname === "/contact" ? <ContactFooter /> : <Footer />}
    </>
  );
}
