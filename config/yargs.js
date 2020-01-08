// Configuracion de porpiedad de comandos
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    c: 'c',
    desc: 'Marca como completado o pendiente la tarea',
};


// Configuracion de comandos
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion,
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado,
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion,
    })
    .help()
    .argv


module.exports = {
    argv
}