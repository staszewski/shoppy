const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

let items = [
  { name: 'Item1', id: '1', price: '300'},
  { name: 'Item2', id: '2', price: '1300'}
]

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    currency: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    item: {
      type: ItemType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(items, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});