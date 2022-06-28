import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Twitter from "../public/assets/shared/desktop/icon-twitter.svg";
import CallToAction from "./callToAction";
import { QUERIES } from "../constants";
import Icons from "./icons";
import FooterNav from "./footerNav";

const Wrapper = styled.div`
  isolation: isolate;
  position: relative;
  display: grid;
  background-color: var(--black);
  margin: 0 -24px;
  padding: 0 24px;
`;

const PositionWrapper = styled.div`
  position: relative;
  justify-self: center;
  display: grid;
  width: 100%;
`;

const FooterWrapper = styled.footer`
  width: min(1111px, 100%);
  justify-self: center;
  color: #fff;
  position: relative;

  padding-bottom: 64px;
  padding-top: 252px;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 220px;
    padding-bottom: 80px;
  }
`;

const FooterNavBottom = styled.div`
  display: grid;
  justify-items: center;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: min-content 1fr;
  }
`;

const Adresses = styled.div`
  color: var(--white);
  opacity: 0.5;
  font-size: var(--16px);
  text-align: center;
  display: grid;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
    text-align: initial;

    div {
      width: 223px;
      height: 78px;
    }

    div:last-child {
      padding-left: 12px;
    }
  }

  div:last-child {
    padding-top: 40px;

    @media ${QUERIES.tabletAndUp} {
      padding-top: 0;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <PositionWrapper>
        <FooterWrapper>
          <FooterNav />
          <FooterNavBottom>
            <Adresses>
              <div>
                <h6>Designo Central Office</h6>
                <p>3886 Wellington Street </p>
                <p>Toronto, Ontario M9C 3J5</p>
              </div>
              <div>
                <h6>Contact Us (Central Office)</h6>
                <p>P : +1 253-863-8967</p>
                <p>M : contact@designo.co</p>
              </div>
            </Adresses>
            <Icons />
          </FooterNavBottom>
        </FooterWrapper>
        <CallToAction />
      </PositionWrapper>
    </Wrapper>
  );
}
