import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

export const Home = () => {
  return (
    <Container>
      <Header />
      <Card>
        <div>
          <h1>
            <a href='/servicos'>Como podemos lhe servir?</a>
          </h1>
        </div>

        <div>
          <img src={logo} alt="logo GETJOBS" />
        </div>
      </Card>
    </Container>
  );
};
