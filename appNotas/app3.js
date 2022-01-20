let archivoDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];

let tareas = archivoDeTareas.leerArchivo();

switch(accion){
    case 'Listar':
        tareas.forEach(
            (tarea, index) => {
            console.log((index + 1) + '.' + tarea.titulo + ' - ' + tarea.estado);
        });
        break;
    case 'Filtrar':
        let estado = process.argv[3];
        let filtradas = archivoDeTareas.fltrarPorEstado(estado);
        filtradas.map( (tarea, indice) =>
            console.log((indice + 1) + '-' + tarea.titulo)
        );
        break;
    case 'Crear':
        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: 'Pendiente'
        }
        archivoDeTareas.guardarTareas(tarea);
    break;
    case 'Actualizar':
        let indiceTarea = process.argv[3];
        let nuevoEstado = process.argv[4];
        archivoDeTareas.actualizarTarea(indiceTarea, nuevoEstado);
        break;
    default:
        console.log('No entiendo qué quieres hacer / No sé realizar la operación.')
}