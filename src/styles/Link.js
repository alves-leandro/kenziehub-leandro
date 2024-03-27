import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "./theme";

export const LinkStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 4px;
  transition: 0.4s;
  cursor: pointer;
  font-size: ${theme.typography.headline.size};
  font-weight: ${theme.typography.headline.weight};
  line-height: ${theme.typography.headline.height};

  ${({ linksize }) => {
    switch (linksize) {
      case "medium":
        return css`
          padding: 0px 16px;
          height: 32px;
        `;
      case "small":
        return css`
          padding: 0 1.75rem;
          height: 32px;
          width: 32px;
        `;
      default:
        return css`
          padding: 0px 22px;
          height: 48px;
          width: 100%;
        `;
    }
  }};

  ${({ linkstyle }) => {
    switch (linkstyle) {
      case "primary":
        return css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: 1.2182px solid ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primaryFocus};
          }
        `;
      case "primary-negative":
        return css`
          background: ${theme.colors.primaryNegative};
          color: ${theme.colors.grey0};
          border: 1.2182px solid ${theme.colors.primaryNegative};
        `;
      case "disabled":
        return css`
          background: ${theme.colors.grey1};
          color: ${theme.colors.grey0};
          border: 1.2182px solid ${theme.colors.grey1};
          &:hover {
            background: ${theme.colors.grey2};
            border: 1.2182px solid ${theme.colors.grey2};
          }
        `;
      case "secundary":
        return css`
          background: ${theme.colors.grey3};
          color: ${theme.colors.grey0};
          border: 1.2182px solid ${theme.colors.grey3};
          &:hover {
            background: ${theme.colors.grey2};
            border: 1.2182px solid ${theme.colors.grey2};
          }
        `;
      default:
        return;
    }
  }};
`;
