import styled from 'styled-components';

export const Container = styled.nav`
  background-color: #6c6c64;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: #ddd7dd;
    position: relative;
  }

  .links {
    display: flex;
    gap: 64px;
    color: #ddd7dd;
  }

  img {
    background-color: #fff;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 3px;
    border-radius: 1rem;
    width: 0px;
    background: #ddd7dd;
  }

  a:hover::after {
    width: 100%;
    transition: width 300ms ease-in-out;
  }
`;
