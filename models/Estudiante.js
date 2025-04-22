const { DataTypes } = require('sequelize');
const db = require('../config/database');

class Estudiante {
    static async obtenerTodosEstudiantes() {
        try {
            const [estudiantes] = await db.query('SELECT * FROM estudiantes');
            return estudiantes;
        }
        catch (error) {
            console.error('Error al obtener informaccion de los estudiantes:', error);
            throw error;
        }
    }

    static async obtenerEstudiantePorId(id) {
        try {
            const [estudiantes] = await db.query('SELECT * FROM estudiantes WHERE id = ?',(id));
            return estudiantes[0]; // Retorna el primer estudiante encontrado
        }
        catch (error) {
            console.error('Error al obtener informacion del estudiante por id:', error);
            throw error;
        }
    }
}


















/*const Estudiante = sequelize.define('Estudiante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    matricula: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
{
    tableName: 'estudiante',
    timestamps: false

}
);

module.exports = Estudiante;*/