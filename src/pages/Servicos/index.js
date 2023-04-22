import React from 'react';

import data from './database.json';
import { Container } from './styles';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

export const Servicos = () => {
  return (
    <Container>
      <Header />
      <Card>
        {data.map((element) => (
          <div className="dataContainer" key={element.id}>
            <div>
              <p>{element.nome}</p>
              <p>E-mail: {element.email}</p>
              <p>Contato: {element.contato}</p>
              <p>Endereço: {element.endereco}</p>
            </div>
            <h2>{element.servico}</h2>
          </div>
        ))}
      </Card>
    </Container>
  );
};
