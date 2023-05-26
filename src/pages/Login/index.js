import React, { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';
// import logo from '../../assets/logo.png';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { Context } from '../../Context/AuthContext';

export const Login = () => {
  // eslint-disable-next-line prefer-const
  let navigate = useNavigate();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticated, setarLoading, handleLogin } = useContext(Context);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário com o backend
    try {
      setarLoading(true);
      await handleLogin({ email, senha: password });
      setarLoading(false);
      return navigate('/servicos');
    } catch {}

    if (authenticated) {
      return navigate('/servicos');
    }
  };

  return (
    <Container>
      <Header />
      <Card className="card-login">
        <div className="box-login">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleUsernameChange}
                placeholder="e-mail"
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
              <button type="submit">Entrar</button>
            </div>
            <div className="cadastro">
              <p>
                {' '}
                Ainda não tem cadastro?
                <a href="/cadastro">Clique aqui!</a>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </Container>
  );
};
