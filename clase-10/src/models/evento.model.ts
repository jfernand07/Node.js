import { DataTypes, Model } from "sequelize";
import sequelize from "../config.db/db.ts"; 
import { type Ievento } from "../interfaces/evento.interface.ts";


export class eventos
    extends Model
  implements Ievento
{
  public id!: number;
  public title!: string;
  public description!: string;
  public date!: string;
  public location!: string;
  public capacity!: number;
  public organizadorld!: string;
}

eventos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    organizadorld: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    sequelize, 
    tableName: "Eventos",
    timestamps: true, 
  }
);
