
import styled from "styled-components";
import { QUERIES } from "../constants";


const Wrapper = styled.div`
 display: grid;
 justify-items: center;
 grid-row-gap: 40px;

 @media ${QUERIES.tabletAndUp} {

  grid-row-gap: 32px;
}

@media ${QUERIES.desktopAndUp} {
  grid-template-columns: repeat(auto-fill, 350px);
  grid-gap: 30px;
}
`; 



const ProjectCards = ({children}) => {
    return (
        <Wrapper>
          {children}
        </Wrapper>
    )
};

export default ProjectCards; 

