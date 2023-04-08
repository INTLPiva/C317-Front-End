import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

Card.propTypes = {
  children: PropTypes.node,
};
