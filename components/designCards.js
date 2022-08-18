import { useEffect } from "react";
import DesignCard from "./designCard";
import styled from "styled-components";
import { QUERIES } from "../constants";

const webDesk = "/assets/home/desktop/image-web-design-large.jpg";
const webTablet = "/assets/home/tablet/image-web-design.jpg";

const appDesk = "/assets/home/desktop/image-app-design.jpg";
const appTablet = "/assets/home/tablet/image-app-design.jpg";


const graphicDesk = "/assets/home/desktop/image-graphic-design.jpg";
const graphicTablet = "/assets/home/tablet/image-graphic-design.jpg";

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  padding-top: 120px;
  grid-row-gap: 24px;


  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows:  1fr 1fr;
    grid-gap: 24px;
    padding-top: 160px;

    

   
    .first {
        height: 640px;
        grid-column: 1/2;
        grid-row: 1/3;



        & > div {
          height: 100%;
        }
    }
 
  }
`;



const DesignCards = ({ setWindowWidth, windowWidth }) => {
    const webImg = windowWidth >= 1440 || windowWidth < 760 ? webDesk : webTablet; 
    const appImg = windowWidth >= 1440 || windowWidth < 760 ? appDesk : appTablet; 
    const graphicImg = windowWidth >= 1440 || windowWidth < 760 ? graphicDesk : graphicTablet; 


  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  return (
    <Wrapper>
      <DesignCard className='first' background={webImg} href={"/web-design"}>web design</DesignCard>
      <DesignCard background={appImg} href={"/app-design"}>App design</DesignCard>
      <DesignCard background={graphicImg} href={"/graphic-design"}>Graphic Design</DesignCard>
    </Wrapper>
  );
};

export default DesignCards;
