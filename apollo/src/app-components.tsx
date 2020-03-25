import styled from 'styled-components';

import View from './components/View';

export const Container = styled(View)`
  flex: 1;
  background-color: white;
`;

export const Footer = styled(View)`
  flex: none;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const Header = styled(View)`
  flex: none;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const TaskListContainer = styled(View)`
  flex: 1;
  overflow-y: auto;
`;

export const Row = styled(View)`
  flex: none;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #ddd;
  height: 50px;
  padding-right: 8px;
`;

export const Label = styled(View)`
  flex: 1;
  justify-content: center;
  height: 50px;
`;

export const ErrorText = styled.span`
  color: red;
`;
