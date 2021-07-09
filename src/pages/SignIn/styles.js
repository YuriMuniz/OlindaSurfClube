import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  #spinner {
    position: absolute;
    animation: ${rotate} 2s linear infinite;
    margin-top: -10px;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-height: 501px) {
    form {
      margin: 60px 5px;
    }
  }
`;

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 80px;

  @media (max-width: 330px) {
    margin-top: 0px;
  }

  @media (max-height: 501px) {
    margin-top: 0px;

    form {
      margin: 10px 5px;
    }
  }
`;
