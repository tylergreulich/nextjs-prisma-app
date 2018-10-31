import gql from 'graphql-tag';

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
