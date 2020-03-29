import React from 'react';
import ReactDOM from 'react-dom';
import { RelayEnvironmentProvider } from 'react-relay/hooks';

import App from './app';
import Loading from './components/Loading';
import RelayEnvironment from './RelayEnvironment';

ReactDOM.render(
  <React.Suspense fallback={<Loading />}>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <App />
    </RelayEnvironmentProvider>
  </React.Suspense>,
  document.getElementById('root'),
);
