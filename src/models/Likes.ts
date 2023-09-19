"use strict";

import { Model } from "sequelize";

interface LikesAttributes {
  id: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Likes extends Model<LikesAttributes> implements LikesAttributes {
    id!: number;
  }
  Likes.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Likes",
    }
  );
  return Likes;
};
