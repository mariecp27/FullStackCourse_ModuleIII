const fs = require('fs');

let arrJSON = JSON.parse(fs.readFileSync(__dirname + '/tareas.json', 'UTF-8'));

let BuscarEstados= (arr,estado)=>{
    if(arr.filter(elemnt=>elemnt.estado==estado).length>0){
        return arr.filter(elemnt=>elemnt["estado"]==estado)
    }else{
        return "No se ha encontrado ninguna coincidencia para el estado: "+estado
    }
 }

let menu= (opcion)=>{
    if(opcion==="listar"){
        console.log(arrJSON)
    }
    else if(opcion==="filtrar"){
        console.log(BuscarEstados(arrJSON,process.argv[3]))
    }
    else{
        console.log("Opción/instrucción NO válida.")
    }
}

menu(process.argv[2])