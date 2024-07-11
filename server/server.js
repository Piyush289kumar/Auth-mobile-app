import express from "express";
import cors from "cors";
import { registerUser } from "./src/Controller/UserController.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/register", registerUser);

app.listen(PORT, () => {
  console.log(`Server is Live On : ${PORT}`);
});
