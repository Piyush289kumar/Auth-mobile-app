import express from "express";
import cors from "cors";
import { registerUser } from "./src/Controller/UserController.js";
import mongoose from "mongoose";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://piyushraikwar289:piyush289@cluster0.5lpcsrr.mongodb.net/auth-mobile-app"
  )
  .then(() => console.log("Database is Connected"))
  .catch(() => console.log("Database is not Connected"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/register", registerUser);

app.listen(PORT, () => {
  console.log(`Server is Live On : ${PORT}`);
});
