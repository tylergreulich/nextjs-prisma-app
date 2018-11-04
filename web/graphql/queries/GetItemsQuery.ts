import gql from 'graphql-tag';
import { perPage } from '../../config';

export const GET_ITEMS_QUERY = gql`
  query GET_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(skip: $skip, first: $first, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;
