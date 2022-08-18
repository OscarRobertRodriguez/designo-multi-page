/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import { QUERIES } from "../constants";
import Image from "next/image";
const backgroundImg = "/assets/shared/desktop/bg-pattern-small-circle.svg";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: 48px;
    max-width: 689px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: initial;
  }

  p {
    text-align: center;
    font-size: var(--15px);
    width: 327px;

    @media ${QUERIES.tabletAndUp} {
      width: 439px;
      text-align: left;
    }

    @media ${QUERIES.desktopAndUp} {
      width: 350px;
      text-align: center;
    }
  }

  h2 {
    text-align: center;
    font-weight: var(--med);
    font-size: var(--20px);
    letter-spacing: 5px;
    text-transform: uppercase;
    padding-bottom: 32px;

    @media ${QUERIES.tabletAndUp} {
      text-align: left;
      padding-bottom: 16px;
    }

    @media ${QUERIES.desktopAndUp} {
      text-align: center;
    }
  }
`;

const ImageWrapper = styled.div`
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

const Illustration = ({ img, title, children, rotateImg }) => {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <Wrapper>
      <ImageWrapper rotateImg={rotateImg}>
        <img src={img} alt="hell" />
      </ImageWrapper>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </Wrapper>
  );
};

export default Illustration;
