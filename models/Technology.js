"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Technology extends Model {
    static associate(models) {
      Technology.belongsToMany(models.Project, {
        through: "project_technologies",
        foreignKey: "technologyId",
      });
    }
  }
  Technology.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Technology",
    }
  );
  return Technology;
};
