import React from "react";
import { ButtonWrapper, ButtonWrapperProps } from "./style/ButtonWrapper";
interface ButtonBaseProps {
  /**
   * Prop que desabilita o botao
   */
  disabled?: boolean;
  /**
   * Prop que passa via children o que deseja renderizar dentro do componente
   */
  children: React.ReactNode;
}

type ButtonProps = ButtonBaseProps & ButtonWrapperProps;
export default function Button({
  disabled = false,
  children,
  color = "primary.main",
  mode = "light",
}: ButtonProps) {
  return (
    <ButtonWrapper disabled={disabled} color={color} mode={mode}>
      {children}
    </ButtonWrapper>
  );
}
