import styled from "styled-components";
import get from "lodash/get";

export interface ButtonWrapperProps {
  /**
  * Prop que seleciona que tipo de tema de cor o botao irá ter
  */
  color?: 'primary.main' | 'secondary.main' |  'tertiary.main';
  /**
  * Prop que seleciona o tema padrao do botao
  */
  mode?: 'light' | 'dark';
}
export const ButtonWrapper = styled.button<ButtonWrapperProps>`
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