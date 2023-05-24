import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 350px;

  & input {
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    outline: none;
    color: black;
    font-size: 1em;
    background-color: #fff;
  }

  & span {
    position: absolute;
    left: 10px;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    text-transform: uppercase;
    transition: 0.5s;
  }

  & input:valid ~ span,
  & input:focus ~ span {
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    /* background: #fff; */
    /* color: black; */
    background-color: black;
    color: #fff;
    border-radius: 2px;
  }
`;
