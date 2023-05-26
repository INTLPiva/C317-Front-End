import React, { useContext, useEffect, useState } from 'react';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';
import { Context } from '../../Context/AuthContext';

export const Header = () => {
  const [auth, setAuth] = useState(false);
  const { authenticated, handleLogout } = useContext(Context);

  function logout() {
    handleLogout();
    window.location.reload();
  }

  useEffect(() => {
    function getUser() {
      setAuth(authenticated);
    }

    getUser();
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="" width={60} height={60} />
      <div className="links">
        <a href="/">Home</a>|<a href="/servicos">Serviços</a>|
        <a href="/sobre">Sobre</a>|<a href="/contato">Contato</a>
      </div>
      <div>
        {auth && <a onClick={logout}>Logout</a>}
        {!auth && <a href="/login">Login</a>}
      </div>
    </Container>
  );
};
