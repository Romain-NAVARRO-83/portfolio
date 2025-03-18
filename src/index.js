import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import db from "../models/index.js";
import mainController from "./controllers/mainController.js";

const { sequelize } = db;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", mainController.homePage);
app.get("/projets/:id", mainController.projectPage);
const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("Database connected");
  // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
  // console.log(`Server running on port ${PORT}`);
});
