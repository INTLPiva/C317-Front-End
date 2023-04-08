import React from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.png';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

export const Sobre = () => {
  return (
    <Container>
      <Header />
      <Card>
        <div>
          <p>
            Uma plataforma online que permite que os usuários encontrem
            prestadores de serviços em sua região de maneira rápida e fácil. Com
            uma interface intuitiva, os usuários podem pesquisar por serviços
            específicos e filtrar os resultados por localização, avaliação e
            preços. O site também permite que os prestadores de serviços criem
            perfis profissionais e destaquem suas habilidade e experiência para
            potenciais clientes. Com essa ferramente, você ajuda a conectar
            consumidores com os serviços que precisam, ao mesmo tempo em que
            ajuda prestadores de serviços a expandirem seus negócios e a
            alcançarem um público maior.
          </p>
          <img src={logo} alt="logo GETJOBS" width={210} height={210} />
        </div>
      </Card>
    </Container>
  );
};
