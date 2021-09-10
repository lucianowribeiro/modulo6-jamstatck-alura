import get from "lodash/get";
import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  color: ${({ theme, color, mode }) =>
    get(theme, `${mode}.${color}.contrastText`)};
  background: ${({ theme, color, mode }) =>
    get(theme, `${mode}.${color}.color`)};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }
`;
interface ButtonProps {
  /**
   * Prop que seleciona o tema padrao do botao
   */
  mode?: string;
  /**
   * Prop que seleciona que tipo de tema de cor o botao irá ter
   */
  color?: string;
  /**
   * Prop que desabilita o botao
   */
  disabled?: boolean;
  /**
   * Prop que passa via children o que deseja renderizar dentro do componente
   */
  children: React.ReactNode;
}
export default function Button({
  disabled,
  children,
  color,
  mode,
}: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} color={color} mode={mode}>
      {children}
    </ButtonWrapper>
  );
}
Button.defaultProps = {
  color: "primary.main",
  mode: "light",
};
