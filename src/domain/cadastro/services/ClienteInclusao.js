import Cliente from "./../models/Cliente";

export default {
    incluirRegistro : async (dados) => {
        const {nome} = dados;

        const localizaRegistro = await Cliente.findOne({
            where : {
                nome
            }
        });
        
        if(localizaRegistro){
            return localizaRegistro;
        }

        const retorno = await Cliente.create({nome});

        return retorno;
    }
}