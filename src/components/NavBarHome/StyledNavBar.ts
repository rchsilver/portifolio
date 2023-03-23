import styled from "styled-components";

export const StyledNavBar = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  color: var(--color-grey-00);
  background-color: var(--color-blue-04);
  filter: drop-shadow(0px 0px 5px var(--color-grey-00));
  h2 {
    filter: drop-shadow(0px 0px 5px var(--color-grey-00));
  }
  nav {
    display: flex;
    gap: 1rem;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;

    nav {
      span:hover {
        filter: drop-shadow(0px 0px 5px var(--color-grey-00));
        cursor: pointer;
      }
    }
  }
`;
