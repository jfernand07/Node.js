import express from "express";
import bodyParser from "body-parser";
import sequelize from "../src/config.db/db.ts";
import authRoutes from "./routes/auth.ts";
import {
  getusers,
  createuser,
  getuser,
  updateuser,
  deleteduser,
} from "./controllers/user.controller.ts";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use("/auth", authRoutes);


app.get("/users", getusers);
app.post("/users", createuser);
app.get("/users/:user_id", getuser);
app.put("/users/:user_id", updateuser);
app.delete("/users/:user_id", deleteduser);

sequelize
  .sync({ alter: true }) 
  .then(() => {
    console.log(" Base de datos sincronizada correctamente");
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" Error al conectar con la base de datos:", err);
  });

export default app;
