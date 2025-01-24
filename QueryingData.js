import { Student, sequelize } from "./Initialization.js";

//elso
Student.sync({ alter: true })
  .then(() => {
    return Student.findAll({
      where: {
        [Op.or]: {
          favorute_class: "Computer Science",
          has_language_examination: true,
        },
      },
    });
  })
  .then((data) => {
    data.forEach((element) => {
      //console.log(element.toJSON());
      console.log(
        "Diákok nevei:",
        studentsQuery.map((student) => student.name)
      );
    });
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });

//masodik
Student.sync({ alter: true })
  .then(() => {
    return Student.findAll({
      attributes: [
        "school_year",
        [Sequelize.fn("COUNT", Sequelize.col("student_id")), "num_students"],
      ],
      group: ["school_year"],
    });
  })
  .then((data) => {
    data.forEach((element) => {
      //console.log(element.toJSON());
      onsole.log(
        `Évfolyam: ${count.school_year}, Tanulók száma: ${count.get(
          "num_students"
        )}`
      );
    });
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });
