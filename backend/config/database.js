import { Sequelize } from "sequelize";

const db = new Sequelize("note", "root","admin123", {
  host: "34.27.42.159",
  dialect: "mysql",
});

export default db;
