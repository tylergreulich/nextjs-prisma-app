import * as React from 'react';
import { Mutation, Query, MutationFn } from 'react-apollo';
import { Form } from './styles/Form';
import {
  CreateItemMutation,
  CreateItemMutationVariables,
  SingleItemQuery,
  SingleItemQueryVariables
} from '../graphql/schemaTypes';
import { UpdateItemProps } from '../interfaces/UpdateItem.interface';
import { UPDATE_ITEM_MUTATION } from 'graphql/mutations/UpdateItemMutation';
import { SINGLE_ITEM_QUERY } from 'graphql/queries/SingleItemQuery';
import {
  TextAreaOrInputElementEvent,
  FormElementEvent
} from '../interfaces/shared/FormEvents';
import { ErrorMessage } from './ErrorMessage';

export class UpdateItem extends React.Component<UpdateItemProps> {
  state = {};

  updateItem = async (
    event: FormElementEvent,
    updateItemMutation: MutationFn
  ) => {
    event.preventDefault();
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });

    console.log(res);
  };

  handleChange = (event: TextAreaOrInputElementEvent) => {
    const { name, type, value } = event.currentTarget;

    const val = type === 'number' ? parseFloat(value) : value;

    this.setState({
      ...this.state,
      [name]: val
    });
  };

  render() {
    const { id } = this.props;

    return (
      <Query<SingleItemQuery, SingleItemQueryVariables>
        query={SINGLE_ITEM_QUERY}
        variables={{ id }}
      >
        {({ data, loading }) => {
          if (loading || !data) {
            return <p>Loading...</p>;
          }

          if (!data.item) {
            return <p>No item found for {id}</p>;
          }

          return (
            <Mutation<CreateItemMutation, CreateItemMutationVariables>
              mutation={UPDATE_ITEM_MUTATION}
            >
              {(updateItem, { loading, error }) => (
                <Form
                  onSubmit={(event: FormElementEvent) =>
                    this.updateItem(event, updateItem)
                  }
                >
                  <ErrorMessage error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title"
                      required={true}
                      defaultValue={data.item.title}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="Price"
                      required={true}
                      defaultValue={data.item.price.toString()}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Enter A Description"
                      required={true}
                      defaultValue={data.item.description}
                      onChange={this.handleChange}
                    />
                    <button type="submit">
                      Sav
                      {loading ? 'ing' : 'e'} Changes
                    </button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}
