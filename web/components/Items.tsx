import * as React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import { GET_ITEMS_QUERY } from '../graphql/queries/GetItemsQuery';
import { GetItemsQuery } from '../graphql/schemaTypes';
import { ItemProps } from '../interfaces/Item.interface';
import { Item } from './Item';

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
