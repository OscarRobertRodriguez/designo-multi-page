import styled from "styled-components";
import { QUERIES } from "../constants";
import Illustration from "./illustration";
const friendlyImg = "/assets/home/desktop/illustration-friendly.svg";
const passionateImg = "/assets/home/desktop/illustration-passionate.svg";
const resourceImg = "/assets/home/desktop/illustration-resourceful.svg";



const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  margin-bottom: 184px;
  display: grid;
  grid-row-gap: 80px;


  @media ${QUERIES.tabletAndUp} {
     grid-row-gap: 32px;
     justify-items: center;
     padding-top: 120px;
     padding-bottom: 67px;
     margin-bottom: 210px;
  }

  @media ${QUERIES.desktopAndUp} {
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
      padding-bottom: 350px;
      padding-top: 160px;
      margin-bottom: 0;
     
  }
`;

const Illustrations = () => {
  return (
    <Wrapper>
      <Illustration img={passionateImg} title={"passionate"} >
        <p>
          Each project starts with an in-depth brand research to ensure we only
          create products that serve a purpose. We merge art, design, and
          technology into exciting new solutions.
        </p>
      </Illustration>
      <Illustration img={resourceImg} title={"resourceful"} rotateImg={'270deg'}>
        <p>
          Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients&apos; needs.
        </p>
      </Illustration>
      <Illustration img={friendlyImg} title={"friendly"} rotateImg={'90deg'}>
        <p>
          We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide.
        </p>
      </Illustration>
    </Wrapper>
  );
};

export default Illustrations;
