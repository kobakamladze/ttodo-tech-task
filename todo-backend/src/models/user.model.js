import { DataTypes } from "sequelize";

import sequelize from "../../db/db.js";

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  email: { type: DataTypes.STRING, unique: true },
});

export { User };
