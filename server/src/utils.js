const { Sequelize, DataTypes } = require('sequelize');

module.exports.paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
  // can pass in a function to calculate an item's cursor
  getCursor = () => null,
}) => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex = results.findIndex((item) => {
    // if an item has a `cursor` on it, use that, otherwise try to generate one
    let itemCursor = item.cursor ? item.cursor : getCursor(item);

    // if there's still not a cursor, return false by default
    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1 // don't let us overflow
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize),
        )
    : results.slice(0, pageSize);
};

module.exports.createStore = () => {
  const db = new Sequelize({
    dialect: 'sqlite',
    storage: './store.sqlite',
  });

  const users = db.define('user', {
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    name: DataTypes.STRING,
  });

  const taskAssignments = db.define('taskAssignment', {
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    name: DataTypes.STRING,
    frequency: DataTypes.STRING,
  });

  const completedTasks = db.define('completedTask', {
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    timeKey: DataTypes.STRING,
    taskAssignmentId: DataTypes.INTEGER,
  });

  users.hasMany(taskAssignments, {
    foreignKey: 'userId',
    as: 'assignedTasks',
  });
  taskAssignments.belongsTo(users);
  taskAssignments.hasMany(completedTasks, {
    foreignKey: 'taskAssignmentId',
  });
  completedTasks.belongsTo(taskAssignments);

  return { db, users, taskAssignments, completedTasks };
};
