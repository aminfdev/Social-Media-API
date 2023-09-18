"use strict";

import { Model, UUIDV4 } from "sequelize";

interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UserAttributes> implements UserAttributes {
    id!: string;
    first_name!: string;
    last_name!: string;
    username!: string;
    email!: string;
    password!: string;


    // static associate(models: any) {
    //   Users.belongsToMany(models.Project, {
    //     through: "ProjectAssignments",
    //   });
    // }


  }
  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
