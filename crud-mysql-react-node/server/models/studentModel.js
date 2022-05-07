module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subjects:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    addedDate: {
      type: DataTypes.STRING, 
      //  type: DataTypes.DATE,  // date and time
      // type: DataTypes.DATEONLY,  // only date
    },

    // timestamps: true,
  });

  return Student;
};
