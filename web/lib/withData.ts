import withApollo from 'next-with-apollo';
import ApolloClient, { Operation, PresetConfig } from 'apollo-boost';
import { endpoint } from '../config';

const createClient = ({ headers }: PresetConfig) => {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: async (operation: Operation) => {
      await operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      });
    },
  });
};

export default withApollo(createClient);
