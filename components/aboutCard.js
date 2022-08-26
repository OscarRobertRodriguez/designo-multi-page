import styled from "styled-components";
import { QUERIES } from "../constants";
const bgImg = "assets/shared/desktop/bg-pattern-three-circles.svg";
const bgImg2 = "assets/shared/desktop/bg-pattern-two-circles.svg";


const Wrapper = styled.div`
  background-image: url(${props => props.bg[0]});
  background-repeat: no-repeat;
  background-position: bottom left;
 position: relative;
  background-color: var(--pink);
  height: 865px;
  margin: 0 -24px;



  @media ${QUERIES.tabletAndUp} {
      margin: 0;
      border-radius: 15px;
      overflow: hidden;
      height: 736px;
      background-position: center center;
      width: 689px;

  }


  @media ${QUERIES.desktopAndUp} {
    height: 640px;
    background-image: url(${props => props.bg[1]});
    background-position: ${props => props.flip === true  ? `0% 100%` : `60% 99%`}; 
    width: auto;
  }



`; 

const MarginWrapper = styled.div`
padding: 0 24px;


@media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: ${props => props.flip === true  ? `2fr 1.5fr` : `1.5fr 2fr`};
    padding: 0;
    
    
  }

`; 

const ImgBackground = styled.div`
 background-image: url(${props => props.bgImg[0]});
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
 margin: 0 -24px;
 height: 320px;



 
 

 @media ${QUERIES.tabletAndUp} {
    background-image: url(${props => props.bgImg[1]});

  }

  @media ${QUERIES.desktopAndUp} {
    background-image: url(${props => props.bgImg[0]});
    height: 640px;
    margin: 0;
    order: ${props => props.flip ? 1 : 'initial'};
  }
`;

const TextWrapper = styled.div`
order: ${props => props.flip ? 2 : 'initial'};
  background: transparent;
  font-size: var(--15px);
  height: 385px; 
  text-align: center;
  display: grid;
  grid-row-gap: 32px;
  padding-top: 80px;
  padding-bottom: 80px;




  @media ${QUERIES.tabletAndUp} {
    font-size: var(--16px);
    padding-top: 68px;
  padding-bottom: 68px;
  grid-row-gap: 24px;
  width: 572px;
 margin: 0 auto;

  }


  @media ${QUERIES.desktopAndUp} {
    grid-row-gap: 32px;
    text-align: left;
    height: 332px;
    width: 445px;
    justify-self: center;
  align-self:center;
  padding: 0;

  }

  h3 {
    color: var(--peach);
    font-size: var(--32px);
    font-weight: var(--med);


  @media ${QUERIES.tabletAndUp} {
    font-size: var(--40px);
  }
  }


  h3::first-letter {
    text-transform: capitalize;
  }

  p {


  }
`; 

const AboutCard = ({children, title, mobileImg, tabletImg, desktopImg, flip}) => {
    return (
        <Wrapper flip={flip} bg={[bgImg, bgImg2]}>
           <MarginWrapper flip={flip} >
            <ImgBackground flip={flip}  bgImg={[mobileImg, tabletImg, desktopImg]}>

            </ImgBackground>
            <TextWrapper>
            <h3>{title}</h3>
            {children}
            </TextWrapper>
           </MarginWrapper>
        </Wrapper>
    )
}


export default AboutCard; 