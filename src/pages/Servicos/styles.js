import styled from 'styled-components';

export const Container = styled.div`
  p {
    margin-bottom: 8px;
  }

  .adicionar {
    width: 100%;
    display: flex;
    justify-content: end;
  }

  .semPessoas {
    text-align: center;
  }

  .adicionarSem {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .botaoAdicionar {
    background: green;
    border: none;
    border-radius: 24px;
    width: 100px;
    height: 50px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    align-self: center;
    margin-right: 16px;
    margin-top: 16px;
  }

  div {
    div {
      background-color: #ddd7dd;
      padding: 16px;
    }

    .dataContainer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 16px;
    }

    .botaoContainer {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .botaoEditar {
      background: green;
      border: none;
      border-radius: 24px;
      width: 100px;
      height: 50px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      align-self: center;
    }

    .botaoExcluir {
      background: red;
      border: none;
      border-radius: 24px;
      width: 100px;
      height: 50px;
      color: white;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const Table = styled.div`
  tr {
    border-bottom: 0.5px solid black;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border-collapse: collapse;

    p {
      text-align: left;
      margin-left: 35%;
    }

    th {
      color: black;
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      text-align: center;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: black;
      border-radius: 0.25rem;
      text-align: center;

      &:nth-child(2) {
        font-weight: 500;
        font-size: 24px;
      }
    }

    svg {
      cursor: pointer;
    }
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    background: #f5f8fb;
  }
`;
