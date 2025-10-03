import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME! ,
  process.env.DB_USER! ,
  process.env.DB_PASS!, 
  {
    host: process.env.DB_HOST! ,
    port: Number(process.env.DB_PORT!),
    dialect: "postgres",
    logging: false,
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado a PostgreSQL");
  } catch (error) {
    console.error(" Error al conectar a PostgreSQL:", error);
  }
})();

export default sequelize;

