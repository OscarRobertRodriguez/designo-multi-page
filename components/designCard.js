import { QUERIES } from "../constants";
import styled from "styled-components";
import Link from "next/link";
const img = "/assets/home/desktop/bg-pattern-hero-home.svg";
const hero = "/assets/home/tablet/image-app-design.jpg";

const Wrapper = styled.div`
  width: min(327px, 100%);
  height: 250px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  color: var(--white);

  @media ${QUERIES.tabletAndUp} {
    width: 689px;
    height: 200px;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 308px;
    width: 541px;
  }
`;

const Title = styled.h2`
  font-size: var(--28px);
  text-transform: uppercase;
`;

const BackgroundWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s;


  @media ${QUERIES.desktopAndUp} {
    height: 308px;
  }

  &:hover {
    background: hsla(10, 72%, 66%, 0.8);
  }


`;


const ContentWrapper = styled.div`
   height: 94px;
   display: grid;
    align-items: center;
    justify-items: center;

`; 

const Subtitle = styled.div`
  display: grid;
  grid-template-columns:  1fr min-content;
  align-items: center;
  justify-items: center;
  padding-top: 20px;
  width: 197px;


  p {
      font-size: var(--15px);
      letter-spacing: var(--5px);
      text-transform: uppercase;
      font-weight: var(--med);
      width: 197px;
    }

    svg {
      margin-left: 10px;
    }
`; 

const DesignCard = ({ background, children, className, href }) => {
  return (
    <Link  href={href}>
    <Wrapper
      style={{ backgroundImage: `url(${background})` }}
      className={className}
     
    >
      <BackgroundWrapper>
        <ContentWrapper>
          <Title>{children}</Title>
          <Subtitle>
            <p>view projects</p>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1 1l4 4-4 4"
                stroke="#E7816B"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </Subtitle>
        </ContentWrapper>
      </BackgroundWrapper>
    </Wrapper>
    </Link>
  );
};

export default DesignCard;
