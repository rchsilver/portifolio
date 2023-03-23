import styled from "styled-components";

export const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: var(--color-grey-00);
    filter: drop-shadow(0px 0px 5px var(--color-grey-00));
    margin-top: 30px;
    margin-bottom: 40px;
  }
  li {
    cursor: pointer;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      padding: 0;
      margin: 0;
      color: var(--color-grey-00);

      img {
        width: 250px;
        border-radius: 6px;
      }
    }
  }
  li:hover {
    a {
      filter: drop-shadow(0px 0px 5px var(--color-grey-00));
    }
  }
`;
