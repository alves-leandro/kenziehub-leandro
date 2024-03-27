import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 60px;
  display: flex;
  border-bottom: 1px solid ${theme.colors.grey3};

  .headerDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 800px;
    padding: 0 10px;
  }

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.primary};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }
`;
