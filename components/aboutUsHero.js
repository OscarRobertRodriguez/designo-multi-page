/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { QUERIES } from "../constants";
import Image from "next/image";

const appDesk = "/assets/about/desktop/image-about-hero.jpg";
const appDesk2 = "/assets/about/tablet/image-about-hero.jpg";
const bg = "/assets/about/desktop/bg-pattern-hero-about-mobile.svg";

const Wrapper = styled.div`
  margin: 0 -24px;
  background: url("/assets/about/mobile/bg-pattern-hero-about-mobile.svg"), var(--peach);
  padding: 0 24px;
 background-position: right -95%;
   display: flex;
   flex-direction: column;
  overflow: hidden;

  @media ${QUERIES.tabletAndUp} {
    background: url("/assets/about/desktop/bg-pattern-hero-about-desktop.svg") var(--peach);
    border-radius: 15px;
    margin: 0;
    background-repeat: no-repeat;
    background-position: bottom 140%;
    width: 689px;
  }

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    height: 480px;
    width: initial;
    background-position: -1% 101%;
 
  }
`;

const ImgWrapper = styled.div`
  height: 320px;
  display: block;
  margin: 0 -24px;

  @media ${QUERIES.desktopAndUp} {
    height: 100%;
    order: 2;
  }

  img {
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  color: var(--white);

  @media ${QUERIES.tabletAndUp} {
    padding-top: 64px;
    padding-bottom: 64px;
    background-size: 300%;
  }

  @media ${QUERIES.desktopAndUp} {
    order: 1;
    padding-right: 48px;
    text-align: left;
    padding-top: 135px;
    padding-bottom: 135px;
    display: grid;
    justify-content: center;
  }

  h2 {
    padding: 0;
    font-size: var(--32px);
    font-weight: var(--med);
    text-transform: capitalize;

    @media ${QUERIES.tabletAndUp} {
      font-size: var(--48px);
    }
  }
  p {
    padding-top: 24px;
    font-size: var(--15px);
 
    margin: 0 auto;
    @media ${QUERIES.tabletAndUp} {
      padding-top: 32px;
      font-size: var(--16px);
      width: 573px;
    }

    @media ${QUERIES.desktopAndUp} {
      width: 458px;
    }
  }
`;

const AboutUsHero = () => {
  return (
    <Wrapper>
      {/* <ImgWrapper>
        <img src={appDesk2} alt="hero img" />
      </ImgWrapper> */}

      <ImgWrapper>

        <img src="/assets/about/mobile/image-about-hero.jpg" alt="hello"  />
      </ImgWrapper>



      <ContentWrapper>
        <h2>About us</h2>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AboutUsHero;
