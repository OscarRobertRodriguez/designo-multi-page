import styled from "styled-components";
import { QUERIES } from "../constants";
import data from "../data";
import LocationCard from "../components/locationCard";
import ContactCard from "../components/contactCard";



const Wrapper = styled.div`
   display: grid;
   grid-row-gap: 120px;
`;

const LocationWrapper = styled.div`
  display: grid;
  grid-row-gap: 48px;
  padding-top: 120px;
  padding-bottom: 120px;
  padding-top: 764px;

  @media ${QUERIES.tabletAndUp} {
    grid-row-gap: 58px;

  }

  @media ${QUERIES.desktopAndUp} {
    grid-auto-flow: column;
   
    grid-column-gap: 30px;
    padding-top: 480px;
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <ContactCard />
      <LocationWrapper>
        {data[0].locations.map((item) => (
          <LocationCard
            key={item.location}
            location={item.location}
            img={item.img}
            rotateImg={item.rotateImg}
          />
        ))}
      </LocationWrapper>
    </Wrapper>
  );
};

export default Contact;
