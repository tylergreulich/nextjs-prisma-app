import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import {
  RegisterMutation,
  RegisterMutationVariables
} from '../graphql/schemaTypes';

interface RegisterState {
  email: string;
  name: string;
  password: string;
}

interface RegisterProps {
  onSubmit: jest.Mock<{}>;
}

export const REGISTER_MUTATION = gql`
  mutation REGISTER_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    id
    name
    email
  }
`;

export class Register extends React.Component<RegisterProps, RegisterState> {
  state: RegisterState = {
    email: '',
    name: '',
    password: ''
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    const { email, name, password } = this.state;

    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={REGISTER_MUTATION}
        variables={this.state}
      >
        {(register, { data, loading }) => {
          if (loading) {
            return <div>Loading...</div>;
          }

          return (
            <form
              onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const { data }: any = await register();
                console.log(data);
              }}
            >
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}
