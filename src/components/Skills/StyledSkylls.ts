import styled from "styled-components";

export const StyledSkill = styled.section`
  display: flex;
  flex-direction: column;
  color: var(--color-grey-00);
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  h2 {
    filter: drop-shadow(0px 0px 5px var(--color-grey-00));
  }
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 500px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 80px;
      border-radius: 12px;
      background-color: var(--color-blue-01);
      margin: 0;
      svg {
        font-size: 30px;
      }
    }
  }
  li:hover {
    cursor: pointer;
    border: solid 2px var(--color-grey-00);
    background-color: var(--color-blue-04);
    filter: drop-shadow(0px 0px 5px var(--color-grey-00));
    svg,
    span {
      filter: drop-shadow(0px 0px 5px var(--color-grey-00));
    }
  }
`;