const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { createStore } = require('./utils');

const CompletedTaskAPI = require('./datasources/completed-task');
const TaskAssignmentAPI = require('./datasources/task-assignment');
const UserAPI = require('./datasources/user');

// creates a sequelize connection once. NOT for every request
const store = createStore();

// set up any dataSources our resolvers need
const dataSources = () => ({
  completedTaskAPI: new CompletedTaskAPI({ store }),
  taskAssignmentAPI: new TaskAssignmentAPI({ store }),
  userAPI: new UserAPI({ store }),
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  introspection: true,
  playground: true,
});

store.db.sync().then(() => {
  server.listen({ port: process.env.PORT || 9000 }).then(({ url }) => {
    console.log(`🚀 app running at ${url}`);
  });
});
