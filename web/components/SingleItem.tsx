import * as React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';
import {
  SingleItemQuery,
  SingleItemQueryVariables
} from '../graphql/schemaTypes';
import { SINGLE_ITEM_QUERY } from '../graphql/queries/SingleItemQuery';
import { ErrorMessage } from '../components/ErrorMessage';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

export class SingleItem extends React.Component<{ id: any }> {
  render() {
    const { id } = this.props;

    return (
      <Query<SingleItemQuery, SingleItemQueryVariables>
        query={SINGLE_ITEM_QUERY}
        variables={{ id }}
      >
        {({ error, data, loading }) => {
          if (error) {
            return <ErrorMessage error={error} />;
          }

          if (loading || !data) {
            return <p>Loading...</p>;
          }

          const { item } = data;

          if (!item) {
            return <p>No item found for {this.props.id}</p>;
          }

          return (
            <SingleItemStyles>
              <Head>
                <title>Sick Fits | {item.title}</title>
              </Head>
              <img src={item.largeImage} alt={item.title} />
              <div className="details">
                <h2>Viewing {item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}
