import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    text-align: center;
    background-color: #ddd7dd;
    border-radius: 16px;
    width: 60%;
  }  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  .box-login {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 40em;
    background: #D9D9D9;
  }

  input {
    width: 30em;
    height: 4em;
    border-radius: 15px;
    padding: 20px;
  }

  button {
    position: relative;
    justify-content: center;
    width: 50%;
    height: 4em;
    border-radius: 15px;
    margin-top: 40px;
  }
  button .cadastro {
    width: 10%;
  }
  .cadastro {
    padding: 100px 0 0 0;
    justify-content: flex-end;
    align-itens: flex-end;
    }
`;
