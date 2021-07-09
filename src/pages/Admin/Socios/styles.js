import styled, { keyframes } from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Scroll = styled(PerfectScrollbar)`
  padding: 20px;
  height: 80vh;
  width: 50vw;
  @media (max-width: 576px) {
    padding: 20px;
    height: 80vh;
    width: 100vw;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  svg {
    animation: ${rotate} 2s linear infinite;
    color: #fff;
    font-size: 32px;
  }
`;

export const Socio = styled.div`
  display: flex;
  background: #313131;
  padding: 20px;
  border-radius: 4px;
  margin-top: 10px;
  justify-content: space-between;

  #img-description{
      display:flex;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    align-self: center;
  }
  span{
    display: flex;
    align-items: center;
    padding: 3px 0px;
     
    svg{
        animation: none ;
        font-size: 18px;
        
      }
  }
  

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 10px;
      margin-top: 15px;
      background: transparent;
      border: 1px solid #fff;
      color: #fff;
      padding: 5px;
      border-radius: 20px;
      
    }
    button {
      background: #fff;
      color: #313131;
      border: none;
      border-radius: 4px;
      height: 32px;
      width: 72px;

      :hover {
        opacity: 0.9;
      }
    }
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
   
    background: #313131;
    padding: 20px;
    border-radius: 4px;
    margin-top: 10px;
    justify-content: space-between;
    #img-description{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
    aside{
        margin-top: 10px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  font-size: 12px;
`;

export const BtnGroup = styled.div`
  display: flex;
  button {
    margin-left: 10px;
  }
`;

export const AlertEmpty = styled.div`
    border: 4px;
    background: #313131;
    opacity: 0.7;
    color: #fff;
    padding: 10px;
    align-items: center;
`;
