"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsToMany(models.Technology, {
        through: "project_technologies",
        foreignKey: "projectId",
      });
    }
  }
  Project.init(
    {
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      body: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
