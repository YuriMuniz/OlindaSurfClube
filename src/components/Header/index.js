import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosLogOut, IoIosHome } from "react-icons/io";
import { MdDashboard, MdEmail } from "react-icons/md";
import { FaLock, FaWpforms } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Container,
  ContainerMenuMobile,
  StyledBurger,
  StyledMenu,
} from "./styles";
import { signOut } from "../../store/modules/auth/actions";
// import history from "../../services/history";
import logo from "../../assets/logo.png";
import { store } from "../../store";

function Header() {
  // const signed = useSelector((state) => state.auth.signed);
  const { signed } = store.getState().auth;
  const [expandMenuMobile, setExapandMenuMobile] = useState(false);

  // const handleLoginPage = () => {
  //   history.push("/login");
  // };

  const handleExpandMenuMobile = () => {
    setExapandMenuMobile(!expandMenuMobile);
    window.location.hash = "";
  };
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    handleExpandMenuMobile();
  };

  return (
    <Container>
      <nav>
        <a href="/">
          <img src={logo} alt="ASO" />
        </a>

        <ul>
          {signed ? (
            <li>
              <a href="/admin">ADMIN</a>
            </li>
          ) : (
            <li>
              <a href="contato">Contato</a>
            </li>
          )}
        </ul>
      </nav>
      <aside>
        {signed ? (
          <a onClick={handleSignOut}>
            Logout <IoIosLogOut />{" "}
          </a>
        ) : (
          <Link to="/login">
            Acesso restrito <FaLock />{" "}
          </Link>
        )}
      </aside>
      <ContainerMenuMobile>
        <StyledBurger onClick={handleExpandMenuMobile} open={expandMenuMobile}>
          <div />
          <div />
          <div />
        </StyledBurger>

        {expandMenuMobile && (
          <StyledMenu open={expandMenuMobile}>
            {signed ? (
              <>
               <a href="/">
                  Home <IoIosHome />
                </a>
                <a href="/admin">
                  Admin <MdDashboard />
                </a>
                <a onClick={handleSignOut}>
                  Logout <IoIosLogOut />
                </a>
              </>
            ) : (
              <>
                <a href="/#register" onClick={handleExpandMenuMobile}>
                  Tornar Sócio
                  <FaWpforms />
                </a>
                <a href="/contato">
                  Contato
                  <MdEmail />
                </a>
                <a href="/login">
                  Acesso Restrito <FaLock />
                </a>
              </>
            )}
          </StyledMenu>
        )}
      </ContainerMenuMobile>
    </Container>
  );
}

export default Header;
