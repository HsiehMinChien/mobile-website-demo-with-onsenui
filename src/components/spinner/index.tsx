import React from 'react';
import Styled, { keyframes, } from 'styled-components';

const ldsCircle = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

const StyledSpinner = Styled.div`
  & {
    text-align: center;
    & > div {
      display: inline-block;
      transform: translateZ(1px);
      & > div {
        display: inline-block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        background: radial-gradient(orange, transparent);
        animation: ${ldsCircle} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
    }
  }

`;

function Spinner() {
  return (
    <StyledSpinner>
      <div className="spinner">
        <div></div>
      </div>
    </StyledSpinner>
  )
}

export default Spinner;