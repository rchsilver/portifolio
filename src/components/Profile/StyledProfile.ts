import styled from "styled-components";

export const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: var(--color-blue-03);
  color: var(--color-grey-00);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      margin-top: 1rem;
      background-color: var(--color-blue-00);
      padding: 0.3rem;
      border-radius: 4px;
      filter: drop-shadow(0px 0px 5px var(--color-grey-00));
      border: solid 2px var(--color-blue-00);
    }
    span:hover {
      cursor: pointer;
      background-color: var(--color-blue-04);
      filter: drop-shadow(0px 0px 5px var(--color-grey-00));
      border: solid 2px var(--color-grey-00);
    }
  }

  h3,
  img {
    filter: drop-shadow(0px 0px 5px var(--color-grey-00));
  }

  h3 {
    font-size: 20px;
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }
  @media screen and (min-width: 800px) {
    padding-right: 33px;
    flex-direction: row;
    img {
      margin-inline: 1rem;
    }
  }
`;
