import * as React from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import {
  RegisterMutation,
  RegisterMutationVariables
} from '../graphql/schemaTypes';
import { REGISTER_MUTATION } from '../graphql/mutations/RegisterMutation';
import { CURRENT_USER_QUERY } from '../graphql/queries/CurrentUserQuery';
import {
  InputElementEvent,
  FormElementEvent
} from '../interfaces/shared/FormEvents';
import { RegisterProps, RegisterState } from '../interfaces/Register.interface';

import { Form } from './styles/Form';
import { ErrorMessage } from './ErrorMessage';

export class Register extends React.Component<RegisterProps, RegisterState> {
  state: RegisterState = {
    email: '',
    name: '',
    password: ''
  };

  handleRegister = async (event: FormElementEvent, register: MutationFn) => {
    event.preventDefault();

    await register({
      variables: this.state,
      refetchQueries: [{ query: CURRENT_USER_QUERY }]
    });
  };

  handleChange = ({ currentTarget }: InputElementEvent) => {
    const { name, value } = currentTarget;

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
      >
        {(register, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={(event: FormElementEvent) =>
                this.handleRegister(event, register)
              }
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Register For An Account</h2>
                <ErrorMessage error={error} />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  placeholder="Name"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <button type="submit">Register</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}
