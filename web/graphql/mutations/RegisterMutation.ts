import gql from 'graphql-tag';

export const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    register(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;
