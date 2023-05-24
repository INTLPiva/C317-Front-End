import React, { useState } from 'react';

import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';

import { Container, Table, ContainerLoading } from './styles';
import { AddModal } from '../../components/AddModal';
import { Card } from '../../components/Card';
import { EditModal } from '../../components/EditModal';
import { Header } from '../../components/Header';
import { Loader } from '../../components/Loader';
import { api } from '../../services/api';

export const Servicos = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [userSelectedId, setUserSelectedId] = useState({});
  const { data, isLoading, isError } = useQuery('data', async () => {
    const response = await fetch('http://localhost:4000/func/list');
    if (!response.ok) {
      throw new Error('Falha ao obter os dados');
    }
    return response.json();
  });

  if (isLoading) {
    return (
      <Container>
        <Header />
        <ContainerLoading>
          <div className="loading">
            <h1>Carregando</h1>
            <Loader />
          </div>
        </ContainerLoading>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Header />
        <ContainerLoading>
          <div className="loading">
            <h1>Erro ao obter os dados!!!</h1>
          </div>
        </ContainerLoading>
      </Container>
    );
  }

  async function deletar(email) {
    await api.delete(`http://localhost:4000/func/delete/${email}`);

    window.location.reload();
  }

  return (
    <Container>
      <Header />
      <Card>
        {data.length === 0 ? (
          <div className="adicionarSem">
            <div></div>
            <h1 className="semPessoas">Sem Pessoas Cadastradas</h1>

            <button
              className="botaoAdicionar"
              onClick={() => setIsOpenAdd(true)}
            >
              Adicionar
            </button>
          </div>
        ) : (
          <>
            <div className="adicionar">
              <button
                className="botaoAdicionar"
                onClick={() => setIsOpenAdd(true)}
              >
                Adicionar
              </button>
            </div>
            <Table>
              <table>
                <thead>
                  <tr>
                    <th>Dados</th>
                    <th>Profissão</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((element) => {
                    return (
                      <tr key={element.id}>
                        <td>
                          <p>
                            {element.nome}
                            <br />
                            {element.email}
                            <br />
                            {element.celular}
                            <br />
                            {element.cidade}
                            <br />
                          </p>
                        </td>
                        <td>{element.servico}</td>
                        <td>
                          <FaPencilAlt
                            onClick={() => {
                              setIsOpenEdit(true);
                              setUserSelectedId(element.id);
                            }}
                          />
                        </td>
                        <td>
                          <FaTrashAlt onClick={() => deletar(element.email)} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Table>
          </>
        )}
        {isOpenEdit && (
          <EditModal id={userSelectedId} setIsOpen={setIsOpenEdit} />
        )}
        {isOpenAdd && <AddModal setIsOpen={setIsOpenAdd} />}
      </Card>
    </Container>
  );
};
