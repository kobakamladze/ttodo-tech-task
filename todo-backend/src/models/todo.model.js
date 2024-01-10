import { DataTypes } from "sequelize";

import sequelize from "../../db/db.js";
import { User } from "./user.model.js";

const Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: { model: User, key: "id" },
    allowNull: false,
    onDelete: "CASCADE",
  },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: true },
  status: { type: DataTypes.STRING, allowNull: false },
});

export { Todo };
