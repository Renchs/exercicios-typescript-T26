function criaObjeto(data: string) {

    const formatedData = data.split("/", 3)

    const objectData = {
        dia: formatedData[0],
        mes: formatedData[1],
        ano: formatedData[2]
    };
    
    return objectData;
}
module.exports = criaObjeto;