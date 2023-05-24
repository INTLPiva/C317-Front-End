import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export function Input({ name, ...rest }) {
  return (
    <Container>
      <input required {...rest} />
      <span>{name}</span>
    </Container>
  );
}

Input.propTypes = {
  name: PropTypes.string,
};
