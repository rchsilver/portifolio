import styled from "styled-components";

export const StyledContact = styled.section`
  color: var(--color-grey-00);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    color: var(--color-grey-00);
  }
  h2 {
    margin-top: 30px;
    margin-bottom: 40px;
    filter: drop-shadow(0px 0px 5px var(--color-grey-00));
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    gap: 10px;
    li {
      display: flex;
      font-size: 20px;
      gap: 5px;
      align-items: center;
    }
    li:hover {
      cursor: pointer;
      filter: drop-shadow(0px 0px 5px var(--color-grey-00));
    }
  }
  @media screen and (min-width: 800px) {
    ul {
      flex-direction: row;
    }
  }
`;
