const graphql = require('graphql');
const _ = require('lodash');
const Item = require('../models/item');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    name: {
      type: GraphQLString
    },
    id: {
      type: GraphQLID
    },
    description: {
      type: GraphQLString
    },
    price: {
      type: GraphQLInt
    },
    image: {
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
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return Item.findById(args.id);
      }
    },
    items: {
      type: new GraphQLList(ItemType),
      resolve(parent, args) {
        return Item.find({})
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addItem: {
      type: ItemType,
      args: {
        name: {
          type: GraphQLString
        },
        id: {
          type: GraphQLID
        },
        description: {
          type: GraphQLString
        },
        price: {
          type: GraphQLInt
        },
        image: {
          type: GraphQLString
        },
        category: {
          type: GraphQLString
        }
      },
      resolve(parents, args) {
        let item = new Item({
          name: args.name,
          id: args.id,
          description: args.description,
          price: args.price,
          image: args.image,
          category: args.category
        });
        return item.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});