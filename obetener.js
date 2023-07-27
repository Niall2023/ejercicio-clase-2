function obtenerIndice (valor,array );{
    const indice = array.findIndex(numero => numero === valor)
    return indice
      
}
console.log(obtenerIndice(4,[1,2,3,4,5,6,7,5]))

