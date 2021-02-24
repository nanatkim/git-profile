import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem;

  > span {
    margin-top: 10px;
  }
`;

const rotate360 = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

export const Spinning = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid var(--gray);
  border-right: 2px solid var(--gray);
  border-bottom: 2px solid var(--gray);
  border-left: 4px solid var(--black);
  background: transparent;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
