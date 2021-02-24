import React from 'react';

import { Container, Spinning } from './styles';

const Spinner: React.FC = () => {
  return (
    <Container>
      <Spinning />
      <span>Loading ...</span>
    </Container>
  );
}

export default Spinner;