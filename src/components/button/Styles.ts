import styled, { css } from "styled-components";

interface StyledButtonProps{
    isDeleted: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #000090;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background-color: lightcoral;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  ${(props) =>
    props.isDeleted &&
    css`
      background-color: lightgoldenrodyellow;
    `};
`;
