/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { QUERIES } from "../constants";


const Wrapper = styled.div`
  width: min(327px, 100%); 
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.2fr 1fr;
  overflow: hidden;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: initial;
    width: min(689px, 100%);
    height: 310px;
  }

  @media ${QUERIES.desktopAndUp} {
    width: 350px;
    grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  height: auto;
  height: 478px;

  }
`; 

const ImageWrapper = styled.div`
   grid-row: 1/2; 

   @media ${QUERIES.tabletAndUp} {
    width: 100%;
    grid-row: initial; 
  }


   img {
   height: 100%;
   width: 100%;
   object-fit: cover;

   }
`; 

const ContentWrapper = styled.div`
  background-color: var(--lighter-peach);
  grid-row: 2/3; 
  text-align: center;
  height: 148px;
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  padding: 32px 29px;
  transition: all .5s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--peach);

    h3 {
        color: var(--white)
    }

    p {
        color: var(--white);
    }
   
  }


  @media ${QUERIES.tabletAndUp} {
 height: initial;
grid-row: initial; 
}

@media ${QUERIES.desktopAndUp} {
 height: 158px;
 grid-row: 2/3;

}

  
  h3 {
    font-weight: var(--bolder);
    font-size: var(--20px); 
    color: var(--peach);
    text-transform: uppercase;
    padding-bottom: 16px;
    letter-spacing: 5px;
  }

  p {
    font-size: var(--15px); 
    width: 268px;
    line-height: 26px;
    color: var(--dark-grey);



    @media ${QUERIES.tabletAndUp} {

    width: initial;
}

  }
`; 

const projectCard = ({title, info , img}) => {
    return (
        <Wrapper>
         <ImageWrapper>
             <img src={img} alt='project img card' / > 
         </ImageWrapper>
         <ContentWrapper>
             <h3>{title}</h3>
             <p>{info}</p>
         </ContentWrapper>
        </Wrapper>
    )
};

export default projectCard; 