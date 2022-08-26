/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { QUERIES } from "../constants";
import Button from "./button";
const backgroundImg = "/assets/shared/desktop/bg-pattern-small-circle.svg";

const Wrapper = styled.div`
 display: grid;
 justify-items: center;
 text-align: center;
 grid-row-gap: 45px;

 h4 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: var(--med);
    font-size: var(--20px);
 }
`; 

const ImgWrapper = styled.div`
width: 202px;
  height: 202px;
  position: relative;
  transform: rotate(0deg);
  display: block;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center center;
    transform: rotate(${(props) => props.rotateImg || "0deg"});
    background: url("/assets/shared/desktop/bg-pattern-small-circle.svg") 0 0
      repeat;
  }
`; 

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 32px;

`


const LocationCard = ({img, location, rotateImg}) => {
    return (
       <Wrapper>
          <ImgWrapper rotateImg={rotateImg}>
           <img src={img} alt="location" />
          </ImgWrapper>
         <ContentWrapper>
         <h4>{location}</h4>
          <Button href='/locations' bg='light'>
            see location
          </Button>
         </ContentWrapper>
    
       </Wrapper>
    )
};

export default LocationCard;