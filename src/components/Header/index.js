import React from 'react';

import { Container } from './styles';
import logoImg from '../../assets/logo.png';

export const Header = () => {
  return (
    <Container>
      <img src={logoImg} alt="" width={60} height={60} />
      <div className="links">
        <a href="/">Home</a>|<a href="/servicos">Serviços</a>|
        <a href="/sobre">Sobre</a>|<a href="/contato">Contato</a>
      </div>
      <div>
        <a href="/login">Login</a>
      </div>
    </Container>
  );
};
