import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

export const Contato = () => {
  return (
    <Container>
      <Header />
      <Card>
        <div>
          <img src={logo} alt="logo GETJOBS" width={400} height={400} />

          <p>Telefone: (35) 4471-0022</p>
          <p>e-mail: suporte@getjobs.com</p>
          <p>Facebook: facebook.com/getjobs</p>
          <p>Instagram: @getjobs</p>
          <p>Av. João de Camargo, 510 - Centro</p>
          <p>Santa Rita do Sapucái - MG, 37540-000</p>
        </div>
      </Card>
    </Container>
  );
};
