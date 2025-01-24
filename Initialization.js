import Sequelize from "sequelize";

const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/database.sqlite",
});

const Student = sequelize.define("students", {
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      min: 4,
      len: [4, 20],
    },
  },
  favorite_class: {
    type: DataTypes.STRING(255),
    default: "Computer Science",
  },
  school_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  has_language_examination: {
    type: DataTypes.TINYINT,
    default: true,
  },
});

Student.sync({ alter: true, force: true }).then(() => {
  return Student.bulkCreate([
    {
      student_id: 1,
      name: "Béla",
      favorite_class: "Matek",
      school_year: 12,
      has_language_examination: true,
    },
    {
      student_id: 2,
      name: "Anna",
      favorite_class: "Irodalom",
      school_year: 10,
      has_language_examination: false,
    },
    {
      student_id: 3,
      name: "Gábor",
      favorite_class: "Fizika",
      school_year: 11,
      has_language_examination: true,
    },
    {
      student_id: 4,
      name: "Katalin",
      favorite_class: "Történelem",
      school_year: 9,
      has_language_examination: false,
    },
    {
      student_id: 5,
      name: "Péter",
      favorite_class: "Biológia",
      school_year: 12,
      has_language_examination: true,
    },
    {
      student_id: 6,
      name: "Zsófia",
      favorite_class: "Kémia",
      school_year: 10,
      has_language_examination: true,
    },
  ]);
});

export {sequelize, Student};
