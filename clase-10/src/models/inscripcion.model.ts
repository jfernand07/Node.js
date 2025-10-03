import { DataTypes, Model } from "sequelize";
import sequelize from "../config.db/db.ts"; 
import { type INInscripcion } from "../interfaces/inscripcion.interface.ts";


export class inscripcion
    extends Model
  implements INInscripcion
{
  public id!: number;
  public status!: string;
  public usuariold!: string;
  public eventold!: string;
}

inscripcion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    usuariold: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    eventold: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    sequelize, 
    tableName: "inscripcion",
    timestamps: true, 
  }
);
