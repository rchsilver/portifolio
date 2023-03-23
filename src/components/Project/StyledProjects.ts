import styled from "styled-components";

export const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    color: var(--color-grey-00);
    filter: drop-shadow(0px 0px 5px var(--color-grey-00));
  }
  li {
    cursor: pointer;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;

      img {
        width: 250px;
      }
    }
  }
`;
