import React from 'react';
import styled from 'styled-components';

import View from './View';

export default function Error({ children }: { children?: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: red;
`;
