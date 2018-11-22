import gql from 'graphql-tag';

export const GET_ITEMS_QUERY = gql`
  query GET_ITEMS_QUERY($skip: Int = 0, $first: Int = ${process.env.PER_PAGE}) {
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
