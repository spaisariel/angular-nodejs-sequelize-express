const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

// nombre horario duracion dia

class Program extends Model {}
Program.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un nombre para el programa"
            }
        },
    },
    
schedule: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese un horario"
            },
            min: {
                args: 23,
                msg: "El horario no es valido"
            },
            max: {
                args: 0,
                msg: "El horario no es valido"
            }
        },
    },
    duration: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Ingrese la duracion del programa"
            },
            isNumeric: {
                args: true,
                msg: "La duracion solo puede contener numeros"
            }
        },
    },
    day: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Seleccione un dia"
            }           
            // ,equals: {
            //     args: ['Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
            //     msg: "El dia que ingreso es invalido"
            // }
        },
    }
    //,dayMonday:{type: DataTypes.BOOLEAN,allowNull:true}  ejemplo para usar con varios dias de la semana
    
}, 
{
    sequelize,
    modelName: "program",
    timestamps: false
});

module.exports = Program;