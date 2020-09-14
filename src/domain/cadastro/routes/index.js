import {Router} from "express";
import ClienteInclusao from "./../services/ClienteInclusao";

const app = Router();


app.post('/cliente', async (req, res) => {
    res.send(await ClienteInclusao.incluirRegistro(req.body)); 
});


export default app;