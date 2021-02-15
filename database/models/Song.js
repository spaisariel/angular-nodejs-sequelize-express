const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');


class Song extends Model {}
Song.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un nombre para la publicidad"
            }
        },
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un autor para la publicidad"
            }
        },
    },
    duration: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese la duracion la publicidad minutos"
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
    modelName: "song",
    timestamps: false
});

module.exports = Song;