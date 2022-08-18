import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import styled from 'styled-components';
import DesignCard from '../components/designCard';
import DesignCards from '../components/designCards';
import Illustrations from '../components/illustrations';
import Hero from '../components/hero';
import { QUERIES } from '../constants';

const Wrapper = styled.div`
   position: relative;
   margin: 0 -24px;

   @media ${QUERIES.tabletAndUp} {
    margin: 0;
   }
`; 

const ContentWrapper = styled.div`
    padding: 0 24px;
    
    @media ${QUERIES.desktopAndUp} {
    padding: 0;

     
  }
`; 



export default function Home() {

    const [windowWidth, setWindowWidth] = useState(0); 
  
  return (
      <Wrapper>
        <Hero />
        
      <ContentWrapper>
      <DesignCards windowWidth={windowWidth} setWindowWidth={setWindowWidth}/>

      <Illustrations/>
      </ContentWrapper>
   
      </Wrapper>
  )
}



