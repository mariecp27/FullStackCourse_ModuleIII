function dividir(n1, n2){
    if(n2 == 0){
        return 'No se puede dividir por cero';
    } else{
        return n1 + ' / ' + n2 + ' = ' + (n1 / n2);
    }
}

module.exports = dividir;