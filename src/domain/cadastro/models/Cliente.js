import {Model, DataTypes} from "sequelize";
import {sequelize, defaultModelConfig} from "./../../../config/ConnectionSequelize";

class Cliente extends Model{};

defaultModelConfig.modelName = 'Cliente';
defaultModelConfig.tableName = 'Cliente';
    // schema : '',
    // tableName : '',
    // modelName : '',

Cliente.init({
    idCliente : {
        primaryKey : true,
        autoIncrement : true,
        type : DataTypes.INTEGER(11),
        allowNull : false
    },
    nome: {
        allowNull : false,
        type: DataTypes.STRING(60),
    }
}, defaultModelConfig);

// Cliente.sync({force : true})


export default Cliente;