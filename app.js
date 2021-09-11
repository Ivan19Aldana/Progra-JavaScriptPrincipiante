//object, representacion abstracta de un objeto real

console.log({"username" : "Ivan",
"score": 60.3});

//Variables

//Palabras claves var, let

var nameUser = "john";
let lastname = "carter";

//aca utilizamos la variable, para poder cambiar su valor, estariamos reasignando.
nameUser = "pepe";

//Const, constante, este al ser constante no puede alterarse, asi que no es una variable.
const PI = 3.1415;

console.log(nameUser)



//Operadores

//Podemos utilizar sumas, restas, multiplicacion, division, unir variables, etc.

let numberOne = 60;
let numberTwo = 100;

let resultUno = numberOne + numberTwo;

console.log(resultUno);

//Concatenacion, uniendo ambas.
let name = "Ivan";
let lastame = "Aldana";

let completeName = name + " " +lastame ;
console.log (completeName);

//Comparaciones con variables

let numeroUno = 100;
let numeroDos = 500;

let result = numeroUno > numeroDos;
console.log(result);

//ejemplo de password

let passwordDB = "pepe123"
let input = "pepe123"

let resultPassword = input == passwordDB;
console.log(resultPassword);

//CONDICIONALES

//Control de flujo utilizando if

let contraseña = "Ivancho789"
let identificar = "Ivancho145"

let resultContraseña = identificar == contraseña;

//If lo utilizaremos para determinar tal condicion, dependiendo del resultado que
 

//Condicion si es verdadero, contraseña correcta

if (resultContraseña === true){
    console.log ("Contraseña correcta");
}

//con else, caso contrario de la condicion que colocamos
else {
    console.log("Contraseña incorrecta");
}

//OTRO EJEMPLO SOBRE IF, ELSE 

let score = 70;

//Si score mayor a 70 mostrar esto
if (score> 30){
    console.log ("Practica mas");
}

//Caso contrario mostraras esto
else if (score > 15){
    console.log ("Vas mejorando");
}

//Si caso contrario de los dos anteriores, mostrara esto
else {
    console.log("Necesitar ver tutoriales para mejorar")
}



//AHORA SE MOSTRARA SOBRE SWITCH

let typeCard = "Tarjeta debito";

switch(typeCard){
    case "Tarjeta debito":
        console.log("Es una tarjeta de debito");
        break;

    case "Tarjeta credito":
        console.log("Esto es tarjeta de credito");
        break;
    default:
        console.log("Ninguna tarjeta");
}


//BUCLES

//Un bucle llamado while

//se va a repetir 50 veces
let count = 50;
while (count>0){
    console.log ("Hola mundo");
    count = count -1;
}

//For otro bucle
let names = ["Ivan","Mynor", "Felipe"];

for(let i= names.length - 1; i >= 0; i-- ){
    console.log(names[i]);
}

//Funciones

function greeting(person){
    console.log("Hola" + person);
}

greeting("Pancho");
greeting("Bolaños");
greeting("Jonas");

//Otro ejemplo de funciones

function add(n1, n2){
    console.log(n1 + n2);
}
add(3,2);
add(100, 300);

add(3, 2);
add(100, 200);
add(1000, 314134);