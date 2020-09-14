import express from 'express';
import cors from "cors";
import http from "http";
import routes from "./routes";

const app = express();
const port = 3000;
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(port, () => {
    console.log('EXECUTOU', port);
})