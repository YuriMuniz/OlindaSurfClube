import styled, { keyframes } from "styled-components";
import surfer from "../../assets/surfer.jpg";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  width: 100%;
  border: none;
`;

export const Banner = styled.div`
  width: 100%;
  background: url(${surfer});
  border: none;
  height: 85vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    height: 85vh;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 160px;
    height: auto;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin: 20px;
  border-radius: 20px;
  border: none;
  color: #fff;
  background: #313131;
  font-size: 18px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: lighter;
  align-self: flex-end;
  :hover {
    color: #313131;
    background: #fff;
  }
  svg {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    align-self: center;
    margin-bottom: 80px;
  }
`;

export const Success = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  p {
    font-size: 18px;
  }
`;

export const Form = styled.div`
  width: 100%;
  height: 100%;

  display: ${(props) => (props.loading ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  color: #fff;

  h1 {
    padding: 20px;
    align-self: center;
  }

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 76vh;
  display: ${(props) => (props.loading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 26px;
  color: #fff;
  svg {
    animation: ${rotate} 2s linear infinite;
    margin-left: 3px;
    color: #fff;
    font-size: 64px;
  }
  span {
    margin-top: 20px;
  }
`;

export const InputGroup = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    width: 300px;
    height: 32px;
    padding: 0 15px;
    color: #fff;
    font-size: 12px;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  span {
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Photo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  svg {
    font-size: 220px;
    cursor: pointer;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
  }
`;

export const FormContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BtnSend = styled.button`
  align-self: center;
  padding: 10px;
  margin: 30px 0px 0px 0px;
  border-radius: 20px;
  border: none;
  color: #313131;
  background: #fff;
  font-size: 18px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    color: #fff;
    background: #313131;
  }
`;
