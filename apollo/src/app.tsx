import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import moment from 'moment';

import { appQuery } from './__generated__/appQuery';
import Error from './components/Error';
import Loading from './components/Loading';
import Page, { VIEWER_FRAGMENT } from './Page';

export const APP_QUERY = gql`
  query appQuery($userId: ID!) {
    viewer {
      ...Page_viewer
    }
  }
  ${VIEWER_FRAGMENT}
`;

export default function App() {
  const [selectedTimeKey, setSelectedTimeKey] = React.useState(
    moment().format('YYYY-MM-DD'),
  );
  const [selectedUserId, setSelectedUserId] = React.useState('1');
  const { data, loading, error } = useQuery<appQuery>(APP_QUERY, {
    variables: {
      userId: selectedUserId,
    },
  });

  if (loading && !data) return <Loading />;
  if (error) return <Error>{error}</Error>;
  if (!data) return <Error>Not found</Error>;

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
