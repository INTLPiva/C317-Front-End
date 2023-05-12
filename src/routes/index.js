import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Cadastro } from '../pages/Cadastro';
import { Contato } from '../pages/Contato';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Servicos } from '../pages/Servicos';
import { Sobre } from '../pages/Sobre';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicos" element={<Servicos />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}
