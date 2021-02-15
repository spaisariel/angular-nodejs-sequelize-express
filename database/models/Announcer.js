const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Announcer extends Model {}
Announcer.init({
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un nombre"
            },
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            },
            len: {
                args: [3, 100],
                msg: "El nombre no puede tener mas de 100 letras"
            }
        },
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un DNI"
            },
            isNumeric: {
                args: true,
                msg: "El solo puede contener numeros"
            },
            len: {
                args: [8, 9],
                msg: "Ingrese un DNI valido"
            }
        },
    },
   
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: {
                args: true,
                msg: "El campo tiene que ser un correo valido"
            }
        }
    }
    
}, {
    sequelize,
    modelName: "announcer",
    timestamps: false
});

module.exports = Announcer;