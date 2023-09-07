import express from "express";
import cors from "cors";
import env from "dotenv";
import Routes from "./Routes/index";
import path from 'path'

env.config();
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "/../public")))
const port = 8080;

Routes(app)

app.listen(port || 8080, () => console.log(`Serving is running ${port}`));
