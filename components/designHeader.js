import styled from "styled-components";
import { QUERIES } from "../constants";

const img1 = "/assets/web-design/desktop/bg-pattern-intro-web.svg";

const MarginWrapper = styled.div`
  position: relative;
  margin: 0 -24px;
  padding-bottom: 416px;

  @media ${QUERIES.tabletAndUp} {
    margin: 0;
    padding-bottom: 375px;
  }


  @media ${QUERIES.desktopAndUp} {
    margin: 0;
    padding-bottom: 422px;
  }
`;

const Wrapper = styled.div`
  background: url(${img1});
  background-color: var(--peach);
  background-repeat: no-repeat;
  background-position: 101% -2%;
  background-size: 223%;
  height: 320px;
  width: 100%;
  position: absolute;
  padding: 0 24px;
  display: grid;
  align-items: center;
  align-content: center;
  grid-row-gap: 24px;

  @media ${QUERIES.tabletAndUp} {
    width: 100%;
    grid-row: initial;
    border-radius: 15px;
    background-position: center;
    background-size: 120%;
    height: 252px;


  }

  @media ${QUERIES.desktopAndUp} {
    width: 100%;
    grid-row: initial;
    border-radius: 15px;
    background-position: center right;
    background-size: 80%;
    height: 252px;
  }

  h2,
  p {
    text-align: center;
    color: var(--white);
  }

  h2 {
    text-transform: capitalize;
    font-size: var(--32px);
    font-weight: var(--med);

    @media ${QUERIES.tabletAndUp} {
        font-size: var(--48px);
    }
  }

  p {
    font-size: var(--15px);
    &::first-letter {
      text-transform: capitalize;
    }
    
    @media ${QUERIES.tabletAndUp} {
        font-size: var(--16px);
    }
 
  }
`;

const DesignHeader = ({ title, children }) => {
  return (
    <MarginWrapper>
      <Wrapper>
        <h2>{title}</h2>
        <p>{children}</p>
      </Wrapper>
    </MarginWrapper>
  );
};

export default DesignHeader;
