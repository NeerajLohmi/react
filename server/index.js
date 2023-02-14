import express from "express";
import dotenv from "dotenv";
import Routes from "./Routes/route.js";

import cors from "cors";
import Connection from "./Database/db.js";

const app = express();

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
app.use(express.json());

app.use(cors());
app.use("/", Routes);
const Port = "5005";
Connection(username, password);
app.listen(Port, (req, res) => {
  console.log(`port is successfulyy running on Port ${Port}`);
});
