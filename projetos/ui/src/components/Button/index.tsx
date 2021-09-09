import React from "react";
interface ButtonProps {
  /**
   * Prop que desabilita o botao
   */
  disabled?:boolean;
  /**
   * Prop que passa via children o que deseja renderizar dentro do componente
   */
  children: React.ReactNode
}
export default function Button({ disabled, children }: ButtonProps) {
  return (
    <button disabled={disabled}>
      {children}
    </button>
  )
}
