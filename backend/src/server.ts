import express, { Request, Response } from "express";

const app = express();

const SERVER_PORT: number = parseInt(String(process.env.SERVER_PORT));
const port: number = isNaN(SERVER_PORT) ? 3000 : SERVER_PORT;

app.listen(port, () => console.log(`Express is running on port ${port}!`));

app.get("/", (request: Request, response: Response) => {
  response.send("Hello Express!");
});
