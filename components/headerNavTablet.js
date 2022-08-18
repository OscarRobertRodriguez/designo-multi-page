import styled from "styled-components";
import { QUERIES } from "../constants";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.div`
  height: 96px;
  background-color: var(--white);
  margin: 0 -24px;
  padding: 0 24px;
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const HeaderWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
  height: 96px;
  margin: 0;
  position: relative;
  width: min(1111px, 100%);
  display: grid;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    height: auto;
    padding-top:35px;
  }


  div:first-child {
    height: 27px;
    cursor: pointer;
  }

  ul {
    justify-self: end;
    cursor: pointer;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-column-gap: 42px;
  grid-auto-flow: column;
  a {
    text-decoration: none;
    font-size: var(--14px);
    color: var(--black);
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

const HeaderNavTablet = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <div>
          <Link href='/'>
          <Image
            src={"/assets/shared/desktop/logo-dark.png"}
            alt="logo"
            width="202px"
            height="27px"
          />
          </Link>
        </div>
        <List open={open}>
          <li>
            <Link href="/about">
              <a>Our Company</a>
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <a>locations</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
        </List>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default HeaderNavTablet;
