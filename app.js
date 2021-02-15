const express = require('express');
const app = express();
const sequelize = require('./database/db');
require('./database/asociations');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/programs', require('./routes/programs'));
app.use('/api/directors', require('./routes/directors'));
app.use('/api/announcers', require('./routes/announcers'));
app.use('/api/periods', require('./routes/periods'));
app.use('/api/advertisings', require('./routes/advertisings'));
app.use('/api/songs', require('./routes/songs'));

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    // Conectase a la base de datos
    // Force true: DROP TABLES
    sequelize.sync({ force: true}).then(() => {
        console.log("Nos hemos conectado a la base de datos");
    }).catch(error => {
        console.log('Se ha producido un error', error);
    })

});