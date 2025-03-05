import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Note = db.define("note", {
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  },
  {
    timestamps: true,
  }
);

db.sync().then(() => console.log("Database tersinkron"));

export default Note;
