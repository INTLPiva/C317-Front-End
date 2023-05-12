import React, { useState } from 'react';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

export const Cadastro = () => {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [localizacao, setLocal] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmacaoPassword, setConfirmacaoPassword] = useState('');
  const [selecao, setSelecao] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleLocalizacaoChange = (event) => {
    setLocal(event.target.value);
  };
  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };
  const handleConfirmacaoPasswordChange = (event) => {
    setConfirmacaoPassword(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleSelecaoChange = (event) => {
    setSelecao(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário com o backend

    console.log('Nome:', nome);
    console.log('e-mail:', email);
    console.log('Localização:', localizacao);
    console.log('Telefone:', telefone);
    console.log('Senha:', password);
    console.log('Seleção:', selecao);
  };

  return (
    <Container>
      <Header />
      <Card className='card-login'>
        <div className='box-login'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Nome"></label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={handleNameChange}
                placeholder='Nome'

              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder='e-mail'

              />
            </div>
            <div>
              <label htmlFor="localizacao"></label>
              <input
                type="text"
                id="localizacao"
                value={localizacao}
                onChange={handleLocalizacaoChange}
                placeholder='Localização'

              />
            </div>
            <div>
              <label htmlFor="Telefone"></label>
              <input
                type="text"
                id="telefone"
                value={telefone}
                onChange={handleTelefoneChange}
                placeholder='Telefone'
              />
            </div>

            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder='Senhas'
              />
            </div>
            <div>
              <label htmlFor="confirmacaoPassword"></label>
              <input
                type="password"
                id="confirmacaoPassword"
                value={confirmacaoPassword}
                onChange={handleConfirmacaoPasswordChange}
                placeholder='Confirmar Senha'
                
              />
            </div>
            <div>
              <label htmlFor="selecao"></label>
              <input
                type="text"
                id="selecao"
                value={selecao}
                onChange={handleSelecaoChange}
                placeholder='Selecione'
              />
            </div>
            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </Card>
    </Container>
  );
};


