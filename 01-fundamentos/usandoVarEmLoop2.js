const funcs = []

for (let index = 0; index < 10; index++) {
    funcs.push(function(){
        console.log(index)
    });
}

funcs[2]() //Retorna 10 pois var não tme escopo de funcao
funcs[8]() //Retorna 10 pois var não tme escopo de funcao