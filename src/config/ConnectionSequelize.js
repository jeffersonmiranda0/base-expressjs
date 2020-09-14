import Sequelize from "sequelize";

const sequelize = new Sequelize({
  dialect: 'mysql',
  dialectOptions: { decimalNumbers: true },
//   operatorsAliases: false,
  timezone        : '-03:00',
  logging: console.log,
  benchmark: true,
  // host: dbConfig.HOST,
  // port: dbConfig.PORT,
  // username: dbConfig.USER,
  // password: dbConfig.PASSWORD,
  // database: dbConfig.DB,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
    acquire: 30000,
  },
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
  },
  replication: {
    write: {
      host: "127.0.0.1",
      port: "3306",
      username: "teste",
      password: "teste123",
      database: "teste"
    },
    read: [{
        host: "127.0.0.1",
        port: "3306",
        username: "teste",
        password: "teste123",
        database: "teste"
    }],
  }
});

sequelize.dialect.supports.schemas = true;


const defaultModelConfig = {
    sequelize,
    schemaDelimiter : '',
    freezeTableName : true,
    underscored: false,
    timestamps: false,
    whereCollection: null,
    operatorsAliases: false
    // schema : '',
    // tableName : '',
    // modelName : '',
}

// console.log(defaultModelConfig);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = {
    db,
    sequelize,
    defaultModelConfig
}