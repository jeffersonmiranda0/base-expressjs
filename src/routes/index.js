import {Router} from "express";

const app = Router();

app.use((req, res, next) => {
    res.status(404).json({"message" : "Não sei o que está tentando fazer"});
})

export default app;