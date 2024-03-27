import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const FormRegisterStyled = styled.form`
  width: 100%;
  max-width: 370px;
  padding: 42px 20px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: ${theme.colors.grey3};

  h3 {
    display: flex;
    justify-content: center;
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }

  button {
    margin-top: 20px;
    font-size: ${theme.typography.title3.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.title3.height};
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.typography.headline.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.headline.height};
    color: ${theme.colors.grey1};
    margin: 28px 0;
  }

  span {
    display: flex;
    justify-content: center;
    font-size: ${theme.typography.headline.size};
    font-weight: ${theme.typography.headline.weight};
    color: ${theme.colors.colorNegative};
    min-height: 17px;
  }
`;
