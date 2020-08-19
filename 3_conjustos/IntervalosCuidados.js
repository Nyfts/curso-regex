const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g));


console.log(texto.match(/[A-z]/g)); // Intervalo usa a ordem da tabela ASCII

// tem q respeitar a ordem da tabela UNICODE

// console.log(texto.match(/[a-Z]/g)); 