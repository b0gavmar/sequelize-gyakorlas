import { Student } from "./Initialization.js";

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
      console.log(element.toJSON());
    });
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });
