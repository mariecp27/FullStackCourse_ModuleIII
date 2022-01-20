// Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto, seguramente nos convenga usar el módulo nativo FS.

const fs = require('fs');

let lecturaTareas = fs.readFileSync(__dirname + '/tareas.json', 'UTF-8');

// Mostrar el listado de tareas existente por terminal. Para esto, seguramente tengamos que guardar el contenido del archivo tareas.json en una variable y convertir la misma a un dato tipo array.

let arrayTareas = JSON.parse(lecturaTareas);


function tareasDependiendo(tareas, estado){
    console.log('TAREAS ' + estado.toUpperCase() + ':');
    for (let i = 0; i < tareas.length; i++){
        if(tareas[i].estado == estado){
            console.log(tareas[i].titulo);
        }
    }
}

let accion = process.argv[2];


switch(accion){
    case 'Listar':
        console.log('LISTA DE TAREAS:');
        console.log(arrayTareas);
        break;
    case 'Terminado':
        tareasDependiendo(arrayTareas, accion);
        break;
    case 'Pendiente':
        tareasDependiendo(arrayTareas, accion);
        break;
    case 'En progreso':
        tareasDependiendo(arrayTareas, accion);
        break;
    case undefined:
        console.log('Atención - Tienes que pasar una acción.');
        break;
    default:
        console('No entiendo qué quieres hacer / No sé realizar la operación.')
}