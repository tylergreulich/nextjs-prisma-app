import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { GetItemsQuery, ItemProps } from 'graphql/schemaTypes';
import styled from 'styled-components';
import { Item } from './Item';

export const GET_ITEMS_QUERY = gql`
  query GET_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

export class Items extends React.Component {
  render() {
    return (
      <Center>
        <Query<GetItemsQuery> query={GET_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) {
              return <p>Loading...</p>;
            }

            if (error) {
              return <p>Error: {error.message}</p>;
            }

            return (
              <ItemsList>
                {data!.items.map((item: ItemProps) => (
                  <Item {...item} key={item.id} />
                ))}
              </ItemsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}
