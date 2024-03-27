import styled from "styled-components";
import { theme } from "../../styles/theme";

export const RegisterMainDivStyled = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${theme.colors.grey4};

  .formDiv {
    width: 370px;
    margin: 0 auto;
  }

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 81px 110px 19px 110px;

    color: ${theme.colors.primary};
    font-size: ${theme.typography.title1.size};
    font-weight: ${theme.typography.title1.weight};
    line-height: ${theme.typography.title1.height};
  }
`;
