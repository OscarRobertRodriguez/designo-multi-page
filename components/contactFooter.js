import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import CallToAction from './callToAction';
import { QUERIES } from "../constants";



const Wrapper = styled.div`
 isolation: isolate;
 position: relative;
 display: grid;
 background-color: var(--black);
margin: 0 -24px;
padding: 0 24px;
`;


const PositionWrapper = styled.div`
position: relative;
justify-self: center;
display: grid;
width: 100%;
`;

const FooterWrapper = styled.footer`
   width: min(1111px ,100%); 
   justify-self: center;
  color: #fff;
  position: relative;

  padding-bottom: 64px;
  padding-top: 64px;

  @media  ${QUERIES.tabletAndUp} {
    padding-top: 80px;
    padding-bottom: 80px;

  }

  @media  ${QUERIES.desktopAndUp} {
     padding-top: 72px;
  }
`;



const Divider = styled.div`
  height: 1px;
  background-color: var(--white);
  border: none;
  opacity: .1;
  width: 100%;        
  @media  ${QUERIES.tabletAndUp} {
    grid-row: 2/4;
    grid-column: 1/ -1;
  }
`;

const ImageWrapper = styled.div`
  padding-bottom: 32px;
  @media  ${QUERIES.tabletAndUp} {
      grid-column: 1/2;
       grid-row: 1/2;
       padding: 0;
       padding-bottom: 40px;

  }
`;


const FooterNav = styled.div`
  padding-bottom: 40px;
  display: grid;
  justify-items: center;

  @media  ${QUERIES.tabletAndUp} {
    display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: min-content min-content;
   justify-items: start;
   align-items: center;
   padding-bottom: 30px;
  }

  
  ul {
    list-style-type:  none;
    margin: 0;
    padding: 0;
    padding-top: 32px;
    
    @media  ${QUERIES.tabletAndUp} {
     order: 1;
     grid-column: 2/-1;
     grid-row: 1/2;
     display: flex;
     width: 370px;
     justify-content: space-between;
     padding: 0;
     padding-bottom: 40px;
     justify-self: end;
  }
  }

  li {
     text-align: center;
  }
   
   a {
    text-decoration:  none;
    color: var(--white);
    text-transform: uppercase;
    font-size: var(--14px);

    
   }
`;

const FooterNavBottom = styled.div`
  display: grid;
  justify-items: center;

  
  @media  ${QUERIES.tabletAndUp} {
    grid-template-columns:  min-content  1fr;

  }
`;

const Adresses = styled.div`
  color: var(--white);
  opacity: .5;
  font-size: var(--16px);
  text-align: center;
  display: grid;

  @media  ${QUERIES.tabletAndUp} {
    grid-template-columns:  1fr 1fr;
    text-align: initial;


    div {
      width: 223px;
      height: 78px;
    }
    
    div:last-child {
      padding-left: 12px;
    }

  }

  div:last-child {
    padding-top: 40px;

    @media  ${QUERIES.tabletAndUp} {
    padding-top: 0;

  }
  }
`;

const Icons = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 184px;
  text-align: center;
  padding-top: 40px;
  position: relative;
  
  @media  ${QUERIES.tabletAndUp} {
    justify-self: end;
    align-self: end;
    position: relative;
    top: 10px;
  }
`




export default function ContactFooter() {

  let Links = [
    'facebook',
    'youtube',
    'twitter',
    'pinterest',
    'instagram'
  ];


  return (
    <Wrapper>
      <PositionWrapper>
        <FooterWrapper>
          <FooterNav>
            <ImageWrapper>
              <Image src={'/assets/shared/desktop/logo-light.png'} alt='logo' width='202px' height='27px' />
            </ImageWrapper>
            <Divider />
            <ul>
              <li>
                <Link href={"/about"}>
                  <a>our company</a>
                </Link>
              </li>
              <li>
                <Link href={"/locations"}>
                  <a>locations</a>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <a>contact</a>
                </Link>
              </li>
            </ul>
          </FooterNav>
          <FooterNavBottom>
            <Adresses>
              <div>
                <h6>Designo Central Office</h6>
                <p>3886 Wellington Street </p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div>
                <h6>Contact Us (Central Office)</h6>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </div>
            </Adresses>
            <Icons>
              {
                Links.map(name => {
                  return (
                    <li key={name}>
                      <Link href={`https://${name}.com`}>
                        <a>
                          <Image src={`/assets/shared/desktop/icon-${name}.svg`} width="24px" height="24px" alt={name} />
                        </a>
                      </Link>
                    </li>
                  )
                })
              }
            </Icons>
          </FooterNavBottom>
        </FooterWrapper>
 
      </PositionWrapper>
    </Wrapper>
  )
};