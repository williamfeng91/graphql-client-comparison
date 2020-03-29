const {
  connectionFromArray,
  offsetToCursor,
  toGlobalId,
} = require('graphql-relay');

module.exports = {
  Query: {
    viewer: async () => {
      return {};
    },
  },
  Viewer: {
    users: async (_, { after, before, first, last }, { dataSources }) => {
      const users = await dataSources.userAPI.findAll();
      return connectionFromArray(users, {
        after,
        before,
        first,
        last,
      });
    },
    user: async (_, { id }, { dataSources }) => {
      return dataSources.userAPI.findById(id);
    },
  },
  User: {
    id: async (record) => {
      return toGlobalId('User', record.id);
    },
    assignedTasks: async (user, { after, before, first, last }) => {
      return connectionFromArray(user.assignedTasks, {
        after,
        before,
        first,
        last,
      });
    },
  },
  TaskAssignment: {
    id: async (record) => {
      return toGlobalId('TaskAssignment', record.id);
    },
    completedTasks: async (taskAssignment, { after, before, first, last }) => {
      return connectionFromArray(taskAssignment.completedTasks, {
        after,
        before,
        first,
        last,
      });
    },
  },
  CompletedTask: {
    id: async (record) => {
      return toGlobalId('CompletedTask', record.id);
    },
  },
  Mutation: {
    assignTask: async (_, { input }, { dataSources }) => {
      const newTaskAssignment = await dataSources.taskAssignmentAPI.create(
        input,
      );
      return {
        taskAssignmentEdge: {
          cursor: offsetToCursor(0),
          node: {
            ...newTaskAssignment,
            completedTasks: [],
          },
        },
      };
    },
    createCompletedTask: async (_, { input }, { dataSources }) => {
      const newCompletedTask = await dataSources.completedTaskAPI.create(input);
      return {
        completedTaskEdge: {
          cursor: offsetToCursor(0),
          node: newCompletedTask,
        },
      };
    },
    destroyCompletedTask: async (_, { input }, { dataSources }) => {
      const destroyedIds = await dataSources.completedTaskAPI.destroy(input);
      return {
        destroyedCompletedTaskIds: destroyedIds.map((id) =>
          toGlobalId('CompletedTask', id),
        ),
      };
    },
  },
};
