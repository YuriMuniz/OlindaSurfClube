import styled from "styled-components";

import { darken } from "polished";

export const Wrapper = styled.div`
  min-height: 100%;
  background: #fcdac7;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 100%;
  max-width: 350px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;

    input {
      background: #313131;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      margin: 0 0 10px;

      option {
        color: rgba(255, 255, 255, 0.7);
        background: #243943;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #313131;
      font-weight: bold;
      color: #fff;

      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${(props) =>
          props.disabled ? "#313131" : darken(0.03, "#313131")};
        opacity: 1;
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
