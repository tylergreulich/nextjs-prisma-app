import * as React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
// import axios from 'axios';

import { Form } from './styles/Form';
import {
  CreateItemMutationVariables,
  CreateItemMutation
} from '../graphql/schemaTypes';
import { ErrorMesssage } from './ErrorMessage';
import { cloudinaryUrl } from '../config';

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

  handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = event.currentTarget;

    const val = type === 'number' ? parseFloat(value) : value;

    this.setState({
      ...this.state,
      [name]: val
    });
  };

  uploadFile = async (event: React.FormEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;

    const data = new FormData();
    data.append('file', files![0]);
    data.append('upload_preset', 'sickfits');

    const res = await fetch(cloudinaryUrl, {
      method: 'POST',
      body: data
    });

    const file = await res.json();
    console.log(file);
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
              <label htmlFor="file">Image</label>
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an image"
                required={true}
                onChange={this.uploadFile}
              />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required={true}
                value={title}
                onChange={this.handleChange}
              />
              <label htmlFor="price">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                required={true}
                value={price}
                onChange={this.handleChange}
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter A Description"
                required={true}
                value={description}
                onChange={this.handleChange}
              />
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}


