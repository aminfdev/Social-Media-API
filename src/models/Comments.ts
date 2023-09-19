"use strict";

import { Model } from "sequelize";

interface CommentsAttributes {
  id: number;
  body: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Comments extends Model<CommentsAttributes> implements CommentsAttributes {
    id!: number;
    body!: string;
  }
  Comments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
