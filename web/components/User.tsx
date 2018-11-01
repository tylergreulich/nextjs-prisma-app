import * as React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../graphql/queries/CurrentUserQuery';

interface CurrentUserProps {
  children(props: any): any;
}

export const User: React.SFC<CurrentUserProps> = ({ children, ...props }) => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {(payload: any) => children(payload)}
  </Query>
);
