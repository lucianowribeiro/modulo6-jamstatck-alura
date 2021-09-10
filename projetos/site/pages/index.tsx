import styled from "styled-components";
import Button from "@lucianowribeiro/ui/src/components/Button";
import { UIProvider } from "@lucianowribeiro/ui/src/theme/UIProvider";
const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return (
    <UIProvider>
      <div>
        <Button>Teste</Button>
        <Title>My page</Title>
      </div>
    </UIProvider>
  );
}
