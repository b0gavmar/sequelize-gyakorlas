import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/database.sqlite",
});

const Student = sequelize.define("students", {
  student_id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: VARCHAR(255),
    allowNull: false,
    validate: {
      min: 4,
      len: [4, 20],
    },
  },
  favorite_class: {
    type: VARCHAR(255),
    default: "Computer Science",
  },
  school_year: {
    type: INTEGER,
    allowNull: false,
  },
  has_language_examination: {
    type: TINYINT,
    default: true,
  }
});

export { Student }