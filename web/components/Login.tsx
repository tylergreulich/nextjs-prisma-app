import * as React from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import { LoginMutation, LoginMutationVariables } from '../graphql/schemaTypes';
import { LOGIN_MUTATION } from '../graphql/mutations/LoginMutation';
import { CURRENT_USER_QUERY } from '../graphql/queries/CurrentUserQuery';
import {
  InputElementEvent,
  FormElementEvent
} from '../interfaces/shared/FormEvents';
import { LoginProps, LoginState } from '../interfaces/Login.interface';

import { Form } from './styles/Form';
import { ErrorMessage } from './ErrorMessage';

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    email: '',
    password: ''
  };

  handleLogin = async (event: FormElementEvent, login: MutationFn) => {
    event.preventDefault();

    await login({
      variables: this.state
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
    const { email, password } = this.state;

    return (
      <Mutation<LoginMutation, LoginMutationVariables>
        mutation={LOGIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(login, { error, loading }) => {
          return (
            <Form
              method="post"
              onSubmit={(event: FormElementEvent) =>
                this.handleLogin(event, login)
              }
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Please Login</h2>
                <ErrorMessage error={error} />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Password"
                />
                <button type="submit">Login</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}
