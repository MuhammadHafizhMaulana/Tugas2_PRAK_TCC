import express from "express";
import cors from "cors";
import noteRoute from "./routes/noteRoute.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(noteRoute);

app.listen(5000, () => console.log("server terhubung"));
