import styled from "styled-components";
import { QUERIES } from "../constants";
import DesignCard from "../components/designCard";
import ProjectCard from "../components/projectCard";
import ProjectCards from "../components/projectCards";
import DesignHeader from "../components/designHeader";
import data from "../data";

const appDesk = "/assets/home/desktop/image-app-design.jpg";
const appTablet = "/assets/home/tablet/image-app-design.jpg";

const graphicDesk = "/assets/home/desktop/image-graphic-design.jpg";
const graphicTablet = "/assets/home/tablet/image-graphic-design.jpg";

const Wrapper = styled.div``;

const CardsWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  padding-top: 120px;
  grid-column-gap: 30px;
  grid-row-gap: 24px;
  padding-bottom: 285px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr;
    padding-bottom: 385px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: repeat(2, 1fr);
    padding-bottom: 350px;
    padding-top: 160px;
  }
`;

const WebDesign = () => {
  return (
    <Wrapper>

      <DesignHeader title={'web design'}>
          we build websites that serve as powerful marketing tools and bring memorable brand experiences.
        </DesignHeader>

     <ProjectCards>
        {
          data[0].webdesign.projectCards.map(card =>  (
           <ProjectCard key={card.title} title={card.title} img={card.img} info={card.info} / >
             
          ))
        }
       
     </ProjectCards>



      <CardsWrapper>
        <DesignCard href="/app-design" background={appDesk}>
          App Design
        </DesignCard>
        <DesignCard href="/graphic-design" background={graphicDesk}>
          Graphic Design
        </DesignCard>
      </CardsWrapper>
    </Wrapper>
  );
};

export default WebDesign;
