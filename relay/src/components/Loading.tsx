import React from 'react';
import styled from 'styled-components';

import View from './View';

export default function Loading() {
  return <Container>Loading...</Container>;
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
