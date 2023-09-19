"use strict";

import { Model, UUIDV4 } from "sequelize";

interface UsersAttributes {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Users extends Model<UsersAttributes> implements UsersAttributes {
    id!: string;
    first_name!: string;
    last_name!: string;
    email!: string;
    password!: string;

    static associate(models: any) {
      Users.hasMany(models.Posts, {
        onDelete: "cascade",
      });
      Users.hasMany(models.Likes, {
        onDelete: "cascade",
      });
      Users.hasMany(models.Comments, {
        onDelete: "cascade",
      });
    }
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
