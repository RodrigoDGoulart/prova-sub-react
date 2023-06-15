import { ReactNode } from "react";
import styled from "styled-components"

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function Botao (props: Props) {
  return (
    <DivSld
    onClick={props.onClick}
    >
      {props.children}
    </DivSld>
  )
}

const DivSld = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;