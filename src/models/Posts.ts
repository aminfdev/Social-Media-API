"use strict";

import { Model } from "sequelize";

interface PostsAttributes {
  id: number;
  title: string;
  body: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Posts extends Model<PostsAttributes> implements PostsAttributes {
    id!: number;
    title!: string;
    body!: string;

    static associate(models: any) {
      Posts.hasMany(models.Likes, {
        onDelete: "cascade",
      });
      Posts.hasMany(models.Comments, {
        onDelete: "cascade",
      });
    }
  }

  Posts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
