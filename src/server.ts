import express, { json } from "express";

const app = express();
app.use(json);

app.listen(3333, () => console.log("Server ir running at port 3333"));
