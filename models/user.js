module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      telegram: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
      timestamps: false,
    }
  );

  return Users;
};
