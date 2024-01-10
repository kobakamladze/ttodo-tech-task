import { config } from "dotenv";
import { Sequelize } from "sequelize";

config();

export default new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
  }
);
