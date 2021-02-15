const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');



class Period extends Model { }
Period.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {msg: "Ingrese un nombre para el periodo"}
        }
    },
    isAdvertising: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: {msg: "Ingrese si el bloque es para publicidad"}
        }
    }
},
{
    sequelize,
    modelName: "period",
    timestamps: false
}
);
module.exports = Period;