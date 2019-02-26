import { gql } from "apollo-boost";

const getItemsQuery = gql`
  {
    items {
      name
      id
      description
      price
      image
      category
    }
  }
`;

export { getItemsQuery };
