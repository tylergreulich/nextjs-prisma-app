import * as React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';

import { fakeUser, wait, type } from '../../lib/testUtils';
import { Register, REGISTER_MUTATION } from '../Register';

const { email, name } = fakeUser();
const mocks: MockedResponse[] = [
  {
    request: {
      query: REGISTER_MUTATION,
      variables: {
        email,
        name
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
  }
];

describe('<Register />', () => {
  it('calls the mutation properly', async () => {
    const handleSubmit = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <MockedProvider mocks={mocks}>
        <Register onSubmit={handleSubmit} />
      </MockedProvider>
    );

    const emailInput = getByPlaceholderText('Email') as HTMLInputElement;
    const nameInput = getByPlaceholderText('Name') as HTMLInputElement;
    const passwordInput = getByPlaceholderText('Password') as HTMLInputElement;

    const submitButton = getByText('Submit') as HTMLButtonElement;

    type(emailInput, email);
    type(nameInput, name);
    type(passwordInput, 'abc');

    await wait(0);

    expect(emailInput.value).toBe(email);
    expect(nameInput.value).toBe(name);
    expect(passwordInput.value).toBe('abc');

    fireEvent(submitButton, new MouseEvent('click'));

    await wait(0);

    expect(handleSubmit).toHaveBeenCalled();
  });
});
