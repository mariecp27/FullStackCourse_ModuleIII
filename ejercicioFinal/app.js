let autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let autoFiltrado = this.autos.filter(function(auto){
            return auto.patente == patente;
        });
        if(autoFiltrado.length>0){
            return autoFiltrado[0];
        } else{
            return null;
        }
    },
    venderAuto: function(patente){
        if(this.buscarAuto(patente) != null){
            this.autos.map(function(auto){
                if(auto.patente == patente){
                    auto.vendido = true;
                }
            });
        }
    },
    autosParaLaVenta: function(){
        let paraVenta = this.autos.filter(function(auto){
            return auto.vendido == false;
        });
        return paraVenta;
    },
    autosNuevos: function(){
        let disponibles = this.autosParaLaVenta();
        let nuevos = disponibles.filter(function(auto){
            return auto.km < 100;
        });
        return nuevos;
    },
    listaDeVentas: function(){
        let precioVendidos = [];
        let autosVendidos = this.autos.filter(function(auto){
            return auto.vendido == true;
        });
        autosVendidos.forEach(function(auto){
            precioVendidos.push(auto.precio);
        });
        return precioVendidos;
    },
    totalDeVentas: function(){
        let precios = this.listaDeVentas();
        let total = precios.reduce(function(suma, precio){
            return suma + precio;
        }, 0);
        return total;
    },
    puedeComprar: function(auto, persona){
        let cuotaCarro = auto.precio / auto.cuotas;
        return (auto.precio <= persona.capacidadDePagoTotal && cuotaCarro <= persona.capacidadDePagoEnCuotas);
    },
    autosQuePuedeComprar: function(persona){
        let disponibles = this.autosParaLaVenta();
        let siPuedeComprar = this.puedeComprar;
        let paraCompra = disponibles.filter(function(auto){
            return siPuedeComprar(auto, persona);
        });
        return paraCompra;
    }
};

let unaPersona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
};

console.log(concesionaria.autosQuePuedeComprar(unaPersona));