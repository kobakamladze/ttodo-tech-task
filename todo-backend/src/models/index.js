import User from "./user.model.js";
import Todo from "./todo.model.js";
import { DataTypes } from "sequelize";

User.hasMany(Todo);
Todo.belongsTo(User, {
  foreignKey: { name: "userId", type: DataTypes.INTEGER },
});

export default { User, Todo };
