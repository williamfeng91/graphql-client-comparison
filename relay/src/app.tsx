// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { preloadQuery, usePreloadedQuery } from 'react-relay/hooks';
import moment from 'moment';

import appQueryRequest, { appQuery } from './__generated__/appQuery.graphql';
import Page from './Page';
import RelayEnvironment from './RelayEnvironment';

const preloadedQuery = preloadQuery<appQuery>(
  RelayEnvironment,
  appQueryRequest,
  {
    userId: '1',
  },
);

export default function App() {
  const [selectedTimeKey, setSelectedTimeKey] = React.useState(
    moment().format('YYYY-MM-DD'),
  );
  const [selectedUserId, setSelectedUserId] = React.useState('1');
  const data = usePreloadedQuery(
    graphql`
      query appQuery($userId: ID!) {
        viewer {
          ...Page_viewer
        }
      }
    `,
    preloadedQuery,
  );

  return (
    <Page
      selectedTimeKey={selectedTimeKey}
      selectedUserId={selectedUserId}
      setSelectedTimeKey={setSelectedTimeKey}
      setSelectedUserId={setSelectedUserId}
      viewer={data.viewer}
    />
  );
}
