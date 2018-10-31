import * as React from 'react';

import { Mutation } from 'react-apollo';
import { InMemoryCache } from 'apollo-boost';
import { DELETE_ITEM_MUTATION } from 'graphql/mutations/DeleteItemMutation';
import { GET_ITEMS_QUERY } from 'graphql/queries/GetItemsQuery';
import {
  DeleteItemMutation,
  DeleteItemMutationVariables
} from '../graphql/schemaTypes';

import { ItemProps } from '../interfaces/Item.interface';

export class DeleteItem extends React.Component<{ id: string }> {
  update = (cache: InMemoryCache, payload: any) => {
    // read cache for items we want
    let data: any = cache.readQuery({
      query: GET_ITEMS_QUERY
    });

    // filter deleted item out of page
    data.items = data.items.filter(
      (item: ItemProps) => item.id !== payload.data.deleteItem.id
    );

    // put items back
    cache.writeQuery({
      query: GET_ITEMS_QUERY,
      data
    });
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
            onClick={async () => {
              if (confirm('Are you sure you want to delete this?')) {
                const res = await deleteItem();
                console.log(res);
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
