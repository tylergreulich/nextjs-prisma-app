import * as React from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import axios from 'axios';

import { Form } from './styles/Form';
import {
  CreateItemMutationVariables,
  CreateItemMutation
} from '../graphql/schemaTypes';
import {
  FormElementEvent,
  InputElementEvent,
  TextAreaOrInputElementEvent
} from '../interfaces/shared/FormEvents';
import { CreateItemState } from '../interfaces/CreateItem.interface';
import { ErrorMessage } from './ErrorMessage';
import { cloudinaryUrl } from '../config';

import { CREATE_ITEM_MUTATION } from '../graphql/mutations/CreateItemMutation';

export class CreateItem extends React.Component<{}, CreateItemState> {
  state: CreateItemState = {
    title: 'Cool shoes',
    description: 'I love those shoes',
    image: 'dog.jpg',
    largeImage: 'large-dog.jpg',
    price: 1000
  };

  sendFileData = async (files: FileList | null, fileData: FormData) => {
    if (files) {
      fileData.append('file', files[0]);
      fileData.append('upload_preset', 'sickfits');
      const { data }: any = await axios
        .post(cloudinaryUrl, fileData)
        .catch(err => console.log('ERR', err));

      this.setState({
        image: data.secure_url,
        largeImage: data.eager[0].secure_url
      });
    }
  };

  uploadFile = (event: InputElementEvent) => {
    const { files } = event.currentTarget;
    const fileData = new FormData();
    this.sendFileData(files, fileData);
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
    const { title, description, price, image } = this.state;

    return (
      <Mutation<CreateItemMutation, CreateItemMutationVariables>
        mutation={CREATE_ITEM_MUTATION}
        variables={this.state}
      >
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async (event: FormElementEvent) => {
              event.preventDefault();
              const { data }: any = await createItem();
              Router.push({
                pathname: '/item',
                query: { id: data.createItem.id }
              });
            }}
          >
            <ErrorMessage error={error} />
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
              {image && <img src={image} width="200" alt="Upload Preview" />}
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
