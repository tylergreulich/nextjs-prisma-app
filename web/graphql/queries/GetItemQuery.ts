import gql from 'graphql-tag'

export const GET_ITEM_QUERY = gql`
  query GET_ITEM_QUERY($id: ID!) {
    item(id: $id) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;
