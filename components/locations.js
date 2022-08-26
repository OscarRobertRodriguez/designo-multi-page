import LocationCard from "./locationCard"
import data from "../data"
import styled from "styled-components";
import Illustration from "./illustration";
import { QUERIES } from "../constants";

const Wrapper = styled.div`
 display: grid;
 grid-row-gap: 48px;
 padding-top: 120px;
 padding-bottom: 120px;


 @media ${QUERIES.tabletAndUp} {
   grid-row-gap: 58px;
   padding: 0;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-auto-flow: column;
    grid-column-gap: 30px;

  }
`; 

const Locations = () => {
    return (
        <Wrapper>
  {data[0].locations.map(item =>  (
    <LocationCard key={item.location} location={item.location} img={item.img} rotateImg={item.rotateImg} />
  ) )}
        </Wrapper>
    )
}

export default Locations; 