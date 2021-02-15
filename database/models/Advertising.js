const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

// nombre horario duracion dia

class Advertising extends Model {}
Advertising.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un nombre para la publicidad"
            }
        },
    },
    duration: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese la duracion la publicidad"
            },
            isNumeric: {
                args: true,
                msg: "La duracion solo puede contener numeros"
            }
        },
    }    
}, 
{
    sequelize,
    modelName: "advertising",
    timestamps: false
});

module.exports = Advertising;