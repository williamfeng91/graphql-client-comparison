const { gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

const schema = fs.readFileSync(
  path.join(__dirname, '../../schema.graphql'),
  'utf8',
);

const typeDefs = gql(schema);

module.exports = typeDefs;
