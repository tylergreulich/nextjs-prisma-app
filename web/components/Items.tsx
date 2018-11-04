import * as React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import { GET_ITEMS_QUERY } from '../graphql/queries/GetItemsQuery';
import { GetItemsQuery, GetItemsQueryVariables } from '../graphql/schemaTypes';
import { ItemProps } from '../interfaces/Item.interface';
import { Item } from './Item';
import { Pagination } from './Pagination';
import { perPage } from '../config';

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

export class Items extends React.Component<{ page: number }> {
  render() {
    const { page } = this.props;

    return (
      <Center>
        <Pagination page={page} />
        <Query<GetItemsQuery, GetItemsQueryVariables>
          query={GET_ITEMS_QUERY}
          variables={{ skip: page * perPage - perPage }}
        >
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
        <Pagination page={page} />
      </Center>
    );
  }
}
