const {Sequelize} = require('sequelize');
require('dotenv').config();

//Configuracion de la base de datos
const sequelize= new Sequelize( 
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

//Validar la conexion a la base de datos
sequelize.authenticate({force:true})
        .then(()=>console.log('Conexion exitosa'))
        .catch(err => console.error('Error en la conexion',err));

module.exports = sequelize;