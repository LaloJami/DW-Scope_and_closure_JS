const fruit = () =>{
    if (true){
        var fruits1 = "apple";
        var fruits2 = "banana";
        var fruits3 = "kiwi";
        console.log(fruits2);
        console.log(fruits3);
    }
    console.log(fruits1);
}
fruit();

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () =>{
    for (let i = 0; i < 10; i++){
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}
anotherFunction();