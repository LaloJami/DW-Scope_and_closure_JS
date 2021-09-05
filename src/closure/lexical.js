const buildCount = (i) =>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    };
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

/*El ambito lexico son las funciones que se ejecutan utilizando 
la cadena del alcance(scope) donde estaba vigente en su momento */
