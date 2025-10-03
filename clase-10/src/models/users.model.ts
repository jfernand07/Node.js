import { DataTypes, Model } from "sequelize";
import sequelize from "../config.db/db.ts"; 
import { type IUser } from "../interfaces/user.interface.ts";


export class Users
    extends Model
  implements IUser
{
  public id!: number;
  public name!: string;
  public last_name!: string;
  public email!: string;
  public password!: string;
  public role!: string;
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(255), 
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      allowNull: false,
      defaultValue: "user",
    },
  },
  {
    sequelize, 
    tableName: "users",
    timestamps: true, 
  }
);


