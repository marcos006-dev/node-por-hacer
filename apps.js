const { argv } = require('./config/yargs');

const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer.js');

// console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        // console.log('Crear por hacer');
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');
        let listado = getListado();
        // console.log(listado);
        for (let tarea of listado) {
            console.log('=====Por Hacer====');
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('===============');
        }
        break;

    case 'actualizar':
        // console.log('Actualiza una tarea por hacer');
        let actualizado = actualizar(argv.descripcion, argv.completado);

        console.log(actualizado);
        break;

    case 'borrar':
        // console.log('Borrar');
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no es reconocido');
        break;
}