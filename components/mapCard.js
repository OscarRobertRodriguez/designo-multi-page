import { QUERIES } from "../constants";
import styled from "styled-components";

const bg1  = 'assets/shared/desktop/bg-pattern-three-circles.svg'; 
const bg2  = 'assets/shared/desktop/bg-pattern-two-circles.svg'; 

const Wrapper = styled.div`
  height: 714px;
  display: grid;
  justify-items: center;
  position: relative;
  margin: 0 -24px;



  @media ${QUERIES.tabletAndUp} {
     height: 676px;
     margin: 0;
     margin: 0 16px;
   
  }

  @media ${QUERIES.desktopAndUp} {
     height: 326px;
  }
`;

const MarginWrapper = styled.div`
position: absolute;
width: 100%;


@media ${QUERIES.tabletAndUp} {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-row-gap: 20px;
  }

  @media ${QUERIES.desktopAndUp} {
      grid-template-columns:${props => props.flip == true ? '1fr 2fr' : '2fr 1fr'};
      grid-template-rows: 1fr;
      grid-column-gap: 30px;
  }

`;

const TextWrapper = styled.div`
 height: 394px;
  display: grid;
justify-items: center;
  place-content: center;
  grid-row-gap: 24px;
  background-color: var(--pink);
  background-image: url(${bg1}); 
  background-size: 130%;
  background-position: -4% 0%;
  
  @media ${QUERIES.tabletAndUp} {
    height: 326px;
    border-radius: 15px;
    background-image: url(${bg2});
    background-size: 70%;
    background-position: left bottom;
    background-repeat: no-repeat;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-left: 95px;
    padding-right: 95px;
    padding-top: 88px;
    padding-bottom: 88px;
     justify-content: start;
     grid-template-columns: max-content max-content;
     grid-template-rows: fit-content fit-content;
     grid-column-gap: 30px;
  }

h4 {
    font-size: var(--32px);
    color: var(--peach);
    text-transform: capitalize;

    @media ${QUERIES.desktopAndUp} {
     grid-column: 1 / 2;
     grid-row: 1/2;
    justify-self: start;
  }
}

div {
    width: 255px;
}

div:first-of-type {
    @media ${QUERIES.desktopAndUp} {
        grid-column:  1/2;
  }
  
}

div:last-of-type {
    @media ${QUERIES.desktopAndUp} {
        grid-column: 2/-1;
  } 
}

p,h5 {
    text-align: center;

    @media ${QUERIES.desktopAndUp} {
     text-align: left;
  }
}

`; 

const Map = styled.div`
  background-image: url(${(props) => props.imgs[0]});
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${QUERIES.tabletAndUp} {
    height: auto;
    border-radius: 15px;
  }

  @media ${QUERIES.desktopAndUp} {
    background-image: url(${(props) => props.imgs[1]});
    order: ${props => props.flip ? 0 : 1}
  }
`;

const MapCard = ({ children, location, imgs, flip }) => {
  return (
    <Wrapper>
      <MarginWrapper flip={flip}>
        <Map flip={flip} imgs={imgs}></Map>
      <TextWrapper>
      {children}
      </TextWrapper>
     
      </MarginWrapper>
    </Wrapper>
  );
};

export default MapCard;
