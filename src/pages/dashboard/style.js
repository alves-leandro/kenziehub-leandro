import styled from "styled-components";
import { theme } from "../../styles/theme";

export const DashboardMainDivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  min-height: 100%;
  background-color: ${theme.colors.grey4};
  gap: 60px;

  .containerUserInfo {
    width: 100vw;
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.grey3};
  }

  .userInfo {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 800px;
    height: 118px;
    justify-content: space-between;
    margin: 0 auto;
    gap: 10px;
    text-justify: auto;

    span:nth-child(1) {
      color: ${theme.colors.grey0};
      font-size: ${theme.typography.title1.size};
      font-weight: ${theme.typography.title1.weight};
    }

    span:nth-child(2) {
      color: ${theme.colors.grey1};
      font-size: ${theme.typography.headlineBold.size};
      font-weight: ${theme.typography.headlineBold.weight};
      line-height: ${theme.typography.headlineBold.height};
    }
  }

  @media (max-width: 600px) {
    .userInfo {
      flex-direction: column;
      margin-bottom: 40px;
    }

  }

  .mainDivDash {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px;
    max-width: 800px;
  }

  p {
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
    width: 100%;
    max-width: 800px;
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    gap: 1rem;
    padding: 2rem;
    width: 90vw;
    max-width: 800px;
    min-width: 230px;
    max-height: 26rem;
    background: ${theme.colors.grey3};
    border-radius: 4px;
    overflow-x: hidden;
  }

  @media (max-width: 600px) {
    ul {
      max-height: 100%;
    }
  }

  .emptyUl {
    display: flex;
    padding: 2rem 0 0;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 85vw;
  max-width: 750px;
  min-width: 220px;
  height: 49px;
  background: ${theme.colors.grey4};
  border-radius: 4px;

  &:hover {
    background: ${theme.colors.grey2};
  }

  .techTitle {
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }

  .techStatus {
    display: flex;
    align-items: center;
    gap: 23px;
    color: ${theme.colors.grey1};
    font-size: ${theme.typography.headline.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.headline.height};
  }

  .trashIcon {
    color: ${theme.colors.grey1};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
