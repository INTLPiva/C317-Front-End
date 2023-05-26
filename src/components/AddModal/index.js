import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { RiCloseLine } from 'react-icons/ri';

import { Container } from './styles';
import { api } from '../../services/api';
import { Input } from '../Input';

export function AddModal({ setIsOpen, user }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [servico, setServico] = useState('');
  const [celular, setCelular] = useState('');
  const [cidade, setCidade] = useState('');

  // function handleChangeNome(event) {
  //   setNome(event.target.value);
  // }

  // function handleChangeEmail(event) {
  //   setEmail(event.target.value);
  // }
  useEffect(() => {
    function setUser() {
      setNome(user.name);
      setEmail(user.email);
    }

    setUser();
  }, []);

  function handleChangeServico(event) {
    setServico(event.target.value);
  }

  function handleChangeCelular(event) {
    setCelular(event.target.value);
  }

  function handleChangeCidade(event) {
    setCidade(event.target.value);
  }

  async function handleSubmit() {
    const objeto = {
      id: '1',
      nome,
      email,
      servico,
      celular,
      cidade,
    };

    await api.post('/func/create', objeto);

    window.location.reload();
  }

  return (
    <Container>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Adicionar Pessoa</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className="modalContent">
            <Input name="Nome" type="text" value={nome} readonly />
            <Input name="E-Mail" type="text" value={email} readonly />
            <Input
              name="Serviço"
              type="text"
              value={servico}
              onChange={handleChangeServico}
            />
            <Input
              name="Celular"
              type="text"
              value={celular}
              onChange={handleChangeCelular}
            />
            <Input
              name="Cidade"
              type="text"
              value={cidade}
              onChange={handleChangeCidade}
            />
            <button className="buttonSubmit" onClick={handleSubmit}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

AddModal.propTypes = {
  setIsOpen: PropTypes.func,
  user: PropTypes.object,
};
