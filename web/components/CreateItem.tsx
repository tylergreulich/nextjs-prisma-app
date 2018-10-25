import * as React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import { Form } from './styles/Form';
import {
  CreateItemMutationVariables,
  CreateItemMutation
} from '../graphql/schemaTypes';
import { ErrorMesssage } from './ErrorMessage';

interface CreateItemState {
  title: string;
  description: string;
  image: string;
  largeImage: string;
  price: number;
}

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
    $price: Int!
  ) {
    createItem(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
      price: $price
    ) {
      id
    }
  }
`;

export class CreateItem extends React.Component<{}, CreateItemState> {
  state: CreateItemState = {
    title: 'Cool shoes',
    description: 'I love those shoes',
    image: 'dog.jpg',
    largeImage: 'large-dog.jpg',
    price: 1000
  };

  onChangeHandler = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = event.currentTarget;

    const val = type === 'number' ? parseFloat(value) : value;

    this.setState({
      ...this.state,
      [name]: val
    });
  };

  render() {
    const { title, description, price } = this.state;

    return (
      <Mutation<CreateItemMutation, CreateItemMutationVariables>
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
      >
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const { data }: any = await createItem();
              console.log(data);
              Router.push({
                pathname: '/item',
                query: { id: data.createItem.id }
              });
            }}
          >
            <ErrorMesssage error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required={true}
                value={title}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                required={true}
                value={price}
                onChange={this.onChangeHandler}
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter A Description"
                required={true}
                value={description}
                onChange={this.onChangeHandler}
              />
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
