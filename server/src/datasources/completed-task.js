const { DataSource } = require('apollo-datasource');

class CompletedTaskAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context;
  }

  async create({ taskAssignmentId, timeKey }) {
    const newCompletedTask = await this.store.completedTasks.create({
      taskAssignmentId,
      timeKey,
    });
    return newCompletedTask;
  }

  async destroy({ taskAssignmentId, timeKey }) {
    const completedTasksToDestroy = await this.store.completedTasks.findAll({
      where: {
        taskAssignmentId,
        timeKey,
      },
    });
    const idsToDestroy = completedTasksToDestroy.map(({ id }) => id);
    await this.store.completedTasks.destroy({
      where: {
        taskAssignmentId,
        timeKey,
      },
    });
    return idsToDestroy;
  }
}

module.exports = CompletedTaskAPI;
