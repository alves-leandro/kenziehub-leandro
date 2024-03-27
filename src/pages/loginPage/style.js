import styled from "styled-components";
import { theme } from "../../styles/theme";

export const LoginMainDivStyled = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  background-color: ${theme.colors.grey4};

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 81px 0 19px;

    color: ${theme.colors.primary};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }
`;
