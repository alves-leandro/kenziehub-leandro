import styled from "styled-components";
import { theme } from "../../styles/theme";

export const TechModalList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 23px;

  h1 {
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }

  button {
    height: 32px;
    width: 32px;
    background: #212529;
    border-radius: 4px;
    color: ${theme.colors.grey0};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }

  .modalContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
