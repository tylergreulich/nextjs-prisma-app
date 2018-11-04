import * as React from 'react';
import styled from 'styled-components';

const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

export const ErrorMessage = ({ error }: any) => {

  if (!error || !error.message) {
    return null;
  }

  const { networkError } = error;

  if (
    networkError &&
    networkError.result &&
    networkError.result.errors.length
  ) {
    return networkError.result.errors.map((newError: any, index: any) => (
      <ErrorStyles key={index}>
        <p data-test="graphql-error">
          <strong>Shoot!</strong>
          {newError.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};
