import * as React from 'react';
import { Mutation } from 'react-apollo';

import { CURRENT_USER_QUERY } from '../graphql/queries/CurrentUserQuery';
import { LOGOUT_MUTATION } from '../graphql/mutations/LogoutMutation';

export const Logout = () => (
  <Mutation
    mutation={LOGOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {logout => <button onClick={async () => await logout()}>Logout</button>}
  </Mutation>
);
