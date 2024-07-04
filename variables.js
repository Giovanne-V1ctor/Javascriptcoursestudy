/*por padrão do javascript coloca varáveis(ou qualquer outra coisa) 
primeiro letras minusculas seguido da primeira letra maiúscula
*/
//-----variables-----

console.log('hello world');

var firstName = 'Giovanne'; //declara uma variável em javascript
// let firstNaem2 = 'victor'; //declara tambem uma variavel, mas coloca ela na mesma linha

let firstNaem2;
firstNaem2 = 'victor'; //declara a variavel primeiro, e depois que coloca um valor nela

let message = 'hello';
message = 'world';

console.log(message);

/*QUIZ

whats is a variable? is a name storage for Data
how you declare a variable? with var or let
*/


//---- constant ----

/*let é para as variaveis que podem ser mudadas (é deixado para isso quando for declarar variáveis)
const é para variáveis que não podem ser mudadas
*/

const christmas_2024 = '25.12.2024';

//christmas_2024 = '26-12-2024';

console.log(christmas_2024);

/*outra convenção para const é usar todas as letras em maiúsculo e separado por underscore




QUIZ

whats is the purpose of constant? is to define data that could not be changed 
whats is the diference between variable and constant? variable define data that could be change or reassing later 
constant define data that could not be changed
*/



//---- primitive types -------

/* em javascript pode haver 2 tipos de variaveis, as do tipo primitivo e as referenciáveis
as do tipo primitivo são: string, number, BigInt, boolean, undefined, null e Symbol.
as referenciáveis são : objetos */


let favoriteFruit = 'strawberry'; //string
let favoriteIceCream = 'chocolate';
let favoriteProgrammingLanguage = 'Javascript';

let numberOfDonuts = 12; //number
let pi = 3.1415; //number decimal

let veryLargeNumber = 6584321684n; //BigInt

let loveCoding = true; //boolean

let favoriteColor;
console.log(favoriteColor);

favoriteFruit = null;

const uniqueKey = Symbol();

//--- reference type - object - (more complex)

let course = {
    name: 'Javascript for begginers',
    hours: 3
};
console.log(course);

/*QUIZ

what is a primitive type? is the fundamental values of data
what is the 7 primitive types of javascript? string, number, boolean, symbol, null, undefined, BigInt

*/


//------- dynamic typping ---------

/*javascript variaveis não são fixas em uma unica tipagem, podendo ser reassignadas nos outros tipos 
inicializar uma variavel com um tipo de data então assinar ela pra outro tipo*/

let primeiroName = 'Giovannevictor';
console.log(typeof primeiroName);

primeiroName = 100;
console.log(typeof primeiroName);

primeiroName = true;
console.log(typeof primeiroName);


//-------- objetos ---------
/* um objeto em javascript é um tipo de data fundamental que permite alocar valores chaves em pares, voce pode
utilizar o sintaxe literal com chaves e definir os pares chaves dentro*/

let curso = {
    name: 'javascript for begginers',
    hours: 3
};

/*console.log(curso.name);

curso.name = 'javascript fundamentals';
console.log(curso.name);

console.log(curso['name']);

curso['name'] = 'javascript 101';
console.log(curso['name']);
*/

let property = 'hours';
console.log(curso[property]);


// teste de commit