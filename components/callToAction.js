import styled from "styled-components";
import Button from "./button";
import { QUERIES } from "../constants";
import Link from "next/link";
const img = "/assets/shared/desktop/bg-pattern-call-to-action.svg";

const Wrapper = styled.div`
  width: min(1111px, 100%);
  background: url(${img}), var(--peach);
  background-repeat: repeat;
  background-position: 43% 45%;
  object-fit: cover;
  height: 379px;
  border-radius: 28px;
  border: none;
  position: absolute;
  top: -189.5px;
  justify-self: center;
  color: var(--white);
  text-align: center;
  display: grid;
  justify-items: center;
  padding: 64px 24px;

  @media ${QUERIES.tabletAndUp} {
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 50px;
    padding-top: 50px;
    height: 350px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-left: 95px;
    padding-right: 95px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    height: 292px;
  }



  h2 {
    font-size: var(--32px);
    line-height: 36px;
    font-weight: var(--med);

    @media ${QUERIES.tabletAndUp} {
      font-size: var(--40px);
      line-height: var(--48px);
      letter-spacing: var(--2px);
      width: 300px;
      margin-left: 0;
    }

    @media ${QUERIES.desktopAndUp} {
      width: auto;
    }
  }



  p {
    padding-top: 16px;
    font-size: var(--15px);
    padding-bottom: 24px;
    line-height: 25px;

    @media ${QUERIES.tabletAndUp} {
      width: 400px;
    }

    @media ${QUERIES.desktopAndUp} {
      width: auto;
    }
  }


  & .button  {
    justify-self: center;
    align-self: center;

    @media  ${QUERIES.desktopAndUp} {
      justify-self: end;
      
  }
    
  }
`;



const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;

  @media ${QUERIES.desktopAndUp} {
    text-align: left;
  }
`;

const CallToAction = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <h2>Let&apos;s talk about your project</h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </ContentWrapper>
      <Link href='/contact' passHref>
      <Button className='button'>get in touch</Button>
      </Link>
    </Wrapper>
  );
};

export default CallToAction;
