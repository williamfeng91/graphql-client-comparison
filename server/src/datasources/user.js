const { DataSource } = require('apollo-datasource');

class UserAPI extends DataSource {
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

  async findAll() {
    const users = await this.store.users.findAll();
    return users;
  }

  async findById(userId) {
    const user = await this.store.users.findByPk(userId, {
      include: [
        {
          model: this.store.taskAssignments,
          as: 'assignedTasks',
          include: [
            {
              model: this.store.completedTasks,
              as: 'completedTasks',
            },
          ],
        },
      ],
    });
    return user;
  }
}

module.exports = UserAPI;
