import styled from "styled-components";
import { QUERIES } from "../constants";
import Link from "next/link";
import Image from "next/image";

const ImageWrapper = styled.div`
  padding-bottom: 32px;
  @media ${QUERIES.tabletAndUp} {
    grid-column: 1/2;
    grid-row: 1/2;
    padding: 0;
    padding-bottom: 40px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--white);
  border: none;
  opacity: 0.1;
  width: 100%;
  @media ${QUERIES.tabletAndUp} {
    grid-row: 2/4;
    grid-column: 1/ -1;
  }
`;

const Wrapper = styled.div`
  padding-bottom: 40px;
  display: grid;
  justify-items: center;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    justify-items: start;
    align-items: center;
    padding-bottom: 30px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-top: 32px;

    @media ${QUERIES.tabletAndUp} {
      order: 1;
      grid-column: 2/-1;
      grid-row: 1/2;
      display: flex;
      width: 370px;
      justify-content: space-between;
      padding: 0;
      padding-bottom: 40px;
      justify-self: end;
    }
  }

  li {
    text-align: center;
  }

  a {
    text-decoration: none;
    color: var(--white);
    text-transform: uppercase;
    font-size: var(--14px);
  }
`;

const List = styled.ul``;

const FooterNav = () => {
  let links = [
    {
      location: "about",
      link: "our company",
    },
    {
      location: "locations",
      link: "locations",
    },
    {
      location: "contact",
      link: "contact",
    },
  ];

  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          src={"/assets/shared/desktop/logo-light.png"}
          alt="logo"
          width="202px"
          height="27px"
        />
      </ImageWrapper>
      <Divider />

      <ul>
        {links.map((item) => {
          return (
            <li key={item.link}>
              <Link href={`/${item.location}`}>
                <a>{item.link}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default FooterNav;
