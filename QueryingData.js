import {Student, sequelize} from "./Initialization.js";

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
      console.log(element.toJSON());
    });
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });
/*
  Student.sync({alter:true})
  .then(()=>{
    return Student.findAll({
        attributes: [
            [sequelize.fn("SUM", sequelize.col("name").Count()), "num_students"],
        ],
        group: "school_year"
    });
  })
  .then((data) => {
    data.forEach((element) => {
      console.log(element.toJSON());
    });
  })
  .catch((err) => {
    console.log(`Error: ${err.message}`);
  });*/