import styled from "styled-components";
import { QUERIES } from "../constants";
import Button from "./button";
import Link from "next/link";
import Image from "next/image";
const img = "/assets/home/desktop/bg-pattern-hero-home.svg";
const heroImg = "/assets/home/desktop/image-hero-phone.png";

const Wrapper = styled.div`
  background: url(${img}), url(${heroImg}), var(--peach);
  height: 843px;
  background-repeat: no-repeat, no-repeat;
  background-position: 8% 60%, 50% -430%;
  display: grid;
  padding: 0 24px;
  padding-top: 80px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    border-radius: 15px;
    background-position: 8% 60%, 50% -400%;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 640px;
    padding-left: 85px;
    padding-right: 85px;
    padding-top: 145px;
    padding-bottom: 145px;
    align-items: center;
    background-position: 101% 15%, 119% 12%;
  }

  p {
    padding-top: 25px;
    padding-bottom: 25px;
    color: var(--white);
    font-size: var(--15px);

    @media ${QUERIES.customPhoneMinUp} {
      width: 445px;
    }

    @media ${QUERIES.desktopAndUp} {
      font-size: var(--16px);
      padding-bottom: 40px;
      padding-top: 40px;
    }
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(3, min-content);
  padding-bottom: 80px;
  background: transparent;
  text-align: center;
  margin-top: -5px;

  @media ${QUERIES.customPhoneMinUp} {
    margin-top: 50px;
  }

  @media ${QUERIES.tabletAndUp} {
    margin-top: -20px;
  }

  @media ${QUERIES.desktopAndUp} {
    justify-items: start;
    text-align: left;
    margin-top: 0;
  }
`;

const Title = styled.h1`
  color: var(--white);


  @media ${QUERIES.customPhoneMinUp} {
    width: min(570px, 100%);
  }

  @media ${QUERIES.desktopAndUp} {
    width: 540px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Title>
          Award-winning custom designs and digital branding solutions
        </Title>
        <p>
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link href="/about" passHref>
          <Button bg="var(--white)">learn more</Button>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Hero;
