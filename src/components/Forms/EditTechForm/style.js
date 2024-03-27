import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormLoginStyled = styled.form`
  width: 100%;
  max-width: 370px;
  padding: 22px 22px 42px 22px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: ${theme.colors.grey3};
  color: ${theme.colors.grey1};

  h1 {
    display: flex;
    justify-content: center;
    padding: 20px 0px;
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }

  button {
    color: ${theme.colors.grey0}; 
    margin-top: 20px;
    font-size: ${theme.typography.title3.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.title3.height};
  }

  a {
    margin-top: 20px;
    font-size: ${theme.typography.title3.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.title3.height};
  }

  p {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 18px;
    font-size: ${theme.typography.headlineBold.size};
    font-weight: ${theme.typography.headlineBold.weight};
    line-height: ${theme.typography.headlineBold.height};
    color: ${theme.colors.grey1};
  }

  span {
    display: flex;
    justify-content: center;
    font-size: ${theme.typography.headline.size};
    font-weight: ${theme.typography.headline.weight};
    color: ${theme.colors.colorNegative};
    min-height: 17px;
  }

  .EditModalButtons {
    display: flex;
    gap: 20px;
  }
`;
