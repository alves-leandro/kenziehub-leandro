import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  outline: none;
  border: none;
  gap: 13px;
  margin-bottom: 12px;

  Label {
    font-size: ${theme.typography.headline.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.headline.height};
    color: ${theme.colors.grey0};
  }

  input {
    outline: none;
    border: none;
    padding: 0px 16px;
    border-radius: 4px;
    width: 100%;
    height: 38px;
    font-size: ${theme.typography.headline.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.headline.height};
    background-color: ${theme.colors.grey2};
    color: ${theme.colors.grey0};
    cursor: pointer;
  }
  input:focus {
    border: 1px solid ${theme.colors.grey0};
    
  }
  input:disabled {
    color: ${theme.colors.grey1};
    cursor: not-allowed;
  }
  

  select {
    border: none;
    padding: 0px 16px;
    border-radius: 4px;
    width: 100%;
    height: 38px;
    font-size: ${theme.typography.title3.size};
    font-weight: ${theme.typography.headline.weight};
    line-height: ${theme.typography.headline.height};
    background-color: ${theme.colors.grey2};
    color: ${theme.colors.grey0};
    cursor: pointer;
  }
`;
