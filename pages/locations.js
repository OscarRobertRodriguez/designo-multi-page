import styled from "styled-components";
import { QUERIES } from "../constants";
import MapCard from "../components/mapCard";

const map1desk = "assets/locations/desktop/image-map-australia.png";
const map2desk = "assets/locations/desktop/image-map-canada.png";
const map3desk = "assets/locations/desktop/image-map-canada.png";

const map1tab = "assets/locations/tablet/image-map-australia.png";
const map2tab = "assets/locations/tablet/image-map-canada.png";
const map3dtab = "assets/locations/tablet/image-map-canada.png";

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 310px;
  grid-row-gap: 40px;
  

  @media ${QUERIES.tabletAndUp} {
      grid-row-gap: 120px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-row-gap: 32px;
    margin-bottom: 350px;
  }
`;

const Locations = () => {
  return (
    <Wrapper>
      <MapCard imgs={[map1tab, map2desk]} >
        <h4>Australia</h4>
        <div>
          <h5>Designo AU Office</h5>
          <p>19 Balonne Street</p>
          <p>New South Wales 2443</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p> p: (02) 6720 9092</p>
          <p>M: contact@designo.au</p>
        </div>
      </MapCard>

      <MapCard imgs={[map1tab, map2desk]} flip={true}>
        <h4>Australia</h4>
        <div>
          <h5>Designo AU Office</h5>
          <p>19 Balonne Street</p>
          <p>New South Wales 2443</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p> p: (02) 6720 9092</p>
          <p>M: contact@designo.au</p>
        </div>
      </MapCard>

      <MapCard imgs={[map1tab, map2desk]}>
        <h4>Australia</h4>
        <div>
          <h5>Designo AU Office</h5>
          <p>19 Balonne Street</p>
          <p>New South Wales 2443</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p> p: (02) 6720 9092</p>
          <p>M: contact@designo.au</p>
        </div>
      </MapCard>
    </Wrapper>
  );
};

export default Locations;
