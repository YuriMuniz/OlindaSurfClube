import styled from "styled-components";

export const Container = styled.div`
  height: 15vh;
  background: #fff;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  nav {
    display: flex;
    align-items: center;
    padding-left: 100px;

    img {
      width: 80px;
      height: auto;
    }
    ul {
      border-left: 1px solid #eee;
      margin-left: 20px;
      padding-left: 15px;
      a {
        color: #313131;
      }
      a:hover {
        opacity: 0.8;
      }
    }
  }

  aside {
    a {
      display: flex;
      padding: 0px 20px;
      border: none;
      color: #313131;
      background: none;
      cursor: pointer;
      svg {
        margin-left: 3px;
      }
    }
  }

  @media (max-width: 768px) {
    nav {
      width: 80vw;
      padding-left: 5px;
      img {
        width: 70px;
        height: auto;
      }
      ul {
        display: none;
      }
    }
    aside {
      display: none;
    }
  }
`;

export const ContainerMenuMobile = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    width: 20vw;
    flex-direction: column;
    height: auto;
    z-index: 999999;
    font-size: 32px;
    color: #313131;
    svg {
      color: #313131;
    }
  }
`;

export const MenuMobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    height: auto;
    z-index: 999999;
    font-size: 32px;
    color: #313131;
    svg {
      color: #313131;
    }
  }
`;

export const ContentMenuMobile = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    z-index: 999999;
    width: 100%;
    margin-bottom: -30px;
    height: auto;

    a {
      font-size: 14px;
      color: #313131;
    }
  }
`;

export const StyledMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #313131;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  color: #ffffff;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s linear;
    display: flex;
    align-self: center;
    justify-content: space-between;
    align-items: center;

    svg {
      color: #ffffff;
      font-size: 32px;
    }
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#fcdac7" : "#313131")};

    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
