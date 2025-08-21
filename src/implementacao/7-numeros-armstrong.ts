function numerosArmstrong(numero: number) {
    const digitos = numero.toString().length;
    const arrayNum = numero.toString().split("").map(Number);

    const resultado = arrayNum.reduce((acc, valorAtual) => acc + valorAtual ** digitos)

    if (resultado == numero){
       return "Este eh um numero de Armstrong!"
    }
    
    return "Este nao eh um numero de Armstrong!"
    
}
module.exports = numerosArmstrong;