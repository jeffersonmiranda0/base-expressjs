import {Router} from "express";
import Cadastro from "./../domain/cadastro/routes"

const app = Router();

app.use(Cadastro);

app.use((req, res, next) => {
    res.status(404).json({"message" : "Não sei o que está tentando fazer"});
});



export default app;