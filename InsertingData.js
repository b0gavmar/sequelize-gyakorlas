import { Student } from "./Initialization.js";

Student.sync({ alter: true }).then(() => {
  return Student.bulkCreate([
    {
      student_id,
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
