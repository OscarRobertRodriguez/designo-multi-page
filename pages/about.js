import styled from "styled-components";
import AboutUsHero from "../components/aboutUsHero";
import Locations from "../components/locations";
import AboutCard from "../components/aboutCard";
import { QUERIES } from "../constants";

const worldMobile = "/assets/about/mobile/image-world-class-talent.jpg";
const worldTab = "/assets/about/tablet/image-world-class-talent.jpg";
const worldDesktop = "/assets/about/desktop/image-world-class-talent.jpg";

const realMobile = "/assets/about/mobile/image-real-deal.jpg";
const realTab = "/assets/about/tablet/image-real-deal.jpg";
const realDesktop = "/assets/about/desktop/image-real-deal.jpg";

const Wrapper = styled.div`
  display: grid;
 justify-content: center;
 padding-bottom: 310px;

  @media ${QUERIES.tabletAndUp} {
    grid-row-gap: 120px;
    padding-bottom: 190px;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-row-gap: 160px;
  }
`;



const About = () => {
  return (
    <Wrapper>
      <AboutUsHero />

      <AboutCard
        title="world-class talent"
        mobileImg={worldMobile}
        tabletImg={worldTab}
        desktopImg={worldDesktop}

      >
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </AboutCard>

      <Locations />

      <AboutCard
        title="the real deal"
        mobileImg={realMobile}
        tabletImg={realTab}
        desktopImg={realDesktop}
        flip={true}
      >
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </AboutCard>
      <div>

      </div>
    </Wrapper>
  );
};

export default About;
