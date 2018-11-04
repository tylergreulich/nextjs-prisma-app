import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';

import { fakeUser, type } from '../../lib/testUtils';
import { Register } from '../Register';
import { REGISTER_MUTATION } from '../../graphql/mutations/RegisterMutation';
import { CURRENT_USER_QUERY } from '../../graphql/queries/CurrentUserQuery';

// const wait = (amount = 0) =>
//   new Promise(resolve => setTimeout(resolve, amount));

const { email, name } = fakeUser();
const password = 'abc';
const mocks: MockedResponse[] = [
  {
    request: {
      query: REGISTER_MUTATION,
      variables: {
        email,
        name,
        password
      }
    },
    result: {
      data: {
        register: {
          __typename: 'User',
          id: 'abc123',
          email,
          name
        }
      }
    }
  },
  {
    request: {
      query: CURRENT_USER_QUERY
    },
    result: {
      data: {
        me: {
          __typename: 'User',
          id: 'abc123',
          email,
          name,
          permissions: []
        }
      }
    }
  }
];

describe('<Register />', () => {
  it('calls the mutation properly', () => {
    const handleSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <MockedProvider mocks={mocks}>
        <Register onSubmit={handleSubmit} />
      </MockedProvider>
    );

    const emailInput = getByPlaceholderText(/email/i) as HTMLInputElement;
    const nameInput = getByPlaceholderText(/name/i) as HTMLInputElement;
    const passwordInput = getByPlaceholderText(/password/i) as HTMLInputElement;

    const submitButton = getByText(/register/i) as HTMLButtonElement;

    type(emailInput, email);
    type(nameInput, name);
    type(passwordInput, password);

    expect(emailInput.value).toBe(email);
    expect(nameInput.value).toBe(name);
    expect(passwordInput.value).toBe(password);

    fireEvent(submitButton, new MouseEvent('click'));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
