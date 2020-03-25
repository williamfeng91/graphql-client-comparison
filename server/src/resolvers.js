const { paginateResults } = require('./utils');

module.exports = {
  Query: {
    users: async (_, __, { dataSources }) => {
      return dataSources.userAPI.findAll();
    },
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userAPI.findById(id);
    },
  },
  Mutation: {
    assignTask: async (_, { input }, { dataSources }) => {
      return dataSources.taskAssignmentAPI.create(input);
    },
    createCompletedTask: async (_, { input }, { dataSources }) => {
      return dataSources.completedTaskAPI.create(input);
    },
    destroyCompletedTask: async (_, { input }, { dataSources }) => {
      return dataSources.completedTaskAPI.destroy(input);
    },
  },
};
