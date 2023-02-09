// Tipos de dados

//String
let nome = 'Bruno Mota'; // const

//Number
let idade = 30;

// Boolean
let solteiro = false; // true | false

// Array
let frutas = ['Goiaba', 'Laranja', 'Limão']
frutas[0] //goiaba

// Objetos
let carro1 = new Object();

let carro = {
    marca: 'Peugeout',
    modelo: '208',
    ano: '2007',
    motor: null // valor é nulo, não se sabe ainda o valor dele
}


// Function
let soma = function(a, b){ //mesma coisa
    return a + b;
}

function soma(a,b) { //mesma coisa
    return a + b;
}

soma(2,2);

// Arrow Function
 let soma = (a,b) => {
    return a + b; // se colocar chaves na arrow function, tem que colocar um return
 }

 let soma = (a, b) => a + b;
