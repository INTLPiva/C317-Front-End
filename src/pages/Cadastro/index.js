import React, { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Context } from '../../Context/AuthContext';
import { api } from '../../services/api';

export const Cadastro = () => {
  // eslint-disable-next-line prefer-const
  let navigate = useNavigate();

  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmacaoPassword, setConfirmacaoPassword] = useState('');

  const { setarLoading, handleLogin, loading } = useContext(Context);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmacaoPasswordChange = (event) => {
    setConfirmacaoPassword(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário com o backend
    if (!nome || !email || !password || !confirmacaoPassword) {
      return alert('Preencha todos os campos');
    }

    if (password !== confirmacaoPassword) {
      return alert('As 2 senhas devem ser iguais');
    }

    try {
      const usuario = await api.post('/user/create', {
        nome,
        email,
        senha: password,
      });

      console.log(usuario);
    } catch (error) {
      if (error.response.status === 409) {
        return alert('Usuário já existente');
      }
    }

    logar();
  };

  async function logar() {
    setarLoading(true);

    try {
      await handleLogin({ email, senha: password });
      setarLoading(false);
    } catch {}

    if (!loading) {
      return navigate('/servicos');
    }
  }

  return (
    <Container>
      <Header />
      <Card className="card-login">
        <div className="box-login">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="Nome"></label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={handleNameChange}
                placeholder="Nome"
              />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="E-mail"
              />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Senha"
              />
            </div>
            <div>
              <label htmlFor="confirmacaoPassword"></label>
              <input
                type="password"
                id="confirmacaoPassword"
                value={confirmacaoPassword}
                onChange={handleConfirmacaoPasswordChange}
                placeholder="Confirmar Senha"
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
