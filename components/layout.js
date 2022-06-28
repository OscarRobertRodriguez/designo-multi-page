import Header from "./header";
import Footer from "./footer";
import ContactFooter from "./contactFooter";
import styled from "styled-components";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: min(1111px, 100%);
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 0 24px;
  background-color: blue;
  justify-self: center;
`;

export default function Layout({ children }) {
  let router = useRouter();
  return (
    <>
      <Wrapper>
        <Header />
        <main>{children}</main>
      </Wrapper>
      {router.pathname === "/contact" ? <ContactFooter /> : <Footer />}
    </>
  );
}
