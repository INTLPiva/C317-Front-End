import React, { createContext, useEffect, useState } from 'react';

import { api } from '../services/api';

const Context = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(loginParams) {
    let dados = '';

    try {
      const response = await api.post('/user/login', loginParams);
      dados = response.data;
    } catch (error) {
      if (error.response.status === 401) {
        return alert('As credenciais estão incorretas');
      }
    }

    if (dados !== null) {
      localStorage.setItem('token', JSON.stringify(dados));
      api.defaults.headers.Authorization = `Bearer ${dados}`;
      setAuthenticated(true);
      setLoading(false);

      window.location.href = '/servicos';
    }

    if (dados === null) {
      return alert('As credenciais estão incorretas');
    }
  }

  function setarLoading(value) {
    setLoading(value);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = '';
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Context.Provider
      value={{
        authenticated,
        handleLogin,
        loading,
        handleLogout,
        setarLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
