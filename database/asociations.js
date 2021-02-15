const Period = require('./models/Period');
const Song = require('./models/Song');
const Advertising = require('./models/Advertising');
const Director = require('./models/Director');
const Program = require('./models/Program');
const Announcer = require('./models/Announcer');

// 1a1
// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
//User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });

// Añade una clave userId a la tabla addresses
//Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });

// 1aN
// Usuario va a tener muchos posts o publicaciones
// Se añade una clave userId a la tabla posts
//User.hasMany(Post, { as: "publicaciones", foreignKey: "autorId" });
// Se añade una clave userId a la tabla posts
//Post.belongsTo(User, { as: "autor" });

// NaN
// El usuario pertenezca a varias bandas
// Esto crear una nueva tabla en la base de datos llamada user_band
// user.addBand user.getBands...etc.
//User.belongsToMany(Band, { through: "user_band" });
//Band.belongsToMany(User, { through: "user_band"  });


//-----------------------------------------------------------------------------
//ASOCIACIONES

//UN DIRECTOR TIENE MUCHOS PROGRAMAS. 
Director.hasMany(Program,{as:'programs'});
//UN PROGRAMA LE PERTENECE A UN DIRECTOR.
Program.belongsTo(Director,{as:'director', foreignKey:'directorId'});

//UN LOCUTOR TIENE MUCHOS PROGRAMAS. UN PROGRAMA TIENE MUCHOS LOCUTORES
Announcer.belongsToMany(Program, {as:'programs', through: "announcer_program" });
Program.belongsToMany(Announcer, {as:'announcers', through: "announcer_program" });

//UN PROGRAMA TIENE MUCHOS PERIODOS. UN PERIODO PERTENECE A UN PROGRAMA
Program.hasMany(Period, { as: "periodos", foreignKey: "programaId" });
Period.belongsTo(Program, { as: "programa" });

//UNA CANCION TIENE MUCHOS PERIODOS. UN PERIODO TIENE MUCHAS CANCIONES
Song.belongsToMany(Period, {as:'periods', through: "song_period" });
Period.belongsToMany(Song, {as:'songs', through: "song_period" });

//UNA PUBLICIDAD TIENE MUCHOS PERIODOS, UN PERIODO TIENE MUCHAS PUBLICIDADES
Advertising.belongsToMany(Period, {as:'periods', through: "advertising_period" });
Period.belongsToMany(Advertising, {as:'advertisings', through: "advertising_period" });











