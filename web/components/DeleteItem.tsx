import * as React from 'react';

import { Mutation } from 'react-apollo';
import { InMemoryCache } from 'apollo-boost';
import { DELETE_ITEM_MUTATION } from '../graphql/mutations/DeleteItemMutation';
import { GET_ITEMS_QUERY } from '../graphql/queries/GetItemsQuery';
import {
  DeleteItemMutation,
  DeleteItemMutationVariables
} from '../graphql/schemaTypes';

import { ItemProps } from 'interfaces/shared/Item.interface';

export class DeleteItem extends React.Component<{ id: string }> {
  update = (cache: InMemoryCache, payload: any) => {
    const data: any = cache.readQuery({ query: GET_ITEMS_QUERY });
    console.log(data, payload);
    data.items = data.items.filter(
      (item: ItemProps) => item.id !== payload.data.deleteItem.id
    );

    cache.writeQuery({ query: GET_ITEMS_QUERY, data });
  };

  render() {
    const { id } = this.props;

    return (
      <Mutation<DeleteItemMutation, DeleteItemMutationVariables>
        mutation={DELETE_ITEM_MUTATION}
        variables={{ id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this?')) {
                deleteItem().catch(err => alert(err.message));
              }
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}
