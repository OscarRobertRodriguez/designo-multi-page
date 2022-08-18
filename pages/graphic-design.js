import styled from "styled-components";
import { QUERIES } from "../constants";
import DesignCard from "../components/designCard";
import ProjectCard from "../components/projectCard";
import ProjectCards from "../components/projectCards";
import DesignHeader from "../components/designHeader";
import data from "../data";

const appDesk = "/assets/home/desktop/image-app-design.jpg";
const webDesk = "/assets/home/desktop/image-web-design-large.jpg";
const graphicDesk = "/assets/home/desktop/image-graphic-design.jpg";



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

const GraphicDesign = () => {
  return (
    <Wrapper>
      <DesignHeader title={"graphic design"}>
        Our mobile designs bring intuitive digital solutions to your customers
        right at their fingertips.
      </DesignHeader>

      <ProjectCards>
        {data[0].graphicdesign.projectCards.map((card) => (
          <ProjectCard
            key={card.title}
            title={card.title}
            img={card.img}
            info={card.info}
          />
        ))}
      </ProjectCards>

      <CardsWrapper>
        <DesignCard href="/app-design" background={appDesk}>
          app Design
        </DesignCard>
        <DesignCard href="/webdisign-design" background={webDesk}>
          Web Design
        </DesignCard>
      </CardsWrapper>
    </Wrapper>
  );
};

export default GraphicDesign;
